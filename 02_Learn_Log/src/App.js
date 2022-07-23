import { useState } from 'react'
import './App.css'
export default function App() {
    console.log('组件渲染了！');
    /* 
        state实际就是一个被React管理的变量

        当我们通过setState修改变量时，state值发生变化后，会触发组件的才会自动重新渲染

        当state的值是一个对象时，修改时是使用新的对象去替换已有对象

        当通过setState去修改一个state时，并不表示修改当前的state，它修改的是组件下一次渲染时的state值

        setState()会触发组件的重新渲染，它是异步的
            所以当调用setState需要用到旧state的值时，一定要注意有可能出现计算错误的情况
            为了避免这种情况，可以通过为setState传递回调函数的形式来修改state
    */
    const [count, setCount] = useState(1)
    const [user, setUser] = useState({ name: '孙悟空', age: 20 })
    const add = () => {
        setTimeout(() => {
            setCount((prev) => { // 回调函数执行时，React会将最新的state值作为参数传递
                return prev + 1
            })
        }, 1000);
    }

    const updateUser = () => {
        // setUser({name: '猪八戒', age: 25})
        // setUser({ ...user, name: '猪八戒' })
        setUser((user) => {
            return { ...user, name: '猪八戒' }
        })
    }

    return <div id="app">
        <h1>{count} -- {user.name} -- {user.age}</h1>
        <button onClick={add}>+1</button>
        <button onClick={updateUser}>2</button>
    </div>
}
