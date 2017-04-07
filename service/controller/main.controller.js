(function(){
var router = require('express').Router();

    "use strict";

    module.exports = function () {
    
        router.route('/login')
            .post(userValidate);
    
        return router;


        function userValidate(req, res){
        

                    res.json({
                            success: true,
                            email: req.body.email
                            
                        });
        }


    }

})();
