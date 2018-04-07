

$("#but").click(function(e) {
    e.preventDefault();
    $("test-body").show();
//                            $.ajax('http://rest1/test',{
//                                dataType: "json",
//                                method: 'post',
//                                data: {token:'admin'},
//                                success: function (data) {
//                                    $("#question").attr('data-key',data);
//                                    $("#loader").hide();
//                                    $("#test-body").show();
//                                }
//                            });
});