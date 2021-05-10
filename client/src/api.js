export const getTodos = () => fetch("http://localhost:4000/").then(res => res.json())
export const apiBaseUrl = "http://localhost:4000"