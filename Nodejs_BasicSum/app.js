"use strict";

console.log('Calculation mini app started.....');
console.log('=================================');

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log('Following operations are supported....');
    console.log('--------------------------------------');
    console.log('1. Addition');
    console.log('2. Difference');
    console.log('3. Product');
    console.log('4. Division');
    console.log('0. Exit');
    console.log('--------------------------------------');
}

function sum(result) {
    console.log('The sum of entered number is: ' + result);
}

function diff(result) {
    console.log('The difference of entered number is: ' + result);
}

function product(result) {
    console.log('The product of entered number is: ' + result);
}

function division(result) {
    console.log('The division of entered number is: ' + result);
}

function main() {
    rl.question('Would you like to continue (Y) / (N): ', function (x) {

        if (x.toUpperCase() == 'Y') {
            menu();

            rl.question('Waiting for selection: ', function (y) {

                if (parseInt(y) > 0 && parseInt(y) <= 4) {

                    rl.question('First Number: ', function (a) {
                        rl.question('Second Number: ', function (b) {

                            switch (parseInt(y)) {

                                case 1:
                                    sum(parseInt(a) + parseInt(b));
                                    main()
                                    break;

                                case 2:
                                    diff(parseInt(a) - parseInt(b));
                                    main()
                                    break;

                                case 3:
                                    product(parseInt(a) * parseInt(b));
                                    main()
                                    break;

                                case 4:
                                    division(parseInt(a) / parseInt(b));
                                    main()
                                    break;                               

                                default:
                                    console.log("Invalid operation..");
                                    main();
                                    break;
                            }

                        });
                    });

                }
                else {
                    if (parseInt(y) === 0) {
                        rl.close();                        
                    }
                    else {
                        console.log("Invalid choice..");
                        main();
                    }
                }

            });

        }
        else {
            rl.close();
        }

    });
};

main();