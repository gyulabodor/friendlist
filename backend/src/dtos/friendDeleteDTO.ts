import { IsDefined, IsInt } from "class-validator";

export class FriendDeleteDTO {
    
    @IsDefined()
    @IsInt({
        message: "ID should be a valid number!"
    })
    id!: number;
}