var catContainer = document.getElementById("kat-koral");

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