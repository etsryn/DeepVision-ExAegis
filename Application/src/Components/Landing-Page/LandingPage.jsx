import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import { LogIn, Landmark, GraduationCap } from 'lucide-react';

export default function LandingPage() {
    // const features = [
    //     { icon: "🔍", title: "AI-Powered Proctoring", description: "Advanced facial recognition & cheating prevention." },
    //     { icon: "🎭", title: "Deepfake Detection", description: "Ensures authenticity by detecting manipulated video feeds." },
    //     { icon: "🔒", title: "Secure & Fair", description: "Encryption & AI-driven anti-cheat mechanisms." },
    //     { icon: "⚡", title: "Real-Time Analysis", description: "Detect suspicious activity instantly with AI-powered insights." },
    //     { icon: "🤖", title: "Automated Monitoring", description: "AI constantly watches for irregularities and cheating attempts." },
    //     { icon: "📊", title: "Data Visualization", description: "Get in-depth reports and analytics on behavior patterns." },
    // ];
    document.body.style.filter = "brightness(0.7)"; // Minimum 70% brightness effect
    return (
        <div className={styles.landingContainer}>
            {/* Navbar */}
            <header className={styles.navbar}>
                <h3 className={styles.logo}>DeXa</h3>
                <h1 className={styles.heading}>DeepVision ExAegis</h1>
            </header>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>AI-Powered Examination System</h1>
                    <p>
                        DeXa is an <strong>AI-driven examination system</strong> ensuring
                        <strong> security, integrity, and fairness</strong> with
                        <strong> proctoring, deepfake detection,</strong> and
                        <strong> behavioral analysis</strong>.
                    </p>
                    <div className={styles.buttonGroup}>
                        <Link to="/login/student" className={styles.buttonPrimary}>
                            Login as Student &nbsp; <LogIn size={21} strokeWidth={2} />
                        </Link>
                        <Link to="/login/examiner" className={styles.buttonSecondary}>
                            Login as Examiner &nbsp; <LogIn size={21} strokeWidth={2} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className={styles.features}>
                <div className={styles.featureWrapper}>
                    <div className={styles.featureCard}>
                        <h3>🛡️ AI-Powered Proctoring</h3>
                        <p>Advanced Facial Recognition, Deepfake Detection Mechanisms, Computer Vision Live Proctoring & Et cetera.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <h3>🌐 Universal Accessibility</h3>
                        <p>Designed for individuals, groups, institutions, and universities, ensuring seamless integration and usability for all.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <h3>📈 Intelligent Analytics</h3>
                        <p>Gain valuable analytics and performance metrics to enhance assessments, track progress, and optimize learning outcomes.</p>
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
