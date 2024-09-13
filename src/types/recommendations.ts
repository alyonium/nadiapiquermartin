import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';

export type AttributeType = {
  content: RootNode[];
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
