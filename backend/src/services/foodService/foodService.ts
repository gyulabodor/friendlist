import { FoodDTO } from "../../dtos/foodDTO";
import { Food } from "../../entities/food"
import { AppDataSource } from "../../db";
import { UnprocessableEntityError } from "../../errors/UnprocessableEntityError";

export const addNewFood = async (foodDTO: FoodDTO) :Promise<string> => {

    const food = new Food();
    food.name=foodDTO.name;

    const foodCheck = await AppDataSource.getRepository(Food).findOneBy({
        name: food.name,
    });

    if (foodCheck) {
        throw new UnprocessableEntityError("Food already exists!");
    }

    await AppDataSource.getRepository(Food).save(food);

    return "New food has been successfully saved!";
};

export const getFoods = async (): Promise<Food[]> => {

    return await AppDataSource.getRepository(Food).find();
}