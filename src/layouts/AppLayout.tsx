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
    .right-con{    
        margin-left:80px;   
    } 
`; 



export default AppLayout