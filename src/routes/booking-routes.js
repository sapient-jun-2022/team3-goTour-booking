import {home} from "../controllers/booking-controller";

const routes = (app) => {
    app.route("/")
        .get(home)
}

export default routes;