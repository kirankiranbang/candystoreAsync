console.log("page is ready");
var take_input=document.getElementById("take_input");
var save_value=document.getElementById("save_value");

var localstorage_value=document.getElementById("localstorage_value")
var read_localstorage=document.getElementById("read_localstorage")
var delete_loalstorage=document.getElementById("delete_data")
var     edit_localstorage= document.getElementById("edit_localstorage")

save_value.onclick=function()
{
  localStorage.setItem("name",  JSON.stringify(take_input.value));           //name=kir
}

read_localstorage.onclick=function()
{
  localstorage_value.textContent=localStorage.getItem("name");
}

delete_loalstorage.onclick=function()
{
  localStorage.removeItem("name")
}

edit_localstorage.onclick=function()
{
  localStorage.getItem("name.value")
}

