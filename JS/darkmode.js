const section=document.querySelector("section");
modeToggle=document.querySelector("div.Darkmode");

modeToggle.addEventListener("click", ()=> {
    modeToggle.classList.toggle("active");
    section.classList.toggle("dark");
    })
    