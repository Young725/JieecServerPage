import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Pages/Home';
import Docs from './Pages/Docs';
import Error404 from './ErrorPages/Error404';
const { Header } = Layout;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedKeys: ['home']
    }
  }

  UNSAFE_componentWillMount() {
    switch (window.location.pathname.substr(0, 5)) {
      case '/docs': {
        this.setState({
          selectedKeys: ['docs']
        })
        break;
      }
      default: {
        this.setState({
          selectedKeys: ['home']
        })
        break;
      }
    }
  }

  chooseItem = (item) => {
    switch (item.key) {
      case 'home': {
        this.setState({
          selectedKeys: ['home']
        })
        break;
      }
      case 'jieec': {
        window.location.href = 'http://www.jieec.cn'
        break;
      }
      case 'sf': {
        window.location.href = 'https://segmentfault.com/u/herberthe'
        break;
      }
      case 'github': {
        window.location.href = 'https://github.com/HerbertHe'
        break;
      }
      case 'gitee': {
        window.location.href = 'https://gitee.com/HerbertHe'
        break;
      }
      case 'gitpage': {
        window.location.href = 'https://herberthe.github.io'
        break;
      }
      case 'nucode': {
        window.location.href = 'http://nucode.cn/member/Herbert'
        break;
      }
      case 'docs': {
        this.setState({
          selectedKeys: ['docs']
        })
        break;
      }
      case 'download': {
        window.location.href = 'https://server.jieec.cn/download/'
        break;
      }
      default: {
        break;
      }
    }
  };
  render() {
    return (
      <div className='app'>
        <Router>
          <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
              <Menu
                theme='dark'
                mode='horizontal'
                style={{ lineHeight: '64px' }}
                onClick={(item) => this.chooseItem(item)}
                defaultSelectedKeys={this.state.selectedKeys}
              >
                <Menu.Item key='home'><Link to='/'>Home</Link></Menu.Item>
                <Menu.Item key='jieec'>Jieec</Menu.Item>
                <Menu.Item key='sf'>SegmentFault</Menu.Item>
                <Menu.Item key='github'>GitHub</Menu.Item>
                <Menu.Item key='gitee'>Gitee</Menu.Item>
                <Menu.Item key='gitpage'>GitHub Page</Menu.Item>
                <Menu.Item key='nucode'>Nucode</Menu.Item>
                <Menu.Item key='docs'><Link to='/docs'>Docs</Link></Menu.Item>
                <Menu.Item key='download'>Download</Menu.Item>
              </Menu>
            </Header>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/docs' component={Docs} />
              <Route component={Error404} />
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
