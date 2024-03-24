import "./App.css";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
import Home from "./component/home/Home";
import News from "./component/news/News";
import Service from "./component/service/Service";

function App() {
  return (
    <div className="container-fluid " style={{ overflow: "hidden" }}>
      <Service />
      <Home />
      <Contact />
      <About />
      <News />
      <Footer />
    </div>
  );
}

export default App;
