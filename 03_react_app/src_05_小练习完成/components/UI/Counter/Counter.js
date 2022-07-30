import React from 'react'
import classes from './Counter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../../store/cartContext'
import { useContext } from 'react'

/* 
    引入FontAwesome
        1. 安装依赖:
            npm i --save @fortawesome/fontawesome-svg-core
            npm i --save @fortawesome/free-solid-svg-icons
            npm i --save @fortawesome/free-regular-svg-icons
            npm i --save @fortawesome/react-fontawesome@latest
        2. 引入组件
            import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
        3. 引入图标
            import { faPlus } from '@fortawesome/free-solid-svg-icons'
        4. 使用组件
            <FontAwesomeIcon icon={faPlus} />
*/

export default function Counter(props) {
    // 获取CartContext
    const context = useContext(CartContext)
    
    const add = () => {
        context.addItem(props.meal)
    }
    const del = () => {
        context.removeItem(props.meal)
    }
    return (
        <div className={classes.counter}>
            {
                (props.meal.amount && props.meal.amount !== 0) ?
                    (
                        <>
                            <button className={classes.sub} onClick={del}>
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <span className={classes.count}>{props.meal.amount}</span>
                        </>
                    ) : null
            }

            <button className={classes.add} onClick={add}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )
}
