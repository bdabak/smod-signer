sap.ui.define(["sap/ui/core/Control"], function (Control) {
  "use strict";

  return Control.extend("com.smod.ux.controldev.ux.FlipButton", {
    metadata: {
      properties: {},
      aggregations: {
        faces: {
          type: "com.smod.ux.controldev.ux.FlipButtonFace",
          multiple: true,
          singularName: "face",
        },
      },
      events: {
        press: {},
      },
      defaultAggregation: "faces"
    },
    init: function () {
      var sLibraryPath = jQuery.sap.getModulePath("com.smod.ux.controldev"); //get the server location of the ui library
      jQuery.sap.includeStyleSheet(sLibraryPath + "/ux/FlipButton.css");
    },
    renderer: function (oRM, oControl) {
      var aFaces = oControl.getFaces();

      oRM
        .openStart("div", oControl)
        .class("smod-fb")
        .openEnd()
        .openStart("div")
        .class("smod-fb-con")
        .openEnd()
        .openStart("div")
        .class("smod-fb-box")
        .class("smod-fb-" + aFaces.length + "-box")
        .openEnd();

      //Faces begin
      $.each(aFaces, function(i,oFace){
        oFace.setFace(i+1);
        oRM.renderControl(oFace);
      });
      //Faces end

      oRM.close("div").close("div").close("div");
    },
    ontap: function(e){
        e.preventDefault();
        this.firePress();
    }
  });
});
