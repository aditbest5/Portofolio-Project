import { Hero, Button, Divider } from "react-daisyui";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

export default function FrontEndProject() {
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
              alt="Front End"
              src="./assets/Front-End.jpg"
              className="sm:max-w-2xl rounded-lg shadow-2xl w-96"
            />
            <div className="mx-0 px-0">
              <h1 className="sm:text-5xl text-3xl font-bold">
                About Front End Project
              </h1>
              <p className="py-6 px-10 text-2xl">
                This front end project consists of Social Media Website, Job
                Portal Website, and Attendance Management Website.
              </p>
            </div>
          </Hero.Content>
        </Hero>
        <Divider>Social Media Web</Divider>
        <Hero className="py-10">
          <Hero.Content className="flex flex-col bg-slate-200">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold">Social Media Web</h1>
              <h1 className="text-xl font-semibold sm:px-48 py-10">
                The social media website was built using the ReactJS framework
                and Tailwindcss. The website allows users to post their
                activities, thoughts, and ideas into a website platform. In
                addition, users can also comment on other people's posts. User
                must have a token to login to homepage
              </h1>
              <img
                alt="Logo ReactJS"
                src="./assets/ReactJS-Logo.png"
                className="sm:max-w-l self-center max-w-xs"
              />
            </div>
            <div className="self-center sm:flex sm:flex-col sm:gap-10 flex flex-col gap-10">
              <h1 className="font-bold text-3xl">Register and Login</h1>
              <div className="sm:flex sm:flex-row sm:justify-between sm:gap-20">
                <div className="flex flex-col gap-4 border-stone-300 border-solid border-2 p-2">
                  <h1 className="text-xl font-semibold">Register Page</h1>
                  <img
                    alt="Register Page"
                    src="./assets/Register_Page.jpg"
                    className="max-w-l"
                  />
                  <h1 className="text-5xl font-semibold">⇩</h1>
                  <h1 className="text-l font-medium">
                    Incorrect Password Validation
                  </h1>
                  <img
                    src="./assets/Password_Validation.jpg"
                    alt="Password Incorrect"
                    className="max-w-l"
                  />
                </div>
                <div className="flex flex-col gap-4 border-stone-300 border-solid border-2 p-2">
                  <h1 className="text-xl font-semibold">Login Page</h1>
                  <img
                    alt="Login Page"
                    src="./assets/Login_Page.jpg"
                    className="max-w-l"
                  />
                </div>
              </div>
            </div>
            <h1 className="font-bold text-3xl py-8">
              Profile and Edit Profile
            </h1>
            <div className="sm:flex sm:flex-row sm:justify-around gap-24">
              <div className="pt-10 sm:flex sm:flex-col sm:justify-start border-stone-300 gap-4 border-solid border-2 p-2">
                <h1 className="text-center font-semibold text-2xl">
                  Profile Page
                </h1>
                <img
                  src="./assets/Profile_Page.jpg"
                  alt="Profile Page"
                  className="max-w-l"
                />
                <h1 className="text-5xl font-semibold">⇩</h1>
                <h1 className="text-sm font-medium">Must Verify Account</h1>
                <img
                  src="./assets/Verify_Account.jpg"
                  alt="Verify Account"
                  className="max-w-l"
                />
              </div>
              <div className="pt-10 sm:flex sm:flex-col sm:justify-start gap-4 border-stone-300 border-solid border-2 p-2">
                <h1 className="text-center font-semibold text-2xl">
                  Edit Profile
                </h1>
                <img
                  src="./assets/Edit_Profile.jpg"
                  alt="Edit Profile"
                  className="max-w-l"
                />
                <h1 className="text-5xl font-semibold">⇩</h1>
                <h1 className="text-sm font-medium">Change Passowrd</h1>
                <img
                  src="./assets/change_password.jpg"
                  alt="Change Password"
                  className="max-w-l"
                />
              </div>
            </div>
            <h1 className="font-bold text-3xl py-8">
              Verify Account and Reset Password
            </h1>
            <div className="sm:flex sm:flex-row sm:justify-around gap-24">
              <div className="pt-10 sm:flex sm:flex-col sm:justify-start gap-4 border-stone-300 border-solid border-2 p-2">
                <h1 className="text-center font-semibold text-2xl">
                  Verify Account
                </h1>
                <h1 className="text-sm font-medium">Click Here</h1>

                <img
                  src="./assets/Activation_Email.jpg"
                  alt="Profile Page"
                  className="max-w-l"
                />
                <h1 className="text-5xl font-semibold">⇩</h1>
                <h1 className="text-sm font-medium">Success Verify</h1>
                <img
                  src="./assets/Account_Verified.jpg"
                  alt="Account Verified"
                  className="max-w-l"
                />
              </div>
              <div className="pt-10 sm:flex sm:flex-col sm:justify-start gap-4 border-stone-300 border-solid border-2 p-2">
                <h1 className="text-center font-semibold text-2xl">
                  Reset / Forgot Password
                </h1>
                <h1 className="text-sm font-medium">
                  Click <i>Send Link</i>
                </h1>
                <img
                  src="./assets/Forgot_Password.jpg"
                  alt="Forgot Password"
                  className="max-w-l"
                />
                <h1 className="text-5xl font-semibold">⇩</h1>
                <h1 className="text-sm font-medium">
                  Click <i>here</i> in email
                </h1>
                <img
                  src="./assets/email_reset.jpg"
                  alt="Email Reset"
                  className="max-w-l"
                />
                <h1 className="text-5xl font-semibold">⇩</h1>
                <h1 className="text-sm font-medium">Reset Password</h1>
                <img
                  src="./assets/reset_password.jpg"
                  alt="Reset Password"
                  className="max-w-l"
                />
              </div>
            </div>
            <h1 className="font-bold text-3xl py-8">Homepage / Posting Page</h1>
            <div className="sm:flex sm:flex-row sm:justify-around gap-24">
              <div className="pt-10 sm:flex sm:flex-col sm:justify-start gap-4 border-stone-300 border-solid border-2 p-2">
                <h1 className="text-center font-semibold text-2xl">Posting</h1>
                <img
                  src="./assets/posting.jpg"
                  alt="Posting Page"
                  className="max-w-l"
                />
                <h1 className="text-5xl font-semibold">⇩</h1>
                <h1 className="text-sm font-medium">Posting Result</h1>
                <img
                  src="./assets/Hasil_Posting.jpg"
                  alt="Posting Result"
                  className="max-w-l"
                />
              </div>
              <div className="pt-10 sm:flex sm:flex-col sm:justify-start gap-4 border-stone-300 border-solid border-2 p-2">
                <h1 className="text-center font-semibold text-2xl">Comment</h1>
                <img
                  src="./assets/Komentar.jpg"
                  alt="Comment"
                  className="max-w-l"
                />
              </div>
            </div>
            <h1 className="font-bold text-3xl py-8">Demo Live</h1>
            <video width="480" height="320" controls>
              <source
                src="./assets/bandicam 2023-05-16 23-31-59-133.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div>
              <h1 className="text-lg">More About This Project?</h1>
            </div>
            <div>
              <Link
                to="https://github.com/aditbest5/Front-End-Project"
                target="_blank"
              >
                <Button color="primary">GO TO REPOSITORY</Button>
              </Link>
            </div>
          </Hero.Content>
        </Hero>
        <Divider>Attendance Management Website</Divider>
      </div>
    </CSSTransition>
  );
}
