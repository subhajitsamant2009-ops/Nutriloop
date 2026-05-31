/* ─── DATA ──────────────────────────────────────────────────────
   All food, micronutrient, profile, exercise, and weekly plan
   data used across the NutriFit app.
──────────────────────────────────────────────────────────────── */

const FOODS = [
  { id:"banana",       label:"Banana",             icon:"🍌", cal:89,  pro:1.1, fat:0.3, carb:23, fiber:2.6, sugar:12,  sodium:1,   vit_c:8.7,  potassium:358, iron:0.3, calcium:5   },
  { id:"egg",          label:"Egg",                icon:"🥚", cal:155, pro:13,  fat:11,  carb:1.1,fiber:0,   sugar:1.1, sodium:124, vit_c:0,    potassium:126, iron:1.8, calcium:50  },
  { id:"rice",         label:"White Rice",         icon:"🍚", cal:130, pro:2.7, fat:0.3, carb:28, fiber:0.4, sugar:0,   sodium:1,   vit_c:0,    potassium:35,  iron:0.2, calcium:10  },
  { id:"chicken",      label:"Chicken Breast",     icon:"🍗", cal:165, pro:31,  fat:3.6, carb:0,  fiber:0,   sugar:0,   sodium:74,  vit_c:0,    potassium:256, iron:1,   calcium:15  },
  { id:"apple",        label:"Apple",              icon:"🍎", cal:52,  pro:0.3, fat:0.2, carb:14, fiber:2.4, sugar:10,  sodium:1,   vit_c:4.6,  potassium:107, iron:0.1, calcium:6   },
  { id:"milk",         label:"Whole Milk",         icon:"🥛", cal:61,  pro:3.2, fat:3.3, carb:4.8,fiber:0,   sugar:5.1, sodium:43,  vit_c:0.2,  potassium:132, iron:0.1, calcium:113 },
  { id:"bread",        label:"Whole Wheat Bread",  icon:"🍞", cal:247, pro:13,  fat:3.4, carb:41, fiber:7,   sugar:6,   sodium:400, vit_c:0,    potassium:250, iron:3.6, calcium:73  },
  { id:"spinach",      label:"Spinach",            icon:"🥬", cal:23,  pro:2.9, fat:0.4, carb:3.6,fiber:2.2, sugar:0.4, sodium:79,  vit_c:28.1, potassium:558, iron:2.7, calcium:99  },
  { id:"salmon",       label:"Salmon",             icon:"🐟", cal:208, pro:20,  fat:13,  carb:0,  fiber:0,   sugar:0,   sodium:59,  vit_c:3.9,  potassium:363, iron:0.8, calcium:12  },
  { id:"oats",         label:"Oats",               icon:"🌾", cal:389, pro:17,  fat:7,   carb:66, fiber:10.6,sugar:1,   sodium:2,   vit_c:0,    potassium:429, iron:4.7, calcium:54  },
  { id:"avocado",      label:"Avocado",            icon:"🥑", cal:160, pro:2,   fat:15,  carb:9,  fiber:6.7, sugar:0.7, sodium:7,   vit_c:10,   potassium:485, iron:0.6, calcium:12  },
  { id:"lentils",      label:"Lentils",            icon:"🫘", cal:116, pro:9,   fat:0.4, carb:20, fiber:7.9, sugar:1.8, sodium:2,   vit_c:1.5,  potassium:369, iron:3.3, calcium:19  },
  { id:"sweet_potato", label:"Sweet Potato",       icon:"🍠", cal:86,  pro:1.6, fat:0.1, carb:20, fiber:3,   sugar:4.2, sodium:55,  vit_c:2.4,  potassium:337, iron:0.6, calcium:30  },
  { id:"yogurt",       label:"Greek Yogurt",       icon:"🥣", cal:59,  pro:10,  fat:0.4, carb:3.6,fiber:0,   sugar:3.2, sodium:36,  vit_c:0,    potassium:141, iron:0.1, calcium:111 },
  { id:"broccoli",     label:"Broccoli",           icon:"🥦", cal:34,  pro:2.8, fat:0.4, carb:7,  fiber:2.6, sugar:1.7, sodium:33,  vit_c:89.2, potassium:316, iron:0.7, calcium:47  },
  { id:"almonds",      label:"Almonds",            icon:"🌰", cal:579, pro:21,  fat:50,  carb:22, fiber:12.5,sugar:4.4, sodium:1,   vit_c:0,    potassium:733, iron:3.7, calcium:264 },
  { id:"tuna",         label:"Tuna",               icon:"🐠", cal:132, pro:28,  fat:1.3, carb:0,  fiber:0,   sugar:0,   sodium:45,  vit_c:0,    potassium:252, iron:1.3, calcium:8   },
  { id:"orange",       label:"Orange",             icon:"🍊", cal:47,  pro:0.9, fat:0.1, carb:12, fiber:2.4, sugar:9.4, sodium:0,   vit_c:53.2, potassium:181, iron:0.1, calcium:40  },
  { id:"paneer",       label:"Paneer",             icon:"🧀", cal:265, pro:18,  fat:20,  carb:3,  fiber:0,   sugar:2.5, sodium:320, vit_c:0,    potassium:90,  iron:0.3, calcium:480 },
  { id:"dal",          label:"Lentil Dal",         icon:"🍲", cal:93,  pro:6.5, fat:0.3, carb:16, fiber:4,   sugar:1,   sodium:8,   vit_c:1.5,  potassium:310, iron:2.5, calcium:24  },
];

