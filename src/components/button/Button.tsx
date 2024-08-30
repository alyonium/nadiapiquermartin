import styles from '@/components/button/Button.module.css';
import classNames from 'classnames';

type Props = {
  text: string;
  type: 'primary' | 'secondary';
};

const Button = ({ text, type }: Props) => {
  if (type === 'primary') {
    return (
      <div className={classNames(styles.wrapper, styles.primary)}>
        <span className={classNames('label-lg', styles.buttonText)}>
          {text}
        </span>
      </div>
    );
  }

  return (
    <div className={classNames(styles.wrapper, styles.secondary)}>
      <span className={classNames('label-lg', styles.buttonText)}>{text}</span>
    </div>
  );
};

export default Button;
