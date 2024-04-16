import { boolean, object, string } from "nope-validator";
import { faker } from "@faker-js/faker";

export function properNopeNumberValidator() {
  return string().test((value) => {
    if (value && value.trim()) {
      if (isNaN(+value)) {
        return "This field must be a number";
      }

      return;
    }
    return "This field is required";
  });
}

export function getRandomOptions(n: number) {
  return Array.from({ length: n }, (_, i) => {
    const value = faker.word.adjective();

    return {
      id: faker.string.nanoid(),
      label: value,
      value: value.replace(/[\s-]/g, "_").toUpperCase(),
    };
  });
}

type InputType = "text" | "number" | "select" | "checkbox";
export function getSchemaForInput(name: string, type: InputType) {
  switch (type) {
    case "text":
      return {
        [name]: string().required(),
      };
    case "number":
      return {
        [name]: properNopeNumberValidator().required(),
      };
    case "select":
      return {
        [name]: string().required(),
      };
    case "checkbox":
      return {
        [name]: boolean().required(),
      };
    default:
      return {
        [name]: string().required(),
      };
  }
}

export function generateStepItemsSchema(totalItems = 125) {
  const types: InputType[] = ["text", "number", "select", "checkbox"];
  const result = {};

  for (let i = 0; i < totalItems; i++) {
    const type = faker.helpers.arrayElement(types);
    const name = faker.word.noun();

    Object.assign(result, getSchemaForInput(name, type));
  }

  return result;
}

// export function generateStepSchema(totalStepItems = 125) {
//   return object({
//     slug: string(),
//     items: object(generateStepItemsSchema(totalStepItems)),
//   });
// }
