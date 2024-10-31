import { BlocksContent } from '@strapi/blocks-react-renderer';

export type AttributeType = {
  content: BlocksContent;
  createdAt: string;
  locale: string;
  title: string;
  subtitle?: string;
  localizations: {
    data: ServiceType[];
  };
};

export type ServiceType = {
  id: number;
  attributes: AttributeType;
};
