import styles from './Feedback.module.css'
import PropTypes from 'prop-types';

const Feedback = ({ onLeaveFeedback }) => {
  return (
    <div className={styles.buttons}>
      <button onClick={() => onLeaveFeedback('good')}>Good</button>
      <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
    </div>
  );
};

Feedback.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
  };

export default Feedback;
