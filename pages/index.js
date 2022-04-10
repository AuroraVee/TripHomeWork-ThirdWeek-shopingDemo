import { Divider } from "antd";
import "antd/dist/antd.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/main";

export default function Home() {
  return (
    <>
      <Header  />
      <Divider />
      <Main />
      <Footer />
    </>
  );
}
