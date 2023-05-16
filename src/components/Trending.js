import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import duneImage from '../assets/trending/dune.jpg';
import everythingImage from '../assets/trending/everything.jpg';
import infiniteImage from '../assets/trending/infinite.jpg';
import jokerImage from '../assets/trending/joker.jpg';
import lightyearImage from '../assets/trending/lightyear.jpg';
import morbiusImage from '../assets/trending/morbius.jpg';

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <br />
        <h1 className="text-white">Trending Movies</h1>
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className=" movieImage">
              <Image src={duneImage} alt="Dune Movies" className="images" />
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center"> DUNE </Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" movieImage">
              <Image src={everythingImage} alt="Everything" className="images" />
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center"> Everything </Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" movieImage">
              <Image src={infiniteImage} alt="Infinite" className="images" />
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center"> Infinite </Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" movieImage">
              <Image src={jokerImage} alt="joker" className="images" />
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center"> Joker </Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" movieImage">
              <Image src={lightyearImage} alt="lightyear" className="images" />
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center"> lightyear </Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" movieImage">
              <Image src={morbiusImage} alt="morbius" className="images" />
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center"> morbius </Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
