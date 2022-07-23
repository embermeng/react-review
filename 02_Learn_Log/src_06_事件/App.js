const App = () => {
    const click = (event) => {
        alert('我是click')
        // 在react中，无法通过return false取消默认行为
        // return false

        /* 
            事件对象
                - React事件中同样会传递事件对象，定义参数接送事件对象
                - React中的事件对象不是原生的事件对象，是经过React包装后的事件对象
        */
        event.preventDefault(); // 取消默认行为
        event.stopPropagation(); // 取消事件冒泡
        
    }
    return <div onClick={() => {alert('div')}}>
        {/* 在react中事件需要通过元素的属性来设置，设置一个回调函数 */}
        <button onClick={() => { alert('1223') }}>点我一下</button>
        <button onClick={click}>哈哈</button>
        <br />
        <a href="https://www.baidu.com" onClick={click}>超链接</a>
    </div >
}

// 导出App
export default App