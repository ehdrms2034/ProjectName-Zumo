import React from "react";
import App, { Container } from "next/app";
import "antd/dist/antd.css";
import { Layout } from "antd";
import styled, { createGlobalStyle } from "styled-components";

const { Header, Content, Footer } = Layout;

const Body = styled.div`
  display: flex;
  height : 100vh;
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Layout>
        <Content>
          <Body>
            <Component {...pageProps} />
          </Body>
        </Content>
      </Layout>
    );
  }
}
