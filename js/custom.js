$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '4035704202',
        limit: 4,
        resolution: 'standard_resolution',
        accessToken: '4035704202.58426e9.0a7f585ff6314cc4b60fb41c040b1bce',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 pt-2 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid img-thumbnail rounded"/></a></div>',
    });


    userFeed.run();

   $('.gallery').magnificPopup({
  type: 'image',
       delegate: 'a',
  gallery:{
    enabled:true
  }
}); 
   

});