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
import { CreateVenueArgs } from "./CreateVenueArgs";
import { UpdateVenueArgs } from "./UpdateVenueArgs";
import { DeleteVenueArgs } from "./DeleteVenueArgs";
import { VenueFindManyArgs } from "./VenueFindManyArgs";
import { VenueFindUniqueArgs } from "./VenueFindUniqueArgs";
import { Venue } from "./Venue";
import { EventFindManyArgs } from "../../event/base/EventFindManyArgs";
import { Event } from "../../event/base/Event";
import { VenueService } from "../venue.service";

@graphql.Resolver(() => Venue)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class VenueResolverBase {
  constructor(
    protected readonly service: VenueService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Venue",
    action: "read",
    possession: "any",
  })
  async _venuesMeta(
    @graphql.Args() args: VenueFindManyArgs
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
  @graphql.Query(() => [Venue])
  @nestAccessControl.UseRoles({
    resource: "Venue",
    action: "read",
    possession: "any",
  })
  async venues(@graphql.Args() args: VenueFindManyArgs): Promise<Venue[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Venue, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Venue",
    action: "read",
    possession: "own",
  })
  async venue(
    @graphql.Args() args: VenueFindUniqueArgs
  ): Promise<Venue | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Venue)
  @nestAccessControl.UseRoles({
    resource: "Venue",
    action: "create",
    possession: "any",
  })
  async createVenue(@graphql.Args() args: CreateVenueArgs): Promise<Venue> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Venue)
  @nestAccessControl.UseRoles({
    resource: "Venue",
    action: "update",
    possession: "any",
  })
  async updateVenue(
    @graphql.Args() args: UpdateVenueArgs
  ): Promise<Venue | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Venue)
  @nestAccessControl.UseRoles({
    resource: "Venue",
    action: "delete",
    possession: "any",
  })
  async deleteVenue(
    @graphql.Args() args: DeleteVenueArgs
  ): Promise<Venue | null> {
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
  @graphql.ResolveField(() => [Event])
  @nestAccessControl.UseRoles({
    resource: "Event",
    action: "read",
    possession: "any",
  })
  async events(
    @graphql.Parent() parent: Venue,
    @graphql.Args() args: EventFindManyArgs
  ): Promise<Event[]> {
    const results = await this.service.findEvents(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
