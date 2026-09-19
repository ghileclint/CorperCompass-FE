import { useState } from "react";
import { useEffect } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlinePendingActions } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";
import styles from "../signup/css/uploadLetter.module.css";
import Button from "../../components/Button";

const UploadLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [letter, setLetter] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleLetterChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    setLetter(selectedFile);

    setPreview(URL.createObjectURL(selectedFile));
  };

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const removeFile = () => {
    setLetter(null);
    setPreview(null);
  };

  return (
    <div className={styles.uploadLetterContainer}>
      <div className={styles.heading}>
        <h2>Upload your call-up letter</h2>
        <p>This verifies your NYSC staus. Accepted formats: JPG, PNG, PDF</p>
      </div>

      <div className={styles.letterContainer}>
        {!letter ? (
          <div>
            <label htmlFor="letter upload" className={styles.uploadText}>
              <div className={styles.uploadIconContainer}>
                <IoCloudUploadOutline className={styles.uploadIcon} />
              </div>
              Tap to upload your call-up letter
              <p>Max file size: 5MB</p>
            </label>
            <input
              type="file"
              id="letter upload"
              accept=".jpeg, .jpg, .png, .pdf"
              onChange={handleLetterChange}
              className={styles.fileInput}
            />
          </div>
        ) : (
          <div className={styles.filePreview}>
            {letter.type.startsWith("image/") ? (
              <img
                src={preview}
                alt="Uploaded letter"
                className={styles.letterImage}
              />
            ) : (
              <iframe
                src={preview}
                title="Uploaded letter"
                className={styles.letterPdf}
              />
            )}

            <p>{letter.name}</p>
            <button onClick={removeFile}>Remove</button>
          </div>
        )}
      </div>

      <div className={styles.pendingReview}>
        <div className={styles.pendingIconContainer}>
          <MdOutlinePendingActions className={styles.pendingIcon} />
        </div>
        <div className={styles.pendingText}>
          <p>Pending review...</p>
          <span>No document uploaded yet</span>
        </div>
      </div>

      <div className={styles.infoContainer}>
        <button onClick={() => setIsOpen(!isOpen)} className={styles.header}>
          <div className={styles.iconContent}>
            <div className={styles.infoIconContainer}>
              <GoQuestion className={styles.infoIcon} />
            </div>
            <span>Why do you need this?</span>
          </div>
          <div className={styles.arrow}>
            {isOpen ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
          </div>
        </button>
        {isOpen && (
          <div className={styles.content}>
            <p>
              Corpercompass helps corps members find useful information about
              their current location
            </p>
          </div>
        )}
      </div>

      <div className={styles.uploadBtn}>
        <Button text="Submit & Continue" filled="btnFilled" />
        <Button text="Skip for now" />
      </div>

      <div className={styles.bottomText}>
        <p>
          Some features will be limited until your NYSC status is fully
          verified.
        </p>
      </div>
    </div>
  );
};

export default UploadLetter;