const MICROS = [
  { key:"fiber",     label:"Fiber",      unit:"g",  max:30,   color:"#1D9E75" },
  { key:"sugar",     label:"Sugar",      unit:"g",  max:50,   color:"#EF9F27" },
  { key:"sodium",    label:"Sodium",     unit:"mg", max:2300, color:"#E24B4A" },
  { key:"vit_c",     label:"Vitamin C",  unit:"mg", max:90,   color:"#378ADD" },
  { key:"potassium", label:"Potassium",  unit:"mg", max:4700, color:"#7F77DD" },
  { key:"iron",      label:"Iron",       unit:"mg", max:18,   color:"#D85A30" },
  { key:"calcium",   label:"Calcium",    unit:"mg", max:1000, color:"#1D9E75" },
];

const PROFILES = [
  { id:"beginner",   label:"Beginner",   icon:"🌱", color:"#1D9E75", bg:"#E1F5EE", tip:"Start with 2–3 sessions per week. Focus on form before intensity. Rest days are essential." },
  { id:"intermediate",label:"Intermediate",icon:"⚡",color:"#BA7517", bg:"#FAEEDA", tip:"Train 3–5 days. Add progressive overload weekly. Mix cardio and strength training." },
  { id:"advanced",   label:"Advanced",   icon:"🏆", color:"#993C1D", bg:"#FAECE7", tip:"5–6 sessions. Periodize your training into phases. Prioritize sleep and recovery nutrition." },
  { id:"senior",     label:"Senior 60+", icon:"🧡", color:"#534AB7", bg:"#EEEDFE", tip:"Low-impact movement daily. Balance and flexibility reduce fall risk. Listen to your body." },
  { id:"child",      label:"Kids 6–14",  icon:"🎈", color:"#185FA5", bg:"#E6F1FB", tip:"60 minutes of active play daily. Focus on fun, not performance. Avoid heavy weightlifting." },
  { id:"pregnant",   label:"Prenatal",   icon:"🤱", color:"#993556", bg:"#FBEAF0", tip:"Light-moderate exercise is safe for most. Avoid lying flat after 20 weeks. Stay hydrated." },
];

