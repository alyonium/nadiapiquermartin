import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { BlocksContent } from '@strapi/blocks-react-renderer';
import classNames from 'classnames';
import styles from './ServicesRichTextRendered.module.css';

type RichTextRendererProps = {
  content: BlocksContent;
};

const ServicesRichTextRenderer = ({ content }: RichTextRendererProps) => {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        // обычная услуга
        paragraph: ({ children }) => (
          <div
            className={classNames(
              styles.priceWrapper,
              `body-md-l text-color-primary1000`
            )}
          >
            {children}
          </div>
        ),
        heading: ({ children, level }) => {
          switch (level) {
            // название пакета услуг
            case 5:
              return (
                <div
                  className={classNames(
                    styles.packageHeading,
                    `body-md-l text-color-primary1000`
                  )}
                >
                  {children}
                </div>
              );
            // услуга в пакете
            case 6:
              return (
                <div
                  className={classNames(
                    styles.packageItem,
                    `body-md-l text-color-primary1000`
                  )}
                >
                  {children}
                </div>
              );
          }
        },
        // доп.информация со звездочкой
        'list-item': ({ children }) => (
          <li
            className={classNames(
              styles.listItem,
              `body-sm-l text-color-primary1000`
            )}
          >
            * {children}
          </li>
        ),
        // группа доп.информации со звездочкой
        list: ({ children }) => (
          <ul
            className={classNames(
              styles.list,
              `body-sm-l text-color-primary1000`
            )}
          >
            {children}
          </ul>
        ),
      }}
      modifiers={{
        bold: ({ children }) => (
          <span className={`body-md-r text-color-primary1000`}>{children}</span>
        ),
        italic: ({ children }) => (
          <span className={`body-md-i text-color-primary1000`}>{children}</span>
        ),
        // цены
        underline: ({ children }) => (
          <span
            className={classNames(
              styles.price,
              `body-md-l text-color-primary1000`
            )}
          >
            {children}
          </span>
        ),
        // цифры
        strikethrough: ({ children }) => (
          <span className={`body-md-i text-color-secondary400`}>
            {children}
          </span>
        ),
      }}
    />
  );
};

export default ServicesRichTextRenderer;
