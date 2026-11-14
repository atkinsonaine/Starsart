(() => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const scriptUrl = document.currentScript.src;

  function startSlideshow(image, slides, interval) {
    if (!image) return;

    let currentSlide = 0;
    let timer = null;

    const showNextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      image.src = new URL(slides[currentSlide].src, scriptUrl).href;
      image.alt = slides[currentSlide].alt;
    };

    const updateTimer = (reducedMotion) => {
      if (reducedMotion && timer !== null) {
        window.clearInterval(timer);
        timer = null;
      } else if (!reducedMotion && timer === null) {
        timer = window.setInterval(showNextSlide, interval);
      }
    };

    updateTimer(prefersReducedMotion.matches);
    prefersReducedMotion.addEventListener("change", (event) => {
      updateTimer(event.matches);
    });
  }

  startSlideshow(
    document.getElementById("about-slideshow"),
    [
      { src: "images/artist-photos/aine.jpg", alt: "Aine, the artist" },
      { src: "images/artist-photos/art-slide.jpg", alt: "Aine in hometown" },
      { src: "images/artist-photos/aine-slide-2.png", alt: "Aine outdoors" },
    ],
    3000
  );

  const petSlideshows = [
    {
      id: "pet-photography-slideshow",
      slides: [
        { src: "images/pet-photos/kilo-grey-black-bandana.jpg", alt: "Kilo, the black and white chihuahua posing with a grey and black bandana outside" },
        { src: "images/pet-photos/kilo-red-bandanna.jpg", alt: "Kilo, the black and white chihuahua posing with a red, orange, and black bandana outside" },
        { src: "images/pet-photos/kilo-cactus.jpg", alt: "Kilo, the black and white chihuahua posing next to a cactus outside" },
        { src: "images/pet-photos/kilo-bow.jpg", alt: "Kilo, the black and white chihuahua posing with a bow outside" },
      ],
    },
    {
      id: "nita-photography-slideshow",
      slides: [
        { src: "images/pet-photos/nita-layingdown.jpg", alt: "Nita a pitbull mix laying down outdoors posing for aclose up shot" },
        { src: "images/pet-photos/nita-highfive.jpg", alt: "Nita a pitbull mixgiving a high five" },
        { src: "images/pet-photos/nita-in-nature.jpg", alt: "Nita a pitbull mix enjoying a mountain view posing for a photo" },
        { src: "images/pet-photos/nita-laping-water.jpg", alt: "Nita lapping water" },
        { src: "images/pet-photos/nita-with-portrait.jpg", alt: "Nita a pitbull mix with kilo a black and white chihuahua beside a portrait canvas" },
      ],
    },
    {
      id: "mercy-photography-slideshow",
      slides: [
        { src: "images/pet-photos/mercy-in-grass.jpg", alt: "Mercy, the pitbull dog posing for a photo in the grass" },
        { src: "images/pet-photos/mercy-on-beach.jpg", alt: "Mercy, the pitbull dog posing for a photo on the beach" },
        { src: "images/pet-photos/mercy-playing.jpg", alt: "Mercy, the pitbull dog playing with a toy with her puppy" },
      ],
    },
    {
      id: "philly-photography-slideshow",
      slides: [
        { src: "images/pet-photos/philly-with-ball.jpg", alt: "Philly a pitbull mix playing fetch with a ball" },
        { src: "images/pet-photos/philly-star.jpg", alt: "Philly a pitbull mix wearing a star bandana" },
        { src: "images/pet-photos/philly-on-rock.jpg", alt: "Philly a pitbull mix posing for a photo on a rock" },
        { src: "images/pet-photos/philly.jpg", alt: "Philly outdoors" },
      ],
    },
    {
      id: "papi-photography-slideshow",
      slides: [
        { src: "images/pet-photos/papi-in-bushes2.jpg", alt: "Papi a brown chihuahua in the bushes wearing bandana" },
        { src: "images/pet-photos/papi-in-red-bandana.jpg", alt: "Papi a brown chihuahuawearing a red lion king  bandana" },
        { src: "images/pet-photos/papi-in-bushes.jpg", alt: "Papi a brown chihuahua posing for a photo in the bushes" },
        { src: "images/pet-photos/papi-with-brownbandana.jpg", alt: "Papi a brown chihuahua outdoors" },
      ],
    },
    {
      id: "puppies-photography-slideshow",
      slides: [
        { src: "images/pet-photos/puppy-philly1.jpg", alt: "Philly a tiny white with blue patches pitbull mix puppy outside on a rock posing for a photo at burney falls" },
        { src: "images/pet-photos/puppy-philly2.jpg", alt: "Philly a tiny white with blue patches pitbull mix puppy outside on a rock posing for a photo at burney falls" },
        { src: "images/pet-photos/puppy-philly3.jpg", alt: "Philly a white with blue patches pitbull mix puppy resting on a rock posing for a photo at burney falls" },
        { src: "images/pet-photos/kiba.jpg", alt: "Kiba a German Shepherd puppy outdoors in the grass posing for a photo" },
        { src: "images/pet-photos/lilbit1.jpg", alt: "Lil Bit a tiny grey pitbull puppy with a pink ribbon outdoors posing for a photo" },
        { src: "images/pet-photos/lilbit2.jpg", alt: "Lil Bit a tiny grey pitbull puppy with a pink ribbon outdoors posing for a photo" },
        { src: "images/pet-photos/copper1.jpg", alt: "Copper a tiny black pitbull puppy outdoors posing for a photo" },
        { src: "images/pet-photos/copper2.jpg", alt: "Copper a tiny black pitbull puppy outdoors posing for a photo" },
      ],
    },
  ];

  petSlideshows.forEach(({ id, slides }) => {
    startSlideshow(document.getElementById(id), slides, 5000);
  });
})();
