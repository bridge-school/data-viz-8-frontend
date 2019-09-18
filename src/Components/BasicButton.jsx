import React, { Component } from "react";
import { connect } from 'react-redux'
import classnames from 'classnames';

import {updateDetailsPage} from '../Utils/actions'

import styles from '../Styles/basicButton.module.scss'

class BasicButton extends Component {
    render() {
        const { dataKey, text, updateDetailsPage, currentChart } = this.props;

        return (
            <button 
            key={dataKey}
            className={
                (dataKey === currentChart) ? (classnames(styles.button, styles.active)) : (styles.button)
            }
                onClick={() => updateDetailsPage(dataKey)} // update store
            >
                {text}
            </button >
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = {
    updateDetailsPage
};

const ConnectedBasicButton = connect(mapStateToProps, mapDispatchToProps)(BasicButton);
export default ConnectedBasicButton;
