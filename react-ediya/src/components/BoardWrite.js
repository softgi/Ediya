import React from "react";
import './BoardWrite.css';
import {Link} from 'react-router-dom';
import axios from "axios";


class BoardWrite extends React.Component{    

    boardWrite= async()=>{
        //console.log("버튼 눌림");
        const title_ele=document.getElementById("title");
        const content_ele=document.getElementById("content");
        console.log(title_ele.value, content_ele.value);
        const axios2 = axios.create({
            withCredentials: true
        });
        const returnData=await axios2.post('http://localhost:8989/boardWrite', null, 
            {params:{title:title_ele.value, content:content_ele.value, articleNO:this.props.location.state.articleNo }});
        alert(returnData.data);
        console.log(returnData);
    };

   
    render(){  

        return (       
            <div className="about__container">                   
                <div className="row">
                    <table className="table" style={{textAlign: 'center' }} >
                        <thead>
                            <tr className="table-active">
                                <th scope="col" style={{width: '50%'}} > 제목 : <input  id="title" /> </th>                                  
                            </tr>
                        </thead>
                        <tbody className="table_body">
                            <tr><td colSpan="2"><textarea rows="15" cols="65" id="content"></textarea></td></tr>
                            <tr>
                                <td colSpan="2">
                                    <button className="btn_info" onClick={this.boardWrite} >등록</button>
                                    &nbsp;
                                    <button className="btn_info">취소</button>
                                    &nbsp;                                           
                                    <Link to={ { pathname:'/board' , state: {} } } >
                                        <button className="btn_list">목록으로</button>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
        
    }
}

export default BoardWrite;


