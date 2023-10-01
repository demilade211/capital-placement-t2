import React from 'react'
import search from "../images/search.svg"
import down from "../images/down.svg"
import file from "../images/file.svg"
import styled from 'styled-components'; 
import { Col, Divider, Row } from 'antd';

const LeftSide = () => {
    return (
        <Left>
            <h1>London Internship Program</h1>
            <p className='sub-text'>London</p>
            <SearchCon>
                <img src={search} alt="img" />
                <input type="text" placeholder="Serach by name, edu, exp or #tag" />
            </SearchCon>
            <FilterCon>
                <div className='head'>
                    <h2>Filters</h2>
                    <span className='filter-count'>0 Selected</span>
                </div>
                {["Personal Information", "Education", "Work Experience", "Activity Filter", "Advanced Filter"].map(val => (
                    <Row className='filter-drops' justify="space-between" align="top">
                        <p className='filter-cat'><img src={file} alt="img" />{val}</p>
                        <img src={down} alt="img" />
                    </Row>
                ))}
            </FilterCon>
        </Left>
    )
}

const Left = styled.div`  
    width: 100%;   
    padding: 30px;
    h1{
        color: #1D4ED8;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    .sub-text{
        color: #0B0B0B;
        font-family: Poppins;
        font-size: 12px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
`;

const SearchCon = styled.div`
    margin-top:25px;
    margin-bottom:20px;
    width:100%;
    height:46px; 
    border: 1px solid #F3F3F3;
    background: #FFF; 
    border-radius: 8px;
    display:flex; 
    padding:10px;
    img{
        margin-right:10px;
    }
    input{
        width:100%;
        background:none;
        border:none;
        outline:none; 
        color: #9AA6AC;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px; /* 157.143% */
    }
    @media (max-width: 800px) {
        margin-bottom:10px;
    }
`;

const FilterCon = styled.div`  
    width: 100%;   
    border-radius: 8px;
    background: #FFF;
    .head{
        width: 100%;
        padding: 18px 16px;
        display: flex;
        justify-content: space-between;
        align-items: center; 
        h2{
            color: #0B0B0B;
            font-family: Poppins;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 22px; /* 157.143% */
        }
        .filter-count{
            color: #0B0B0B;
            font-family: Poppins;
            font-size: 12px;
            font-style: normal;
            font-weight: 300;
            line-height: 22px; /* 183.333% */
        }
    }
    .filter-drops{
        padding: 18px 16px; 
        border-top:1px solid #F2F2F2; 
        .filter-cat{
            color: #0B0B0B;
            font-family: Poppins;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 157.143% */
            display: flex;
            align-items: center;
            img{
                margin-right:8px;
            }
        }
    }
`;

export default LeftSide