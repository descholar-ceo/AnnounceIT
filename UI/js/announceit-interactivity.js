/** RESET PASSWORD FORM */
const resetPswdCheckAccBtn = document.querySelector('button#reset-pswd-check-acc-btn');
const resetPswdCheckSecretKeyBtn = document.querySelector('button#reset-pswd-check-secret-key-btn');
const resetPswdResult = document.querySelector('div#reset-password-result');
const resetPswdEmailForm = document.querySelector('form#reset-password-email-form');
const resetPswdKeyForm = document.querySelector('form#reset-password-secret-key-form');
const resetPswdPasswordChoose = document.querySelector('form#reset-password-choice-form');
const resetPswdBtn = document.querySelector('button#reset-pswd-btn');

/** Checking the existance of the account from the db */
resetPswdCheckAccBtn.addEventListener('click', () => {
    /**
     *  Here I check if the email exist in database of users
     * if it exists, the server sends the secret key to the user to that email
     * inorder to check this account belongs to him/her, and then 
     * I ask her/him to enter the secret key, after I let him/her to enter a new password
     */
    
    const resetPswdEmailValue = document.querySelector('input#reset-password-email-value').value;
    // make empty the result div by default
    resetPswdResult.innerHTML = '';

    if (resetPswdEmailValue) {
        resetPswdResult.innerHTML = `<span class="text-success">
        Wow, We have sent you the secret key to your email, enter it on the above field and click
        on check secret key!</span>`;

        resetPswdEmailForm.classList.add("hidden-element");
        resetPswdKeyForm.classList.remove('hidden-element');
    } else {
        resetPswdResult.innerHTML = `<span class="text-danger">Enter your email please!</span>`;
    }
});

/** Checking the validity of the secret key */
resetPswdCheckSecretKeyBtn.addEventListener('click', () => {
    /**
     * Here I check if the the secret key is valid sothat I may know if
     * the account belongs to him/her
     * 
     */

    
    const resetPswdSecretKeyValue = document.querySelector('input#reset-password-secret-key-value').value;
    //initialize result div
    resetPswdResult.innerHTML = '';

    if (resetPswdSecretKeyValue) {
        resetPswdResult.innerHTML = `<span class="text-success">
        Wow, We believe that is your account is here.<br/> The next step is now to choose
        a new password!</span>`;
        resetPswdKeyForm.classList.add('hidden-element');
        resetPswdPasswordChoose.classList.remove('hidden-element')
    } else {
        resetPswdResult.innerHTML = `<span class="text-danger">Sorry! Enter your secret key</span>`;
    }

});

/** reseting password */
resetPswdBtn.addEventListener('click', () => {
    /**
     * 
     * I check all of the conditions needed for the passwords, and i save in i db
     * and then the user is redirected to the profile page
     * 
     */
    const resetPasswordsValue = document.querySelector('input#reset-password-new').value;
    const resetPasswordsValueConfirm = document.querySelector('input#reset-password-confirm').value;

    // initialize the result div
    resetPswdResult.innerHTML = '';

    if (resetPasswordsValue) {
        resetPswdResult.innerHTML = ``;
        if (resetPasswordsValue === resetPasswordsValueConfirm) {
            window.location.replace('user-profile.html');
        } else {
            resetPswdResult.innerHTML=`<span class="text-danger">Passwords missmatch!</span>`;
        }
    } else {
        resetPswdResult.innerHTML = `<span class="text-danger">Sorry! Choose a password please!</span>`;
    }
})