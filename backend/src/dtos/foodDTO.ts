import { IsDefined, MinLength } from "class-validator";

export class FoodDTO {

    @IsDefined()
    @MinLength(2,{message: "Name should be at least 2 characters!"})
    name!: string

} 