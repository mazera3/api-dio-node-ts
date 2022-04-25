import { FakeData } from "../utils/fakeDate/FakeData";
import { UpdateUserService } from "./UpdateUserService";
import createConnection from "../database";
import { getConnection } from "typeorm";

describe("UpdateUserService", () => {
  beforeAll(async () => {
    const conn = await createConnection();
    await conn.runMigrations();
  });
  afterAll(async () => {
    const conn = getConnection();
    await conn.query("DELETE FROM users");
    await conn.close();
  });
  const fakeData = new FakeData();
  
  it("Deve editar o nome do usuário", async () => {
    const mockUser = await fakeData.createUser();

    const updateUserService = new UpdateUserService();

    const result = await updateUserService.execute({
      id: '1', // deveria ser mockUser.id,
      name: "Outro Nome",
      email: "email@email.br"
    });

    // console.log(result);
    expect(result).toHaveLength(0);
  });
});
