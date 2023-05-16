import { Card, Container, Row, Col, Image, h1 } from 'react-bootstrap';
import antmanImage from '../assets/superHero/antman.jpg';
import avengerImage from '../assets/superHero/avenger.jpg';
import batmanImage from '../assets/superHero/batman.jpg';
import robinhoodImage from '../assets/superHero/robinhood.jpg';
import spidermanImage from '../assets/superHero/spiderman-cover.jpg';
import supermanImage from '../assets/superHero/superman.jpg';

const SuperHero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">SuperHero Movies </h1>
        <Row>
          <Col md={4} className="movieWrapper" id="SuperHero">
            <Card className=" movieImage">
              <Image src={antmanImage} alt="Dune Movies" className="images" />
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center"> Ant-Man </Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" movieImage">
              <Image src={avengerImage} alt="Everything" className="images" />
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center"> Avenger </Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" movieImage">
              <Image src={batmanImage} alt="Infinite" className="images" />
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center"> Batman </Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" movieImage">
              <Image src={robinhoodImage} alt="joker" className="images" />
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center"> Robinhood </Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" movieImage">
              <Image src={spidermanImage} alt="lightyear" className="images" />
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center"> Spiderman </Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural </Card.Text>
                  <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" movieImage">
              <Image src={supermanImage} alt="morbius" className="images" />
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center"> Superman </Card.Title>
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

export default SuperHero;
