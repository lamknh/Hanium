import React from 'react';
import {Link} from 'react-router-dom';

import Footer from '../Footer';

function OwnerLogin(){
    return(
        <div className="login">
            <div id="header">
                <h1>로고</h1>
            </div>
            <div id="content">
                <p id="description">파트너용</p>
                <h1>로그인</h1>
                <h2>서비스 이용을 위해<br></br>로그인을 해주세요</h2>

                <div className="loginForm">
                    <label>
                        <input type="text" name="username" placeholder="아이디"/>
                        <input type="password" name="password" placeholder="패스워드"/>
                    </label>
                    <div className="loginCheck">
                        <input type="checkbox" name="loginCheck"/> 
                        <p>로그인 유지</p>
                    </div>
                    <button><Link to='/ownerHome'>로그인하기</Link></button>
                    <div className="searchInfo">
                        <ul>
                            <li>아이디 찾기</li>
                            <li>비밀번호 찾기</li>
                            <li>회원가입</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OwnerLogin;