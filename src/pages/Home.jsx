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
      <div className="bg-base-100 text-base-content pt-32">
        <div className="flex flex-row items-center justify-center h-auto sm:h-auto pb-20">
          <Card className="w-5/6 sm:w-5/12 bg-base-200 text-base-content transition-all duration-300 shadow-md hover:shadow-lg border-none overflow-hidden">
            <Card.Image
              className="h-96 sm:h-[32rem] object-cover"
              src="./assets/myfoto.png"
              alt="Photo Profile"
            />
            <Card.Body className="items-center text-center">
              <Card.Title
                className="text-center text-4xl font-bold drop-shadow-sm mb-2 text-slate-700"
                tag="h2"
              >
                Hello!
              </Card.Title>
              <p className="sm:px-10 py-6 text-xl text-center font-medium leading-relaxed text-slate-600">
                I'm Aditya Aprianto, A Web Developer, IoT Engineer and Data Analyst
              </p>
              <Card.Actions className="justify-center w-full mt-4">
                <Link to="/about">
                  <Button
                    className="text-lg shadow-md font-bold rounded-full hover:shadow-lg transition-all duration-300 px-10 bg-sky-400 text-white hover:bg-sky-500 border-none"
                  >
                    About Me
                  </Button>
                </Link>
              </Card.Actions>
            </Card.Body>
          </Card>
        </div>

        <Hero className="py-12 transition-all duration-300 bg-base-200">
          <Hero.Content className="py-16 sm:py-24 w-full max-w-6xl">
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
        <Hero className="py-16 transition-all duration-300 bg-base-100">
          <div className="flex flex-col gap-10 py-10 w-full max-w-6xl px-4 sm:px-0">
            <h1 className="font-bold text-4xl text-center text-blue-600 mb-8">Skills</h1>
            <Card className="w-full bg-base-100 border border-base-200 transition-all duration-300 shadow-sm hover:shadow-md">
              <Card.Body className="items-center text-center p-8 sm:p-12">
                <div className="grid sm:grid-cols-5 gap-8 grid-cols-3 place-items-center">
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
        <Card className="mt-16 mb-20 max-w-4xl mx-auto bg-blue-50/50 border border-blue-100 transition-all duration-300 shadow-sm hover:shadow-md">
          <Card.Body className="items-center text-center py-16">
            <Card.Title
              className="text-center text-3xl sm:text-4xl font-bold text-blue-600"
              tag="h2"
            >
              Wanna See My Projects?
            </Card.Title>
            <p className="sm:mx-36 py-6 text-lg sm:text-xl text-slate-600 font-medium">
              Explore my latest works and what I have built.
            </p>
            <Card.Actions className="justify-center mt-6">
              <Link to="/projects">
                <Button
                  color="primary"
                  className="text-lg shadow-sm font-semibold rounded-full hover:shadow-md transition-all duration-300 px-10"
                >
                  Go To My Projects
                </Button>
              </Link>
            </Card.Actions>
          </Card.Body>
        </Card>
      </div>
    </CSSTransition>
  );
}
