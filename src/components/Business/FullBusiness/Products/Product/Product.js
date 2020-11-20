import React from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { Col, Card, CardImg, CardImgOverlay, CardBody} from 'reactstrap';
import * as actions from '../../../../../store/actions/index';

const product = React.memo(({product, history, onSelectProduct}) => {
    const selectProducthandler = (slug) => {
        history.push('/product-detail')
        onSelectProduct(slug)
    }
    return (
        <Col xs="6" style={{padding: '0px', margin: '0px'}}>
            <div onClick={e => selectProducthandler(product.slug)}>
                <Card inverse style={{border: '2px solid white'}}>
                    <CardImg top width="100%" src={product.image1} style={{borderRadius: '5px'}} alt="Card image cap" />
                    {product.image2 && <CardImgOverlay style={{padding: '0px'}}>
                        <span style={{marginLeft: '150px'}}><FontAwesomeIcon color="blue" icon={faLayerGroup} style={{marginRight: '10px'}}/></span>
                    </CardImgOverlay>}
                </Card>
                <Card style={{padding: '0px', marginTop: '5px'}}>
                    <CardBody style={{padding: '0px'}}>
                        <p style={{padding: '0px'}}><small>{product.name}</small></p>
                        <p><small>Ksh: </small></p>
                        <small style={{padding: '0px'}}>rating</small>
                    </CardBody>
                </Card>
            </div>
        </Col>
    );
})

const mapPropsToDispatch = dispatch => {
    return {
        onSelectProduct: slug => dispatch(actions.productSlug(slug))
    }
}

export default connect(null, mapPropsToDispatch)(product);