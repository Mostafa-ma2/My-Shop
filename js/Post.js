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
/// Change the kala for Nazar
var kala = document.getElementById("kala");
var nazar = document.getElementById("nazar");
kala.addEventListener("click", function() {
    Openkala(this);
});
nazar.addEventListener("click", function() {
    Closekala(this);
});

function Openkala(obj) {
    var active = "active";
    nazar.classList.remove(active);
    obj.classList.add(active);
    var attr = nazar.getAttribute("attr");
    var nazars = document.getElementsByClassName(attr)[0];
    nazars.style.display = "none";
    var att = obj.getAttribute("attr");
    var kal = document.getElementsByClassName(att)[0];
    kal.style.display = "flex";
}

function Closekala(obj) {
    var active = "active";
    kala.classList.remove(active);
    obj.classList.add(active);
    var attr = kala.getAttribute("attr");
    var kalas = document.getElementsByClassName(attr)[0];
    kalas.style.display = "none";
    var att = obj.getAttribute("attr");
    var nazars = document.getElementsByClassName(att)[0];
    nazars.style.display = "block";
}