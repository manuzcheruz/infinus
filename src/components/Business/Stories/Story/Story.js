import React from 'react';
import { Card, CardImg } from 'reactstrap';

const story = props => {
    const onSelectstoryHandler = () => {

    }
    return (
        <div className="text-center">
            <Card onClick={() => onSelectstoryHandler()} inverse style={{marginLeft: '20px',borderRadius: '50%' , height: '60px', width: '60px', backgroundColor: 'black'}}>
                <CardImg style={{borderRadius: '50%'}} width="100%" src={''} alt="Card image cap"/>
            </Card>
            <div className="text-center">
                <small className="text-light">test</small>
            </div>
        </div>
    );
}

export default story;