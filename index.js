$().ready(() =>{


  getDateAndTime();


})


function getDateAndTime() {
  let date=moment().format('LLLL');
  let dateH2=$(`<h2 id='day' class='day'>${date}<h2>`)
  dateH2.appendTo($('#date-time'));
}
// getDateAndTime();