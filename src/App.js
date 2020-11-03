import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route} from 'react-router';

import Travel from './components/Travel/Travel';
import Business from './components/Business/Business';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/travel" component={Travel} />
          <Route path="/blog" component={Blog} />
          <Route path="/" component={Business} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
