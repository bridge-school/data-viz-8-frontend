import React, { Component } from "react";
import { connect } from 'react-redux'
import classnames from 'classnames';

import styles from '../Styles/basicButton.module.scss'

class BasicButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { text, active, updateDetailsPage, currentChart } = this.props;

        return (
            <button className={
                (text === currentChart) ? (classnames(styles.button, styles.active)) : (styles.button)
            }
                onClick={() => updateDetailsPage(text)} // update store
            >
                {text}
            </button >
        );
    }
}
// - {this.props.currentChart}

// export default BasicButton;

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    updateDetailsPage: text => dispatch(updateDetailsPage(text))
});

const updateDetailsPage = (id) => {
    return {
        type: "UPDATE_DETAILS_PAGE",
        payload: id
    }
}

const ConnectedBasicButton = connect(mapStateToProps, mapDispatchToProps)(BasicButton);
export default ConnectedBasicButton;
