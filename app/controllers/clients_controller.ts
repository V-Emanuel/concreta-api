import Client from "#models/client";
import type { HttpContext } from "@adonisjs/core/http";

export default class ClientsController {
  async index({}: HttpContext) {
    const clients = await Client.all();

    return clients;
  }
  async update({ request }: HttpContext) {
    const clientId = request.param("id");
    const body = request.all();
    const client = await Client.findOrFail(clientId);

    await client.merge(body).save();

    return client;
  }

  async destroy({ request }: HttpContext) {
    const clientId = request.param("id");
    const client = await Client.findOrFail(clientId);
    await client.delete();

    return client;
  }
}
