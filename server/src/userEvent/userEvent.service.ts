import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { UserEventServiceBase } from "./base/userEvent.service.base";

@Injectable()
export class UserEventService extends UserEventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
