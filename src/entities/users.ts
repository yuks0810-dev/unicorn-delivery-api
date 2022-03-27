import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class users {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    firstName: string;
    
    @Column()
    lastName: string;
    
    @Column()
    email: string;
    
    @Column()
    password: string;
}
