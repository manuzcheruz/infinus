import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../store/actions/index';
import {
    Card, CardBody, CardImg, Row, Col
} from 'reactstrap';
import Skeleton from 'react-loading-skeleton';

const unit = props => {

    const clicked = slug => {
        props.history.push('/business-detail')
        props.onBusinessSelect(slug)
    }

    let cardDimensions = {
        height: '130px',
        width: '230px'
    }

    if (props.cat) {
        cardDimensions = {
            height: '150px',
            width: '320px'
        }
    }
    return (
        <div style={{marginLeft: '20px'}} onClick={e => clicked(props.slug)}>
            <Card style={{height: '130px', width: '230px', borderRadius: '10px', overflow: 'hidden', ...cardDimensions}}>
                <CardImg top width="100%" src={props.image || <Skeleton count={5}/>} style={{borderRadius: '10px'}} alt="Card image cap" />
        </Card>
        <Card style={{marginTop: '10px', border: '2px solid white'}}>
            <CardBody style={{padding: '0px'}}>
                <Row style={{padding: '0px'}}>
                    <Col xs="3">
                        <CardImg width="100%" src={props.image || <Skeleton count={2}/>} style={{borderRadius: '4px', width: '40px', height: '40px'}} alt="Card image cap"/>
                    </Col>
                    <Col xs="9">
                        <p style={{padding: '0px'}}><small >{props.Business_name || <Skeleton />}</small></p>
                        <p style={{marginTop: '0px'}}><small>{props.Business_type || <Skeleton />}</small></p>
                        <p style={{marginTop: '0px'}}><small>{props.difference || <Skeleton />}</small></p>
                    </Col>
                </Row>
            </CardBody>
        </Card>
        </div>
    );
}

const mapPropsToState = dispatch => {
    return {
        onBusinessSelect: slug => dispatch(actions.businessDetailSlug(slug))
    }
}

export default connect(null, mapPropsToState)(unit);