import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Membership from "./Components/Membership";
import Navbar from "./Components/Navbar";
import Offers from "./Components/Offers";

function App() {
  return (
    <div className=" bg-white">
      <Navbar />
      <hr />
      <Hero />
      <hr />
      <Membership />
      <Offers />
      <Footer />
    </div>
  );
}

export default App;
