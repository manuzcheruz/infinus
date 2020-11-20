import React from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';

import Product from './Product/Product';

const products = React.memo(({history, products}) => {
    // console.log(props);
    let productList = 'no products or services listed yet, come back soon'
    if (products) {
        productList = products.map((product, i) => {
            return (
                <Product key={i} {...{product, history}} />
            );
        })
    }
    return (
        <div>
            <Row>
                {productList}
            </Row>
        </div>
    );
})

const mapStateToProps = state => {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps)(products);