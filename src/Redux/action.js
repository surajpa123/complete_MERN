export const Change_Email = "Change_Email"
export const Change_Password = "Change_Password"

export const Change_Loading = "Change_Loading"

export const Change_Token = "Change_Token"

export const Change_Sucess= "Change_Sucess"

export const Change_Error = "Change_Error"


export const change_email = (payload)=>({type:Change_Email,payload})

export const change_loading = (payload)=>({type:Change_Loading,payload})

export const change_sucess=  (payload)=>({type:Change_Sucess,payload})

export const chnage_error = (payload)=>({type:Change_Error,payload})
export const change_token = (payload) => ({type:Change_Token,payload})
export const change_password = (payload)=>({type:Change_Password,payload})

