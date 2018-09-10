import {
  connect
} from 'react-redux'
import {
  addGoal
} from '../actions'
import Home from '../pages/home/home'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddClick: data => {
      dispatch(addGoal(data))
    }
  }
}

const ContainerBragList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default ContainerBragList