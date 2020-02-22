import React, { Component, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './context/theme';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';

const Battle = lazy(() => import('./Battle'));
const Repos = lazy(() => import('./Repos'));
const Nav = lazy(() => import('./Nav'));
const FourOhFour = lazy(() => import('./FourOhFour'));
const PlayerResults = lazy(() => import('./Battle/PlayerResults'));

import './index.scss';
import Loading from './Loading';

class App extends Component {
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'light'
      }))
    }
  }

  render() {
    const { theme } = this.state;

    return (
      <Router>
        <ThemeProvider value={this.state}>
          <section className={theme}>
            <Suspense fallback={<Loading />}>
              <Nav />
              <div className='container'>
                <Switch>
                  <Route exact path="/" component={Repos} />
                  <Route exact path="/battle" component={Battle} />
                  <Route path="/battle/results" component={PlayerResults} />
                  <Route component={FourOhFour} />
                </Switch>
              </div>
            </Suspense>
          </section>
        </ThemeProvider>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));