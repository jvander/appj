

(function(){

    'use strict';


    var mainController = require('./controller/main.controller');


    module.exports =  function(app, express){
        var api = express.Router();
        api.use("/access", mainController());
        return api;
    }


})();