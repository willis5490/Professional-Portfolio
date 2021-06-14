$('#formSubmit').on('click', () => {
    const userName = $('#userName').val().trim()
    const userEmail = $('#userEmail').val().trim()
    const userMessage = $('#userMessage').val().trim()

    const userData = {
        name: userName,
        email: userEmail,
        message: userMessage
    }
    if (!userName) {
        UIkit.notification({ message: 'You must fill out all forms before submitting.', status: 'danger', pos: 'top-center', timeout: 2000 })
    } else if (!userEmail) {
        UIkit.notification({ message: 'You must fill out all forms before submitting.', status: 'danger', pos: 'top-center', timeout: 2000 })
    } else if (!userMessage) {
        UIkit.notification({ message: 'You must fill out all forms before submitting.', status: 'danger', pos: 'top-center', timeout: 2000 })
    } else {
        try {
            $.ajax({
                type: "POST",
                url: '/sendEmail',
                data: userData
            });
            UIkit.notification({ message: 'Your email has been sent.', status: 'success', pos: 'top-center', timeout: 2000 })

            empty()
        } catch (error) {
            console.error(error);
        }
    }

})

const empty = () => {
    $('#userName').val('')
    $('#userEmail').val('')
    $('#userMessage').val('')
}
