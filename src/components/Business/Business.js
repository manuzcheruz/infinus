import React, { useEffect } from 'react'
import { Col, Row } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import Featured from './Featured/Featured'
import Stories from './Stories/Stories'
import Units from './Units/Units'

const business = React.memo((props) => {
    const showMore = () => {
        props.history.push('/category-page')
    }

    const coffee = <FontAwesomeIcon icon={faAngleRight} onClick={showMore}/>

    useEffect(() => {
        const url = "https://ipate.herokuapp.com/rest-api/v1/business"
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(responseData => {
                console.log(responseData);
            })
            .catch(error => {
                console.log(error.response);
            })

    }, [])

    return (
        <div>
            {/* create a stories component */}
            <div className="">
                <Stories />
            </div>
            {/* featured businesses as horizontal flat list */}
            <div style={{marginLeft: '20px', paddingTop: '10px'}}>
                <h5 className="text-muted font-weight-bold">
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
                        <small className="text-muted font-weight-bold">
                            Hotels & Restaurants
                        </small>
                    </Col>
                    <Col xs="6">
                        <div className="text-right">
                            {coffee}
                        </div>
                    </Col>
                </Row>
            </div>
            <Units />

            <div style={{marginLeft: '20px', paddingTop: '10px'}}>
                <Row>
                    <Col xs="6">
                        <small className="text-muted font-weight-bold">
                            Supermarkets
                        </small>
                    </Col>
                    <Col xs="6">
                        <div className="text-right">
                            {coffee}
                        </div>
                    </Col>
                </Row>
            </div>
            <Units />

            <div style={{marginLeft: '20px', paddingTop: '10px'}}>
                <Row>
                    <Col xs="6">
                        <small className="text-muted font-weight-bold">
                            Gen Shops
                        </small>
                    </Col>
                    <Col xs="6">
                        <div className="text-right">
                            {coffee}
                        </div>
                    </Col>
                </Row>
            </div>
            <Units />

            <div style={{marginLeft: '20px', paddingTop: '10px'}}>
                <Row>
                    <Col xs="6">
                        <small className="text-muted font-weight-bold">
                            Agrovets
                        </small>
                    </Col>
                    <Col xs="6">
                        <div className="text-right">
                            {coffee}
                        </div>
                    </Col>
                </Row>
            </div>
            <Units />

            <div style={{marginLeft: '20px', paddingTop: '10px'}}>
                <Row>
                    <Col xs="6">
                        <small className="text-muted font-weight-bold">
                            Gyms
                        </small>
                    </Col>
                    <Col xs="6">
                        <div className="text-right">
                            {coffee}
                        </div>
                    </Col>
                </Row>
            </div>
            <Units />

            <div style={{marginLeft: '20px', paddingTop: '10px'}}>
                <Row>
                    <Col xs="6">
                        <small className="text-muted font-weight-bold">
                            Wines & Spirits
                        </small>
                    </Col>
                    <Col xs="6">
                        <div className="text-right">
                            {coffee}
                        </div>
                    </Col>
                </Row>
            </div>
            <Units />

        </div>
    );
})

export default business;