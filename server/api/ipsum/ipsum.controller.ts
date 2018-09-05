import {
  JsonController,
  Param, Body,
  Get, Post
} from 'routing-controllers';
import * as loremIpsum from 'lorem-ipsum';
import { LoreIpsum, IpsumObjects } from './ipsum.model';

@JsonController('/ipsum')
export class IpsumController {

  @Post('/')
  async gIpsum(@Body() obj: IpsumObjects) {
    const ipsumArray = Array();
    for (let i = 0; i < obj.count; i++) {
      const newIpsum: any = {};
      for (const field of obj.options) {
        const ip = await this.generateField(field);
        newIpsum[ip.name] = ip.text;
      }
      ipsumArray.push(newIpsum); // append to list
    }
    return ipsumArray;
  }

  private async generateField(item: LoreIpsum) {
    const name = item.name;
    delete item.name;
    const text = await loremIpsum(item);
    return  {name: name, text: text}; // return ipsum item
  }

}
