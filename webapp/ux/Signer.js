sap.ui.define([
    "sap/ui/core/Control"
], function (
    Control
) {
    "use strict";

    return Control.extend("com.smod.ux.controldev.ux.Signer", {
        metadata: {
            properties: {
                format: {
                    type: "string",
                    bindable: "true",
                    defaultValue: "default"
                },
                showUndo:{
                    type: "boolean",
                    bindable: "true",
                    defaultValue: false
                }
            },
            aggregations: {
                _toolbar: {
                    type: "sap.m.Toolbar",
                    multiple: false
                }
            },
            events: {
                signed: {
                    parameters: {
                        signature: { type: "string" }
                    }
                },
            },

        },
        init: function () {
            var sLibraryPath = jQuery.sap.getModulePath("com.smod.ux.controldev"); //get the server location of the ui library
            jQuery.sap.includeStyleSheet(sLibraryPath + "/ux/Signer.css");

            var oReset = new sap.m.Button({
                icon: "sap-icon://refresh",
                text: "Sıfırla",
                press: this._resetSignature.bind(this),
                type: "Reject"
            });

            var oSign = new sap.m.Button({
                icon: "sap-icon://signature",
                text: "İmzala",
                press: this._doSign.bind(this),
                type: "Accept"
            });

            var oTB = new sap.m.Toolbar({
                content: [
                    oReset,
                    new sap.m.ToolbarSpacer(),
                    oSign
                ],
                design: "Transparent"
            }).addStyleClass("sapUiResponsivePadding");

            this.setAggregation("_toolbar", oTB);
        },
        /**
         * @override
         */
        onAfterRendering: function () {
            var that = this;
            Control.prototype.onAfterRendering.apply(this, arguments);

            $(document).ready(function () {
                // This is the part where jSignature is initialized.
                var $sigdiv = that.$().find(".smod-signer").jSignature({ 'UndoButton': that.getShowUndo() });
            });
        },
        _resetSignature: function () {
            this.$().find(".smod-signer").jSignature("reset");
        },
        _doSign: function () {
            var signatureImage = this.$().find(".smod-signer").jSignature("getData", this.getFormat());
           
            this.fireSigned({
                signature:signatureImage
            });

        },
        renderer: function (oRM, oControl) {
            oRM
                .openStart("div", oControl)
                .class("smod-signer-parent")
                .openEnd()
                .openStart("div")
                .class("smod-signer")
                .openEnd().close("div");
            oRM.renderControl(oControl.getAggregation("_toolbar"));
            oRM.close("div");
        }
    });
});