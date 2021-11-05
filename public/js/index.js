document.getElementById("submit-btn").addEventListener("click", onSubmitCode);
document.getElementById("code").focus();

function onSubmitCode(event) {
    const code = document.getElementById("code").value;
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