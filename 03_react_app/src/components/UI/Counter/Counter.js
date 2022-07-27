import React from 'react'
import classes from './Counter.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

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
    return (
        <div className={classes.counter}>
            {
                (props.amount && props.amount !== 0) ?
                    (
                        <>
                            <button className={classes.sub}>
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <span className={classes.count}>{props.amount}</span>
                        </>
                    ) : null
            }

            <button className={classes.add}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )
}
