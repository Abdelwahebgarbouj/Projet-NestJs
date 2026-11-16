import { Injectable } from '@nestjs/common';

Injectable()
export class TravelService {
  private trips = [
    { id: 1, destination: 'China', price: 9000 },
    { id: 2, destination: 'Morocco', price: 4000 },
    { id: 3, destination: 'France', price: 2500 },
  ];

  findAll() {
    return this.trips;
  }

  findOne(id: number) {
    return this.trips.find((trip) => trip.id === id);
  }
}