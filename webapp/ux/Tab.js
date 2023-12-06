sap.ui.define([
  "sap/ui/core/Control",
  "./enum/TabVariant"
], function (
  Control,
  TabVariant
) {
  "use strict";

  return Control.extend("com.smod.ux.controldev.ux.Tab", {
    metadata: {
      properties: {
        variant: {
          type: "com.smod.ux.controldev.ux.enum.TabVariant",
          bindable: true,
          defaultValue: TabVariant.Primary
        },
        title: {
          type: "string",
          bindable: true,
          defaultValue: ""
        },
        tabIndex: {
          type: "int",
          bindable: true,
          defaultValue: null
        },
        inlineIcon: {
          type: "boolean",
          bindable: true,
          defaultValue: false
        },
        isTab: {
          type: "boolean",
          bindable: true,
          defaultValue: true
        },
        active: {
          type: "boolean",
          bindable: true,
          defaultValue: false
        },
        iconOnly: {
          type: "boolean",
          bindable: true,
          defaultValue: false
        }
      },
      aggregations: {
        icon: {
          type: "com.smod.ux.controldev.ux.Icon",
          multiple: false
        },
      },
      defaultAggregation: "icon",
      events: {
        selected: {},
      },
    },
    init: function () { },
    renderer: function (oRM, oControl) {
      //--Properties
      const bInlineIcon = oControl.getInlineIcon();
      const bIsTab = oControl.getIsTab();
      const bActive = oControl.getActive();
      const oIcon = oControl.getAggregation("icon") || null;
      const bHasIcon = oIcon !== null;
      const bIconOnly = oControl.getIconOnly();
      const sTitle = oControl.getTitle();

      //--Set variant
      const e = `md-${oControl.getVariant()}-tab`;

      oRM
        .openStart(e, oControl);

      //--InlineIcon
      if (bInlineIcon && oIcon) oRM.attr("inline-icon");

      //--IsTab
      if (bIsTab) oRM.attr("md-tab");

      //--Active
      if (bActive) oRM.attr("active");

      //--HasIcon
      if (bHasIcon) oRM.attr("has-icon");

      //--IconOnly
      if (bIconOnly) oRM.attr("icon-only");


      oRM.openEnd();

      //--Icon
      if (oIcon) oRM.renderControl(oIcon);
      //--Icon

      //--Title
      if(sTitle) oRM.text(sTitle);
      //--Title

      oRM.close(e);
    },
    ontap:function(){
      this.getParent().selectionChanged({
        sourceTab: this
      });
    }
   
  });
});