import { Footer } from "react-daisyui";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useState, useEffect } from "react";

export default function MyFooter() {
  // "TO" dengan alamat email penerima
  const toEmail = "aditbest5@gmail.com";

  // "SUBJECT" dengan subjek email
  const subject = "Introduction";

  // "BODY" dengan isi email
  const body = "Isi";

  // URL Gmail dengan parameter yang sesuai
  const gmailURL = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${toEmail}&su=${subject}&body=${body}`;

  const phoneNumber = "+6289630317045";

  const whatsappURL = `https://wa.me/${phoneNumber}`;

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
      <Footer dataTheme={"aqua"} className="p-10">
        <div>
          <p className="py-8 text-lg font-bold">Build With</p>
          <div className="flex flex-row justify-between">
            <img
              className="h-24 w-24"
              alt="ReactJS"
              title="ReactJS"
              src="./assets/ReactJS.png"
            />
            <img
              className="h-24 w-24"
              title="Tailwind"
              alt="Tailwind"
              src="./assets/Tailwind.png"
            />
            <img
              className="h-24 w-24"
              title="DaisyUI"
              alt="DaisyUI"
              src="./assets/daisyui.png"
            />
          </div>
        </div>
        <div>
          <Footer.Title>Contact</Footer.Title>
          <Link to={gmailURL} target="_blank" className="link link-hover">
            Email
          </Link>
          <Link to={whatsappURL} target="_blank" className="link link-hover">
            WhatsApp
          </Link>
          <Link
            to="https://www.linkedin.com/in/aditya-aprianto-274286177/"
            target="_blank"
            className="link link-hover"
          >
            Linkedin
          </Link>
          <Link
            to="https://www.instagram.com/aditya.aprianto97"
            target="_blank"
            className="link link-hover"
          >
            Instagram
          </Link>
        </div>
        <div>
          <Footer.Title>Certificate</Footer.Title>
          <Link
            to="https://drive.google.com/file/d/1NNsEBFPs9kfFUB5w2Dbyl3powosjbMeR/view?usp=sharing"
            target="_blank"
            className="link link-hover"
          >
            Data Science
          </Link>
          <Link
            to="https://drive.google.com/file/d/1e_Fr5Ca8DnB4cXkaVJFm_8pDVn3lA_B7/view?usp=sharing"
            target="_blank"
            className="link link-hover"
          >
            Web Development
          </Link>
          <Link
            to="https://drive.google.com/file/d/1GM1tX_nLwZVlxnr84PfJ5iwGYwwsh0qc/view?usp=sharing"
            target="_blank"
            className="link link-hover"
          >
            IoT Engineer
          </Link>
          <Link
            to="https://drive.google.com/file/d/12ay98QK5ThncVdBf1ao6OPX9nwh176mD/view?usp=sharing"
            target="_blank"
            className="link link-hover"
          >
            PLC
          </Link>
        </div>
        <div>
          <Footer.Title>Address</Footer.Title>
          <p className="text-sm">Jl. Dasana Indah Blok UC 18 No 6</p>
          <p className="text-sm"> Bojong Nangka District, Tangerang District</p>
        </div>
      </Footer>
    </CSSTransition>
  );
}
