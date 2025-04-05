import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={styles.landingContainer}>
      {/* Navbar */}
      <header className={styles.navbar}>
        <h1 className={styles.logo}>DeepVision ExAegis</h1>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>DeXa: The Future of Digital Exams</h1>
          <p>
            DeXa is an <strong>AI-driven examination system</strong> ensuring
            <strong> security, integrity, and fairness</strong> with
            <strong> proctoring, deepfake detection,</strong> and
            <strong> behavioral analysis</strong>.
          </p>
          <div className={styles.buttonGroup}>
            <Link to="/login/student" className={styles.buttonPrimary}>
              Student Login
            </Link>
            <Link to="/login/examiner" className={styles.buttonSecondary}>
              Examiner Login
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.featureWrapper}>
          <div className={styles.featureCard}>
            <h3>🔍 AI-Powered Proctoring</h3>
            <p>Advanced facial recognition & cheating prevention.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>📹 Deepfake Detection</h3>
            <p>Ensures authenticity by detecting manipulated video feeds.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>🔒 Secure & Fair</h3>
            <p>Encryption & AI-driven anti-cheat mechanisms.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} DeXa | AI-Powered Examination System</p>
      </footer>
    </div>
  );
}
