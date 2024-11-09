import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import avatar from '../img/avatar.png'
import { signout } from '../utils/Icons'
import { menuItems } from '../utils/menuItems'

function Navigation({active, setActive}) {
    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>Mike</h2>
                    <p>Your Money</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <NavLink
                        key={item.id}
                        to={item.link}
                        onClick={() => setActive(item.id)}
                        className={({ isActive }) => 
                            isActive || active === item.id ? 'active' : ''
                        }
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </NavLink>
                })}
            </ul>
            <div className="bottom-nav">
                <NavLink to="/signout">
                    {signout} Sign Out
                </NavLink>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            color: rgba(34, 34, 96, 1);
        }
        p{
            color: rgba(34, 34, 96, .6);
        }
    }

    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        a {
            display: flex;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, .6);
            padding-left: 1rem;
            gap: 10px;
            position: relative;
            text-decoration: none;
            i{
                color: rgba(34, 34, 96, 0.6);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
            &:hover {
                transform: scale(1.1);
            }
        }
    }

    .active{
        color: rgba(34, 34, 96, 1) !important;
        i{
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }

    .bottom-nav {
        a {
            display: flex;
            align-items: center;
            gap: 10px;
            color: rgba(34, 34, 96, .6);
            cursor: pointer;
            transition: all .2s ease-in-out;
            text-decoration: none;
            &:hover {
                transform: scale(1.1);
            }
        }
    }
`;

export default Navigation