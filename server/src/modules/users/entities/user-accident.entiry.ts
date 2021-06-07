import { Column, DataType, Model, Table, ForeignKey } from 'sequelize-typescript';
import { User } from '../user.entity';

@Table
export class UserAccidents extends Model<UserAccidents> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  accident: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;
}
