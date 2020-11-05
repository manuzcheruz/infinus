import React from 'react';
import {
    Card, CardBody, CardTitle, CardImg, CardText
} from 'reactstrap';

const feature = props => {
    return (
        <div>
            <Card style={{marginLeft: '20px', width: '300px', height: '200px'}}>
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>ional content. This content is a little bit longer.</CardText>
                    <CardText>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </CardText>
            </CardBody>
        </Card>
        </div>
    );
}

export default feature;