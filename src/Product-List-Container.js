import React, { Component } from 'react';
import ProductListRow from './Product-List-Row';

class ProductListContainer extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      products: []
    };
    
  }
  
  componentDidMount(){
    this.setState(
      {
        products: [
      {
        img:'http://via.placeholder.com/350x150?text=ProductOne',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies purus est, in semper odio venenatis nec. Duis velit nibh, 
              porttitor eu augue ut, sollicitudin vehicula elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies purus est, 
              in semper odio venenatis nec. Duis velit nibh, porttitor eu augue ut, sollicitudin vehicula elit.`
      },
      {
        img:'http://via.placeholder.com/350x150?text=ProductTwo',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies purus est, in semper odio venenatis nec. Duis velit nibh, 
              porttitor eu augue ut, sollicitudin vehicula elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies purus est, 
              in semper odio venenatis nec. Duis velit nibh, porttitor eu augue ut, sollicitudin vehicula elit.`
      },
      {
        img:'http://via.placeholder.com/350x150?text=ProductThree',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies purus est, in semper odio venenatis nec. Duis velit nibh, 
              porttitor eu augue ut, sollicitudin vehicula elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies purus est, 
              in semper odio venenatis nec. Duis velit nibh, porttitor eu augue ut, sollicitudin vehicula elit.`
      }
    ]});
  }
  
  
  render() {
    const products = this.state.products.map((product, i) => (
      <ProductListRow image={product.img} descript={product.description} key={i}/>
    ));
    return (
      <div className="container mt-3">
        {products}
       </div>
    );
  }
}

export default ProductListContainer;

