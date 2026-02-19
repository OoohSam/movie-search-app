import {useState} from "react"
import { useAuth } from "../Context/Authentication"

export default function Login(){
console.log("login")
const {username,setUserName} = useState()

let{Login} = useAuth

function handleSubmit(){
    console.log("Love")
}


return(
     <div className="login-page">
  <form className="login-form" onSubmit={handleSubmit}>
    <input
      className="login-input"
      type="text"
      placeholder="Enter your name here"
      value={username}
     
    />

    <button className="login-btn" type="submit">
      Login
    </button>
  </form>
</div>
)

}