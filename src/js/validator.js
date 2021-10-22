export default function validator(value) {
  let sum = 0;
  let isEven = false;
  for (let i = 15; i >= 0; i -= 1) {
    let figure = parseInt(value.charAt(i), 10);
    if (isEven) {
      figure *= 2;
      if (figure > 9) {
        figure -= 9;
      }
    }
    sum += figure;
    isEven = !isEven;
  }
  return (sum % 10) === 0;
}
