
import { Change_Email, Change_Password,Change_Loading,Change_Sucess,Change_Error,Change_Token } from "./action"
const initState = {
    email:"",
    password:"",
    loading:false,
    isAuth:false,
    token:"",
    error:false
}
export const reducer = (store  = initState,{type,payload})=>{
    console.log("store",store)
    switch(type){
        case Change_Email:

            return({...store,email:payload})
            
            case Change_Password:

                return({...store,password:payload})

                case Change_Loading:

                    return({...store,loading:true})

                    case Change_Token:
                            return({
                                ...store,token:payload,
                                isAuth:true
                            })

                    case Change_Sucess:
                        return({...store,
                     
                        loading:false,
                        isAuth:true
                        })
                        

                        case Change_Error:
                            return({...store,error:true})
                       default:
                       return store;

                  

    }
}