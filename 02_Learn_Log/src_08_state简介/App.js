import { useState } from 'react'
import './App.css'
export default function () {
    /* 
        变量改变后需要对组件进行重新渲染
        这里需要一个特殊的变量，当这个变量被修改时，组件会重新渲染
    */
    const [count, setCount] = useState(1)
    const add = () => {
        setCount(count + 1)
    }
    const minus = () => {
        setCount(count - 1)
    }

    return <div id="app">
        <h1>{count}</h1>
        <button onClick={minus}>-</button>
        <button onClick={add}>+</button>
    </div>
}
