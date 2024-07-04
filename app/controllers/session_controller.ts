// import type { HttpContext } from '@adonisjs/core/http'

import User from "#models/user";
import { HttpContext } from "@adonisjs/core/http";

export default class SessionController {
  async login({ request }: HttpContext) {
    const { email, password } = request.only(["email", "password"]);
    console.log(email, password);
    const user = await User.verifyCredentials(email, password);
    const token = await User.accessTokens.create(user);
    return token;
  }
}
