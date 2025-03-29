const defaultSettings = { theme: "light", notifications: true };
const userSettings = { theme: "dark", language: "English" };
const extraSettings = { fontSize: 14 };
// Create an object finalSettings where:
// userSettings should override defaultSettings.
// extraSettings should be included.

const final = {...defaultSettings, ...userSettings , ...extraSettings};

console.log(final);