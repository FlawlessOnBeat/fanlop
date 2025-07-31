const container = document.getElementById('video-container');

function renderVideos(videos) {
  videos.forEach(video => {
    const card = document.createElement('div');
    card.className = "bg-zinc-800 rounded overflow-hidden shadow hover:shadow-lg transition";
    card.innerHTML = \`
      <a href="\${video.link}" target="_blank">
        <img src="\${video.thumb}" alt="\${video.title}" class="w-full h-40 object-cover">
        <div class="p-2">
          <h2 class="text-sm font-semibold truncate">\${video.title}</h2>
        </div>
      </a>
    \`;
    container.appendChild(card);
  });
}

// Load from JSON
fetch('embeds/video-links.json')
  .then(res => res.json())
  .then(data => renderVideos(data.videos))
  .catch(() => {});

// Load from localStorage
const localVideos = JSON.parse(localStorage.getItem('fantube_videos') || '[]');
renderVideos(localVideos);
