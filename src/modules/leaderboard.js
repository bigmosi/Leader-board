const scores = [
  { name: 'Kinyera Amos', score: 100 },
  { name: 'Okello Andrew', score: 50 },
  { name: 'Kilama Patrick', score: 40 },
  { name: 'Akena Amos', score: 55 },
  { name: 'Ojok Denis', score: 100 },
  { name: 'Akello Barbra', score: 50 },
  { name: 'Apiyo Patrica', score: 77 },
  { name: 'Okeng Alice', score: 15 },
];

const board = scores.reduce((prev, current) => {
  prev += `<li>${current.name} ${current.score}</li>`;
  return prev;
}, '');

export default board;