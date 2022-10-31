let lin = document.getElementById("lik")
let ul = document.getElementById("lis")
let typ = document.getElementById("co")
let miy = document.getElementById("min")
let ki = document.getElementById("kin")
let bo = document.getElementById("bod")
let c = 0;
lin.onclick = function() {
    ul.style.display = "block";
};
typ.onclick = function() {
    ul.style.display = "none";
}
bo.onclick = function() {
    ul.style.display = "none";
}
ki.onclick = function() {
    c++;
    miy.style.display = "block";
    if (c === 2) {
        c = 0;
        miy.style.display = "none";
    }

}