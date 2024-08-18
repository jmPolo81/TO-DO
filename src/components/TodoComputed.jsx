const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
    return (
        <section className="py-4 px-4 flex justify-between bg-white rounded-b-md dark:bg-gray-800">
            <span className="text-gray-600 dark:text-gray-200">{computedItemsLeft} items left</span>
            <button className=" text-gray-600 dark:text-gray-200" onClick={clearCompleted}>Clear Complete</button>
        </section>
    )
}

export default TodoComputed