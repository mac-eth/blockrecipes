export class CircleBackgroundProps {
  color: string;
  width?: number;
  height?: number;
  className?: string;
}

export class PhoneFrameProps {
  priority?: boolean;
  className?: string;
  children: React.ReactNode;
}

export class Frequency {
  value: "monthly" | "annually";
  label: "Monthly" | "Annually";
  priceSuffix: "/month" | "/year";
}

export class Price {
  monthly: number;
  annually: number;
}

export class Tier {
  name: string;
  id: string;
  href: string;
  price: Price;
  description: string;
  features: string[];
  mostPopular: boolean;
}
