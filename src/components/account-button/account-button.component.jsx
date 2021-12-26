import React from "react";
import './account-button.styles.scss'

import { connect } from 'react-redux'

import { toggleAccountHidden } from "../../redux/account/account.action"; 

const AccountButton = ({toggleAccountHidden}) => (
    <div className="account-button" onClick={toggleAccountHidden}>
        Account
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleAccountHidden: () => dispatch(toggleAccountHidden())
})


export default connect(
    null,
    mapDispatchToProps
)(AccountButton)