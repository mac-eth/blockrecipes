import Image from "next/image";
import {PhoneFrameProps} from "~/types";
import PlaceholderFrame from "~/components/phone/PlaceHolderFrame";
import clsx from "clsx";
import frame from "~/assets/phone-frame.svg";

const PhoneFrame = ({
  className,
  children,
  priority = false,
  ...props
}: PhoneFrameProps) => {
  return (
    <div className={clsx("relative aspect-[366/729]", className)} {...props}>
      <div className="absolute inset-y-[calc(1/729*100%)] left-[calc(7/729*100%)] right-[calc(5/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl" />
      <div className="absolute left-[calc(23/366*100%)] top-[calc(23/729*100%)] grid h-[calc(686/729*100%)] w-[calc(318/366*100%)] transform grid-cols-1 overflow-hidden bg-neutral-900 pt-[calc(23/318*100%)]">
        {children}
      </div>
      <PlaceholderFrame className="pointer-events-none absolute inset-0 h-full w-full fill-neutral-50" />
      <Image
        src={frame}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full"
        unoptimized
        priority={priority}
      />
    </div>
  );
};

export default PhoneFrame;
