import { Request } from "express";
import { Params } from "express-serve-static-core";

interface ImockRequest {
  params?: Params;
}

export function mockRequest({ params }: ImockRequest) {
  const request = {
    params: params || {},
  } as unknown;

  return request as Request ;
}
