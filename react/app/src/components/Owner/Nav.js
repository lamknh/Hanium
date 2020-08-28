import React from 'react';

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
            //Toggle nav
            
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`; //delay
            }
            //Animate Links
        });
        burger.classList.toggle('toggle');
        //burger Animation
    });    
}

const Nav = () =>(
    <nav>
        <h1>로고</h1>
        <ul className="nav-links">
            <li>
                <a href="#">매출 관리</a>
            </li>
            <li>
                <a href="#">메뉴 수정</a>
            </li>
            <li>
                <a href="#">이벤트/광고</a>
            </li>
        </ul>
        <div className="burger" onClick={navSlide}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
    </nav>
);

export default Nav;