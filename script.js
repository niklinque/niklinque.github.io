document.addEventListener('DOMContentLoaded', function() {
    const photo = document.querySelector('.window-photo');
    const maxPhotos = 11;
    
    // Get the last shown photo number from localStorage
    let lastPhotoNum = parseInt(localStorage.getItem('lastPhotoNum')) || 0;
    
    // Generate a new random number different from the last one
    let photoNum;
    do {
        photoNum = Math.floor(Math.random() * maxPhotos) + 1;
    } while (photoNum === lastPhotoNum && maxPhotos > 1);
    
    // Save the new photo number to localStorage
    localStorage.setItem('lastPhotoNum', photoNum);
    
    if (photo) {
        // Set the photo source
        photo.src = `photos/${photoNum}.jpg`;
        
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