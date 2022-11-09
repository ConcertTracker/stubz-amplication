import { Module } from "@nestjs/common";
import { UserEventModuleBase } from "./base/userEvent.module.base";
import { UserEventService } from "./userEvent.service";
import { UserEventController } from "./userEvent.controller";
import { UserEventResolver } from "./userEvent.resolver";

@Module({
  imports: [UserEventModuleBase],
  controllers: [UserEventController],
  providers: [UserEventService, UserEventResolver],
  exports: [UserEventService],
})
export class UserEventModule {}
