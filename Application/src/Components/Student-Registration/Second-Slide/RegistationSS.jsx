import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserPlus } from "lucide-react";
import { useRegistration } from "../../Student-Registration-Context/RegistrationContext";
import styles from "./RegistrationSS.module.css";

const countryCodes = [
  { name: "India", code: "+91" },
  { name: "USA", code: "+1" },
  { name: "UK", code: "+44" },
  { name: "Saudi Arabia", code: "+966" },
  { name: "UAE", code: "+971" },
  { name: "Pakistan", code: "+92" },
  { name: "Bangladesh", code: "+880" },
];

export default function RegistrationSS() {
  const { studentData, setStudentData } = useRegistration();
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState("");

  // 🔹 **Redirect if user skips FS (First Name & Last Name Missing)**
  useEffect(() => {
    if (!studentData.firstName?.trim() || !studentData.lastName?.trim()) {
      navigate("/login/student/registration/FS"); // Redirect back to Step 1
    }
  }, [studentData, navigate]);

  // Email Validation
  const isValidEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  // Contact Number Validation (8-18 digits excluding country code)
  const isValidContact = (contact) => /^\d{8,18}$/.test(contact.replace(/\D/g, "")); 

  // Enable Next Button only if email & contact are valid
  const isNextEnabled = isValidEmail(studentData.email) && selectedCountry && isValidContact(studentData.contactNumber);

  // Handle Country Selection
  const handleCountryChange = (e) => {
    const country = countryCodes.find(c => c.name === e.target.value);
    setSelectedCountry(country);
    setStudentData({ ...studentData, contactNumber: country.code });
  };

  return (
    <div className={styles.container}>
      {/* Navigation Bar */}
      <header className={styles.nav}>
        <Link to="/login/student/registration/FS">
          <button className={styles.backBtn}>&larr; Go Back</button>
        </Link>
      </header>

      {/* Registration Form */}
      <div className={styles.formWrapper}>
        <div className={styles.formContainer}>
          <h2><UserPlus size={40} strokeWidth={1.5} /><br />Student Registration</h2>
          <br />
          <form className={styles.formGrid}>
            {/* Email Field - Full Width */}
            <div className={styles.inputGroupFull}>
              <input type="email" required value={studentData.email} onChange={(e) => setStudentData({ ...studentData, email: e.target.value })} autoFocus />
              <label>Email</label>
              {!isValidEmail(studentData.email) && studentData.email.length > 0 && (
                <span className={styles.errorMsg}>Invalid Email Id</span>
              )}
            </div>

            {/* Contact Numbers Side by Side */}
            <div className={styles.inputRow}>
              {/* Country Selection Dropdown (Leftmost) */}
              <div className={styles.inputGroup}>
                <select value={selectedCountry.name || ""} className={styles.countryCode} onChange={handleCountryChange}>
                  <option value="" disabled>Select Country Code ▼</option>
                  {countryCodes.map((country, index) => (
                    <option key={index} value={country.name}>{country.name} ({country.code})</option>
                  ))}
                </select>
              </div>

              {/* Contact Number with Country Code */}
              <div className={styles.inputGroup}>
                <input type="tel" required value={studentData.contactNumber} onChange={(e) => setStudentData({ ...studentData, contactNumber: e.target.value })} />
                <label>Contact Number</label>
                {!isValidContact(studentData.contactNumber) && studentData.contactNumber.length > 0 && (
                  <span className={styles.errorMsg}>Invalid Contact Number</span>
                )}
              </div>

              {/* Alternative Contact Number */}
              <div className={styles.inputGroup}>
                <input type="tel" value={studentData.contactNumberAlternative} onChange={(e) => setStudentData({ ...studentData, contactNumberAlternative: e.target.value })} />
                <label>Contact Number <sup>(Opt/Alternative)</sup></label>
              </div>
            </div>
          </form>

          {/* Next Button with Link */}
          <Link to={isNextEnabled ? "/login/student/registration/next-step" : "#"} className={isNextEnabled ? styles.nextEnabled : styles.nextDisabled}>
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
