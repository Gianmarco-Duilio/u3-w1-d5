import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Btn from "react-bootstrap/Button";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const Filter = () => {
  return (
    <Container fluid className="bg-dark text-white">
      <Row>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <div className="btn-group" role="group">
              <div className="dropdown ms-4 mt-1">
                <Btn
                  type="button"
                  className="btn btn-secondary btn-sm dropdown-toggle rounded-0 bg-dark"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Genres
                </Btn>
                <ul className="dropdown-menu bg-dark ">
                  <li>
                    <a className="dropdown-item text-white" href="#">
                      Comedy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="#">
                      Drama
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item text-white" href="#">
                      Thriller
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
          <div>
            <i className="bi bi-grid icons"></i>
            <i className="bi bi-grid-3x3 icons"></i>
          </div>
        </div>
      </Row>
    </Container>
  );
};
export default Filter;
