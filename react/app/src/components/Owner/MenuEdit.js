import React from 'react';

import Nav from './Nav';
function MenuEdit(){
    return(
        <div className="menuEdit">
            <div id="header">
                <Nav />
            </div>
            <div id="content">
                <div className="storeName">
                    <h1>가게 이름</h1>
                </div>
                <div className="category">
                    <button>&lt;</button>           
                    <ul>
                        <li>카테고리</li>
                        <li>카테고리</li>
                        <li>카테고리</li>
                    </ul>
                    <button>&gt;</button>                 
                </div>
                <div className="menu">
                    <span class="dot"></span>
                    <div className="menuInfo">
                        <h1>메뉴 이름</h1>
                        <h2>가격</h2>
                    </div>
                </div>
                <div className="menu">
                    <span class="dot"></span>
                    <div className="menuInfo">
                        <h1>메뉴 이름</h1>
                        <h2>가격</h2>
                    </div>
                </div>
                <div className="menuEditor">
                    <button id="menuEditBtn">메뉴 수정</button>
                    <button id="menuAddBtn">메뉴 추가/삭제</button>
                </div>
            </div>
            <div id="footer">
                <h1>MGJ</h1>
            </div>
        </div>
    )
}

export default MenuEdit;