//嘿嘿这一段是学习别人的写法的，应该不会被sania发现吧o(*￣▽￣*)ブ
function random(numbers, ...args) {
  if (numbers === null || numbers === void 0) {
    return Math.random();
  }
  if (Array.isArray(numbers)) {
    return numbers[Math.floor(Math.random() * numbers.length)];
  }
  if (args.length > 1) {
    numbers = [numbers].concat(args);
    return numbers[Math.floor(Math.random() * numbers.length)];
  }
  const min = numbers;
  const max = args[0];
  return Math.random() * (max - min) + min;
}
 
function isMobile() {
  const toMatch = [
    /Windows Phone/i,
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
  ];
  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}
