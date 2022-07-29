
function InitializeControl() {
    var controlAddIn = document.getElementById('controlAddIn');
    controlAddIn.innerHTML = '<div style="height:100%;overflow-y:auto;" id="json"></div>';

    Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('OnJsonViewerReady', null);
}

function LoadDocument(data, maxLvl, colAt) {
    var jsonViewer = new JSONViewer();

    document.querySelector("#json").innerHTML = '';
    document.querySelector("#json").appendChild(jsonViewer.getContainer());

    jsonViewer.showJSON(data, maxLvl, colAt);
}