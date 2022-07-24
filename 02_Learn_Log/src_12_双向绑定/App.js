import Logs from './components/Logs'
import LogsForm from './components/LogsForm'

const App = () => {
    return <div className='app'>
        <LogsForm/>
        <Logs></Logs>
    </div>
}

// 导出App
export default App