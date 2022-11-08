import { Module } from "@nestjs/common";
import { VenueModuleBase } from "./base/venue.module.base";
import { VenueService } from "./venue.service";
import { VenueController } from "./venue.controller";
import { VenueResolver } from "./venue.resolver";

@Module({
  imports: [VenueModuleBase],
  controllers: [VenueController],
  providers: [VenueService, VenueResolver],
  exports: [VenueService],
})
export class VenueModule {}
