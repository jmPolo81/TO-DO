import { useEffect, useState } from "react"
import MoonIcon from "./icons/MoonIcon"
import SunIcon from "./icons/SunIcon"

const initialStateDarkMode = localStorage.getItem('theme') === 'dark' ? true : false

const Header = () => {

    const [darkMode, setDarkMode] = useState(initialStateDarkMode)

    useEffect(() => {

        if (darkMode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem('theme', 'light')
        }

    }, [darkMode])

    return (
        <header className="md:max-w-xl container mx-auto px-4 pt-8">

            <div className="flex justify-between">
                <h1 className="text-3xl tracking-[0.4em] font-semibold uppercase text-white">Todo</h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <SunIcon /> : <MoonIcon />}
                </button>
            </div>

        </header>
    )
}

export default Header