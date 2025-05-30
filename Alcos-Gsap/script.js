const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

const nav_tl = gsap.timeline();
const hero_tl = gsap.timeline();

nav_tl.from(".logo_setup", {
  y: -200,
  duration: 1,
  delay: 0.5,
  filter: "blur(10px)",
});

nav_tl.from("#menu ul li", {
  y: -50,
  duration: 0.5,
  color: "#000",
  stagger: 0.2,
  opacity: 0,
});
hero_tl.from(
  ".hero-text",
  {
    x: -500,
    delay: 1,
    opacity: 0,
    duration: 1,
    filter: "blur(10px)",
    ease: "expo.out",
  },
  "same"
);
hero_tl.from(
  "button.neon-button",
  {
    x: -500,
    opacity: 0,
    ease: "power2.out",
    duration: 0.3,
    stagger: 0.2,
  },
  "-=0.5"
);
hero_tl.from(
  ".tags",
  {
    x: -200,
    duration: 0.5,
    stagger: 0.3,
    opacity: 0,
  },
  "-=0.5"
);
hero_tl.from(
  ".para",
  {
    x: 200,
    filter: "blur(10px)",
  },
  "-=0.8"
);
hero_tl.from(".blurry_bg", {
  opacity: 0,
  duration: 0.5,
});
hero_tl.from(
  ".robot",
  {
    scale: 0,
    duration: 1,
    opacity: 0,
    filter: "grayscale(20)",
  },
  "same"
);
hero_tl.from(
  ".trusted-brands",
  {
    y: -100,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    filter: "grayscale(20)",
  },
  "same"
);
