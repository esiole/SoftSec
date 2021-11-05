const CODE_ELEMENT = document.getElementById("code");
const RESULT_CODE_ELEMENT = document.getElementById("resultCode");
const SUBMIT_BUTTON = document.getElementById("submit-btn");
const COPY_BUTTON = document.getElementById("copy-btn")

SUBMIT_BUTTON.addEventListener("click", onSubmitCode);
COPY_BUTTON.addEventListener("click", onCopyButtonClick);
CODE_ELEMENT.addEventListener("input", onInputCode);
RESULT_CODE_ELEMENT.addEventListener("input", onInputCode);
CODE_ELEMENT.dispatchEvent(new Event("input"));
RESULT_CODE_ELEMENT.dispatchEvent(new Event("input"));
CODE_ELEMENT.focus();

function onSubmitCode(event) {
    const code = CODE_ELEMENT.value;
    const lang = document.getElementById("lang").value;
    let form = document.createElement('form');
    form.action = '/comments/clear';
    form.method = 'POST';
    let textarea = document.createElement('textarea');
    textarea.name = "code";
    textarea.value = code;
    form.innerHTML = `<select name="lang"><option value="${lang}" selected></option></select>`;
    form.appendChild(textarea);
    document.body.append(form);
    form.submit();
}

function onInputCode(event) {
    if(event.target.value === "" || event.target.value.trim() === "") {
        if(!event.target.classList.contains("code-input")) {
            event.target.classList.add("code-input");
        }
    } else {
        event.target.classList.remove("code-input");
    }
}

function onCopyButtonClick(event) {
    const oldFocus = document.activeElement;
    RESULT_CODE_ELEMENT.select();
    document.execCommand("copy");
    oldFocus.focus();
    const oldButtonValue = event.target.innerHTML;
    event.target.innerHTML = "Скопировано!";
    setTimeout(() => event.target.innerHTML = oldButtonValue, 2500);
}