import axios from 'axios';
import React, {useState} from 'react';
// import {Link} from 'react-router-dom';
import './Navigation.css';


async function logout(){
    const returnData=await axios.post('http://localhost:8989/logout');
    sessionStorage.removeItem("logined_name");
    sessionStorage.removeItem("JSESSIONID");
    window.location.reload();
}

function Navigation() {
    let [name, setName] = useState('');
    const logined_name = sessionStorage.getItem("logined_name");
    return (
        
        <div className="nav">      
                
            
            {/* <Link to="/" className="link">Home</Link> 
                 <Link to="/menu" className="link">MENU</Link>
                 <Link to="/board" className="link">게시판</Link>
                <Link to="/about" className="link">About us</Link> */}
                
                <div className="loggin">
            {
                (name ? name : name = logined_name) ?
                    (
                        <div> {name}님 환영합니다<button onClick={logout}>logout</button> 
                        </div>

                    )
                    :
                    (
                        <div id="loginDiv">
                ID<input size="3" id="id"/>
                PW<input size="3" type="password" id="pw"/>
                <button onClick={ async  ()=>{
                    const id_ele=document.getElementById("id");
                    const pw_ele=document.getElementById("pw");

                    const axios2 = axios.create({
                        withCredentials: true
                      });
                    
                    const returnData=await axios2.post('http://localhost:8989/login',null,
                    {params:{id:id_ele.value,pw:pw_ele.value}});   
                    console.log(returnData);                 
                    const name=returnData.data.name;  
                    setName(name);                                
                    sessionStorage.setItem("logined_name",name);
                   
                }  }>login</button>
                
            </div>
                        
                    )
                    
                }</div>
               
                
                </div>
    )
            }

            
          

export default Navigation;
