import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import './SelfStyle.css';

class InnerBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frontend: {
                lang: [
                    { name: 'HTML', link: 'https://www.w3school.com.cn/html/index.asp' },
                    { name: 'CSS', link: 'https://www.w3school.com.cn/css/index.asp' },
                    { name: 'Javascript', link: 'https://www.w3school.com.cn/js/index.asp' },
                    { name: 'TypeScript', link: 'https://www.tslang.cn/' },
                    { name: 'Sass', link: 'https://www.sass.hk/' },
                    { name: '微信小程序', link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/' },
                ],
                framework: [
                    { name: 'React', link: 'https://zh-hans.reactjs.org/' },
                    { name: 'Vue', link: 'https://cn.vuejs.org/' },
                    { name: 'Taro', link: 'https://taro.aotu.io/' },
                    { name: 'ColorUI', link: 'https://github.com/weilanwl/ColorUI' },
                    { name: 'MP ColorUI', link: 'https://yinliangdream.github.io/mp-colorui-doc/' },
                    { name: 'Ant Design', link: 'https://ant.design/' },
                    { name: 'ElementUI', link: 'https://element.eleme.cn/#/zh-CN' },
                ],
                paper: [
                    { name: '技术胖', link: 'http://jspang.com/' },
                    { name: 'react-markdown 使用总结', link: 'https://segmentfault.com/a/1190000020294373' },
                    { name: 'React onClick点击事件传参三种写法', link: 'https://www.jianshu.com/p/c1d1e9c9c47b' },
                ]
            },
            backend: {
                lang: [
                    { name: 'Go', link: 'https://golang.org/' },
                    { name: 'Python', link: 'https://www.python.org/' },
                ],
                framework: [
                    { name: 'Flask', link: 'https://dormousehole.readthedocs.io/en/latest/' },
                    { name: 'Django', link: 'https://www.djangoproject.com/' },
                    { name: 'Gin', link: 'https://github.com/gin-gonic/gin' },
                    { name: 'Nginx', link: 'http://nginx.org/' }
                ],
                paper: [
                    { name: '李文周的博客', link: 'https://www.liwenzhou.com/' },
                ]
            },
        }
    }

    gotoLink(link) {
        window.location.href = link
    }

    render() {
        return (
            <>
                <Card className='inner-pc'>
                    <Card type='inner' title='前端/小程序开发' className='card-margin'>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card bordered={false} title='语言'>
                                    <ul>
                                        {
                                            this.state.frontend.lang.map((item, index) => (
                                                <li key={index} onClick={() => this.gotoLink(item.link)}>{item.name}</li>
                                            ))
                                        }
                                    </ul>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card bordered={false} title='框架'>
                                    <ul>
                                        {
                                            this.state.frontend.framework.map((item, index) => (
                                                <li key={index} onClick={() => this.gotoLink(item.link)}>{item.name}</li>
                                            ))
                                        }
                                    </ul>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card bordered={false} title='文章'>
                                    <ul>
                                        {
                                            this.state.frontend.paper.map((item, index) => (
                                                <li key={index} onClick={() => this.gotoLink(item.link)}>{item.name}</li>
                                            ))
                                        }
                                    </ul>
                                </Card>
                            </Col>
                        </Row>
                    </Card>

                    <Card type='inner' title='后端开发' className='card-margin'>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card bordered={false} title='语言'>
                                    <ul>
                                        {
                                            this.state.backend.lang.map((item, index) => (
                                                <li key={index} onClick={() => this.gotoLink(item.link)}>{item.name}</li>
                                            ))
                                        }
                                    </ul>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card bordered={false} title='框架'>
                                    <ul>
                                        {
                                            this.state.backend.framework.map((item, index) => (
                                                <li key={index} onClick={() => this.gotoLink(item.link)}>{item.name}</li>
                                            ))
                                        }
                                    </ul>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card bordered={false} title='文章'>
                                    <ul>
                                        {
                                            this.state.backend.paper.map((item, index) => (
                                                <li key={index} onClick={() => this.gotoLink(item.link)}>{item.name}</li>
                                            ))
                                        }
                                    </ul>
                                </Card>
                            </Col>
                        </Row>
                    </Card>
                </Card>
                <Card className='inner-mb'>
                    <Card type='inner' title='前端/小程序开发' className='card-margin'>
                        <Card bordered={false} title='语言'>
                            <ul>
                                {
                                    this.state.frontend.lang.map((item, index) => (
                                        <li key={index} onClick={() => this.gotoLink(item.link)}>{item.name}</li>
                                    ))
                                }
                            </ul>
                        </Card>
                        <Card bordered={false} title='框架'>
                            <ul>
                                {
                                    this.state.frontend.framework.map((item, index) => (
                                        <li key={index} onClick={() => this.gotoLink(item.link)}>{item.name}</li>
                                    ))
                                }
                            </ul>
                        </Card>
                        <Card bordered={false} title='文章'>
                            <ul>
                                {
                                    this.state.frontend.paper.map((item, index) => (
                                        <li key={index} onClick={() => this.gotoLink(item.link)}>{item.name}</li>
                                    ))
                                }
                            </ul>
                        </Card>
                    </Card>

                    <Card type='inner' title='后端开发' className='card-margin'>
                        <Card bordered={false} title='语言'>
                            <ul>
                                {
                                    this.state.backend.lang.map((item, index) => (
                                        <li key={index} onClick={() => this.gotoLink(item.link)}>{item.name}</li>
                                    ))
                                }
                            </ul>
                        </Card>
                        <Card bordered={false} title='框架'>
                            <ul>
                                {
                                    this.state.backend.framework.map((item, index) => (
                                        <li key={index} onClick={() => this.gotoLink(item.link)}>{item.name}</li>
                                    ))
                                }
                            </ul>
                        </Card>
                        <Card bordered={false} title='文章'>
                            <ul>
                                {
                                    this.state.backend.paper.map((item, index) => (
                                        <li key={index} onClick={() => this.gotoLink(item.link)}>{item.name}</li>
                                    ))
                                }
                            </ul>
                        </Card>
                    </Card>
                </Card >
            </>
        );
    }
}

export default InnerBody;