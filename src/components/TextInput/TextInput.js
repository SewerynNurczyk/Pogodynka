import styles from './TextInput.module.scss';

const TextInput = props => {
  return (
    <input 
      className={styles.input}
      value={props.value}
      onChange={props.onChange}
      placeholder='Znajdź swoje miasteczko!'
      type="text" />
  );
};

export default TextInput;