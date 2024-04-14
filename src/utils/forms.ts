import { faker } from "@faker-js/faker";

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
