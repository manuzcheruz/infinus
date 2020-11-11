import React from 'react';
import { connect } from 'react-redux';
import { getDistance } from 'geolib';

import Unit from './Unit/Unit';

const units = props => {
    let categoryBlock = ''
    if (props.userLocation) {
        let bizz = props.businesses.slice(0,5)
         for (let item of bizz) {
                let loc = item.location
                var regExp = /\(([^)]+)\)/;
                let [long, lat] = loc.match(regExp)[1].split(' ')
                let latitude = +lat 
                let longitude = +long
                let distanceBetween = getDistance(props.userLocation,{ latitude: latitude, longitude: longitude })
                // console.log({distanceBetween});

                // use switch instead
                let testing = ''
                if ( distanceBetween < 50 ) {
                    testing = 'less than 50m away'
                } else if (distanceBetween < 100) {
                    testing = 'less than 100m away'
                } else if ( distanceBetween < 500) {
                    testing = 'less than 500m away'
                } else if ( distanceBetween < 1000 ) {
                    testing = 'less than 1km away'
                } else if (distanceBetween < 2000) {
                    testing = 'less than 2km away'
                } else if (distanceBetween < 3000) {
                    testing = 'less than 3km away'
                } else if (distanceBetween < 5000) {
                    testing = 'less than 5km away'
                } else if (distanceBetween < 10000) {
                    testing = 'less than 10km away'
                } else {
                    testing = 'greater than 10 km away'
                }
                item.difference = testing
            }
        categoryBlock = <div style={{marginTop: '10px' , display:'flex', flexDirection:'row', overflowX:'auto', overflowY: 'hidden'}}>
            {bizz.map((bizz, i) => {
                return <Unit key={i} {...bizz}/>
            })}
        </div>
    } else {
        categoryBlock = <div style={{marginTop: '10px' , display:'flex', flexDirection:'row', overflowX:'auto', overflowY: 'hidden'}}>
            {props.businesses.slice(0,5).map((bizz, i) => {
                return <Unit key={i} {...bizz}/>
            })}
        </div>
    }


    return categoryBlock
}

const mapStateToProps = state => {
    return {
        businesses: state.bizz.businesses,
        userLocation: state.bizz.userLoc
    }
}

export default connect(mapStateToProps)(units);