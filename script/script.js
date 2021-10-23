const $doc = $(document);
const $header = $('header');


$('header button').on('click', function () {
    $('body ,html').animate({
        scrollTop: $('.portfolio').offset().top
    }, 800)
})

$doc.on('scroll', function () {
    const scrollSize = $doc.scrollTop();
    const headerHeight = $header.outerHeight();

    $header.css({
        'opacity': 1 - scrollSize / headerHeight,
        'filter': 'grayscale(' + 2 * scrollSize / headerHeight + ')'
    })
})

