import { useState } from "react"

const TodoCreate = ({ createTodo }) => {

    const [title, setTitle] = useState("")

    const handleSubmitAddTodo = e => {
        e.preventDefault()

        if (!title.trim()) {
            return setTitle("")
        }

        createTodo(title)
        setTitle("")

    }


    return (
        <form onSubmit={handleSubmitAddTodo} className=" flex gap-4 items-center bg-white rounded-md overflow-hidden py-4 px-4 dark:bg-gray-800">
            <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
            <input
                className="w-full text-gray-600 dark:text-gray-200 outline-none dark:bg-gray-800"
                type="text"
                placeholder="Create a new ToDo"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
        </form>
    )
}

export default TodoCreate