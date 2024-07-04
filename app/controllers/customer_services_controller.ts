import CustomerService from "#models/customer_service";
import { serviceValidator } from "#validators/service";
import type { HttpContext } from "@adonisjs/core/http";

export default class CustomerServicesController {
  async index({}: HttpContext) {
    const services = await CustomerService.all();
    return services;
  }

  async store({ request }: HttpContext) {
    const body = request.all();
    const serviceValidate = await serviceValidator.validate(body);
    const service = CustomerService.create(serviceValidate);

    return service;
  }

  async update({ request }: HttpContext) {
    const serviceId = request.param("id");
    const body = request.all();
    const service = await CustomerService.findOrFail(serviceId);

    await service.merge(body).save();

    return service;
  }

  async destroy({ request }: HttpContext) {
    const serviceId = request.param("id");
    const service = await CustomerService.findOrFail(serviceId);
    await service.delete();

    return service;
  }
}
