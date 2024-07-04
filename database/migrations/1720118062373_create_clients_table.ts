import { BaseSchema } from "@adonisjs/lucid/schema";

export default class extends BaseSchema {
  protected tableName = "clients";

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");

      table.timestamp("created_at");
      table.timestamp("updated_at");
      table.string("name").notNullable();
      table.string("situation").notNullable();
      table.string("phone").notNullable();
      table.string("nationality").notNullable();
      table.string("marital_status").notNullable();
      table.string("mother_name").notNullable();
      table.string("father_name");
      table.string("rg").notNullable();
      table.string("cpf").notNullable();
      table.string("birth").notNullable();
      table.string("birth_city").notNullable();
      table.string("birth_state").notNullable();
      table.string("url_img").notNullable();
      table.string(" process_number").notNullable();
      table.json("address").notNullable();
      table.json("documents").notNullable();
      table.json("observations").notNullable();
    });
  }

  async down() {
    this.schema.dropTable(this.tableName);
  }
}
