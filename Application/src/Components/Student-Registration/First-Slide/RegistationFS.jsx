import { Link } from "react-router-dom";
import styles from "./RegistrationFS.module.css";
import { UserPlus, ArrowRight } from "lucide-react";
import { useRegistration } from "../../Student-Registration-Context/RegistrationContext";

export default function RegistrationFS() {
  const { studentData, setStudentData } = useRegistration();

  const isNextEnabled = studentData.firstName.trim() && studentData.lastName.trim();

  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <header className={styles.nav}>
        <Link to="/login/student">
          <button className={styles.backBtn}>&larr; Go Back</button>
        </Link>
      </header>

      {/* Registration Form */}
      <div className={styles.formWrapper}>
        <div className={styles.formContainer}>
          <h2><UserPlus size={40} strokeWidth={1.5} /><br />Student Registration</h2>
          <br />
          <form className={styles.formGrid}>
            <div className={styles.inputGroup}>
              <input type="text" required value={studentData.firstName} onChange={(e) => setStudentData({ ...studentData, firstName: e.target.value })} autoFocus />
              <label>First Name</label>
            </div>
            <div className={styles.inputGroup}>
              <input type="text" required value={studentData.middleName} onChange={(e) => setStudentData({ ...studentData, middleName: e.target.value })} />
              <label>Middle Name <sup>(Opt)</sup></label>
            </div>
            <div className={styles.inputGroup}>
              <input type="text" required value={studentData.lastName} onChange={(e) => setStudentData({ ...studentData, lastName: e.target.value })}/>
              <label>Last Name</label>
            </div>
          </form>

          {/* Next Button */}
          <Link to={isNextEnabled ? "/login/student/registration/SS" : "#"} className={isNextEnabled ? styles.nextEnabled : styles.nextDisabled}>
            <button className={styles.nextBtn} disabled={!isNextEnabled}>Proceed</button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} DeXa | AI-Based Examination Platform</p>
      </footer>
    </div>
  );
}
