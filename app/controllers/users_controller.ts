import User from "#models/user";
import { userValidator } from "#validators/user";
import type { HttpContext } from "@adonisjs/core/http";

export default class UsersController {
  async index({}: HttpContext) {
    const users = await User.all();

    return users;
  }

  async show({ request }: HttpContext) {
    const userId = request.param("id");
    const user = await User.findOrFail(userId);

    return user;
  }

  async indexNoAdmins({}: HttpContext) {
    const users = await User.query().where("admin", "0");

    return users;
  }

  async store({ request }: HttpContext) {
    const body = request.all();
    const userValidate = await userValidator.validate(body);
    const user = User.create(userValidate);

    return user;
  }

  async update({ request }: HttpContext) {
    const userId = request.param("id");
    const body = request.all();
    const user = await User.findOrFail(userId);

    await user.merge(body).save();

    return user;
  }

  async destroy({ request }: HttpContext) {
    const userId = request.param("id");
    const user = await User.findOrFail(userId);
    await user.delete();

    return user;
  }
}
