import CarsController from "./Controllers/CarsController.js";
import HousesController from "./Controllers/HousesController.js"
import JobsContoller from "./Controllers/JobsController.js"
import GamesController from "./Controllers/GamesController.js"

class App {
  carsController = new CarsController()
  housesController = new HousesController()
  jobsController = new JobsContoller()
  gamesController = new GamesController()
}

window["app"] = new App();
