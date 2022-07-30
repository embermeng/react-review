import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import classes from './Checkout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import CheckoutItem from './CheckoutItem/CheckoutItem'
import CartContext from '../../../store/cartContext'

const checkoutRoot = document.getElementById('checkout')
export default function Checkout(props) {
    const context = useContext(CartContext)
    return ReactDOM.createPortal(
        <div className={classes.checkout}>
            <div className={classes.close}>
                <FontAwesomeIcon icon={faXmark} onClick={() => props.onHide()} />
            </div>
            <div className={classes.mealsInfo}>
                <header className={classes.header}>
                    <h2>餐品详情</h2>
                </header>
                <div className={classes.meals}>
                    {context.items.map((item) => <CheckoutItem key={item.id} meal={item}/>)}
                </div>
                <footer className={classes.footer}>
                    <p className={classes.price}>{context.totalPrice}</p>
                </footer>
            </div>
        </div>,
        checkoutRoot
    )
}
