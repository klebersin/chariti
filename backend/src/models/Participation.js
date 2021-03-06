const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.ObjectId;

const ParticipationSchema = new Schema({
    UserId: { type: ObjectId },
    ProjectId: { type: ObjectId },
    ParticipationStatus: { type: Boolean, default: true }
})

module.exports = mongoose.model('Participation', ParticipationSchema);