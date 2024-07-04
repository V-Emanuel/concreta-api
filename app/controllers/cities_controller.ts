import City from "#models/city";
import type { HttpContext } from "@adonisjs/core/http";
import { nameValidator } from "#validators/name";

export default class CitiesController {
  async index({}: HttpContext) {
    const cities = await City.all();

    return cities;
  }

  async store({ request }: HttpContext) {
    const body = request.all();
    const bodyValidate = await nameValidator.validate(body);
    const city = City.create(bodyValidate);
    return city;
  }

  async show({ request }: HttpContext) {
    const cityId = request.param("id");
    const city = await City.findOrFail(cityId);
    return city;
  }

  async destroy({ request }: HttpContext) {
    const cityId = request.param("id");
    const city = await City.findOrFail(cityId);
    await city.delete();

    return city;
  }
}
