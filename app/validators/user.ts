import vine from "@vinejs/vine";

export const userValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(2).maxLength(100),
    email: vine.string().trim().email().maxLength(100),
    password: vine.string().trim().minLength(8),
    admin: vine.number().withoutDecimals().range([0, 1]),
  })
);
