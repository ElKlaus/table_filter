const filterFrom = document.getElementById('search_from');
const filterTo = document.getElementById('search_to');
const rows = document.querySelectorAll('tbody tr');
const priceCells = document.querySelectorAll("#table_body > tr");
// const priceCells = document.querySelectorAll("#table_body > tr > td:nth-child(3)");

/*
const courses = [
  { name: "Courses in England", prices: [0, 100] }, 
  { name: "Courses in Germany", prices: [500, null] }, 
  { name: "Courses in Italy", prices: [100, 200] }, 
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

priceCells.forEach((item) => {
  const ceilFrom = item.querySelectorAll("td:nth-child(2)");
  const ceilTo = item.querySelectorAll("td:nth-child(3)");


  const values = Object.values(ceilFrom);
  
  console.log(typeof values[0]);
})
*/


filterFrom.addEventListener('keyup', function(event) {
  const target = event.target;
  const currentFrom = target.value;
  const currentTo = filterTo.value ? filterTo.value : Infinity;

  console.log(currentFrom, currentTo);

  rows.forEach(row => {
    const price = row.querySelectorAll("td:nth-child(2)")[0].innerHTML;

    Number(price) >= Number(currentFrom) && Number(price) <= Number(currentTo)
    ? row.style.display = 'table-row'
    : (row.style.display = 'none');
  })
});


filterTo.addEventListener('keyup', function(event) {
  const target = event.target;
  const currentFrom = filterFrom.value ? filterFrom.value : 0;
  const currentTo = target.value ? target.value : Infinity;

  console.log(currentFrom, currentTo);

  rows.forEach(row => {
    const price = row.querySelectorAll("td:nth-child(3)")[0].innerHTML;

    Number(price) >= Number(currentFrom) && Number(price) <= Number(currentTo)
    ? row.style.display = 'table-row'
    : (row.style.display = 'none');
  })
});
