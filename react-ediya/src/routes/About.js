import React from 'react';
import './About.css';


function About(){
    return (
        <div>
            <div className="about_container"> ABOUT US </div>
            <div className="body_container">
                <div className="con_title">
                    <h2> EDIYA COFFEE </h2>
                    <p> Always Beside You, 이디야커피는 언제나 당신 곁에 함께 합니다.</p>
                </div>
                <div>
                    <iframe title="about ediya" width="900px" height="600" src="https://www.youtube.com/embed/V_XXlw7fcHs" frameborder="0" allowFullScreen/>
                </div>
                <ul className="context">
                    <li>
                        <div className="img_1">
                            <img src="https://ediyastore.com/24d/garo_about_290524/img/con_img01.gif" alt="img1"></img>
                        </div>
                        <div>
                          <h5>커피 한잔의 진심</h5>  
                        </div>
                        <div>
                            <p>해외에 로열티를 내지 않는 순수 국내 브랜드 이디야커피, 품질 좋고 맛있는 커피를 합리적인 가격으로 소비자에게 제공하는 것을 우리의 진심이라 믿습니다. 
                                더 맛있는 커피를 만들기위해 2010년 커피연구소 설립을 시작으로 2016년 4월 ‘고객과 소통하는 커피연구소’를 테마로 [이디야커피랩]을 오픈하여 
                                더 나은 커피를 위해 끊임없는 연구 개발을 진행하고 있습니다.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="img_2">
                            <img src="https://ediyastore.com/24d/garo_about_290524/img/con_img02.gif" alt="img2" ></img>
                        </div>
                        <div>
                          <h5>함께 행복하기 위한 상생협력</h5>  
                        </div>
                        <div>
                            <p>이디야커피는 고객, 가맹점주, 협력사와의 상생협력을 무엇보다 소중하게 생각합니다. 
                                이디야커피의 ‘상생협력’은 정직과 신뢰를 기반으로 장기적으로 구축되었습니다. 
                                고객들에겐 우리의 진심을 제공하고, 가맹점주에게는 다양한 지원정책으로 미래의 행복으로 인도하며, 
                                협력사와는 오랜기간 쌓아온 굳건한 신뢰로 양질의 원부자재를 공급받고 있습니다.
                            </p>
                        </div>
                    </li>
                </ul>
                <div>
                    <img src="https://ediyastore.com/24d/garo_about_290524/img/con_bottom_line.gif" alt="img3"></img>
                </div>
                <div>
                    <h2> 이디야의 핵심가치 </h2>
                </div>
                <div>
                    <img src="https://ediyastore.com/24d/garo_about_290524/img/con_img06.gif" alt="img4"></img>
                </div>
            </div>
        </div>
        
        );   
}

export default About;