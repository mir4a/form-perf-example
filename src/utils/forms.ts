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

export function generateStepItems(totalItems = 125) {
  const types: InputType[] = ["text", "number", "select", "checkbox"];
  const schema = {};
  const data = {};

  for (let i = 0; i < totalItems; i++) {
    const type = faker.helpers.arrayElement(types);
    const name = faker.word.noun();
    let defaultValue;
    switch (type) {
      case "checkbox":
        defaultValue = false;
        break;
      case "number":
        defaultValue = String(faker.number.int({ min: 0, max: 100 }));
        break;
      case "select":
        defaultValue = "";
        break;
      case "text":
        defaultValue = faker.lorem.words();
        break;
      default:
        break;
    }

    data[name] = {
      type,
      value: defaultValue,
    };

    Object.assign(schema, getSchemaForInput(name, type));
  }

  return { schema: object().shape({ ...schema }), data };
}

export function generateSteps(totalSteps = 50) {
  return Array.from({ length: totalSteps }, (_, i) => {
    const { schema, data } = generateStepItems();
    return {
      id: `step_${i + 1}`,
      title: `Step ${i + 1}`,
      schema,
      data,
    };
  });
}
