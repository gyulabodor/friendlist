import { AppDataSource } from "../../db";
import { FriendDTO } from "../../dtos/friendDTO";
import { Food } from "../../entities/food";
import { Friend } from "../../entities/friend";
import { BadRequestError } from "../../errors";

export const addNewFriend = async (friendDTO: FriendDTO) :Promise<string> => {

    const friend = new Friend();
    friend.name=friendDTO.name;
    friend.email=friendDTO.email;
    friend.comment=friendDTO.comment;
    friend.relationShipStatus=friendDTO.relationshipStatus;
    
    const food = await AppDataSource.getRepository(Food).findOneBy({
        id: friendDTO.favFoodId
    });

    if (food) {
        friend.favFood = food;
    } else{
        throw new BadRequestError("Invalid Food! It doesn't exists!")
    }

    const newFriend = await AppDataSource.getRepository(Friend).save(friend);
    return (
        `${newFriend.name} successfully saved!`
    );
}

export const getFriends = async (): Promise<Friend[]> => {

    return await AppDataSource.getRepository(Friend).find({
        relations: {
            favFood: true,
        }
    });
}