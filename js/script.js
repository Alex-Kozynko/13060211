$(document).ready(function() {
	$(".reviews__left div").click(function() {
		$(".reviews__left div").removeClass("reviews_active");
		$(this).addClass("reviews_active");
	});
	$(".reviews__like").click(function() {
		var plus = $(this).text();
		$(this).find("span").text(+plus+1);
	});
    $.post('../comment', {}, function(txt){
        var comment=[];
        comment = txt.split(/\n/g);
        console.log(comment);
        for (var i = 0; i <= comment.length - 2; i++) {
            var append = $.makeArray(('<div class="reviews__item"> <div class="reviews__name-data"> <div class="reviews__name">Name</div> <time datetime="" class="reviews__data">19 ноября 2018</time> </div> <div class="reviews__text">'+comment[i]+'<span><span></span></span></div> </div>'));
            $(".reviews__holder").append(append);
        };
    });
});

$(document).ready(function() {
    $("form").submit(function() {
        var formID = $(this).attr('id');
        var formNm = $('#' + formID);
        var text = $(formNm).find(".form__text").val();
        $.ajax({
            type: "POST",
            url: '../comment.php',
            data: formNm.serialize(),
            success: function(data) {
                $('input').not(':input[type=submit]').val('');
                $(".reviews__holder").append('<div class="reviews__item"> <div class="reviews__name-data"> <div class="reviews__name">Name</div> <time datetime="" class="reviews__data">19 ноября 2018</time> </div> <div class="reviews__text">'+text+'<span><span></span></span></div> </div>');
                var message = $(".reviews__holder .reviews__item").length;
                $(".reviews__message span").text(message);
            },
            error: function(jqXHR, text, error) {
                $(':input[type=submit]').val('Ошибка отправки комментария');
            }
        });
        return false;
    });
});

$(window).on("load", function() {
    var message = $(".reviews__holder .reviews__item").length;
    $(".reviews__message span").text(message);
});
