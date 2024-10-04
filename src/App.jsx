import { useState, useEffect } from "react";
import "./App.css";

import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";

function App() {
  const [count, setCount] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("count")) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    );
  });
  const totalFeedback = count.good + count.neutral + count.bad;
  const positiveFeedback = Math.round((count.good / totalFeedback) * 100);
  const updateFeedback = (feedbackType) => {
    setCount({ ...count, [feedbackType]: count[feedbackType] + 1 });
  };
  const handleResetFeedback = () => {
    setCount({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);
  return (
    <section>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handleResetFeedback={handleResetFeedback}
      />
      {totalFeedback >= 1 ? (
        <Feedback
          good={count.good}
          neutral={count.neutral}
          bad={count.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
          updateFeedback={updateFeedback}
        />
      ) : (
        <Notification />
      )}
    </section>
  );
}

export default App;
