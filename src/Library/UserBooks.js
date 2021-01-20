import React, { Component } from 'react'
import { Table,Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class UserBooks extends Component {
    constructor(props) {
        super(props)
 
        this.state = {
            bookDetails: []
        }
    }
    handleClick(p,user){
        let issue=p.issued_to.filter((book)=>{return book!==user.username})
        let temp={
            ...p,
            available_copies:p.available_copies+1,
            issued_to:[...issue]
        }
        fetch("http://localhost:3000/books/"+p.id,{
            method:'PUT',
            body:JSON.stringify(temp),
            headers:{
                'content-type':'application/json'
            }
        }
        ).then(result=>result.json().then(data=>console.log(data))).catch(err=>console.log(err))
        this.props.history.push("/userpage");
    }
    componentDidMount() {
        fetch("http://localhost:3000/books").then(
            res => {
                res.json()
                    .then(endRes => this.setState({ bookDetails: endRes, searchedBooks: endRes })).catch(err => console.log(err))
            })
            .catch(err => console.log(err))
 
    }
    componentDidUpdate() {
        fetch("http://localhost:3000/books").then(
            res => {
                res.json()
                    .then(endRes => this.setState({ bookDetails: endRes, searchedBooks: endRes })).catch(err => console.log(err))
            })
            .catch(err => console.log(err))
 
    }
 
    render() {
        let user = JSON.parse(localStorage.getItem("authenticted_user"));
        let result = []
        const{bookDetails}=this.state
        console.log(user.name);
        console.log(bookDetails)
        for (let i = 0; i < bookDetails.length; i++) {
            console.log(bookDetails[i]);
            if(bookDetails[i].issued_to.includes(user.name)){
            result.push(
                <tr>
                    <td>{bookDetails[i].id}</td>
                    <td>{bookDetails[i].title}</td>
                    <td>{bookDetails[i].author}</td>
                    <td>{bookDetails[i].subject}</td>
                    <td><button className="btn btn-warning" onClick={()=>this.handleClick(bookDetails[i],user)}>Return</button></td>
                </tr>
 
            )
            }
 
        }      
        return (
            <div>
                
                
                <div className="tablediv">
                    <Table className="table" striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Genre</th>
                                <th>Status</th>
                                </tr>
                        </thead>
 
                        <tbody>
                           {result}
                        </tbody>
 
                    </Table>


                    <Link to='/userpage' className="btn btn-primary">Books List</Link>
                </div>
            </div>
  )
}
}

export default UserBooks