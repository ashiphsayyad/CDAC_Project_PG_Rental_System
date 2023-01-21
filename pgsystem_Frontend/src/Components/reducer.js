const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'LOGGEDIN':
            return {...state,loggedin:true}
        case 'LOGGEDOUT':
            return {...state,loggeout:false}
    }
}
export default reducer;