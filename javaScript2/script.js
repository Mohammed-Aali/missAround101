{
  let before = new Date(2023, 0, 25);
  let after = new Date(2023, 1, 20);

  let oneDay = 1000 * 60 * 60 * 24;
  let time = (after - before) / oneDay
  console.log(time)
}