const maindarkmode=document.querySelector("div.MainDarkMode");
modeToggle=document.querySelector("div.Darkmode");

modeToggle.addEventListener("click", ()=> {
    modeToggle.classList.toggle("active");
    maindarkmode.classList.toggle("dark");
    })
    