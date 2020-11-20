import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Card, CardImg, CardTitle, Row, Col, Button, Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faEnvelope, faGlobe, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Skeleton from 'react-loading-skeleton';
import { getDistance } from 'geolib';
import * as actions from '../../../store/actions/index';
import Products from './Products/Products';

const businessDetail = React.memo((props) => {
    const [activeTab, setActiveTab] = useState('1');

    const { onFetchProducts } = props

    useEffect(() => {
        onFetchProducts();
    }, [onFetchProducts])

    const onEditBusiness = () => {

    }

    let business = ''
    if (props.slug && props.bizz) {
        business = props.bizz.filter(item => item.slug === props.slug).map((biz, i) => {
            let loc = biz.location
            var regExp = /\(([^)]+)\)/;
            let [long, lat] = loc.match(regExp)[1].split(' ')
            let latitude = +lat 
            let longitude = +long

            let distanceBetween = getDistance(props.userLocation,{ latitude: latitude, longitude: longitude })
                // console.log({distanceBetween});

                // use switch instead
                let howFar = ''
                if ( distanceBetween < 50 ) {
                    howFar = 'less than 50m away'
                } else if (distanceBetween < 100) {
                    howFar = 'less than 100m away'
                } else if ( distanceBetween < 500) {
                    howFar = 'less than 500m away'
                } else if ( distanceBetween < 1000 ) {
                    howFar = 'less than 1km away'
                } else if (distanceBetween < 2000) {
                    howFar = 'less than 2km away'
                } else if (distanceBetween < 3000) {
                    howFar = 'less than 3km away'
                } else if (distanceBetween < 5000) {
                    howFar = 'less than 5km away'
                } else if (distanceBetween < 10000) {
                    howFar = 'less than 10km away'
                } else {
                    howFar = 'more than 10 km away'
                }

            return (
                <div>
                    <Card inverse key={i} style={{overflow: 'hidden', padding: '0px', marginLeft: '0px', height: '100%', width: '100%', backgroundColor: 'white'}}>
                        <CardImg style={{height: '200px', width: '100%'}} src={biz.image} alt="business background"/>                        
                    </Card>
                    <div>
                        <Card style={{marginTop: '10px', marginLeft: '10px', marginRight: '10px', border: '2px solid white'}}>
                            <CardTitle className="text-capitalize text-dark">
                                <Row>
                                    <Col xs="8">
                                        <h5 className="font-weight-bold">{biz.Business_name}</h5>
                                    </Col>
                                    <Col xs="4">
                                        <div className="text-right">
                                            <Button onClick={onEditBusiness} style={{border: '1px solid white', padding: '0 4px 4px 4px'}} className="btn btn-success">update</Button>
                                        </div>
                                    </Col>
                                </Row>
                            </CardTitle>
                            <span><FontAwesomeIcon icon={faMapMarkerAlt} style={{marginRight: '10px'}}/><small>{howFar}</small></span>
                        </Card>
                    </div>
                    <div style={{marginLeft: '20px', marginRight: '20px', marginTop: '10px'}} className="font-weight-bold">
                        <Nav tabs>
                            <NavItem>
                            <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>About</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>Products</NavLink>
                            </NavItem>
                            <NavItem>
                            <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>Location</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    <TabContent activeTab={activeTab} style={{marginLeft: '10px', marginRight: '10px', marginTop: '15px'}}>
                        <TabPane tabId="1">
                            <div>
                                <h5>{biz.description || <Skeleton count={5}/>}</h5>
                                <h5 style={{marginTop: '10px'}}><FontAwesomeIcon icon={faCalendarAlt} style={{marginRight: '10px'}}/>
                                    opened 
                                    <span style={{marginLeft: '5px', marginRight: '5px'}}>{biz.opened_from ? biz.opened_from : '----' || <Skeleton />}</span>
                                     to 
                                    <span style={{marginLeft: '5px', marginRight: '5px'}}>{biz.to ? biz.to : '----' || <Skeleton />}</span>
                                </h5>
                                <h5 style={{marginTop: '10px'}}><FontAwesomeIcon icon={faPhoneAlt} style={{marginRight: '10px'}}/>
                                    <span>
                                        {biz.contact ? biz.contact : 'unavailable'}
                                    </span>
                                </h5>
                                <h5 style={{marginTop: '10px'}}><FontAwesomeIcon icon={faGlobe} style={{marginRight: '10px'}}/>
                                    <span>
                                        {biz.website ? biz.website : 'unavailable' || <Skeleton />}
                                    </span>
                                </h5>
                                <h5 style={{marginTop: '10px'}}><FontAwesomeIcon icon={faEnvelope} style={{marginRight: '10px'}}/>
                                    <span>
                                        {biz.email ? biz.email : 'unavailable'}
                                    </span>
                                </h5>
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            <Products history={props.history} />
                        </TabPane>
                        <TabPane tabId="3">
                            <Map
                            google={props.google}
                            zoom={15}
                            style={{width: '350px', height: '250px'}}
                            initialCenter={{ lat: latitude, lng: longitude}}
                            >
                                <Marker title='business location' position={{ lat: latitude, lng: longitude}} />
                                <Marker title='your location' position={{ lat: props.userLocation.latitude, lng: props.userLocation.longitude}} />
                            </Map>
                        </TabPane>
                        </TabContent>
                </div>

            );
        })
    }
    return business
})

const mapStateToProps = state => {
    return {
        bizz: state.bizz.businesses,
        slug: state.category.businessSlug,
        userLocation: state.bizz.userLoc,
        products: state.products.products
    }
}

const mapPropsToDispatch = dispatch => {
    return {
        onFetchProducts: () => dispatch(actions.initFetchProducts())
    }
}

export default connect(mapStateToProps, mapPropsToDispatch)(GoogleApiWrapper({apiKey: 'AIzaSyAok6R5nza1EEHCpuPHj8m6sV5HiQGH4o4'})(businessDetail))