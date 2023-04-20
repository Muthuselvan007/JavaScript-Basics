let a = 0;
let b = 50;
for (let index = 1; index <= b; index++) {
    console.log(b);
}
for (let i = 1; i < 6; i++) {
    console.log(i);
}

// without initializer
let apple = 1;
for (; apple < 10; apple += 2) {
    console.log(apple);
}
// without condition
for (let pen = 1; ; pen += 3) {
    console.log(pen);
    if (pen > 8) {
        break;
    }
}
// without loop Body
let get = 0;
for (let i = 10; i <= 20; i++, get += i);
console.log(get);

//loop with Nothing inside
let j = 1;
for (;;) {
  if (j > 10) {
    break;
  }
  console.log(j);
  j += 3;
}


