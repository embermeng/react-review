import LogItem from "./LogItem"

/* 日志的容器 */
const Logs = () => {
    const data = [
        { month: '四', day: '20', title: '学习React', time: '40分钟' },
        { month: '五', day: '21', title: '学习Vue', time: '30分钟' },
        { month: '六', day: '22', title: '学习Typescript', time: '20分钟' },
        { month: '七', day: '23', title: '学习Java', time: '10分钟' },
        { month: '八', day: '24', title: '学习React Native', time: '5分钟' },
    ]

    // 将数据放入jsx中
    const logItems = data.map((item, index) => {
        return <LogItem data={item} key={index} />
    })
    return <div className="logs">
        {logItems}
    </div>
}

export default Logs