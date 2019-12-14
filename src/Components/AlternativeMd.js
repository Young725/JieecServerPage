import React, { Component } from 'react';
import MarkdownHeadingList from './MarkdownHeadingList';
import CodeBlock from '../MdConfig/CodeBlock';
import HeadingBlock from '../MdConfig/HeadingBlock';
import {  paper } from '../Markdowns/MarkdownManager';
import { Layout } from 'antd';
const { Content } = Layout;
const ReactMarkdown = require('react-markdown');

class AlternativeMd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            docs: ''
        }
    }

    UNSAFE_componentWillMount() {
        const target = this.props.match.params.paper
        // import('../Markdowns/' + target + '.md').then(themodule => {
        //     this.setState({
        //         docs: themodule.default
        //     })
        // })

        if (paper[target] === undefined) {
            window.location.href = '/error/404'
        } else {
            this.setState({
                docs: paper[target]
            })
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const target = nextProps.match.params.paper
        // 可以编译，要拆文档管理器
        // import('../Markdowns/' + target + '.md').then(themodule => {
        //     this.setState({
        //         docs: themodule.default
        //     })
        // })
        if (paper[target] === undefined) {
            window.location.href = '/error/404'
        } else {
            this.setState({
                docs: paper[target]
            })
        }
    }

    render() {
        return (
            <>
                <MarkdownHeadingList source={this.state.docs} />
                <Content style={{ backgroundColor: 'white', padding: '50px' }}>
                    <ReactMarkdown source={this.state.docs} escapeHtml={false} renderers={{ code: CodeBlock, heading: HeadingBlock }} />
                </Content>
            </>
        );
    }
}

export default AlternativeMd;
