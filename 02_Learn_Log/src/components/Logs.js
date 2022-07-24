import LogItem from "./LogItem"
import Card from "../UI/Card/Card"

/* 日志的容器 */
const Logs = (props) => {
    // 将数据放入jsx中
    const logItems = props.data.map((item, index) => {
        return <LogItem data={item} key={index} />
    })
    return <Card className="logs">
        {logItems}
    </Card>
}

export default Logs