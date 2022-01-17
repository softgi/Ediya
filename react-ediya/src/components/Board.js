import React from 'react';
import axios from 'axios';
import './Board.css'
import { Link } from 'react-router-dom';

class Board extends React.Component {

    state = {
        page: 1,
        boardList: [],
    };

    getBoard = async () => {
        const boardList = await axios.get('http://localhost:8989/boardList2?page=' + this.state.page);
        this.setState({ boardList: boardList.data });
    };

    componentDidMount() {
        this.getBoard();
    }

    nextPage= async ()=>{
        
        if(this.state.boardList.length<8){            
            return alert("마지막 페이지입니다");
        }
        await this.setState({page: this.state.page+1});        
        this.getBoard();
    };


    priorPage = async () => {
        if(this.state.page===1){
            return alert('첫 페이지입니다');
        }
        await this.setState({page: this.state.page-1});
        this.getBoard();
    };

    firstPage= async ()=>{        
        await this.setState({page: 1});
        this.getBoard();
    };

    render() {
        //console.log(this.state.boardList);
        return (
            <div className="board_bg">
                <div className="board__container">
                    <div className="board__box">
                        <table className="table-striped">
                            <thead className="thead_box">
                                <tr className="tr_box">
                                    <th>No</th><th>제목</th><th>작성자</th><th>작성일</th></tr>
                            </thead>
                            <tbody className="tb_box">
                                {this.state.boardList.map((item, index) => {
                                    console.log(this.state.boardList);
                                    const icon = '↪️';
                                    let icon2 = '';
                                    for (let i = 1; i < item.level; i++) {
                                        icon2 += icon;
                                    }
                                    console.log(item.level);
                                    return (
                                        <tr key={index}>
                                            <td>{item.articleNo}</td>
                                            <td>
                                                <Link to={{ pathname: '/board-comment', state: { ...item } }}>
                                                    <font size="2" title={item.content}>{icon2}{item.title}</font>
                                                </Link>
                                            </td>
                                            <td>{item.id}</td>
                                            <td>{item.writeDate}</td>
                                        </tr>
                                    )
                                }

                                )
                                }
                            </tbody>
                        </table>
                    </div> 
                </div>
                <div style={{ textAlign: 'center' }}>
                    <br/><br/>
                    <Link to='/board' onClick={this.priorPage}> {'<<'} </Link> &nbsp;{this.state.page} &nbsp;
                    <Link to='/board' onClick={this.nextPage}> {'>>'} </Link> <br />
                    <Link to={{ pathname: '/board-write', state: { articleNo: 0 } }} >
                        <button className="btn_new">새글쓰기</button>
                    </Link > &nbsp;
                    <Link to='/board'  onClick={this.firstPage} >
                        <button className="btn_home">첫 페이지로</button>
                    </Link>
                </div>

            </div>
        );

    }






}

export default Board;