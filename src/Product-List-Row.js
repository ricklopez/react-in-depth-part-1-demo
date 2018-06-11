import React, { Component } from 'react';;

class ProductListRow extends Component {
  render() {
    return (
          <div className="row mt-3">
            <div className="col-4">
              <img src={this.props.image} alt="img"/>
            </div>
            <div className="col-8 text-left">
               {this.props.descript}
            </div>
          </div>
    );
  }
}

export default ProductListRow;

