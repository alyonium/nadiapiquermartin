import { BlocksContent } from '@strapi/blocks-react-renderer';

export type ServicePackageType = {
  id: number;
  content: BlocksContent;
  title: string;
  subtitle?: string;
};

export type AttributeType = {
  content: BlocksContent;
  createdAt: string;
  locale: string;
  title: string;
  subtitle?: string;
  localizations: {
    data: ServiceType[];
  };
  servicePackages: ServicePackageType[];
};

export type ServiceType = {
  id: number;
  attributes: AttributeType;
};
