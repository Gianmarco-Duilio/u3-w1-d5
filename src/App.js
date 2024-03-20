import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TVShows from "./components/TVShows";
import MovieDetail from "./components/MovieDetails";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-dark px-5">
        <Header />
        <Routes>
          <Route
            path="/tv-shows"
            element={
              <div>
                <Filter />
                <TVShows />
              </div>
            }
          />
          <Route
            path="/movie-details/:movieId"
            element={
              <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                  <MovieDetail />
                </Col>
              </Row>
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
