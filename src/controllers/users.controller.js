import { findUserPostsDB, searchUsersRep } from "../repositories/users.repository.js";

export async function searchUsers(req, res){
    const {search} = req.body
    try {
        const getUsers=await searchUsersRep(search);
        
        return res.send(getUsers.rows);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}

export async function getUserPosts(req, res){
    const {id}=req.params;
    
    
    try {
        const userPosts=await findUserPostsDB(id);
        
        return res.send(userPosts.rows);     
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
}
