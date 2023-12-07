sap.ui.define(["sap/ui/core/Control"], function (Control) {
    "use strict";

    return Control.extend("com.smod.ux.controldev.ux.Icon", {
        metadata: {
            properties: {
                slot: {
                    type: "string",
                    bindable: true,
                    defaultValue: null
                },
                icon: {
                    type: "string",
                    bindable: true
                }
            },
            aggregations: {},
            events: {},
        },
        init: function () {},
        renderer: function (oRM, oControl) {

            //--Properties
            const sSlot = oControl.getSlot();
            const sIcon = oControl.getIcon();

            oRM.openStart("md-icon", oControl);
            if (sSlot) oRM.attr("slot", sSlot);
            oRM.openEnd()
                .text(sIcon)
                .close("md-icon")
        }
    });
});
