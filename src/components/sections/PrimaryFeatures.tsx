"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { Fragment, useEffect, useRef, useState } from "react";

import CircleBackground from "~/components/phone/CircleBackground";
import Container from "~/components/layout/Container";
import DeviceNotificationIcon from "~/components/icons/DeviceNotificationIcon";
import DeviceTouchIcon from "~/components/icons/DeviceTouchIcon";
import DeviceUserIcon from "~/components/icons/DeviceUserIcon";
import InvestScreen from "~/components/phone/screens/InvestScreen";
import InviteScreen from "~/components/phone/screens/InviteScreen";
import PhoneFrame from "~/components/phone/PhoneFrame";
import StocksScreen from "~/components/phone/screens/StockScreen";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { useDebouncedCallback } from "use-debounce";

const features = [
  {
    name: "Invite friends for better returns",
    description:
      "For every friend you invite to Pocket, you get insider notifications 5 seconds sooner. And it’s 10 seconds if you invite an insider.",
    icon: DeviceUserIcon,
    screen: InviteScreen,
  },
  {
    name: "Notifications on stock dips",
    description:
      "Get a push notification every time we find out something that’s going to lower the share price on your holdings so you can sell before the information hits the public markets.",
    icon: DeviceNotificationIcon,
    screen: StocksScreen,
  },
  {
    name: "Invest what you want",
    description:
      "We hide your stock purchases behind thousands of anonymous trading accounts, so suspicious activity can never be traced back to you.",
    icon: DeviceTouchIcon,
    screen: InvestScreen,
  },
];

const usePrevious = (value: number) => {
  const ref = useRef<number>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

const FeaturesDesktop: React.FC = () => {
  let [changeCount, setChangeCount] = useState(0);
  let [selectedIndex, setSelectedIndex] = useState(0);
  let prevIndex = usePrevious(selectedIndex);
  let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex;

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex);
      setChangeCount((changeCount) => changeCount + 1);
    },
    100,
    { leading: true }
  );

  return (
    <Tab.Group
      as="div"
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <Tab.List className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl transition-colors hover:bg-neutral-800/30"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-neutral-800"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-8">
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 text-lg font-semibold text-neutral-100">
                <Tab className="text-left [&:not(:focus-visible)]:focus:outline-none">
                  <span className="absolute inset-0 rounded-2xl" />
                  {feature.name}
                </Tab>
              </h3>
              <p className="mt-2 text-sm text-neutral-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </Tab.List>
      <div className="relative col-span-6">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleBackground color="#13B5C8" className="animate-spin-slower" />
        </div>
        <PhoneFrame className="z-10 mx-auto w-full max-w-[366px]">
          <Tab.Panels as={Fragment}>
            <AnimatePresence
              initial={false}
              custom={{ isForwards, changeCount }}
            >
              {features.map((feature, featureIndex) =>
                selectedIndex === featureIndex ? (
                  <Tab.Panel
                    static
                    key={feature.name + changeCount}
                    className="col-start-1 row-start-1 flex focus:outline-offset-[32px] [&:not(:focus-visible)]:focus:outline-none"
                  >
                    <feature.screen
                      animated
                      custom={{ isForwards, changeCount }}
                    />
                  </Tab.Panel>
                ) : null
              )}
            </AnimatePresence>
          </Tab.Panels>
        </PhoneFrame>
      </div>
    </Tab.Group>
  );
};

const FeaturesMobile: React.FC = () => {
  let [activeIndex, setActiveIndex] = useState(0);
  let slideContainerRef = useRef<any>(null);
  let slideRefs = useRef<any>([]);

  useEffect(() => {
    if (!slideContainerRef.current) {
      return;
    }

    let observer = new window.IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            setActiveIndex(
              slideRefs.current.indexOf(entry.target as HTMLInputElement)
            );
            break;
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      }
    );

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide);
      }
    }

    return () => {
      observer.disconnect();
    };
  }, [slideContainerRef, slideRefs]);

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => (slideRefs.current[featureIndex] = ref)}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="relative transform overflow-hidden rounded-2xl bg-neutral-800 px-5 py-6">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleBackground
                  color="#13B5C8"
                  className={featureIndex % 2 === 1 ? "rotate-180" : undefined}
                />
              </div>
              <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
                <feature.screen />
              </PhoneFrame>
              <div className="absolute inset-x-0 bottom-0 bg-neutral-800/95 p-6 backdrop-blur sm:p-10">
                <feature.icon className="h-8 w-8" />
                <h3 className="mt-6 text-sm font-semibold text-neutral-100 sm:text-lg">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-neutral-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              "relative h-0.5 w-4 rounded-full",
              featureIndex === activeIndex ? "bg-neutral-300" : "bg-neutral-500"
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: "nearest",
                inline: "nearest",
              });
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  );
};

const PrimaryFeatures: React.FC = () => {
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="bg-neutral-900 py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-violet-400">
            Instant, Real-time Alerts
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-100 sm:text-4xl">
            Never Miss a Trading Opportunity
          </p>
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            Get ahead in trading with our reliable and efficient alert system,
            delivering instant real-time notifications to ensure you never miss
            an opportunity. Stay informed and seize every trading opportunity
            with ease.
          </p>
        </div>
      </div>
      <div className="mt-16 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  );
};

export default PrimaryFeatures;
