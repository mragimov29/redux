import React, { PureComponent } from "react";
import { connect } from "react-redux";
import "../styles.css";

import GoodsItem from "./GoodsItem";

const mapStateToProps = (state) => {
  return {
    goods: state.goods,
  };
};

class Goods extends PureComponent {
  render() {
    return (
      <div className="goods">
        <h2 className="goods__title">Video Games</h2>
        {this.props.goods.map((item) => (
          <ul className="goods__list" key={item.id}>
            <li className="goods__list-item">
              <GoodsItem {...item} />
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Goods);
