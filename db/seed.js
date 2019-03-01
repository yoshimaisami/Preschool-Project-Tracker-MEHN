const { Lesson } = require("../models/index");

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
    instructions: "Make a Volcano. (ADD STEP-by-STEP GUIDE)",
    feedbacks: [{ title: "grateful", author: "Sara", content: "kids loved it" }]
  });

  Lesson.create({
    title: "Tin Foil Boats",
    author: "Yoshi Maisami",
    description: "Students place matbles on-top of boats made of tin foil",
    time: "3 Hours",
    materials:
      "Cardboard, Paper, Mailing Tape, Vinegar, Baking-soda, Dish-soap, Red & Yeallow Food-coloring",
    prerequs: "Scissors 101",
    agelevel: "4 - 6",
    instructions: "Make a Volcano. (ADD STEP-by-STEP GUIDE)",
    feedbacks: [
      { title: "wonderful", author: "Mary", content: "kids loved it" }
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
      { title: "awesome", author: "Judith", content: "kids loved it" }
    ]
  });
});
