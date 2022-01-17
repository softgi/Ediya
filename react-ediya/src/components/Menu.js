import React from 'react';
import axios from 'axios';
import './Menu.css';
import { Link } from 'react-router-dom';

class Menu extends React.Component {

    state = {
        boardList: [],
    };

    getBoardList = async () => {
        const menuList = await axios.get('http://localhost:8989/drink');
        this.setState({ boardList: menuList.data });
        //console.log(menuList);
    };

    componentDidMount() {
        this.getBoardList();
    }

    render() {

        return (

            <div className="menu__container">

                <div className="drink">
                    {this.state.boardList.map((item, index) => {
                        console.log(this.state.boardList);
                        //console.log(this.state.boardList);
                        return (
                            <div key={index}>
                            <Link to={{pathname:'/menu-detail', state:{...item}}}>
                            <div>
                                <img src={item.background_image} alt="drink" />
                                <h2 className="drink__name">{item.name}</h2>     
                            </div>
                            </Link>
                            </div>
                            )
                    }
                    )}
                </div>
            </div>


        );
    }


}
export default Menu;