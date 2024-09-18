const Music = [
  {
      "title": "Death Bed",
      "artist": "Powfu",
      "artwork": "https://samplesongs.netlify.app/album-arts/death-bed.jpg",
      "url": "https://samplesongs.netlify.app/Death%20Bed.mp3",
      "id": "1"
  },
  {
      "title": "Hate Me",
      "artist": "Ellie Goulding",
      "artwork": "https://samplesongs.netlify.app/album-arts/hate-me.jpg",
      "url": "https://samplesongs.netlify.app/Hate%20Me.mp3",
      "id": "4"
  },
  {
      "title": "Bad Liar",
      "artist": "Imagine Dragons",
      "artwork": "https://samplesongs.netlify.app/album-arts/bad-liar.jpg",
      "url": "https://samplesongs.netlify.app/Bad%20Liar.mp3",
      "id": "2"
  },
  {
      "title": "Faded",
      "artist": "Alan Walker",
      "artwork": "https://samplesongs.netlify.app/album-arts/faded.jpg",
      "url": "https://samplesongs.netlify.app/Faded.mp3",
      "id": "3"
  },
  {
      "title": "Solo",
      "artist": "Clean Bandit",
      "artwork": "https://samplesongs.netlify.app/album-arts/solo.jpg",
      "url": "https://samplesongs.netlify.app/Solo.mp3",
      "id": "5"
  },
  {
      "title": "Without Me",
      "artist": "Halsey",
      "artwork": "https://samplesongs.netlify.app/album-arts/without-me.jpg",
      "url": "https://samplesongs.netlify.app/Without%20Me.mp3",
      "id": "6"
  }
];

const mainDiv = document.getElementById('main');

function displayData() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  mainDiv.innerHTML = '';

  const filteredMusic = Music.filter((ele) => ele.title.toLowerCase().includes(searchInput));

  if (filteredMusic.length > 0) {
      filteredMusic.forEach((ele) => {
          const MusicDiv = document.createElement('div');
          MusicDiv.classList.add('music');
          const image = document.createElement('img');
          image.src = ele.artwork;
          image.alt = ele.title;
          const title = document.createElement('h2');
          title.textContent = ele.title;
          const artistName = document.createElement('p');
          artistName.textContent = "Artist: " + ele.artist;
          const link = document.createElement('a');
          link.textContent = "Listen";
          link.href = ele.url;
          link.target = "_blank";
          MusicDiv.append(image, title, artistName, link);
          mainDiv.appendChild(MusicDiv);
      });
  } else {
      const noResultDiv = document.createElement('div');
      noResultDiv.textContent = 'No results found';
      mainDiv.appendChild(noResultDiv);
  }
}

// Initial display of all music
displayData();






/*const Music= [
    {
      "title": "Death Bed",
      "artist": "Powfu",
      "artwork": "https://samplesongs.netlify.app/album-arts/death-bed.jpg",
      "url": "https://samplesongs.netlify.app/Death%20Bed.mp3",
      "id": "1"
    },
    {
      "title": "Hate Me",
      "artist": "Ellie Goulding",
      "artwork": "https://samplesongs.netlify.app/album-arts/hate-me.jpg",
      "url": "https://samplesongs.netlify.app/Hate%20Me.mp3",
      "id": "4"
    },
    {
      "title": "Bad Liar",
      "artist": "Imagine Dragons",
      "artwork": "https://samplesongs.netlify.app/album-arts/bad-liar.jpg",
      "url": "https://samplesongs.netlify.app/Bad%20Liar.mp3",
      "id": "2"
    },
    {
      "title": "Faded",
      "artist": "Alan Walker",
      "artwork": "https://samplesongs.netlify.app/album-arts/faded.jpg",
      "url": "https://samplesongs.netlify.app/Faded.mp3",
      "id": "3"
    },
    {
      "title": "Hate Me",
      "artist": "Ellie Goulding",
      "artwork": "https://samplesongs.netlify.app/album-arts/hate-me.jpg",
      "url": "https://samplesongs.netlify.app/Hate%20Me.mp3",
      "id": "4"
    },
    {
      "title": "Solo",
      "artist": "Clean Bandit",
      "artwork": "https://samplesongs.netlify.app/album-arts/solo.jpg",
      "url": "https://samplesongs.netlify.app/Solo.mp3",
      "id": "5"
    },
    {
      "title": "Bad Liar",
      "artist": "Imagine Dragons",
      "artwork": "https://samplesongs.netlify.app/album-arts/bad-liar.jpg",
      "url": "https://samplesongs.netlify.app/Bad%20Liar.mp3",
      "id": "2"
    },
    {
      "title": "Without Me",
      "artist": "Halsey",
      "artwork": "https://samplesongs.netlify.app/album-arts/without-me.jpg",
      "link": "https://samplesongs.netlify.app/Without%20Me.mp3",
      "id": "6"
    }
  ]

const mainDiv = document.getElementById('main')
function displayData ()
{
    Music.forEach((ele) =>
    {
        const MusicDiv = document.createElement('div');
        MusicDiv.classList.add('music')
        const image = document.createElement('img');
        image.src = ele.artwork;
        image.alt = ele.title;
        const title = document.createElement('h2');
        title.textContent = ele.title;
        const artistName = document.createElement('p');
        artistName.textContent = "Artist: " + ele.artist;
        const link = document.createElement('a');
        link.textContent="Listen"
        link.href = ele.url;
        link.target = "_blank";
        MusicDiv.append(image, title, artistName, link);
        mainDiv.appendChild(MusicDiv)
    })
}
displayData() */