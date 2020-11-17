import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect} from 'react-router';
import { usePosition } from 'use-position';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

import Travel from './components/Travel/Travel';
import Business from './components/Business/Business';
import Blog from './components/Blog/Blog';
import Layout from './hoc/Layout/Layout';
import Categories from './components/Business/Categories/Categories';
import BusinessDetail from './components/Business/FullBusiness/FullBusiness';

function App(props) {

  const { onFindLocation, onFindLocationFail } = props
  const watch = true;
  const {
    latitude,
    longitude,
    error
  } = usePosition(watch);

  // console.log(latitude);
  // const test = (latitude, longitude) => {
  //   let location = {
  //     latitude: latitude,
  //     longitude: longitude
  //   }
  //   console.log(location);
  //   props.onFindLocation(location)
  // }
  useEffect(() => {
    if ( latitude !== undefined ){
      onFindLocation({latitude: latitude, longitude: longitude});
    } else if (error !== undefined ) {
      onFindLocationFail(error);
    }
  }, [latitude, longitude, error, onFindLocation, onFindLocationFail])

  return (
    <BrowserRouter>
      <div>
        <Layout>
          <Switch>
            <Route path="/travel" exact component={Travel} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/category-page" exact component={Categories} />
            <Route path="/business-detail" exact component={BusinessDetail} />
            <Route path="/" exact component={Business} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

const mapPropsToDispatch = dispatch => {
  return {
    onFindLocation: (location) => dispatch(actions.findLocation(location)),
    onFindLocationFail: (error) => dispatch(actions.findLocationFail(error))
  }
}

export default connect(null, mapPropsToDispatch)(App);
