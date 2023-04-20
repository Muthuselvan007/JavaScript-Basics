//If Else
let employee = 'muthu'
if (employee.toUpperCase == "muthu".toUpperCase) {
    console.log('you may have a permission to enter inside the Office')
}
else {
    console.log('you dont have permission to enter inside the office');
}

let User = "Employee"
if (User == "Employee" || User == "Owner") {
    console.log("You have a permission to Enter");
} else {
    console.log('you dont have access')
}

//Nested If
let session = 'night';
let user = 'employee';
if (session == 'morning') {
    if (user == 'owner') {
        console.log(' allow owner');
    }

    else if (user == 'employee') {
        console.log('allow employee');
    }

    else {
        console.log('not allowed');
    }
}
else if (session == 'evening') {
    if (user == 'owner') {
        console.log('Allow owner');
    }

    else if (user = 'employee') {
        console.log('Not allow');
    }

    else { console.log('allow'); }
}
else {
    console.log('company closed');
}

// nested if
let date = 32;
if (date > 0 && date <= 13) {
    console.log(' Color: Red ');
} else if (date === 14) {
    console.log('Color: yellow');
} else if (date > 14 && date <= 31) {
    console.log('Color: Green');
}
else if (date > 31) {
    console.log('No date format');
}








