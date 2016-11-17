angular.module('Tab',[]).directive("auto",function(){
	return {
		 template : '<div class="col-md-3"><div id="carousel-example-generic{{a}}" class="carousel slide" data-ride="carousel"><ol class="carousel-indicators"><li data-target="#carousel-example-generic{{a}}" data-slide-to="{{$index}}" ng-class="{active:$index==0}" ng-repeat="x in Pho"></li></ol><!-- Wrapper for slides --><div class="carousel-inner" role="listbox" style="height:150px"><div class="item" ng-repeat="x in Pho" ng-class="{active:$index==0}"><img ng-src="{{x.img}}" alt="..."><div class="carousel-caption"></div></div></div><!-- Controls --><a class="left carousel-control" href="#carousel-example-generic{{a}}" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span><span class="sr-only">Previous</span></a><a class="right carousel-control" href="#carousel-example-generic{{a}}" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span><span class="sr-only">Next</span></a></div></div>',
		 replace:true,
		 link:function(s,e,a){
		 	s.a=a['b']
		 	// console.log(Pho)
		 },
		 scope:{Pho:"=c"}
		 
	}
}).directive('myapp',function(){
	return {
		template:'<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true"><div class="panel panel-default" ng-repeat="x in fdata"><div class="panel-heading" role="tab" id="heading{{a}}"><h4 class="panel-title"><a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse{{a}}{{$index}}" aria-expanded="false" aria-controls="collapse{{a}}{{$index}}">Collapsible Group Item #2</a></h4></div><div id="collapse{{a}}{{$index}}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading{{a}}"><div class="panel-body">{{x.content}}</div></div></div></div>',
		replace:true,
		link:function(s,e,a){
			s.a=a["b"]
		},
		scope:{fdata:'=c'}
	}
})
