import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NewCarInput } from './new-car.input';
import { Repository } from 'typeorm';
import { Car } from './car';

@Injectable()
export class CarService {
    constructor(@InjectRepository(Car) private carRepository: Repository<Car>) { }

    public async getAllCars(): Promise<Car[]> {
        return await this.carRepository.find({}).catch((err) => {
            throw new InternalServerErrorException();
        });
    }

    public async addCar(newCarData: NewCarInput): Promise<Car> {
        const newCar = this.carRepository.create(newCarData);
        await this.carRepository.save(newCar).catch((err) => {
            new InternalServerErrorException();
        });

        return newCar;
    }
}
