import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Friend } from "../entities";

Entity()
export class Food {

    @PrimaryGeneratedColumn()
        id!: number;
    
    @Column()
        name!: string;

    @OneToMany(() => Friend, (friend) => friend.favFood, { cascade: true})
        friends!: Friend[]
}