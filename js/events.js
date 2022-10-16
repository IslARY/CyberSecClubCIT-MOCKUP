 "use strict";

// Rendering EVENT INFO HERE

let container = document.getElementById('timeline-container');
//import Events from "../docs/events.json" assert {type: 'json'}; //Doesn't work in FireFox
fetch("../docs/events.json")
	.then((res)=>res.json())
	.then((data)=>{
		let Events = data;
		console.log(Events)
let count = Events.length;
let store = Events.map((item)=>{
	return `
        <ul>
				<li>
					<div id="timeline-content" class="timeline-content">
          <h3 class="open-sans line-gap">Event ${count--}</h3>
          <h2 class="dosis">${item.title}</h2>
          <h4 class="dosis line-gap">${item.date}</h4>
          <p class="open-sans line-gap">${item.description}</p>
					</div>
				</li>
			</ul>
	`  
})

store.forEach((item)=>{container.innerHTML += item})

});