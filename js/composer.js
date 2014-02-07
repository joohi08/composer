(function($){
  window.uniq_id = 0;

  window.Composer= function(){
	  this.name = "Default";
	  this.age = 0;
	  this.address ="1234 Anywhere in USA";
	  this.note= "Not yet";

	  this.id = uniq_id;
	  uniq_id = uniq_id +1;
  }

  Composer.prototype.parse = function(el){
	  this.name = $(el).find(".name");
	  this.age  = $(el).find(".age");
	  this.address = $(el).find(".address");
	  this.note = $(el).find(".note");
  }

  Composer.prototype.toHTML = function(){
    return "<tr id='composer_row_" + this.id + "' class='composer_row'>" +  this.bodyHTML() +   "</tr>";
  }

  Composer.prototype.bodyHTML = function() {
    return "<td class='name'>" + this.name + "</td>" +  "<td class='age'>" + this.age  +"</td>" +  "<td class='address'>" + this.address + "</td>" +   "<td class='note'>" + this.note + "</td>";
  }

  Composer.prototype.init_value = function(){
	this.name = "William Jone";
	this.age  = 30;
	this.address ="33 BigTrl Ave Glarpak PA";
	this.note = "Rails composer"
  }

  Composer.prototype.set_instance = function(el){
	this.el = el;
  }

  Composer.prototype.set_parent = function(el) {
    this.parent = el;
  }

  Composer.prototype.render = function(){
	$(this.parent).append(this.toHTML());

    var parent = this;
	// onclick event
	this.get_element().find(".name").on({
	  click: function(){
	    $(this).css("color", "red");
		$(this).css("font-size", "26px");
		console.log(parent.id);
	  }
	});

	this.get_element().find(".age").on({
	  click: function(){
	    $(this).css("color", "blue");
		$(this).css("font-size", "20px");
		console.log(parent.id);
	  }
	});
  }

  Composer.prototype.re_render = function(){
    this.get_element().html( this.bodyHTML() );
  }

  Composer.prototype.get_element= function(){
    return $(this.parent).find("#composer_row_"+this.id);
  }

  Composer.prototype.version = "1.02";

})(jQuery);