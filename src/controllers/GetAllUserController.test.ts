import createConnection from "../database";
import { getConnection } from "typeorm";
import { mockRequest } from "../utils/mocks/mockRequest";
import { mockResponse } from "../utils/mocks/mockResponse";

import { GetAllUserController } from "./GetAllUserController";
import { FakeData } from "./../utils/fakeDate/FakeData";

describe("GetAllUserController", () => {
  beforeAll(async () => {
    const conn = await createConnection();
    conn.runMigrations();
  });

  afterAll(async () => {
    const conn = getConnection();
    await conn.query("DELETE FROM users");
    await conn.close();
  });

  const fakeDate = new FakeData();

  it("DEve retornar status 200 quando pegar todos so usuários", async () => {
    await fakeDate.execute();

    const getAllUserController = new GetAllUserController();
    const request = mockRequest({});

    const response = mockResponse();

    await getAllUserController.handle(request, response);

    expect(response.state.status).toBe(200);
  });
});
