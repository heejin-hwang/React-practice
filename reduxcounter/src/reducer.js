console.log('-----------------------------------');
console.log('-- reducer.js 실행');

function counter(state, action) {
    console.log('--- reducer:counter 실행');
    if(state === undefined){
        console.log('state === undefined');
        return {
            count: 0
        }
    }

    var count = state.count;

    switch (action.type) {
        case "increase":
            console.log('---- reducer:counter:increase 실행');
            return { count: count + 1 };
        case "decrease":
            console.log('---- reducer:counter:decrease 실행');
            return { count: count -1 };
        default:
            return state;
    }
}
console.log('-----------------------------------');

export default counter;