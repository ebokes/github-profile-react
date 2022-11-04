import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
// import Repos from "./components/Repos";
// import Repo from "./components/Repo";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Repo from "./components/Repo";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import ErrorPage from "./pages/Error/ErrorPage";
import ErrorBoundary from "./pages/Error/ErrorBoundary";
import ErrorBoundaryTest from "./pages/Error/ErrorBoundaryTest";

function App() {
  const theme = {
    color: {
      primary: "#959595",
      secondary: "#232434",
      border: "#ccc",
      black: "#000",
      white: "#fff",
      transparent: "transparent",
      main: "#0898a0",
      navfooter: "#fff",
      bgGradient: "#002727ab",

      bg: "#000",
      fg: "#1C1C1C",
      primaryText: "#959595",
      secondaryText: "#B57224",
      linGrad1: "#F5D061",
      linGrad2: "#E48F04",
      tertiaryText: "#A5A5A5",

      // bgGradient: "transparent",
    },

    screens: {
      xsm: "414px",
      sm: "600px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
    },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <GlobalStyles />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<MyProfile />}>
              <Route path=":repoId" element={<Repo />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/err-boundary" element={<ErrorBoundaryTest />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
}

export default App;
