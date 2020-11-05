import React from 'react';

import Unit from './Unit/Unit';

const units = props => {
    return (
        <div style={{display:'flex', flexDirection:'row', overflowX:'auto', overflowY: 'hidden'}}>
            <Unit />
            <Unit />
            <Unit />
            <Unit />
        </div>
    );
}

export default units;