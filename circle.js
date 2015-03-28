ymaps.ready(init);


function init() {
        
      
    
	// we have to get response from ajax request
	var response = {'points':  [
		{ 'x' : 53.9, 'y' : 27.56667, 'radius': 500},
		{ 'x' : 53.9, 'y': 27.582709, 'radius': 500 },
		{ 'x' : 53.9, 'y': 27.598709, 'radius': 500 }
	]};
	
   
	
	 
	
    // Создаем карту.
    var myMap = new ymaps.Map("map", {
        center: [53.9, 27.56667],
        zoom: 13,
        controls: []
    });

    


	
	for(i = 0; i < response.points.length; i++) {
		
		// Создаем круг.
		var circle = new ymaps.Circle([
			// Координаты центра круга.
			[response.points[i].x, response.points[i].y],
			// Радиус круга в метрах.
			response.points[i].radius
		], {
			// Описываем свойства круга.
			// Содержимое балуна.
			balloonContent: "Радиус круга - 10 км",
			// Содержимое хинта.
			hintContent: "Зарази меня"
		}, {
			// Задаем опции круга.
			// Включаем возможность перетаскивания круга.
			draggable: false,
			// Цвет заливки.
			// Последний байт (77) определяет прозрачность.
			// Прозрачность заливки также можно задать используя опцию "fillOpacity".
			fillColor: "#DB709377",
			// Цвет обводки.
			strokeColor: "#FF0000",
			// Прозрачность обводки.
			strokeOpacity: 0.8,
			// Ширина обводки в пикселях.
			strokeWidth: 1
		});
                
                
		
           


       
              
                
		 // Добавляем круг на карту.
		myMap.geoObjects.add(circle);
               


	} // end for
        
}
