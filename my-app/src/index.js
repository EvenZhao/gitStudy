import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//专门连接用的组件
import {Provider} from 'react-redux';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import reducers from './reducers';
import Auth from './auth';
import Dashboard from './dashboard';

const store = createStore(reducers,applyMiddleware(thunk));
ReactDOM.render( 
    (<Provider store = { store }>
        <BrowserRouter>
        <div>
            <Switch>
                <Route path='/login' exact component={Auth}></Route>
                <Route path='/dashboard' component={Dashboard}></Route>
                <Route path='/dashboard'></Route>
            </Switch>
        </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById("root")
)
