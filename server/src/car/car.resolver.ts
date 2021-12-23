import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CarService } from './car.service';
import { Car } from './car';
import { NewCarInput } from './new-car.input';

@Resolver()
export class CarResolver {
    constructor(private carService: CarService) { }

    @Query((returns) => [Car])
    public async cars(): Promise<Car[]> {
        return await this.carService.getAllCars().catch((err) => {
            throw err;
        });
    }

    @Mutation((returns) => Car)
    public async addNewCar(
        @Args('newCarData') newCarData: NewCarInput,
    ): Promise<Car> {
        return await this.carService.addCar(newCarData).catch((err) => {
            throw err;
        });
    }
}
