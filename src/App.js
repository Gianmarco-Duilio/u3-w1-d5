import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import LineOne from "./components/LineOne";
import LineTwo from "./components/LineTwo";
import LineThree from "./components/LineThree";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

function App() {
  return (
    <div className="App bg-dark px-5">
      <Header />
      <Filter />
      <LineOne />
      <LineTwo />
      <LineThree />
      <Footer />
    </div>
  );
}

export default App;
