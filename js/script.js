function handleInput() {
    const inputLoginText =
        document.getElementById('myloginInput').value;
    const inputPasswordText = document.getElementById(
        'mypasswordInput'
    ).value;
    // Store in sessionStorage
    sessionStorage.setItem(
        'userLoginInput',
        inputLoginText
    );
    sessionStorage.setItem(
        'userPasswordInput',
        inputPasswordText
    );
}
