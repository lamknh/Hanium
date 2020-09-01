import React from 'react';
import {Link} from 'react-router-dom';

const MNav = () =>(
    <nav>
        <h1>로고</h1>
        <ul className="nav-links">
            <li>
                <Link to='/mOwnerBoard'>점주 관리</Link>
            </li>
            <li>
                <Link to='/mUserBoard'>사용자 관리</Link>
            </li>
        </ul>
    </nav>
);

export default MNav;