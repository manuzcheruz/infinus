import React from 'react';
import {
    Card, CardBody, CardImg, Row, Col
} from 'reactstrap';

const feature = props => {
    return (
        <div style={{marginLeft: '20px'}}>
            <Card style={{width: '360px', height: '200px', overflow: 'hidden', borderRadius: '10px', border: '2px solid white'}}>
                <CardImg top width="100%" style={{borderRadius: '10px'}} src={props.image} alt="Card image cap" />
        </Card>
        <Card style={{marginTop: '10px', border: '2px solid white'}}>
            <CardBody style={{padding: '0px'}}>
                <Row style={{padding: '0px'}}>
                    <Col xs="3">
                        <CardImg width="100%" src={props.image} style={{borderRadius: '4px', width: '50px', height: '50px'}} alt="Card image cap"/>
                    </Col>
                    <Col xs="9">
                        <p style={{padding: '0px'}}><small >{props.Business_name}</small></p>
                        <p style={{marginTop: '0px'}}><small>{props.Business_type}</small></p>
                    </Col>
                </Row>
            </CardBody>
        </Card>
        </div>
    );
}

export default feature;