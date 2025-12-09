document.addEventListener("scroll", () => {
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const progress = (scrollTop / scrollTotal) * 100;

    document.querySelector("footer").style.width = progress + "%";
});
