const toggleSwitch = document.getElementById('toggleSwitch');

   // Восстанавливаем состояние чекбокса при загрузке страницы
   if (localStorage.getItem('toggleState') === 'true') {
       toggleSwitch.checked = true;
   }

   // Добавляем обработчик события
   toggleSwitch.addEventListener('change', function() {
       // Сохраняем состояние чекбокса в localStorage
       localStorage.setItem('toggleState', this.checked);

       // Переход на соответствующую страницу в зависимости от состояния чекбокса
       if (this.checked) {
           // Переход на страницу index1.html
           window.location.href = 'ru-index.html';
       } else {
           // Переход на страницу index.html
           window.location.href = 'index.html';
       }
   });
