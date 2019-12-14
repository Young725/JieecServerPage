import React, { Component } from 'react';
import { Card, Menu, Dropdown, Button } from 'antd';
import './MarkdownStyle.css';
const marked = require('marked');

class MarkdownHeadingList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const token = marked.lexer(this.props.source)
        let heading = []
        token.forEach(function (e) {
            if (e.type === 'heading') {
                heading.push(e)
            }
        })
        let menu = (
            <Menu className='drop-menu'>
                {
                    heading.map((item, index) => (
                        <Menu.Item key={index}><a href={`#${item.text}`} className={`headings-${item.depth}`}>{item.text}</a></Menu.Item>
                    ))
                }
            </Menu>
        )
        return (
            <>
                <Card title='目录' className='header-container'>
                    <ul className='headings'>
                        {
                            heading.map((item, index) => (
                                <li key={index}><a href={`#${item.text}`} className={`headings-${item.depth}`} >{item.text}</a></li>
                            ))
                        }
                    </ul>
                </Card>
                <Dropdown className='header-mob-container' overlay={menu} placement='bottomRight'>
                    <Button type='link' icon='bars'>导航</Button>
                </Dropdown>
            </>
        );
    }
}

export default MarkdownHeadingList;
