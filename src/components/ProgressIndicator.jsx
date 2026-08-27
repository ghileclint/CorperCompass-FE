import styles from "../css/indicator.module.css";
import { FaCheck } from "react-icons/fa";

// We have three state (normal, pending, completed)
// the indicator component takes in a prop that sets the value of currentStep to determin the state of the progress indicator

const Indicator = ({ currentStep = 2 }) => {
  const steps = ["Submitted", "Under Review", "Approved"];

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressLine}>
        {steps.map((step, index) => {
          const stepNumber = index + 1;

          return (
            <div className={styles.stepWrapper} key={step}>
              {/* Circle */}
              <div
                className={`${styles.circle} ${stepNumber < currentStep ? styles.completed : stepNumber === currentStep ? styles.pending : ""}`}
              >
                {stepNumber < currentStep ? <FaCheck /> : ""}
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div
                  className={`${styles.line} ${stepNumber < currentStep ? styles.lineCompleted : ""}`}
                ></div>
              )}

              {/* Label */}
              <span
                className={`${styles.label} ${stepNumber < currentStep ? styles.activeLabel : ""}`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Indicator;
