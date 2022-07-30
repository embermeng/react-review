import React, { useContext, useState } from 'react'
import classes from './Cart.module.css'
import iconImg from '../../asset/bag.png'
import CartContext from '../../store/cartContext'
import CartDetails from './CartDetails/CartDetails'
import Checkout from './Checkout/Checkout'

export default function Cart() {
    const context = useContext(CartContext)

    // 控制详情是否显示
    const [showDetails, setShowDetails] = useState(false)
    // 控制结账页是否显示
    const [showCheckout, setShowCheckout] = useState(false)

    // 切换显示详情页
    const toggleDetailsHandler = () => {
        if (context.totalAmount === 0) return
        setShowDetails((pre) => !pre)
    }

    const showCheckoutHandler = () => {
        if (context.totalAmount === 0) return
        setShowCheckout(true)
    }

    const hideCheckout = () => {
        setShowCheckout(false)
    }
    return (
        <div className={classes.cart} onClick={toggleDetailsHandler}>
            {showCheckout && <Checkout onHide={setShowCheckout}/>}
            {/* 购物车详情 */}
            {(showDetails && context.totalAmount !== 0) ? <CartDetails /> : null}
            <div className={classes.icon}>
                <img src={iconImg} alt="" />
                {context.totalAmount === 0 ? null : <span className={classes.totalAmount}>{context.totalAmount}</span>}
            </div>
            {context.totalAmount === 0 ? <p className={classes.noMeals}>未选购商品</p> : <p className={classes.price}>{context.totalPrice}</p>}

            <button className={`${classes.button} ${context.totalAmount === 0 ? classes.disable : ''}`} onClick={showCheckoutHandler}>去结算</button>
        </div>
    )
}
