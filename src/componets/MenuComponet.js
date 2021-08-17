import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

function RenderMenuItem({ dish, onClick }) {
  return (
    <div key={dish.id} className="col-12 col-md-5 mt-5">
      <Card onClick={() => onClick(dish.id)}>
        <CardImg width=" 100%" object src={dish.image} alt={dish.name} />

        <CardImgOverlay body className="ml-5">
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  );
}

const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return <RenderMenuItem dish={dish} onClick={props.onClick} />;
  });
  return (
    <div className="container">
      <div className="row">{menu}</div>
    </div>
  );
};

export default Menu;
