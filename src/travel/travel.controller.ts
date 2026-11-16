import { Controller, Get, Post, Param } from '@nestjs/common';
import { TravelService } from './travel.service';


export class TravelController {
  constructor(private readonly travelService: TravelService) {}

  
  create(): string {
    return 'Planifier un nouveau voyage ici';
  }

  
  findAll() {
    return this.travelService.findAll();
  }


  findOne(@Param('id') id: string) {
    return this.travelService.findOne(Number(id));
  }
}