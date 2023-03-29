import { faker } from "@faker-js/faker";

let fakeName = [];
for (let i = 0; i < 100; i++) {
  const name = faker.name.fullName();
  const objName = {
    id: i + 1,
    name,
  };
  fakeName.push(objName);
}

export default fakeName;
