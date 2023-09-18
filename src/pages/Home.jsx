import { Card, Button, Hero, Avatar } from "react-daisyui";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Home() {
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
      <div className="font-serif bg-gradient-to-bl from-slate-200 to-stone-300 pt-32">
        <div className="flex flex-row items-center justify-center h-160 sm:h-200">
          <Card className="h-128 w-5/6 sm:w-5/12 sm:h-160 bg-orange-300 transition-opacity duration-300 shadow-2xl">
            <Card.Image
              className="sm:h-160 h-96"
              src="./assets/myfoto.png"
              alt="Photo Profile"
            />
            <Card.Body className="items-center text-center">
              <Card.Title
                className="text-center text-4xl font-bold box-decoration-slice bg-gradient-to-r from-indigo-400 to-lime-400 text-white pr-8"
                tag="h2"
              >
                Hello!
              </Card.Title>
              <p className=" sm:px-10 py-10 text-2xl text-center text-lime-900 font-semibold font-serif">
                I'm Aditya Aprianto, A Web Developer, IoT Engineer and Data
                Analyst
              </p>
              <Card.Actions className="justify-end">
                <Link to="/about">
                  <Button
                    color="primary"
                    className="bg-green-500 text-l shadow-2xl font-bold hover:animate-bounce hover:h-14 hover:w-32 hover:bg-cyan-800"
                  >
                    About Me
                  </Button>
                </Link>
              </Card.Actions>
            </Card.Body>
          </Card>
        </div>

        <Hero className="py-4 transition ease-in duration-300 bg-gradient-to-tr from-red-300 to-orange-400">
          <Hero.Overlay className="bg-gradient-to-tr from-red-300 to-orange-400" />
          <Hero.Content className="py-20 sm:py-32 bg-gradient-to-tr from-red-300 to-orange-400">
            <div>
              <div>
                <h1 className="text-3xl sm:text-5xl font-bold">Profile</h1>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:place-items-stretch">
                <div className="flex flex-col gap-5">
                  <p className="text-xl sm:text-3xl font-bold">Summary</p>
                  <p className="text-md sm:text-lg text-justify">
                    A junior web developer and data analyst who has worked on
                    various projects. Familiar with various frameworks such as
                    Laravel, ReactJS, and ExpressJS and familiar with SQL and
                    NoSQL databases. Machine learning projects that have been
                    done are sentiment analysis, churn classification, and
                    forecasting. In addition, deep learning projects that have
                    been done are object detection and face detection.
                  </p>
                </div>
                <div className="flex flex-row justify-center items-center pt-10 sm:p-0">
                  <Avatar
                    borderColor="success"
                    shape="circle"
                    size={200}
                    src="./assets/Pas_Foto.jpg"
                  />
                </div>
                <div className="pt-10 sm:pt-0 flex flex-col justif-between gap-3">
                  <p className="text-xl sm:text-3xl font-bold">Details</p>
                  <div>
                    <p className="text-md sm:text-xl font-bold">Name:</p>
                    <p className="text-md sm:text-xl">Aditya Aprianto</p>
                  </div>
                  <div>
                    <p className="text-md sm:text-xl font-bold">Age:</p>
                    <p className="text-md sm:text-xl">26 y.o</p>
                  </div>
                  <div>
                    <p className="text-md sm:text-xl font-bold">Location:</p>
                    <p className="text-md sm:text-xl">
                      Kelapa Dua District, Tangerang Regency
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Hero.Content>
        </Hero>
        <Hero className="py-4 transition ease-in duration-300 bg-gradient-to-tr bg-slate-300">
          <div className="flex flex-col gap-10 py-10">
            <h1 className="font-bold text-3xl">Skills:</h1>
            <Card className="w-full bg-gradient-to-tr from-orange-300 to-red-300 transition-opacity duration-300 shadow-2xl">
              <Card.Body className="items-center text-center">
                <div className="grid sm:grid-cols-4 sm:gap-4 grid-cols-3">
                  <div>
                    <Avatar
                      borderColor="success"
                      title="Adonis"
                      shape="square"
                      size={100}
                      src="./assets/Logo_Adonis.png"
                    />
                  </div>
                  <div>
                    <Avatar
                      borderColor="success"
                      title="ReactJS"
                      shape="square"
                      size={100}
                      src="./assets/ReactJS.png"
                    />
                  </div>
                  <div>
                    <Avatar
                      borderColor="success"
                      title="Node JS"
                      shape="square"
                      size={100}
                      src="./assets/Node-JS.png"
                    />
                  </div>
                  <div>
                    <Avatar
                      borderColor="success"
                      title="Python"
                      shape="square"
                      size={100}
                      src="./assets/Python.png"
                    />
                  </div>
                  <div>
                    <Avatar
                      borderColor="success"
                      title="Javascript"
                      shape="square"
                      size={130}
                      src="./assets/Javascript.png"
                    />
                  </div>
                  <div>
                    <Avatar
                      borderColor="success"
                      title="PHP"
                      shape="square"
                      size={100}
                      src="./assets/PHP.png"
                    />
                  </div>
                  <div>
                    <Avatar
                      borderColor="success"
                      title="C++"
                      shape="square"
                      size={130}
                      src="./assets/Logo_C++.png"
                    />
                  </div>
                  <div>
                    <Avatar
                      borderColor="success"
                      title="MYSQL"
                      shape="square"
                      size={100}
                      src="./assets/MYSQL.png"
                    />
                  </div>
                  <div>
                    <Avatar
                      borderColor="success"
                      title="PostgreSQL"
                      shape="square"
                      size={100}
                      src="./assets/PostgreSQL.png"
                    />
                  </div>
                  <div>
                    <Avatar
                      borderColor="success"
                      title="MongoDB"
                      shape="square"
                      size={100}
                      src="./assets/mongodb.png"
                    />
                  </div>
                  <div>
                    <Avatar
                      borderColor="success"
                      title="Laravel"
                      shape="square"
                      size={100}
                      src="./assets/Laravel.png"
                    />
                  </div>
                  <div>
                    <Avatar
                      borderColor="success"
                      title="Wordpress"
                      shape="square"
                      size={100}
                      src="./assets/Wordpress.png"
                    />
                  </div>
                  <div>
                    <Avatar
                      borderColor="success"
                      title="Fast API"
                      shape="square"
                      size={100}
                      src="./assets/FastAPI-Logo.png"
                    />
                  </div>
                  <div>
                    <Avatar
                      borderColor="success"
                      title="Flask API"
                      shape="square"
                      size={100}
                      src="./assets/Flask-Logo.png"
                    />
                  </div>
                  <div>
                    <Avatar
                      borderColor="success"
                      title="Amazon Web Service"
                      shape="square"
                      size={100}
                      src="./assets/AWS.png"
                    />
                  </div>
                  <div>
                    <Avatar
                      borderColor="success"
                      title="TensorFlow"
                      shape="square"
                      size={100}
                      src="./assets/Tensorflow.png"
                    />
                  </div>
                  <div>
                    <Avatar
                      borderColor="success"
                      title="Data Science"
                      shape="square"
                      size={130}
                      src="./assets/Data_Science.png"
                    />
                  </div>
                  <div>
                    <Avatar
                      borderColor="success"
                      title="Flutter Mobile Apps"
                      shape="square"
                      size={100}
                      src="./assets/Flutter.png"
                    />
                  </div>
                  <div>
                    <Avatar
                      borderColor="success"
                      title="Arduino"
                      shape="square"
                      size={100}
                      src="./assets/Arduino-Logo.png"
                    />
                  </div>
                  <div>
                    <Avatar
                      borderColor="success"
                      title="MQTT"
                      shape="square"
                      size={100}
                      src="./assets/MQTT.png"
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Hero>
        <Card className="h-fit bg-slate-300 transition-opacity duration-300">
          <Card.Body className="items-center text-center">
            <Card.Title
              className="text-center text-2xl sm:text-5xl font-bold box-decoration-slice  bg-gradient-to-r from-indigo-400 to-lime-400 text-white pr-8"
              tag="h2"
            >
              Wanna See My Projects?
            </Card.Title>
            <p className="sm:mx-36 sm:px-24 py-10 text-l sm:text-xl text-lime-900 font-semibold">
              Please Click The Button Below
            </p>
            <Card.Actions className="justify-end hover:animate-bounce">
              <Link to="/projects">
                <Button
                  color="primary"
                  className="text-l font-bold hover:h-14 hover:w-48 hover:bg-cyan-800"
                >
                  Go To My Project
                </Button>
              </Link>
            </Card.Actions>
          </Card.Body>
        </Card>
      </div>
    </CSSTransition>
  );
}
