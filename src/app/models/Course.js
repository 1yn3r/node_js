const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

mongoose.plugin(slug);
const Course = new Schema({
    name: { type: String, maxLength: 255, required: true },
    description: { type: String },
    image: { type: String },
    videoID: { type: String, required: true },
    level: { type: String, maxLength: 255 },
    slug: { type: String, slug: 'name', unique: true},
    
}, 
{
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);