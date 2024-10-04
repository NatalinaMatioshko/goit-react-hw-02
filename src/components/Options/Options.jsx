import css from "./Options.module.css";

const Options = ({ totalFeedback, updateFeedback, handleResetFeedback }) => {
  return (
    <div className={css.feedbackButton}>
      <button
        type="button"
        onClick={() => {
          updateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        type="button"
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        type="button"
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        Bad
      </button>
      {totalFeedback >= 1 && (
        <button
          type="button"
          onClick={() => {
            handleResetFeedback();
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;
