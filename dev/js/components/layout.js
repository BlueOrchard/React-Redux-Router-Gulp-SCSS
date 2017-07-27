import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from '../layout/header.js';
import LeftBar from '../layout/leftbar.js';
import Footer from '../layout/footer.js';

import HomePage from '../containers/home.js';

class Layout extends React.Component{
    render(){
        return <div>
                    <Header />
                    <LeftBar />
                        <BrowserRouter>
                            <Switch>
                                <Route exact path="/" component={HomePage}/>
                            </Switch>
                        </BrowserRouter>
                    <Footer />
               </div>;
    }
}

export default Layout;