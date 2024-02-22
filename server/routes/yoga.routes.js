import { Router } from "express";
import { FilterData, SingleData, yogaData } from "../controller/yoga.controller.js";


const yogaRoute=Router();

yogaRoute.route("/").get(yogaData);
yogaRoute.route("/filter").get(FilterData);
yogaRoute.route("/:id").get(SingleData);

export default yogaRoute;

