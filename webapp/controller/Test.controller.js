sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Fragment) {
        "use strict";

        return Controller.extend("com.smod.ux.controldev.controller.Test", {
            onInit: function () {

            },
            onButtonPressed: function(){
                sap.m.MessageToast.show("Clicked!!!")
            },
            onSign: function(oEvent){
                var that = this;
                if (!this._oSignDialog) {
                    Fragment.load({
                        id: that.getView().getId(),
                        name: "com.smod.ux.controldev.fragment.SignDialog",
                        controller: this
                    }).then(function(d){
                        that._oSignDialog = d;
                        that.getView().addDependent(d);
                        that._oSignDialog.open();
                    });
                }
    

            },
            onSigned: function(oEvent){
                console.log(oEvent.getParameter("signature"));
            },
            onSignedDialog: function(oEvent){
                console.log(oEvent.getParameter("signature"));
                this._oSignDialog?.close();
            },
            onSignDialogClosed:function(){
                this._oSignDialog?.destroy();
                this._oSignDialog = null;
            }
        });
    });
