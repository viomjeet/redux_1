
const todosList = {
    counter: 0,
    loading: false,
    data: [
        { id: 1, title: "Delectus aut autem", completed: false },
        { id: 2, title: "Wuis ut nam facilis et officia qui", completed: false },
        { id: 3, title: "Fugiat veniam minus", completed: false },
        { id: 4, title: "Et porro tempora", completed: true },
        { id: 5, title: "Luasi adipisci quia provident illum", completed: false },
        { id: 6, title: "Qui ullam ratione quibusdam voluptatem quia omnis", completed: false },
        { id: 7, title: "Epedita consequatur quia in", completed: false },
        { id: 8, title: "Adipisci enim quam ut ab", completed: true },
        { id: 9, title: "Molestiae perspiciatis ipsa", completed: false },
        { id: 10, title: "Est ratione doloremque quia maiores aut", completed: true }
    ],
    error: ''
}
export default function todos(state = todosList, action) {
    switch (action.type) {
        case "CHANGE_COMPLETED":
            return {
                ...state,
                completed: state.data.map(item => item.id === parseInt(action.id) && (item.completed = action.checked))
            }
        case "INCREMENT":
            return {
                ...state,
                counter: state.counter >=100 ? 100 : state.counter + action.data
            }
        case "DECREMENT":
            return {
                ...state,
                counter: state.counter <=1 ? 0 : state.counter - action.data
            }
        default:
            return {
                ...state,
            }
    }
}



