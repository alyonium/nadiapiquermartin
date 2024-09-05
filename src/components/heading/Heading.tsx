import classNames from 'classnames';
import styles from '@/components/heading/Heading.module.css';

type HeadingProps = {
  text: string;
};

const Heading = ({ text }: HeadingProps) => {
  return (
    <div className={classNames(styles.headingWrapper, 'heading')}>
      <div className={styles.line} />
      <h2 className={classNames('header-lg')}>{text}</h2>
      <div className={styles.line} />
    </div>
  );
};

export default Heading;
