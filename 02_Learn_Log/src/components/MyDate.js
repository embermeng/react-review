import React from 'react'

export default function MyDate(props) {
    return (
        <div>
            {/* 日期容器 */}
            <div className='date'>
                <div className='month'>{props.data.month}月</div>
                <div className="day">{props.data.day}</div>
            </div>
        </div>
    )
}
