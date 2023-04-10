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
      className="py-20 sm:py-32 bg-neutral-100"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-neutral-900">
            Now is the time to build your portfolio.
          </h2>
          <p className="mt-2 text-lg text-neutral-600">
            With typical market returns, you have to start young to secure your
            future. With Pocket, it’s never too late to build your nest egg.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-neutral-200 p-8"
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
    </section>
  );
};

export default SecondaryFeatures;
