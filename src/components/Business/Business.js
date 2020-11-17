import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import Featured from './Featured/Featured'
import Stories from './Stories/Stories'
import Units from './Units/Units'
import * as action from '../../store/actions/index';

const business = React.memo((props) => {

    const showMore = (cat) => {
        props.history.push('/category-page')
        props.onSelectMore(cat)
    }
    // destructure props 
    const { onFetchBusiness } = props

    useEffect(() => {
        onFetchBusiness();
        
    }, [onFetchBusiness])

    return (
        <div>
            {/* create a stories component */}
            <div className="">
                <Stories />
            </div>
            {/* featured businesses as horizontal flat list */}
            <div style={{marginLeft: '20px', paddingTop: '5px'}}>
                <h5 className="text-dark font-weight-bold">
                    featured
                </h5>
            </div>
            <Featured />
            {/* business categories as horizontal flat list */}
            {/* <div style={{marginLeft: '20px', paddingTop: '10px'}}>
                <h5 className="text-muted font-weight-bold">
                    categories
                </h5>
            </div>
            <Categories /> */}
            {/* nearest businesses as a vertical list */}
            <div style={{marginLeft: '20px', paddingTop: '10px'}}>
                <Row>
                    <Col xs="6">
                        <small className="text-dark font-weight-bold">
                            Hotels & Restaurants
                        </small>
                    </Col>
                    <Col xs="6">
                        <div className="text-right">
                            <FontAwesomeIcon icon={faAngleRight} onClick={e => showMore('hotel')}/>
                        </div>
                    </Col>
                </Row>
            </div>
            <Units bizz_type="hotel" {...props}/>

            <div style={{marginLeft: '20px', paddingTop: '10px'}}>
                <Row>
                    <Col xs="6">
                        <small className="text-dark font-weight-bold">
                            Supermarkets
                        </small>
                    </Col>
                    <Col xs="6">
                        <div className="text-right">
                            <FontAwesomeIcon icon={faAngleRight} onClick={e => showMore('supermarket')}/>
                        </div>
                    </Col>
                </Row>
            </div>
            <Units bizz_type="supermarket" {...props}/>

            <div style={{marginLeft: '20px', paddingTop: '10px'}}>
                <Row>
                    <Col xs="6">
                        <small className="text-dark font-weight-bold">
                            Gen Shops
                        </small>
                    </Col>
                    <Col xs="6">
                        <div className="text-right">
                            <FontAwesomeIcon icon={faAngleRight} onClick={e => showMore('general')}/>
                        </div>
                    </Col>
                </Row>
            </div>
            <Units bizz_type="general" {...props}/>

            <div style={{marginLeft: '20px', paddingTop: '10px'}}>
                <Row>
                    <Col xs="6">
                        <small className="text-dark font-weight-bold">
                            Agrovets
                        </small>
                    </Col>
                    <Col xs="6">
                        <div className="text-right">
                            <FontAwesomeIcon icon={faAngleRight} onClick={e => showMore('agrovets')}/>
                        </div>
                    </Col>
                </Row>
            </div>
            <Units bizz_type="agrovets" {...props}/>

            <div style={{marginLeft: '20px', paddingTop: '10px'}}>
                <Row>
                    <Col xs="6">
                        <small className="text-dark font-weight-bold">
                            Gyms
                        </small>
                    </Col>
                    <Col xs="6">
                        <div className="text-right">
                            <FontAwesomeIcon icon={faAngleRight} onClick={e => showMore('gym')}/>
                        </div>
                    </Col>
                </Row>
            </div>
            <Units bizz_type="gym" {...props}/>

            <div style={{marginLeft: '20px', paddingTop: '10px'}}>
                <Row>
                    <Col xs="6">
                        <small className="text-dark font-weight-bold">
                            Wines & Spirits
                        </small>
                    </Col>
                    <Col xs="6">
                        <div className="text-right">
                            <FontAwesomeIcon icon={faAngleRight} onClick={e => showMore('wine')}/>
                        </div>
                    </Col>
                </Row>
            </div>
            <Units bizz_type="wine" {...props}/>

        </div>
    );
})

const mapStateToProps = state => {
    return {

    }
}

const mapPropsToDispatch = dispatch => {
    return {
        onFetchBusiness: () => dispatch(action.initFetchBusiness()),
        onSelectMore: (name) => dispatch(action.categoryName(name))
    }
}

export default connect(mapStateToProps, mapPropsToDispatch)(business);