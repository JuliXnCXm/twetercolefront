import React from 'react'
import { NavLink , useLocation } from 'react-router-dom';

const ExploreNav = () => {
    let activeStyle = {
    color: "#2F80ED",
    };
    let activeClassName = "userNavlist--container__link";
    const { pathname } = useLocation();

    return (
    <nav className="userNavlist--container">
        <ul className="userNav--container__list">
        <li>
            <NavLink
            to=""
            className={({ isActive }) => (isActive ? activeClassName : undefined)}
            isActive={() => ["Top"].includes(pathname)}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            end
            >
            <div>
                <div className="user_Line-nav"></div>
                <span>Top</span>
            </div>
            </NavLink>
        </li>
        <li>
            <NavLink
            to="/explore/latest"
            className={({ isActive }) => (isActive ? activeClassName : undefined)}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
            <div>
                <div className="user_Line-nav"></div>
                <span>Latest</span>
            </div>
            </NavLink>
        </li>
        <li>
            <NavLink
            to="/explore/people"
            className={({ isActive }) => (isActive ? activeClassName : undefined)}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
            <div>
                <div className="user_Line-nav"></div>
                <span>People</span>
            </div>
            </NavLink>
        </li>
        <li>
            <NavLink
            to="/explore/media"
            className={({ isActive }) => (isActive ? activeClassName : undefined)}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
            <div>
                <div className="user_Line-nav"></div>
                <span>Media</span>
            </div>
            </NavLink>
        </li>
        </ul>
    </nav>
    );
}

export default ExploreNav