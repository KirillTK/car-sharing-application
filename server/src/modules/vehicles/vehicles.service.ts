import { Injectable, Inject } from '@nestjs/common';

import { Vehicle } from './vehicle.entity';
import { VehicleBrand } from './vehicle-brand.entity';
import { VehicleStatus } from './vehicle-status.entity';

@Injectable()
export class VehiclesService {
  constructor(
    @Inject('VEGCILE_PROVIDER')
    private readonly vehicleRepository: typeof Vehicle,
  ) {}

  // async create(post: PostDto, userId): Promise<Post> {
  //     return await this.postRepository.create<Post>({ ...post, userId });
  // }

  async findAll(): Promise<Vehicle[]> {
    return await this.vehicleRepository.findAll<Vehicle>({
      include: [{ model: VehicleBrand }, { model: VehicleStatus }],
    });
  }

  async findOne(id): Promise<Vehicle> {
      return await this.vehicleRepository.findOne({
          where: { id },
          include: [{ model: VehicleBrand }, { model: VehicleStatus }],
      });
  }

  // async delete(id, userId) {
  //     return await this.postRepository.destroy({ where: { id, userId } });
  // }

  // async update(id, data, userId) {
  //     const [numberOfAffectedRows, [updatedPost]] = await this.postRepository.update({ ...data }, { where: { id, userId }, returning: true });
  //     return { numberOfAffectedRows, updatedPost };
  // }
}
