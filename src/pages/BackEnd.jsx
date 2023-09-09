import { Hero, Button, Divider } from "react-daisyui";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

export default function BackEndProject() {
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
      <div className="pt-20">
        <Hero>
          <Hero.Content className="xs:flex xs:flex-col w-9/12 bg-opacity-60 bg-cyan-200">
            <img
              alt="Back End"
              src="./assets/Back-End.png"
              className="sm:max-w-xs rounded-lg shadow-2xl w-60"
            />
            <div className="mx-0 px-0">
              <h1 className="sm:text-5xl text-3xl font-bold">
                About Back End Project
              </h1>
              <p className="py-6 px-10 text-2xl">
                This back end project consists of library API, Social Media API,
                and movie rental API.
              </p>
            </div>
          </Hero.Content>
        </Hero>
        <Divider>Library API</Divider>
        <Hero className="py-10">
          <Hero.Content className="flex flex-col bg-slate-200">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold">Library API</h1>
              <h1 className="text-xl font-semibold sm:px-48 py-10">
                The Library API was created for library purposes. This API uses
                RESTful API and NodeJS with AdonisJS framework. This library can
                be used to register new books in the library, register new
                users, and make book loans. In addition, there is an
                authentication and authorization process using a token and can
                send a mailer.
              </h1>
              <img
                alt="Logo AdonisJS"
                src="./assets/AdonisJS.png"
                className="sm:max-w-xl self-center max-w-xs"
              />
            </div>
            <div className="self-center sm:flex sm:flex-row sm:gap-60 flex flex-col gap-10">
              <ul>
                <h1 className="text-start font-semibold text-2xl">
                  There are 5 group endpoint:
                </h1>
                <li>
                  <ul className="text-start list-outside list-decimal ml-8">
                    <li>
                      <h1>
                        <b>Authentication</b>, Have 4 Endpoint:
                      </h1>
                      <ul className="text-start list-inside list-disc">
                        <li>POST -> /register</li>
                        <li>POST -> /login</li>
                        <li>POST -> /otp-confirmation</li>
                        <li>POST-> /profile</li>
                      </ul>
                    </li>
                    <li>
                      <h1>
                        <b>Category</b>, Have 5 Endpoint:
                      </h1>
                      <ul className="text-start list-inside list-disc">
                        <li>GET -> /kategori</li>
                        <li>POST -> /Kategori</li>
                        <li>GET -> /kategori/:id</li>
                        <li>DELETE -> /kategori/:id</li>
                        <li>PUT/PATCH -> /kategori/:id</li>
                      </ul>
                    </li>
                    <li>
                      <h1>
                        <b>Peminjaman</b>, Have 3 Endpoint:
                      </h1>
                      <ul className="text-start list-inside list-disc">
                        <li>GET -> /peminjaman</li>
                        <li>GET -> /peminjaman/:id</li>
                        <li>POST -> /buku/:id/peminjaman</li>
                      </ul>
                    </li>
                    <li>
                      <h1>
                        <b>Book</b>, Have 5 Endpoint:
                      </h1>
                      <ul className="text-start list-inside list-disc">
                        <li>GET -> /buku</li>
                        <li>POST -> /buku</li>
                        <li>GET -> /buku/:id</li>
                        <li>DELETE -> /buku/:id</li>
                        <li>PUT/PATCH -> /buku/:id</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <div>
                <h1 className="text-2xl text-start font-semibold">Overview:</h1>
                <ul className="text-start list-outside list-decimal">
                  <li>
                    User <br />
                    Users table attributes: id, name, password, email, role
                    <br />
                    Application user data. There are 2 roles: 'user', 'admin'.
                    <br />
                    user: ordinary users who can borrow books. officer: library
                    <br />
                    officer in charge of recording book loans.{" "}
                  </li>
                  <li>
                    Categories
                    <br />
                    Category table attributes: id, name
                    <br />
                    Book Category Data
                  </li>
                  <li>
                    Book
                    <br />
                    Book table attributes: id, title, summary, year_published,
                    page, category_id
                    <br />A book is part of a category. Each category will have
                    many books
                  </li>
                  <li>
                    Borrowing
                    <br />
                    Borrowing table attributes: user_id, book_id, date_borrowed,
                    date_returned <br />
                    borrowing is the borrowing schedule or book return schedule
                    for each user.
                  </li>
                </ul>
              </div>
            </div>
            <div className="sm:flex sm:flex-row sm:justify-around gap-24">
              <div className="pt-10 sm:flex sm:flex-col sm:justify-start">
                <h1 className="text-center font-semibold text-2xl">WorkFlow</h1>
                <img src="./assets/Workflow.png" alt="Workflow API" />
              </div>
              <div className="pt-10 sm:flex sm:flex-col sm:justify-start">
                <h1 className="text-center font-semibold text-2xl">
                  Design ERD
                </h1>
                <img src="./assets/Library-ERD.jpg" alt="Desain ERD" />
              </div>
            </div>

            <div>
              <h1 className="text-lg">More About This Project?</h1>
            </div>
            <div>
              <Link
                to="https://gitlab.com/adityaaprianto97/final-project-aditya-aprianto-bds-nodejs-sanbercode-batch-48"
                target="_blank"
              >
                <Button color="primary">GO TO REPOSITORY</Button>
              </Link>
            </div>
          </Hero.Content>
        </Hero>
        <Divider>Movie Rental API</Divider>
        <Hero className="py-10">
          <Hero.Content className="flex flex-col bg-slate-200">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold">Movie Rental API</h1>
              <h1 className="text-xl font-semibold sm:px-48 py-10">
                A movie rental API (Application Programming Interface) is a
                software interface that allows an application or service to
                interact with a movie rental system or digital media library.
                This API can provide access to various features and data related
                to movie rental, such as a list of available movies, information
                about specific movies, the booking process, and more. This API
                is done using python programming language and also FastAPI
                framework with SQLAlchemy ORM.
              </h1>
              <img
                alt="Logo FastAPI"
                src="./assets/FastAPI.png"
                className="sm:max-w-xl self-center max-w-xs"
              />
            </div>
            <div className="self-center sm:flex sm:flex-row sm:gap-30 flex flex-col gap-10">
              <ul>
                <h1 className="text-start font-semibold text-2xl">
                  There are 5 endpoint:
                </h1>
                <li>
                  <ul className="text-start list-outside list-decimal ml-8 flex flex-col gap-5">
                    <li>
                      <h1>
                        <b>GET</b> /api/movies
                      </h1>
                      <h1>Used to retrieve data for all movies</h1>
                    </li>
                    <li>
                      <div className="flex flex-col gap-5">
                        <h1>
                          <b>GET</b> /api/peminjaman
                        </h1>
                        <h2>
                          Used to call all data borrowing data and protected
                          with JWT
                        </h2>
                        <h2>User admin (username admin):</h2>
                        <h2> - Can see all loans from all users</h2>
                        <h2> User biasa:</h2>
                        <h2> - Can see only borrowings by that use </h2>
                      </div>
                    </li>
                    <li>
                      <h1>
                        <b>POST</b> /api/user
                      </h1>
                      <div className="flex flex-col gap-5">
                        <h2>Can only be accessed by admin users</h2>
                        <h2>Protected by JWT</h2>
                        <h2>Used to add, change, delete user data</h2>
                        <h2>Schema Input pada Body:</h2>

                        <h3>For add new data:</h3>
                        <pre>
                          {`
{
  "aksi": "N",
  "userid": Null/None
  "data": {
    "username": ...,
    "password": ...,
    "email": ...
  }
}`}
                        </pre>

                        <h3>For modify data:</h3>
                        <pre>
                          {`
{
  "aksi": "E",
  "userid": ...,
  "data": {
    "username": ...
  }
}`}
                        </pre>

                        <h3>For delete data:</h3>
                        <pre>
                          {`
{
  "aksi": "D",
  "userid": ...,
  "data": {}
}`}
                        </pre>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
              <div>
                <ul className="text-start list-outside list-decimal pt-8">
                  <li>
                    <h1>
                      <b>POST</b> /api/peminjaman
                    </h1>
                    <div className="flex flex-col gap-5">
                      <h2>Used to add and modify loan data</h2>
                      <h2>Can only be accessed by admin</h2>
                      <h2>Protected by JWT</h2>
                      <h2>Schema Input pada Body:</h2>
                      <h3>For new data:</h3>
                      <pre>
                        {`
{
  "aksi": "N",
  "peminjamanid: Null/None
  "data":{
    "movieid": ...,
    "userid": ...,
    "status": ...,
  } 
}`}
                      </pre>

                      <h3>For modify data:</h3>
                      <pre>
                        {`
{
  "aksi": "E"
  "peminjamanid":...
  "data":{
    "username": ...
  }
}`}
                      </pre>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-col gap-5">
                      <h1>
                        <b>POST</b> /api/token
                      </h1>
                      <h2>Used to request a new access token</h2>
                      <h2>data used as payload: username, password</h2>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="sm:flex sm:flex-row sm:justify-around gap-24">
              <div className="pt-10 sm:flex sm:flex-col sm:justify-start">
                <h1 className="text-center font-semibold text-2xl">WorkFlow</h1>
                <img src="./assets/Workflow-Movie.png" alt="Workflow Movie" />
              </div>
              <div className="pt-10 sm:flex sm:flex-col sm:justify-start">
                <h1 className="text-center font-semibold text-2xl">
                  Design ERD
                </h1>
                <img src="./assets/Movie-ERD.png" alt="Desain ERD" />
              </div>
            </div>
            <div>
              <h1 className="text-lg">More About This Project?</h1>
            </div>
            <div>
              <Link
                to="https://gitlab.com/adityaaprianto97/final-project-aditya-aprianto-pbd-sanbercode-batch-46"
                target="_blank"
              >
                <Button color="primary">GO TO REPOSITORY</Button>
              </Link>
            </div>
          </Hero.Content>
        </Hero>
      </div>
    </CSSTransition>
  );
}
