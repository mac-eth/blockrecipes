import {
  DiageoLogo,
  LaravelLogo,
  MirageLogo,
  ReversableLogo,
  StatamicLogo,
  StaticKitLogo,
  TransistorLogo,
  TupleLogo,
} from "~/components/phone/StockLogos";

import AppScreen from "~/components/phone/AppScreen";
import React from "react";
import bodyAnimation from "~/components/phone/animations/BodyAnimation";
import clsx from "clsx";
import headerAnimation from "~/components/phone/animations/HeaderAnimations";
import { motion } from "framer-motion";

const MotionAppScreenHeader = motion(AppScreen.Header);
const MotionAppScreenBody = motion(AppScreen.Body);

const StocksScreen = ({
  custom,
  animated = false,
}: {
  custom?: {
    isForwards: boolean;
    changeCount: number;
  };
  animated?: boolean;
}) => {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Stocks</AppScreen.Title>
        <AppScreen.Subtitle>March 9, 2022</AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="divide-y divide-neutral-100">
          {[
            {
              name: "Laravel",
              price: "4,098.01",
              change: "+4.98%",
              color: "#F9322C",
              logo: LaravelLogo,
            },
            {
              name: "Tuple",
              price: "5,451.10",
              change: "-3.38%",
              color: "#5A67D8",
              logo: TupleLogo,
            },
            {
              name: "Transistor",
              price: "4,098.41",
              change: "+6.25%",
              color: "#2A5B94",
              logo: TransistorLogo,
            },
            {
              name: "Diageo",
              price: "250.65",
              change: "+1.25%",
              color: "#3320A7",
              logo: DiageoLogo,
            },
            {
              name: "StaticKit",
              price: "250.65",
              change: "-3.38%",
              color: "#2A3034",
              logo: StaticKitLogo,
            },
            {
              name: "Statamic",
              price: "5,040.85",
              change: "-3.11%",
              color: "#0EA5E9",
              logo: StatamicLogo,
            },
            {
              name: "Mirage",
              price: "140.44",
              change: "+9.09%",
              color: "#16A34A",
              logo: MirageLogo,
            },
            {
              name: "Reversable",
              price: "550.60",
              change: "-1.25%",
              color: "#8D8D8D",
              logo: ReversableLogo,
            },
          ].map((stock) => (
            <div key={stock.name} className="flex items-center gap-4 px-4 py-3">
              <div
                className="flex-none rounded-full"
                style={{ backgroundColor: stock.color }}
              >
                <stock.logo className="h-10 w-10" />
              </div>
              <div className="flex-auto text-sm text-neutral-900">
                {stock.name}
              </div>
              <div className="flex-none text-right">
                <div className="text-sm font-medium text-neutral-900">
                  {stock.price}
                </div>
                <div
                  className={clsx(
                    "text-xs leading-5",
                    stock.change.startsWith("+")
                      ? "text-cyan-500"
                      : "text-neutral-500"
                  )}
                >
                  {stock.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  );
};

export default StocksScreen;
