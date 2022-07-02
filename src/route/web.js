import express from "express";
import homeControllers from "../controllers/homeControllers"

let router = express.Router();

let initWebRouter = (app) => {
    router.get('/', homeControllers.getHomePage);
    
    router.get('/baodeptrai', (req, res) => {
        return res.send('hello world bao dep trai')
    });
    return app.use("/",router);
}

module.exports = initWebRouter;