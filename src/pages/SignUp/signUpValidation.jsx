function Validation(values) {
    alert('')
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (values.userName === "") {
        error.userName = "Заповніть поле з поштою"
    }
    else {
        error.userName = ""
    }

    if (values.email === "") {
        error.email = "Заповніть поле з поштою"
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Неправильно введена пошта"
    } else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Заповніть поле з паролем"
    }
    else if (!password_pattern.test(values.email)) {
        error.password = "Неправильно введений пароль"
    } else {
        error.password = ""
    }
    return error
}

export default Validation