sap.ui.define([
  "sap/ui/core/Control",
  "./enum/FieldVariant",
  "./enum/TextTypes"
], function (
  Control,
  FieldVariant,
  TextTypes
) {
  "use strict";

  return Control.extend("com.smod.ux.controldev.ux.TextField", {
    metadata: {
      properties: {
        variant: {
          type: "com.smod.ux.controldev.ux.enum.FieldVariant",
          bindable: true,
          defaultValue: FieldVariant.Filled,
          group:"Appearance"
        },
        label: {
          type: "string",
          bindable: true
        },
        placeholder: {
          type: "string",
          bindable: true,
          defaultValue: ""
        },
        type: {
          type: "com.smod.ux.controldev.ux.enum.TextTypes",
          bindable: true,
          defaultValue: TextTypes.Text
        },
        rows: {
          type: "int",
          bindable: true,
          defaultValue: 2
        },
        value: {
          type: "string",
          bindable: true,
          defaultValue: ""
        },
        editable: {
          type: "boolean",
          bindable: true,
          defaultValue: true
        },
        required: {
          type: "boolean",
          bindable: true,
          defaultValue: false
        },
        error:{
          type: "boolean",
          bindable: true,
          defaultValue: false
        }
      },
      aggregations: {
        leadingIcon: {
          type: "com.smod.ux.controldev.ux.Icon",
          multiple: false
        },
        trailingIcon: {
          type: "com.smod.ux.controldev.ux.Icon",
          multiple: false
        },
      },
      events: {
        changed: {},
      },
    },
    init: function () {},
    renderer: function (oRM, oControl) {
      //--Properties
      const bEditable = oControl.getEditable();
      const bRequired = oControl.getRequired();
      const bError = oControl.getError();
      const sType = oControl.getType();
      const sValue = oControl.getValue();
      const sPlaceholder = oControl.getPlaceholder();
      const sLabel = oControl.getLabel();
      const iRows = oControl.getRows();
      
      //--Aggregations
      let oLeadingIcon = oControl.getLeadingIcon();
      let oTrailingIcon = oControl.getTrailingIcon();

      //--
      const e = `md-${oControl.getVariant()}-text-field`;

      oRM
        .openStart(e, oControl)
        .attr("label", sLabel)
        .attr("placeholder", sPlaceholder)
        .attr("type", sType)
        .attr("value", sValue);
      
       //--Error
       if(bError) oRM.attr("error");

      //--Disabled
      if(!bEditable) oRM.attr("disabled");

       //--Required
       if (bRequired) oRM.attr("required");

      //--In case of textarea set rows
      if (sType === "textarea") oRM.attr("rows", iRows);
      //--In case of textarea set rows

      //--Leading icon
      if (oLeadingIcon) {
        oLeadingIcon.setProperty("slot", "leading-icon");
        oRM.renderControl(oLeadingIcon).attr("hasLeadingIcon", true);
      }
      //--Leading icon
      //--Trailing icon
      if (oTrailingIcon) {
        oTrailingIcon.setProperty("slot", "trailing-icon");
        oRM.renderControl(oTrailingIcon).attr("hasTrailingIcon", true);
      }
      //--Trailing icon
      oRM.openEnd()
        .close(e);
    },
    oninput: function (e) {
      this.setProperty("value", e.currentTarget.value, true);
      this.fireChanged();
    }
  });
});