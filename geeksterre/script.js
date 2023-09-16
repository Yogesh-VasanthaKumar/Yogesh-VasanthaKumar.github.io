
function displayPopup(message) {
    const popupContent = document.getElementById('popup-content');
    popupContent.textContent = message;
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

async function register() {
    const url = 'https://geek-store.onrender.com/user/register';
    const data = {
        name: document.getElementById('regName').value,
        email: document.getElementById('regEmail').value,
        Password: document.getElementById('regPassword').value,
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const responseData = await response.json();
            displayPopup('Registration successful. Please log in.');
        } else {
            const errorData = await response.json();
            displayPopup(`Registration failed: ${errorData.message}`);
        }
    } catch (error) {
        displayPopup('An error occurred while registering.');
    }
}

async function login() {
    const url = 'https://geek-store.onrender.com/user/login';
    const data = {
        email: document.getElementById('loginEmail').value,
        password: document.getElementById('loginPassword').value,
        role: 'user', // Provide the appropriate role here
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const responseData = await response.json();
            localStorage.setItem('token', responseData.token);
            displayPopup('Login successful.');
        } else {
            const errorData = await response.json();
            displayPopup(`Login failed: ${errorData.message}`);
        }
    } catch (error) {
        displayPopup('An error occurred while logging in.');
    }
}

async function sendForgotPasswordEmail() {
    const url = 'https://geek-store.onrender.com/user/forgot-password';
    const data = {
        email: document.getElementById('forgotEmail').value,
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            displayPopup('Password reset email sent successfully.');
        } else {
            const errorData = await response.json();
            displayPopup(`Failed to send reset email: ${errorData.message}`);
        }
    } catch (error) {
        displayPopup('An error occurred while sending reset email.');
    }
}

async function resetPassword() {
    const url = 'https://geek-store.onrender.com/user/reset-password';
    const data = {
        email: document.getElementById('resetEmail').value,
        OTP: document.getElementById('resetOTP').value,
        password: document.getElementById('resetNewPassword').value,
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            displayPopup('Password reset successful. Please log in.');
        } else {
            const errorData = await response.json();
            displayPopup(`Password reset failed: ${errorData.message}`);
        }
    } catch (error) {
        displayPopup('An error occurred while resetting the password.');
    }
}
