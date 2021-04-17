export const getTodos = () => fetch("http://localhost:4000/").then(res => res.json())

export const view_ad = () => fetch("http://localhost:4000/view_ad/:id").then(res => res.json())

export const createTodo = (todo) => fetch("http://localhost:4000/create", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  



export const updateTodo = (todo, id) => fetch(`http://localhost:4000/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  

export const getAd = (id) => fetch(`http://localhost:4000/ad_detail/${id}`).then(res => res.json())