const EXERCISES = {
  beginner: [
    { name:"Brisk Walking",    desc:"20–30 min daily walk. Burns ~120 kcal. Improves heart health with zero equipment.",                     cat:"cardio",      level:"beginner",     sets:"30 min" },
    { name:"Bodyweight Squats",desc:"Stand feet shoulder-width, lower until thighs are parallel, rise back up.",                            cat:"strength",    level:"beginner",     sets:"3 × 12" },
    { name:"Wall Push-ups",    desc:"Place hands on wall, lean in and push. Great for chest and arms without floor pressure.",               cat:"strength",    level:"beginner",     sets:"3 × 10" },
    { name:"Seated Leg Raises",desc:"Sit upright, extend and raise each leg. Core activation with no floor requirement.",                   cat:"strength",    level:"beginner",     sets:"2 × 15" },
    { name:"Full Body Stretch",desc:"10-minute head-to-toe stretch routine. Reduces soreness, improves posture.",                           cat:"flexibility", level:"beginner",     sets:"10 min" },
    { name:"Swimming",         desc:"Easy freestyle laps. Full body, joint-friendly, and excellent cardio.",                                cat:"cardio",      level:"beginner",     sets:"20 min" },
    { name:"Standing Balance", desc:"Stand on one leg 30 seconds each side. Core stability and fall prevention.",                           cat:"balance",     level:"beginner",     sets:"3 × 30s"},
  ],
  intermediate: [
    { name:"Running / Jogging", desc:"Sustained run at conversational pace. Builds aerobic base and burns 300–400 kcal.",                   cat:"cardio",      level:"intermediate", sets:"35 min" },
    { name:"Dumbbell Lunges",   desc:"Step forward, lower back knee, drive through front heel. Leg strength and balance.",                  cat:"strength",    level:"intermediate", sets:"4 × 10" },
    { name:"Standard Push-ups", desc:"Full range push-up engaging chest, shoulders, and triceps. Increase reps weekly.",                   cat:"strength",    level:"intermediate", sets:"4 × 20" },
    { name:"Plank Hold",        desc:"Forearms on floor, body in a straight line. Builds deep core and stabilizer muscles.",                cat:"strength",    level:"intermediate", sets:"3 × 45s"},
    { name:"Cycling",           desc:"Moderate ride outdoors or on a stationary bike. Great for cardiovascular endurance.",                 cat:"cardio",      level:"intermediate", sets:"45 min" },
    { name:"Yoga Flow",         desc:"Vinyasa-style movement linking breath to motion. Flexibility, balance, and recovery.",                cat:"flexibility", level:"intermediate", sets:"30 min" },
    { name:"Jump Rope",         desc:"Fast-paced skipping. Improves coordination, calf strength, and burns 300 kcal/30 min.",              cat:"cardio",      level:"intermediate", sets:"20 min" },
  ],
  advanced: [
    { name:"HIIT Sprints",        desc:"8 rounds of 20 sec max effort + 10 sec rest. Burns 400+ kcal in 20 minutes.",                     cat:"cardio",   level:"advanced", sets:"8 rounds"  },
    { name:"Barbell Deadlift",    desc:"Hip-hinge compound lift engaging posterior chain: hamstrings, glutes, back, and core.",            cat:"strength", level:"advanced", sets:"4 × 6"     },
    { name:"Pull-ups",            desc:"Full dead-hang to chin over bar. Develops back width, biceps, and grip strength.",                 cat:"strength", level:"advanced", sets:"4 × fail"  },
    { name:"Box Jumps",           desc:"Explosive jump onto a stable platform. Develops lower body power and fast-twitch fibers.",         cat:"strength", level:"advanced", sets:"3 × 8"     },
    { name:"Battle Ropes",        desc:"Alternating or double waves with ropes. Full-body conditioning and metabolic blast.",              cat:"cardio",   level:"advanced", sets:"5 × 30s"   },
    { name:"Pistol Squat",        desc:"Single-leg squat to full depth. Extreme balance, mobility, and leg strength challenge.",           cat:"balance",  level:"advanced", sets:"3 × 5"     },
    { name:"Barbell Bench Press", desc:"Classic horizontal push. Chest, anterior deltoid, and tricep hypertrophy and strength.",           cat:"strength", level:"advanced", sets:"4 × 8"     },
  ],
  senior: [
    { name:"Chair Yoga",          desc:"Gentle seated and standing poses. Improves mobility, reduces stiffness, promotes calm.",           cat:"flexibility", level:"beginner", sets:"20 min" },
    { name:"Daily Walking",       desc:"30 min at comfortable pace. Maintains cardiovascular health, mood, and bone density.",             cat:"cardio",      level:"beginner", sets:"30 min" },
    { name:"Resistance Band Rows",desc:"Seated band rows. Safe upper-body strength with no joint stress or balance risk.",                 cat:"strength",    level:"beginner", sets:"2 × 12" },
    { name:"Single-leg Stand",    desc:"Hold for 30 seconds each side. Prevents falls and maintains proprioception.",                     cat:"balance",     level:"beginner", sets:"3 × 30s"},
    { name:"Tai Chi",             desc:"Slow, flowing movement sequence. Improves balance, reduces stress, boosts coordination.",          cat:"balance",     level:"beginner", sets:"20 min" },
    { name:"Water Aerobics",      desc:"Low-impact pool exercises. Excellent for joints, burns calories, builds strength.",               cat:"cardio",      level:"beginner", sets:"30 min" },
    { name:"Seated Marching",     desc:"Lift knees alternately while seated. Safe cardio and hip flexor activation.",                     cat:"cardio",      level:"beginner", sets:"3 × 1min"},
  ],
  child: [
    { name:"Jump Rope",           desc:"Classic playground activity. Improves coordination, cardiovascular fitness, and timing.",          cat:"cardio",      level:"beginner", sets:"15 min" },
    { name:"Obstacle Course",     desc:"DIY backyard course with crawling, jumping, and balance. Agility and team fun.",                   cat:"balance",     level:"beginner", sets:"20 min" },
    { name:"Swimming",            desc:"Structured lessons build life skills and full-body fitness. Low injury risk.",                     cat:"cardio",      level:"beginner", sets:"30 min" },
    { name:"Gymnastics",          desc:"Forward rolls, cartwheels, handstands. Body awareness and flexibility fundamentals.",              cat:"flexibility", level:"beginner", sets:"30 min" },
    { name:"Bike Riding",         desc:"Outdoor cycling for leg strength, coordination, and cardiovascular health.",                       cat:"cardio",      level:"beginner", sets:"30 min" },
    { name:"Dance / Zumba Kids",  desc:"Music-led movement class. Cardio disguised as a party — engagement is key.",                      cat:"cardio",      level:"beginner", sets:"25 min" },
    { name:"Animal Walks",        desc:"Bear crawls, crab walks, frog jumps. Full body strength and coordination for young kids.",         cat:"strength",    level:"beginner", sets:"10 min" },
  ],
  pregnant: [
    { name:"Prenatal Walking",    desc:"20–30 min easy pace. Safe, mood-boosting, and gentle on joints throughout all trimesters.",       cat:"cardio",      level:"beginner", sets:"30 min" },
    { name:"Prenatal Yoga",       desc:"Modified poses with props. Relaxation, flexibility, breath-work, and pelvic floor prep.",         cat:"flexibility", level:"beginner", sets:"30 min" },
    { name:"Kegel Exercises",     desc:"Pelvic floor contractions: hold 5 sec, release. Essential for delivery and postpartum recovery.", cat:"strength",    level:"beginner", sets:"3 × 10" },
    { name:"Seated Stretches",    desc:"Full-body flexibility routine seated or with support. Relieves back pain and tension.",           cat:"flexibility", level:"beginner", sets:"15 min" },
    { name:"Low-Impact Swimming", desc:"Pool buoyancy relieves joint pressure. Safe, full-body, refreshing in all trimesters.",          cat:"cardio",      level:"beginner", sets:"20 min" },
    { name:"Modified Squats",     desc:"Wider stance squat using a wall or chair for support. Strengthens pelvis and glutes safely.",    cat:"strength",    level:"beginner", sets:"2 × 10" },
    { name:"Cat-Cow Stretch",     desc:"Gentle spinal flexion and extension on hands and knees. Relieves lower back pressure.",          cat:"flexibility", level:"beginner", sets:"2 min"  },
  ],
};

const WEEKLY_PLANS = {
  beginner:     ["Rest / Light Walk", "Squats + Wall Push-ups", "Brisk Walking 30 min", "Full Body Stretch", "Squats + Leg Raises", "Swimming",          "Rest"],
  intermediate: ["Running 35 min",    "Push-ups + Lunges",      "Cycling 45 min",        "Plank + Yoga Flow", "Running 30 min",      "Jump Rope + Stretch","Rest"],
  advanced:     ["Deadlift + Pull-ups","HIIT Sprints",           "Bench Press + Box Jumps","Rest / Mobility",  "Battle Ropes + Pistol","Full Body Strength","Active Recovery"],
  senior:       ["Chair Yoga",         "Walking 30 min",         "Resistance Bands",      "Tai Chi",           "Walking + Balance",   "Water Aerobics",    "Rest"],
  child:        ["Bike Riding",        "Swimming",               "Jump Rope + Dance",     "Animal Walks",      "Obstacle Course",     "Gymnastics",        "Free Play"],
  pregnant:     ["Prenatal Walk",      "Prenatal Yoga",          "Kegels + Seated Stretch","Swimming",         "Cat-Cow + Squats",    "Walk + Yoga",       "Rest / Light Stretch"],
};
