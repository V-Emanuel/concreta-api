import { BaseSchema } from "@adonisjs/lucid/schema";

export default class extends BaseSchema {
  protected tableName = "customer_services";

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.string("name").notNullable();
      table.string("phone").notNullable();
      table.string("text").notNullable();
      table.integer("city_id").unsigned().references("city.id");
      table.integer("category_id").unsigned().references("category.id");

      table.timestamp("created_at");
      table.timestamp("updated_at");
    });
  }

  async down() {
    this.schema.dropTable(this.tableName);
  }
}
