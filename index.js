const displayExpertise = async () => {
    const template = document.querySelector("template#expertiseValueElement");
    const statCont = document.querySelector(".rangeGroups");
    const dataRaw = await fetch("/src/expertiseData.json");
    const data = await dataRaw.json();
    data.forEach((e) => {
        let item = template.content.cloneNode(true);
        item.querySelector(".progress").style.width = e.value + "%";
        // item.querySelector(".icon").textContent = e.name;
        const img = document.createElement("img");
        img.title = e.name;
        img.alt = e.name;
        img.src = e.icon;
        item.querySelector(".icon").appendChild(img);
        item.querySelector(".value").textContent = e.value + "%";
        statCont.appendChild(item);
    });
};
const displayProjects = async () => {
    const template = document.querySelector("template#projectBoxTemplate");
    const projectCont = document.querySelector(".projectCont1");
    const dataRaw = await fetch("/src/projects/projects.json");
    const data = await dataRaw.json();
    data.forEach((e) => {
        let item = template.content.cloneNode(true);
        item.querySelector("a").href = e.link;
        item.querySelector(".cover img").src = e.cover;
        item.querySelector(".title").textContent = e.title;
        projectCont.appendChild(item);
    });
};
const projectScroll = () => {
    const projectCont = document.querySelector(".projectCont1");
    projectCont.addEventListener("mousewheel", (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.scrollBy({ left: e.deltaY < 0 ? -40 : 40, top: 0 });
    });
    const leftButton = document.querySelector(".projectCont .left");
    const rightButton = document.querySelector(".projectCont .right");
    const scrollLength = projectCont.clientWidth;
    leftButton.addEventListener("click", () => {
        projectCont.scrollBy({
            left: -scrollLength / 1.5,
            top: 0,
            behavior: "smooth",
        });
    });
    rightButton.addEventListener("click", () => {
        projectCont.scrollBy({
            left: scrollLength / 1.5,
            top: 0,
            behavior: "smooth",
        });
    });
};
const navBarFunctions = () => {
    const currentTaBIndicator = document.querySelector(".nav .currentSection");
    const homeLink = {
        left: document.querySelector(".nav a[href='#home']").offsetLeft,
        width: document.querySelector(".nav a[href='#home']").clientWidth,
    };
    currentTaBIndicator.style.width = homeLink.width + "px";
    currentTaBIndicator.style.left = homeLink.left + "px";
    const aboutLink = {
        left: document.querySelector(".nav a[href='#about']").offsetLeft,
        width: document.querySelector(".nav a[href='#about']").clientWidth,
    };
    const expertiseLink = {
        left: document.querySelector(".nav a[href='#expertise']").offsetLeft,
        width: document.querySelector(".nav a[href='#expertise']").clientWidth,
    };
    const projectsLink = {
        left: document.querySelector(".nav a[href='#projects']").offsetLeft,
        width: document.querySelector(".nav a[href='#projects']").clientWidth,
    };
    const contactLink = {
        left: document.querySelector(".nav a[href='#contact']").offsetLeft,
        width: document.querySelector(".nav a[href='#contact']").clientWidth,
    };
    const nav = document.querySelector(".nav");
    let initScroll = window.scrollY;
    document.addEventListener("scroll", (e) => {
        let currentScroll = window.scrollY;
        if (currentScroll < initScroll) {
            nav.classList.remove("hidden");
        }
        if (currentScroll > initScroll) {
            nav.classList.add("hidden");
        }
        initScroll = currentScroll;
        const currentTab = document.elementFromPoint(0, window.innerWidth / 2);
        if (currentTab.tagName === "SECTION") {
            if (currentTab.id === "home") {
                currentTaBIndicator.style.width = homeLink.width + "px";
                currentTaBIndicator.style.left = homeLink.left + "px";
            }
            if (currentTab.id === "about") {
                currentTaBIndicator.style.width = aboutLink.width + "px";
                currentTaBIndicator.style.left = aboutLink.left + "px";
            }
            if (currentTab.id === "expertise") {
                currentTaBIndicator.style.width = expertiseLink.width + "px";
                currentTaBIndicator.style.left = expertiseLink.left + "px";
            }
            if (currentTab.id === "projects") {
                currentTaBIndicator.style.width = projectsLink.width + "px";
                currentTaBIndicator.style.left = projectsLink.left + "px";
            }
            if (currentTab.id === "conatact") {
                currentTaBIndicator.style.width = conatactLink.width + "px";
                currentTaBIndicator.style.left = conatactLink.left + "px";
            }
        }
    });
};
navBarFunctions();
displayExpertise();
displayProjects();
projectScroll();
