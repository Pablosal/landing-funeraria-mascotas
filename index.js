const button = document.getElementById("boton");

const calculator = document.getElementById("mascota");
const response = {
  1: "$65.000",
  2: "$85.000",
  3: "$125.000",
  4: "$205.000"
};
const FuneralValue = text => {
  document.getElementById("res").innerText = text;
};

button.onclick = () => FuneralValue(response[calculator.value]);
//**

const firstTween = gsap
  .timeline()
  .from("#main-title", { y: -200, duration: 2 })
  .from("#main-subtitle", { opacity: 0, duration: 2 });

const secondTween = gsap
  .timeline()
  .from("#box", { opacity: 0, duration: 0.5, x: 500, ease: "back" })
  .from("#doggy", { x: -500, duration: 2, ease: "back" })
  .from("#doggyText", { opacity: 0 });
const thirdTween = gsap.timeline().from("#neromorph", {
  // y: 760,
  stagger: 0.1,
  duration: 0.8,
  ease: "back",
  duration: 1
});
const fouthTween = gsap.timeline().from("#neromorph", {
  y: 760,
  stagger: 0.1,
  duration: 0.8,
  ease: "back",
  duration: 1
});
const fifthTween = gsap
  .timeline()
  .from("#pseudoS", {
    y: 760,
    stagger: 0.1,
    duration: 0.8,
    ease: "back",
    duration: 1
  })
  .from("#pseudoT", {
    y: 760,
    stagger: 0.1,
    duration: 0.8,
    ease: "back",
    duration: 1
  });

var controller = new ScrollMagic.Controller();
var sceneDog = new ScrollMagic.Scene({
  triggerElement: "#stage"
})
  .setTween(secondTween) // trigger a TweenMax.to tween
  .addIndicators({ name: "1 (duration: 0)" }) // add indicators (requires plugin)
  .reverse(false)
  .addTo(controller);
var sceneNeuro = new ScrollMagic.Scene({
  triggerElement: "#stage2"
})
  .setTween(thirdTween) // trigger a TweenMax.to tween
  .addIndicators({ name: "1 (duration: 0)" }) // add indicators (requires plugin)
  .reverse(false)
  .addTo(controller);
var scenePseudo = new ScrollMagic.Scene({
  triggerElement: "#stage3"
})
  .setTween(fouthTween) // trigger a TweenMax.to tween
  .addIndicators({ name: "1 (duration: 0)" }) // add indicators (requires plugin)
  .reverse(false)
  .addTo(controller);
var scenePse = new ScrollMagic.Scene({
  triggerElement: "#stage4"
})
  .setTween(fifthTween) // trigger a TweenMax.to tween
  .addIndicators({ name: "1 (duration: 0)" }) // add indicators (requires plugin)
  .reverse(false)
  .addTo(controller);
