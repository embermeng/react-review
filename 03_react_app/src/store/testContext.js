import React from 'react'
/* 
    Context相当于公共的存储空间，可以将多个组件都需要访问的数据统一存储到一个Context中
    通过React.createContext()创建Context
*/

const TestContext = React.createContext({
    name: '孙悟空',
    age: 20
})

export default TestContext