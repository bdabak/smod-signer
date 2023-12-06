sap.ui.define([
    "sap/ui/core/Control"
  ], function (
    Control,
  ) {
    "use strict";
  
    return Control.extend("com.smod.ux.controldev.ux.TabContainer", {
      metadata: {
        properties: {
          activeTabIndex: {
            type: "int",
            bindable: false,
            defaultValue: 0
          }
        },
        aggregations: {
          tabs: {
            type: "com.smod.ux.controldev.ux.Tab",
            multiple: true,
            singularName: "tab"
          }
        },
        defaultAggregation: "tabs",
        events: {
          changed: {
            parameters: {
              selectedTab: { type: "com.smod.ux.controldev.ux.Tab" },
            }
          },
        },
      },
      init: function () { },
      renderer: function (oRM, oControl) {
        //--Aggregations
        const aTabs = oControl.getTabs();
  
        oRM
          .openStart("md-tabs", oControl)
          .openEnd();
  
        //--Tabs
        aTabs.forEach((oTab, i) => {
          oTab.setProperty("tabIndex", i, true);
          if (i === oControl.getActiveTabIndex()) {
            oTab.setActive(true);
          }
          oRM.renderControl(oTab);
        });
        //--Tabs
  
        oRM.close("md-tabs");
      },
      selectionChanged: function (e) {
        const oTab = e.sourceTab;
        if(oTab && this.getActiveTabIndex() !== oTab.getTabIndex()){
          this.setProperty("activeTabIndex",oTab.getTabIndex(), true);
          this.fireChanged({
            selectedTab:oTab
          });
        }
      }
    });
  });