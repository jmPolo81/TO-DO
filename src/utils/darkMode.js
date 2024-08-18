// Todo esto sirve para detectar el modo que tiene el usuario en su equipo para arrancar de ese modo

if (localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
} else {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
}
