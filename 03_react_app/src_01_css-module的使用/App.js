import React from 'react'
import classes from './App.module.css'
console.log(classes);

export default function App() {

    /* 
        css模块使用步骤：
            1. 创建一个xxx.module.css
            2. 在组件中引入css
                import classes from './App.module.css'
            3. 通过classes来设置类
                className={classes.p1}
        css模块可以动态的设置唯一的class值

    */

    return (
        <div>
            <p className={classes.p1}>啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
            <p className={classes.p2}>啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</p>
        </div>
    )
}
