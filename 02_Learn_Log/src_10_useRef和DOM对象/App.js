import { useRef, useState } from 'react'
import './App.css'

let temp

export default function App() {
    /* 
        获取原生的DOM对象
            1. 使用传统的document操作DOM
            2. 直接从React处获取DOM对象
                步骤：
                    1. 创建一个存储DOM对象的容器 - 使用useRef()钩子函数
                    2. 将想要获取DOM对象元素的ref属性设置为这个容器

            useRef()
                - 返回的就是要给普通的JS对象{current: undefined}
                - 所以我们直接创建一个js对象，也可以代替useRef()
                - 区别：
                    我们创建的对象，组件每次重新渲染都会创建一个新对象
                    useRef()创建的对象，可以确保每次渲染获取到的都是同一个对象
    */
    const h1Ref = useRef() // 创建一个容器
    // const h1Ref = {current: null}
    const [count, setCount] = useState(1)

    console.log(temp === h1Ref);
    temp = h1Ref
    const click = () => {
        // 通过id获取h1
        // const header = document.getElementById('header')
        // header.innerHTML = '123'

        console.log(h1Ref.current);
    }
    const add = () => {
        setCount((pre) => pre + 1)
    }
    return <div id="app">
        <h1 id='header' ref={h1Ref}>标题{count}</h1>
        <button onClick={click}>1</button>
        <button onClick={add}>2</button>
    </div>
}
