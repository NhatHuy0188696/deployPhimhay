
import './App.css';
import { Fragment } from 'react';

import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import {publicRouter} from '~/router';
import DefaultLayout from './layouts/DefaultLayout';
function App() {
  return (
    <Router>
      <div className="App">
       <Routes>
          {publicRouter.map((route,index)=>{
            const Pages = route.component;
               let Layout = DefaultLayout;
      
                if(route.layout){
                  Layout = route.layout
                }
                else if(route.layout === null){
                    Layout = Fragment
                }
              return(
                <Route
                  exact={true}
                  key={index}
                  path={route.path}
                  element={<Layout>  <Pages /></Layout>}/>
            
              )
              })}
       </Routes>
      </div>
    </Router>
  );
}

export default App;
