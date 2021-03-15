var episod = 0;
function slider(x){
	var title = document.getElementById('title');
	var meinText = document.getElementById('meinText');
	var leftBtn = document.getElementById('left-btn');
	var rightBtn = document.getElementById('right-btn');

	episod = episod + x;


	if (episod == 3){
		episod = 0;
	}
	if (episod == -1) {
		episod = 2;
	}

	if (episod == 0){
		title.innerHTML = 'Комплексное закрытие предприятия';
		meinText.innerHTML = 'Полное прекращение существования юридического лица с сохранением легальности всей предыдущей деятельности.'
	  rightBtn.classList.toggle('end');
	  leftBtn.classList.toggle('end');
	}
	if (episod == 1){
		title.innerHTML = 'Полный контроль';
		meinText.innerHTML = 'Трёх этапный контроль исполнения в котором учавствуют юристы, экономисты, священники'
	}
	if (episod == 2){
		title.innerHTML = 'Безопасность исполнения';
		meinText.innerHTML = 'Мамой клянусь всё будет хорошо, вай!';
    leftBtn.classList.toggle('end');
    rightBtn.classList.toggle('end');
	}

  

}