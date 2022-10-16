
//Handling Scroll Animations Using Gsap
gsap.registerPlugin(ScrollToPlugin)
let about_us = document.getElementById("about-us");
about_us.addEventListener("click",function(){
	gsap.to(window, {duration:1, scrollTo:{y: "#about-div", autoKill: true}})
})

let faculty = document.getElementById("faculty");
faculty.addEventListener("click",function(){
	gsap.to(window,{duration:1, scrollTo:{y:"#faculty-div", autoKill: true}})
})

let members = document.getElementById("members");
members.addEventListener("click",function(){
	gsap.to(window,{duration:1, scrollTo:{y:"#member-div", autoKill: true}})
})

let home = document.getElementById("home");
home.addEventListener("click",function(){
	gsap.to(window,{duration:1, scrollTo:{y:0, autoKill: true}})
})

let nav = document.getElementById("navbar");
let burger = document.getElementById("burger");

window.addEventListener("scroll", function(){
		nav.classList.toggle("nav-style-add", window.scrollY != 0);
		burger.classList.toggle("burger-white", window.scrollY != 0);
})

// LOAD-MORE BUTTON
let load_more = document.getElementById("load-more");
let title_post = document.getElementById("title-post")
let displayed_items = 0;
let clicked = true;
load_more.onclick = ()=>{
	if(clicked){
		title_post.innerHTML += `<h4 class="post-title dosis">Coordinators</h4>`;
		clicked = false;
	}
	let items = [...document.getElementsByClassName('hide')];
	for(let i=displayed_items;i<displayed_items+3;i++){
		if(items[i]){
			items[i].style.display = "inline-block";
		}
	}
	displayed_items += 3;
	if(displayed_items >= items.length){
		load_more.style.display = "none";
	}
}


// RENDERING COORDINATORs
let coordinator_list = document.getElementById("co-list");
//import coordinators from "../docs/coordinators.json" assert {type: 'json'}; // X Firefox
fetch("./docs/coordinators.json") //Path is Relative to its corresponding HTML
.then((res) => res.json())
.then((data) => {
	let coordinators = data;
	let update_users = coordinators.map((user)=>{
		return `<div class="member-card hide open-sans">
							<img src="${user.img}" alt="Co-founder">
							<section class="info-card">
								<h2 class="dosis">${user.firstname}</h2>
								<h3>${user.post}</h3>
								<h4>${user.module}</h4>
								<h4>Contact:${user.contact}</h4>
								<h4>Mail: ${user.mail}</h4>
							</section>
					</div>
				`
	});
update_users.forEach((item)=>{ coordinator_list.innerHTML += item})
})
//END

//RENDERING LATEST EVENT
//import Events from "../docs/events.json" assert {type: 'json'}; // X Firefox
fetch("./docs/events.json")
.then((res)=> res.json())
.then((data)=>{
	let Events = data;
	let latest = Events[0];
	let event_div = document.getElementById("event-container");
	event_div.innerHTML += `<h2 class = "dosis">${latest.title}</h2>
							<h3>${latest.date}</h3>
							<p>${latest.description}</p>
						`
})

//END

//BURGER TOGGLE
const navToggle = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-list');
	burger.addEventListener('click',()=>{
		nav.classList.toggle('nav-active');
	});
}
navToggle();