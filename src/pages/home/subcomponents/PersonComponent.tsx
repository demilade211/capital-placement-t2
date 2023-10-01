import React from 'react'
import styled from 'styled-components';
import { Col, Divider, Row, Avatar } from 'antd';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

const PersonComponent: React.FC<any> = ({val}) => {
    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
    };
    return (
        <PersonCard>
            <Checkbox style={{ marginRight: "25px" }} name='education' onChange={onChange}></Checkbox>
            <Avatar size={64} style={{ backgroundColor: '#D7E5FD', color: '#B1CDFD', fontFamily: "Poppins", fontWeight: "500", fontSize: "20px" }}>UT</Avatar>
            <div className='details'>
                <h3>{val.name}</h3>
                <p className='loc'>{val.location}</p>
                <p className='edu'>{val.education}</p>
                <MyRow gutter={10}>
                    {val.hashtags.map((vals:any, indes:any) => <Col key={indes}><span className='hash'>#{vals}</span></Col>)}
                </MyRow>
                <Row gutter={10}>
                    {val.experiences.map((vals:any, indes:any) => <Col key={indes}><span className='exp'>{vals}</span></Col>)}
                </Row>
            </div>
        </PersonCard>
    )
}

const PersonCard = styled.div`  
    width: 100%;  
    min-height:143px;
    border-radius: 16px;
    background: #FFF;
    border-top: 1px solid #EEE; 
    display: flex;
    align-items:center;
    .details{
        height: 100%;
        margin-left:20px;
        h3{
            color: #000;
            font-family: Poppins;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin-bottom:8px;
        }
        .loc{
            color: #000;
            font-family: Poppins;
            font-size: 10px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            margin-bottom:8px;
        }
        .edu{
            color: #000;
            font-family: Poppins;
            font-size: 10px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
        }
        .hash{
            color: #1D4ED8;
            font-family: Poppins;
            font-size: 8px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            margin-right: 10px;
        }
        .exp{
            border-radius: 16px;
            background: #F3FAFC;
            display: flex;
            padding: 2px 10px;
            justify-content: center;
            align-items: center;
            color: #037092;
            font-family: Poppins;
            font-size: 8px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }
    }
`;

const MyRow = styled(Row)`  
    margin-bottom:10px;
`;


export default PersonComponent