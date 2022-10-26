import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Friend } from "./friend";

@Entity()
export class Food{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @OneToMany(() => Friend, (friend) => friend.favFood)
    friends!: Friend[]
}