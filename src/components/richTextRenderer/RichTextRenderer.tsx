import Link from 'next/link';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { RootNode } from '@strapi/blocks-react-renderer/dist/BlocksRenderer';

type RichTextRendererProps = {
  content: RootNode[];
};

const RichTextRenderer = ({ content }: RichTextRendererProps) => {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => (
          <div className='body-lg-l text-color-primary1000'>{children}</div>
        ),
        link: ({ children, url }) => <Link href={url}>{children}</Link>,
      }}
      modifiers={{
        bold: ({ children }) => (
          <span className='body-lg-r text-color-primary1000'>{children}</span>
        ),
        italic: ({ children }) => (
          <span className='body-lg-i text-color-primary1000'>{children}</span>
        ),
      }}
    />
  );
};

export default RichTextRenderer;
