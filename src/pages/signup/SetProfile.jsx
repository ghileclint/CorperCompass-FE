import styles from "../signup/css/setprofile.module.css";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { FiCamera } from "react-icons/fi";
import { MdLockOutline } from "react-icons/md";
import { useState } from "react";

const SetProfile = () => {
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  return (
    <div className={styles.setProfileContainer}>
      <div className={styles.heading}>
        <h2>Set up your profile</h2>
        <p>This helps your zone community recognise you.</p>
      </div>

      <div className={styles.photoSection}>
        <label htmlFor="photo-upload" className={styles.photoContainer}>
          {photo ? (
            <img src={photo} alt="profile preview" className={styles.photo} />
          ) : (
            <span>
              <FiCamera />
            </span>
          )}
        </label>

        <input
          type="file"
          id="photo-upload"
          accept="image/*"
          onChange={handlePhotoChange}
          className={styles.fileInput}
        />
        <label htmlFor="photo-upload" className={styles.addPhoto}>
          Add a photo
        </label>
      </div>

      <div className={styles.form}>
        <TextInput label="Display Name" placeholder="e.g. Sinus brand" />
        <TextInput label="Username" placeholder="e.g. @siminus" />
        <div className={styles.textArea}>
          <label htmlFor="">Short Bio</label>
          <textarea name="" id="" placeholder="Type Message"></textarea>
        </div>
      </div>

      <div>
        <div className={styles.textContainer}>
          <MdLockOutline className={styles.textIcon} />
          <p>
            Your information is only shared with members of your verified NYSC
            zone. We will never share your data with external advertisers.
          </p>
        </div>

        <div className={styles.btnContainer}>
          <Button text="Continue" filled="btnFilled" />
        </div>
      </div>
    </div>
  );
};

export default SetProfile;
