import { Router } from "express";
import { FriendDTO } from "../dtos/friendDTO";
import { addNewFriend } from "../services/friendService/friendService";
import { validation } from "../utilities/";

export const friendsRouter = Router();

friendsRouter.post("/list", async (req,res) =>{
    
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

friendsRouter.put("/update", async (req,res) =>{

});

friendsRouter.delete("/delete", async (req,res) =>{

});