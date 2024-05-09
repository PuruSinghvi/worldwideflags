document.addEventListener('mousemove', function(e) {
    const cursor = document.getElementById('cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    document.body.style.backgroundPositionX = -e.clientX / 20 + 'px';
    document.body.style.backgroundPositionY = -e.clientY / 20 + 'px';
});