import request from "supertest";
import mongoose from "mongoose";
import {
  describe,
  beforeAll,
  afterAll,
  afterEach,
  it,
  expect,
} from "@jest/globals";
import { resetDb, Sum } from "../../db";
import { app } from "../..";

describe("POST /sum", () => {
  beforeAll(async () => {
    console.log("DATABASE URL: ", process.env.MONGODB_URI!);

    await mongoose.connect(process.env.MONGODB_URI!);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  afterEach(async () => {
    await resetDb();
  });

  it("should return the sum of a and b, and store it in the database", async () => {
    const data = { a: 5, b: 10 };

    const response = await request(app).post("/sum").send(data).expect(201);

    expect(response.body.result).toBe(15);

    const record = await Sum.findOne({ a: 5, b: 10 });

    expect(record).not.toBeNull();
    expect(record?.result).toBe(15);
  });
});
