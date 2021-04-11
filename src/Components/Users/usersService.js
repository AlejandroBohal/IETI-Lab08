export const getUsers = async() => {

    try{
        const url = "https://ieticontainers.herokuapp.com/api/v1/users";
        const response = await fetch(url);
        const users = await response.json();
        return users
    }catch(error){
        throw new Error('Error getting users')
    }
    
    
}