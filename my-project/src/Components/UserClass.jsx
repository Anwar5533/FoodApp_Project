import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0,
            count2 :1
        }
        console.log("Constructor Part")
        
    }

    componentDidMount(){
        console.log("Component mounted page")
    }
    render () {
        const {name} = this.state
        const {count,count2} = this.state;
        console.log("render Part")
        return(
            
            <div className=" p-4 border-2 border-gray-300 ">
            
            <h1>User Name: {name}</h1>
            <h1>Count : {count}</h1>
            <h1>Count2 : {count2}</h1>
            <button onClick={()=>{
                this.setState(
                    {count : this.state.count +1,
                    count2 : this.state.count2 +1
                    }
                    
                )
            }}>Count Increase</button>
            <p>Emp ID: 2195120</p>
            <p>Phone Number: 9618694485</p>
            
            </div>
        )
    }
    
}
export default UserClass;