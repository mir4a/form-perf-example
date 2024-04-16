"use client";

import { SelectField } from "@/components/form/select";
import { getRandomOptions } from "@/utils/forms";
import { useForm } from "react-hook-form";
import { TextInput } from "@/components/form/input";
import { CheckboxField } from "@/components/form/checkbox";
import { nopeResolver } from "@hookform/resolvers/nope";

import * as Nope from "nope-validator";
import { useStepsContext } from "@/store/form";

const OPTIONS = getRandomOptions(30);

type Props = {
  params: {
    slug: string;
  };
};
const Page = ({ params }: Props) => {
  const { stores } = useStepsContext();

  const store = stores[params.slug];
  const { data } = store();
  console.log("here is store: ", store, data);

  const schema2 = Nope.object().shape({
    name: Nope.string().required(),
    age: Nope.string()
      .test((value) => {
        if (value && value.trim()) {
          if (isNaN(+value)) {
            return "This field must be a number";
          }

          return;
        }
        return "This field is required";
      })
      .required(),
    select: Nope.string().required(),
    checkbox: Nope.boolean().required(),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: nopeResolver(schema2),
    defaultValues: {
      name: "John Doe",
      age: "",
      checkbox: undefined,
      select: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Page</h1>
      <p>Slug: {params.slug}</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          control={control}
          name="name"
          label="Name"
          error={errors.name?.message}
        />
        <TextInput
          control={control}
          name="age"
          label="Age"
          error={errors.age?.message}
        />
        <CheckboxField
          control={control}
          error={errors.checkbox?.message}
          name="checkbox"
          label="Checkbox"
        />
        <SelectField
          control={control}
          name="select"
          label="Select"
          options={OPTIONS}
          error={errors.select?.message}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Page;
