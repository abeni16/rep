import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
function RenderMenuItem({ dish, onClick }) {
  return (
    <div key={dish.id} className="col-12 col-md-5 mt-5">
      <Card>
        <Link to={`/menu/${dish.id}`}>
          <CardImg width=" 100%" object src={dish.image} alt={dish.name} />

          <CardImgOverlay body className="ml-5">
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Link>
      </Card>
    </div>
  );
}

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return <RenderMenuItem dish={dish} />;
  });
  var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage:
      "https://www.shutterstock.com/image-vector/soup-meat-mushrooms-quail-eggs-onions-1681448320",
  };
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">{menu}</div>
    </div>
  );
};

export default Menu;
