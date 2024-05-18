

function fetchRandomCharacter() {
    const requestOptions = {
        method: "GET",
        redirect: "follow",
    };

    document.getElementById("characterName").textContent = "";
    document.getElementById("characterImage").src = "";
    document.getElementById("characterDescription").textContent = "";

    fetch("https://api.jikan.moe/v4/random/characters", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            const characterData = result.data;

            if (characterData.about) {
                document.getElementById("characterName").textContent =
                    characterData.name;
                document.getElementById("characterImage").src =
                    characterData.images.jpg.image_url;
                document.getElementById("characterDescription").textContent =
                    characterData.about;
            } else {
                fetchRandomCharacter();
            }
        })
        .catch((error) => console.error(error));
}

// دالة للبحث عن الأنمي
document
    .getElementById("animeSearchForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const animeName = document.getElementById("animeNameInput").value;

        const requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        document.getElementById("animeTitle").textContent = "";
        document.getElementById("animeImage").src = "";
        document.getElementById("animeSynopsis").textContent = "";
        document.getElementById("notFoundMessage").style.display = "none";

        fetch(`https://api.jikan.moe/v4/anime?q=${animeName}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.data.length > 0) {
                    const animeData = result.data[0];

                    document.getElementById("animeTitle").textContent = animeData.title;

                    if (animeData.images.jpg) {
                        document.getElementById("animeImage").src =
                            animeData.images.jpg.image_url;
                    }

                    if (animeData.synopsis) {
                        document.getElementById("animeSynopsis").textContent =
                            animeData.synopsis;
                    } else {
                        document.getElementById("animeSynopsis").textContent =
                            "Synopsis not available.";
                    }

                    document.getElementById("notFoundMessage").style.display = "none";
                } else {
                    document.getElementById("animeTitle").textContent = "";
                    document.getElementById("animeImage").src = "";
                    document.getElementById("animeSynopsis").textContent = "";
                    document.getElementById("notFoundMessage").style.display = "block";
                }
            })
            .catch((error) => console.error(error));
    });

























particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

