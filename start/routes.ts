/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import UsersController from "#controllers/users_controller";
import router from "@adonisjs/core/services/router";

router.get("/", async () => {
  return {
    hello: "world",
  };
});

router.get("/users", [UsersController, "index"]);
router.post("/users", [UsersController, "store"]);
router.put("/users", [UsersController, "update"]);
router.delete("/users", [UsersController, "destroy"]);
