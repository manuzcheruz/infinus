import React from 'react';
import { Card, CardImg } from 'reactstrap';
import Skeleton from 'react-loading-skeleton';

const story = props => {
    const onSelectstoryHandler = () => {

    }
    return (
        <div className="text-center">
            <Card onClick={() => onSelectstoryHandler()} inverse style={{marginLeft: '20px',borderRadius: '50%' , height: '70px', width: '70px', overflow: 'hidden'}}>
                <CardImg style={{borderRadius: '50%', height: '70px', width: '70px'}} src={props.image || <Skeleton count={2} />} alt="Card image cap"/>
            </Card>
            <div className="text-center">
                <small className="text-light">test</small>
            </div>
        </div>
    );
}

export default story;