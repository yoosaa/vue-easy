$(function() {
    var res;
    var draggable = window['vuedraggable'];

    $.ajax({
        url: 'https://qiita.com/api/v2/users/ekzemplaro/items?per_page=20',
        dateType: 'json',
        error: function() {
            alert("ロード失敗");
        },
        success: function(data) {
            console.log(data);
            res = data;

            var app = new Vue({
                // options
                el: '#app',
                components: {
                    'draggable': draggable,
                },
                data: {
                    toggle: true,
                    res: res
                },
                methods: {
                    create: function create() {
                        var articles = document.getElementsByClassName("article");
                        console.log(articles.length);
                        var sent_array = [];
                        [...articles].reduce(function(prev, current, index, array) {
                            mini_array = {};
                            console.log(array);
                            mini_array["title"] = current.childNodes[0].innerHTML;
                            mini_array["description"] = current.childNodes[2].innerHTML;
                            console.log(mini_array);
                            sent_array.push(mini_array);
                        });
                        console.log(sent_array);
                    }
                }
            });
        }
    });
});