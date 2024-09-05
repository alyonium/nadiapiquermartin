import classNames from 'classnames';

type HeadingProps = {
  text: string;
};

const Heading = ({ text }: HeadingProps) => {
  return (
    <div>
      <h2 className={classNames('header-lg')}>{text}</h2>
    </div>
  );
};

export default Heading;
