/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import SessionController from "#controllers/session_controller";
import UsersController from "#controllers/users_controller";
import router from "@adonisjs/core/services/router";

router.get("/", async () => {
  return {
    hello: "world",
  };
});

router.get("/users", [UsersController, "index"]);
router.get("/users/:id", [UsersController, "show"]);
router.post("/users", [UsersController, "store"]);
router.put("/users/:id", [UsersController, "update"]);
router.delete("/users/:id", [UsersController, "destroy"]);

router.post("/login", [SessionController, "login"]);
