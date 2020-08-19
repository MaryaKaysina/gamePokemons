const phone = prompt();

function formattedPhone(phone) {
    let result = '';

    if (phone.length === 12) {
        for (let i = 0; i <= 11; i++) {
            if (i === 2) {
                result = result + ' ' + '(' + phone.charAt(i);
                continue;
            }
            if (i === 5) {
                result = result + ') ' + phone.charAt(i);
                continue;
            }
            if (i === 8) {
                result = result + '-' + phone.charAt(i);
                continue;
            }
            if (i === 10) {
                result = result + '-' + phone.charAt(i);
                continue;
            }
            result += phone.charAt(i);
        }
    } else {
        result = 'Какой-то странный номер телефона!'
    }
    
    return result;
}

console.log(formattedPhone(phone));