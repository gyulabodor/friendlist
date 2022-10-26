import { Router } from "express";
import { FoodDTO } from "../dtos/foodDTO";
import { addNewFood } from "../services/foodService/foodService";
import { validation } from "../utilities/validation";


export const foodRouter = Router();


foodRouter.post("/add", async (req,res,next) => {

    const foodDTO = new FoodDTO()
    foodDTO.name = req.body.name;

    let validated;

    try {
        validated = await validation(foodDTO)
    } catch (error) {
        next(error);
    }

    if (validated) {
        try {
            const message = await addNewFood(foodDTO);
            res.status(201).json({success: message});
        } catch (error) {
            next(error);
        }
    }
})