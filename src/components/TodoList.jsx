import { Droppable, Draggable } from '@hello-pangea/dnd'

import TodoItem from "./TodoItem"

const TodoList = ({ todos, removeTodo, updateTodo }) => {
    return (

        <Droppable droppableId='todos'>
            {
                (droppableProvided) => (
                    <div
                        ref={droppableProvided.innerRef}
                        {...droppableProvided.droppableProps}
                        className="mt-6 bg-white overflow-hidden dark:bg-gray-900 rounded-t-md [&>article]:p-4">
                        {
                            todos.map((todo, index) => {
                                return (
                                    <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
                                        {
                                            (dragablebleProvided) => (
                                                <TodoItem
                                                    todo={todo}
                                                    removeTodo={removeTodo}
                                                    updateTodo={updateTodo}
                                                    ref={dragablebleProvided.innerRef}
                                                    {...dragablebleProvided.dragHandleProps}
                                                    {...dragablebleProvided.draggableProps}

                                                />

                                            )
                                        }

                                    </Draggable>
                                )
                            })
                        }
                        {droppableProvided.placeholder}

                    </div>
                )
            }
        </Droppable>

    )
}

export default TodoList