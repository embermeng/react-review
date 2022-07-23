import React from 'react'
import MyDate from './MyDate'

export default function LogItem(props) {
    // 可以在函数组件的形参中定义一个props，props指向一个对象，包含父组件中传递的所有参数
    return (
        <div className='item'>
            {/* 日期容器 */}
            <MyDate data={props.data}/>
            {/* 日志内容的容器 */}
            <div className="content">
                <h2 className="desc">{props.data.title}</h2>
                <div className="time">{props.data.time}</div>
            </div>
        </div>
    )
}
