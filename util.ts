export const formatPhoneNumber = (phoneNumber: string) => {
  return phoneNumber.replace(/[-\s+]/g, "");
};

export const usernameWordSplit = (name:string) => {
    const usernameSplit = name.split(" ");
    if (usernameSplit.length === 1) return name;
    return usernameSplit.length > 2 ? usernameSplit[0] + " " + usernameSplit[1] + "<br>" + usernameSplit[2] : usernameSplit[0] + "<br>" + usernameSplit[1];
};
