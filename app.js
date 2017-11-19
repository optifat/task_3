$( document ).ready (function () {
    $("#root").append('<ul id = "ul"></ul>');
    $("#ul").append('<li id = "li"></li>');
    $("#li").append('<span>Сделать задание #3 по web-программированию</span>' );
    $("#li").append('<button class="button" >Удалить</button>');
    $('#root').append('<input id="add_task_input">');
    $('#root').append('<button id = "add_task">Добавить</button>');
    $("#add_task").click(function(){
        var text = document.getElementsByTagName("input")[0];
        var val = text.value;
        var newLi = document.createElement('li');
        var newSpan = document.createElement('span');
        $(newSpan).append(val);
        $(newLi).append(newSpan);
        $(newLi).append('<button class="button" >Удалить</button>');
        $('#ul').append(newLi);
        $(".button").click(function(){
            $(newLi).remove();
        });
    });
    $(".button").click(function(){
        $("#li").remove();
    });
});




