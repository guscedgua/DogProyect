const { Router } = require("express");
const {
  getDogsHandler,
  creatDogsHandler,
  getDogsByIdHandler,
} = require("../handlers/dogsHandler");
const { validateHandlerDogs } = require("../middlewares/middleware");

const dogRouter = Router();

dogRouter.get("/", getDogsHandler);

dogRouter.get("/:id",getDogsByIdHandler);

dogRouter.post("/", validateHandlerDogs, creatDogsHandler);

module.exports = dogRouter;
