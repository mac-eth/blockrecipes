import Container from "~/components/layout/Container";
import DeviceArrowIcon from "~/components/icons/DeviceArrowIcon";
import DeviceCardsIcon from "~/components/icons/DeviceCardsIcon";
import DeviceChartIcon from "~/components/icons/DeviceChartIcon";
import DeviceClockIcon from "~/components/icons/DeviceClockIcon";
import DeviceListIcon from "~/components/icons/DeviceListIcon";
import DeviceLockIcon from "~/components/icons/DeviceLockIcon";
import React from "react";

const features = [
  {
    name: "Invest any amount",
    description:
      "Whether it’s $1 or $1,000,000, we can put your money to work for you.",
    icon: DeviceArrowIcon,
  },
  {
    name: "Build a balanced portfolio",
    description:
      "Invest in different industries to find the most opportunities to win huge.",
    icon: DeviceCardsIcon,
  },
  {
    name: "Trade in real-time",
    description:
      "Get insider tips on big stock moves and act on them within seconds.",
    icon: DeviceClockIcon,
  },
  {
    name: "Profit from your network",
    description:
      "Invite new insiders to get tips faster and beat even other Pocket users.",
    icon: DeviceListIcon,
  },
  {
    name: "Encrypted and anonymized",
    description:
      "Cutting-edge security technology that even the NSA doesn’t know about keeps you hidden.",
    icon: DeviceLockIcon,
  },
  {
    name: "Portfolio tracking",
    description:
      "Watch your investments grow exponentially, leaving other investors in the dust.",
    icon: DeviceChartIcon,
  },
];

const SecondaryFeatures: React.FC = () => {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      <svg
        className="absolute inset-0 -z-10 bg-neutral-100 h-full w-full stroke-neutral-200 [mask-image:radial-gradient(100%_100%_at_top_right,neutral-100,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-violet-600">
            Instant, Real-time Alerts
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-800 sm:text-4xl">
            Never Miss a Trading Opportunity
          </p>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Get ahead in trading with our reliable and efficient alert system,
            delivering instant real-time notifications to ensure you never miss
            an opportunity. Stay informed and seize every trading opportunity
            with ease.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-neutral-300 bg-neutral-100 shadow-sm z-10 p-8 hover:border-violet-600 hover:shadow-lg hover:brightness-95 duration-500"
            >
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 font-semibold text-neutral-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-neutral-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
      <div
        className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
    </section>
  );
};

export default SecondaryFeatures;
