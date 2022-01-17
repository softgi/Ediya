import React from "react";
import './BoardComment.css';
import {Link} from 'react-router-dom';


class BoardComment extends React.Component{
    
    componentDidMount(){    
        const {location, history}=this.props;
        if(location.state===undefined){
            history.push('/board');
        }
    }

    render(){
    console.log(this.props);     
        const {location}=this.props;  
        if(location.state){            
           return (
                
                <div className="box">
                    <div className="about__container">
                        <table className="about__table">
                            <thead>
                                <tr>
                                    <td colspan='2' className="comment__title">{location.state.title}</td>
                                </tr>
                                <tr className="comment__detail">
                                    <td>Id : {location.state.id}</td>
                                    <td>작성일 : {location.state.writeDate}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="comment__content">
                                    <td colspan='2'>{location.state.content}</td>
                                </tr>
                            </tbody>
                        </table> 
                    </div>
                    <div style={{textAlign: 'center' }}>
                    <Link to={ { pathname:'/board-write', state : {articleNo:location.state.articleNo}} } >
                        <button className="btn_newComm">댓글달기</button>
                    </Link > &nbsp;
                    <Link to={ { pathname:'/board'  } } >
                        <button className="btn_toList">목록으로</button>
                    </Link>
                </div>
                     
                </div>                 
                );
        }else{
            return null;
        }
        
    }




}


export default BoardComment;