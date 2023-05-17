import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = (props) => {
  return (
  <button className={clsx(styles.button, props.className)}>Szukaj!</button>
  );
};

export default Button;