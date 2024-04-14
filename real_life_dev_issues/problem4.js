// tooltip


const btn = document.querySelector("#hide");
const tooltip = document.querySelector("#tooltip");

btn.addEventListener('mouseover', (e)=> {
    tooltip.style.display = "block";
})

btn.addEventListener('mouseout', (e)=> {
    tooltip.style.display = "none"
});