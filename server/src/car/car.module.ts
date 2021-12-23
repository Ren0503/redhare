import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarResolver } from './car.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './car';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  providers: [CarService, CarResolver],
  exports: [CarService],
})
export class CarModule {}
