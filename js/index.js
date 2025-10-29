const element = document.querySelector(".item");
const onEntry = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("modified")
        };
    });
};
const observer = new IntersectionObserver(onEntry);
observer.observe(element)
