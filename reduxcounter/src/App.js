import { connect } from "react-redux";
import Counter from "./Counter";

console.log('-- App.js 실행');
// 리덕스 상태를 컴포넌트 속성에 매핑
function mapStateToProps(state) {
    console.log('--- App:mapStateToProps 실행');
    return {
        countValue: state.count
    };
}

// 액션
var increaseAction = { type: "increase" };
var decreaseAction = { type: "decrease" };

// 리덕스 액션을 컴포넌트 속성에 매핑
function mapDispatchToProps(dispatch) {
    console.log('--- App:mapDispatchToProps 실행');
    return {
        increaseCount: function () {
            console.log('----Counter.js 에서 + 눌렀더니  App:mapDispatchToProps:increaseCount 실행');
            return dispatch(increaseAction);
        },
        decreaseCount: function () {
            console.log('----Counter.js 에서 - 눌렀더니 App:mapDispatchToProps:decreaseCount 실행');
            return dispatch(decreaseAction);
        }
    };
}

// HOC
var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
console.log('-----------------------------------');

export default connectedComponent;