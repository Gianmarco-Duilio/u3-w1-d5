import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

class LineOne extends Component {
  state = {
    firstArray: [],
    isLoading: true,
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=cc2f21e7&s=spider-man")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore");
        }
      })
      .then((films) => {
        console.log(films);
        this.setState({ firstArray: films.Search.slice(0 - 6), isLoading: false });
        console.log(this.state);
      })
      .catch((err) => {
        console.log("ERRORE", err);
        this.setState({ isLoading: false });
      });
  }
  render() {
    return (
      <div>
        <h2 className="text-white mt-4 ">New Releases</h2>
        {this.state.isLoading ? (
          <Spinner animation="border" variant="danger" />
        ) : (
          // Altrimenti mostriamo i risultati
          <Container fluid>
            <Row>
              {this.state.firstArray.map((film) => (
                <Col xs={6} sm={4} md={2} key={film.imdbID} id="film">
                  <Link to={"/movie-details/" + film.imdbID}>
                    <img src={film.Poster} alt={film.Title} className=" img-fluid my-2" />
                  </Link>
                </Col>
              ))}
            </Row>
          </Container>
        )}
      </div>
    );
  }
}
export default LineOne;
