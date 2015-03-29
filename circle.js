$(document).ready(function () {
  ymaps.ready(init);
})



function init() {

  $.ajax({
    url: "http://127.0.0.1:4508/api/markers/all",
    type: "GET",
    success: function(data) {

    var resp = data.res;

    // Создаем карту.
    var myMap = new ymaps.Map("map", {
        center: [53.890804, 27.537267],
        zoom: 18,
        controls: []
    });

    myMap.controls.add(new ymaps.control.ZoomControl())
    myMap.controls.add(new ymaps.control.SearchControl())

  for(i = 0; i < resp.length; i++) {

    // Создаем круг.
    var circle = new ymaps.Circle([
      // Координаты центра круга.
      [resp[i].lt, resp[i].ln],
      // Радиус круга в метрах.
      200
    ], {
      // Описываем свойства круга.
      // Содержимое балуна.
      balloonContent: "200 метров бацил",
      // Содержимое хинта.
      hintContent: "Тут можно заболеть!"
    }, {
      // Задаем опции круга.
      // Включаем возможность перетаскивания круга.
      draggable: false,
      // Цвет заливки.
      // Последний байт (77) определяет прозрачность.
      // Прозрачность заливки также можно задать используя опцию "fillOpacity".
      fillColor: "#DB709377",
      // Прозрачность обводки.
      strokeOpacity: 1,
      // Ширина обводки в пикселях.
      strokeWidth: 0
    });
     // Добавляем круг на карту.
    myMap.geoObjects.add(circle);

  }
  }
    })


	} // end for

