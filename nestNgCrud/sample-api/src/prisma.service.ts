import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private _customer: any;
  public get customer(): any {
    return this._customer;
  }
  public set customer(value: any) {
    this._customer = value;
  }
  async onModuleInit() {
    await this.$connect();
  }
}
