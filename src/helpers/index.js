import SecureLS from "secure-ls";
export const ls = new SecureLS({
    encodingType: "rc4",
    isCompression: true,
    encryptionSecret: "my-secret-key",
    encryptionNamespace: "vuex",
});
