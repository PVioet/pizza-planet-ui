

fetch('http://127.0.0.1:5000/report')
    .then(response => response.json())
    .then(report => {
        let info = createReportTemplate(report);
        let page = $("#report");
        page.append(info);
    });


function createReportTemplate(report) {
    let template = $("#report-template")[0].innerHTML;
    return Mustache.render(template, report);
}
