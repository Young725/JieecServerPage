import React from 'react';
import { Result, Layout, Button } from 'antd';
const { Footer } = Layout;

export default function Error404 () {
    const back2home = () => {
        window.location.href = '/'
    }
    return (
        <Layout>
            <Result
                style={{ marginTop: '100px' }}
                status='404'
                title='404'
                subTitle='没有找到请求的内容嗷(＃°Д°)'
                extra={
                    <Button onClick={() => back2home()}>返回主页</Button>
                }
            />
            <Footer style={{ textAlign: 'center' }}>Copyright © 2019 https://server.jieec.cn<br />皖ICP备16017020号</Footer>
        </Layout>
    );
}
