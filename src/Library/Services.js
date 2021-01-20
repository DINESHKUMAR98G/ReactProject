const fetchUsers=(callback)=>{
    let usersObj=[];

    fetch("http://localhost:15000/SpringMVCHibernateCRUD/employee/fetchData").then(
        res=>{
            console.log(res.json()
              .then(endRes=>{callback(endRes); return endRes}))
            
        })
        .catch(err=>console.log(err))
        
        }
    const insertUser=(users,callback)=>{
        // fetch("http://localhost:3000/users",{
        //     method:'POST',
        //     body:JSON.stringify(users),
        //     headers:{
        //         'content-type':'application/json'
        //     }
        // }
        // ).then(result=>result.json().then(data=>console.log(data))).catch(err=>console.log(err))
            
        const id = users.id;
        const apiUrl = `http://localhost:3000/users/${id}`;
        fetch(apiUrl).then(data => {if (data.status >  400){
        alert("invalid user")};return data.json()}).then(data=> callback(users,data)).catch(err => console.log(err));
    }

    

    const deleteUser=(id)=>{
        const apiUrl = `http://localhost:3000/posts/${id}`;
        try{
            fetch (apiUrl, {
                method : "DELETE"
            }).then(data => {
                return data.json();
            }).then(data => console.log("data Successfully deleted"));
        }catch(err){
            console.log(err);
        }
    }   
    
    
    const getUsers=(callback)=> {
        const apiUrl = 'http://localhost:3000/users/';
        fetch(apiUrl).then((response) => response.json())
            .then((data) => callback(data));
    }

    // export const getBooks  = (callback) => {
    //     const apiURL = `http://localhost:3500/bookname`;
    //     fetch(apiURL).then(res => res.json()).then(data => callback(data)).catch(err =>console.log(err));
    
    // }



    const insertUsers=(users)=>{
        fetch("http://localhost:3000/users",{
            method:'POST',
            body:JSON.stringify(users),
            headers:{
                'content-type':'application/json'
            }
        }
        ).then(result=>result.json().then(data=>console.log(data))).catch(err=>console.log(err))
            
        
    }
    export {fetchUsers,insertUser,deleteUser,getUsers,insertUsers}

