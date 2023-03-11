const URL = "https://assets.breatheco.de/apis/fake/todos/user/pozo"
const HEADERS = {
    "Content-Type": "application/json"
}

// export const getTask = () => {
//     //pasamos el objeto para especificar el método
//     const data = fetch(URL, {method:"GET"})
//     .then ((res) => {
//         console.log("RES",res);

//         //añadimos esto para que nos devuelva la data
//         return res.json();
//     })
//     .then ((body) =>{
//         console.log("BODY",data);
//         return body;
//     }).catch((err) => console.log(err))
//     console.log("FINAL DATA",data)
//     return data;
// }


//método similar al de arriba

export const getTask = async () => {
    try {
        const res = await fetch (URL, {method:"GET"});
        const data = await res.json();
        return data;
    }catch(err){
        console.log("error",err)
    }
}

export const editListTask = async (todoList) => {
    try {
        console.log(todoList)
        const res = await fetch (URL, {method: "PUT",
        body:JSON.stringify(todoList), 
        headers: HEADERS})
        console.log(res)

    }catch (err){
        console.log("error",err)
    }

}