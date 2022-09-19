//comentario   

/*alt+shift+a*/

 const getNameFetch = (idPost=>{

fetch (`http://jsonplaceholder.typicode.com/posts/${idPost}`)  // llamamos a la api con la informacion de posts
//el idPost es igual al numero que paso como parametro
.then (res=>{
    return res.json()   //convertimos todos los post en json
})
.then (post=>{   
   console.log(post.userId)  // verificamos el UserID de la persona que escribio el post que pasamos como parametro

   fetch (`http://jsonplaceholder.typicode.com/users/${post.userId}`)   // llamamos a la api con la informacion de users
  //de users traigo la persona con el numero de userID del post que llame por parametro
   .then (res=>{
    return res.json() //convertimos todos los users en json
})
.then (user=>{
   console.log(user)   //mostramos la informacion de la persona que escribio el post
})

})

})
getNameFetch (15) // parametro de la funcion