import React from 'react';
import {
    Card, CardBody, CardTitle, CardImg, CardText, Row, Col
} from 'reactstrap';

const unit = props => {
    return (
        <div style={{marginLeft: '20px'}}>
            <Card style={{width: '230px', height: '130px', borderRadius: '10px', overflow: 'hidden'}}>
                <CardImg top width="100%" src={props.image} style={{borderRadius: '10px'}} alt="Card image cap" />
        </Card>
        <Card style={{marginTop: '10px', border: '2px solid white'}}>
            <CardBody style={{padding: '0px'}}>
                <Row style={{padding: '0px'}}>
                    <Col xs="3">
                        <CardImg width="100%" src={props.image} style={{borderRadius: '4px', width: '40px', height: '40px'}} alt="Card image cap"/>
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

export default unit;