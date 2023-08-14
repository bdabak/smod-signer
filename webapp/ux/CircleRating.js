sap.ui.define(["sap/ui/core/Control"], function (Control) {
  "use strict";

  return Control.extend("com.smod.ux.controldev.ux.CircleRating", {
    metadata: {
      properties: {},
      aggregations: {
        _select: {
          type: "sap.m.Select",
          multiple: false,
        },
      },
      events: {
        selected: {},
      },
    },
    init: function () {
        var sAssetsPath = jQuery.sap.getModulePath("com.smod.ux.controldev") + "/ux/assets"; //get the server location of the ui library
        
        sap.ui.core.IconPool.addIcon("circle_0", "customfont", "smodfont", "e900");
        sap.ui.core.IconPool.addIcon("circle_90", "customfont", "smodfont", "e901");
        sap.ui.core.IconPool.addIcon("circle_180", "customfont", "smodfont", "e902");
        sap.ui.core.IconPool.addIcon("circle_270", "customfont", "smodfont", "e903");
        sap.ui.core.IconPool.addIcon("circle_360", "customfont", "smodfont", "e904");

        var oSelect = new sap.m.Select({
            items: Array(5).fill(null).map(function(v,i){
                return new sap.ui.core.ListItem({
                    icon: `sap-icon://customfont/circle_${i*90}`,
                    text: i
                })
            })
        });

        this.setAggregation("_select", oSelect);

    },
    renderer: function (oRM, oControl) {
      oRM
        .openStart("div", oControl)
        .class("smod-circle-rating")
        .openEnd()
        .renderControl(oControl.getAggregation("_select"))
        .close("div");
    },
  });
});
