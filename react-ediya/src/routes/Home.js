import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom';





function Home(){
        return (
            <div>
                <div id="slide">
                    <input type="radio" name="pos" id="pos1" checked/>
                        <input type="radio" name="pos" id="pos2"/>
                            <input type="radio" name="pos" id="pos3"/>
                                <input type="radio" name="pos" id="pos4"/>
                                    <ul>
                                        <Link to='/menu' onClick={()=>{
                                            
                                        }}><li id='2'></li></Link>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                    <p class="pos">
                                        <label for="pos1"></label>
                                        <label for="pos2"></label>
                                        <label for="pos3"></label>
                                        <label for="pos4"></label>
                                    </p>
                </div>                    
                    <p className="if">서울특별시 강남구 논현로 636 이디야빌딩(서울특별시 강남구 논현동 221-17<br />
                                TEL : 02-543-6467 FAX : 02-543-7191 대표이사 : 문창기</p>

            </div>
                            );
    }


export default Home;
