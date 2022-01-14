export const selectMessageState = (state) => state?.message?.open || false;
export const selectMessageContent = (state) => state?.message?.content;
