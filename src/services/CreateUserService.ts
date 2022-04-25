import { getRepository } from "typeorm";
import { User } from "../entities/User";

interface IUser {
  id: string;
  name: string;
  email: string;
}
export class CreateUserService {
  async execute({ id, name, email }: IUser) { // : Promise<IUser | Error>
    const repo = getRepository(User);

    // SELECT * FROM users WHERE email = "email" LIMIT 1
    if (await repo.findOne({ email })) {
      return new Error("Email already exists");
    }
    const dados = repo.create({
      id,
      name,
      email,
    });

    await repo.save(dados);
    //console.log(dados);
    return dados;
  }
}
