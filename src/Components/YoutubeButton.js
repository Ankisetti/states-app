import {Component} from "react";
import "./externalstyles/stylins.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { Card } from "react-bootstrap"; 
import "../Components/Cards";





class YoutubeButton extends Component{
state={
    count:0,
    employeedata:[
        {
            name:"sruthi",
            role:"Developer",
            salary:30000,
            id:"2567",
            Experience:"3years",
            
          
         },
        {
          name:"supraja",
            role:"Developer",
            salary:20000,
            id:"6714",
            Experience:"2years"  
        },
        {
            name:"srilekha",
            role:"Developer",
            salary:60000,
            id:"1050",
            Experience:"5years"
        },
        {
            name:"gilsey",
            role:"Developer",
            salary:40000,
            id:"5076",
            Experience:"4years"
        },
        {
            name:"sudheer",
            role:"Developer",
            salary:70000,
            id:"5170",
            Experience:"7years"
        },
        {
            name:"sumanth",
            role:"Developer",
            salary:60000,
            id:"5130",
            Experience:"5years"
        },
    ]
};
    mouseclick=()=>{
        alert("99 rupees per one month")
        
    }


    incrementclick=()=>{
        this.setState(
            {
              count:this.state.count+20 
            }
        )
    }
    decrementclick=()=>{
        this.setState(
            {
              count:this.state.count-5
            }
        )
    }
    resetclick=()=>{
        this.setState(
            {
              count:0
            }
        )
    }


   render(){
    return(
        <div>
          
          <button style={{color:"red"}} onClick={this.mouseclick}>Buy Premium</button>
          <h3>{this.state.count}</h3>
          <button className="side" onClick={this.incrementclick}>INCREMENT</button>
          <button onClick={this.decrementclick}>DECREMENT</button>
          <button onClick={this.resetclick}>RESET</button> 
          <div className="card-container">
          {this.state.employeedata.map((employee) => (
            <Card key={employee.id} style={{ width: "78rem", margin: "10px",borderColor:"blueviolet"}}>
              <Card.Body>
                <Card.Text style={{color:"red"}}>
                    name:{employee.name}
                    <br></br>
                  Role: {employee.role}
                  <br />
                  Salary: {employee.salary}
                  <br></br>
                  id:{employee.id}
                  <br></br>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>




          {/* {
            this.state.employeedata.map((employee)=>{
                return(
                    <div>
                        <h3>{employee.name}</h3>
                    </div>
                )
            })
            

            }
            */}


           
        </div>
    );
   }

}
export default YoutubeButton;

