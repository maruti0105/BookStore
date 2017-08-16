
function getUrl(){
 var bookUrl="https://api.myjson.com/bins/1ex6en"  
return bookUrl;
}
$.getJSON(getUrl(),function(data){
   var book =data.books;
placeImage(book);
});


function placeImage(book)
{ 
    var container = document.getElementById("container"); 
      
    for (i=0;i<book.length;i++) {
        
        //Here i create the elements
        var $flipContainer = $("<div/>").addClass("flip-container");
        var $flipper = $("<div/>").addClass("flipper");
        var $front=$('<div/>').addClass("front");
        var $back=$('<div/>').addClass("back");
        var image = $("<img src='" + book[i].portada + "'/>");
        var title=book[i].titulo;       
        var $para = $("<div/>").addClass("para")
        var $details= book[i].descripcion;
        var $link=book[i].detalle;
        var $button=  $('<button/>');
        var $a=document.createElement("a");
        
        
        
       
         
        //Here i mount the elements
        $front.append(image);
        $flipper.append($front, $back);
        $flipContainer.append($flipper);
        $('#container').append($flipContainer);
        $back.append(title);
        $para.append($details)
        $back.append($para);
        $a.append(document.createTextNode("More Information"));
       $a.href=book[i].detalle;
        $a.setAttribute("class","fancy" );
        $a.setAttribute("data-fancybox", "group");
        $button.append($a);
        $back.append($button); 
        
        
        
        // fancy box function
        $(".fancy").fancybox({
        thumbs   : true,
         hash : true, 
	});
   
    }
   $(document).ready(function() {
	$('#container').hideseek();
});

    }
















