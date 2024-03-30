import {Component} from 'react'
import TabItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodo extends Component {
  state = {
    lists: initialTodosList,
  }

  deleteTodo = id => {
    const {lists} = this.state
    const updatedTodoList = lists.filter(todo => todo.id !== id)
    this.setState({lists: updatedTodoList})
  }

  render() {
    const {lists} = this.state
    return (
      <div className="a">
        <div className="b">
          <h1 className="c">Simple Todos</h1>
          <ul>
            {lists.map(each => (
              <TabItem
                key={each.id}
                lists={each}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodo
