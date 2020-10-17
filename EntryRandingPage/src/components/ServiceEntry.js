import React, {} from 'react';
import styled from 'styled-components';

const Div = styled.div`
    a {
        text-decoration: none;
    }   

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #services {
        padding: 160px 0;
    }

    .container {

    }

    .row {

    }

    .serviceName {

    }

    .section-heading {

    }

    .section-subheading {

    }
`;

const ServiceEntry = () => {
    return (
        <div>
            <section id="services">
                <div className="container">
                    <div className="row">
                        <div className="serviceName">
                            <h2 className="section-heading">WHAT IS ENTRYDSM</h2>
                            <h3 className="section-subheading">
                                EntryDSM은 대덕소프트웨어마이스터고등학교 학생들의 자발적 참여로<br></br>개발 및 유지보수가 이뤄지고 있는<strong>입학전형시스템</strong>입니다.
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );  
}

export default ServiceEntry;