import { describe, expect, it } from "@jest/globals";
import request from "supertest";
import { app } from "../..";

describe("GET /health", () => {
  it("should give 200 status", async () => {
    const res = await request(app).get("/health");

    expect(res.status).toBe(200);
  });
});
