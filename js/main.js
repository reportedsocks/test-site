$(document).ready(function(){
var leftBarCounter =false;
var rightBarCounter =false;
var rightSidebar = $('.right-sidebar');
var leftSidebar = $('.left-sidebar');
var sidebarZindex = leftSidebar.css('zIndex');

$('#left-bar-bttn').on("click",function(){
		
		
		if(leftBarCounter==false){
		if($(window).width() <= '340'){
			leftSidebar.animate({opacity: '1', zIndex: sidebarZindex+'1'}, "fast");
		}else if($(window).width() >= '1900'){
			leftSidebar.animate({opacity: '0.9', zIndex: sidebarZindex+'1'}, "fast");
			leftSidebar.animate({left:'8%'}, "slow");
		}else{
			leftSidebar.animate({opacity: '0.9', zIndex: sidebarZindex+'1' }, "fast");
			leftSidebar.animate({left:'5%'}, "slow");
		}
		leftBarCounter=true;
		sidebarZindex++;
	}else{
		leftSidebar.animate({left:'0', zIndex: sidebarZindex-'1'}, "slow");
		leftSidebar.animate({opacity: '0'}, "fast");
		leftBarCounter=false;
		
	} 
	
});

$('#right-bar-bttn').on("click",function(){
		
		
		if(rightBarCounter==false){
		
		if($(window).width() <= '340'){
			rightSidebar.animate({opacity: '1', zIndex: sidebarZindex+'1'}, "fast");
		}else if($(window).width() >= '1900'){
			rightSidebar.animate({opacity: '0.9', zIndex: sidebarZindex+'1'}, "fast");
			rightSidebar.animate({right:'8%'}, "slow");
		}else{
			rightSidebar.animate({opacity: '0.9', zIndex: sidebarZindex+'1'}, "fast");
			rightSidebar.animate({right:'5%'}, "slow");
		} 
		
		rightBarCounter=true;
		sidebarZindex++;
	}else{
		rightSidebar.animate({right:'0', zIndex: sidebarZindex-'1'}, "slow");
		rightSidebar.animate({opacity: '0'}, "fast");
		rightBarCounter=false;
		
	}
	
});




});