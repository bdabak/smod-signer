sap.ui.define(["sap/ui/core/Control"], function (Control) {
    "use strict";

    return Control.extend("com.smod.ux.controldev.ux.RadioGroup", {
        metadata: {
            properties: {
                orientation: {
                    type: "string",
                    bindable: true,
                    defaultValue: "horizontal"
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
                items: {
                    type: "com.smod.ux.controldev.ux.Radio",
                    multiple: true,
                    singularName: "item"
                }
            },
            events: {
                changed: {},
            },
        },
        init: function () {


        },
        renderer: function (oRM, oControl) {
            //--Properties
            const sOrientation = oControl.getOrientation();
            const sName = oControl.getName();
            const sValue = oControl.getValue();
            //--Aggregations
            const aRadio = oControl.getItems();
            oRM
                .openStart("div", oControl)
                .class("md-radio-group-" + sOrientation )
                .openEnd();

            //--Radio
            aRadio.forEach((oRadio, i) => {
                oRadio.setProperty("name", sName, true);
                oRM
                .openStart("div")
                .class("md-radio-group-item")
                .openEnd()
                .renderControl(oRadio)
                .close("div");
            });
            //--Radio

            //--Close
            oRM.close("div");


        },
        onchange: function (e) {
            console.log(e);
            //this.fireChanged();
        }
    });
});
