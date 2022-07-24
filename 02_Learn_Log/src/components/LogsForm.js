import React, { useState } from 'react'
import Card from '../UI/Card/Card'
import '../css/LogsForm.css'

export default function LogsForm() {
    /* 
        当表单项发生变化时，获取用户输入的内容
    */
    // let inputMonth = ''
    // let inputDay = ''
    // let inputDesc = ''
    // let inputTime = ''

    const [inputMonth, setInputMonth] = useState('')
    const [inputDay, setinputDay] = useState('')
    const [inputDesc, setinputDesc] = useState('')
    const [inputTime, setinputTime] = useState('')
    // 响应函数监听内容变化
    const descOnChange = (event) => {
        // event是事件对象，保存了当前事件触发时的所有信息
        console.log(event.target.value)
        setinputDesc(event.target.value)
    }
    // 响应函数监听月变化
    const monthOnChange = (event) => {
        console.log(event.target.value)
        setInputMonth(event.target.value)
    }
    // 响应函数监听日变化
    const dayOnChange = (event) => {
        console.log(event.target.value)
        setinputDay(event.target.value)
    }
    // 响应函数监听时长变化
    const timeOnChange = (event) => {
        console.log(event.target.value)
        setinputTime(event.target.value)
    }

    // 当表单提交时，汇总表单中的数据
    const formSubmit = (event) => {
        // 取消表单的默认行为
        event.preventDefault();
        const newLog = {
            month: inputMonth,
            day: inputDay,
            title: inputDesc,
            time: inputTime,
            id: 1
        }
        console.log(newLog);
        /* 
            清空表单中的旧数据
        */
        setInputMonth('')
        setinputDay('')
        setinputDesc('')
        setinputTime('')
    }

    return (
        <Card className="logs-form">
            <form onSubmit={formSubmit}>
                <div className='form-item'>
                    <label htmlFor="month">月</label>
                    <input id='month' type="text" onChange={monthOnChange} value={inputMonth} />
                </div>
                <div className='form-item'>
                    <label htmlFor="day">日</label>
                    <input id='day' type="text" onChange={dayOnChange} value={inputDay} />
                </div>
                <div className='form-item'>
                    <label htmlFor="desc">内容</label>
                    <input id='desc' type="text" onChange={descOnChange} value={inputDesc} />
                </div>
                <div className='form-item'>
                    <label htmlFor="time">时长</label>
                    <input id='time' type="number" onChange={timeOnChange} value={inputTime} />
                </div>
                <div className='form-btn'>
                    <button>添加</button>
                </div>

            </form>
        </Card>
    )
}
