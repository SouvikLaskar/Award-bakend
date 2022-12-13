const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
    
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    birthdate: {
        type: String,
    },
    gender: {
        type: String,
    },
    education: {
        type: String,
    },
    jobExperience: {
        type: Number,
    },
    profile: {
        type: String,
    },
    lastPromotion: {
        type: String,
    },
    gid: {
        type: String,
    },
    doj: {
        type: String,
    },
    jobDesignation: {
        type: String,
    },
    awardsReceived: {
        type: String,
    },
    awardName: {
        type: String,
    },
    awardDate: {
        type: String,
    },

},{
    collection:'listings'
})

module.exports = mongoose.model("Listing", listingSchema);

