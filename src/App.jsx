// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import React from 'react'
// import Header from "./components/Header";
// // import Coursel from './components/Coursel'
// // import About from './components/About'
// // import Team from './components/Team'
// // import Drive from './components/Drive'
// // import ContactUs from './components/ContactUs'
// // import JoinUs from './components/JoinUs'
// // import Footer from './components/Footer'
// import Donate from "./pages/Donate"; // create this page
// import Home from "./pages/Home";
// import About from "./pages/About";
// import ContactUs from "./pages/ContactUss";
// import Team from "./pages/Team";
// import Drive from "./pages/Drives";

// function App() {
//   return (
//     <div className="w-full ">
//       <Router>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/donate" element={<Donate />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/joinus" element={<ContactUs />} />
//           <Route path="/team" element={<Team />} />
//           <Route path="/drive" element={<Drive />} />
//           {/* Add more routes as needed */}
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;



import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Donate from "./pages/Donate";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUss";
import Team from "./pages/Team";
import Drive from "./pages/Drives";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-all duration-500 ${loading ? "blur-sm opacity-50" : "blur-0 opacity-100"}`}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/about" element={<About />} />
          <Route path="/joinus" element={<ContactUs />} />
          <Route path="/team" element={<Team />} />
          <Route path="/drive" element={<Drive />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
