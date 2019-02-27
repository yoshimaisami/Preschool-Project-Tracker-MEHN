const Lesson = require("../models/index");

// Always start by deleting everything
Lesson.remove({}).then(function() {
  // Then create "seed" items
  Lesson.create({
    title: "Volcano",
    author: "Yoshi Maisami",
    description: "Cardboard Volcano",
    time: "3 Hours",
    materials:
      "Cardboard, Paper, Mailing Tape, Vinegar, Baking-soda, Dish-soap, Red & Yeallow Food-coloring",
    prerequs: "Scissors 101",
    agelevel: "4 - 6",
    instructions: "Make a Volcano. (ADD STEP-by-STEP GUIDE)"
  });

  Lesson.create({
    title: "Volcano",
    author: "Yoshi Maisami",
    description: "Cardboard Volcano",
    time: "3 Hours",
    materials:
      "Cardboard, Paper, Mailing Tape, Vinegar, Baking-soda, Dish-soap, Red & Yeallow Food-coloring",
    prerequs: "Scissors 101",
    agelevel: "4 - 6",
    instructions: "Make a Volcano. (ADD STEP-by-STEP GUIDE)"
  });

  Lesson.create({
    title: "Volcano",
    author: "Yoshi Maisami",
    description: "Cardboard Volcano",
    time: "3 Hours",
    materials:
      "Cardboard, Paper, Mailing Tape, Vinegar, Baking-soda, Dish-soap, Red & Yeallow Food-coloring",
    prerequs: "Scissors 101",
    agelevel: "4 - 6",
    instructions: "Make a Volcano. (ADD STEP-by-STEP GUIDE)"
  });
});
