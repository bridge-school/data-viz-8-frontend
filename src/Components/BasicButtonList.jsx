import React from "react";
import BasicButton from "../Components/BasicButton";

function BasicButtonList({ data }) {
    return (
        <>
            {data.map(({ text, active }, index) => <BasicButton key={index} text={text} active={active} />)}
        </>
    );
}

export default BasicButtonList;