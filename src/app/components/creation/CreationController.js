var app =  angular.module('App');

app.service('userService', function($http){
           
    this.createUser = function(user, callback, errorCall){
        $http.post('http://localhost:9090/user/signUp', user).success(callback).error(errorCall);
    };
});

app.controller('PlayerCreationController', function(configuration, userService){
        var self = this;
        this.user = {'userType' : 'player'};
        
        this.createUser = function(){
            userService.createUser(self.user, function(data){
                window.alert(configuration.apiUrl + ': SUCCESS ' + data);
            }, function(data){
                window.alert(configuration.apiUrl + ': ERROR ' + data);
            });
        };
});