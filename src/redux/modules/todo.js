const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";
let id = 1;

export const addTodo = (item) => {
    return {
        type: ADD_TODO,
        id: id++,
        item,
    };
};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id,
    };
};

export const completeTodo = (id) => {
    return {
        type: COMPLETE_TODO,
        id,
    };
};

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            const { item, id } = action;
            if (item.trim() !== "") {
                return [
                    ...state,
                    {
                        text: item,
                        id,
                        done: false,
                    },
                ];
            } else return state;
        case DELETE_TODO:
            console.log("delete case:",state)
            return [...state.filter((todo) => todo.id !== action.id)];
        case COMPLETE_TODO:
            console.log("complete todo case", state)
            return [
                ...state.filter((todo) =>
                    todo.id === action.id ? (todo.done = true) : null
                ),
            ];
        default:
            return state;
    }
};

export default todoReducer;
