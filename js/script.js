//toggle
const toggleButton = document.getElementById('toggleButton')
const navbarLinks = document.getElementById('navbarLinks')

toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
})
//count
// document.addEventListener("DOMContentLoaded", function() {
//     const counters = document.querySelectorAll('.count');
//     const speed = 200; 

//     counters.forEach(counter => {
//         const updateCount = () => {
//             const target = +counter.getAttribute('data-count');
//             const count = +counter.innerText;

            
//             const inc = target / speed;

//             if (count < target) {
                
//                 counter.innerText = Math.ceil(count + inc);
                
//                 setTimeout(updateCount, 1);
//             } else {
//                 counter.innerText = target;
//             }
//         };

//         updateCount();
//     });
// });
