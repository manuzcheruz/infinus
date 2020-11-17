import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

import Unit from '../Units/Unit/Unit';;

const categories = React.memo( props => {
    const { categoryName, onLoadBusinesses} = props

    useEffect(() => {
        onLoadBusinesses(categoryName)
    }, [categoryName, onLoadBusinesses])

    let businessesDisplay = ''
    if (props.bizz) {
        businessesDisplay = <div style={{marginTop: '20px'}}>
            {props.bizz.filter(item => item.Business_type === props.categoryName).slice(0,9).map((bizz, i) => {
                return <Unit key={i} {...bizz} {...props} cat/>
            })}  
            </div>
    }

    return businessesDisplay
})

const mapStateToProps = state => {
    return {
        categoryName: state.category.categoryName,
        bizz: state.category.businesses
    }
}

const mapPropsToState = dispatch => {
    return {
        onLoadBusinesses: () => dispatch(actions.initFetchBusinessesInCategory())
    }
}

export default connect(mapStateToProps, mapPropsToState)(categories);