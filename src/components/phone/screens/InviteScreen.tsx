import AppScreen from "~/components/phone/AppScreen";
import React from "react";
import bodyAnimation from "~/components/phone/animations/BodyAnimation";
import headerAnimation from "~/components/phone/animations/HeaderAnimations";
import {motion} from "framer-motion";

const MotionAppScreenHeader = motion(AppScreen.Header);
const MotionAppScreenBody = motion(AppScreen.Body);

const InviteScreen = ({
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
        <AppScreen.Title>Invite people</AppScreen.Title>
        <AppScreen.Subtitle>
          Get tips <span className="text-neutral-50">5s sooner</span> for every
          invite.
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? {...bodyAnimation, custom} : {})}>
        <div className="px-4 py-6">
          <div className="space-y-6">
            {[
              {label: "Full name", value: "Albert H. Wiggin"},
              {label: "Email address", value: "awiggin@chase.com"},
            ].map((field) => (
              <div key={field.label}>
                <div className="text-sm text-neutral-500">{field.label}</div>
                <div className="mt-2 border-b border-neutral-200 pb-2 text-sm text-neutral-900">
                  {field.value}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg bg-cyan-500 px-3 py-2 text-center text-sm font-semibold text-neutral-50">
            Invite person
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  );
};

export default InviteScreen;
