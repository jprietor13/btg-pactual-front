import { httpClient } from "@/core/api/httpClient";
import type { AuthRepository } from "../domain/AuthRepository";

export class AuthApiRepository implements AuthRepository {
  async login(email: string, password: string): Promise<string> {
    const { data } = await httpClient.post("/auth/login", {
      email,
      password,
    });

    return data.access_token;
  }
}
