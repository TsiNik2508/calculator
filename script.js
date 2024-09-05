let clickCount = 0;

document.getElementById('calculateBtn').addEventListener('click', function() {
  // Получаем значения из инпутов
  const num1 = document.getElementById('num1').value;
  const num2 = document.getElementById('num2').value;

  // Увеличиваем счетчик нажатий
  clickCount++;

  // Если оба поля заполнены, выполняем анимацию изображения
  if (num1 && num2) {
      const imageContainer = document.getElementById('imageContainer');
      const dontKnowImg = document.getElementById('dontKnowImg');

      imageContainer.style.display = 'block';
      imageContainer.style.height = 'auto';
      dontKnowImg.style.opacity = 0;
      setTimeout(() => {
          dontKnowImg.style.opacity = 1;
      }, 10);
      
      // Если это второе нажатие, отображаем видео
      if (clickCount === 2) {
          const videoContainer = document.getElementById('videoContainer');
          const kenVideo = document.getElementById('kenVideo');

          videoContainer.style.display = 'block';
          kenVideo.play(); // Запуск видео
      }
  } else {
      alert('Пожалуйста, введите числа в оба поля');
  }
});
