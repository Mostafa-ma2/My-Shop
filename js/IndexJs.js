//Search Input
var inputSearch = document.getElementById("Serch-Input");
var textSearch = document.getElementById("Serch-text");
inputSearch.addEventListener("keyup", function() {
    Searches(this);
});

function Searches(obj) {
    if (obj.value == "") {
        textSearch.style.display = "block";
    } else {
        textSearch.style.display = "none";
    }
}
/// Group
var OpenGroup = document.getElementById("OpenGroup");
var ListGroup = document.getElementsByClassName("List-Group")[0];
var ListGroups = document.getElementById("List-Group");
var Groupitem = document.getElementsByClassName("Group-item");
OpenGroup.addEventListener("mousemove", OpenListGroup);

function OpenListGroup() {
    ListGroup.style.display = "block";
}

for (var i = 0; i < Groupitem.length; i++) {
    Groupitem[i].addEventListener("mouseover", function() {
        OpenItem(this);
    });
}

function OpenItem(obj) {
    obj.classList.add("Group-item-action");
    var n = obj.getElementsByClassName("fa fa-circle-o");
    for (var i = 0; i < n.length; i++) {
        n[i].classList.add("fa-circle");
    }

    var s = obj.getAttribute("attribute");
    var groupsitem = document.getElementsByClassName(s)[0];
    groupsitem.style.display = "grid";
    groupsitem.classList.add("item-action");
}
for (var i = 0; i < Groupitem.length; i++) {
    Groupitem[i].addEventListener("mouseleave", function() {
        Outitem(this);
    });
}

function Outitem(obj) {
    obj.classList.remove("Group-item-action");
    var n = obj.getElementsByClassName("fa fa-circle");
    for (var i = 0; i < n.length; i++) {
        n[i].classList.remove("fa-circle");
    }
    var s = obj.getAttribute("attribute");
    var groupsitem = document.getElementsByClassName(s)[0];
    groupsitem.style.display = "none";
    groupsitem.classList.remove("item-action");
}
/// Exits the Group item
var Exit = document.getElementById("list-item");
Exit.addEventListener("mouseleave", Exits)


function Exits(obj) {
    Exit.style.display = "none";
}
/////////////////////////////////////////////////////////// Change main Post Next
var ChangePhotosNext = document.getElementsByClassName("ChangePhotosNext");
for (var i = 0; i < ChangePhotosNext.length; i++) {
    ChangePhotosNext[i].addEventListener("click", function() {
        NextPost(this);
    });
};

function NextPost(obj) {
    var s = obj.getAttribute("attr");
    var img1 = document.getElementById(s);
    img1.style.display = "none";
    var l = obj.getAttribute("href")
    var image2 = document.getElementById(l);
    image2.style.display = "flex";
}
/////////////////////////////////////////////////////////// Change main Post Back
var ChangePhotosBack = document.getElementsByClassName("ChangePhotosBack");
for (var i = 0; i < ChangePhotosBack.length; i++) {
    ChangePhotosBack[i].addEventListener("click", function() {
        BackPost(this);
    });
};

function BackPost(obj) {
    var s = obj.getAttribute("attr");
    var img1 = document.getElementById(s);
    img1.style.display = "none";
    var l = obj.getAttribute("href")
    var image2 = document.getElementById(l);
    image2.style.display = "flex";
}
//// Rispansiv
var Menue = document.getElementById("Rmenue");
var MainList = document.getElementsByClassName("main-List")[0];
Menue.addEventListener("click", display)

function display() {
    if (MainList.style.display == "table-column-group") {
        MainList.style.display = "none";
        var continer = document.getElementsByClassName("lm")[0];
        continer.classList.add("container");
    } else {
        MainList.style.display = "table-column-group";
        var continer = document.getElementsByClassName("lm")[0];
        continer.classList.remove("container");
    }
}