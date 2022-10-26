import { validate } from "class-validator";
import { Router } from "express";
import { FriendDeleteDTO, FriendDTO } from "../dtos/";
import { addNewFriend, deleteFriend, getFriends } from "../services/friendService/friendService";
import { validation } from "../utilities/";

export const friendsRouter = Router();

friendsRouter.get("/list", async (req,res,next) =>{
    try {
        const friends = await getFriends();
        res.json(friends);
    } catch (error) {
        next(error)
    }
});

friendsRouter.post("/add", async (req,res,next) =>{
    let friendDTO =new FriendDTO(); 
    friendDTO.name=req.body.name
    friendDTO.email=req.body.email;
    friendDTO.favFoodId=req.body.favFoodId;
    friendDTO.relationshipStatus=req.body.relationshipStatus;
    friendDTO.comment=req.body.comment;

    let validated;

    try {
        validated= await validation(friendDTO)
    } catch (error) {
        next(error);
    }

    if(validated){
        try {
            const message = await addNewFriend(friendDTO);
            res.status(201).json({success: message});
        } catch (error) {
            next(error);
        }
    }
});

friendsRouter.put("/update", async (req,res,next) =>{
    
});

friendsRouter.delete("/delete", async (req,res,next) =>{

    const friendDeleteDTO = new FriendDeleteDTO();
    friendDeleteDTO.id = req.body.friendId;

    let validated;
    
    try {
        validated = validate(friendDeleteDTO);   
    } catch (error) {
        next(error);
    }

    try {
        const message = await deleteFriend(friendDeleteDTO);
        res.json({success: message});
    } catch (error) {
        next(error);
    }
});