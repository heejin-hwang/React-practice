import React, {Component} from "react";
import FlipMove from "react-flip-move";

class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this)
    }

    delete(key) {
        // 여기서 삭제 작업을 하지 않음!!!!!!!!!!
        // 속성을 통해 this 컴포넌트에 전달된 또 다른 delete 함수를 호출한다.
        // 다시 TOdoList로 돌아가서 거기서 delete 라는 속성을 지정하고 거기서 deleteItem 이라는 함수로!
        this.props.delete(key);
    }

    createTasks (item) {
        return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return(
            <ul className="theList">
                <FlipMove duration={250} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ul>
        )
    }
}

export default TodoItems;