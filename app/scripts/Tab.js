angular.module('Tab',[]).directive("auto",function(){
	return {
		 template : '<div class="col-md-5"><div id="carousel-example-generic{{a}}" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators"><li data-target="#carousel-example-generic{{a}}" data-slide-to="0" class="active"></li><li data-target="#carousel-example-generic{{a}}" data-slide-to="1"></li><li data-target="#carousel-example-generic{{a}}" data-slide-to="2"></li></ol><!-- Wrapper for slides --><div class="carousel-inner" role="listbox" style="height:241.8px"><div class="item active"><img src="images/1.jpg" alt="..."><div class="carousel-caption"></div></div><div class="item active"><img src="images/2.jpg" alt="..."><div class="carousel-caption"></div></div><div class="item"><img src="images/3.jpg" alt="..."><div class="carousel-caption"></div></div></div><!-- Controls --><a class="left carousel-control" href="#carousel-example-generic{{a}}" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span><span class="sr-only">Previous</span></a><a class="right carousel-control" href="#carousel-example-generic{{a}}" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span><span class="sr-only">Next</span></a></div></div>',
		 replace:true,
		 scope:true,
		 link:function(s,e,a){
		 	s.a=a['b']
		 }
	}
})