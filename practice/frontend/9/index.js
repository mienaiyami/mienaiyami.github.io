$("#openBackThisProject").on("click", () => {
    $(".modelSelect-cont").fadeIn();
    $(".modelSelect").on("click", (e) => {
        e.stopImmediatePropagation();
    });
    $(".modelSelect-cont").on("click", () => {
        $(".modelSelect-cont").fadeOut();
    });
});
$("#closeBackThisProject").on("click", () => {
    $(".modelSelect-cont").fadeOut();
});
$(".pledgeItemCont").on("click", (e) => {
    setTimeout(() => {
        $(e.currentTarget).find(".selectedPledge .inputCont input")[0]?.focus();
    }, 500);
});
$(
    "body > section.modelSelect-cont > div > label > div.selectedPledge > button"
).on("click", (e) => {
    $(".modelSelect-cont").fadeOut();
    $(".successModal").fadeIn();
});
$(".successModal").on("click", () => {
    $(".successModal").fadeOut();
});
$(".successModal .success").on("click", (e) => {
    e.stopImmediatePropagation();
});
$(".successModal .success .btn").on("click", () => {
    $(".successModal").fadeOut();
});
