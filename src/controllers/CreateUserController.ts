import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { v4 as uuid } from "uuid";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const service = new CreateUserService();

    const { name, email } = request.body;
    const id = uuid();

    if (name.length === 0 || email.length === 0) {
      return response
        .status(400)
        .json({ message: "Preencha todos os campos" });
    }

    const user = await service.execute({ id, name, email });
    if (user instanceof Error) {
      return response.status(400).json(user.message);
    }
    return response.status(201).json(user.id);
  }
}
