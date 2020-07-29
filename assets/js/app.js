function website() {
    $('#abtMeContainer').show();
    $('#myExpContainer').hide();
    $('#myProjContainer').hide();
    $('#contactContainer').hide();
}
website()

$('#btn1').on("click", function () {
    $('#header').html(" About Me <br> <br>");
    $('#abtMeContainer').show();
    $('#myExpContainer').hide();
    $('#myProjContainer').hide();
    $('#contactContainer').hide();
});

$('#btn2').on("click", function () {
    $('#header').html(" My Experience <br> <br>")
    $('#abtMeContainer').hide();
    $('#myExpContainer').show();
    $('#myProjContainer').hide();
    $('#contactContainer').hide();
});

$('#btn3').on("click", function () {
    $('#header').html(" My Projects <br> <br>")
    $('#abtMeContainer').hide();
    $('#myExpContainer').hide();
    $('#myProjContainer').show();
    $('#contactContainer').hide();
})

$('#btn4').on("click", function () {
    $('#header').html(" Contact <br> <br>")
    $('#abtMeContainer').hide();
    $('#myExpContainer').hide();
    $('#myProjContainer').hide();
    $('#contactContainer').show();
})


// Below are the queries for desktop site, 
// as all the btn ids won't work on desktop.
$('.btn__desktop1').on("click", function () {
    $('#header').html(" About Me <br> <br>");
    $('#abtMeContainer').show();
    $('#myExpContainer').hide();
    $('#myProjContainer').hide();
    $('#contactContainer').hide();
});

$('.btn__desktop2').on("click", function () {
    $('#header').html(" My Experience <br> <br>")
    $('#abtMeContainer').hide();
    $('#myExpContainer').show();
    $('#myProjContainer').hide();
    $('#contactContainer').hide();
});

$('.btn__desktop3').on("click", function () {
    $('#header').html(" My Projects <br> <br>")
    $('#abtMeContainer').hide();
    $('#myExpContainer').hide();
    $('#myProjContainer').show();
    $('#contactContainer').hide();
})

$('.btn__desktop4').on("click", function () {
    $('#header').html(" Contact <br> <br>")
    $('#abtMeContainer').hide();
    $('#myExpContainer').hide();
    $('#myProjContainer').hide();
    $('#contactContainer').show();
});