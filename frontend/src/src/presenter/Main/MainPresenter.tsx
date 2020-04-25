import {Button, Typography} from 'antd';
import styled from 'styled-components';
import * as React from 'react';

const Body = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    flex : 1;
    flex-direction : column;
`;

const CustomButton = styled(Button)`
    width : 20rem;
    height : 3rem;
    margin-bottom :20px;
`;

interface MainPresenterProps {
    onClickMakeRoom : Function
}

const MainPresenter = ({onClickMakeRoom} : MainPresenterProps) => {
    return (
    <Body>
        <Typography.Title>
            Zumo.io
        </Typography.Title>
        <CustomButton
         type="primary"
         onClick={()=>onClickMakeRoom()}
         >
            방 생성하기
        </CustomButton>
        <CustomButton type="danger">
            방 참가하기
        </CustomButton>

        <Modal>
            
        </Modal>
    </Body>
    )
};

export default MainPresenter;