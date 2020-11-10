import React from 'react';
import { connect } from 'react-redux';

import Story from './Story/Story';

const stories = props => {
    return (
        <div style={{display:'flex', flexDirection:'row', overflowX:'auto', overflowY: 'hidden'}}>
            {props.businesses.slice(0,7).map((story, i) => {
                return <Story key={i} {...story}/>
            })}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        businesses: state.bizz.businesses
    }
}

export default connect(mapStateToProps)(stories);