import { Request, Response } from "express";
import { DeleteUserService } from "./../services/DeleteUserService";

class DeleteUserController {
  async handle(request: Request, response: Response) {
    const deleteUserService = new DeleteUserService();

    const { id } = request.params;

    if (id === undefined) {
      return response.status(400).json({ mensagem: "Id não informado" });
    }

    await deleteUserService.execute({ id });

    return response.status(204).json();
  }
}

export { DeleteUserController };