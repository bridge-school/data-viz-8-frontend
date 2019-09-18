import React, { Component } from "react";
import BasicButton from "../Components/BasicButton";

class BasicButtonList extends Component {
    render() {
        const { data } = this.props;
        return (
            <>
                {data.map(({ key, text, active }, index) => 
                    <BasicButton key={index} dataKey={key} text={text} active={active} />)}
            </>
        );
    }
}

export default BasicButtonList;