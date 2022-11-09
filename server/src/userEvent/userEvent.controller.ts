import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserEventService } from "./userEvent.service";
import { UserEventControllerBase } from "./base/userEvent.controller.base";

@swagger.ApiTags("userEvents")
@common.Controller("userEvents")
export class UserEventController extends UserEventControllerBase {
  constructor(
    protected readonly service: UserEventService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
