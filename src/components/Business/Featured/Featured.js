import React from 'react';
import { connect } from 'react-redux';

import Feature from './Feature/Feature';

const featured = props => {
    return (
        <div style={{display:'flex', flexDirection:'row', overflowX:'auto', overflowY: 'hidden'}}>
            {props.businesses.filter(item => item.featured === true).slice(0,6).map((bizz, i) => {
                return <Feature key={i} {...bizz}/>
            })}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        businesses: state.bizz.businesses
    }
}

export default connect(mapStateToProps)(featured);