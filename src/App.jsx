import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function App() {

  <h1>States Of Kerala</h1>
  let districts = [
    {
      id: 1,
      title: "Trivandrum",
      desc: "Capital City",
      image:
        "https://trisoj.com/travel-guide/wp-content/uploads/2022/10/Places-to-visit-in-Trivandrum.png",
    },
    {
      id: 2,
      title: "Kollam",
      desc: "Port City",
      image: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592.jpg",
    },
    {
      id: 3,
      title: "Pathanamthitta",
      desc: "Pilgrim Center",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Kodikuthimala%2C_Malappuram.jpg/220px-Kodikuthimala%2C_Malappuram.jpg",
    },
    {
      id: 4,
      title: "Alappuzha",
      desc: "Backwater Destination",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Alappuzha_Boat_Beauty_W.jpg/288px-Alappuzha_Boat_Beauty_W.jpg",
    },
    {
      id: 5,
      title: "Kottayam",
      desc: "Lakeside Retreat",
      image: "https://images.unsplash.com/photo-1559315856-41b6bdf3dcb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a290dGF5YW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      title: "Idukki",
      desc: "Hill Station",
      image: "https://static.theprint.in/wp-content/uploads/2018/08/2018_8img10_Aug_2018_PTI8_10_2018_000227B.jpg?compress=true&quality=80&w=800&dpr=1.0",
    },
    {
      id: 7,
      title: "Ernakulam",
      desc: "Commercial Hub",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/INS_Vikrant_under_construction_at_Cochin_Shipyard.png/250px-INS_Vikrant_under_construction_at_Cochin_Shipyard.png",
    },
    {
      id: 8,
      title: "Thrissur",
      desc: "Cultural Capital",
      image: "https://images.newindianexpress.com/uploads/user/imagelibrary/2021/4/22/w900X450/thrissur_pooram.jpg?w=640&dpr=1.0",
    },
    {
      id: 9,
      title: "Palakkad",
      desc: "Gateway to Kerala",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Palakkad_Fort_5.jpg/225px-Palakkad_Fort_5.jpg",
    },
    {
      id: 10,
      title: "Malappuram",
      desc: "Land of Teak",
      image: "https://www.onmanorama.com/content/dam/mm/en/news/kerala/images/2020/1/8/Aerial-View-of-Malappuram-Town.jpg.transform/845x440/image.jpg",
    },
    {
      id: 11,
      title: "Kozhikode",
      desc: "City of Spices",
      image: "http://4.bp.blogspot.com/_amiQ5W62Pp0/SZFlMb83lRI/AAAAAAAAGKM/y1mLTOZCKYs/s400/kozhikode+beach+copy.jpg",
    },
    {
      id: 12,
      title: "Wayanad",
      desc: "Green Paradise",
      image: "https://www.wayanad.com/files/slides/7110478409.jpg",
    },
    {
      id: 13,
      title: "Kannur",
      desc: "Land of Looms and Lores",
      image: "https://www.dtpckannur.com/public/img/slider/a1.jpg",
    },
    {
      id: 14,
      title: "Kasaragod",
      desc: "Northernmost District",
      image: "https://www.keralatourism.org/images/picture/thumb/Bekal_Fort_1827.jpg",
    },
  ];

  return (
    <div>
      <Container>
        <Row>
          {
          districts.map((e) => (
            <Col key={e.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={e.image} />
                <Card.Body>
                  <Card.Title>{e.title}</Card.Title>
                  <Card.Text>
                    {e.desc}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
