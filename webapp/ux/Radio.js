sap.ui.define(["sap/ui/core/Control"], function (Control) {
    "use strict";

    return Control.extend("com.smod.ux.controldev.ux.Radio", {
        metadata: {
            properties: {
                label: {
                    type: "string",
                    bindable: true,
                    defaultValue: null
                },
                enabled: {
                    type: "boolean",
                    bindable: true,
                    defaultValue: true
                },
                checked: {
                    type: "boolean",
                    bindable: true,
                    defaultValue: false
                },
                name: {
                    type: "string",
                    bindable: true,
                    defaultValue: null
                },
                value: {
                    type: "string",
                    bindable: true,
                    defaultValue: null
                }
            },
            aggregations: {
            },
            events: {
                changed: {},
            },
        },
        init: function () {


        },
        /**
         * @override
         */
        onAfterRendering: function () {
            if(!this._isRendered){
                this._isRendered = true;
                const sId = this.getId();
                const oEl = document.body.querySelector('#' + sId);
                // oEl.addEventListener('input', (e) => { console.log("input", e); });
                oEl.addEventListener('change', (e) => { console.log("change", e.target.value); });
            }
        },
        renderer: function (oRM, oControl) {
            //--Properties
            const bEnabled = oControl.getEnabled();
            const bChecked = oControl.getChecked();
            const sLabel = oControl.getLabel();
            const sName = oControl.getName();
            const sValue = oControl.getValue();
            const sId = oControl.getId();

            oRM
                .openStart("md-radio", oControl)
                .attr("name", sName);
            //Properties   
            if (!bEnabled) oRM.attr("disabled");
            if (bChecked) oRM.attr("checked");
            if (sValue) oRM.attr("value", sValue);

            //--Close
            oRM.openEnd().close("md-radio");

            if (sLabel) {
                oRM
                    .openStart("label", oControl)
                    .attr("for", sId)
                    .openEnd()
                    .text(sLabel)
                    .close("label");
            }
        },
        onchange: function (e) {
            console.log(e);
            //this.fireChanged();
        }
    });
});
