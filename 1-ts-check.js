Object.defineProperty(window, 'MySweetApp', {value: 'v1.0.0', readonly: false});


function deliveryMethod() {
    //TODO
    return 'overnight';
}

function shipWeight() {
    //@ts-ignore
    return parseInt((document.getElementById('weight')).innerHTML)
}

/**
 *
 * @param {string | string[]} email
 */
function setUpdates(email) {

    function sendEmail(address) {

        console.log(`Shipping to ${address} via ${deliveryMethod() | 'standart'} delivery`);

        if (shipWeight() > 100) {
            console.log('Warning: oversize package');
        }
    }

    if (email.length) {
        email.forEach((idx, val) => {
            sendEmail(val.trim());
        })
    } else {
        sendEmail(email.trim());
    }
}

/** @type{Array.<number>} **/
let a = ['abc'];