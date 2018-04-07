
$("#but").click(function(e) {
    e.preventDefault();
    // $("#test-body").show();
                           $.ajax('http://rest1/test',{
                               dataType: "json",
                               method: 'get',
                               data: {token:'admin'},
                               success: function (data) {
                                   console.log(data[0]['id']);

                               }
                           });
});