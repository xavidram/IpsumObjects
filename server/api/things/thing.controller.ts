import {
  JsonController,
  Param, Body,
  Get, Post
} from 'routing-controllers';
import { IThing } from './thing.model';
import { ThingRepository } from './thing.repository';
import { getCustomRepository } from 'typeorm';
import { Thing } from './thing.entity';

@JsonController('/things') // Assign base route for controller
export class ThingController {

  _thingRepo: any;

  constructor() {
    this._thingRepo = getCustomRepository(ThingRepository);
  }

  @Get('/')
  async findAll() {
    const things: IThing[] = await this._thingRepo.list();
    return things;
  }

  @Post('/')
  async create(@Body() thing: IThing) {
    const newThing: Thing = await this._thingRepo.createAndSave(thing);
    return newThing;
  }

  @Get('/:id')
  async findById(@Param('id') id: string | number) {
    const thing: IThing = await this._thingRepo.findOne({id: id});
    return thing;
  }
}
