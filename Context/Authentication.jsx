import {createContext,useContext,useState,useEffect} from "react"

const AuthContext = createContext(null)

export default function Authentication({children}){
    const[user,setUser] = useState()

    useEffect( ()=>{
     if(localStorage.getItem(user)){
        setUser(user)
     }
        else{
            setUser(null)
        }
            
    
    } ,[])
     
    function Login(user){
        let userValue = {name:user}
        setUser(userValue)
        localStorage.setItem( "user",JSON.stringify(userValue))
    }

    function SignUp(user){
        let newUser = {
            userName:user.name,
            passcode:user.password
        }
                
        localStorage.setItem("user",JSON.stringify(newUser))
        setUser(newUser) 

    }

    function LogOut(){
        console.log("LogOut Clicked")
        setUser(null)
        localStorage.removeItem(user)
    }
    

    return(
        <AuthContext.Provider value={{Login,LogOut,user,SignUp}}>

{children}

        </AuthContext.Provider>
    )
}

export function useAuth(){
    useContext( AuthContext )                                                                                                               
}  