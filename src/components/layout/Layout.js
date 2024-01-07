import React from "react";
import { Layout } from 'antd';

import ReSider from "./Sider";
import ReHeader from "./Header";
import ReMain from "./Main";
import './style.scss';

const { Header, Sider, Content } = Layout;

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
};

const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
};
const layoutStyle = {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
    height: '100%'
};

const Layout1 = props => {
    return (
        <div className="re-layout">
            <Layout style={layoutStyle}>
                <Sider width="150px" style={siderStyle}>
                    <ReSider />
                </Sider>
                <Layout>
                    <Header style={headerStyle}>
                        <ReHeader />
                    </Header>
                    <Content>
                        <ReMain />
                    </Content>
                </Layout>
            </Layout>

        </div>
    )
}

export default Layout1