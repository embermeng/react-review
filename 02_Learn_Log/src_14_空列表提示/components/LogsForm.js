import React, { useState } from 'react'
import Card from '../UI/Card/Card'
import '../css/LogsForm.css'

export default function LogsForm(props) {
    /* 
        当表单项发生变化时，获取用户输入的内容
    */

    // 将表单数据统一到一个state
    const [formData, setFormData] = useState({
        inputMonth: '',
        inputDay: '',
        inputDesc: '',
        inputTime: ''
    })
    // 响应函数监听内容变化
    const descOnChange = (event) => {
        // event是事件对象，保存了当前事件触发时的所有信息
        console.log(event.target.value)
        // setinputDesc(event.target.value)
        setFormData({
            ...formData,
            inputDesc: event.target.value
        })
    }
    // 响应函数监听月变化
    const monthOnChange = (event) => {
        console.log(event.target.value)
        setFormData({
            ...formData,
            inputMonth: event.target.value
        })
    }
    // 响应函数监听日变化
    const dayOnChange = (event) => {
        console.log(event.target.value)
        setFormData({
            ...formData,
            inputDay: event.target.value
        })
    }
    // 响应函数监听时长变化
    const timeOnChange = (event) => {
        console.log(event.target.value)
        setFormData({
            ...formData,
            inputTime: event.target.value
        })
    }

    // 当表单提交时，汇总表单中的数据
    const formSubmit = (event) => {
        // 取消表单的默认行为
        event.preventDefault();
        const newLog = {
            month: formData.inputMonth,
            day: formData.inputDay,
            title: formData.inputDesc,
            time: formData.inputTime,
        }
        console.log(newLog);
        // 当要添加新的日志时，调用父组件传递的函数
        props.saveLog(newLog)
        /* 
            清空表单中的旧数据
        */
        setFormData({
            inputMonth: '',
            inputDay: '',
            inputDesc: '',
            inputTime: ''
        })
        
    }

    return (
        <Card className="logs-form">
            <form onSubmit={formSubmit}>
                <div className='form-item'>
                    <label htmlFor="month">月</label>
                    <input id='month' type="text" onChange={monthOnChange} value={formData.inputMonth} />
                </div>
                <div className='form-item'>
                    <label htmlFor="day">日</label>
                    <input id='day' type="text" onChange={dayOnChange} value={formData.inputDay} />
                </div>
                <div className='form-item'>
                    <label htmlFor="desc">内容</label>
                    <input id='desc' type="text" onChange={descOnChange} value={formData.inputDesc} />
                </div>
                <div className='form-item'>
                    <label htmlFor="time">时长</label>
                    <input id='time' type="number" onChange={timeOnChange} value={formData.inputTime} />
                </div>
                <div className='form-btn'>
                    <button>添加</button>
                </div>

            </form>
        </Card>
    )
}
