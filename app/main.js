import CarsController from "./Controllers/CarsController.js";
import HousesController from "./Controllers/HousesController.js"
import JobsContoller from "./Controllers/JobsController.js"

class App {
  carsController = new CarsController()
  housesController = new HousesController()
  jobsController = new JobsContoller()
}

window["app"] = new App();
