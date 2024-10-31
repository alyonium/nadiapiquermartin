import Link from 'next/link';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { BlocksContent } from '@strapi/blocks-react-renderer';
import { DotFilledIcon } from '@radix-ui/react-icons';

type RichTextRendererProps = {
  content: BlocksContent;
  fontSize?: string;
};

const RecommendationRichTextRenderer = ({
  content,
  fontSize = 'lg',
}: RichTextRendererProps) => {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => (
          <div className={`body-${fontSize}-l text-color-primary1000`}>
            {children}
          </div>
        ),
        link: ({ children, url }) => <Link href={url}>{children}</Link>,
        'list-item': ({ children }) => (
          <li className={`body-${fontSize}-l text-color-primary1000`}>
            <DotFilledIcon fontSize={14} /> {children}
          </li>
        ),
      }}
      modifiers={{
        bold: ({ children }) => (
          <span className={`body-${fontSize}-r text-color-primary1000`}>
            {children}
          </span>
        ),
        italic: ({ children }) => (
          <span className={`body-${fontSize}-i text-color-primary1000`}>
            {children}
          </span>
        ),
      }}
    />
  );
};

export default RecommendationRichTextRenderer;
