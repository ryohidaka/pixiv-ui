import { faker } from "@faker-js/faker";
import { User } from "@/types";

export function createRandomUser(): User {
  const id = faker.string.uuid();
  const name = faker.person.fullName();
  const avatarURL = faker.image.avatar();
  const link = { href: "https://example.com" };

  return {
    id,
    name,
    avatarURL,
    link,
  };
}
