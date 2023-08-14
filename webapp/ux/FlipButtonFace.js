sap.ui.define(["sap/ui/core/Control"], function (Control) {
    "use strict";
  
    return Control.extend("com.smod.ux.controldev.ux.FlipButtonFace", {
      metadata: {
        properties: {
            face:{
                type: "int",
            }
        },
        aggregations:{
            content:{
                type: "sap.ui.core.Control",
                multiple: false
            }
        },
        events: {
          
        },
        defaultAggregation: "content"
      },
     
      renderer: function (oRM, oControl) {

        oRM
          .openStart("div", oControl)
          .class("smod-fb-face")
          .class("smod-fb-face-" + oControl.getFace())
          .openEnd();

        oRM.renderControl(oControl.getContent());

        oRM.close("div");
      },
    });
  });
  