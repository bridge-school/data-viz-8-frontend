import React, { Component } from "react";
import BasicButton from "../Components/BasicButton";

class BasicButtonList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props;
        return (
            <>
                {data.map(({ text, active }, index) => <BasicButton key={index} text={text} active={active} />)}
            </>
        );
    }
}

export default BasicButtonList;