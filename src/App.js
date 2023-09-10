import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";
import Layout from "./layout/layout";
import { CSSTransition } from "react-transition-group";
import { useState, useEffect } from "react";
import DataProject from "./pages/DataProject";
import BackEndProject from "./pages/BackEnd";
import NotFound from "./pages/NotFound";
import FrontEndProject from "./pages/FrontEnd";
function App() {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    setShowComponent(true); // Mengatur state untuk memunculkan komponen saat halaman pertama kali dimuat
  }, []);
  return (
    <div className="App">
      <CSSTransition
        in={showComponent}
        timeout={2000}
        classNames="fade"
        unmountOnExit
      >
        <Routes>
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/projects"
            element={
              <Layout>
                <Project />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/data-science"
            element={
              <Layout>
                <DataProject />
              </Layout>
            }
          />
          <Route
            path="/back-end"
            element={
              <Layout>
                <BackEndProject />
              </Layout>
            }
          />
          <Route
            path="/front-end"
            element={
              <Layout>
                <FrontEndProject />
              </Layout>
            }
          />
        </Routes>
      </CSSTransition>
    </div>
  );
}

export default App;
