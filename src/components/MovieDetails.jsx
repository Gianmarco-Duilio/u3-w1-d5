import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [movieDetails, setMovieDatails] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = () => {
      fetch(`http://www.omdbapi.com/?apikey=cc2f21e7&i=${params.movieId}`)
        .then((response) => {
          if (response.ok) {
            console.log(response);
            return response.json();
          } else {
            throw new Error("Errore durante il recupero dei dettagli del Film");
          }
        })
        .then((movieData) => {
          console.log(movieData);
          setMovieDatails(movieData);
        })
        .catch((err) => {
          console.log("Errore durante il recupero dei dettagli del Film", err);
          navigate("/notFound");
        });
    };
    fetchMovieDetail();
  }, []);

  return (
    <div>
      {movieDetails && (
        <Card>
          <Card.Img variant="top" src={movieDetails.Poster} />
          <Card.Body>
            <Card.Title>Titolo: {movieDetails.Title}</Card.Title>
            <Card.Text>Anno: {movieDetails.Year}</Card.Text>
            <Card.Text>Uscita: {movieDetails.Released}</Card.Text>
            <Card.Text>Attori: {movieDetails.Actors}</Card.Text>
            <Card.Text>Scrittori: {movieDetails.Writer}</Card.Text>
            <Card.Text>Premi: {movieDetails.Awards}</Card.Text>
            <Card.Text>Direttore: {movieDetails.Director}</Card.Text>
            <Card.Text>Genere: {movieDetails.Genre}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};
export default MovieDetail;
