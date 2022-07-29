//https://www.kauffmann.nl/2019/02/01/controlling-the-size-of-a-control-add-in/
var iframe = window.frameElement;

iframe.parentElement.style.display = 'flex';
iframe.parentElement.style.flexDirection = 'column';
iframe.parentElement.style.flexGrow = '1';

iframe.style.removeProperty('height');
iframe.style.removeProperty('max-height');

iframe.style.flexGrow = '1';
iframe.style.flexShrink = '1';
iframe.style.flexBasis = 'auto';
iframe.style.paddingBottom = '42px';
//iframe.style.height = '1000px';
//iframe.style.overflow = 'hidden';

Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('OnControlAddInReady', null);