import { Link } from "react-router-dom";
import styles from "./StudentLoginPage.module.css";
import { GraduationCap } from "lucide-react";

export default function StudentLoginPage() {
  return (

    <div className={styles.page}>
        <div>
            <header className={styles.navbar}>
            <Link to="/"><button className={styles.backButton}>&#8617; &nbsp; Home</button></Link>
            </header>
        </div>

        <div className={styles.loginWrapper}>
          <div className={styles.loginContainer}>
            <h2><GraduationCap size={40} strokeWidth={1.5} /><br />Student Login</h2>
            <form>
              <div className={styles.inputBox}>
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className={styles.inputBox}>
                <input type="password" required />
                <label>Password</label>
              </div>
              <button className={styles.submitButton} type="submit">Login</button>
            </form>
            <p>
              New User ? <Link to="/login/student/registration/FS">Register</Link>
            </p>
            <p>
              Are you an Examiner? <Link to="/login/examiner">Login here</Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div>
            <footer className={styles.footer}>
                <p>© {new Date().getFullYear()} DeXa | AI-Powered Examination System</p>
            </footer>
        </div>
    </div>
  );
}
