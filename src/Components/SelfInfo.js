import React, { Component } from 'react';
import { Card, Avatar, Typography, message } from 'antd';
import Axios from 'axios';
import './SelfStyle.css';
const { Text } = Typography;

export class SelfInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            yiyan: ''
        }
    }
    UNSAFE_componentWillMount() {
        Axios.get('https://v1.hitokoto.cn/?encode=text&charset=utf-8').then(
            res => {
                this.setState({
                    yiyan: res.data
                })
                if (document.body.clientWidth < 1000) {
                    message.success(res.data);
                }
            }
        )
    }
    render() {
        return (
            <Card className='card-style'>
                <Avatar size={75} src='https://avatars0.githubusercontent.com/u/30955264' />
                <div className='text-box'>
                    <b>Herbert He</b><br />
                    <Text className='text-yiyan'>{this.state.yiyan}</Text><br />
                </div>
                <div className='text-info'>
                    <b>Email</b><br />
                    <Text className='text-email'>admin@jieec.cn</Text><br />
                    <Text className='text-email'>admin@jecsci.com</Text><br />
                    <Text className='text-email'>Herbert.He0229@gmail.com</Text><br />
                </div>
            </Card>
        );
    }
}