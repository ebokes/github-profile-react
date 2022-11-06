import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import { lazy } from "react";
import Loading from "./components/Loading";
import { Suspense } from "react";

let Navbar = lazy(() => import("./components/Navbar"));
let Footer = lazy(() => import("./components/Footer"));
let Home = lazy(() => import("./pages/Home"));
let Repo = lazy(() => import("./components/Repo"));
let Search = lazy(() => import("./pages/Search"));
let Contact = lazy(() => import("./pages/Contact"));
let MyProfile = lazy(() => import("./pages/MyProfile"));
let ErrorPage = lazy(() => import("./pages/Error/ErrorPage"));
let ErrorBoundary = lazy(() => import("./pages/Error/ErrorBoundary"));
let ErrorBoundaryTest = lazy(() => import("./pages/Error/ErrorBoundaryTest"));

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

      primaryText: "#b1b1b1",
      secondaryText: "#B57224",
      tertiaryText: "#e5e5e5",
      linGrad1: "#f5d061",
      linGrad2: "#e48f04",
      bgGradient: "#333333",
      bg: "#000",
      fg: "#1C1C1C",
      bg2: "#141414",
    },

    font: {
      font1: `"Exo", sans-serif`,
      font2: ` "Rajdhani", sans-serif`,
      font3: `"Montserrat", sans-serif`,
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
          <Suspense fallback={<Loading />}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/profile" element={<MyProfile />}>
                <Route path=":repoId" element={<Repo />} />
              </Route>
              <Route path="/contact" element={<Contact />} />
              <Route path="/err-boundary" element={<ErrorBoundaryTest />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
}

export default App;
