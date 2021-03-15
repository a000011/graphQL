import {BaseEntity, Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Rank extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    picture: string;

}
//пример запроса

// mutation($Rank: rankInput){
//     AddRank(Rank: $Rank){
//       name
//     }
//   }
//   {
//     "Rank": {
//       "id": "2",
//       "name": "norm",
//       "picture": "=)"
//     }
//   }