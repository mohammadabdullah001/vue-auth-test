import SecureLS from "secure-ls";
export const ls = new SecureLS({
    encodingType: "rc4",
    isCompression: true,
    encryptionSecret: "my-secret-key",
    encryptionNamespace: "vuex",
});

export function currentTime() {
    const currentTime = new Date(new Date().getTime());
    return currentTime.toISOString();
}

export function addTimeInMinutes(minutes) {
    const updatedTime = new Date(
        new Date().setMinutes(new Date().getMinutes() + minutes)
    );
    return updatedTime.toISOString();
}

export function timeDifference(sTime, eTime) {
    const startTime = new Date(sTime);
    const endTime = new Date(eTime);
    const difference = endTime - startTime;

    return difference;
}
