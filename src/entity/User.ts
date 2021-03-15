import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Group} from "./Group";
import {Rank} from "./Rank";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    secname: string;


    // @Column()
    // userGroup: string;
    
    @ManyToOne(() => Rank, rank => rank.id)
    rank: Rank;

    @Column()
    isAdmin: string;

    @Column()
    password: string;

    @Column()
    picture: string;

    @ManyToOne(() => Group, group => group.id)
    userGroup: Group;

}

