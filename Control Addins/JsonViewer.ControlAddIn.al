controladdin JsonViewer
{
    StartupScript = 'src/Ressources/Scripts/json-viewer-startup.js';
    Scripts = 'src/Ressources/Scripts/json-viewer.js', 'src/Ressources/Scripts/json-viewer-functions.js';
    StyleSheets = 'src/Ressources/StyleSheets/json-viewer.css';

    HorizontalStretch = true;
    HorizontalShrink = true;
    MinimumWidth = 250;

    VerticalShrink = true;
    VerticalStretch = true;
    RequestedHeight = 550;

    event OnControlAddInReady();
    event OnJsonViewerReady();
    procedure InitializeControl();
    procedure LoadDocument(data: JsonObject; maxLvl: Integer; colAt: Integer);
}