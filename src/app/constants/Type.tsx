export type FormType = {
  name?: string;
  flavor?: string;
  age?: number;
  isGoing?: boolean;
};

export type Index = {
  unit: string;
  id: number;
  description: string;
};

export type FuelGroup = {
  id: number;
  description: string;
};

export type LayerType = {
  index: Index[];
  pricing: FuelGroup[];
  quality: FuelGroup[];
  avails: FuelGroup[];
};
