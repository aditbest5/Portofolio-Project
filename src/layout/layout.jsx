import MyFooter from "../components/Footer";
import MyNavbar from "../components/Navbar";

export default function Layout(props) {
  return (
    <>
      <MyNavbar />
      {props.children}
      <MyFooter />
    </>
  );
}
