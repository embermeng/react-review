import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
// 获取action的构建器，用于传递给dispatch派发器
import {setName} from "./store";
// import './store/index'

export default function App() {
    // useSelector() 用来加载state中的数据
    const student = useSelector((state) => {
        console.log(state)
        return state.student123
    })

    // useDispatch()获取派发器对象
    const dispatch = useDispatch()


    const chgName = () => {
        dispatch(setName('哈哈哈哈'))
    }
    return (<div>
        <div>{JSON.stringify(student)}</div>
        <button onClick={chgName}>修改name</button>
    </div>)
}
