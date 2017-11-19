$( document ).ready (function () {
    $("#root").append('<ul id = "ul"></ul>');
    $("#ul").append('<li id = "li"></li>');
    $("#li").append('<span>Сделать задание #3 по web-программированию</span>' );
    $("#li").append('<button class="button" >Удалить</button>');
    $('#root').append('<input id="add_task_input">')
    $('#root').append('<button id = "add_task">Добавить</button>');
    $("#add_task").click(function(){
        var text = document.getElementsByTagName("input")[0];
        var val = text.value;
        $("#ul").append('<li id = "new"></li>');
        $('#new').append(val);
        $("#new").append('<button class="button" >Удалить</button>');
        $(".button").click(function(){
            $("li").remove();
        });
    });
    $(".button").click(function(){
        $("li").remove();
    });
});



