import React from 'react';

import Feature from './Feature/Feature';

const featured = props => {
    return (
        <div style={{display:'flex', flexDirection:'row', overflowX:'auto', overflowY: 'hidden'}}>
            <Feature />
            <Feature />
            <Feature />
            <Feature />
            <Feature />
        </div>
    );
}

export default featured;