import React, { PureComponent } from "react";
import { removeGoodFromCart } from "../redux/actions/actions";
import { connect } from "react-redux";
import "../styles.css";

const mapDispatchToProps = (dispatch) => ({
  removeGoodFromCart: (id) => dispatch(removeGoodFromCart(id)),
});

class CartItem extends PureComponent {
  render() {
    const { i, title, price } = this.props;
    return (
      <div className="cart-item">
        <p className="cart-item__title">{title}</p>
        <p className="cart-item__price">{price}.00$</p>
        <button onClick={() => this.props.removeGoodFromCart(i)}>X</button>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(CartItem);
