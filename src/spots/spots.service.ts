import { Injectable } from '@nestjs/common';
import { CreateSpotDto } from './dto/create-spot.dto';
import { UpdateSpotDto } from './dto/update-spot.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SpotsService {
  
  constructor(private prismaService: PrismaService){}

  create(createSpotDto: CreateSpotDto) {
    this.prismaService.event;
    return 'This action adds a new spot';
  }

  findAll(eventId: string) {
    return `This action returns all spots`;
  }

  findOne(eventId: string, spotId: string) {
    return `This action returns a #${spotId} spot`;
  }

  update(eventId: string, spotId: string, updateSpotDto: UpdateSpotDto ) {
    return `This action updates a #${spotId} spot`;
  }

  remove(eventId: string, spotId: string) {
    return `This action removes a #${spotId} spot`;
  }
}
