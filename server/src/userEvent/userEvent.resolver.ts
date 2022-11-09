import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { UserEventResolverBase } from "./base/userEvent.resolver.base";
import { UserEvent } from "./base/UserEvent";
import { UserEventService } from "./userEvent.service";

@graphql.Resolver(() => UserEvent)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class UserEventResolver extends UserEventResolverBase {
  constructor(
    protected readonly service: UserEventService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
