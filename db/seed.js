const { Lesson } = require("../models/index");

// Always start by deleting everything
Lesson.remove({}).then(function() {
  // Then create "seed" items
  Lesson.create({
    title: "Volcano",
    author: "Yoshi Maisami",
    description:
      "Using common materials around the house/school to build a Cardboard Volcano",
    time: "3 Hours",
    materials:
      "Cardboard, Paper, Mailing Tape, Vinegar, Baking-soda, Dish-soap, Red & Yeallow Food-coloring",
    prerequs: "Scissors 101",
    agelevel: "4 - 6",
    instructions: "Make a Volcano. (ADD STEP-by-STEP GUIDE)",
    feedbacks: [
      {
        title: "Grateful",
        author: "Sara Bell",
        content:
          "The studnets in Rainbow AM Class loved it. Thank you for the lesson"
      }
    ]
  });

  Lesson.create({
    title: "Tin Foil Boats",
    author: "Yoshi Maisami",
    description: "Students place marbles on-top of boats made of tin foil",
    time: "3 Hours",
    materials:
      "Cardboard, Paper, Mailing Tape, Vinegar, Baking-soda, Dish-soap, Red & Yeallow Food-coloring",
    prerequs: "Scissors 101",
    agelevel: "4 - 6",
    instructions: "place foil in tank water",
    feedbacks: [
      {
        title: "wonderful",
        author: "Mary",
        content:
          "kids loved it. one child was able to float a boat with 30 marbles"
      }
    ]
  });

  Lesson.create({
    title: "Balloon Cannon",
    author: "Yoshi Maisami",
    description: "Cardboard Volcano",
    time: "3 Hours",
    materials:
      "Cardboard, Paper, Mailing Tape, Vinegar, Baking-soda, Dish-soap, Red & Yeallow Food-coloring",
    prerequs: "Scissors 101",
    agelevel: "4 - 6",
    instructions: "Make a Volcano. (ADD STEP-by-STEP GUIDE)",
    feedbacks: [
      {
        title: "awesome",
        author: "Judith",
        content:
          "they worked so well. the kids were able to launch pingpong balls across the room"
      }
    ]
  });
});
