document.getElementById('calculateBtn').addEventListener('click', function() {
  // Получаем значения из инпутов
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;

  // Если оба поля заполнены, выполняем анимацию изображения
  if (num1 && num2) {
      // Отображаем изображение с анимацией
      const imageContainer = document.getElementById('imageContainer');
      const dontKnowImg = document.getElementById('dontKnowImg');
      
      imageContainer.style.display = 'block';
      imageContainer.style.height = 'auto';
      dontKnowImg.style.opacity = 0; // Установим начальное состояние непрозрачности
      setTimeout(() => {
          dontKnowImg.style.opacity = 1; // Затем плавно изменим его на видимое
      }, 10); // Небольшая задержка для запуска анимации
  } else {
      alert('Пожалуйста, введите числа в оба поля');
  }
});
