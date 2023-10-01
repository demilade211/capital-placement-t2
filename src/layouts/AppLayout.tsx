import React from 'react'
import styled from 'styled-components';
import SideBar from '../components/SideBar';

const AppLayout: React.FC<any> = ({ children }) => {
    return (
        <Con>
            <SideBar />
            <div className='right-con'>
                {children}
            </div>
        </Con>
    )
}

const Con = styled.div`  
    width: 100%;
    height: 100vh;   
    .right-con{    
        margin-left:80px;  
        border:1px solid black;
    } 
`; 



export default AppLayout