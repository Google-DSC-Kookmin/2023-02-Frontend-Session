function counter() {
  let count = 0;
  while (count <= 10000) {
    count++;
    if (count % 100 === 0) {
      console.log(count);
    }
  }
}

counter();