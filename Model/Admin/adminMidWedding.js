const mongoose = require("mongoose");

const weddingSchema = new mongoose.Schema(
  {
    bride: {
      type: String,
      required: [true, "Please enter bride name"],
      min: [2, "Should be at least 2 characters long."],
    },

    groom: {
      type: String,
      required: [true, "Please enter groom name"],
      min: [2, "Should be at least 2 characters long."],
    },

    quote: {
      type: String,
      required: false,
    },

    description: {
      type: String,
      required: false,
    },

    profile: {
      type: String,
      required: false,
    },

    cover: {
      type: String,
      required: true,
    },

    weddingAvatar: {
      type: [String],
      required: [true, "Must Provide One Or More Files"],
    },

    link: {
      type: [String],
      required: [true, "Must provide Link"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("wedding-mid-photo", weddingSchema);