import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import About from './routes/About';
import Menu from './components/Menu';
import MenuDetail from './routes/MenuDetail';
import Board from './components/Board';
import BoardComment from './components/BoardComment';
import BoardWrite from './components/BoardWrite';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Navigation2 from './components/Navigation2';
import './RouterApp.css';

class RouterApp extends React.Component{
    render(){
        return(
            <HashRouter>             
                <Navigation2 />
                <Navigation />
                <div className="aa">
                <Route path="/" exact={true} component={Home} />
                </div>
                <Route path="/about" component={About} />
                <Route path="/menu" component={Menu} />
                <Route path="/menu-detail" component={MenuDetail} />
                <Route path="/board" component={Board} />
                <Route path="/board-comment" component={BoardComment} />
                <Route path='/board-write' component={BoardWrite} />
                
            </HashRouter>

        )
    }
}

export default RouterApp;