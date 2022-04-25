import createConnection from "../database";
import { getConnection } from "typeorm";
import { FakeData } from "../utils/fakeDate/FakeData";
import { GetAllUserService } from "./GetAllUserService";

describe("GetAllUserService", () => {
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

  it("Deve retornar todos os usuarios cadastrados", async () => {
    await fakeData.execute();

    const expectedResponse = [
      {
        name: "Algum usuario",
        email: "algum_usuario@gmail.com",
      },
      {
        name: "Outro usuario",
        email: "",
      },
    ];
    const getAllUserService = new GetAllUserService();
    const result = await getAllUserService.execute();
    expect(result).toMatchObject(expectedResponse);
  });
});
