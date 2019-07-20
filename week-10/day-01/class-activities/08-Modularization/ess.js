var e_essentials = {
  drink: "water",
  eat: "snickers",
  fun: "phone",
  friend: "facebook"
};

var e_niceToHaves = {
  tools: ["can opener", "flashlight", "matches"],
  safety: ["first aid kit", "gloves"]
};

var e_nonessentials = {
  cookware: "waffleMaker"
};

// module.exports is essentially an object that we can add data or variables to
// We can access them from other files using the 'require' keyword.

module.exports = {
  z_essentials: e_essentials,
  niceToHaves: e_niceToHaves,
  nonessentials: e_nonessentials
};
