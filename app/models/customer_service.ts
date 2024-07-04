import { DateTime } from "luxon";
import { BaseModel, belongsTo, column } from "@adonisjs/lucid/orm";
import City from "./city.js";
import Category from "./category.js";
import type { BelongsTo } from "@adonisjs/lucid/types/relations";

export default class CustomerService extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column()
  declare name: string;

  @column()
  declare phone: string;

  @column()
  declare text: string;

  @column()
  declare cityId: number;

  @column()
  declare categoryId: number;

  @belongsTo(() => City)
  declare city: BelongsTo<typeof City>;

  @belongsTo(() => Category)
  declare category: BelongsTo<typeof Category>;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime;
}
