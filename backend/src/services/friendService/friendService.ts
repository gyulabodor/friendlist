import { AppDataSource } from "../../db";
import { FriendDeleteDTO, FriendUpdateDTO } from "../../dtos";
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

export const deleteFriend = async (friendDeleteDTO: FriendDeleteDTO): Promise<string> => {

    const friendToDelete = await AppDataSource.getRepository(Friend).findOneBy({
        id: friendDeleteDTO.id
    });

    if (!friendToDelete) {
        throw new BadRequestError("Friend doesn't exists in the database!")
    }
    await AppDataSource.getRepository(Friend).delete({
        id: friendDeleteDTO.id
    });

    return (
        `${friendToDelete.name} deleted from the list!`
    );
}

export const updateFriend = async (friendUpdateDTO: FriendUpdateDTO): Promise<string> => {
    
    const friend = new Friend();
    friend.id=friendUpdateDTO.id;
    friend.name=friendUpdateDTO.name;
    friend.email=friendUpdateDTO.email;
    friend.comment=friendUpdateDTO.comment;
    friend.relationShipStatus=friendUpdateDTO.relationshipStatus;
    
    const food = await AppDataSource.getRepository(Food).findOneBy({
        id: friendUpdateDTO.favFoodId
    });

    if (food) {
        friend.favFood = food;
    } else{
        throw new BadRequestError("Invalid Food! It doesn't exists!")
    }

    const updatedFriend = await AppDataSource.getRepository(Friend).save(friend);
    return (
        `${updatedFriend.name} successfully updated!`
    );
}