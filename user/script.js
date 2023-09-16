const storedData = localStorage.getItem("storedData");

if (storedData) {
    const userInfo = JSON.parse(storedData);

    document.getElementById("first-name-display").textContent = userInfo.firstName;
    document.getElementById("last-name-display").textContent = userInfo.lastName;
    document.getElementById("country-display").textContent = userInfo.country;
    document.getElementById("phone-display").textContent = userInfo.phoneNumber;
    document.getElementById("state-display").textContent = userInfo.state;
    document.getElementById("city-display").textContent = userInfo.city;
    document.getElementById("village-display").textContent = userInfo.village;
}

function storeData() {
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");
    const country = prompt("Enter your country:");
    const phoneNumber = prompt("Enter your phone number:");
    const state = prompt("Enter your state:");
    const city = prompt("Enter your city:");
    const village = prompt("Enter your village:");

    const userInfo = {
        firstName,
        lastName,
        country,
        phoneNumber,
        state,
        city,
        village,
    };

    localStorage.setItem("storedData", JSON.stringify(userInfo));

    document.getElementById("first-name-display").textContent = userInfo.firstName;
    document.getElementById("last-name-display").textContent = userInfo.lastName;
    document.getElementById("country-display").textContent = userInfo.country;
    document.getElementById("phone-display").textContent = userInfo.phoneNumber;
    document.getElementById("state-display").textContent = userInfo.state;
    document.getElementById("city-display").textContent = userInfo.city;
    document.getElementById("village-display").textContent = userInfo.village;
}

storeData();
