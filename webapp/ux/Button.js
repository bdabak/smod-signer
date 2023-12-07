sap.ui.define(["sap/ui/core/Control","./enum/ButtonVariant"], function (Control,
	ButtonVariant) {
  "use strict";

  return Control.extend("com.smod.ux.controldev.ux.Button", {
    metadata: {
      properties: {
        variant: {
          type: "com.smod.ux.controldev.ux.enum.ButtonVariant",
          bindable: true,
          defaultValue: ButtonVariant.Filled,
          enumerable: true,
          group:"Appearance"
        },
        text: {
          type: "string",
          bindable: true
        },
        enabled: {
          type: "boolean",
          bindable: true,
          defaultValue: true
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
        pressed: {},
      },
    },
    init: function () {


    },
    renderer: function (oRM, oControl) {
      //--Properties
      const bEnabled = oControl.getEnabled();

      //--Variant
      const e = `md-${oControl.getVariant()}-button`;

      //--Aggregations
      let oLeadingIcon = oControl.getLeadingIcon();
      let oTrailingIcon = oControl.getTrailingIcon();

      oRM
        .openStart(e, oControl);

      //--Disabled
      if (!bEnabled) oRM.attr("disabled");

      //--Leading icon prop
      if (oLeadingIcon) {
        oLeadingIcon.setProperty("slot", "icon");
        oRM.attr("leading-icon", );
      }
      //--Leading icon prop
      //--Trailing icon prop
      if (oTrailingIcon) {
        oTrailingIcon.setProperty("slot", "icon");
        oRM.attr("trailing-icon");
      }
       //--Trailing icon prop
      oRM.openEnd();
     

      
      oRM.text(oControl.getText());

      //--Render Leading icon
      if (oLeadingIcon) {
        oRM.renderControl(oLeadingIcon);
      }
      //--Render Leading icon
      //--Render Trailing icon
      if (oTrailingIcon) {
        oRM.renderControl(oTrailingIcon);
      }
      //--Render Trailing icon

        oRM.close(e);
    },
    ontap: function () {
      this.firePressed();
    }
  });
});
