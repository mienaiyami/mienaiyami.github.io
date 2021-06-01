const slider = document.querySelector("#price-slider");
const checkMorY = document.querySelector("#toggleym");
const views = document.querySelector("#views");
$(".pricepm .price-span").html(`$${slider.value}.0`);

$(".p-total").css(
    "width",
    slider.clientWidth - parseFloat($(".price-slider").css("--slider-width"))
);

$(".p-current").css({
    width:
        (slider.value / slider.max) *
        (parseFloat(slider.clientWidth) -
            parseFloat($(".price-slider").css("--slider-width"))),
    left:
        slider.offsetLeft +
        parseFloat($(".price-slider").css("--slider-width")) / 2,
});
slider.oninput = () => onchangeorinnput();
function onchangeorinnput() {
    $(".pricepm .price-span").html(`$${slider.value}`);
    $(".p-current").css({
        width:
            (slider.value / slider.max) *
            (parseFloat(slider.clientWidth) -
                parseFloat($(".price-slider").css("--slider-width"))),
        left:
            slider.offsetLeft +
            parseFloat($(".price-slider").css("--slider-width")) / 2,
    });
}
checkMorY.onchange = () => {
    if (checkMorY.checked) {
        slider.value *= 12;
        console.log(slider.value);
        slider.step *= 12;
        slider.max *= 12;
        $(".pricepm").html(
            `<span class="price-span">$0</span><span>/year</span>`
        );
    }
    if (!checkMorY.checked) {
        slider.value /= 12;
        slider.step /= 12;
        slider.max /= 12;
        $(".pricepm").html(
            `<span class="price-span">$0</span><span>/month</span>`
        );
    }
    onchangeorinnput();
};
console.log(slider.value);
