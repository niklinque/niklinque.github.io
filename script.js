document.addEventListener('DOMContentLoaded', function() {
    const photo = document.querySelector('.window-photo');
    
    if (photo) {
        // Если изображение уже загружено
        if (photo.complete) {
            document.body.classList.add('loaded');
        } else {
            // Если изображение еще загружается
            photo.addEventListener('load', function() {
                document.body.classList.add('loaded');
            });
            
            // Обработка ошибки загрузки
            photo.addEventListener('error', function() {
                document.body.classList.add('loaded');
            });
        }
    } else {
        // Если фото нет, показываем контент сразу
        document.body.classList.add('loaded');
    }
}); 