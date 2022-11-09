/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateUserEventArgs } from "./CreateUserEventArgs";
import { UpdateUserEventArgs } from "./UpdateUserEventArgs";
import { DeleteUserEventArgs } from "./DeleteUserEventArgs";
import { UserEventFindManyArgs } from "./UserEventFindManyArgs";
import { UserEventFindUniqueArgs } from "./UserEventFindUniqueArgs";
import { UserEvent } from "./UserEvent";
import { Event } from "../../event/base/Event";
import { User } from "../../user/base/User";
import { UserEventService } from "../userEvent.service";

@graphql.Resolver(() => UserEvent)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class UserEventResolverBase {
  constructor(
    protected readonly service: UserEventService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "UserEvent",
    action: "read",
    possession: "any",
  })
  async _userEventsMeta(
    @graphql.Args() args: UserEventFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [UserEvent])
  @nestAccessControl.UseRoles({
    resource: "UserEvent",
    action: "read",
    possession: "any",
  })
  async userEvents(
    @graphql.Args() args: UserEventFindManyArgs
  ): Promise<UserEvent[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => UserEvent, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "UserEvent",
    action: "read",
    possession: "own",
  })
  async userEvent(
    @graphql.Args() args: UserEventFindUniqueArgs
  ): Promise<UserEvent | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserEvent)
  @nestAccessControl.UseRoles({
    resource: "UserEvent",
    action: "create",
    possession: "any",
  })
  async createUserEvent(
    @graphql.Args() args: CreateUserEventArgs
  ): Promise<UserEvent> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        event: {
          connect: args.data.event,
        },

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserEvent)
  @nestAccessControl.UseRoles({
    resource: "UserEvent",
    action: "update",
    possession: "any",
  })
  async updateUserEvent(
    @graphql.Args() args: UpdateUserEventArgs
  ): Promise<UserEvent | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          event: {
            connect: args.data.event,
          },

          user: {
            connect: args.data.user,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => UserEvent)
  @nestAccessControl.UseRoles({
    resource: "UserEvent",
    action: "delete",
    possession: "any",
  })
  async deleteUserEvent(
    @graphql.Args() args: DeleteUserEventArgs
  ): Promise<UserEvent | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Event, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "read",
    possession: "any",
  })
  async event(@graphql.Parent() parent: UserEvent): Promise<Event | null> {
    const result = await this.service.getEvent(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async user(@graphql.Parent() parent: UserEvent): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}