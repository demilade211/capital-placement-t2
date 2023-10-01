import React, { useState, useMemo, useEffect } from 'react'
import AppLayout from '../../layouts/AppLayout'
import styled from 'styled-components'; 
import { Col, Divider, Row, Avatar } from 'antd';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import LeftSide from './subcomponents/LeftSide';
import { jobQualifications as details, JobQualification } from "../../utils/data"
import PersonComponent from './subcomponents/PersonComponent';
import Head from './subcomponents/Head'; 

const Index = () => {

    const [showDrop, setShowDrop] = useState(false);
    const [jobQualifications, setJobQualifications] = useState<JobQualification[]>(details);
    const [query, setQuery] = useState<string>("");

    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const filteredJobQualifications = useMemo(() => {
        let filtered = details.filter((qualification) => {
            const searchString = `${qualification.name} ${qualification.location} ${qualification.education} ${qualification.experiences.join(' ')} ${qualification.hashtags.join(' ')}`;
            return searchString.toLowerCase().includes(query.toLowerCase());
        });

        setJobQualifications(filtered)
    }, [query]);

    return (
        <AppLayout>
            <Con>
                <LeftSide setJobQualifications={setJobQualifications} setQuery={setQuery} />
                <RightSide>
                    <Head setShowDrop={setShowDrop} showDrop={showDrop}/>
                    <MainRightCon>
                        <div className='header'>
                            <Row justify="space-between" align="middle">
                                <Col><Checkbox name='education' onChange={onChange}><p className='can-count'>247 Candidates</p></Checkbox></Col>
                                <Col>
                                    <Row gutter={30}>
                                        <Col><p className='qualified'>Qualified</p></Col>
                                        <Col><p className='task'>Task<span className='tag'>25</span></p></Col>
                                        <Col><p className='disqualified'>Disqualified<span className='tag'>75</span></p></Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                        {jobQualifications.map((val, index) => (
                            <PersonComponent key={index} val={val} />
                        ))}

                    </MainRightCon>
                </RightSide>
            </Con>
        </AppLayout>
    )
}

const Con = styled.div`  
    width: 100%; 
    display: grid;
    grid-template-columns:32% 68%;
    background: rgba(246, 246, 249, 0.30);
    @media (max-width: 900px) {  
        grid-template-columns:100%;
    }
`;



const RightSide = styled.div`  
    width: 100%; 
    height: 100vh;
    padding: 30px 0px;
    padding-right: 35px; 
    overflow-y:scroll; 
`;

const MainRightCon = styled.div`  
    width: 100%;  
    height:100vh;
    padding: 8px 16px 0px 16px;
    border-radius: 16px;
    background: #FFF; 
    .header{
        padding:20px 0;
        .can-count{
            color: #1D4ED8;
            font-family: Poppins;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            line-height: 22px; /* 157.143% */
            margin-left:20px;
        }
        .qualified{
            color: #1D4ED8;
            font-family: Poppins;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 22px; /* 157.143% */
        }
        .task{
            color: #0B0B0B;
            font-family: Poppins;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 157.143% */
            display: flex;
        }
        .disqualified{
            display: flex;
            color: #0B0B0B;
            font-family: Poppins;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 157.143% */
        }
        .tag{
            border-radius: 40px;
            background: #F7F8FD;
            display: flex;
            justify-content:center;
            align-items:center;
            padding: 1px 6px;
            color: #22215B;
            text-align: center;
            font-family: Poppins;
            font-size: 10px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 220% */
            margin-left:10px;
        }
    }
`;




export default Index