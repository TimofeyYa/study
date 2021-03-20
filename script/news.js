// var newsText = document.getElementById('newsText').innerHTML;


// if (newsText.length > 90){
// 	newsText =newsText.substr(0, 90);
// 	newsText += '...';
// 	$('#newsText').text(newsText);
// 	console.log(newsText);
	
// }


$('#newsItem1').on('click', function(){
	$('#newsItem1').addClass('news__item-click');
	$('#newsItem2').removeClass('news__item-click');
	$('#newsItem3').removeClass('news__item-click');
})
$('#newsItem2').on('click', function(){
	$('#newsItem2').addClass('news__item-click');
	$('#newsItem1').removeClass('news__item-click');
	$('#newsItem3').removeClass('news__item-click');
})
$('#newsItem3').on('click', function(){
	$('#newsItem3').addClass('news__item-click');
	$('#newsItem1').removeClass('news__item-click');
	$('#newsItem2').removeClass('news__item-click');
})