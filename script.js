import JatekterController from "./controller/JatekterController.js";
import GyufasDobozController from "./controller/GyufasDobozController.js";

$(function () {
    new JatekterController();
    new GyufasDobozController();
    //console.log = function() {}; kikapcsolja a console.log-ot
});
