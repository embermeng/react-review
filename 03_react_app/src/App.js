import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
// 获取action的构建器，用于传递给dispatch派发器
import {setName, setAge} from "./store/stuSlice";
import {setName as setSchName, setAddress} from "./store/schoolSlice";

// import './store/index'

export default function App() {
    // useSelector() 用来加载state中的数据
    const student = useSelector((state) => {
        console.log(state)
        return state.student123
    })
    const school = useSelector((state) => state.school)
    // useDispatch()获取派发器对象
    const dispatch = useDispatch()


    const chgName = () => {
        dispatch(setName('哈哈哈哈'))
    }

    const chgSchName = () => {
        dispatch(setSchName('高老庄大学'))
    }

    return (<div>
        <div>{JSON.stringify(student)}</div>
        <button onClick={chgName}>修改name</button>
        <hr/>
        <p>{JSON.stringify(school)}</p>
        <button onClick={chgSchName}>修改学校名字</button>
    </div>)
}
