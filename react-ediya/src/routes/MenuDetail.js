import React from 'react';
import axios from 'axios';
import './MenuDetail.css';


class MenuDetail extends React.Component {

    state = {
        menuList: [],
    }

    getMenuDetail = async (id) => {
        const menuList = await axios.get('http://localhost:8989/drink?'+id);
        this.setState({ menuList: menuList.data });
        console.log(menuList);

    }

    // componentDidMount(){
    //     this.getMenuDetail();
    // }

    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/');
        } else {
            console.log(location.state.id);
            this.getMenuDetail(location.state.id);
        }
    }

    render() {
        console.log(this.props);
        const { location } = this.props;
        if (location.state) {
            return (
                <div className="drink__container">
                   
                            <ul key={location.state.index}>
                                <img src={location.state.background_image} alt={location.state.name} />
                                <h5 className="drink__name">메뉴명: {location.state.menu_name}</h5>
                                <h4 className="drink_en_name">{location.state.name_en}</h4><br/>
                                <h5 className="drink__price">가격 : {location.state.price}</h5><br />
                                <div className="drink__component">
                                    <h5><b>성분</b></h5>
                                    <b>칼로리</b> : {location.state.calorie},
                                    <b> 당류</b> : {location.state.sugar},
                                    <b> 카페인</b> : {location.state.caffeine} <br />
                                    <b>알레르기 성분 정보</b> : {location.state.allergy}


                                </div>
                                <p className="drink__detail"><b>상세설명</b> : {location.state.details}</p>
                            </ul>

                                          
                </div>
            );
        } else {
            return null;
        }
    }
}
export default MenuDetail;