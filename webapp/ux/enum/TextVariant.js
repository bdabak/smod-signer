/**
* file: TextTypes.js
* path: "ux/enum/"
* namespace: "com.smod.ux.controldev"
*/
sap.ui.define([], ()=>{
    const variant = {
        Text: "text",
        Email: "email",
        Number: "number",
        Password: "password",
        Search: "search",
        Tel: "tel",
        Url: "url",
        TextArea: "textarea",
    };
    return Object.freeze(variant);
},true);