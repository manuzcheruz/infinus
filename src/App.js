import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect} from 'react-router';

import Travel from './components/Travel/Travel';
import Business from './components/Business/Business';
import Blog from './components/Blog/Blog';
import Layout from './hoc/Layout/Layout';
import Categories from './components/Business/Categories/Categories';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Layout>
          <Switch>
            <Route path="/travel" exact component={Travel} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/category-page" exact component={Categories} />
            <Route path="/" exact component={Business} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
