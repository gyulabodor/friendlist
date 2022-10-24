import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RelationshipStatus } from "../types";
import { Food } from "../entities";

@Entity()
export class Friend {
    @PrimaryGeneratedColumn()
        id!: number;

    @Column()
        name!: string;
    
    @Column()
        email!: string;
    
    @Column()
        comment!: string;
    
    @ManyToOne(() => Food, (food) => food.friends)
        favFood!: Food;

    @Column({
        type: 'enum',
        enum: RelationshipStatus,
        default: RelationshipStatus.SINGLE
    })
        relationshipStatus!: RelationshipStatus;
}