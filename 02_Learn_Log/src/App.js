import { useState } from 'react'
import Logs from './components/Logs'
import LogsForm from './components/LogsForm'

const App = () => {
    const [data, setData] = useState([
        { month: '四', day: '20', title: '学习React', time: '40分钟', id: 1 },
        { month: '五', day: '21', title: '学习Vue', time: '30分钟', id: 2 },
        { month: '六', day: '22', title: '学习Typescript', time: '20分钟', id: 3 },
        { month: '七', day: '23', title: '学习Java', time: '10分钟', id: 4 },
        { month: '八', day: '24', title: '学习React Native', time: '5分钟', id: 5 },
    ])
    /* 将LogsForm中的数据传递给App组件，App将数据添加到数组中 */
    const saveLog = (newLog) => {
        // 向新的日志中添加id
        newLog.id = Date.now() + ''
        setData([...data, newLog])
    }
    return <div className='app'>
        <LogsForm saveLog={saveLog} />
        <Logs data={data} />
    </div>
}

// 导出App
export default App