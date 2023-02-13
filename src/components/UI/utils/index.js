function getTransitionValue(element) {
  let { transitionDuration, transitionDelay } =
    window.getComputedStyle(element);

  const floatTransitionDuration = Number.parseFloat(transitionDuration);
  const floatTransitionDelay = Number.parseFloat(transitionDelay);

  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  }

  return (floatTransitionDuration + floatTransitionDelay) * 1000;
}

export function queueCallback(callback, element) {
  const transition = getTransitionValue(element);
  setTimeout(callback, transition);
}
