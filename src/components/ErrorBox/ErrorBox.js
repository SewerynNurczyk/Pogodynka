import PropTypes from 'prop-types';
import styles from './ErrorBox.module.scss';

const ErrorBox = ({ children }) => {
  return (
    <div className={styles.errorBox}>
      <h1>
        <span className="fa fa-exclamation-triangle" />
        Error! <p>Takiego zadupia nawet na naszych mapach nie ma!</p>
      </h1>
      <p>
        {children}
      </p>
    </div>
  );
};

ErrorBox.propTypes = { 
  children: PropTypes.string
};

export default ErrorBox;