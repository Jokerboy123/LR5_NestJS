import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! It is our first NEST project! Batischev Gopani Gasparyan 	Vorobiov Rukavicin';
  }
}
