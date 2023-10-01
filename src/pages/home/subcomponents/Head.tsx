import React from 'react'
import styled from 'styled-components';
import caret from "../images/caret.svg"
import mail from "../images/Mail.svg"
import check from "../images/User_Check.svg"
import close from "../images/User_Close.svg"
import voice from "../images/User_Voice.svg"
import tag from "../images/tag.svg"
import expand from "../images/expand_more.svg"

interface Status {
    type: string;
    count: string;
}

let status: Status[] = [
    {
        type: "Applied",
        count: "234"
    },
    {
        type: "Shortlisted",
        count: "234"
    },
    {
        type: "Technical Interview",
        count: "234"
    },
    {
        type: "Opportunity Browsing",
        count: "211"
    },
    {
        type: "Video Interview I",
        count: "204"
    },
    {
        type: "Video Interview II",
        count: "234"
    },
    {
        type: "Video Interview III",
        count: "5234"
    },
    {
        type: "Offer",
        count: "234"
    },
    {
        type: "Withdrawn",
        count: "89"
    },

]

const Head: React.FC<any> = ({showDrop,setShowDrop}) => {
    return (
        <HeadCon>
            <div className='dropdown-con' onClick={() => setShowDrop(!showDrop)}>
                <p className='drop-text'>Opportunity Browsing</p>
                <img src={caret} alt="img" />
                {showDrop &&
                    <div className={`drop-down ${showDrop && "no-bottom-radius"}`}>
                        {status.map((val) => (
                            <div className='drop-list'>
                                <p>{val.type}</p>
                                <span>{val.count}</span>
                            </div>
                        ))}
                    </div>
                }
            </div>
            <div className='btns-con'>
                <div className='btn'>
                    <img src={tag} alt="img" />
                </div>
                <div className='btn'>
                    <img src={close} alt="img" />
                </div>
                <div className='btn'>
                    <img src={check} alt="img" />
                </div>
                <div className='btn'>
                    <img src={voice} alt="img" />
                </div>
                <div className='btn'>
                    <img src={mail} alt="img" />
                </div>
                <div className='move-con'>
                    <div className='left'>
                        <p>Move To Video Interview I</p>
                    </div>
                    <div className='right'>
                        <img src={expand} alt="img" />
                    </div>
                </div>
            </div>
        </HeadCon>
    )
}

const HeadCon = styled.div`  
    width: 100%; 
        display: flex;
        flex-wrap:wrap;
        justify-content:space-between;
        align-items: center; 
        margin-bottom:30px;
        .dropdown-con{ 
            display: flex;
            justify-content:space-between;
            align-items: center;
            width: 280px;
            height: 40px;
            padding: 8px 16px;
            border-radius: 16px;
            background: #FFF;
            box-shadow: 0px 4px 25px 0px rgba(29, 78, 216, 0.05);
            position: relative;
            cursor: pointer;
            .drop-text{
                color: #1D4ED8;
                font-family: Poppins;
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: 22px; /* 137.5% */
            }
            .drop-down{
                width: 100%;
                position:absolute;
                min-height:100px;
                top: 40px;
                left: 0;
                z-index:4;
                border-radius: 0px 0px 16px 16px;
                background: #FFF;
                box-shadow: 0px 4px 25px 0px rgba(29, 78, 216, 0.05);
                .drop-list{
                    border-top: 1px solid #EEE;
                    display: flex;
                    width: 100%;
                    height: 72px;
                    padding: 8px 16px;
                    justify-content: space-between;
                    align-items: center;
                    background: #FFF;
                    box-shadow: 0px 4px 25px 0px rgba(29, 78, 216, 0.05);
                    p{
                        color: #0B0B0B;
                        font-family: Poppins;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 22px; /* 137.5% */
                    }
                    span{
                        display: flex;
                        padding: 2px 10px;
                        justify-content: center;
                        align-items: center;
                        border-radius: 16px;
                        background: #F8F8F8;
                        color: #444;
                        font-family: Poppins;
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: normal;
                    }
                    &:hover{
                        background: #EDF2FF;
                        span{
                            background: #D1DDFF;
                            color: #1D4ED8;
                            font-family: Poppins;
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 500;
                            line-height: normal;
                        }
                    }
                }
            }
        }
        .no-bottom-radius{
            border-radius: 16px 16px 0px 6px;
        }
        .btns-con{
            display: flex;
            flex-wrap:wrap;
            .btn{
                width: 40px;
                height: 40px;
                display: flex;
                justify-content:center;
                align-items:center;
                border-radius: 8px;
                border: 0.5px solid #ECECEC;
                background: #FFF;
                box-shadow: 0px 4px 25px 0px rgba(141, 141, 141, 0.05);
                margin-right:10px;
                cursor: pointer;
            }
            .move-con{
                display: flex;
                cursor: pointer;
                .left{
                    display: flex;
                    padding: 8px 16px;
                    align-items: center;
                    border-radius: 8px 0px 0px 8px;
                    background: #1D5ECD;
                    p{
                        color: #FFF;
                        font-family: Poppins;
                        font-size: 13px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 22px; /* 169.231% */
                        white-space:nowrap;
                    }
                }
                .right{
                    display: flex; 
                    padding: 12px 10px;
                    align-items: center;
                    border-radius: 0px 8px 8px 0px;
                    background: #1D5ECD;
                    border-left:1px solid white;
                }
            }
        }
`;

export default Head