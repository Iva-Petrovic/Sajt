(function() {

  var $imgs = $('#gallery img');                 
  var $buttons = $('#buttons');                  
  var tagged = {};                               

  $imgs.each(function() {                        
    var img = this;                              
    var tags = $(this).data('tags');              

    if (tags) {                                   
      tags.split(',').forEach(function(tagName) { 

        if (tagged[tagName] == null) {            
          tagged[tagName] = [];                   
        }
        tagged[tagName].push(img);                
      });
    }
  });

  $('<button/>', {                                 
    text: 'Prikaži sve',                           
    class: 'active',                               
    click: function() {                            
      $(this)                                      
        .addClass('active')                        
        .siblings()                                
        .removeClass('active');                    
      $imgs.hide().slideDown(500);                 
    }
  }).appendTo($buttons);                           

  $.each(tagged, function(tagName) {               
    $('<button/>', {                               
      text: tagName + ' (' + tagged[tagName].length + ')', 
      click: function() {                          
        $(this)                                    
          .addClass('active')                      
          .siblings()                              
          .removeClass('active');                 
        $imgs                                      
          .hide()                                  
          .filter(tagged[tagName])                 
          .fadeIn(500);                                
      }
    }).appendTo($buttons);                         
  });

}());
