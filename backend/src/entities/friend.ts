import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { RelationshipStatus } from "../types";
import { Food } from "./food";

@Entity()
export class Friend {

    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    comment!: string;

    @Column({
        type: "enum",
        enum: RelationshipStatus,
        default: RelationshipStatus.SINGLE
    })
    relationShipStatus!: RelationshipStatus;

    @ManyToOne(() => Food, (food) => food.friends)
    favFood!: Food;
    
}