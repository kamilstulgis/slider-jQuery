$(document).ready(function () {

    const $list = $("ul li");
    const $team = $(".team");
    const container = $(".container");
    const $div = $("<div class='slider'>");
    const $p = $("<p class='team-container'>");
    const $possition = $("<p class='team-profession'>");
    const $name = $("<h2 class='team-name'>");
    const $btnClose = $("<a class='slider-close'><i class='fa fa-times' aria-hidden='true'></i></a>");
    const $btnLeft = $("<a class=slider-left><i class='fa fa-angle-left' aria-hidden='true'></i></a>");
    const $btnRight = $("<a class=slider-right><i class='fa fa-angle-right' aria-hidden='true'></i></a>");
/*all posssition and name */
    const allPossition = $(".team-people-profession");
    const allName = $(".team-people-name");

    container.hide();

    $list.on('click', function(e) {
        container.show();

        let index = ($(this).index());
        const parent = $(this).parent().parent().parent().children().first();
        const name = $(this).children().last().children().eq(1).text();
        const position = $(this).children().last().children().eq(2).text();
        console.log(name, position);

        $possition.text(position);
        $name.text(name);

        parent.prepend($btnClose);
        parent.prepend($btnLeft);
        parent.prepend($btnRight);
        parent.append($div);
        $div.append($p);
        $p.append($possition);
        $p.append($name);

        $team.children().eq(1).css('opacity', '0.5');

        $btnClose.on('click', function () {
            container.hide();
            $team.children().eq(1).css('opacity', '1');
        });

        $btnLeft.on('click', function () {
            index--;
            if(index < 0 ) {
                index = $list.length-1;
             }
            $possition.text(allPossition[index].innerHTML);
            $name.text(allName[index].innerHTML);
        });

        $btnRight.on('click', function () {
            index++;
            if(index > $list.length-1 ) {
                index = 0;
               // console.log(index);
            }
            //console.log(allPossition[index].innerHTML);
            $possition.text(allPossition[index].innerHTML);
            $name.text(allName[index].innerHTML);
        });
    });
});