import React from 'react';
import './navBar.css';
import logo from '../logo.svg';

function NavBar() {

    return (
        <nav className="NavBar">
            <div className="NavBar-logo">
                <img src={logo} alt="Company Logo" />
            </div>
            <ul>
                <li><a href="#home">首页</a></li>
                <li><a href="#news">新闻</a></li>
                <li><a href="#about">关于我们</a></li>
                <li><a href="#job-oppotunity">工作机会</a></li>
                <li><a href="#price">定价</a></li>
                <li><a href="#sign-in">登录</a></li>
                <li><a href="#sign-up">注册</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;