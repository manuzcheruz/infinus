import React from 'react';
import { connect } from 'react-redux';

import Unit from './Unit/Unit';

const units = props => {
    return (
        <div style={{marginTop: '10px' , display:'flex', flexDirection:'row', overflowX:'auto', overflowY: 'hidden'}}>
            {props.businesses.slice(0,4).map((bizz, i) => {
                return <Unit key={i} {...bizz}/>
            })}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        businesses: state.bizz.businesses
    }
}

export default connect(mapStateToProps)(units);