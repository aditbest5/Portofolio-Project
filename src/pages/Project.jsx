import { Hero, Button } from "react-daisyui";
import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

export default function Project() {
  const [showComponent, setShowComponent] = useState(false);
  const scrollRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToBottom = () => {
    if (!isScrolling) {
      setIsScrolling(true);

      window.scrollTo({
        top: scrollRef.current.offsetTop,
        behavior: "smooth",
      });

      // Setelah selesai menggulir, atur kembali ke false setelah beberapa detik
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000); // Ubah angka ini sesuai kebutuhan
    }
  };
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
      <div>
        <Hero className="pt-16">
          <Hero.Overlay className="bg-opacity-60 bg-stone-100" />
          <Hero.Content className="text-center">
            <div className="max-w-4xl flex flex-col justify-between gap-10">
              <h1 className="text-4xl font-bold">Welcome to My Project</h1>
              <div className="carousel w-full sm:h-128">
                <div id="slide1" className="carousel-item relative w-full">
                  <img
                    alt="Front End"
                    src="./assets/Front-End.jpg"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                  <img
                    alt="Back End"
                    src="./assets/Back-End.png"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                  <img
                    alt="Arduino IoT"
                    src="./assets/Arduino-IoT.jpg"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide4" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                  <img
                    alt="Data Science"
                    src="./assets/Data-Science.jpg"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <Button onClick={scrollToBottom} color="primary">
                  Get Started
                </Button>
              </div>
            </div>
          </Hero.Content>
        </Hero>
        <Hero ref={scrollRef} className="bg-opacity-60 bg-yellow-300">
          <Hero.Content className="flex-col">
            <img
              alt="Front End"
              src="./assets/Front-End.jpg"
              className="sm:max-w-md max-w-xs sm:h-80 rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Front End Project</h1>
              <p className="py-6 px-10 sm:px-24 text-2xl">
                This project contains web front ends that have been worked on in
                the past few months. This project contains web front ends that
                have been worked on in the past few months. The project uses
                reactjs framework and OOP PHP.
              </p>
              <Link to="/front-end">
                <Button color="primary">See Detail</Button>
              </Link>
            </div>
          </Hero.Content>
        </Hero>
        <Hero className="bg-opacity-60 bg-slate-600">
          <Hero.Content className="flex-col">
            <img
              alt="Back End"
              src="./assets/Back-End.png"
              className="sm:max-w-md max-w-xs sm:h-80 rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Back End Project</h1>
              <p className="py-6 px-10 sm:px-24 text-2xl">
                This project features some API documentation from back end
                projects that have been worked on over the past few months. In
                addition, this project also features projects with the laravel
                framework
              </p>
              <Link to="/back-end">
                <Button color="primary">See Detail</Button>
              </Link>
            </div>
          </Hero.Content>
        </Hero>
        <Hero className="bg-opacity-60 bg-sky-400">
          <Hero.Content className="flex-col">
            <img
              alt="Arduino IoT"
              src="./assets/Arduino-IoT.jpg"
              className="sm:max-w-md max-w-xs sm:h-80 rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Arduino IoT Project</h1>
              <p className="py-6 px-10 sm:px-24 text-2xl">
                Internet of Things is the skill to connect a hardware/software
                with other devices.This project contains my work in making
                internet of things devices using arduino uno/mega and ESP32. The
                final project of my lecture is also contained in this project.
              </p>
              <Button color="primary">See Detail</Button>
            </div>
          </Hero.Content>
        </Hero>
        <Hero className="bg-opacity-60 bg-cyan-200">
          <Hero.Content className="flex-col">
            <img
              alt="Data Science"
              src="./assets/Data-Science.jpg"
              className="sm:max-w-md max-w-xs sm:h-80 rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Data Science Project</h1>
              <p className="py-6 px-10 sm:px-24 text-2xl">
                Data science is the study of data, be it data analysis, data
                modeling, machine learning, deep learning, and other things
                about data. In this section, I showcase some of the data science
                projects that I have worked on over the past few years.
              </p>
              <Link to="/data-science">
                <Button color="primary">See Detail</Button>
              </Link>
            </div>
          </Hero.Content>
        </Hero>
      </div>
    </CSSTransition>
  );
}
