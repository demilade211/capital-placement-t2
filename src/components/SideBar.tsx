import React from 'react'
import styled from 'styled-components';
import setting from "./images/setting.svg"
import right from "./images/right.svg";
import home from "./images/home.svg";
import heart from "./images/heart.svg";
import note from "./images/note.svg";
import file from "./images/file.svg";
import share from "./images/share.svg";
import cal from "./images/cal.svg";
import users from "./images/users.svg";
import { Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const SideBar = () => {
    return (
        <Con>
            <div className='top'>
                <Avatar style={{marginBottom:"35px"}} icon={<UserOutlined />} />
                <div className='img active'><img src={home} alt="img" /></div>
                <div className='img'><img src={users} alt="img" /></div>
                <div className='img'><img src={cal} alt="img" /></div>
                <div className='img'><img src={share} alt="img" /></div>
                <div className='img'><img src={file} alt="img" /></div>
                <div className='img'><img src={note} alt="img" /></div>
                <div className='img'><img src={heart} alt="img" /></div>
                <div className='img'><img src={right} alt="img" /></div>
            </div>
            <div className='bottom'>
                <div className='img'>
                    <img src={setting} alt="img" />
                </div>
                <Avatar style={{ backgroundColor: '#D7E5FD', color: '#B1CDFD',fontFamily:"Poppins",fontSize:"10px" }}>U</Avatar>
            </div>
        </Con>
    )
}

const Con = styled.div`  
    width: 80px;
    height: 100vh;
    background: #FFF;
    box-shadow: 0px 4px 23px 0px rgba(0, 0, 0, 0.05);
    padding: 30px 10px;
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content:space-between;
    position: fixed;
    .top{ 
        display: flex;
        flex-direction: column;
        align-items: center; 
        .img{
            margin-bottom:20px;
            cursor: pointer;
        }
        .active{
            width: 100%;
            height: 48px;
            display: flex;
            justify-content: center;
            border-radius: 8px;
            background: #E9EFFF;
        }
    }
    .bottom{
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            margin-bottom:20px;
            cursor: pointer;
        }
    }
`;

export default SideBar