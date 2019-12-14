import React, { Component } from 'react';
import { Layout, BackTop } from 'antd';
import { SelfInfo } from '../Components/SelfInfo';
import InnerBody from '../Components/InnerBody';
import ShareLink from '../Components/ShareLink';
import './HomeStyle.css';
const {Content, Footer, Sider } = Layout;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Layout>
                <Layout className='home-content'>
                    <Content>
                        <InnerBody />
                        <BackTop visibilityHeight={10} className='home-backtop' />
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Copyright © 2019 https://server.jieec.cn<br />皖ICP备16017020号</Footer>
                </Layout>
                <Sider width={300} className='home-sider' style={{ overflow: 'auto', height: '100vh', position: 'fixed', right: 0 }}>
                    <SelfInfo />
                    <ShareLink />
                </Sider>
            </Layout>
        );
    }
}

export default Home;