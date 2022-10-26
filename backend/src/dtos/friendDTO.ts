import { IsDefined, IsEmail, IsInt, MaxLength, MinLength } from "class-validator";
import { RelationshipStatus } from "../types";

export class FriendDTO {
    
    @IsDefined()
    @MinLength(4, {
        message: "Name is too short! It should be at least 4 characters"
    })
        name!: string;

    @IsDefined()
    @IsEmail({ message: "Email should be a valid email address!"})
        email!: string;
    
    @MaxLength(30, {
        message: "Comment is too long! It can be maximum 30 characters!"
    })
        comment!: string;

    @IsDefined()
    @IsInt({ message: "favFoodId Should be a valid id number!"})
        favFoodId!: number;

    @IsDefined()
        relationshipStatus!: number;
}