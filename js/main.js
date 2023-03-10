// let allImage = document.querySelectorAll("#section img");
// let editImage = document.querySelector(".img-edit img");
// allImage.forEach((img) => {
//   img.addEventListener("click", () => {
//     editImage.src = img.src;
//   })
// });



		function passValue1 () {
			let text = document.querySelector("#text1").value;
			let image = document.querySelector("#img1").src;
			localStorage.setItem("textValue", text);
			localStorage.setItem("img", image);
			return false;
		}
		function passValue2 () {
			let text = document.querySelector("#text2").value;
			let image = document.querySelector("#img2").src;
			localStorage.setItem("textValue", text);
			localStorage.setItem("img", image);
			return false;
		}
		function passValue3 () {
			let text = document.querySelector("#text3").value;
			let image = document.querySelector("#img3").src;
			localStorage.setItem("textValue", text);
			localStorage.setItem("img", image);
			return false;
		}
		function passValue4 () {
			let text = document.querySelector("#text4").value;
			let image = document.querySelector("#img4").src;
			localStorage.setItem("textValue", text);
			localStorage.setItem("img", image);
			return false;
		}

// category btns
let categoryBtns = document.querySelectorAll(".category-btn button");
// kind btns
let kindBtns = document.querySelectorAll(".kind-btn button");
// all category
let allCategory = document.querySelectorAll("#cards");
// all kind
let allKind = document.querySelectorAll("#card");
// all category btn
let allCategoryBtn = document.querySelector(".all-cards");
// all kind btn
let allKindBtn = document.querySelector(".all-card");
let filterButtonGroup = document.querySelectorAll(".filter-button-group button");


// add active class function for // category btns
addActiveClass(categoryBtns);

// add active class function for // kind btns
addActiveClass(kindBtns);

// Double filter category and kind function
doubleFilter(filterButtonGroup, allCategory, allKind);

// show all category function
showAllCAndF(allCategoryBtn, allCategory)

// show all category function
showAllCAndF(allKindBtn, allKind)

// add active class function 
function addActiveClass(list) {
  list.forEach((btn) => {
    btn.addEventListener ("click", () => {
        list.forEach((btns) => {
            btns.classList.remove("active")
        })
        btn.classList.add("active");
    })
})
}
// add active class function end

// Double filter category and kind function    ftr => filter
function doubleFilter(btns, ftr1, ftr2) {
  let tem;
  btns.forEach((btn) => {
	btn.addEventListener("click", () => {
		tem = btn.getAttribute("data-filter");
      if (tem === "squar" || tem === "rectan") {
		 ftr1.forEach((cat) => {
			cat.classList.add("none");
			if (tem === cat.getAttribute("data-filter")) {
				cat.classList.remove("none")
			}
		})
	  } else if (tem === "bairam" || tem === "fast" || tem === "anthor") {
		  ftr2.forEach((ki) => {
			  ki.classList.add("none");
			  if (tem === ki.getAttribute("data-filter")) {
				  ki.classList.remove("none");
			  }
		  })
	  }
		  
	})
})
}

// Show all category or kind or both function
function showAllCAndF(btn, ftr) {
  btn.addEventListener("click", () => {
    ftr.forEach((cat) => {
      cat.classList.remove("none");
  })
})
}
