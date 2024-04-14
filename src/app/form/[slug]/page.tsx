"use client";

import { SelectField } from "@/components/form/select";
import { getRandomOptions } from "@/utils/forms";
import { useForm } from "react-hook-form";

type Props = {
  params: {
    slug: string;
  };
};
const Page = ({ params }: Props) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
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
        <SelectField
          control={control}
          name="select"
          label="Select"
          options={getRandomOptions(30)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Page;
