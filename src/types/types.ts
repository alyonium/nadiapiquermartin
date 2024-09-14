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
  // This field unused in frontend and necessary only for identification price item in database
  title?: string;
  content?: string[];
  info?: string[];
};
