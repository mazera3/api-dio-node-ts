import createConnection from "../database";
import { getConnection } from "typeorm";
import { mockResponse } from "./../utils/mocks/mockResponse";
import { mockRequest } from "./../utils/mocks/mockRequest";
import { FakeData } from "./../utils/fakeDate/FakeData";
import { DeleteUserController } from "./DeleteUserController";

describe("DeleteUserController", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    connection.runMigrations();
  });

  afterAll(async () => {
    const connection = getConnection();
    connection.close();
  });

  const fakeData = new FakeData();

  it("Deve retornar status 204 quando o usuário for deletado", async () => {
    const mockUser = await fakeData.createUser();

    const deleteUserController = new DeleteUserController();

    const request = mockRequest({
      params: {
        id: '1', //mockUser.id,
      },
    });

    const response = mockResponse();

    await deleteUserController.handle(request, response);

    expect(response.state.status).toBe(204);
  });
});
