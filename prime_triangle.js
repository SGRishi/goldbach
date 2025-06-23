function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  const r = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= r; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function generatePairs(maxN) {
  const data = [];
  for (let N = 4; N <= maxN; N += 2) {
    const pairs = [];
    for (let p = 2; p <= N / 2; p++) {
      if (isPrime(p) && isPrime(N - p) && p <= N - p) {
        pairs.push([p, N - p]);
      }
    }
    data.push({ N, pairs });
  }
  return data;
}

function drawPrimeTriangle() {
  const canvas = document.getElementById('primeTriangle');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const data = generatePairs(28); // even numbers 4..28
  const maxPairs = Math.max(...data.map(d => d.pairs.length));
  const cell = 30;
  canvas.width = data.length * cell;
  canvas.height = (maxPairs + 2) * cell;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#333';
  ctx.font = '12px sans-serif';

  data.forEach((d, i) => {
    ctx.fillText(d.N, i * cell + cell / 4, canvas.height - 4);
    d.pairs.forEach((pair, j) => {
      ctx.beginPath();
      ctx.arc(i * cell + cell / 2, canvas.height - cell * (j + 1) - 5, 5, 0, Math.PI * 2);
      ctx.fill();
    });
  });
}

if (typeof window !== 'undefined') {
  window.drawPrimeTriangle = drawPrimeTriangle;
}
