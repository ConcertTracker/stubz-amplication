import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { VenueServiceBase } from "./base/venue.service.base";

@Injectable()
export class VenueService extends VenueServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
