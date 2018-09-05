import { EntityRepository, EntityManager } from 'typeorm';
import { Thing } from './thing.entity';
import { IThing } from './thing.model';
import { Service } from 'typedi';

@EntityRepository(Thing)
export class ThingRepository {

  constructor(private manager: EntityManager) {}

  list() {
    return this.manager.find(Thing, {});
  }

  findById(id: string | number) {
    return this.manager.findOne(Thing, {id: id});
  }

  createAndSave(thing: IThing) {
    const newThang = new Thing();
    newThang.title = thing.title;
    newThang.description = thing.description;
    newThang.text = thing.text;
    newThang.postDate = thing.postDate;
    newThang.author = thing.author;
    return this.manager.save(newThang);
  }
}