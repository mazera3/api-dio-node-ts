import { getConnection } from "typeorm";
import createConnection from "./../database";
import { Request } from "express";
import { mockResponse } from "./../utils/mocks/mockResponse";
import { CreateUserController } from "./CreateUserController";

describe("CreateUserController", () => {
  beforeAll(async () => {
    const conn = await createConnection();
    await conn.runMigrations();
  });

  afterAll(async () => {
    const conn = getConnection();
    await conn.query("DELETE FROM users");
    await conn.close();
  });

  const createUserController = new CreateUserController();
  const response = mockResponse();

  it("Deve retornar o status 201 quando o usuário for criado", async () => {
    //const request = mockRequest({});
    const request = {
      body: {
        name: "Usuário Teste 1",
        email: "email@email.com",
      },
    } as Request;

    await createUserController.handle(request, response);

    expect(response.state.status).toBe(201);
  });

  it("Deve retornar o status 400 quando o campo nome estiver vazio", async () => {
    const request = {
      body: {
        name: "",
        email: "email@email.com",
      },
    } as Request;

    await createUserController.handle(request, response);

    expect(response.state.status).toBe(400);
  });

  it("Deve retornar o status 400 quando o campo email estiver vazio", async () => {
    const request = {
      body: {
        name: "Usuário Teste 1",
        email: "",
      },
    } as Request;

    await createUserController.handle(request, response);

    expect(response.state.status).toBe(400);
  });
});
