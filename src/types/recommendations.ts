import { BlocksContent } from '@strapi/blocks-react-renderer';

export type AttributeType = {
  content: BlocksContent;
  createdAt: string;
  locale: string;
  title: string;
  updatedAt: string;
  slug: string;
  localizations: {
    data: RecommendationType[];
  };
};

export type RecommendationType = {
  id: number;
  attributes: AttributeType;
};
