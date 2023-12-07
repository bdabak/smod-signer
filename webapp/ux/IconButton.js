sap.ui.define(["sap/ui/core/Control", "./enum/ButtonVariant"], function (Control,
    ButtonVariant) {
    "use strict";

    return Control.extend("com.smod.ux.controldev.ux.IconButton", {
        metadata: {
            properties: {
                variant: {
                    type: "com.smod.ux.controldev.ux.enum.ButtonVariant",
                    bindable: true,
                    defaultValue: ButtonVariant.Default,
                    enumerable: true,
                    group: "Appearance"
                },
                toggle: {
                    type: "boolean",
                    bindable: true,
                    defaultValue: false
                },
                enabled: {
                    type: "boolean",
                    bindable: true,
                    defaultValue: true
                }
            },
            aggregations: {
                icons: {
                    type: "com.smod.ux.controldev.ux.Icon",
                    multiple: true,
                    singularName: "icon"
                }
            },
            events: {
                pressed: {},
            },
        },
        init: function () {


        },
        renderer: function (oRM, oControl) {
            //--Properties
            const bEnabled = oControl.getEnabled();
            const bToggle = oControl.getToggle();

            //--Variant
            const e = oControl.getVariant() ? `md-${oControl.getVariant()}-icon-button` : "md-icon-button";

            //--Aggregations
            const aIcons = oControl.getIcons();

            oRM
                .openStart(e, oControl);

            //--Disabled
            if (!bEnabled) oRM.attr("disabled");
            if (bToggle) oRM.attr("toggle");
            //--Trailing icon prop
            oRM.openEnd();

            //--Icons
            aIcons.forEach((oIcon, i) => {
                oRM.renderControl(oIcon);
            });
            //--Icons

            oRM.close(e);
        },
        ontap: function () {
            this.firePressed();
        }
    });
});
