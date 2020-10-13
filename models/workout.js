//use seeder info to build ex string, date, etc
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//once using an orm do not modify database out side of the orm
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Type of Exercise is Required"
      },
      name: {
        type: String,
        trim: true,
        required: "Name of the Exercise is Required"
      },
      duration: {
        type: Number,
        required: true
      },
      distance: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      }
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;