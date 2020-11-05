import React from 'react';
import {
    Card, CardBody, CardTitle, CardImg, CardText
} from 'reactstrap';

const unit = props => {
    return (
        <div>
            <Card style={{marginLeft: '20px', width: '200px', height: '100px'}}>
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
            </CardBody>
        </Card>
        </div>
    );
}

export default unit;