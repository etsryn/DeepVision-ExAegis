import { Link } from "react-router-dom";
import styles from "./ExaminerLoginPage.module.css"; // ✅ Import CSS Module

export default function ExaminerLoginPage() {
  return (
	<div className={styles.page}>
		<div>
			<header className={styles.navbar}>
			<Link to="/"><button className={styles.backButton}>Home</button></Link>
			</header>
		</div>
    	
		<div className={styles.loginWrapper}>
    	  <div className={styles.loginContainer}>
    	    <h2>Examiner Login</h2>
    	    <form>
    	      <div className={styles.inputBox}>
    	        <input type="email" required />
    	        <label>Email</label>
    	      </div>
    	      <div className={styles.inputBox}>
    	        <input type="password" required />
    	        <label>Password</label>
    	      </div>
    	      <div className={styles.inputBox}>
    	        <input type="text" required />
    	        <label>OTP (if required)</label>
    	      </div>
    	      <button className={styles.submitButton} type="submit">Login</button>
    	    </form>
    	    <p>
    	      Are you a Student? <Link to="/login/student">Login here</Link>
    	    </p>
    	  </div>
    	</div>

		<div>
			{/* Footer */}
			<footer className={styles.footer}>
				<p>© {new Date().getFullYear()} DeXa | AI-Powered Examination System</p>
			</footer>
		</div>
	</div>
  );
}
