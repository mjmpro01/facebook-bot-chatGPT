import loadAttachment from "./loadAttachment.js";
export function isAttachmentObject(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        "title" in obj &&
        "url_or_path" in obj);
}
export function eventParser(message, api) {
    return message;
}
export function textMessageParser(message, api) {
    const { threadID, messageID } = message;
    return {
        ...message,
        send: (message) => api.sendMessage(message, threadID),
        reply: (message) => api.sendMessage(message, threadID, messageID),
        sendAttachment: async (attachment, options) => {
            const imagesSource = typeof attachment === "string"
                ? [attachment]
                : Array.isArray(attachment)
                    ? attachment
                    : typeof attachment.url_or_path === "string"
                        ? [attachment.url_or_path]
                        : attachment.url_or_path;
            const msgObj = {
                body: isAttachmentObject(attachment) ? attachment.title : "",
            };
            msgObj.attachment = await loadAttachment(imagesSource, !!options?.skipFailed);
            return api.sendMessage(msgObj, threadID, !!options?.reply ? messageID : undefined);
        },
    };
}
export function reactionMessageParser(message, api) {
    const { threadID } = message;
    return {
        ...message,
        send: (message) => api.sendMessage(message, threadID),
        sendAttachment: async (attachment, options) => {
            const imagesSource = typeof attachment === "string"
                ? [attachment]
                : Array.isArray(attachment)
                    ? attachment
                    : typeof attachment.url_or_path === "string"
                        ? [attachment.url_or_path]
                        : attachment.url_or_path;
            const msgObj = {
                body: isAttachmentObject(attachment) ? attachment.title : "",
            };
            msgObj.attachment = await loadAttachment(imagesSource, !!options?.skipFailed);
            return api.sendMessage(msgObj, threadID);
        },
    };
}
export function unsendMessageParser(message, api) {
    const { threadID } = message;
    return {
        ...message,
        send: (message) => api.sendMessage(message, threadID),
        sendAttachment: async (attachment, options) => {
            const imagesSource = typeof attachment === "string"
                ? [attachment]
                : Array.isArray(attachment)
                    ? attachment
                    : typeof attachment.url_or_path === "string"
                        ? [attachment.url_or_path]
                        : attachment.url_or_path;
            const msgObj = {
                body: isAttachmentObject(attachment) ? attachment.title : "",
            };
            msgObj.attachment = await loadAttachment(imagesSource, !!options?.skipFailed);
            return api.sendMessage(msgObj, threadID);
        },
    };
}
