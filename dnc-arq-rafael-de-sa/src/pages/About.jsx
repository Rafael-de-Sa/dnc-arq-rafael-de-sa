import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import AboutText from "../components/AboutText/AboutText";

function About() {
  return (
    <>
      <Header />
      <Banner title="About" image="about.jpg" />
      <div className="container">
        <AboutText />
      </div>
      {/*TODO: 7:00*/}
      <Footer />
    </>
  );
}

export default About;
