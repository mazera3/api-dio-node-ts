import { getRepository } from "typeorm";
import { User } from "../entities/User";

class GetAllUserService {
  async execute() {
    const user = await getRepository(User)
      .createQueryBuilder("users")
      .select()
      .getMany();

    console.log(user);
    return user;
  }
}

export { GetAllUserService };
