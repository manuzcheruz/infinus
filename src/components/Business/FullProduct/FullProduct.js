import React from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardBody, UncontrolledCarousel } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'

import Product from '../FullBusiness/Products/Product/Product';

const fullProduct = React.memo((props) => {
    const product = props.products.filter(item => item.slug === props.productSlug)
    const items = [
        {
            src: product[0].image1,
            key: '1',
            caption: 'one'
        },
        {
            src: product[0].image2,
            key: '2',
            caption: 'two'
        },
        {
            src: product[0].image3,
            key: '3',
            caption: 'three'
        }
    ];
  
    return (
        <div>
            <UncontrolledCarousel items={items} indicators={false} />
            <div>
                <Card style={{padding: '0px', border: '2px solid white'}}>
                    <CardBody style={{padding: '0px', marginLeft: '20px', marginRight: '20px'}}>
                        <small className="text-dark">
                            {product[0].description}
                        </small>
                        <p style={{marginTop: '15px'}}>
                            <span><FontAwesomeIcon style={{marginRight: '10px'}} icon={faMoneyBill}/>Ratings: </span>
                        </p>
                        <p style={{marginTop: '15px'}}>
                            <span><FontAwesomeIcon style={{marginRight: '10px'}} icon={faMoneyBill}/>Ksh: {product[0].price}</span>
                        </p>
                        <div className="text-center">
                            <Button style={{width: '200px'}} className="btn btn-small btn-primary">order now</Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div style={{marginTop: '10px'}}>
                <h5 className="font-weight-bold text-center">
                    similar products nearby
                </h5>
                <div style={{marginTop: '10px' , display:'flex', flexDirection:'row', overflowX:'auto', overflowY: 'hidden'}}>
                    {props.products.slice(0,5).map((product, i) => {
                        return <Product key={i} {...{product}} history={props.history}/>
                    })}
                </div>
            </div>
        </div>
    );
})

const mapStateToProps = state => {
    return {
        products: state.products.products,
        productSlug: state.products.productSlug
    }
}

export default connect(mapStateToProps)(fullProduct);