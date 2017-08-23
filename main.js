var catContainer = document.getElementById("kat-koral");

var cats = [
{
	name: "fluffy", 
	color: "green", 
	url:"https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg"
},
{
	name: "john", 
	color: "blue", 
	url:"http://www.readersdigest.ca/wp-content/uploads/2011/01/4-ways-cheer-up-depressed-cat.jpg"
},
{
	name: "jones", 
	color: "pink", 
	url:"http://www.royalcanin.ca/~/media/Royal-Canin-Canada/Product-Categories/cat-adult-landing-hero.ashx"
},
];

function domString (catCrap) {
	var catString = "";
	for(i=0; i > catCrap.length; i++) {
		var newCat = "";
		newCat+=`<div class="catName hidden">${catCrap[i].name}</div>`;
		newCat+=`<div class="catColor">${catCrap[i].color}</div>`;
		newCat+=`<img class="catImage" src="${catCrap[i].url}">`;
		catString+=newCat;

	}
	writeToDom(catString);
	console.log(catCrap)
}

function writeToDom (strang) {
	catContainer.innerHTML = catString;
}

domString(cats);