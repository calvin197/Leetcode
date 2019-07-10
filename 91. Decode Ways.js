var numDecodings = function(s) {
  if (s[0] === "0") return 0;
  let storage = {};
  for (let i = s.length; i >= 0; i--) {
    if (i === s.length) storage[i] = 1;
    else {
      storage[i] =
        (typeof storage[i + 1] === "number" &&
        Number(s.slice(i, i + 1)) <= 26 &&
        Number(s.slice(i, i + 1)) > 0 &&
        s.slice(i, i + 1)[0] !== "0"
          ? storage[i + 1]
          : 0) +
        (typeof storage[i + 2] === "number" &&
        Number(s.slice(i, i + 2)) <= 26 &&
        Number(s.slice(i, i + 2)) > 0 &&
        s.slice(i, i + 2)[0] !== "0"
          ? storage[i + 2]
          : 0);
    }
  }
  return storage[0];
};
