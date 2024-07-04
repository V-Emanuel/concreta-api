/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import CategoriesController from "#controllers/categories_controller";
import CitiesController from "#controllers/cities_controller";
import CustomerServicesController from "#controllers/customer_services_controller";
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

router.get("/city", [CitiesController, "index"]);
router.get("/city/:id", [CitiesController, "show"]);
router.post("/city", [CitiesController, "store"]);
router.delete("/city/:id", [CitiesController, "destroy"]);

router.get("/category", [CategoriesController, "index"]);
router.get("/category/:id", [CategoriesController, "show"]);
router.post("/category", [CategoriesController, "store"]);
router.delete("/category/:id", [CategoriesController, "destroy"]);

router.get("/service", [CustomerServicesController, "index"]);
router.post("/service", [CustomerServicesController, "store"]);
router.put("/service/:id", [CustomerServicesController, "update"]);
router.delete("/service/:id", [CustomerServicesController, "destroy"]);
