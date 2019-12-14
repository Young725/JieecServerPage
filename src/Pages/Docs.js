import React, { Component } from 'react';
import { Layout, Menu, BackTop, Drawer, Button } from 'antd';
import AlternativeMd from '../Components/AlternativeMd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DocsDefault from '../Components/DocsDefault';
import './DocsStyle.css';
const { Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Docs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultSelectedKeys: ['文章1'],
            defaultOpenKeys: ['sub1'],
            show: false
        }
    }

    showDrawer() {
        this.setState({
            show: !this.state.show
        })
    }

    unshow() {
        this.setState({
            show: false
        })
    }

    render() {
        const siderContent = (
            <Sider width={255} style={{ marginRight: '30px' }} className='docs-sider' >
                <Menu mode='inline' theme='dark' defaultOpenKeys={this.state.defaultOpenKeys} defaultSelectedKeys={this.state.defaultSelectedKeys}>
                    <SubMenu title={<span>类型1</span>} key='sub1'>
                        <Menu.Item><Link to='/文章1' key='文章1'>文章1</Link></Menu.Item>
                        <Menu.Item><Link to='/文章2'>文章2</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu title={<span>类型2</span>} key='sub2'>
                        <Menu.Item>文章1</Menu.Item>
                    </SubMenu>
                    <SubMenu title={<span>类型3</span>} key='sub3'>
                        <Menu.Item>文章1</Menu.Item>
                    </SubMenu>
                    <SubMenu title={<span>类型4</span>} key='sub4'>
                        <Menu.Item>文章1</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        )
        const drawerContent = (
            <>
                <Button type='primary' icon='menu' className='docs-control-sider' onClick={() => this.showDrawer()}>菜单</Button>
                <Drawer className='docs-drawer' bodyStyle={{ padding: 0 }} closable={true} title='文章列表' placement='left' visible={this.state.show} maskClosable={true} onClose={() => this.unshow()} >
                    <Menu mode='inline' theme='light' defaultOpenKeys={this.state.defaultOpenKeys} defaultSelectedKeys={this.state.defaultSelectedKeys}>
                        <SubMenu title={<span>类型1</span>} key='sub1'>
                            <Menu.Item><Link to='/文章1' key='文章1'>文章1</Link></Menu.Item>
                            <Menu.Item><Link to='/文章2'>文章2</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu title={<span>类型2</span>} key='sub2'>
                            <Menu.Item>文章1</Menu.Item>
                        </SubMenu>
                        <SubMenu title={<span>类型3</span>} key='sub3'>
                            <Menu.Item>文章1</Menu.Item>
                        </SubMenu>
                        <SubMenu title={<span>类型4</span>} key='sub4'>
                            <Menu.Item>文章1</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Drawer>
            </>
        )
        return (
            <Layout className='docs-layout'>
                <Router basename='docs'>
                    {siderContent}
                    {drawerContent}
                    <Layout>
                        <BackTop visibilityHeight={10} />
                        <Route path='/' exact component={DocsDefault} />
                        <Route path={'/:paper'} component={AlternativeMd} />
                        <Footer style={{ textAlign: 'center' }}>Copyright © 2019 https://server.jieec.cn<br />皖ICP备16017020号</Footer>
                    </Layout>
                </Router>
            </Layout>
        );
    }
}

export default Docs;
