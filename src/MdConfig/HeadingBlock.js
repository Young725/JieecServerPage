import React, { Component } from "react";
import Heading from "./Heading";

class HeadingBlock extends Component {
    renderHtml = () => {
        const { level, children } = this.props;
        if (children && children.length > 0) {
            const nodeValue = children[0].props.value;
            return (
                <Heading level={`h${level}`} id={nodeValue} type={`h${level}`}>
                    <span className="title">{children}</span>
                    <a href={`#${nodeValue}`} className="link">
                        #
                    </a>
                </Heading>
            );
        } else {
            return <>{children}</>;
        }
    };
    render() {
        return <>{this.renderHtml()}</>;
    }
}

export default HeadingBlock;