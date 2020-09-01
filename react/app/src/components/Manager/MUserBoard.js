import React from 'react';

import MNav from './ManagingNav';
import Footer from '../Footer';

const MUserBoard = () =>(
    <div className="MBoard">
        <div id="header">
            <MNav />
        </div>
        <div id="content">
            <div className="board">
                <div className="title">
                    <h1>사용자 관리</h1>
                    <div className="btn">
                        <button id="edit">수정</button>
                        <button id="delete">삭제</button>
                    </div>                    
                </div>
                <div className="boardContent">
                    
                </div>
            </div>
        </div>
        <Footer />
    </div>
)

export default MUserBoard;