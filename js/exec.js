(function($){

  $(document).ready(function(){
    console.log("jQuery composer example");  

	var jenn = new Composer();
    jenn.set_parent($("table.students tbody"));
    jenn.render();

    for(var i=0; i<100; i++)
    {
	  var c = new Composer();
	  c.set_parent($("table.students tbody"));
	  c.render();
    }

  });


})(jQuery);