import React, { useContext, useState } from 'react'
import BackDrop from '../../UI/BackDrop/BackDrop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import classes from './CartDetails.module.css'
import CartContext from '../../../store/cartContext'
import Meal from '../../Meals/Meal/Meal'
import Confirm from '../../UI/Confirm/Confirm'

export default function CartDetails() {
    const context = useContext(CartContext)
    // 控制确认框的显示
    const [showConfirm, setShowConfirm] = useState(false)

    // 控制确认框的函数
    const showConfirmHandler = () => {
        setShowConfirm(true)
    }

    const cancel = () => {
        setShowConfirm(false)
    }
    const ok = () => {
        setShowConfirm(false)
        // 清空购物车
        context.clearItem()
    }
    return (
        <BackDrop>
            <div
                className={classes.cartDetails}
                onClick={(e) => { e.stopPropagation() }}
            >
                <header className={classes.header}>
                    <h2 className={classes.title}>餐品详情</h2>
                    <div className={classes.clear} onClick={showConfirmHandler}>
                        <FontAwesomeIcon icon={faTrash} />
                        <span>清空购物车</span>
                    </div>
                </header>
                <div className={classes.mealList}>
                    {
                        context.items.map((item) =>
                            <Meal noDesc key={item.id} meal={item} />
                        )
                    }
                </div>
                {showConfirm && <Confirm
                    confirmText="确认清空购物车吗？"
                    onOk={ok}
                    onCancel={cancel}
                />}
            </div>
        </BackDrop>
    )
}
