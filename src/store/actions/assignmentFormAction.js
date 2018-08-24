
export const getInfo = () => dispatch =>{
    return{
        type:"GET_INFO"
    }
      
};
export const addInfo = item => {
    return{
        type:"ADD_INFO",
        payload:item
    }
      
};
  