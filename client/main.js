// The following code appends a title to the page
// document.createElement creates an element that can be altered and then inserted into the DOM
// document.body.appendChild places a node as a child under the body element
const title = document.createElement('div');
title.innerText = 'Social Calendar';
document.body.appendChild(title);

//selectors
const calendar = document.querySelector('.calendar');

// Your schedule can be accessed through the global object "schedule"
console.log(schedule);


//calculate number of weeks we need to account for
let totalWeeks = schedule[schedule.length - 1]['week']

//CREATE AND APPEND TO SCHEDULE PLACEHOLDERS "no events scheduled" to calendar
//EVENT ID is -> week# + day ie... '1monday'
const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
function addPlaceholder (week) {
  days.forEach(day => {
    const event = document.createElement('div');
    event.innerText = 'no events scheduled';
    event.className = day;
    event.setAttribute('id', day + week)
    calendar.appendChild(event);
  });
}

//create events equal to number of weeks
function addWeeks () {
  for (let i = 1; i <= totalWeeks; i++) {
    addPlaceholder(String(i));
  }
}

addWeeks();

//Replace placeholders with events stored.
function addEvent(event) {
  const week = String(event['week']);
  const day = event['day'].toLowerCase();
  const target = document.querySelector(`#${day}${week}`);
  //add challenge for event into insert text.
  let eventText = event['challenge'];
  
  //add goals to insert text.
  event['goals'].forEach((goal, idx) => {
    eventText += '\n' + `${idx + 1}. ` + goal;
  });

  //replace placeholder text of target element with new insert text;
  target.innerText = eventText;
}

//Call addEvent on each event on our schedule
schedule.forEach(event => {
  addEvent(event);
})

