export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
}

export enum CollapseSize {
  small = 'small',
  large = 'large',
}

export enum PriceItemType {
  classic = 'classic',
  withNumber = 'withNumber',
  packageItem = 'packageItem',
}

export type PriceType = {
  label: string;
  value: number;
  content?: string[];
  info?: string[];
};
