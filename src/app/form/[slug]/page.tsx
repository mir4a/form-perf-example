"use client";

import { SelectField } from "@/components/form/select";
import { getRandomOptions, getSchemaForInput } from "@/utils/forms";
import { useForm } from "react-hook-form";
import { TextInput } from "@/components/form/input";
import { CheckboxField } from "@/components/form/checkbox";
import { nopeResolver } from "@hookform/resolvers/nope";

import * as Nope from "nope-validator";
import { useStepsContext } from "@/store/form";
import { Fragment } from "react";
import Button from "@mui/material/Button";

const OPTIONS = getRandomOptions(30);

type Props = {
  params: {
    slug: string;
  };
};
const Page = ({ params }: Props) => {
  const { stores } = useStepsContext();

  const store = stores[params.slug];
  const { data, setData } = store();

  const defaultValues = Object.keys(data).reduce((acc, key) => {
    acc[key] = data[key].value;
    return acc;
  }, {});
  const schemaShape = Object.keys(data).reduce((acc, key) => {
    const type = data[key].type;
    acc[key] = getSchemaForInput(key, type);
    return acc;
  }, {});

  const schema = Nope.object().shape(schemaShape);
  console.log(schema);

  function renderInput(
    name: string,
    type: string,
    control: any,
    error?: string
  ) {
    switch (type) {
      case "text":
        return (
          <TextInput control={control} name={name} label={name} error={error} />
        );
      case "checkbox":
        return (
          <div>
            <CheckboxField
              control={control}
              name={name}
              label={name}
              error={error}
            />
          </div>
        );
      case "select":
        return (
          <SelectField
            control={control}
            name={name}
            label={name}
            options={getRandomOptions(30)}
            error={error}
          />
        );
      default:
        return (
          <TextInput control={control} name={name} label={name} error={error} />
        );
    }
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: nopeResolver(schema, { abortEarly: true }),
    defaultValues,
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Page</h1>
      <p>Slug: {params.slug}</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        {Object.keys(data).map((key) => {
          const { type } = data[key];
          return (
            <Fragment key={key}>
              {renderInput(key, type, control, errors[key]?.message)}
            </Fragment>
          );
        })}
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Page;
