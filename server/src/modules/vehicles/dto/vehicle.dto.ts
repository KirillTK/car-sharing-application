import { IsNotEmpty} from 'class-validator';

export class VehicleDto {

    @IsNotEmpty()
    readonly brandId: number;

    @IsNotEmpty()
    readonly isFree: boolean;

    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly position: string;

    @IsNotEmpty()
    readonly price: number;

    @IsNotEmpty()
    readonly statusId: number;
}
