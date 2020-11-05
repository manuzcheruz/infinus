import React from 'react';
import Story from './Story/Story';

const stories = props => {
    return (
        <div style={{display:'flex', flexDirection:'row', overflowX:'auto', overflowY: 'hidden'}}>
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
            <Story />
        </div>
    );
}

export default stories;