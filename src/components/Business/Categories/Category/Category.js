import React from 'react';
import {
    Card, CardImg
} from 'reactstrap';

const category = props => {
    return (
        <div>
            <Card inverse style={{marginLeft: '20px', width: '100px', height: '80px'}}>
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            </Card>
            <div className="text-center">
                <small className="text-muted">test</small>
            </div>
        </div>
    );
}

export default category;