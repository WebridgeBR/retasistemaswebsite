const emailHandler = (email) => {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
};

$('button#send_data').on('click',()=>{
    let name = $('input#name').val();
    let email = $('#email').val();
    let subject = $('#subject').val();
    let message = $('#message').val();
    let email_validation = !emailHandler(email) ? false : true;
    if(name==''||email==''||subject==''||message=='')
    {
        $('#errorToast').removeClass('hide show').addClass('show animate__animated animate__fadeInRight');
        setTimeout(()=>{
            $('#errorToast').removeClass('hide show').addClass('animate__fadeOutRight');
        },3000)
        setTimeout(()=>{
            $('#errorToast').removeClass('animate__animated animate__fadeInRight animate__fadeOutRight hide show').addClass('hide')
        },4000)
    } else if (email_validation == false) {
        $('#emailToast').removeClass('hide show').addClass('show animate__animated animate__fadeInRight');
        setTimeout(()=>{
            $('#emailToast').removeClass('hide show').addClass('animate__fadeOutRight');
        },3000)
        setTimeout(()=>{
            $('#emailToast').removeClass('animate__animated animate__fadeInRight animate__fadeOutRight hide show').addClass('hide')
        },4000)
    } 
    else {
        $.ajax({
            type: "POST",
            url: "./backend/send.php",
            data:
              "name=" + name +
              "&email=" + email +
              "&subject=" + subject +
              "&message=" + message,
            success: (response) => {
              if (response == 2) {
                $('#successToast').removeClass('hide show').addClass('show animate__animated animate__fadeInRight');
                setTimeout(()=>{
                    $('#successToast').removeClass('hide show').addClass('animate__fadeOutRight');
                },3000)
                setTimeout(()=>{
                    $('#successToast').removeClass('animate__animated animate__fadeInRight animate__fadeOutRight hide show').addClass('hide')
                },4000)
              } else if (response == 1) {
                alert('Erro SQL, contate a equipe técnica o mais rápido possível.');
              }
            },
          });
    }
})
