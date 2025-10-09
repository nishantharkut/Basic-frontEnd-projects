// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry);
//         if (entry.isIntersecting){
//             entry.target.classList.add('show');
//             entry.target.classList.add('show-horizontal');
//         }
//         else {
//             entry.target.classList.remove('show');
//             entry.target.classList.remove('show-horizontal');
//         }
//     });
// });

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting){
            // Only add the appropriate class based on the element type
            if (entry.target.classList.contains('hidden-horizontal')) {
                entry.target.classList.add('show-horizontal');
            } else if (entry.target.classList.contains('hidden')) {
                entry.target.classList.add('show');
            }
        }
        else {
            entry.target.classList.remove('show');
            entry.target.classList.remove('show-horizontal');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden, .hidden-horizontal');
hiddenElements.forEach((el) => {
    observer.observe(el);
})

