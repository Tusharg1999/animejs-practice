function play() {
  anime({
    targets: "div.box.red",
    translateY: [
      { value: 100, duration: 300 },
      { value: 0, duration:500 }
    ],
    borderRadius:['0%','50%','0%'],
    easing:'easeInOutQuad',
    scaleY:[2,1],
    scaleX:[2,1]
  });
}
