import { DateTime } from "luxon";
import { BaseModel, column } from "@adonisjs/lucid/orm";

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column()
  declare zipcode: string;

  @column()
  declare street: string;

  @column()
  declare neighborhood: string;

  @column()
  declare number: number;

  @column()
  declare city: string;

  @column()
  declare state: string;

  @column()
  declare complement: string;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime;
}
