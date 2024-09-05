import styles from '@/components/button/Button.module.css';
import classNames from 'classnames';
import { ButtonType } from '@/types/types';
import { ReactNode } from 'react';

type Props = {
  text: ReactNode;
  type?: ButtonType;
};

const buttonClassnames = {
  [ButtonType.primary]: styles.primary,
  [ButtonType.secondary]: styles.secondary,
};

const Button = ({ text, type = ButtonType.primary }: Props) => {
  return (
    <div className={classNames(styles.wrapper, buttonClassnames[type])}>
      <span
        className={classNames('label-lg text-align-center', styles.buttonText)}
      >
        {text}
      </span>
    </div>
  );
};

export default Button;
