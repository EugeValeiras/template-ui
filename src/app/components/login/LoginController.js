var app =  angular.module('App');

app.service('loginService', function($http){
           
    this.login = function(user, callback, errorCall){
        $http.post('localhost:9090/login', user)
        .success(callback)
        .error(errorCall);
    };

}); 
            
app.controller('LoginController', function($window, loginService){
    var self = this;
    this.user = {};
    
    this.login = function(){
        loginService.login(self.user, function(data){
            
        }, function(data){
            
        });
    };
    
});