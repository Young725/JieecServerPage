import React, { Component } from 'react';
import MarkdownHeadingList from './MarkdownHeadingList';
import CodeBlock from '../MdConfig/CodeBlock';
import HeadingBlock from '../MdConfig/HeadingBlock';
import { Layout } from 'antd';
import { paper } from '../Markdowns/MarkdownManager.js';
const ReactMarkdown = require('react-markdown');
const { Content } = Layout;

class DocsDefault extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <MarkdownHeadingList source={paper['default']} />
                <Content style={{ backgroundColor: 'white', padding: '50px' }}>
                    <ReactMarkdown source={paper['default']} escapeHtml={false} renderers={{ code: CodeBlock, heading: HeadingBlock }} />
                </Content>
            </>
        );
    }
}

export default DocsDefault;
