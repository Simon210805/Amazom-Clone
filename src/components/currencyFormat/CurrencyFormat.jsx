import React from "react";
import numeral from "numeral";
import classes from "./CurrencyFormater.module.css"

const CurrencyFormat = ({ amount }) => {
    const formattedAmount = numeral(amount).format("$0,0.00");
    return (
        <span className={classes.currencyFormat}>{formattedAmount}</span>
    )
}

export default CurrencyFormat