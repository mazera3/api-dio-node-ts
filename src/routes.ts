import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAllUserController } from "./controllers/GetAllUserController";
import { UpdateUserController } from './controllers/UpdateUserController';
import { DeleteUserController } from './controllers/DeleteUserController';



const router = Router();
const createUserController = new CreateUserController();
const getAllUserController = new GetAllUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();


router.get("/", (request: Request, response: Response) => {
  return response.json({ mensagem: "Bem vindo a nossa DIO API" });
});

router.post("/users", createUserController.handle);
router.get("/users", getAllUserController.handle);
router.patch('/user', updateUserController.handle)
router.delete('/user/:id', deleteUserController.handle)

export { router };
