import React from 'react'
import TestContext from '../store/testContext'

/* 
    Context使用方式：
        一.
            1. 引入Context
            2. 使用Context.Consumer组件来创建元素，它需要一个回调函数。这个组件会将context设置为回调函数的参数，通过参数就可以访问到context中存储的数据
*/

export default function Test() {

    return (
        <TestContext.Consumer>
            {
                (context) => {
                    return <div>
                        {context.name} - {context.age}
                    </div>
                }
            }
        </TestContext.Consumer>
    )
}
