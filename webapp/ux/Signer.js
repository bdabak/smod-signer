sap.ui.define([
    "sap/ui/core/Control"
], function (
    Control
) {
    "use strict";

    return Control.extend("com.smod.ux.controldev.ux.Signer", {
        metadata: {
            properties: {},
            aggregations: {
            _toolbar: {
                type: "sap.m.Toolbar",
                multiple: false
            }
            },
            events: {
              signCompleted: {},
            },
            
          },
        init: function () {
            var sLibraryPath = jQuery.sap.getModulePath("com.smod.ux.controldev"); //get the server location of the ui library
            jQuery.sap.includeStyleSheet(sLibraryPath + "/ux/Signer.css");
        },
        /**
         * @override
         */
        onAfterRendering: function() {
            var that = this;
            Control.prototype.onAfterRendering.apply(this, arguments);
            
            $(document).ready(function() {
	
                // This is the part where jSignature is initialized.
                var $sigdiv = that.$().find(".smod-signer").jSignature({'UndoButton':true});
            });
        
        },
        _resetSignature: function(){
            this.$().find(".smod-signer").jSignature("reset");
        },
        _undoStroke: function(){
            this.$().find(".smod-signer").jSignature("undo");
        },
        _doSign: function(){
            var signatureImage = this.$().find(".smod-signer").jSignature("getData");
            console.log(signatureImage);

        },
        renderer: function (oRM, oControl) {

            var oReset = new sap.m.Button({
                icon:"sap-icon://refresh",
                text:"Sıfırla",
                press: oControl._resetSignature.bind(oControl),
                type: "Reject"
            });

          

            var oSign = new sap.m.Button({
                icon:"sap-icon://signature",
                text:"İmzala",
                press: oControl._doSign.bind(oControl),
                type: "Accept"
            });

            var oHB = new sap.m.Toolbar({
               content: [
                oReset,
                new sap.m.ToolbarSpacer(),
                oSign
               ],
               design: "Transparent"
            }).addStyleClass("sapUiResponsivePadding")

            oRM
                .openStart("div", oControl)
                .class("smod-signer-parent")
                .openEnd()
                .openStart("div")
                .class("smod-signer")
                .openEnd().close("div");
            oRM.renderControl(oHB);
            oRM.close("div");
        }
    });
});