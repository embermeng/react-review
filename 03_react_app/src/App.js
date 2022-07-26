import React from 'react'
import classes from './App.module.css'
console.log(classes);

export default function App() {
    /* 
        React.Fragment是一个专门用来作为父容器的组件
            它只会将它里面的子元素返回，不会创建任何多余的元素
        <></>和React.Fragment的效果一样
    */
    return (
        <React.Fragment>
            <div>第一个组件</div>
            <div>第二个组件</div>
            <div>第三个组件</div>
        </React.Fragment>
    )
}
