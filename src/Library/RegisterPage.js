import React from 'react'
import { insertUsers} from './Services'
 

 
import { Nav } from 'react-bootstrap'
 
class RegisterPage extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      id:"" ,
      name: '',
      jobrole: ''
 
    };
  }
  handleChange = (event) => {
    //console.log(event)
    this.setState({
      [event.target.name]: event.target.value
    })
 
  }
  handleSubmit = (e) => {
    
    const userObj = {
      "id": this.state.id,
      "name": this.state.name,
      "jobrole": this.state.jobrole
    }
    this.setState({
      id : "",
      name: '',
      jobrole : ''
    })
    const insertResult = insertUsers(userObj);
    alert("successfully registered..please login!!");
    
  }
  submitRegister(e) { }
 
  render() {
    return (
    //     <div>
          
    //       <div className="inner-container">
   
    //         <div className="box">
    //           <div className="header">
    //             Register
    //         </div>
    //           <form onSubmit={this.handleSubmit}>
   
    //             <div className="input-group">
    //               <label htmlFor="id">ID</label>
    //               <input type="text" name="email" value={this.state.id} onChange={this.handleChange} className="login-input" placeholder="Email" />
    //             </div>
    //             <div className="input-group">
    //               <label htmlFor="username">Username</label>
    //               <input
    //                 type="text"
    //                 name="username" value={this.state.name} onChange={this.handleChange}
    //                 className="login-input"
    //                 placeholder="Username" />
    //             </div>
    //             <div className="input-group">
    //             <label htmlFor="password">Password</label>
    //             <input
    //               type="password"
    //               name="password" value={this.state.jobrole} onChange={this.handleChange}
    //               className="login-input"
    //               placeholder="Password" />
    //           </div>
    //           <button
    //             type="button"
    //             className="login-btn"
    //             onClick={this.handleSubmit}>Register</button><br /><br />
    //           <p ><b><a href="/login" className="message">Already a user? Login</a></b></p>
    //         </form>
    //       </div>
 
    //     </div>
    //   </div>


    <form  onSubmit={this.handleSubmit}>
    <div>
        <label>Identity No:</label>
        <input type='text' name="id" value={this.state.id} onChange={this.handleChange}placeholder="Enter unique ID" required/>
    </div>
    <div>
        <label>User Name:</label>
        <input type='text' name="name" value={this.state.name} onChange={this.handleChange}placeholder="Enter Username" required/>
    </div>
    <div>
        <label>Password     :</label>&nbsp;&nbsp;
        <input type='password' name="jobrole" value={this.state.jobrole} onChange={this.handleChange} placeholder="Enter valid Password" required/>
    </div>
    <div>
      
        <button type='submit' class="btn btn-primary" onChange={this.handleSubmit}   >Register</button>&nbsp;&nbsp;&nbsp;
        
        
       
    </div>
</form>



    );
  }
}
 
export default RegisterPage  



