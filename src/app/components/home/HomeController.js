 angular.module('App').controller('HomeController', function(){

    var self = this;
    this.selectedSport = '';
    this.backgroundImage = '';

    this.myDate = new Date();
    this.minDate = new Date( self.myDate.getFullYear(), self.myDate.getMonth(), self.myDate.getDate());

    this.openMenu = function(){
        self.menuView = true;
    };

    this.selectSport = function(sportName){
        if(sportName === self.selectedSport){
            self.backgroundImage = {'background-image': 'none'};  
            self.selectedSport = '';
        } else {
            self.selectedSport = sportName;
            self.backgroundImage = {'background': 'url(/assets/images/fields/'+sportName+'.jpg) no-repeat center center fixed'};    
        }
    };
    
});