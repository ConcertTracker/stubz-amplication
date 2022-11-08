import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { EventTitle } from "../event/EventTitle";

export const ArtistCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="event"
          reference="Event"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="event.id"
          reference="Event"
          label="eventsOpened"
        >
          <SelectInput optionText={EventTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <TextInput label="spotifyID" source="spotifyId" />
      </SimpleForm>
    </Create>
  );
};
