import Banner from "../components/Banner/Banner";
import Button from "../components/Button/Button";
import Hero from "../components/Hero/Hero";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <h1>Home</h1>
      <p>Subtitle</p>
      <Button buttonStyle="primary">Olá</Button>
      <div className="container">
        <Hero />
      </div>
      <Footer />
    </>
  );
}

export default Home;
