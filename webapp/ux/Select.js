sap.ui.define([
  "sap/ui/core/Control",
  "./enum/FieldVariant"
], function (
  Control,
  FieldVariant
) {
  "use strict";

  return Control.extend("com.smod.ux.controldev.ux.Select", {
    metadata: {
      properties: {
        variant: {
          type: "com.smod.ux.controldev.ux.enum.FieldVariant",
          bindable: true,
          defaultValue: FieldVariant.Filled
        },
        selectedKey: {
          type: "string",
          bindable: true,
          defaultValue: null
        },
        label: {
          type: "string",
          bindable: true,
          defaultValue: ""
        },
        enabled: {
          type: "boolean",
          bindable: true,
          defaultValue: true
        },
        required: {
          type: "boolean",
          bindable: true,
          defaultValue: false
        },
        error: {
          type: "boolean",
          bindable: true,
          defaultValue: false
        }
      },
      aggregations: {
        options: {
          type: "com.smod.ux.controldev.ux.SelectOption",
          multiple: true,
          singularName: "option"
        }
      },
      defaultAggregation: "options",
      events: {
        changed: {
          parameters: {
            selectedKey: { type: "string" },
            selectedOption: { type: "com.smod.ux.controldev.ux.SelectOption" },
          }
        },
      },
    },
    init: function () { },
    renderer: function (oRM, oControl) {
      //--Properties
      const bEnabled = oControl.getEnabled();
      const bRequired = oControl.getRequired();
      const bError = oControl.getError();

      //--Set variant
      const e = `md-${oControl.getVariant()}-select`;

      //--Aggregations
      const aOptions = oControl.getOptions();

      oRM
        .openStart(e, oControl)
        .attr("label", oControl.getLabel())

      //--Error
      if (bError) oRM.attr("error");

      //--Disabled
      if (!bEnabled) oRM.attr("disabled");

      //--Required
      if (bRequired) oRM.attr("required");

      oRM.openEnd();

      //--Options
      aOptions.forEach((oOpt) => {
        if (oOpt.getKey() === oControl.getSelectedKey()) {
          oOpt.setSelected(true);
        }
        oRM.renderControl(oOpt);
      });
      //--Options

      oRM.close(e);
    },
    oninput: function (e) {
      try {
        const oOpt = this.getOptions()[parseInt(e.currentTarget.selectedIndex, 10)];
        this.setProperty("selectedKey", oOpt.getKey(), true);
        this.fireChanged({
          selectedKey: oOpt.getKey(),
          selectedOption: oOpt
        });
      } catch (e) {
        console.error(e);
      }

    }
  });
});