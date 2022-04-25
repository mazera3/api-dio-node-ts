import { getRepository } from "typeorm";
import { User } from "../entities/User";

interface IUser {
  id: string;
  name: string;
  email?: string;
}

class UpdateUserService {
  async execute({ id, name, email }: IUser) { // : Promise<IUser | Error> 
    const user = await getRepository(User)
      .createQueryBuilder()
      .update(User)
      .set({
        name: name,
        email: email,
      })
      .where("id = :id", { id })
      .execute();

    console.log(user.raw);
    return user.raw;
  }
}

export { UpdateUserService };
