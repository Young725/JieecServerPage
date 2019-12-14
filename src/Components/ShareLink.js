import React, { Component } from 'react';
import { Card } from 'antd';

// 这是友链卡片
class ShareLink extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <Card title='Links' className='card-style' style={{ marginTop: '10px' }}>
                友情链接
            </Card>
        );
    }
}

export default ShareLink;
