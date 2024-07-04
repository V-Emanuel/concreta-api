import { DateTime } from "luxon";
import { BaseModel, column, manyToMany } from "@adonisjs/lucid/orm";
import Address from "./address.js";
import Document from "./document.js";
import { ManyToMany } from "@adonisjs/lucid/types/relations";
import Observation from "./observation.js";

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column()
  declare name: string;

  @column()
  declare situation: string | null;

  @column()
  declare phone: string;

  @column()
  declare nationality: string;

  @column()
  declare marital_status: string;

  @column()
  declare mother_name: string;

  @column()
  declare father_name: string | null;

  @column()
  declare rg: string;

  @column()
  declare cpf: string;

  @column()
  declare birth: string;

  @column()
  declare birth_city: string;

  @column()
  declare birth_state: string;

  @column()
  declare url_img: string | null;

  @column()
  declare process_number: string;

  @column()
  declare adress: Address;

  @manyToMany(() => Document)
  declare documents: ManyToMany<typeof Document>;

  @manyToMany(() => Observation)
  declare observations: ManyToMany<typeof Observation>;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime;
}
