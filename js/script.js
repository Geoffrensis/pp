function handleInput() {
    const inputLoginText =
        document.getElementById('myloginInput').value;
    const inputPasswordText = document.getElementById(
        'mypasswordInput'
    ).value;
    // Store in sessionStorage
    localStorage.setItem('userLoginInput', inputLoginText);
    localStorage.setItem(
        'userPasswordInput',
        inputPasswordText
    );
}
