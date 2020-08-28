import React from 'react';
import {Link} from 'react-router-dom';

function UserLogin(){
    return(
        <div className="login">
            <div id="header">
                <h1>로고</h1>
            </div>
            <div id="content">
                <div className="loginForm">
                    <div className="userLogin">
                        <label>
                            <input type="text" name="username" placeholder="아이디"/>
                            <input type="password" name="password" placeholder="패스워드"/>
                        </label>
                        <div className="loginCheck">
                            <input type="checkbox" name="loginCheck"/> 
                            <p>로그인 유지</p>
                        </div>
                        <button><Link to=''>로그인하기</Link></button>
                        <button id="undefined"><Link to=''>비회원 주문</Link></button>
                        <div className="searchInfo">
                            <ul>
                                <li>아이디 찾기</li>
                                <li>비밀번호 찾기</li>
                                <li>회원가입</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer">
                <h1>MGJ</h1>
            </div>
        </div>
    )
}

export default UserLogin;