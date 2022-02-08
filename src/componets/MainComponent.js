import { Component } from "react";
import DishDetail from "./DishdetailComponent";
import Menu from "./MenuComponet";
import Footer from "./FooterComponents";

import About from "./AboutComponent";
import { connect } from "react-redux";
import Header from "./HeaderComponent";
import Home from "./HomeComponents";
import Contact from "./ContactComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};
class Main extends Component {
  constructor(props) {
    super(props);
  }

  onDishselect(dishId) {
    this.setState({ selectedDish: dishId });
  }
  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };
    const ContactPage = () => {
      return <Contact />;
    };
    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.props.comments.filter(
            (comment) => comment.id === parseInt(match.params.dishId, 10)
          )}
        />
      );
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route
            path="/aboutus"
            component={() => <About leaders={this.props.leaders} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={ContactPage} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps)(Main));
