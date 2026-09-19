// =========================
// Show / Hide Password
// =========================

function togglePassword() {
    const password = document.getElementById("password");
    const button = document.querySelector(".show-password");

    if (password.type === "password") {
        password.type = "text";
        button.textContent = "◉";
    } else {
        password.type = "password";
        button.textContent = "◉";
    }
}


// =========================
// Sign In
// =========================


function signIn() {

    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();

    if (phone === "") {
        alert("Please enter your phone number.");
        return;
    }

    if (password === "") {
        alert("Please enter your password.");
        return;
    }

    // Go to Home
    window.location.href = "home.html";
}
// =========================
// Create Account
// =========================

function continueRegistration() {

    const phone = document.getElementById("register-phone").value.trim();

    if (phone === "") {
        alert("Please enter your phone number.");
        return;
    }

    if (phone.length < 9) {
        alert("Please enter a valid phone number.");
        return;
    }

    window.location.href = "verify.html";
}
// =========================
// OTP Input
// =========================

const otpInputs = document.querySelectorAll(".otp-container input");

otpInputs.forEach((input, index) => {

    input.addEventListener("input", () => {

        // الانتقال للخانة التالية
        if (input.value.length === 1 && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }

    });


    input.addEventListener("keydown", (event) => {

        // الرجوع للخانة السابقة عند الضغط على Backspace
        if (
            event.key === "Backspace" &&
            input.value === "" &&
            index > 0
        ) {
            otpInputs[index - 1].focus();
        }

    });

});
// =========================
// Verify OTP
// =========================

function verifyCode() {

    const otpInputs = document.querySelectorAll(".otp-container input");

    let code = "";

    otpInputs.forEach(input => {
        code += input.value;
    });

    // Check if all 6 digits are entered
    if (code.length !== 6) {
        alert("Please enter the 6-digit verification code.");
        return;
    }

    // Check that all characters are numbers
    if (!/^\d{6}$/.test(code)) {
        alert("Please enter numbers only.");
        return;
    }

    // Temporarily move to the next page
    window.location.href = "account-info.html";
}
// =========================
// Account Password Toggle
// =========================

function toggleAccountPassword(inputId) {

    const passwordInput = document.getElementById(inputId);

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}


// =========================
// Create Account
// =========================

