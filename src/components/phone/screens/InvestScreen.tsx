import AppScreen from "~/components/phone/AppScreen";
import bodyAnimation from "~/components/phone/animations/BodyAnimation";
import headerAnimation from "~/components/phone/animations/HeaderAnimations";
import {motion} from "framer-motion";

const MotionAppScreenHeader = motion(AppScreen.Header);
const MotionAppScreenBody = motion(AppScreen.Body);

const InvestScreen = ({
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
        <AppScreen.Title>Buy $LA</AppScreen.Title>
        <AppScreen.Subtitle>
          <span className="text-neutral-50">$34.28</span> per share
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? {...bodyAnimation, custom} : {})}>
        <div className="px-4 py-6">
          <div className="space-y-4">
            {[
              {label: "Number of shares", value: "100"},
              {
                label: "Current market price",
                value: (
                  <div className="flex">
                    $34.28
                    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                      <path
                        d="M17 15V7H9M17 7 7 17"
                        stroke="#06B6D4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ),
              },
              {label: "Estimated cost", value: "$3,428.00"},
            ].map((item) => (
              <div
                key={item.label}
                className="flex justify-between border-b border-neutral-50 pb-4"
              >
                <div className="text-sm text-neutral-500">{item.label}</div>
                <div className="text-sm font-semibold text-neutral-900">
                  {item.value}
                </div>
              </div>
            ))}
            <div className="rounded-lg bg-cyan-500 px-3 py-2 text-center text-sm font-semibold text-neutral-50">
              Buy shares
            </div>
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  );
};

export default InvestScreen;
