const menuItem = $(".ctrl-menu .ctrl-menu-item");
const initSetting = anime({
    targets: menuItem.toArray(),
    translateY: anime.stagger(-50, { start: -50 }),
});
const extendMenu = () => {
    $(".ctrl-menu").show();
    menuExtenderState = "open";
    $("#ctrl-menu-extender").addClass("ctrl-menu-extender-open");
    anime({
        targets: menuItem.toArray(),
        translateY: 0,
    });
};
const closeMenu = () => {
    $("#ctrl-menu-extender").removeClass("ctrl-menu-extender-open");
    let anim = anime({
        targets: menuItem.toArray(),
        translateY: anime.stagger(-50, { start: -50 }),
        duration: 400,
        update: (anim) => {
            if (menuExtenderState === "closed") {
                anim.pause();
            }
        },
        complete: (anim) => {
            $(".ctrl-menu").hide();
            menuExtenderState = "closed";
        },
    });
};

let menuExtenderState = "closed";
$("#ctrl-menu-extender").click(() => {
    if (menuExtenderState === "closed") {
        extendMenu();
        return;
    }
    if (menuExtenderState === "open") {
        closeMenu();
        return;
    }
});