function createAccount() {

    const fullName = document.getElementById("full-name").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("account-phone").value.trim();
    const password = document.getElementById("account-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const terms = document.getElementById("terms").checked;


    if (fullName === "") {
        alert("Please enter your full name.");
        return;
    }

    if (username === "") {
        alert("Please enter a username.");
        return;
    }

    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    if (phone === "") {
        alert("Please enter your phone number.");
        return;
    }

    if (password === "") {
        alert("Please enter a password.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    if (!terms) {
        alert("Please agree to the Terms of Service and Privacy Policy.");
        return;
    }

window.location.href = "home.html";}// =========================
// Forgot Password
// =========================

function continueForgotPassword() {

    const phone = document.getElementById("forgot-phone").value.trim();

    if (phone === "") {
        alert("Please enter your phone number.");
        return;
    }

    if (phone.length < 9) {
        alert("Please enter a valid phone number.");
        return;
    }

    window.location.href = "forgot-verify.html";
}
// =========================
// Forgot Password Verification
// =========================

function verifyForgotCode() {

    const otpInputs = document.querySelectorAll(".otp-container input");

    let code = "";

    otpInputs.forEach(input => {
        code += input.value;
    });

    if (code.length !== 6) {
        alert("Please enter the 6-digit verification code.");
        return;
    }

    if (!/^\d{6}$/.test(code)) {
        alert("Please enter numbers only.");
        return;
    }

    window.location.href = "new-password.html";
}


// =========================
// Save New Password
// =========================

function saveNewPassword() {

    const newPassword =
        document.getElementById("new-password").value;

    const confirmPassword =
        document.getElementById("confirm-new-password").value;


    if (newPassword === "") {
        alert("Please enter a new password.");
        return;
    }

    if (newPassword.length < 8) {
        alert("Password must be at least 8 characters.");
        return;
    }

    if (confirmPassword === "") {
        alert("Please confirm your new password.");
        return;
    }

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    alert("Your password has been changed successfully.");

    window.location.href = "index.html";
}
    function openChat(name) {

        localStorage.setItem("chatUser", name);

        window.location.href = "chat.html";


    }

function toggleMoreMenu() {
    const menu = document.getElementById("moreMenu");

    menu.classList.toggle("show");
}
function openSupportBox(type) {
    const box = document.getElementById("supportMessageBox");
    const title = document.getElementById("supportTitle");

    title.textContent = type;

    box.style.display = "block";

    box.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


function sendSupportMessage() {
    const message = document.getElementById("supportMessage").value.trim();

    if (message === "") {
        alert("Please describe your problem.");
        return;
    }

    alert("Your message has been sent to Nexa Support.");

    document.getElementById("supportMessage").value = "";
}
/* =========================================
   PROFILE
========================================= */


/* =========================
   Save Profile Changes
========================= */

function saveProfileChanges() {

    const name =
        document.getElementById("nameInput").value.trim();

    const username =
        document.getElementById("usernameInput").value.trim();

    const phone =
        document.getElementById("phoneInput").value.trim();

    const email =
        document.getElementById("emailInput").value.trim();

    const about =
        document.getElementById("aboutInput").value.trim();


    /* Check empty fields */

    if (
        name === "" ||
        username === "" ||
        email === "" ||
        about === ""
    ) {

        alert("Please fill in all required fields.");

        return;
    }


    /* Original email */

    const oldEmail =
        localStorage.getItem("nexaEmail") ||
        "heba@example.com";


    /* Save profile data */

    localStorage.setItem("nexaName", name);

    localStorage.setItem("nexaUsername", username);

    localStorage.setItem("nexaPhone", phone);

    localStorage.setItem("nexaAbout", about);


    /* =========================
       Email Changed
    ========================= */

    if (email !== oldEmail) {

        localStorage.setItem(
            "pendingNexaEmail",
            email
        );

        window.location.href =
            "verify-email.html";

        return;
    }


    /* Email didn't change */

    localStorage.setItem(
        "nexaEmail",
        email
    );

    alert("Your changes have been saved.");

}


/* =========================
   Load Profile Data
========================= */

function loadProfileData() {

    const name =
        localStorage.getItem("nexaName");

    const username =
        localStorage.getItem("nexaUsername");

    const phone =
        localStorage.getItem("nexaPhone");

    const email =
        localStorage.getItem("nexaEmail");

    const about =
        localStorage.getItem("nexaAbout");


    if (name) {

        const input =
            document.getElementById("nameInput");

        if (input) {
            input.value = name;
        }
    }


    if (username) {

        const input =
            document.getElementById("usernameInput");

        if (input) {
            input.value = username;
        }
    }


    if (phone) {

        const input =
            document.getElementById("phoneInput");

        if (input) {
            input.value = phone;
        }
    }


    if (email) {

        const input =
            document.getElementById("emailInput");

        if (input) {
            input.value = email;
        }
    }


    if (about) {

        const input =
            document.getElementById("aboutInput");

        if (input) {
            input.value = about;
        }
    }

}


/* =========================
   Logout
========================= */

function logout() {

    const confirmLogout =
        confirm("Are you sure you want to log out?");


    if (confirmLogout) {

        /*
         * Remove login session
         */

        localStorage.removeItem("nexaLoggedIn");

        /*
         * Return to Login
         */

        window.location.href =
            "index.html";
    }

}



/* =========================
   Verify Email
========================= */

function verifyEmailCode() {

    const codeInputs =
        document.querySelectorAll(
            ".verification-code input"
        );

    let code = "";


    codeInputs.forEach(function(input) {

        code += input.value;

    });


    if (code.length !== 6) {

        alert("Please enter the 6-digit verification code.");

        return;
    }


    const pendingEmail =
        localStorage.getItem("pendingNexaEmail");


    if (pendingEmail) {

        localStorage.setItem(
            "nexaEmail",
            pendingEmail
        );

        localStorage.removeItem(
            "pendingNexaEmail"
        );

    }


    alert("Your email has been verified successfully.");


    window.location.href =
        "profile.html";

}


/* =========================
   Resend Code
========================= */

function resendCode() {

    alert(
        "A new verification code has been sent to your email."
    );

}


/* =========================
   Show Email on Verify Page
========================= */

function loadVerificationEmail() {

    const email =
        localStorage.getItem(
            "pendingNexaEmail"
        );


    const emailElement =
        document.getElementById("verifyEmail");


    if (emailElement && email) {

        emailElement.textContent = email;

    }

}
document.addEventListener("DOMContentLoaded", function () {

    const inputs = document.querySelectorAll(
        ".verification-code input"
    );

    inputs.forEach((input, index) => {

        // الانتقال للخانة التالية
        input.addEventListener("input", function () {

            if (input.value.length === 1) {

                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }

            }

        });


        // الرجوع للخانة السابقة عند الحذف
        input.addEventListener("keydown", function (event) {

            if (
                event.key === "Backspace" &&
                input.value === "" &&
                index > 0
            ) {

                inputs[index - 1].focus();

            }

        });


        // السماح بالأرقام فقط
        input.addEventListener("input", function () {

            input.value = input.value.replace(/\D/g, "");

        });

    });


    // لصق الكود كاملًا
    inputs[0].addEventListener("paste", function (event) {

        event.preventDefault();

        const pastedCode =
            event.clipboardData
                .getData("text")
                .replace(/\D/g, "")
                .slice(0, inputs.length);


        pastedCode.split("").forEach((number, index) => {

            inputs[index].value = number;

        });


        if (pastedCode.length > 0) {

            const nextIndex =
                Math.min(
                    pastedCode.length,
                    inputs.length - 1
                );

            inputs[nextIndex].focus();

        }

    });

});


/* =========================
   Run When Page Loads
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadProfileData();

        loadVerificationEmail();

    }
);
function changePhoneNumber() {

    const newPhone =
        document.getElementById("newPhone").value.trim();

    if (newPhone === "") {

        alert("Please enter your new phone number.");

        return;
    }

    if (newPhone.length < 8) {

        alert("Please enter a valid phone number.");

        return;
    }

    localStorage.setItem(
        "pendingNexaPhone",
        newPhone
    );

    window.location.href =
        "verify.html";
}
function changePassword() {

    const currentPassword =
        document.getElementById("currentPassword").value.trim();

    const newPassword =
        document.getElementById("newPassword").value.trim();

    const confirmPassword =
        document.getElementById("confirmPassword").value.trim();


    // Check empty fields

    if (
        currentPassword === "" ||
        newPassword === "" ||
        confirmPassword === ""
    ) {

        alert("Please fill in all fields.");

        return;
    }


    // Check new password

    if (newPassword.length < 8) {

        alert("New password must be at least 8 characters.");

        return;
    }


    // Check matching passwords

    if (newPassword !== confirmPassword) {

        alert("New passwords do not match.");

        return;
    }


    // Save password temporarily
    // Later this will be connected to FastAPI + MySQL

    localStorage.setItem(
        "nexaPassword",
        newPassword
    );


    alert("Your password has been changed successfully.");


    // Return to Account

    window.location.href = "account.html";

}
/* =========================================
   TWO-STEP VERIFICATION
========================================= */


/* Toggle */

function toggleTwoStep() {

    const toggle =
        document.getElementById("twoStepToggle");

    const setup =
        document.getElementById("twoStepSetup");

    const enabled =
        document.getElementById("twoStepEnabled");


    if (toggle.checked) {

        setup.style.display = "block";

        enabled.style.display = "none";

    } else {

        setup.style.display = "none";

        enabled.style.display = "none";

    }

}


/* Enable */

function enableTwoStep() {

    const pin =
        document.getElementById("twoStepPin").value.trim();

    const confirmPin =
        document.getElementById("confirmTwoStepPin").value.trim();

    const email =
        document.getElementById("recoveryEmail").value.trim();


    if (pin === "" || confirmPin === "" || email === "") {

        alert("Please complete all fields.");

        return;
    }


    if (!/^\d{6}$/.test(pin)) {

        alert("PIN must contain exactly 6 digits.");

        return;
    }


    if (pin !== confirmPin) {

        alert("PINs do not match.");

        return;
    }


    if (!email.includes("@")) {

        alert("Please enter a valid recovery email.");

        return;
    }


    /* Save */

    localStorage.setItem(
        "nexaTwoStepEnabled",
        "true"
    );

    localStorage.setItem(
        "nexaTwoStepPin",
        pin
    );

    localStorage.setItem(
        "nexaRecoveryEmail",
        email
    );


    alert(
        "Two-step verification has been enabled."
    );


    document.getElementById(
        "twoStepSetup"
    ).style.display = "none";


    document.getElementById(
        "twoStepEnabled"
    ).style.display = "block";

}


/* Change PIN */

function changeTwoStepPin() {

    const newPin =
        prompt("Enter your new 6-digit PIN:");

    if (newPin === null) {
        return;
    }

    if (!/^\d{6}$/.test(newPin)) {

        alert("PIN must contain exactly 6 digits.");

        return;
    }

    localStorage.setItem(
        "nexaTwoStepPin",
        newPin
    );

    alert("Your PIN has been changed.");

}


/* Change Recovery Email */

function changeRecoveryEmail() {

    const newEmail =
        prompt("Enter your new recovery email:");

    if (newEmail === null) {
        return;
    }

    if (!newEmail.includes("@")) {

        alert("Please enter a valid email.");

        return;
    }

    localStorage.setItem(
        "nexaRecoveryEmail",
        newEmail
    );

    alert("Your recovery email has been changed.");

}


/* Disable */

function disableTwoStep() {

    const confirmDisable =
        confirm(
            "Are you sure you want to disable two-step verification?"
        );


    if (!confirmDisable) {
        return;
    }


    localStorage.removeItem(
        "nexaTwoStepEnabled"
    );

    localStorage.removeItem(
        "nexaTwoStepPin"
    );

    localStorage.removeItem(
        "nexaRecoveryEmail"
    );


    document.getElementById(
        "twoStepToggle"
    ).checked = false;


    document.getElementById(
        "twoStepSetup"
    ).style.display = "none";


    document.getElementById(
        "twoStepEnabled"
    ).style.display = "none";


    alert(
        "Two-step verification has been disabled."
    );

}
function deleteAccount() {

    const password =
        document.getElementById("deletePassword").value.trim();

    const confirmed =
        document.getElementById("deleteConfirm").checked;


    if (password === "") {

        alert("Please enter your password.");

        return;
    }


    if (!confirmed) {

        alert("Please confirm that you understand this action.");

        return;
    }


    const finalConfirm = confirm(
        "Are you sure you want to permanently delete your account?"
    );


    if (!finalConfirm) {

        return;
    }


    // Account deletion
    // Later this will be connected to FastAPI + MySQL.

    localStorage.removeItem("nexaLoggedIn");
    localStorage.removeItem("nexaPassword");
    localStorage.removeItem("nexaTwoStepEnabled");
    localStorage.removeItem("nexaTwoStepPin");
    localStorage.removeItem("nexaRecoveryEmail");


    alert("Your account has been deleted.");


    window.location.href = "index.html";
}
/* =========================================
   CHAT SETTINGS
========================================= */


/* Theme */

function openThemeOptions() {

    document.getElementById("themePopup").style.display = "flex";

}


function selectTheme(theme) {

    document.getElementById("themeValue").textContent = theme;

    localStorage.setItem("nexaTheme", theme);

    document.getElementById("themePopup").style.display = "none";


    // Apply theme

    if (theme === "Dark") {

        document.body.classList.add("dark-mode");

    } else if (theme === "Light") {

        document.body.classList.remove("dark-mode");

    } else {

        document.body.classList.remove("dark-mode");

    }

}


/* Font size */

function openFontOptions() {

    document.getElementById("fontPopup").style.display = "flex";

}


function selectFontSize(size) {

    document.getElementById("fontValue").textContent = size;

    localStorage.setItem("nexaFontSize", size);

    document.getElementById("fontPopup").style.display = "none";


    document.body.classList.remove(
        "font-small",
        "font-medium",
        "font-large"
    );


    if (size === "Small") {

        document.body.classList.add("font-small");

    }

    else if (size === "Medium") {

        document.body.classList.add("font-medium");

    }

    else if (size === "Large") {

        document.body.classList.add("font-large");

    }

}


/* Enter key */

function toggleEnterKey() {

    const enabled =
        document.getElementById("enterKeyToggle").checked;

    localStorage.setItem(
        "nexaEnterKeySend",
        enabled
    );

}


/* Media */

function openMediaOptions() {

    document.getElementById("mediaPopup").style.display = "flex";

}


/* Close popup */

function closePopup(id) {

    document.getElementById(id).style.display = "none";

}


function closePopupOutside(event, id) {

    if (event.target.id === id) {

        closePopup(id);

    }

}


/* Chat backup */

function backupChats() {

    const confirmBackup = confirm(
        "Do you want to back up your chat history now?"
    );


    if (!confirmBackup) {

        return;

    }


    // For now this is a UI simulation.
    // Later it can be connected to FastAPI + MySQL.

    localStorage.setItem(
        "nexaLastBackup",
        new Date().toISOString()
    );


    alert(
        "Your chat history has been backed up successfully."
    );

}
/* =========================================
   NOTIFICATIONS
========================================= */


/* Save Toggle */

function saveNotificationSetting(settingId) {

    const setting =
        document.getElementById(settingId);

    localStorage.setItem(
        "nexa_" + settingId,
        setting.checked
    );
}


/* Notification Sound */

function openNotificationSound() {

    document.getElementById(
        "notificationSoundPopup"
    ).style.display = "flex";
}


function selectNotificationSound(sound) {

    document.getElementById(
        "notificationSoundValue"
    ).textContent = sound;

    localStorage.setItem(
        "nexaNotificationSound",
        sound
    );

    document.getElementById(
        "notificationSoundPopup"
    ).style.display = "none";
}


/* Close Popup */

function closeNotificationPopup(event) {

    if (
        event.target.id ===
        "notificationSoundPopup"
    ) {

        document.getElementById(
            "notificationSoundPopup"
        ).style.display = "none";
    }
}
/* =========================
   CHAT SEARCH
========================= */

function openChatSearch() {

    const searchBox =
        document.getElementById("chatSearch");

    const searchInput =
        document.getElementById("chatSearchInput");

    searchBox.style.display = "block";

    searchInput.focus();
}


function closeChatSearch() {

    const searchBox =
        document.getElementById("chatSearch");

    const searchInput =
        document.getElementById("chatSearchInput");

    searchInput.value = "";

    searchBox.style.display = "none";

    searchChats();
}


function searchChats() {

    const input =
        document.getElementById("chatSearchInput");

    const searchText =
        input.value.toLowerCase().trim();

    const chats =
        document.querySelectorAll(".chat-item");

    chats.forEach(function(chat) {

        const chatName =
            chat.textContent.toLowerCase();

        if (chatName.includes(searchText)) {

            chat.style.display = "";

        } else {

            chat.style.display = "none";

        }

    });
}