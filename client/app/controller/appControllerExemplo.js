

(function(){
     angular.module("appj")
        .controller("appController",appController);

        function appController() {
             var self = this;
             self.name = '';
             self.listaPessoa = [
               {nome: "Jesus"},
               {nome: "Maria"},
               {nome: "Jose"},
               {nome: "Paulo"}
             ]
           };



})();
