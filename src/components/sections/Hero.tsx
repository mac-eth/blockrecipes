import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Logo from "~/assets/mark.svg";
import React from "react";
import Screenshot from "~/assets/project-app-screenshot.png";

const Hero: React.FC = () => {
  return (
    <div className="relative isolate h-[95vh] overflow-hidden bg-white">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-neutral-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
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
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                New Update
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-neutral-600">
                <span>Just shipped v1.0</span>
                <ChevronRightIcon
                  className="h-5 w-5 text-neutral-400"
                  aria-hidden="true"
                />
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl">
            Maximize Your Profits: The World&apos;s Fastest Trading Insights
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Get the competitive edge with instant, customized notifications
            tailored to you. BlockRecipes is the ultimate solution for real-time
            blockchain insights, never miss an opportunity and maximize your
            profits.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-neutral-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-neutral-900/5 p-2 ring-1 ring-inset ring-neutral-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src={Screenshot}
                alt="App screenshot"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-neutral-900/10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[10vh] bg-neutral-900"></div>
    </div>
  );
};

export default Hero;
