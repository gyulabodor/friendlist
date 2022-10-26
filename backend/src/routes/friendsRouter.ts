import { validate } from "class-validator";
import { Router } from "express";
import { FriendDeleteDTO, FriendDTO, FriendUpdateDTO } from "../dtos/";
import { 
    addNewFriend, 
    deleteFriend, 
    getFriends, 
    updateFriend 
} from "../services/friendService/friendService";
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
    let friendUpdateDTO =new FriendUpdateDTO();
    friendUpdateDTO.id=req.body.friendId;
    friendUpdateDTO.name=req.body.name
    friendUpdateDTO.email=req.body.email;
    friendUpdateDTO.favFoodId=req.body.favFoodId;
    friendUpdateDTO.relationshipStatus=req.body.relationshipStatus;
    friendUpdateDTO.comment=req.body.comment;

    let validated;

    try {
        validated= await validation(friendUpdateDTO)
    } catch (error) {
        next(error);
    }

    if(validated){
        try {
            const message = await updateFriend(friendUpdateDTO);
            res.status(201).json({success: message});
        } catch (error) {
            next(error);
        }
    }
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
    
    if (validated) {
        try {
            const message = await deleteFriend(friendDeleteDTO);
            res.json({success: message});
        } catch (error) {
            next(error);
        }
    }

});