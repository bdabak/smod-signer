sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.smod.ux.controldev.controller.Test", {
            onInit: function () {

            },
            onButtonPressed: function(){
                sap.m.MessageToast.show("Clicked!!!")
            }
        });
    });
