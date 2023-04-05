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
