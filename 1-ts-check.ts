Object.defineProperty(window, 'MySweetApp', {
    value: 'v1.0.0',
    writable: true,
});


function deliveryMethod(): string {
    //TODO
    return 'overnight';
}

function shipWeight() {
    const element: HTMLDivElement = document.getElementById('weight') as HTMLDivElement;
    return parseInt((element).innerHTML)
}

/**
 *
 * @param {string | string[]} email
 */
function setUpdates(email: string | string[]): void {

    function sendEmail(address: string) {

        console.log(`Shipping to ${address} via ${deliveryMethod() || 'standart'} delivery`);

        if (shipWeight() > 100) {
            console.log('Warning: oversize package');
        }
    }

    if (Array.isArray(email)) {
        email.forEach((val:string, _idx: number) => {
            sendEmail(val.trim());
        })
    } else {
        sendEmail(email.trim());
    }
}