import { Button, Typography, Modal, Form, Radio, Space } from "antd";
import styled from "styled-components";
import * as React from "react";

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
`;

const CustomButton = styled(Button)`
  width: 20rem;
  height: 3rem;
  margin-bottom: 20px;
`;

interface MainPresenterProps {
  onClickMakeRoom: Function;
  makeModalStatus: boolean;
  setMakeModalStatus: Function;
  onHandleMakeRoom : Function;
}

const MainPresenter = ({
  makeModalStatus,
  setMakeModalStatus,
  onClickMakeRoom,
  onHandleMakeRoom
}: MainPresenterProps) => {
  return (
    <Body>
      <Typography.Title>Zumo.io</Typography.Title>
      <CustomButton type="primary" onClick={() => onClickMakeRoom()}>
        방 생성하기
      </CustomButton>
      <CustomButton type="danger">방 참가하기</CustomButton>

      <Modal
        visible={makeModalStatus}
        onOk={() => onHandleMakeRoom()}
        onCancel={() => setMakeModalStatus(false)}
      >
        <Typography.Title>방 생성 정보</Typography.Title>
        <Form>
          <Form.Item>
            방 유형 : <Space />
            <Radio.Group>
              <Radio.Button value="1:1">1:1</Radio.Button>
              <Radio.Button
                value="1:N"
                disabled
              >
                1:N
              </Radio.Button>
              <Radio.Button
                value="free"
                disabled
              >
                자유 스트리밍
              </Radio.Button>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal>
    </Body>
  );
};

export default MainPresenter;
