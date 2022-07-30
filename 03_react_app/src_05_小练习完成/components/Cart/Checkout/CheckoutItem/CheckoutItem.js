import React from 'react'
import classes from './CheckoutItem.module.css'
import Counter from '../../../UI/Counter/Counter'

export default function CheckoutItem(props) {
    return (
        <div className={classes.checkoutItem}>
            <div className={classes.mealImg}>
                <img src={props.meal.img} alt="" />
            </div>
            <div className={classes.desc}>
                <h2>{props.meal.title}</h2>
                <div className={classes.priceWrapper}>
                    <Counter meal={props.meal}/>
                    <div className={classes.price}>{props.meal.price * props.meal.amount}</div>
                </div>
            </div>
        </div>
    )
}
