import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RegistrationProvider } from "./Components/Student-Registration-Context/RegistrationContext";
import LandingPage from "./Components/Landing-Page/LandingPage";
import StudentLoginPage from "./Components/Student-Login/StudentLoginPage";
import ExaminerLoginPage from "./Components/Examiner-Login/ExaminerLoginPage";
import StudentRegistrationFS from "./Components/Student-Registration/First-Slide/RegistationFS";
import StudentRegistrationSS from "./Components/Student-Registration/Second-Slide/RegistationSS";

function App() {
  return (
    <RegistrationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login/student" element={<StudentLoginPage />} />
          <Route path="/login/examiner" element={<ExaminerLoginPage />} />
          <Route path="/login/student/registration/FS" element={<StudentRegistrationFS />} />
          <Route path="/login/student/registration/SS" element={<StudentRegistrationSS />} />
        </Routes>
      </Router>
    </RegistrationProvider>
  );
}

export default App;






























// # v1 : Initalised Version

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
