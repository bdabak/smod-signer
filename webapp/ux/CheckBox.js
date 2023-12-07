sap.ui.define(["sap/ui/core/Control"], function (Control) {
    "use strict";

    return Control.extend("com.smod.ux.controldev.ux.CheckBox", {
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
            },
            aggregations: {
            },
            events: {
                changed: {},
            },
        },
        init: function () {


        },
        renderer: function (oRM, oControl) {
            //--Properties
            const bEnabled = oControl.getEnabled();
            const bChecked = oControl.getChecked();
            const sLabel = oControl.getLabel();
            if (sLabel) {
                oRM
                    .openStart("label", oControl)
                    .style("display", "inline-flex")
                    .style("flex-direction", "row")
                    .style("align-items", "center")
                    .openEnd()
                    .openStart("md-checkbox")
                    .attr("aria-label", sLabel);
            }else{
                oRM
                .openStart("md-checkbox",oControl);
            }
          

            //--Disabled
            if (!bEnabled) oRM.attr("disabled");
            if (bChecked) oRM.attr("checked");
            if (sLabel) oRM.attr("touch-target", "wrapper");

            oRM.openEnd().close("md-checkbox");

            if (sLabel) {
                oRM
                    .text(sLabel)
                    .close("label");
            }
        },
        ontap: function () {
            const bChecked = this.getChecked();
            this.setProperty("checked", !bChecked ,true);
            this.fireChanged();
        }
    });
});
