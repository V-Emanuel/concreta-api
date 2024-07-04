import vine from "@vinejs/vine";

export const serviceValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(2).maxLength(100),
    phone: vine.string().trim().minLength(8).maxLength(20),
    text: vine.string().trim().maxLength(400),
    city_id: vine.number().withoutDecimals().positive(),
    category_id: vine.number().withoutDecimals().positive(),
  })
);
