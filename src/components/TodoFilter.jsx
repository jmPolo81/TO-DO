const TodoFilter = ({ changeSetFilter, filter }) => {
    return (
        <section className="container mx-auto mt-8">

            <div className="bg-white p-4 rounded-md flex justify-center gap-4  dark:bg-gray-800">

                <button
                    className={`${filter === "all" ? "text-blue-600" : "text-gray-600 dark:text-gray-200 hover:text-blue-600"}`}
                    onClick={() => changeSetFilter("all")}
                >
                    All
                </button>

                <button
                    className={`${filter === "active" ? "text-blue-600" : "text-gray-600 dark:text-gray-200 hover:text-blue-600"}`}
                    onClick={() => changeSetFilter("active")}
                >
                    Active
                </button>

                <button
                    className={`${filter === "completed" ? "text-blue-600" : "text-gray-600 dark:text-gray-200 hover:text-blue-600"}`}
                    onClick={() => changeSetFilter("completed")}
                >
                    Completed
                </button>
            </div>

        </section>
    )
}

export default TodoFilter