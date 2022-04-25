import createConnection from "../database";
import { getConnection } from "typeorm";
import { CreateUserService } from "./CreateUserService";
import { v4 as uuid } from "uuid";

describe("CreateUserService", () => {
  beforeAll(async () => {
    const conn = await createConnection();
    await conn.runMigrations();
  });

  afterAll(async () => {
    const conn = getConnection();
    await conn.query("DELETE FROM users");
    await conn.close();
  });

  it("Deve retornar o ID do usuario criado", async () => {
    const createUserService = new CreateUserService();
    const result = await createUserService.execute({
      id: uuid(),
      name: "Usuário Teste 1",
      email: "email@email.com",
    });
    console.log(result);
    expect(result).toHaveProperty("id");
  });
});
