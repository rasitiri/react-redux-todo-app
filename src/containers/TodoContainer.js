import { connect } from "react-redux";
import { addTodo, deleteTodo, completeTodo } from "../redux/modules/todo";
import Todo from "../components/Todo";

const mapStateToProps = (state) => ({
    state,
});

const mapDispatchToProps = (dispatch) => ({
    addTodo: (item) => dispatch(addTodo(item)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    completeTodo: (id) => dispatch(completeTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
