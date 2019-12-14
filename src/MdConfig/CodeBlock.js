import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
// 设置高亮格式
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
// 设置高亮的语言
import { jsx, javascript, css } from 'react-syntax-highlighter/dist/esm/languages/prism';

class CodeBlock extends Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        language: PropTypes.string
    }

    static defaultProps = {
        language: null
    }

    UNSAFE_componentWillMount() {
        // 注册要高亮的语法，不设置打包后第三方不起作用
        SyntaxHighlighter.registerLanguage("jsx", jsx)
        SyntaxHighlighter.registerLanguage("javascript", javascript)
        SyntaxHighlighter.registerLanguage("css", css)
    }
    render() {
        const { language, value } = this.props;
        return (
            <figure className="highlight">
                <SyntaxHighlighter language={language} style={darcula}>
                    {value}
                </SyntaxHighlighter>
            </figure>
        );
    }
}

export default CodeBlock;
