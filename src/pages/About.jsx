import { Hero, Button, Avatar } from "react-daisyui";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

export default function About() {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    setShowComponent(true); // Mengatur state untuk memunculkan komponen saat halaman pertama kali dimuat
  }, []);
  return (
    <CSSTransition
      in={showComponent}
      timeout={2000}
      classNames="fade"
      unmountOnExit
    >
      <div className="font-serif pt-16">
        <Hero
          className="h-full"
          style={{
            backgroundImage:
              "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
          }}
        >
          <Hero.Overlay />
          <Hero.Content className="text-center flex flex-col justify-evenly h-full">
            <div>
              <h1 className="text-5xl font-bold text-slate-100">About Me</h1>
            </div>
            <div>
              <Avatar
                borderColor="success"
                shape="circle"
                size={200}
                src="./assets/Pas_Foto.jpg"
              />
            </div>
            <div className="flex flex-row justify-items-center">
              <span className="font-mono py-2 text-2xl text-teal-50 text-center sm:text-justify">
                I am a graduate of electrical engineering from Indonesia
                Institute of Technology campus. A junior web developer and data
                analyst who has worked on various projects. Familiar with
                various frameworks such as Laravel, ReactJS, and ExpressJS and
                familiar with SQL and NoSQL databases. Machine learning projects
                that have been done are sentiment analysis, churn
                classification, and forecasting. In addition, deep learning
                projects that have been done are object detection and face
                detection. My other skill is to create an internet of things
                project that can be useful for controlling devices remotely
                either wirelessly.
              </span>
            </div>
            <Link to="/projects">
              <Button
                color="primary"
                className="text-l hover:animate-bounce font-bold hover:h-14 hover:w-48 hover:bg-cyan-800"
              >
                GO TO PROJECT
              </Button>
            </Link>
          </Hero.Content>
        </Hero>
        <Hero className="h-fit">
          <Hero.Content className="py-5">
            <div className="flex flex-col gap-24 justify-between">
              <div className="sm:flex sm:flex-col sm:gap-8 flex flex-col justify-between">
                <div>
                  <h1 className="text-5xl font-bold">Education</h1>
                </div>
                <div className="sm:px-10 pl-10 pb-5 flex flex-col sm:flex sm:flex-row sm:justify-around">
                  <img
                    alt="Institut Teknologi Indonesia"
                    src="./assets/ITI.png"
                    className="w-60 max-w-sm rounded-lg shadow-2xl"
                  />
                  <div className="sm:flex sm:flex-col">
                    <p className="pt-6 text-3xl">
                      Institut Teknologi Indonesia
                    </p>
                    <p className="text-xl pb-6 text-start">
                      Electrical Engineering - GPA 3.54
                    </p>
                    <div className="sm:flex sm:flex-row sm:justify-items-start">
                      <Link to="https://iti.ac.id/">
                        <Button className="sm:mt-10" color="primary">
                          Click Here
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:flex sm:flex-col sm:gap-8 flex flex-col justify-between">
                <div>
                  <h1 className="text-5xl font-bold">
                    Traning and Certification
                  </h1>
                </div>
                <div className="sm:px-10 pl-10 pb-5 sm:gap-8 flex flex-col sm:flex sm:flex-row sm:justify-around">
                  <img
                    alt="Logo Purwadhika"
                    src="./assets/Purwadhika.png"
                    className="w-60 max-w-sm rounded-lg shadow-2xl"
                  />
                  <div className="sm:flex sm:flex-col">
                    <p className="pt-6 text-3xl font-semibold">
                      Purwadhika Digital Technology School
                    </p>
                    <p className="text-xl pb-6 text-start">
                      Program: Job Connector Web Development
                    </p>
                    <div className="flex flex-row justify-items-start gap-4">
                      <Link to="https://purwadhika.com/" target="_blank">
                        <Button className="sm:mt-10" color="primary">
                          Click Here
                        </Button>
                      </Link>
                      <Link
                        to="https://drive.google.com/file/d/1e_Fr5Ca8DnB4cXkaVJFm_8pDVn3lA_B7/view?usp=sharing"
                        target="_blank"
                      >
                        <Button className="sm:mt-10" color="primary">
                          Certificate
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="sm:px-10 pl-10 pb-5 sm:gap-8 flex flex-col sm:flex sm:flex-row">
                  <img
                    alt="Logo Fullstack Bangalore"
                    src="./assets/bangalore.jpeg"
                    className="w-60 max-w-sm rounded-lg shadow-2xl"
                  />
                  <div className="sm:flex sm:flex-col">
                    <p className="pt-6 text-3xl font-semibold">
                      Fullstack Bangalore
                    </p>
                    <p className="text-xl pb-6 text-start">
                      Program: Fullstack Data Science
                    </p>
                    <div className="flex flex-row justify-items-start gap-4">
                      <Link to="https://fstbangalore.com/" target="_blank">
                        <Button className="sm:mt-10" color="primary">
                          Click Here
                        </Button>
                      </Link>
                      <Link
                        to="https://drive.google.com/file/d/1NNsEBFPs9kfFUB5w2Dbyl3powosjbMeR/view?usp=sharing"
                        target="_blank"
                      >
                        <Button className="sm:mt-10" color="primary">
                          Certificate
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="sm:px-10 pl-10 pb-5 sm:gap-8 flex flex-col sm:flex sm:flex-row">
                  <img
                    alt="Logo FGA"
                    src="./assets/FGA.png"
                    className="w-60 max-w-sm rounded-lg shadow-2xl"
                  />
                  <div className="sm:flex sm:flex-col">
                    <p className="pt-6 text-3xl font-semibold">
                      Fresh Graduate Academy
                    </p>
                    <p className="text-xl pb-6 text-start">
                      Program: Big Data Using Python
                    </p>
                    <div className="flex flex-row justify-items-start gap-4">
                      <Link
                        to="https://digitalent.kominfo.go.id/"
                        target="_blank"
                      >
                        <Button className="sm:mt-10" color="primary">
                          Click Here
                        </Button>
                      </Link>
                      <Link
                        to="https://drive.google.com/file/d/1wZ9wyHd75P3ZTRlkbR8lSWRwH5cIVhr-/view?usp=sharing"
                        target="_blank"
                      >
                        <Button className="sm:mt-10" color="primary">
                          Certificate
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="sm:px-10 pl-10 pb-5 sm:gap-8 flex flex-col sm:flex sm:flex-row">
                  <img
                    alt="Logo Sanbercode"
                    src="./assets/sanbercode.jpg"
                    className="w-60 h-72 max-w-sm rounded-lg shadow-2xl"
                  />
                  <div className="sm:flex sm:flex-col">
                    <p className="pt-6 text-3xl text-left font-semibold">
                      Sanbercode
                    </p>
                    <p className="text-xl pb-6 text-start">
                      Program 1: Laravel Web Development
                    </p>
                    <p className="text-xl pb-6 text-start">
                      Program 2: ReactJS Web Frontend
                    </p>
                    <p className="text-xl pb-6 text-start">
                      Program 3: Python Backend Development
                    </p>
                    <p className="text-xl pb-6 text-start">
                      Program 4: NodeJS Backend With AdonisJS
                    </p>
                    <p className="text-xl pb-6 text-start">
                      Program 5: Machine Learning & Public Opinion Analysis
                    </p>
                    <div className="flex flex-row justify-items-start gap-4">
                      <Link to="https://sanbercode.com/" target="_blank">
                        <Button className="sm:mt-10" color="primary">
                          Click Here
                        </Button>
                      </Link>
                      <Link
                        to="https://drive.google.com/drive/folders/1MuuyynThwg91vrndMSfU8dU68Ml1sXDn?usp=sharing"
                        target="_blank"
                      >
                        <Button className="sm:mt-10" color="primary">
                          Certificate
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Hero.Content>
        </Hero>
      </div>
    </CSSTransition>
  );
}
