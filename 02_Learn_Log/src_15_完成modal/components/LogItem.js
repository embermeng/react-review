import React, { useState } from 'react'
import Card from '../UI/Card/Card'
import MyDate from './MyDate'
import Modal from '../UI/Modal/Modal'

export default function LogItem(props) {
    // 可以在函数组件的形参中定义一个props，props指向一个对象，包含父组件中传递的所有参数

    // 记录是否显示确认窗口
    const [show, setShow] = useState(false)

    const deleteItem = () => {
        // 显示确认窗口
        setShow(true)
    }
    const cancelHandler = () => {
        setShow(false)
    }
    const okHandler = () => {
        // 删除当前item，删除数据
        props.onDelLog()
        setShow(false)
    }

    /* 
        portal
            通过portal可以将组件渲染到页面中的指定位置，避免渲染问题
            使用方法：
                1. 在index.html添加一个新的元素
                2. 修改组件的渲染方式
                    - 通过ReactDOM.createPortal()作为返回值创建元素
                    - 参数：
                        1. 源jsx元素
                        2. 目标位置(DOM元素)
    */
    return (
        <Card className='item'>
            {show && <Modal text="确认删除吗？？？" onCancel={cancelHandler} onOk={okHandler}></Modal>}
            {/* 日期容器 */}
            <MyDate data={props.data}/>
            {/* 日志内容的容器 */}
            <div className="content">
                <h2 className="desc">{props.data.title}</h2>
                <div className="time">{props.data.time}</div>
            </div>
            {/* 删除按钮 */}
            <div>
                <div className='delete' onClick={deleteItem}>x</div>
            </div>
        </Card>
    )
}
