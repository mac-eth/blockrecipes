import React, {HTMLAttributes, ReactNode, Ref, forwardRef} from "react";

import LogoIcon from "~/components/icons/LogoIcon";
import MenuIcon from "~/components/icons/MenuIcon";
import UserIcon from "~/components/icons/UserIcon";
import clsx from "clsx";

const AppScreen = ({
  children,
  className,
  ...props
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div className={clsx("flex flex-col", className)} {...props}>
      <div className="flex justify-between px-4 pt-4">
        <MenuIcon className="h-6 w-6 flex-none" />
        <LogoIcon className="h-6 flex-none" />
        <UserIcon className="h-6 w-6 flex-none" />
      </div>
      {children}
    </div>
  );
};

AppScreen.Header = forwardRef(function AppScreenHeader(
  {
    children,
  }: {
    children: React.ReactNode;
  },
  ref: Ref<HTMLDivElement>
) {
  return (
    <div ref={ref} className="mt-6 px-4 text-neutral-50">
      {children}
    </div>
  );
});

AppScreen.Title = forwardRef(function AppScreenTitle(
  props: {
    children: React.ReactNode;
  },
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <div ref={ref} className="text-2xl text-neutral-50">
      {props.children}
    </div>
  );
});

AppScreen.Subtitle = forwardRef(function AppScreenSubtitle(
  {children}: {children: ReactNode},
  ref: Ref<HTMLDivElement>
) {
  return (
    <div ref={ref} className="text-sm text-neutral-500">
      {children}
    </div>
  );
});

AppScreen.Body = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & {children?: React.ReactNode}
>(function AppScreenBody({children, className}, ref) {
  return (
    <div
      ref={ref}
      className={clsx("mt-6 flex-auto rounded-t-2xl bg-neutral-50", className)}
    >
      {children}
    </div>
  );
});

export default AppScreen;
