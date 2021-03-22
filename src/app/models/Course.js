const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema(
    {
        name: { type: String, default: '' },
        description: { type: String, default: '' },
        image: { type: String, default: '' },
        videoId: { type: String, default: '' },
        level: { type: String, default: '' },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

// add plugin
Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});
mongoose.plugin(slug);
module.exports = mongoose.model('Course', Course);
