const defaults = { theme: "light", showSidebar: true };
const userSettings = { theme: "dark" };

// Create a new object finalSettings that merges both objects, 
// ensuring that userSettings overrides defaults.
const final = { ...defaults, ...userSettings}

console.log(final);