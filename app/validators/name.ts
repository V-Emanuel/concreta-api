import vine from "@vinejs/vine";

export const nameValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(2).maxLength(30),
  })
);
