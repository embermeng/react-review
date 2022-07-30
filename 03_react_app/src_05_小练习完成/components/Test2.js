import React from 'react'
import { useContext } from 'react';
import TestContext from '../store/testContext'

/* 
    Context使用方式：
        二.
            1. 引入Context
            2. 使用钩子函数useContext()获取context，需要一个Context作为参数
*/

export default function Test2() {
    // 使用hook获取context
    const context = useContext(TestContext);
    return (
        <div>
            {context.name} -- {context.age}
        </div>
    )
}
