const Beats = new Howl({
    "src": [
      "./Beats/drums.webm",
      "./Beats/drums.mp3"
    ],
    "sprite": {
      "clap": [
        0,
        593.1065759637188
      ],
      "closedhihat": [
        2000,
        912.018140589569
      ],
      "crash": [
        4000,
        5694.693877551022
      ],
      "highBass": [
        11000,
        1344.0136054421766
      ],
      "highSnare": [
        14000,
        1104.0136054421764
      ],
      "openhihat": [
        17000,
        1175.9863945578245
      ]
    }
  });

  const drumkit = document.querySelector('.drumkit');
  function playBeats(event) {
    //console.log('button has been clicked')
    if (event.target.classList.contains('pad')) {
      event.preventDefault();
      let soundToPlay = event.target.dataset.sound;
      Beats.play(soundToPlay);
    }
  }
  function setViewportHeight () {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  
  setViewportHeight();
  window.addEventListener('resize', () => {
    setTimeout(setViewportHeight, 100);
  });

  drumkit.addEventListener('click', playBeats);
  drumkit.addEventListener('touchstart', playBeats);

