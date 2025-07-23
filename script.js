document.getElementById('addSong').addEventListener('click', function() {
    const userName = document.getElementById('userName').value.trim();
    const songLink = document.getElementById('songLink').value.trim();
    
    if (userName && songLink) {
        // Extract the video ID from the YouTube link
        const videoId = extractVideoID(songLink);
        if (videoId) {
            const songList = document.getElementById('songList');
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <div>
                    <strong>${userName}:</strong>
                    <iframe width="300" height="200" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                </div>
            `;
            songList.appendChild(listItem);
            document.getElementById('userName').value = ''; // Clear input
            document.getElementById('songLink').value = ''; // Clear input
        } else {
            alert('Please enter a valid YouTube song link.');
        }
    } else {
        alert('Please enter your name and a YouTube song link.');
    }
});

// Function to extract video ID from YouTube link
function extractVideoID(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}
