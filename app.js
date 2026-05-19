const WORKOUTS = [
  {
    id: "mon",
    day: "Monday",
    title: "Lower Body Strength + Core",
    theme: "Leg drive, bracing, and heavy lower-body power.",
    clearBonus: 90,
    exercises: [
      { section: "Warm-Up", name: "Jump Rope + Mobility Flow", quality: "Prep/hips/ankles", sets: 1, reps: "5 min" },
      { section: "Warm-Up", name: "Dead Bug", quality: "Deep core/bracing", sets: 2, reps: "10/side" },
      { section: "Strength", name: "Front Squat from Speed", quality: "Quads/glutes/core", sets: 4, reps: "5" },
      { section: "Strength", name: "Romanian Deadlift", quality: "Hamstrings/glutes/back", sets: 4, reps: "6-8" },
      { section: "Strength", name: "Bulgarian Split Squat", quality: "Single-leg strength", sets: 3, reps: "8/leg" },
      { section: "Accessory", name: "Calf Raise + Tib Raise", quality: "Calves/Tibialis", sets: 3, reps: "15-20" },
      { section: "Core/Carry", name: "Ab Wheel Rollout", quality: "Anti-extension core", sets: 4, reps: "8-12" },
      { section: "Finisher", name: "Heavy Sled Push", quality: "Leg drive/conditioning", sets: 6, reps: "20 yd" },
    ],
  },
  {
    id: "tue",
    day: "Tuesday",
    title: "Upper Body Strength + Grip",
    theme: "Back strength, pulling power, shoulder health, and grip toughness.",
    clearBonus: 90,
    exercises: [
      { section: "Warm-Up", name: "Band Pull-Aparts + Scap Push-Ups", quality: "Shoulder prep", sets: 2, reps: "15 each" },
      { section: "Strength", name: "Barbell Rows", quality: "Back/ribcage bracing", sets: 4, reps: "5" },
      { section: "Strength", name: "Pull-Ups / Vertical Pull-Ups", quality: "Lats/grip", sets: 4, reps: "Max" },
      { section: "Strength", name: "Barbell Row", quality: "Back/posture", sets: 4, reps: "8" },
      { section: "Power/Stability", name: "Landmine Press", quality: "Shoulders/core", sets: 3, reps: "8/side" },
      { section: "Accessory", name: "Face Pulls", quality: "Rear delts/shoulder health", sets: 3, reps: "15" },
      { section: "Grip", name: "Plate Pinch Hold", quality: "Forearms/grip", sets: 3, reps: "30 sec" },
      { section: "Finisher", name: "Rope Climb or Towel Hang", quality: "Grip/back toughness", sets: 5, reps: "Rounds" },
    ],
  },
  {
    id: "wed",
    day: "Wednesday",
    title: "Speed, Agility + Mobility",
    theme: "Acceleration, top speed, change of direction, and joint quality.",
    clearBonus: 85,
    exercises: [
      { section: "Warm-Up", name: "A-Skips + Lateral Shuffle", quality: "Coordination/footwork", sets: 3, reps: "20 yd" },
      { section: "Speed", name: "Sprint Starts", quality: "Acceleration", sets: 6, reps: "10 yd" },
      { section: "Speed", name: "Flying Sprint", quality: "Top speed", sets: 4, reps: "20 yd" },
      { section: "Agility", name: "Pro Agility 5-10-5", quality: "Change direction", sets: 4, reps: "Rounds" },
      { section: "Power", name: "Broad Jump", quality: "Horizontal power", sets: 4, reps: "3" },
      { section: "Power", name: "Lateral Bound", quality: "Single-leg power", sets: 3, reps: "5/side" },
      { section: "Core", name: "Pallof Press", quality: "Anti-rotation", sets: 3, reps: "12/side" },
      { section: "Mobility", name: "Hip Mobility Flow", quality: "Hips/groin/back", sets: 1, reps: "10 min" },
    ],
  },
  {
    id: "thu",
    day: "Thursday",
    title: "Full Body Power + Rotation",
    theme: "Explosive lifts, throws, rotation, carries, and conditioning.",
    clearBonus: 95,
    exercises: [
      { section: "Warm-Up", name: "World's Greatest Stretch", quality: "Hips/T-spine", sets: 2, reps: "5/side" },
      { section: "Power", name: "Power Clean or Trap Bar Jump", quality: "Total-body power", sets: 5, reps: "3" },
      { section: "Power", name: "Med Ball Chest Pass", quality: "Upper power", sets: 4, reps: "5" },
      { section: "Rotation", name: "Med Ball Rotational Throw", quality: "Hips/obliques", sets: 5, reps: "5/side" },
      { section: "Strength-Speed", name: "Kettlebell Swing", quality: "Glutes/hamstrings", sets: 4, reps: "10" },
      { section: "Rotation", name: "Landmine Rotation", quality: "Rotational core", sets: 4, reps: "8/side" },
      { section: "Carry", name: "Zercher Carry", quality: "Core/upper back/legs", sets: 4, reps: "25 yd" },
      { section: "Finisher", name: "Battle Rope Rotational Slams", quality: "Conditioning/rotation", sets: 6, reps: "20 sec" },
    ],
  },
  {
    id: "fri",
    day: "Friday",
    title: "Athletic Chaos + Awkward Position Strength",
    theme: "Crawling, awkward strength, groin durability, neck prep, and mat toughness.",
    clearBonus: 100,
    exercises: [
      { section: "Warm-Up", name: "Bear Crawl Hold + Crab Reach", quality: "Shoulders/core/hips", sets: 2, reps: "20 sec + 8/side" },
      { section: "Crawl", name: "Bear Crawl Forward/Backward", quality: "Core/shoulders/hips", sets: 4, reps: "20 yd" },
      { section: "Crawl", name: "Lateral Bear Crawl", quality: "Lateral core/groin", sets: 3, reps: "15 yd/way" },
      { section: "Position Strength", name: "Turkish Get-Up", quality: "Total-body control", sets: 3, reps: "3/side" },
      { section: "Groin/Core", name: "Copenhagen Plank", quality: "Adductors/side core", sets: 3, reps: "20 sec/side" },
      { section: "Carry", name: "Suitcase Carry", quality: "QL/anti-bend grip", sets: 4, reps: "30 yd/side" },
      { section: "Neck", name: "Neck Isometric Holds", quality: "Neck/traps/contact prep", sets: 3, reps: "10 sec each" },
      { section: "Finisher", name: "Sprawls + Stance Motion", quality: "Mat conditioning", sets: 5, reps: "30 sec each" },
    ],
  },
  {
    id: "sat",
    day: "Saturday",
    title: "Bonus XP Weekend: Conditioning + Core",
    theme: "Extra weekend XP built around sweat, lungs, trunk strength, and discipline.",
    clearBonus: 80,
    exercises: [
      { section: "Warm-Up", name: "Jump Rope + Dynamic Mobility", quality: "Body prep/temperature", sets: 1, reps: "8 min" },
      { section: "Conditioning", name: "Assault Bike or Sprint Intervals", quality: "Anaerobic conditioning", sets: 8, reps: "20 sec hard / 70 sec easy" },
      { section: "Conditioning", name: "Stance Motion Rounds", quality: "Wrestling movement endurance", sets: 5, reps: "1 min" },
      { section: "Core", name: "Hollow Hold", quality: "Anterior core", sets: 4, reps: "30 sec" },
      { section: "Core", name: "Russian Twist or Med Ball Twist", quality: "Rotational core", sets: 3, reps: "20 total" },
      { section: "Carry", name: "Farmer Carry", quality: "Grip/core/posture", sets: 5, reps: "30 yd" },
      { section: "Recovery", name: "Cooldown Walk + Stretch", quality: "Flush/recovery", sets: 1, reps: "10 min" },
    ],
  },
  {
    id: "sun",
    day: "Sunday",
    title: "Bonus XP Weekend: Recovery + Skill Reset",
    theme: "Low-impact XP focused on mobility, recovery, film, and getting ready for Monday.",
    clearBonus: 65,
    exercises: [
      { section: "Recovery", name: "Zone 2 Walk, Bike, or Swim", quality: "Aerobic base/recovery", sets: 1, reps: "25-35 min" },
      { section: "Mobility", name: "Full-Body Mobility Flow", quality: "Hips/ankles/T-spine/shoulders", sets: 1, reps: "15 min" },
      { section: "Core", name: "Dead Bug + Side Plank", quality: "Core control", sets: 3, reps: "10/side + 30 sec" },
      { section: "Recovery", name: "Soft Tissue Work", quality: "Calves/quads/hips/back", sets: 1, reps: "10 min" },
      { section: "Mindset", name: "Film Study or Weekly Review", quality: "Training IQ/discipline", sets: 1, reps: "15 min" },
      { section: "Mindset", name: "Set Weekly Targets", quality: "Preparation/accountability", sets: 1, reps: "3 goals" },
    ],
  },
];

const BONUS_QUESTS = [
  { id: "bonus-mobility", title: "Extra Mobility Flow", xp: 35, stat: "Mobility", details: "10-15 extra minutes focused on hips, ankles, shoulders, and T-spine." },
  { id: "bonus-core", title: "Core Armor Mini-Circuit", xp: 45, stat: "Core", details: "3 rounds: dead bug, Pallof press, side plank, and hollow hold." },
  { id: "bonus-grip", title: "Grip Tax", xp: 50, stat: "Grip", details: "Towel hangs, plate pinches, or farmer holds after the main session." },
  { id: "bonus-recovery", title: "Recovery Walk + Stretch", xp: 30, stat: "Recovery", details: "20 minute walk followed by light stretching or breathing work." },
  { id: "bonus-film", title: "Technique Study", xp: 40, stat: "Discipline", details: "Watch technique or film, then write three takeaways to apply tomorrow." },
];

const BOSS_QUESTS = [
  { id: "boss-conditioning", title: "Boss Level: Mat Conditioning Dungeon", xp: 225, stat: "Conditioning", details: "5 rounds: stance motion, sprawls, shot entries, bear crawl, and battle rope slams. Rest 60-90 seconds between rounds." },
  { id: "boss-speed", title: "Boss Level: Speed Demon Trial", xp: 190, stat: "Speed", details: "Sprint starts, flying sprints, pro agility 5-10-5, broad jumps, and lateral bounds." },
  { id: "boss-grip", title: "Boss Level: Grip Survival Trial", xp: 185, stat: "Grip", details: "Rope climb or towel hang, plate pinch hold, suitcase carry, and Zercher carry." },
  { id: "boss-core", title: "Boss Level: Core Armor Raid", xp: 175, stat: "Core", details: "Ab wheel, Pallof press, Copenhagen plank, landmine rotations, and suitcase carries." },
];

const RPG_QUOTES = [
  "Exercise supports healthy weight management when it is paired with steady habits outside the gym.",
  "A strong week is built from small clears, recovery choices, and showing up again tomorrow.",
  "Short high-effort intervals can be useful, but consistency is the real engine.",
  "Training builds mood, confidence, energy, and the stats you bring into the next route.",
  "Sweat is feedback. Progress comes from the full loop: movement, food, sleep, and patience.",
];

const RPG_TRAINING_SESSIONS = [
  {
    id: "rpg-walk",
    name: "Brisk Walk",
    xpReward: 20,
    goldReward: 10,
    statReward: { type: "def", stat: "Recovery", chance: 0.3, value: 1 },
    description: "Moderate cardio that keeps the save moving on lighter days.",
  },
  {
    id: "rpg-jog",
    name: "Jogging Intervals",
    xpReward: 50,
    goldReward: 20,
    statReward: { type: "str", stat: "Conditioning", chance: 0.4, value: 2 },
    description: "Run and recover in rounds to build lungs and route stamina.",
  },
  {
    id: "rpg-hiit",
    name: "HIIT Circuit",
    xpReward: 80,
    goldReward: 35,
    statReward: { type: "str", stat: "Power", chance: 0.6, value: 3 },
    description: "Fast, intense work for bonus XP and battle-ready output.",
  },
];

const RPG_SHOP_ITEMS = [
  { id: "rope", name: "Jump Rope", type: "weapon", stat: 4, cost: 30, icon: "speed", description: "Adds quick attack for early route battles." },
  { id: "band", name: "Resistance Band", type: "weapon", stat: 8, cost: 80, icon: "strength", description: "Better training tool for stronger zone damage." },
  { id: "vest", name: "Weighted Vest", type: "armor", stat: 5, cost: 60, icon: "core", description: "Adds defense by making every movement heavier." },
  { id: "watch", name: "Smartwatch", type: "armor", stat: 12, cost: 150, icon: "crystal", description: "Advanced recovery tracking for bigger defense." },
];

const RPG_BATTLE_ZONES = [
  {
    id: "shadow",
    name: "Shadow Rival",
    reqStr: 10,
    enemyName: "Shadow Rival",
    enemyType: "route-rival",
    enemyHp: 40,
    enemyAtk: 5,
    xpReward: 40,
    goldReward: 25,
  },
  {
    id: "golem",
    name: "Stone Golem",
    reqStr: 18,
    enemyName: "Stone Golem",
    enemyType: "core-sentinel",
    enemyHp: 100,
    enemyAtk: 12,
    xpReward: 120,
    goldReward: 80,
  },
  {
    id: "mimic",
    name: "Kettlebell Mimic",
    reqStr: 25,
    enemyName: "Kettlebell Mimic",
    enemyType: "iron-mimic",
    enemyHp: 180,
    enemyAtk: 20,
    xpReward: 200,
    goldReward: 150,
  },
  {
    id: "beast",
    name: "Conditioning Beast",
    reqStr: 35,
    enemyName: "Conditioning Beast",
    enemyType: "conditioning-rival",
    enemyHp: 280,
    enemyAtk: 30,
    xpReward: 400,
    goldReward: 300,
  },
];

const STAT_START = {
  Strength: 1,
  Power: 1,
  Speed: 1,
  Agility: 1,
  Mobility: 1,
  Core: 1,
  Grip: 1,
  Conditioning: 1,
  Recovery: 1,
  Discipline: 1,
};

const SECTION_XP = {
  "Warm-Up": 15,
  Strength: 38,
  Accessory: 25,
  "Core/Carry": 35,
  Finisher: 55,
  Grip: 35,
  Speed: 36,
  Agility: 34,
  Power: 42,
  Core: 32,
  Mobility: 22,
  Rotation: 38,
  "Strength-Speed": 42,
  Carry: 34,
  Crawl: 32,
  "Position Strength": 38,
  "Groin/Core": 34,
  Neck: 28,
  "Power/Stability": 38,
  Conditioning: 45,
  Recovery: 24,
  Mindset: 26,
};

const HUNTER_MODELS = [
  { id: "balanced", label: "Balanced Build", shoulder: 16, torso: 16, legGap: 4 },
  { id: "power", label: "Power Build", shoulder: 20, torso: 18, legGap: 5 },
  { id: "speed", label: "Speed Build", shoulder: 14, torso: 14, legGap: 3 },
  { id: "tank", label: "Tank Build", shoulder: 22, torso: 20, legGap: 6 },
  { id: "lanky", label: "Long Frame", shoulder: 13, torso: 15, legGap: 3 },
];

const HAIRSTYLES = [
  { id: "fade", label: "Clean Fade", shape: "fade" },
  { id: "braids", label: "Athlete Braids", shape: "braids" },
  { id: "locs", label: "Short Locs", shape: "locs" },
  { id: "buzz", label: "Buzz Cut", shape: "buzz" },
  { id: "afro", label: "Afro", shape: "afro" },
  { id: "waves", label: "Waves", shape: "waves" },
  { id: "flow", label: "Soccer Flow", shape: "flow" },
  { id: "topknot", label: "Fighter Top Knot", shape: "topknot" },
];

const SKIN_TONES = [
  { id: "deep", label: "Deep", value: "#5b351f" },
  { id: "brown", label: "Brown", value: "#8a5537" },
  { id: "tan", label: "Tan", value: "#b8794c" },
  { id: "golden", label: "Golden", value: "#c98b5c" },
  { id: "light", label: "Light", value: "#e0aa7a" },
  { id: "fair", label: "Fair", value: "#f1c6a5" },
];

const HAIR_COLORS = [
  { id: "black", label: "Black", value: "#111827" },
  { id: "brown", label: "Brown", value: "#5b341d" },
  { id: "auburn", label: "Auburn", value: "#92400e" },
  { id: "blonde", label: "Blonde", value: "#d9a441" },
  { id: "copper", label: "Copper", value: "#b45309" },
  { id: "silver", label: "Silver", value: "#cbd5e1" },
];

const EYE_COLORS = [
  { id: "brown", label: "Brown", value: "#3b2416" },
  { id: "blue", label: "Blue", value: "#38bdf8" },
  { id: "green", label: "Green", value: "#22c55e" },
  { id: "hazel", label: "Hazel", value: "#a16207" },
  { id: "gray", label: "Gray", value: "#94a3b8" },
  { id: "purple", label: "Hunter Purple", value: "#a855f7" },
];

const SAVE_KEY = "vincitPixelWorkoutSaveV4";
const SECTION_OPTIONS = Object.keys(SECTION_XP);
const WEEKDAY_ROUTE_IDS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const IMPORT_ROUTE_IDS = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const TRAINING_WEEK_ORDER = { mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6, sun: 7 };
const OCR_SCRIPT_PATH = "./vendor/tesseract/tesseract.min.js";
const OCR_WORKER_PATH = "./vendor/tesseract/worker.min.js";
const OCR_LANG_PATH = "https://tessdata.projectnaptha.com/4.0.0";
const DASHBOARD_TABS = [
  { id: "routes", label: "Quest Board" },
  { id: "engine", label: "RPG Engine" },
  { id: "edit", label: "Edit Workout" },
];
const RANDOM_PHASES = [
  { id: "strength", label: "Strength" },
  { id: "power", label: "Power" },
  { id: "speed", label: "Speed" },
  { id: "conditioning", label: "Conditioning" },
  { id: "mobility", label: "Mobility" },
  { id: "recovery", label: "Recovery" },
  { id: "hybrid", label: "Hybrid Week" },
];
const ATHLETE_LEVELS = [
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
  { id: "elite", label: "Elite" },
];
const RANDOM_LEVEL_CONFIG = {
  beginner: { sets: -1, clearBonus: 55, finisherSets: 3 },
  intermediate: { sets: 0, clearBonus: 70, finisherSets: 4 },
  advanced: { sets: 1, clearBonus: 85, finisherSets: 5 },
  elite: { sets: 2, clearBonus: 100, finisherSets: 6 },
};
const RANDOM_MOVEMENTS = {
  warmup: [
    { section: "Warm-Up", name: "Jump Rope + Mobility Flow", quality: "Body prep", sets: 1, reps: "6 min" },
    { section: "Warm-Up", name: "World's Greatest Stretch", quality: "Hips/T-spine", sets: 2, reps: "5/side" },
    { section: "Warm-Up", name: "A-Skips + Lateral Shuffle", quality: "Footwork prep", sets: 3, reps: "15 yd" },
    { section: "Warm-Up", name: "Dead Bug", quality: "Core bracing", sets: 2, reps: "10/side" },
  ],
  strength: [
    { section: "Strength", name: "Front Squat", quality: "Quads/glutes/core", sets: 4, reps: "5" },
    { section: "Strength", name: "Trap Bar Deadlift", quality: "Total-body strength", sets: 4, reps: "5" },
    { section: "Strength", name: "Romanian Deadlift", quality: "Hamstrings/glutes/back", sets: 4, reps: "6-8" },
    { section: "Strength", name: "Barbell Row", quality: "Back/posture", sets: 4, reps: "6-8" },
    { section: "Strength", name: "Bulgarian Split Squat", quality: "Single-leg strength", sets: 3, reps: "8/leg" },
  ],
  power: [
    { section: "Power", name: "Power Clean", quality: "Total-body power", sets: 5, reps: "3" },
    { section: "Power", name: "Trap Bar Jump", quality: "Explosive leg drive", sets: 5, reps: "3" },
    { section: "Power", name: "Med Ball Chest Pass", quality: "Upper-body power", sets: 4, reps: "5" },
    { section: "Rotation", name: "Med Ball Rotational Throw", quality: "Hip rotation", sets: 4, reps: "5/side" },
    { section: "Strength-Speed", name: "Kettlebell Swing", quality: "Glutes/hamstrings", sets: 4, reps: "10" },
  ],
  speed: [
    { section: "Speed", name: "Sprint Starts", quality: "Acceleration", sets: 6, reps: "10 yd" },
    { section: "Speed", name: "Flying Sprint", quality: "Top speed", sets: 4, reps: "20 yd" },
    { section: "Agility", name: "Pro Agility 5-10-5", quality: "Change direction", sets: 4, reps: "Rounds" },
    { section: "Power", name: "Broad Jump", quality: "Horizontal power", sets: 4, reps: "3" },
    { section: "Power", name: "Lateral Bound", quality: "Single-leg power", sets: 3, reps: "5/side" },
  ],
  conditioning: [
    { section: "Conditioning", name: "Assault Bike Intervals", quality: "Anaerobic engine", sets: 8, reps: "20 sec hard / 70 sec easy" },
    { section: "Conditioning", name: "Stance Motion Rounds", quality: "Mat endurance", sets: 5, reps: "1 min" },
    { section: "Finisher", name: "Heavy Sled Push", quality: "Leg drive", sets: 6, reps: "20 yd" },
    { section: "Finisher", name: "Battle Rope Slams", quality: "Upper conditioning", sets: 6, reps: "20 sec" },
    { section: "Crawl", name: "Bear Crawl Forward/Backward", quality: "Shoulders/core/hips", sets: 4, reps: "20 yd" },
  ],
  mobility: [
    { section: "Mobility", name: "Hip Mobility Flow", quality: "Hips/groin/back", sets: 1, reps: "10 min" },
    { section: "Mobility", name: "Full-Body Mobility Flow", quality: "Ankles/T-spine/shoulders", sets: 1, reps: "15 min" },
    { section: "Recovery", name: "Zone 2 Walk, Bike, or Swim", quality: "Aerobic recovery", sets: 1, reps: "25 min" },
    { section: "Recovery", name: "Soft Tissue Work", quality: "Calves/quads/hips/back", sets: 1, reps: "10 min" },
    { section: "Mindset", name: "Weekly Review", quality: "Discipline", sets: 1, reps: "10 min" },
  ],
  core: [
    { section: "Core", name: "Pallof Press", quality: "Anti-rotation", sets: 3, reps: "12/side" },
    { section: "Core/Carry", name: "Ab Wheel Rollout", quality: "Anti-extension core", sets: 4, reps: "8-12" },
    { section: "Groin/Core", name: "Copenhagen Plank", quality: "Adductors/side core", sets: 3, reps: "20 sec/side" },
    { section: "Carry", name: "Suitcase Carry", quality: "Anti-bend grip", sets: 4, reps: "30 yd/side" },
    { section: "Carry", name: "Farmer Carry", quality: "Grip/core/posture", sets: 5, reps: "30 yd" },
  ],
};
const INTERNET_WORKOUT_LIBRARY = [
  {
    id: "internet-bodyweight-foundation",
    category: "Bodyweight",
    sourceName: "Mayo Clinic + NHS",
    sourceUrl: "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/strength-training/art-20046670",
    summary: "No-gym strength route using squat, lunge, push, plank, and bridge patterns.",
    workout: {
      day: "Library Route",
      title: "Bodyweight Foundation Circuit",
      theme: "Simple no-equipment strength based on public health strength-training guidance.",
      clearBonus: 75,
      exercises: [
        { section: "Warm-Up", name: "Brisk Walk or March in Place", quality: "Temperature/prep", sets: 1, reps: "5 min" },
        { section: "Strength", name: "Bodyweight Squat", quality: "Lower body push", sets: 3, reps: "12-15" },
        { section: "Strength", name: "Reverse Lunge", quality: "Single-leg strength", sets: 3, reps: "8/side" },
        { section: "Strength", name: "Incline Push-Up", quality: "Upper body push", sets: 3, reps: "8-12" },
        { section: "Core", name: "Front Plank", quality: "Trunk stiffness", sets: 3, reps: "30 sec" },
        { section: "Strength", name: "Glute Bridge", quality: "Posterior chain", sets: 3, reps: "12-15" },
        { section: "Mobility", name: "Cooldown Stretch", quality: "Recovery", sets: 1, reps: "6 min" },
      ],
    },
  },
  {
    id: "internet-gentle-strength",
    category: "Mobility",
    sourceName: "NHS",
    sourceUrl: "https://www.nhs.uk/live-well/exercise/strength-exercises/",
    summary: "Gentle chair-and-wall strength route for easy entry days or recovery weeks.",
    workout: {
      day: "Library Route",
      title: "Gentle Strength + Mobility",
      theme: "Low-impact strength and joint quality with stable, easy-to-follow movements.",
      clearBonus: 60,
      exercises: [
        { section: "Warm-Up", name: "Easy Walk + Arm Circles", quality: "Gentle prep", sets: 1, reps: "5 min" },
        { section: "Strength", name: "Sit-to-Stand", quality: "Leg strength", sets: 3, reps: "8-10" },
        { section: "Strength", name: "Mini-Squat to Chair", quality: "Knee/hip control", sets: 3, reps: "8-10" },
        { section: "Strength", name: "Wall Press-Up", quality: "Upper body push", sets: 3, reps: "5-10" },
        { section: "Mobility", name: "Sideways Leg Lift", quality: "Hip stability", sets: 2, reps: "5/side" },
        { section: "Mobility", name: "Standing Leg Extension", quality: "Glutes/hamstrings", sets: 2, reps: "5/side" },
        { section: "Recovery", name: "Breathing + Stretch Reset", quality: "Cooldown", sets: 1, reps: "5 min" },
      ],
    },
  },
  {
    id: "internet-carry-core",
    category: "Strength",
    sourceName: "ACE + ExRx",
    sourceUrl: "https://www.acefitness.org/resources/everyone/exercise-library/",
    summary: "Loaded-carry route for grip, trunk stiffness, and full-body strength.",
    workout: {
      day: "Library Route",
      title: "Carry Core Strength",
      theme: "Integrated strength route inspired by exercise-library carry and core movements.",
      clearBonus: 95,
      exercises: [
        { section: "Warm-Up", name: "Cat-Cow + Dead Bug", quality: "Spine/core prep", sets: 2, reps: "8 each" },
        { section: "Strength", name: "Goblet Squat", quality: "Legs/core", sets: 4, reps: "8" },
        { section: "Strength", name: "Dumbbell Row", quality: "Back/posture", sets: 4, reps: "8/side" },
        { section: "Carry", name: "Farmer Carry", quality: "Grip/core/posture", sets: 5, reps: "30 yd" },
        { section: "Carry", name: "Suitcase Carry", quality: "Anti-bend core", sets: 4, reps: "25 yd/side" },
        { section: "Core", name: "Bird-Dog", quality: "Cross-body stability", sets: 3, reps: "8/side" },
        { section: "Finisher", name: "Bear Crawl", quality: "Full-body conditioning", sets: 4, reps: "15 yd" },
      ],
    },
  },
  {
    id: "internet-cardio-strength",
    category: "Conditioning",
    sourceName: "CDC + ACSM",
    sourceUrl: "https://www.cdc.gov/physical-activity-basics/adding-adults/index.html",
    summary: "Aerobic-plus-strength route that echoes weekly activity guideline structure.",
    workout: {
      day: "Library Route",
      title: "Cardio + Strength Blend",
      theme: "Moderate conditioning mixed with muscle-strengthening work.",
      clearBonus: 85,
      exercises: [
        { section: "Warm-Up", name: "Brisk Walk", quality: "Aerobic prep", sets: 1, reps: "5 min" },
        { section: "Conditioning", name: "Jog or Fast Walk Intervals", quality: "Aerobic engine", sets: 6, reps: "1 min hard / 1 min easy" },
        { section: "Strength", name: "Step-Up", quality: "Leg strength", sets: 3, reps: "10/side" },
        { section: "Strength", name: "Push-Up or Incline Push-Up", quality: "Upper push", sets: 3, reps: "8-12" },
        { section: "Core", name: "Side Plank", quality: "Lateral core", sets: 3, reps: "20 sec/side" },
        { section: "Conditioning", name: "Stair Climb or Hill Walk", quality: "Leg conditioning", sets: 5, reps: "45 sec" },
        { section: "Recovery", name: "Cooldown Walk", quality: "Flush", sets: 1, reps: "5 min" },
      ],
    },
  },
  {
    id: "internet-core-control",
    category: "Core",
    sourceName: "ACE",
    sourceUrl: "https://www.acefitness.org/resources/everyone/exercise-library/",
    summary: "Core-control route built around anti-extension, anti-rotation, and crawling.",
    workout: {
      day: "Library Route",
      title: "Core Control Circuit",
      theme: "Trunk control route for bracing, posture, and mat toughness.",
      clearBonus: 80,
      exercises: [
        { section: "Warm-Up", name: "Cat-Cow + Child's Pose", quality: "Spine prep", sets: 2, reps: "6 each" },
        { section: "Core", name: "Dead Bug", quality: "Anti-extension", sets: 3, reps: "10/side" },
        { section: "Core", name: "Bird-Dog", quality: "Cross-body control", sets: 3, reps: "8/side" },
        { section: "Core", name: "Plank Shoulder Tap", quality: "Anti-rotation", sets: 3, reps: "16 total" },
        { section: "Groin/Core", name: "Side Plank", quality: "Lateral chain", sets: 3, reps: "25 sec/side" },
        { section: "Crawl", name: "Bear Crawl Hold", quality: "Shoulders/core", sets: 4, reps: "20 sec" },
        { section: "Mobility", name: "Hip Mobility Flow", quality: "Reset", sets: 1, reps: "6 min" },
      ],
    },
  },
  {
    id: "internet-band-starter",
    category: "Strength",
    sourceName: "Mayo Clinic",
    sourceUrl: "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/strength-training/art-20046670",
    summary: "Resistance-band route for lightweight strength training at home.",
    workout: {
      day: "Library Route",
      title: "Resistance Band Starter",
      theme: "Low-equipment strength route using tubing/bands and controlled reps.",
      clearBonus: 75,
      exercises: [
        { section: "Warm-Up", name: "Band Pull-Aparts + March", quality: "Shoulder/body prep", sets: 2, reps: "15 + 60 sec" },
        { section: "Strength", name: "Band Squat", quality: "Lower body", sets: 3, reps: "12" },
        { section: "Strength", name: "Band Row", quality: "Back/posture", sets: 3, reps: "12" },
        { section: "Strength", name: "Band Chest Press", quality: "Upper push", sets: 3, reps: "10-12" },
        { section: "Strength", name: "Band Romanian Deadlift", quality: "Posterior chain", sets: 3, reps: "12" },
        { section: "Core", name: "Band Pallof Press", quality: "Anti-rotation", sets: 3, reps: "10/side" },
        { section: "Mobility", name: "Shoulder + Hip Stretch", quality: "Cooldown", sets: 1, reps: "6 min" },
      ],
    },
  },
  {
    id: "internet-agility-integrated",
    category: "Athletic",
    sourceName: "ACE",
    sourceUrl: "https://www.acefitness.org/resources/everyone/exercise-library/",
    summary: "Athletic body-control route using shuffle, lunge, crawl, and jump patterns.",
    workout: {
      day: "Library Route",
      title: "Agility Integrated Route",
      theme: "Footwork, body control, full-body coordination, and field-ready conditioning.",
      clearBonus: 90,
      exercises: [
        { section: "Warm-Up", name: "A-Skips + Lateral Shuffle", quality: "Footwork prep", sets: 3, reps: "15 yd" },
        { section: "Agility", name: "Lateral Shuffle", quality: "Change direction", sets: 5, reps: "15 yd/way" },
        { section: "Strength", name: "Forward Lunge", quality: "Single-leg strength", sets: 3, reps: "8/side" },
        { section: "Power", name: "Broad Jump", quality: "Horizontal power", sets: 4, reps: "3" },
        { section: "Crawl", name: "Bear Crawl", quality: "Integrated strength", sets: 4, reps: "15 yd" },
        { section: "Core", name: "Plank", quality: "Bracing", sets: 3, reps: "30 sec" },
        { section: "Finisher", name: "Shuttle Run", quality: "Conditioning", sets: 5, reps: "20 yd" },
      ],
    },
  },
  {
    id: "internet-recovery-walk",
    category: "Recovery",
    sourceName: "CDC + NHS",
    sourceUrl: "https://www.cdc.gov/physical-activity-basics/adding-adults/index.html",
    summary: "Recovery route for movement quality, light aerobic work, and consistency.",
    workout: {
      day: "Library Route",
      title: "Recovery Walk + Strength Reset",
      theme: "Low-impact work that keeps the streak alive without beating up the body.",
      clearBonus: 55,
      exercises: [
        { section: "Recovery", name: "Brisk Walk", quality: "Low-impact aerobic", sets: 1, reps: "20 min" },
        { section: "Mobility", name: "Full-Body Mobility Flow", quality: "Joints", sets: 1, reps: "10 min" },
        { section: "Strength", name: "Sit-to-Stand", quality: "Gentle legs", sets: 2, reps: "8" },
        { section: "Strength", name: "Wall Press-Up", quality: "Gentle upper body", sets: 2, reps: "8" },
        { section: "Core", name: "Dead Bug", quality: "Core control", sets: 2, reps: "8/side" },
        { section: "Mindset", name: "Training Review", quality: "Discipline", sets: 1, reps: "3 notes" },
      ],
    },
  },
];

const DEFAULT_STATE = {
  character: null,
  selectedDay: "mon",
  xp: 0,
  gold: 0,
  streak: 0,
  stats: { ...STAT_START },
  completedExercises: {},
  claimedDays: {},
  restedDays: {},
  completedSpecial: {},
  customWorkouts: [],
  originalWorkouts: null,
  routeReplacements: {},
  collapsedPanels: {
    trainingRoutes: false,
    battleStats: true,
    sideRoutes: true,
    championTrials: true,
    adventureLog: false,
  },
  uiSettings: {
    settingsOpen: false,
    showAdventureLog: true,
    layoutProfile: "landscape",
  },
  rpg: {
    baseStr: 10,
    baseDef: 5,
    purchasedItemIds: [],
    equippedWeaponId: null,
    equippedArmorId: null,
    trainingCompletions: {},
    zoneWins: {},
    lastBattle: null,
  },
  log: ["League board online. Vincit qui patitur workout program loaded."],
};

function createBlankCharacterDraft() {
  return {
    name: "",
    heightFeet: "6",
    heightInches: "0",
    weight: "200",
    archetype: "Power Grappler",
    model: "balanced",
    hairstyle: "fade",
    hairColor: "black",
    skinTone: "brown",
    eyeColor: "brown",
    workoutSetup: "preset",
    randomPhase: "hybrid",
    randomLevel: "elite",
    importText: "",
    importAnalysis: "",
  };
}

let draftCharacter = createBlankCharacterDraft();

function createBlankCustomWorkoutDraft() {
  return {
    day: "Custom Route",
    targetRoute: "new",
    title: "",
    theme: "",
    clearBonus: "75",
    exercises: [
      { section: "Warm-Up", name: "", quality: "", sets: "1", reps: "" },
      { section: "Strength", name: "", quality: "", sets: "3", reps: "" },
      { section: "Finisher", name: "", quality: "", sets: "4", reps: "" },
    ],
  };
}

let customWorkoutDraft = createBlankCustomWorkoutDraft();
let randomWorkoutDraft = { phase: "strength", athleteLevel: "elite" };
let workoutLibraryFilter = "all";

const app = document.querySelector("#app");
let state = getInitialState();
let titleStarted = false;
let activeDashboardTab = "routes";
let rpgActionBusy = false;
let rpgActionTimer = null;
let lastTodayRouteId = getTodayRouteId();
let characterCreatorError = "";
let importAnalysisRun = 0;
let ocrScriptPromise = null;
let lastOcrProgressRender = 0;

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function optionList(items, selectedId) {
  return items
    .map((item) => `<option value="${escapeHtml(item.id)}" ${item.id === selectedId ? "selected" : ""}>${escapeHtml(item.label)}</option>`)
    .join("");
}

function archetypeOptions(selected) {
  return ["Power Grappler", "Speed Hunter", "Conditioning Demon", "Core Tank", "All-Around Athlete"]
    .map((item) => `<option ${item === selected ? "selected" : ""}>${escapeHtml(item)}</option>`)
    .join("");
}

function sectionOptions(selected) {
  return SECTION_OPTIONS.map((item) => `<option value="${escapeHtml(item)}" ${item === selected ? "selected" : ""}>${escapeHtml(item)}</option>`).join("");
}

function workoutLibraryFilterOptions(selected) {
  const categories = ["all", ...new Set(INTERNET_WORKOUT_LIBRARY.map((item) => item.category))];
  return categories
    .map((category) => `<option value="${escapeHtml(category)}" ${category === selected ? "selected" : ""}>${escapeHtml(category === "all" ? "All Sources" : category)}</option>`)
    .join("");
}

function routePlacementOptions(selected) {
  return [
    `<option value="new" ${selected === "new" ? "selected" : ""}>Add as New Route</option>`,
    ...WORKOUTS.map((workout) => (
      `<option value="${escapeHtml(workout.id)}" ${workout.id === selected ? "selected" : ""}>Replace ${escapeHtml(workout.day)}</option>`
    )),
    ...(state.customWorkouts || []).map((workout) => (
      `<option value="${escapeHtml(workout.id)}" ${workout.id === selected ? "selected" : ""}>Edit ${escapeHtml(workout.day)}: ${escapeHtml(workout.title)}</option>`
    )),
  ].join("");
}

function getDeviceCalendarInfo(date = new Date()) {
  const todayRouteId = WEEKDAY_ROUTE_IDS[date.getDay()];
  const dateLabel = new Intl.DateTimeFormat(undefined, {
    calendar: "gregory",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
  const timeLabel = new Intl.DateTimeFormat(undefined, {
    calendar: "gregory",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  }).format(date);
  const todayRoute = WORKOUTS.find((workout) => workout.id === todayRouteId);
  return {
    dateLabel,
    timeLabel,
    todayRouteId,
    todayRouteLabel: todayRoute ? todayRoute.day : "Today",
  };
}

function getTodayRouteId() {
  return WEEKDAY_ROUTE_IDS[new Date().getDay()];
}

function renderCalendarPanel({ showSync = false } = {}) {
  const calendar = getDeviceCalendarInfo();
  return `
    <div class="calendar-panel">
      <div class="calendar-cell">
        <span>Gregorian Date</span>
        <strong data-calendar-date>${escapeHtml(calendar.dateLabel)}</strong>
      </div>
      <div class="calendar-cell">
        <span>Device Time</span>
        <strong data-calendar-time>${escapeHtml(calendar.timeLabel)}</strong>
      </div>
      <div class="calendar-cell today-cell">
        <span>Today's Route</span>
        <strong data-calendar-route>${escapeHtml(calendar.todayRouteLabel)}</strong>
      </div>
      ${showSync ? `<button class="pixel-button small calendar-sync" data-action="sync-today">Sync Today</button>` : ""}
    </div>
  `;
}

function updateCalendarClock() {
  if (!document.querySelectorAll) return;
  const calendar = getDeviceCalendarInfo();
  document.querySelectorAll("[data-calendar-date]").forEach((item) => {
    item.textContent = calendar.dateLabel;
  });
  document.querySelectorAll("[data-calendar-time]").forEach((item) => {
    item.textContent = calendar.timeLabel;
  });
  document.querySelectorAll("[data-calendar-route]").forEach((item) => {
    item.textContent = calendar.todayRouteLabel;
  });
}

function statForSection(section) {
  if (section.includes("Strength")) return "Strength";
  if (section.includes("Power") || section === "Strength-Speed") return "Power";
  if (section === "Speed") return "Speed";
  if (section === "Agility") return "Agility";
  if (section === "Mobility" || section === "Warm-Up") return "Mobility";
  if (section.includes("Core") || section === "Rotation") return "Core";
  if (section === "Grip") return "Grip";
  if (section === "Finisher" || section === "Conditioning") return "Conditioning";
  if (section === "Recovery") return "Recovery";
  return "Discipline";
}

function exerciseXp(exercise) {
  const base = SECTION_XP[exercise.section] || 25;
  return base + Math.max(0, Number(exercise.sets || 1) - 1) * 4;
}

function getTrainingWeekdayIndex(date = new Date()) {
  const day = date.getDay();
  return day === 0 ? 7 : day;
}

function isLateWorkout(workout, date = new Date()) {
  const routeIndex = TRAINING_WEEK_ORDER[workout?.id];
  if (!routeIndex) return false;
  return routeIndex < getTrainingWeekdayIndex(date);
}

function isFutureWorkout(workout, date = new Date()) {
  const routeIndex = TRAINING_WEEK_ORDER[workout?.id];
  if (!routeIndex) return false;
  return routeIndex > getTrainingWeekdayIndex(date);
}

function adjustedXp(amount, workout) {
  return isLateWorkout(workout) ? Math.ceil(amount * 0.5) : amount;
}

function totalWorkoutXp(workout) {
  const exerciseTotal = (workout?.exercises || []).reduce((sum, exercise) => sum + adjustedXp(exerciseXp(exercise), workout), 0);
  return exerciseTotal + adjustedXp(Number(workout?.clearBonus || 0), workout);
}

function restXpForWorkout(workout) {
  return Math.max(1, Math.ceil(totalWorkoutXp(workout) * 0.25));
}

function isWorkoutRested(dayId) {
  return Boolean(state.restedDays?.[dayId]);
}

function renderRestIcon() {
  return `<span class="rest-icon" aria-hidden="true"></span>`;
}

function renderPixelIcon(type, label = "") {
  return `<span class="pixel-icon ${escapeHtml(type)}" aria-hidden="true">${label ? `<i>${escapeHtml(label)}</i>` : ""}</span>`;
}

const INVENTORY_ICON_LABELS = {
  xp: "XP",
  coin: "Coin",
  heart: "Streak / Heart",
  strength: "Strength",
  map: "Map / Route Progress",
  crystal: "Level Crystal",
};

function renderInventorySlot(type, label = INVENTORY_ICON_LABELS[type] || type) {
  const safeLabel = escapeHtml(label);
  return `
    <div class="slot tooltip-slot" role="img" data-tooltip="${safeLabel}" title="${safeLabel}" aria-label="${safeLabel}" tabindex="0">
      ${renderPixelIcon(type, type === "xp" ? "XP" : "")}
    </div>
  `;
}

function renderInventoryHudItem(type, value, label = INVENTORY_ICON_LABELS[type] || type) {
  const safeLabel = escapeHtml(label);
  const safeValue = escapeHtml(value);
  return `
    <span class="tooltip-slot inventory-hud-item" role="group" data-tooltip="${safeLabel}" title="${safeLabel}" aria-label="${safeLabel}: ${safeValue}" tabindex="0">
      ${renderPixelIcon(type, type === "xp" ? "XP" : "")}
      <strong>${safeValue}</strong>
    </span>
  `;
}

function createSeededRng(seed = Date.now()) {
  let value = Math.floor(Number(seed) || Date.now()) % 2147483647;
  if (value <= 0) value += 2147483646;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

function pickRandom(items, rng) {
  return items[Math.floor(rng() * items.length)] || items[0];
}

function pickMany(items, count, rng) {
  const pool = [...items];
  const picked = [];
  while (picked.length < count && pool.length) {
    const index = Math.floor(rng() * pool.length);
    picked.push(pool.splice(index, 1)[0]);
  }
  return picked;
}

function scaleRandomExercise(exercise, athleteLevel = "advanced") {
  const config = RANDOM_LEVEL_CONFIG[athleteLevel] || RANDOM_LEVEL_CONFIG.advanced;
  const sets = Math.max(1, Number(exercise.sets || 1) + config.sets);
  return { ...exercise, sets };
}

function phaseLabel(phase) {
  return findById(RANDOM_PHASES, phase).label.replace(" Week", "");
}

function workoutPhasePlan(phase, rng) {
  if (phase === "hybrid") {
    return pickRandom(["strength", "power", "speed", "conditioning"], rng);
  }
  if (phase === "recovery") return "mobility";
  return RANDOM_MOVEMENTS[phase] ? phase : "strength";
}

function generateWorkout({ phase = "strength", athleteLevel = "advanced", seed = Date.now(), day = "Random Route", routeIndex = 0 } = {}) {
  const rng = createSeededRng(seed + routeIndex * 9973);
  const chosenPhase = workoutPhasePlan(phase, rng);
  const levelConfig = RANDOM_LEVEL_CONFIG[athleteLevel] || RANDOM_LEVEL_CONFIG.advanced;
  const mainPool = RANDOM_MOVEMENTS[chosenPhase] || RANDOM_MOVEMENTS.strength;
  const warmup = scaleRandomExercise(pickRandom(RANDOM_MOVEMENTS.warmup, rng), athleteLevel);
  const mainWork = pickMany(mainPool, chosenPhase === "mobility" ? 3 : 4, rng).map((exercise) => scaleRandomExercise(exercise, athleteLevel));
  const core = scaleRandomExercise(pickRandom(RANDOM_MOVEMENTS.core, rng), athleteLevel);
  const finisherPool = chosenPhase === "mobility" ? RANDOM_MOVEMENTS.mobility : RANDOM_MOVEMENTS.conditioning;
  const finisher = { ...scaleRandomExercise(pickRandom(finisherPool, rng), athleteLevel), sets: levelConfig.finisherSets };
  const label = phaseLabel(chosenPhase);

  return {
    day,
    title: `${label} Random Route`,
    theme: `Generated ${athleteLevel} ${label.toLowerCase()} session with a balanced warm-up, main work, core, and finish.`,
    clearBonus: levelConfig.clearBonus,
    random: true,
    phase: chosenPhase,
    athleteLevel,
    exercises: [warmup, ...mainWork, core, finisher],
  };
}

function generateWeek({ phase = "hybrid", athleteLevel = "advanced", seed = Date.now() } = {}) {
  const hybridPlan = ["strength", "power", "speed", "strength", "conditioning", "mobility", "recovery"];
  const focusedPlan = phase === "hybrid"
    ? hybridPlan
    : [phase, "power", "speed", phase, "conditioning", "mobility", "recovery"];

  return IMPORT_ROUTE_IDS.map((routeId, index) => {
    const preset = WORKOUTS.find((workout) => workout.id === routeId) || WORKOUTS[index];
    const workoutPhase = focusedPlan[index] || phase;
    return {
      ...generateWorkout({
        phase: workoutPhase,
        athleteLevel,
        seed,
        day: preset.day,
        routeIndex: index,
      }),
      title: `${preset.day} ${phaseLabel(workoutPhase)} Route`,
    };
  });
}

function completeWorkout(workout, options = {}) {
  if (!options.completed) {
    return { completed: false, xp: 0, gold: 0, bonuses: [], summary: "Workout not completed yet." };
  }

  const baseXp = (workout?.exercises || []).reduce((sum, exercise) => sum + exerciseXp(exercise), 0) + Number(workout?.clearBonus || 0);
  const bonuses = [];
  if (options.perfectForm) bonuses.push({ label: "Perfect Form", xp: Math.ceil(baseXp * 0.12) });
  if (options.pr) bonuses.push({ label: "PR Bonus", xp: Math.ceil(baseXp * 0.18) });
  if (options.mobilityDone) bonuses.push({ label: "Mobility Done", xp: 35 });
  if (Number(options.streakDays || 0) >= 3) bonuses.push({ label: "Streak Bonus", xp: Math.min(120, Number(options.streakDays) * 8) });

  const bonusXp = bonuses.reduce((sum, bonus) => sum + bonus.xp, 0);
  const xp = baseXp + bonusXp;
  return {
    completed: true,
    xp,
    gold: Math.ceil(xp / 5),
    baseXp,
    bonuses,
    summary: `${workout?.title || "Workout"} complete. +${xp} XP earned.`,
  };
}

function xpNeededForLevel(level) {
  return 120 + (level - 1) * 65;
}

function calculateLevel(totalXp) {
  let level = 1;
  let remaining = Number(totalXp) || 0;
  while (remaining >= xpNeededForLevel(level)) {
    remaining -= xpNeededForLevel(level);
    level += 1;
  }
  return { level, currentLevelXp: remaining, nextLevelXp: xpNeededForLevel(level) };
}

function getRank(level) {
  if (level >= 35) return "National Threat";
  if (level >= 28) return "S-Rank Hunter";
  if (level >= 22) return "A-Rank Hunter";
  if (level >= 15) return "B-Rank Hunter";
  if (level >= 8) return "C-Rank Hunter";
  return "E-Rank Rookie";
}

function validateWorkoutData() {
  const errors = [];
  if (WORKOUTS.length !== 7) errors.push("Expected seven training days.");
  WORKOUTS.forEach((workout) => {
    if (!Array.isArray(workout.exercises)) errors.push(`${workout.day} is missing exercises.`);
    workout.exercises.forEach((exercise, index) => {
      ["section", "name", "quality", "sets", "reps"].forEach((field) => {
        if (exercise[field] === undefined || exercise[field] === "") errors.push(`${workout.day} exercise ${index + 1} missing ${field}.`);
      });
    });
  });
  if (!BONUS_QUESTS.length) errors.push("Missing bonus quests.");
  if (!BOSS_QUESTS.length) errors.push("Missing boss quests.");
  if (!HUNTER_MODELS.length || !HAIRSTYLES.length || !SKIN_TONES.length || !HAIR_COLORS.length || !EYE_COLORS.length) {
    errors.push("Missing character creator options.");
  }
  return errors;
}

function normalizeUiSettings(raw = {}) {
  const fallback = structuredClone(DEFAULT_STATE.uiSettings);
  const layoutProfile = raw?.layoutProfile === "portrait" ? "portrait" : "landscape";
  return {
    ...fallback,
    ...(raw || {}),
    settingsOpen: Boolean(raw?.settingsOpen),
    showAdventureLog: raw?.showAdventureLog !== false,
    layoutProfile,
  };
}

function getInitialState() {
  const saved = window.localStorage.getItem(SAVE_KEY);
  if (!saved) return structuredClone(DEFAULT_STATE);
  try {
    const parsed = JSON.parse(saved);
    let originalWorkouts = Array.isArray(parsed.originalWorkouts) ? parsed.originalWorkouts : null;
    let routeReplacements = parsed.routeReplacements || {};
    const setupMode = parsed.character?.workoutSetup;
    if (!originalWorkouts && (setupMode === "import" || setupMode === "random") && IMPORT_ROUTE_IDS.every((routeId) => routeReplacements[routeId])) {
      originalWorkouts = originalWorkoutsFromRouteReplacements(routeReplacements);
      routeReplacements = {};
    }
    return {
      ...structuredClone(DEFAULT_STATE),
      ...parsed,
      stats: { ...STAT_START, ...(parsed.stats || {}) },
      completedExercises: parsed.completedExercises || {},
      claimedDays: parsed.claimedDays || {},
      restedDays: parsed.restedDays || {},
      completedSpecial: parsed.completedSpecial || {},
      customWorkouts: Array.isArray(parsed.customWorkouts) ? parsed.customWorkouts : [],
      originalWorkouts,
      routeReplacements,
      collapsedPanels: { ...DEFAULT_STATE.collapsedPanels, ...(parsed.collapsedPanels || {}) },
      uiSettings: normalizeUiSettings(parsed.uiSettings),
      rpg: normalizeRpgState(parsed.rpg),
      log: Array.isArray(parsed.log) ? parsed.log : DEFAULT_STATE.log,
    };
  } catch {
    window.localStorage.removeItem(SAVE_KEY);
    return structuredClone(DEFAULT_STATE);
  }
}

function saveState() {
  window.localStorage.setItem(SAVE_KEY, JSON.stringify(state));
}

function setState(updater) {
  state = typeof updater === "function" ? updater(state) : updater;
  saveState();
  render();
}

function findById(items, id, fallbackIndex = 0) {
  return items.find((item) => item.id === id) || items[fallbackIndex];
}

function normalizeRpgState(raw = {}) {
  const fallback = structuredClone(DEFAULT_STATE.rpg);
  return {
    ...fallback,
    ...(raw || {}),
    purchasedItemIds: Array.isArray(raw?.purchasedItemIds) ? raw.purchasedItemIds : [],
    trainingCompletions: raw?.trainingCompletions || {},
    zoneWins: raw?.zoneWins || {},
    lastBattle: raw?.lastBattle || null,
  };
}

function getRpgItem(itemId) {
  return RPG_SHOP_ITEMS.find((item) => item.id === itemId) || null;
}

function getRpgZone(zoneId) {
  return RPG_BATTLE_ZONES.find((zone) => zone.id === zoneId) || null;
}

function getRpgComputedStats(snapshot = state) {
  const rpg = normalizeRpgState(snapshot.rpg);
  const stats = { ...STAT_START, ...(snapshot.stats || {}) };
  const weapon = getRpgItem(rpg.equippedWeaponId);
  const armor = getRpgItem(rpg.equippedArmorId);
  const routeAttack = Math.floor(((stats.Strength || 1) + (stats.Power || 1) + (stats.Grip || 1)) / 2);
  const routeDefense = Math.floor(((stats.Core || 1) + (stats.Recovery || 1) + (stats.Discipline || 1)) / 2);
  return {
    baseStr: rpg.baseStr,
    baseDef: rpg.baseDef,
    attack: rpg.baseStr + routeAttack + (weapon?.stat || 0),
    defense: rpg.baseDef + routeDefense + (armor?.stat || 0),
    routeAttack,
    routeDefense,
    weapon,
    armor,
  };
}

function levelUpEntries(prev, nextXp) {
  const beforeLevel = calculateLevel(prev.xp).level;
  const after = calculateLevel(nextXp);
  if (after.level <= beforeLevel) return [];
  const hunterName = prev.character?.name || "Hunter";
  return [`LEVEL UP! ${hunterName} reached Level ${after.level}. Rank: ${getRank(after.level)}.`];
}

function rewardLog(prev, nextXp, entries, limit = 7) {
  const lines = Array.isArray(entries) ? [...entries] : [entries];
  lines.push(...levelUpEntries(prev, nextXp));
  return [...lines, ...prev.log.slice(0, Math.max(0, limit - lines.length))];
}

function clearRpgActionTimer() {
  if (rpgActionTimer) {
    window.clearTimeout(rpgActionTimer);
    rpgActionTimer = null;
  }
  rpgActionBusy = false;
}

function startRpgAction(startUpdater, finishUpdater, delay = 700) {
  if (rpgActionBusy) return false;
  rpgActionBusy = true;
  setState(startUpdater);
  rpgActionTimer = window.setTimeout(() => {
    rpgActionTimer = null;
    rpgActionBusy = false;
    setState(finishUpdater);
  }, delay);
  return true;
}

function rpgLog(prev, entries, includeQuote = true, nextXp = prev.xp) {
  const lines = Array.isArray(entries) ? entries : [entries];
  lines.push(...levelUpEntries(prev, nextXp));
  if (includeQuote && Math.random() < 0.3) {
    lines.push(`Coach note: ${RPG_QUOTES[Math.floor(Math.random() * RPG_QUOTES.length)]}`);
  }
  return [...lines, ...prev.log.slice(0, Math.max(0, 7 - lines.length))];
}

function normalizeOriginalWorkout(workout, routeId) {
  const presetRoute = WORKOUTS.find((item) => item.id === routeId) || WORKOUTS[0];
  return {
    ...workout,
    id: routeId,
    day: presetRoute.day,
    custom: Boolean(workout?.custom),
    replaced: false,
  };
}

function originalWorkoutsFromRouteReplacements(routeReplacements = {}) {
  return IMPORT_ROUTE_IDS.map((routeId) => {
    const replacement = routeReplacements[routeId];
    const presetRoute = WORKOUTS.find((workout) => workout.id === routeId);
    return normalizeOriginalWorkout(replacement || presetRoute, routeId);
  });
}

function getOriginalWorkouts() {
  if (Array.isArray(state.originalWorkouts) && state.originalWorkouts.length === IMPORT_ROUTE_IDS.length) {
    return IMPORT_ROUTE_IDS.map((routeId, index) => normalizeOriginalWorkout(state.originalWorkouts[index], routeId));
  }
  return WORKOUTS;
}

function getAllWorkouts() {
  const replacements = state.routeReplacements || {};
  const baseRoutes = getOriginalWorkouts().map((workout) => {
    const replacement = replacements[workout.id];
    if (!replacement) return workout;
    return {
      ...replacement,
      id: workout.id,
      day: workout.day,
      custom: true,
      replaced: true,
      replacedRouteTitle: workout.title,
    };
  });
  return [...baseRoutes, ...(state.customWorkouts || [])];
}

function findWorkoutById(id) {
  return getAllWorkouts().find((item) => item.id === id) || getAllWorkouts()[0];
}

function renderAvatar(character, variant = "") {
  const model = findById(HUNTER_MODELS, character.model);
  const hair = findById(HAIRSTYLES, character.hairstyle);
  const skin = findById(SKIN_TONES, character.skinTone, 1);
  const hairColor = findById(HAIR_COLORS, character.hairColor);
  const eyes = findById(EYE_COLORS, character.eyeColor);
  const torsoWidth = Math.round(model.torso * 4.2);
  const shoulderWidth = Math.round(model.shoulder * 4.25);
  const armInset = Math.max(4, 60 - model.shoulder * 2.45);
  const legInset = Math.max(28, 49 - model.legGap * 1.45);
  const legWidth = model.id === "tank" ? 24 : model.id === "lanky" || model.id === "speed" ? 18 : 21;
  const legHeight = model.id === "lanky" || model.id === "speed" ? 53 : 47;
  const hairHtml =
    hair.shape === "braids" || hair.shape === "locs"
      ? `
        <div class="braid left outer"></div>
        <div class="braid left inner ${escapeHtml(hair.shape)}"></div>
        <div class="braid right inner ${escapeHtml(hair.shape)}"></div>
        <div class="braid right outer"></div>
      `
      : `<div class="hair ${escapeHtml(hair.shape)}"></div>`;
  const spriteVars = [
    `--skin-color: ${skin.value}`,
    `--hair-color: ${hairColor.value}`,
    `--eye-color: ${eyes.value}`,
    `--torso-width: ${torsoWidth}px`,
    `--shoulder-width: ${shoulderWidth}px`,
    `--arm-inset: ${armInset}px`,
    `--leg-inset: ${legInset}px`,
    `--leg-width: ${legWidth}px`,
    `--leg-height: ${legHeight}px`,
  ].join("; ");

  return `
    <div class="avatar-frame ${escapeHtml(variant)}" aria-label="Character preview">
      <div class="avatar model-${escapeHtml(model.id)}" style="${escapeHtml(spriteVars)}">
        <div class="sprite-shadow"></div>
        <div class="ear left"></div>
        <div class="ear right"></div>
        <div class="neck"></div>
        <div class="head"></div>
        <div class="face-pixel nose"></div>
        <div class="face-pixel mouth"></div>
        <div class="face-pixel cheek left"></div>
        <div class="face-pixel cheek right"></div>
        <div class="eye left"></div>
        <div class="eye right"></div>
        ${hairHtml}
        <div class="shoulder-line"></div>
        <div class="torso">
          <span class="jersey-side left"></span>
          <span class="jersey-side right"></span>
          <span class="jersey-number">1</span>
        </div>
        <div class="belt"></div>
        <div class="arm left"><span class="wrist"></span><span class="hand"></span></div>
        <div class="arm right"><span class="wrist"></span><span class="hand"></span></div>
        <div class="shorts"></div>
        <div class="leg left"><span class="sock"></span><span class="shoe"></span></div>
        <div class="leg right"><span class="sock"></span><span class="shoe"></span></div>
      </div>
    </div>
  `;
}

function renderCharacterPreview() {
  const heightLabel = `${Number(draftCharacter.heightFeet) || 0}'${Number(draftCharacter.heightInches) || 0}"`;
  const selectedModel = findById(HUNTER_MODELS, draftCharacter.model);
  const selectedHair = findById(HAIRSTYLES, draftCharacter.hairstyle);
  const selectedHairColor = findById(HAIR_COLORS, draftCharacter.hairColor);
  const selectedEyes = findById(EYE_COLORS, draftCharacter.eyeColor);

  return `
    ${renderAvatar(draftCharacter)}
    <p class="eyebrow">Preview</p>
    <h2>${escapeHtml(draftCharacter.name.trim() || "Unnamed Hunter")}</h2>
    <div class="preview-stats">
      <div class="mini-stat"><span>Height</span><strong>${escapeHtml(heightLabel)}</strong></div>
      <div class="mini-stat"><span>Weight</span><strong>${escapeHtml(draftCharacter.weight || 0)} lbs</strong></div>
      <div class="mini-stat"><span>Model</span><strong>${escapeHtml(selectedModel.label)}</strong></div>
      <div class="mini-stat"><span>Hair</span><strong>${escapeHtml(selectedHair.label)}</strong></div>
      <div class="mini-stat"><span>Hair Color</span><strong>${escapeHtml(selectedHairColor.label)}</strong></div>
      <div class="mini-stat"><span>Eyes</span><strong>${escapeHtml(selectedEyes.label)}</strong></div>
    </div>
  `;
}

function renderBodyOptionIcon(option) {
  const torsoWidth = Math.round(option.torso * 1.55);
  const shoulderWidth = Math.round(option.shoulder * 1.9);
  const legGap = Math.max(3, option.legGap);
  return `
    <span class="body-option-icon" aria-hidden="true" style="--body-width: ${torsoWidth}px; --shoulder-width: ${shoulderWidth}px; --leg-gap: ${legGap}px">
      <i class="body-head"></i>
      <i class="body-shoulders"></i>
      <i class="body-core"></i>
      <i class="body-leg left"></i>
      <i class="body-leg right"></i>
    </span>
  `;
}

function renderHairOptionIcon(option) {
  const hairColor = findById(HAIR_COLORS, draftCharacter.hairColor);
  return `<span class="hair-option-icon ${escapeHtml(option.shape)}" aria-hidden="true" style="--hair-color: ${escapeHtml(hairColor.value)}"></span>`;
}

function renderSwatchIcon(option, kind = "swatch") {
  return `<span class="${kind}-option-icon" aria-hidden="true" style="--option-color: ${escapeHtml(option.value)}"></span>`;
}

function renderCharacterOptionIcon(type, option) {
  if (type === "body") return renderBodyOptionIcon(option);
  if (type === "hair") return renderHairOptionIcon(option);
  if (type === "eye") return renderSwatchIcon(option, "eye");
  return renderSwatchIcon(option);
}

function renderOptionPicker(title, fieldName, options, selectedValue, type = "swatch") {
  const selectedOption = findById(options, selectedValue);
  if (type === "hair") {
    return `
      <section class="option-picker hair hair-dropdown-picker">
        <div class="option-picker-head">
          <span>${escapeHtml(title)}</span>
          <strong>${escapeHtml(selectedOption.label)}</strong>
        </div>
        <label class="hair-dropdown-control">
          ${renderHairOptionIcon(selectedOption)}
          <span class="hair-dropdown-label">Style</span>
          <select data-character-field="${escapeHtml(fieldName)}">${optionList(options, selectedValue)}</select>
        </label>
      </section>
    `;
  }
  return `
    <section class="option-picker ${escapeHtml(type)}">
      <div class="option-picker-head">
        <span>${escapeHtml(title)}</span>
        <strong>${escapeHtml(selectedOption.label)}</strong>
      </div>
      <div class="option-grid">
        ${options.map((option) => {
          const active = option.id === selectedValue;
          return `
            <button
              class="creator-option ${active ? "active" : ""}"
              type="button"
              data-action="select-character-option"
              data-character-field="${escapeHtml(fieldName)}"
              data-character-value="${escapeHtml(option.id)}"
              aria-pressed="${active ? "true" : "false"}"
              title="${escapeHtml(option.label)}"
            >
              ${renderCharacterOptionIcon(type, option)}
              <span>${escapeHtml(option.label)}</span>
            </button>
          `;
        }).join("")}
      </div>
    </section>
  `;
}

function renderWorkoutSetupFields() {
  const importExample = `[
  {
    "day": "Monday",
    "title": "Custom Strength + Core",
    "theme": "Heavy strength, trunk control, and conditioning.",
    "clearBonus": 90,
    "exercises": [
      { "section": "Warm-Up", "name": "Jump Rope", "quality": "Prep", "sets": 1, "reps": "5 min" },
      { "section": "Strength", "name": "Trap Bar Deadlift", "quality": "Power", "sets": 4, "reps": "5" }
    ]
  }
]`;
  const setupOptions = [
    { id: "preset", label: "Preset Split", details: "Seven ready routes" },
    { id: "random", label: "Random Split", details: "Fresh routes" },
    { id: "create", label: "Edit Workout", details: "Build your route" },
    { id: "import", label: "Import Split", details: "Analyze a file" },
  ];

  return `
    <section class="setup-card">
      <div class="creator-section-heading">
        <span>Step 3</span>
        <h2 class="section-title">Workout Split</h2>
      </div>
      <div class="setup-choice-grid">
        ${setupOptions.map((option) => `
          <button
            class="setup-choice ${draftCharacter.workoutSetup === option.id ? "active" : ""}"
            type="button"
            data-action="select-character-option"
            data-character-field="workoutSetup"
            data-character-value="${escapeHtml(option.id)}"
            aria-pressed="${draftCharacter.workoutSetup === option.id ? "true" : "false"}"
          >
            <strong>${escapeHtml(option.label)}</strong>
            <span>${escapeHtml(option.details)}</span>
          </button>
        `).join("")}
      </div>
      ${draftCharacter.workoutSetup === "preset" ? `<p class="setup-note">Start with the built-in seven-day Day 1 training routes.</p>` : ""}
      ${draftCharacter.workoutSetup === "random" ? `
        <div class="form-grid two">
          <label class="field">
            Random Focus
            <select data-character-field="randomPhase">${optionList(RANDOM_PHASES, draftCharacter.randomPhase)}</select>
          </label>
          <label class="field">
            Athlete Level
            <select data-character-field="randomLevel">${optionList(ATHLETE_LEVELS, draftCharacter.randomLevel)}</select>
          </label>
        </div>
        <p class="setup-note">Generate a full seven-day split using the randomizer pattern: generateWeek builds your routes, then the game tracks XP as you clear them.</p>
      ` : ""}
      ${draftCharacter.workoutSetup === "create" ? `<p class="setup-note">Start inside the Edit Workout tab, where you can build, randomize, replace, or update routes.</p>` : ""}
      ${draftCharacter.workoutSetup === "import" ? `
        <div class="file-import-card">
          <label class="file-picker">
            <input type="file" data-import-file accept=".json,.csv,.tsv,.txt,.md,.pdf,.png,.jpg,.jpeg,.webp,application/json,text/csv,text/plain,application/pdf,image/png,image/jpeg,image/webp" />
            Analyze Workout File
          </label>
          <p class="setup-note">Upload JSON, CSV/TSV, Markdown, plain text, a text-based PDF, or a screenshot. PDFs are read locally; screenshots use OCR when the browser can load the OCR engine.</p>
        </div>
        ${draftCharacter.importAnalysis ? `<p class="analysis-note">${escapeHtml(draftCharacter.importAnalysis)}</p>` : ""}
        <label class="field">
          Workout Split JSON
          <textarea data-character-field="importText" class="pixel-input import-box" spellcheck="false" placeholder="${escapeHtml(importExample)}">${escapeHtml(draftCharacter.importText)}</textarea>
        </label>
        <p class="setup-note">Import an array of workouts. The first seven replace Monday through Sunday; extra workouts become custom routes.</p>
      ` : ""}
    </section>
  `;
}

function updateCharacterPreview() {
  const preview = document.querySelector("#character-preview");
  if (preview) preview.innerHTML = renderCharacterPreview();
}

function renderTitleScreen() {
  const hasSave = Boolean(state.character);
  const levelInfo = calculateLevel(state.xp);
  const rank = getRank(levelInfo.level);
  const todayWorkout = findWorkoutById(getTodayRouteId());
  const week = weeklyProgress();
  const saveName = hasSave ? state.character.name : "Empty Save Slot";
  const routeLabel = todayWorkout ? `${todayWorkout.day}: ${todayWorkout.title}` : "Route awaiting unlock";

  return `
    <div class="screen title-screen">
      <main class="app-shell title-shell">
        <section class="title-card">
          <div class="title-scene" aria-hidden="true">
            <div class="title-window">
              <span class="title-sun"></span>
              <span class="title-cloud cloud-one"></span>
              <span class="title-cloud cloud-two"></span>
            </div>
            <div class="title-wall-map">
              <span></span><span></span><span></span>
            </div>
            <div class="title-shelf">
              <span class="shelf-item blue"></span>
              <span class="shelf-item green"></span>
              <span class="shelf-item gold"></span>
            </div>
            <div class="title-rug"></div>
            <div class="title-bench"></div>
            <div class="title-lantern"><span></span></div>
            <div class="title-gym-rack">
              <span class="rack-bar"></span>
              <span class="rack-weight one"></span>
              <span class="rack-weight two"></span>
              <span class="rack-weight three"></span>
            </div>
            <div class="title-portal"><span></span></div>
            <div class="title-chest"><span></span></div>
            <div class="coach-dialogue">
              <span class="coach-portrait"></span>
              <strong>Keep pushing!</strong>
              <small>Strength is not built in a day.</small>
            </div>
            <div class="title-badge">Morning Route</div>
            <div class="title-trainer">
              <span class="trainer-head"></span>
              <span class="trainer-cap"></span>
              <span class="trainer-body"></span>
              <span class="trainer-pack"></span>
              <span class="trainer-leg left"></span>
              <span class="trainer-leg right"></span>
            </div>
          </div>
          <div class="title-copy">
            <p class="eyebrow">Vincit Qui Patitur</p>
            <h1 class="title-logo">Day 1</h1>
            <p class="title-subtitle">The room is quiet, the bag is packed, and the next route is waiting.</p>
            <div class="title-save-card">
              <span class="save-kicker">${hasSave ? "Save File" : "New Game"}</span>
              <strong>${escapeHtml(saveName)}</strong>
              <div class="save-grid">
                <span><small>Level</small>${hasSave ? levelInfo.level : "1"}</span>
                <span><small>Rank</small>${escapeHtml(hasSave ? rank : "E-Rank Rookie")}</span>
                <span><small>Today</small>${escapeHtml(routeLabel)}</span>
                <span><small>Week</small>${escapeHtml(week.done)}/${escapeHtml(week.total)}</span>
              </div>
            </div>
            ${renderCalendarPanel()}
            <div class="title-actions">
              <button class="pixel-button title-start" data-action="start-game">${hasSave ? "Continue Journey" : "Start Journey"}</button>
              <button class="pixel-button red-button title-restart" data-action="restart-game">New Hunter</button>
            </div>
            <p class="title-hint">${hasSave ? "Welcome back. Today still counts." : "Every save starts with one honest route."}</p>
          </div>
        </section>
      </main>
    </div>
  `;
}

function renderCharacterCreator() {
  return `
    <div class="screen">
      <main class="app-shell creator-shell">
        <section class="pixel-card creator-card">
          <div class="creator-grid">
            <div>
              <p class="eyebrow">League Awakening</p>
              <h1>Create Your Hunter</h1>
              <p class="copy">Build the save file, choose the look, then lock in the first training route.</p>
              <form class="creator-form" data-character-form>
                <section class="identity-card">
                  <div class="creator-section-heading">
                    <span>Step 1</span>
                    <h2 class="section-title">Trainer ID</h2>
                  </div>
                  <label class="field">
                    Character Name
                    <input data-character-field="name" value="${escapeHtml(draftCharacter.name)}" placeholder="Enter hunter name" autocomplete="off" />
                  </label>
                  <div class="form-grid">
                    <label class="field">
                      Height Feet
                      <input data-character-field="heightFeet" type="number" min="3" max="8" value="${escapeHtml(draftCharacter.heightFeet)}" />
                    </label>
                    <label class="field">
                      Height Inches
                      <input data-character-field="heightInches" type="number" min="0" max="11" value="${escapeHtml(draftCharacter.heightInches)}" />
                    </label>
                    <label class="field">
                      Weight
                      <input data-character-field="weight" type="number" min="80" max="450" value="${escapeHtml(draftCharacter.weight)}" />
                    </label>
                  </div>
                  <label class="field">
                    Athlete Archetype
                    <select data-character-field="archetype">${archetypeOptions(draftCharacter.archetype)}</select>
                  </label>
                </section>
                <section class="look-card">
                  <div class="creator-section-heading">
                    <span>Step 2</span>
                    <h2 class="section-title">Look Builder</h2>
                  </div>
                  ${renderOptionPicker("Body Type", "model", HUNTER_MODELS, draftCharacter.model, "body")}
                  ${renderOptionPicker("Hair Style", "hairstyle", HAIRSTYLES, draftCharacter.hairstyle, "hair")}
                  <div class="look-color-grid">
                    ${renderOptionPicker("Skin Tone", "skinTone", SKIN_TONES, draftCharacter.skinTone)}
                    ${renderOptionPicker("Hair Color", "hairColor", HAIR_COLORS, draftCharacter.hairColor)}
                    ${renderOptionPicker("Eye Color", "eyeColor", EYE_COLORS, draftCharacter.eyeColor, "eye")}
                  </div>
                </section>
                ${renderWorkoutSetupFields()}
                ${characterCreatorError ? `<p class="creator-error">${escapeHtml(characterCreatorError)}</p>` : ""}
                <button class="pixel-button purple-button" type="submit">Start Journey</button>
              </form>
            </div>
            <aside class="preview-panel" id="character-preview">
              ${renderCharacterPreview()}
            </aside>
          </div>
        </section>
      </main>
    </div>
  `;
}

function renderTrainingDays() {
  return getAllWorkouts().map((workout) => {
    const rested = isWorkoutRested(workout.id);
    const rawDone = workout.exercises.filter((_, index) => state.completedExercises[`${workout.id}-${index}`]).length;
    const done = rested ? workout.exercises.length : rawDone;
    const active = state.selectedDay === workout.id;
    const today = workout.id === getTodayRouteId();
    const late = isLateWorkout(workout);
    const future = isFutureWorkout(workout);
    const claimed = Boolean(state.claimedDays[workout.id]);
    const restReward = state.restedDays?.[workout.id]?.xp || restXpForWorkout(workout);
    const restDisabled = rested || future || rawDone > 0 || claimed;
    const restLabel = rested ? `Rested +${restReward}` : future ? "Rest Locked" : rawDone > 0 || claimed ? "Route Started" : `Rest +${restReward}`;
    const customBadge = workout.custom ? `<span class="route-tag">Custom</span>` : "";
    const replacedBadge = workout.replaced ? `<span class="route-tag replaced">Replaced</span>` : "";
    const todayBadge = today ? `<span class="route-tag today">Today</span>` : "";
    const lateBadge = late ? `<span class="route-tag late">Late XP x0.5</span>` : "";
    const futureBadge = future ? `<span class="route-tag future">Locked</span>` : "";
    const restBadge = rested ? `<span class="route-tag rest">Rested</span>` : "";
    return `
      <div class="day-route">
        <button class="day-button ${active ? "active" : ""} ${today ? "today" : ""} ${late ? "late" : ""} ${future ? "future" : ""} ${rested ? "rested" : ""}" data-action="select-day" data-day-id="${workout.id}">
          <small>${escapeHtml(workout.day)}${customBadge}${replacedBadge}${todayBadge}${lateBadge}${futureBadge}${restBadge}</small>
        <strong>${escapeHtml(workout.title)}</strong>
        <span>${rested ? `${renderRestIcon()} Rested +${escapeHtml(restReward)} XP` : `${done}/${workout.exercises.length} cleared`}</span>
      </button>
        ${workout.replaced ? `<button class="route-delete" title="Restore original route" data-action="restore-route" data-day-id="${workout.id}">Restore Original</button>` : ""}
        <button class="route-rest" title="Rest this route for 25% XP" data-action="rest-day" data-day-id="${workout.id}" ${restDisabled ? "disabled" : ""}>${renderRestIcon()} ${escapeHtml(restLabel)}</button>
      </div>
    `;
  }).join("");
}

function renderStats() {
  return Object.entries(state.stats).map(([stat, value]) => `
    <div class="stat-row">
      <div class="stat-head"><span>${renderPixelIcon(stat.toLowerCase())}${escapeHtml(stat)}</span><span>LV ${escapeHtml(value)}</span></div>
      <div class="stat-meter"><div style="width: ${Math.min(100, Number(value) * 8)}%"></div></div>
    </div>
  `).join("");
}

function renderExerciseRows(selectedWorkout) {
  const future = isFutureWorkout(selectedWorkout);
  const rested = isWorkoutRested(selectedWorkout.id);
  return selectedWorkout.exercises.map((exercise, index) => {
    const key = `${selectedWorkout.id}-${index}`;
    const done = Boolean(state.completedExercises[key]);
    const baseXp = exerciseXp(exercise);
    const xp = adjustedXp(baseXp, selectedWorkout);
    const xpNote = xp !== baseXp ? `<span class="xp-note">was +${baseXp}</span>` : "";
    return `
      <tr class="${done ? "done" : ""}">
        <td>
          <button
            class="pixel-button small ${done ? "green-button" : ""}"
            data-action="complete-exercise"
            data-day-id="${selectedWorkout.id}"
            data-index="${index}"
            ${done || future || rested ? "disabled" : ""}
          >${done ? "Done" : rested ? "Rested" : future ? "Locked" : "Clear"}</button>
        </td>
        <td><span class="section-pill">${escapeHtml(exercise.section)}</span></td>
        <td><strong>${escapeHtml(exercise.name)}</strong></td>
        <td>${escapeHtml(exercise.quality)}</td>
        <td>${escapeHtml(exercise.sets)}</td>
        <td>${escapeHtml(exercise.reps)}</td>
        <td><strong>+${xp}</strong>${xpNote}</td>
      </tr>
    `;
  }).join("");
}

function renderQuestCards(quests, isBoss = false) {
  return quests.map((quest) => {
    const done = Boolean(state.completedSpecial[quest.id]);
    return `
      <article class="quest-card ${isBoss ? "boss" : ""}">
        <div class="quest-card-head">
          <h3>${escapeHtml(quest.title)}</h3>
          <span class="xp">+${quest.xp}</span>
        </div>
        <p class="stat-name">${escapeHtml(quest.stat)}</p>
        <p class="details">${escapeHtml(quest.details)}</p>
        <button
          class="pixel-button ${done ? "green-button" : isBoss ? "red-button" : "purple-button"}"
          data-action="${isBoss ? "complete-boss" : "complete-bonus"}"
          data-quest-id="${quest.id}"
          ${done ? "disabled" : ""}
        >${done ? (isBoss ? "Defeated" : "Cleared") : isBoss ? "Defeat Boss" : "Claim Bonus"}</button>
      </article>
    `;
  }).join("");
}

function renderLog() {
  return state.log.map((entry, index) => `
    <p class="log-entry"><span class="prompt">&gt;</span> ${escapeHtml(entry)}</p>
  `).join("");
}

function isPanelCollapsed(panelId) {
  return Boolean(state.collapsedPanels?.[panelId]);
}

function renderPanelToggle(panelId, title, meta = "") {
  const collapsed = isPanelCollapsed(panelId);
  return `
    <button
      class="panel-toggle ${collapsed ? "collapsed" : ""}"
      type="button"
      data-action="toggle-panel"
      data-panel-id="${escapeHtml(panelId)}"
      aria-expanded="${collapsed ? "false" : "true"}"
    >
      <span class="panel-toggle-main">
        <i class="panel-arrow" aria-hidden="true"></i>
        <strong>${escapeHtml(title)}</strong>
      </span>
      ${meta ? `<span class="panel-toggle-meta">${escapeHtml(meta)}</span>` : ""}
    </button>
  `;
}

function renderCollapsiblePanel({ id, title, meta = "", className = "", content = "" }) {
  const collapsed = isPanelCollapsed(id);
  return `
    <div class="pixel-card panel-pad collapsible-card ${className} ${collapsed ? "is-collapsed" : ""}" data-panel="${escapeHtml(id)}">
      ${renderPanelToggle(id, title, meta)}
      <div class="collapsible-content" ${collapsed ? "hidden" : ""}>
        ${content}
      </div>
    </div>
  `;
}

function renderSettingsDrawer() {
  const settings = normalizeUiSettings(state.uiSettings);
  if (!settings.settingsOpen) return "";
  const profileLabel = settings.layoutProfile === "portrait" ? "Portrait" : "Landscape";
  const logLabel = settings.showAdventureLog ? "Visible" : "Hidden";
  return `
    <section class="pixel-card settings-drawer" aria-label="Settings">
      <div class="settings-drawer-head">
        <div>
          <p class="eyebrow">System</p>
          <h2>Settings</h2>
        </div>
        <button class="pixel-button small" data-action="toggle-settings">Close</button>
      </div>
      <div class="settings-grid">
        <article class="settings-option-card">
          <span>Adventure Log</span>
          <strong>${escapeHtml(logLabel)}</strong>
          <button class="pixel-button small purple-button" data-action="toggle-log-visibility">${settings.showAdventureLog ? "Hide Log" : "Show Log"}</button>
        </article>
        <article class="settings-option-card">
          <span>Layout Profile</span>
          <strong>${escapeHtml(profileLabel)}</strong>
          <button class="pixel-button small green-button" data-action="toggle-layout-profile">${settings.layoutProfile === "portrait" ? "Landscape" : "Portrait"}</button>
        </article>
        <article class="settings-option-card settings-danger-card">
          <span>Save Controls</span>
          <strong>System</strong>
          <div class="settings-action-pair">
            <button class="pixel-button small purple-button" data-action="reset-week">Reset Week</button>
            <button class="pixel-button small red-button" data-action="restart-game">Restart Game</button>
          </div>
        </article>
      </div>
    </section>
  `;
}

function renderInventoryHud(levelInfo, week) {
  return `
    <div class="inventory-hud" aria-label="Player items">
      ${renderInventoryHudItem("xp", state.xp)}
      ${renderInventoryHudItem("coin", state.gold)}
      ${renderInventoryHudItem("heart", `x${state.streak}`)}
      ${renderInventoryHudItem("crystal", `LV ${levelInfo.level}`)}
      ${renderInventoryHudItem("map", `${week.percent}%`)}
    </div>
  `;
}

function renderGameCockpit({ levelInfo, progress, week, selectedWorkout, selectedRested, selectedFuture, selectedLate, selectedComplete }) {
  const health = Math.min(100, 68 + Number(state.streak || 0) * 4 + (selectedComplete ? 8 : 0));
  const stamina = selectedRested ? 100 : Math.max(12, Math.min(100, week.percent || 0));
  const dialogue = selectedFuture
    ? `${selectedWorkout.day} is on the map, but the gate opens on its calendar day.`
    : selectedRested
      ? "Recovery counts. You banked XP and kept the save file moving."
      : selectedLate
        ? "Late route detected. Clear it now for half XP and keep climbing."
        : selectedComplete
          ? "Route cleared. Claim the bonus and get ready for the next battle."
          : "Keep pushing. Strength is not built in a day, but Day 1 starts it.";
  const questText = selectedFuture
    ? `Preview ${selectedWorkout.day}'s route and prep your loadout.`
    : selectedRested
      ? `Rest route completed for ${state.restedDays?.[selectedWorkout.id]?.xp || restXpForWorkout(selectedWorkout)} recovery XP.`
      : `Clear ${selectedWorkout.exercises.length} movements in ${selectedWorkout.title}.`;

  return `
    <section class="game-cockpit" aria-label="Adventure HUD">
      <div class="hud">
        <div class="hud-row">
          <span>${renderPixelIcon("heart")} Health</span>
          <div class="bar health"><div class="fill" style="width: ${health}%"></div></div>
          <strong>${health}/100</strong>
        </div>
        <div class="hud-row">
          <span>${renderPixelIcon("speed")} Stamina</span>
          <div class="bar stamina"><div class="fill" style="width: ${stamina}%"></div></div>
          <strong>${stamina}/100</strong>
        </div>
        <div class="hud-row">
          <span>${renderPixelIcon("xp", "XP")} XP</span>
          <div class="bar xp"><div class="fill" style="width: ${progress}%"></div></div>
          <strong>LV ${escapeHtml(levelInfo.level)}</strong>
        </div>
      </div>
      <div class="character-display">
        ${renderAvatar(state.character, "compact")}
      </div>
      <div class="dialogue-box">
        <strong>Coach / Mentor</strong>
        <p>${escapeHtml(dialogue)}</p>
      </div>
      <div class="quest-log">
        <h2>Quest</h2>
        <p>${escapeHtml(questText)}</p>
      </div>
      <div class="action-buttons">
        <button data-action="show-tab" data-tab="routes">Quest Board</button>
        <button data-action="show-tab" data-tab="edit">Inventory</button>
      </div>
      <div class="inventory-grid" aria-label="Inventory">
        ${renderInventorySlot("xp")}
        ${renderInventorySlot("coin")}
        ${renderInventorySlot("heart")}
        ${renderInventorySlot("strength")}
        ${renderInventorySlot("map")}
        ${renderInventorySlot("crystal")}
      </div>
    </section>
  `;
}

function arenaEnemyForWorkout(workout, flags = {}) {
  const focusText = [
    workout?.title,
    workout?.theme,
  ].join(" ").toLowerCase();
  const movementText = (workout?.exercises || []).map((exercise) => `${exercise.section} ${exercise.name} ${exercise.quality}`).join(" ").toLowerCase();
  const hasAny = (text, terms) => terms.some((term) => text.includes(term));

  if (flags.selectedRested) {
    return { type: "recovery-shrine", label: "Recovery Shrine" };
  }
  if (flags.selectedComplete) {
    return { type: "reward-chest", label: "Reward Chest" };
  }
  if (flags.selectedFuture) {
    return { type: "route-gate", label: "Route Gate" };
  }
  if (hasAny(focusText, ["speed", "agility", "sprint"])) {
    return { type: "speed-rival", label: "Speed Rival" };
  }
  if (hasAny(focusText, ["grip", "carry"])) {
    return { type: "iron-mimic", label: "Iron Mimic" };
  }
  if (hasAny(focusText, ["conditioning", "finisher", "stamina"])) {
    return { type: "conditioning-rival", label: "Conditioning Rival" };
  }
  if (hasAny(focusText, ["core", "rotation", "brace"])) {
    return { type: "core-sentinel", label: "Core Sentinel" };
  }
  if (hasAny(focusText, ["strength", "power", "lower body", "full body"])) {
    return { type: "route-rival", label: "Strength Rival" };
  }
  if (hasAny(movementText, ["grip", "carry", "hang"])) {
    return { type: "iron-mimic", label: "Iron Mimic" };
  }
  if (hasAny(movementText, ["conditioning", "sled", "interval"])) {
    return { type: "conditioning-rival", label: "Conditioning Rival" };
  }
  return { type: "route-rival", label: "Route Rival" };
}

function renderTrainingArena({ levelInfo, selectedWorkout, selectedDone, selectedRested, selectedFuture, selectedLate, selectedComplete }) {
  let total = selectedWorkout.exercises.length || 1;
  let flagLabel = selectedWorkout.day;
  let flagValue = `${selectedDone}/${total}`;
  let clearPercent = selectedRested || selectedComplete ? 100 : Math.round((selectedDone / total) * 100);
  let enemyHp = Math.max(0, 100 - clearPercent);
  let enemy = arenaEnemyForWorkout(selectedWorkout, { selectedRested, selectedFuture, selectedComplete });
  let status = selectedFuture
    ? "SCOUT MODE: Future route preview. Clearing unlocks on the calendar day."
    : selectedRested
      ? `RECOVERY COMPLETE: +${state.restedDays?.[selectedWorkout.id]?.xp || restXpForWorkout(selectedWorkout)} XP banked.`
      : selectedComplete
        ? "VICTORY: Route challenge cleared. Claim the day bonus."
        : selectedLate
          ? "LATE ROUTE: Rewards are halved, but the save file still moves."
          : "BATTLE READY: Clear movements to drop the route challenge HP.";

  if (activeDashboardTab === "engine") {
    const rpg = normalizeRpgState(state.rpg);
    const computed = getRpgComputedStats();
    const lastZone = rpg.lastBattle?.zoneId ? getRpgZone(rpg.lastBattle.zoneId) : null;
    const nextZone = RPG_BATTLE_ZONES.find((zone) => computed.attack < zone.reqStr) || RPG_BATTLE_ZONES[RPG_BATTLE_ZONES.length - 1];
    const shownZone = lastZone || nextZone;
    enemy = {
      type: rpg.lastBattle?.enemyType || shownZone.enemyType,
      label: rpg.lastBattle?.enemyName || shownZone.enemyName,
    };
    enemyHp = rpg.lastBattle?.enemyHpPercent ?? 100;
    flagLabel = "Engine";
    flagValue = `ATK ${computed.attack}`;
    status = rpg.lastBattle
      ? rpg.lastBattle.pending
        ? rpg.lastBattle.mode === "battle"
          ? `BATTLE IN PROGRESS: ${enemy.label} is taking the hit.`
          : `TRAINING IN PROGRESS: ${rpg.lastBattle.label} is underway.`
        : rpg.lastBattle.mode === "battle"
          ? rpg.lastBattle.won
            ? `ZONE CLEARED: ${enemy.label} defeated. Pick the next battle.`
            : `ZONE HELD: ${enemy.label} survived. Train or equip gear.`
          : rpg.lastBattle.mode === "shop"
            ? `GEAR READY: ${rpg.lastBattle.label} equipped for the next zone.`
            : `TRAINING COMPLETE: ${rpg.lastBattle.label} improved your engine.`
      : `RPG ENGINE: ${computed.attack} ATK / ${computed.defense} DEF. Train, buy gear, or challenge ${shownZone.name}.`;
  }

  return `
    <section class="training-arena" aria-label="Training battle viewport">
      <div class="arena-background ${escapeHtml(enemy.type)}">
        <span class="arena-cloud cloud-a" aria-hidden="true"></span>
        <span class="arena-cloud cloud-b" aria-hidden="true"></span>
        <div class="arena-route-flag">
          <span>${escapeHtml(flagLabel)}</span>
          <strong>${escapeHtml(flagValue)}</strong>
        </div>
        <div class="player-sprite-wrapper">
          ${renderAvatar(state.character, "compact")}
          <div class="sprite-name-tag">${escapeHtml(state.character.name)} LV ${escapeHtml(levelInfo.level)}</div>
        </div>
        <div class="enemy-sprite-wrapper">
          <div class="pixel-enemy ${escapeHtml(enemy.type)}" aria-hidden="true">
            <span class="enemy-shadow"></span>
            <span class="enemy-head"></span>
            <span class="enemy-eye left"></span>
            <span class="enemy-eye right"></span>
            <span class="enemy-body"></span>
            <span class="enemy-arm left"></span>
            <span class="enemy-arm right"></span>
            <span class="enemy-leg left"></span>
            <span class="enemy-leg right"></span>
          </div>
          <div class="enemy-name-tag">${escapeHtml(enemy.label)}</div>
          <div class="enemy-hp-bar" aria-label="Route challenge HP"><div style="width: ${enemyHp}%"></div></div>
        </div>
      </div>
      <div class="battle-ticker">${escapeHtml(status)}</div>
    </section>
  `;
}

function weeklyProgress() {
  const workouts = getAllWorkouts();
  const total = workouts.reduce((sum, workout) => sum + workout.exercises.length, 0);
  const done = workouts.reduce((sum, workout) => (
    sum + (isWorkoutRested(workout.id)
      ? workout.exercises.length
      : workout.exercises.filter((_, index) => state.completedExercises[`${workout.id}-${index}`]).length)
  ), 0);
  return { total, done, percent: total ? Math.round((done / total) * 100) : 0 };
}

function renderCustomExerciseRows() {
  return customWorkoutDraft.exercises.map((exercise, index) => `
    <div class="builder-exercise">
      <div class="builder-exercise-head">
        <strong>Exercise ${index + 1}</strong>
        <button class="route-delete mini" data-action="remove-custom-exercise" data-index="${index}" ${customWorkoutDraft.exercises.length <= 1 ? "disabled" : ""}>Remove</button>
      </div>
      <label class="field">
        Section
        <select data-custom-exercise-field="section" data-index="${index}">${sectionOptions(exercise.section)}</select>
      </label>
      <label class="field">
        Exercise
        <input data-custom-exercise-field="name" data-index="${index}" value="${escapeHtml(exercise.name)}" placeholder="Trap Bar Deadlift" />
      </label>
      <label class="field">
        Quality
        <input data-custom-exercise-field="quality" data-index="${index}" value="${escapeHtml(exercise.quality)}" placeholder="Strength/power" />
      </label>
      <div class="builder-mini-grid">
        <label class="field">
          Sets
          <input data-custom-exercise-field="sets" data-index="${index}" type="number" min="1" max="20" value="${escapeHtml(exercise.sets)}" />
        </label>
        <label class="field">
          Reps / Time
          <input data-custom-exercise-field="reps" data-index="${index}" value="${escapeHtml(exercise.reps)}" placeholder="5 or 30 sec" />
        </label>
      </div>
    </div>
  `).join("");
}

function renderCustomWorkoutBuilder() {
  return `
    <div class="pixel-card panel-pad route-builder-card">
      <div class="builder-title-row">
        <div>
          <h2 class="section-title">Edit Workout</h2>
          <p class="copy">Build a new route, update a saved custom route, or replace a preset day using the same workout format.</p>
        </div>
        <button class="pixel-button small" data-action="load-selected-workout">Load Selected Route</button>
      </div>
      <div class="route-builder">
        <label class="field">
          Placement
          <select data-custom-workout-field="targetRoute">${routePlacementOptions(customWorkoutDraft.targetRoute)}</select>
        </label>
        <div class="builder-mini-grid">
          <label class="field">
            Day / Route
            <input data-custom-workout-field="day" value="${escapeHtml(customWorkoutDraft.day)}" placeholder="Tuesday Bonus" />
          </label>
          <label class="field">
            Clear Bonus
            <input data-custom-workout-field="clearBonus" type="number" min="0" max="500" value="${escapeHtml(customWorkoutDraft.clearBonus)}" />
          </label>
        </div>
        <label class="field">
          Workout Title
          <input data-custom-workout-field="title" value="${escapeHtml(customWorkoutDraft.title)}" placeholder="Upper Power + Core" />
        </label>
        <label class="field">
          Theme
          <input data-custom-workout-field="theme" value="${escapeHtml(customWorkoutDraft.theme)}" placeholder="What this workout builds." />
        </label>
        <div class="builder-exercise-list">${renderCustomExerciseRows()}</div>
        <div class="builder-actions">
          <button class="pixel-button purple-button" data-action="add-custom-exercise">Add Exercise</button>
          <button class="pixel-button green-button" data-action="save-custom-workout">Save Workout</button>
        </div>
      </div>
    </div>
  `;
}

function renderDashboardTabs() {
  return `
    <nav class="dashboard-tabs" aria-label="Game sections">
      ${DASHBOARD_TABS.map((tab) => `
        <button class="tab-button ${activeDashboardTab === tab.id ? "active" : ""}" data-action="show-tab" data-tab="${tab.id}">
          ${escapeHtml(tab.label)}
        </button>
      `).join("")}
    </nav>
  `;
}

function renderRandomWorkoutTools() {
  return `
    <div class="pixel-card panel-pad randomizer-card">
      <h2 class="section-title">Random Helper</h2>
      <p class="copy">Generate one route into the editor or roll a full seven-day split.</p>
      <div class="route-builder">
        <label class="field">
          Focus
          <select data-random-workout-field="phase">${optionList(RANDOM_PHASES, randomWorkoutDraft.phase)}</select>
        </label>
        <label class="field">
          Athlete Level
          <select data-random-workout-field="athleteLevel">${optionList(ATHLETE_LEVELS, randomWorkoutDraft.athleteLevel)}</select>
        </label>
        <div class="builder-actions">
          <button class="pixel-button purple-button" data-action="generate-random-workout">Fill Editor</button>
          <button class="pixel-button green-button" data-action="generate-random-week">Random Week</button>
        </div>
      </div>
    </div>
  `;
}

function renderInternetWorkoutLibrary() {
  const visibleWorkouts = INTERNET_WORKOUT_LIBRARY.filter((item) => workoutLibraryFilter === "all" || item.category === workoutLibraryFilter);
  return `
    <div class="pixel-card panel-pad workout-library-card">
      <div class="library-head">
        <div>
          <h2 class="section-title">Workout Library</h2>
          <p class="copy">Internet-sourced route ideas that can be loaded into the editor.</p>
        </div>
        <label class="field compact-field">
          Filter
          <select data-library-filter>${workoutLibraryFilterOptions(workoutLibraryFilter)}</select>
        </label>
      </div>
      <div class="library-list">
        ${visibleWorkouts.map((item) => `
          <article class="library-card">
            <div class="library-card-head">
              <span class="route-tag">${escapeHtml(item.category)}</span>
              <a href="${escapeHtml(item.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(item.sourceName)}</a>
            </div>
            <h3>${escapeHtml(item.workout.title)}</h3>
            <p>${escapeHtml(item.summary)}</p>
            <div class="library-meta">
              <span>${escapeHtml(item.workout.exercises.length)} exercises</span>
              <span>+${escapeHtml(item.workout.clearBonus)} clear XP</span>
            </div>
            <button class="pixel-button small green-button" data-action="load-library-workout" data-library-id="${escapeHtml(item.id)}">Load Into Editor</button>
          </article>
        `).join("")}
      </div>
    </div>
  `;
}

function renderRpgTrainingCards() {
  const rpg = normalizeRpgState(state.rpg);
  return RPG_TRAINING_SESSIONS.map((session) => {
    const completions = rpg.trainingCompletions[session.id] || 0;
    return `
      <article class="engine-card">
        <div class="engine-card-main">
          <span class="engine-card-icon">${renderPixelIcon(session.statReward.stat.toLowerCase())}</span>
          <div>
            <h3>${escapeHtml(session.name)}</h3>
            <p>${escapeHtml(session.description)}</p>
            <div class="engine-meta">
              <span>+${escapeHtml(session.xpReward)} XP</span>
              <span>+${escapeHtml(session.goldReward)} coins</span>
              <span>${escapeHtml(Math.round(session.statReward.chance * 100))}% stat proc</span>
              <span>${escapeHtml(completions)} clears</span>
            </div>
          </div>
        </div>
        <button class="pixel-button small green-button" data-action="rpg-train" data-session-id="${escapeHtml(session.id)}" ${rpgActionBusy ? "disabled" : ""}>${rpgActionBusy ? "Resolving" : "Train"}</button>
      </article>
    `;
  }).join("");
}

function renderRpgShopCards() {
  const rpg = normalizeRpgState(state.rpg);
  return RPG_SHOP_ITEMS.map((item) => {
    const owned = rpg.purchasedItemIds.includes(item.id);
    const equipped = item.type === "weapon" ? rpg.equippedWeaponId === item.id : rpg.equippedArmorId === item.id;
    const canAfford = state.gold >= item.cost;
    const buttonLabel = equipped ? "Equipped" : owned ? "Equip" : `Buy ${item.cost}`;
    return `
      <article class="engine-card shop-card ${equipped ? "equipped" : ""}">
        <div class="engine-card-main">
          <span class="engine-card-icon">${renderPixelIcon(item.icon)}</span>
          <div>
            <h3>${escapeHtml(item.name)}</h3>
            <p>${escapeHtml(item.description)}</p>
            <div class="engine-meta">
              <span>${escapeHtml(item.type.toUpperCase())}</span>
              <span>+${escapeHtml(item.stat)} ${item.type === "weapon" ? "ATK" : "DEF"}</span>
              <span>${owned ? "Owned" : `${item.cost} coins`}</span>
            </div>
          </div>
        </div>
        <button
          class="pixel-button small ${equipped ? "green-button" : "purple-button"}"
          data-action="buy-rpg-item"
          data-item-id="${escapeHtml(item.id)}"
          ${rpgActionBusy || equipped || (!owned && !canAfford) ? "disabled" : ""}
        >${escapeHtml(buttonLabel)}</button>
      </article>
    `;
  }).join("");
}

function renderRpgZoneCards() {
  const rpg = normalizeRpgState(state.rpg);
  const computed = getRpgComputedStats();
  return RPG_BATTLE_ZONES.map((zone) => {
    const unlocked = computed.attack >= zone.reqStr;
    const wins = rpg.zoneWins[zone.id] || 0;
    return `
      <article class="engine-card zone-card ${unlocked ? "unlocked" : "locked"}">
        <div class="engine-card-main">
          <span class="engine-card-icon enemy-mini ${escapeHtml(zone.enemyType)}"></span>
          <div>
            <h3>${escapeHtml(zone.name)}</h3>
            <p>${escapeHtml(zone.enemyName)} waits with ${escapeHtml(zone.enemyHp)} HP and ${escapeHtml(zone.enemyAtk)} ATK.</p>
            <div class="engine-meta">
              <span>Req ${escapeHtml(zone.reqStr)} ATK</span>
              <span>+${escapeHtml(zone.xpReward)} XP</span>
              <span>+${escapeHtml(zone.goldReward)} coins</span>
              <span>${escapeHtml(wins)} wins</span>
            </div>
          </div>
        </div>
        <button
          class="pixel-button small ${unlocked ? "red-button" : "purple-button"}"
          data-action="challenge-rpg-zone"
          data-zone-id="${escapeHtml(zone.id)}"
          ${rpgActionBusy ? "disabled" : ""}
        >${rpgActionBusy ? "Resolving" : unlocked ? "Battle" : "Scout"}</button>
      </article>
    `;
  }).join("");
}

function renderRpgEngineTab() {
  const computed = getRpgComputedStats();
  const weaponName = computed.weapon?.name || "Fists";
  const armorName = computed.armor?.name || "Rags";
  return `
    <section class="engine-grid">
      <aside class="side-stack">
        <div class="pixel-card panel-pad engine-stats-card">
          <h2 class="section-title">RPG Stats</h2>
          <div class="engine-stat-grid">
            <div><span>Attack</span><strong>${escapeHtml(computed.attack)}</strong></div>
            <div><span>Defense</span><strong>${escapeHtml(computed.defense)}</strong></div>
            <div><span>Base STR</span><strong>${escapeHtml(computed.baseStr)}</strong></div>
            <div><span>Base DEF</span><strong>${escapeHtml(computed.baseDef)}</strong></div>
          </div>
          <div class="engine-loadout">
            <p><span>Weapon</span><strong>${escapeHtml(weaponName)}</strong></p>
            <p><span>Armor</span><strong>${escapeHtml(armorName)}</strong></p>
          </div>
          <p class="copy">Attack and defense combine engine stats, your route-built battle stats, and equipped gear.</p>
        </div>
      </aside>
      <section class="engine-main-stack">
        <div class="pixel-card panel-pad engine-panel">
          <h2 class="section-title">Quick Training</h2>
          <div class="engine-card-list">${renderRpgTrainingCards()}</div>
        </div>
        <div class="pixel-card panel-pad engine-panel">
          <h2 class="section-title">Gear Shop</h2>
          <div class="engine-card-list">${renderRpgShopCards()}</div>
        </div>
        <div class="pixel-card panel-pad engine-panel">
          <h2 class="section-title">Battle Zones</h2>
          <div class="engine-card-list">${renderRpgZoneCards()}</div>
        </div>
      </section>
    </section>
  `;
}

function renderEditorTab() {
  return `
    <section class="editor-grid">
      <aside class="side-stack">
        <div class="pixel-card panel-pad">
          <h2 class="section-title">Routes to Edit</h2>
          <div class="day-list">${renderTrainingDays()}</div>
        </div>
        ${renderRandomWorkoutTools()}
      </aside>
      <section class="editor-main-stack">
        ${renderCustomWorkoutBuilder()}
        ${renderInternetWorkoutLibrary()}
      </section>
    </section>
  `;
}

function renderDashboard() {
  const selectedWorkout = findWorkoutById(state.selectedDay);
  const levelInfo = calculateLevel(state.xp);
  const progress = Math.min(100, Math.round((levelInfo.currentLevelXp / levelInfo.nextLevelXp) * 100));
  const rank = getRank(levelInfo.level);
  const week = weeklyProgress();
  const selectedRested = isWorkoutRested(selectedWorkout.id);
  const selectedDone = selectedRested
    ? selectedWorkout.exercises.length
    : selectedWorkout.exercises.filter((_, index) => state.completedExercises[`${selectedWorkout.id}-${index}`]).length;
  const selectedComplete = selectedDone === selectedWorkout.exercises.length;
  const selectedClaimed = Boolean(state.claimedDays[selectedWorkout.id]);
  const selectedLate = isLateWorkout(selectedWorkout);
  const selectedFuture = isFutureWorkout(selectedWorkout);
  const selectedClearBonus = adjustedXp(selectedWorkout.clearBonus, selectedWorkout);
  const selectedRestXp = state.restedDays?.[selectedWorkout.id]?.xp || restXpForWorkout(selectedWorkout);
  const modelLabel = findById(HUNTER_MODELS, state.character.model).label;
  const hairLabel = findById(HAIRSTYLES, state.character.hairstyle).label;
  const uiSettings = normalizeUiSettings(state.uiSettings);
  const adventureLogPanel = uiSettings.showAdventureLog
    ? renderCollapsiblePanel({
      id: "adventureLog",
      title: "Adventure Log",
      meta: `${state.log.length} entries`,
      content: `
        <div class="log-list">${renderLog()}</div>
        <div class="system-actions">
          <button class="pixel-button purple-button" data-action="reset-week">Reset Week</button>
          <button class="pixel-button red-button" data-action="restart-game">Restart Game</button>
        </div>
      `,
    })
    : "";

  return `
    <div class="screen dashboard-screen" data-layout-profile="${escapeHtml(uiSettings.layoutProfile)}">
      <main class="app-shell">
        <header class="pixel-card main-header">
          <div class="header-grid">
            <div>
              <p class="eyebrow">Vincit Qui Patitur</p>
              <h1>Day 1</h1>
              <p class="copy">
                ${escapeHtml(state.character.name)} is locked in at ${escapeHtml(state.character.heightFeet)}'${escapeHtml(state.character.heightInches)}" and ${escapeHtml(state.character.weight)} lbs.
                Clear training routes, claim XP, and defeat boss-level conditioning trials.
              </p>
              <div class="tag-row">
                <span class="tag">${escapeHtml(state.character.archetype)}</span>
                <span class="tag purple-tag">${escapeHtml(modelLabel)}</span>
                <span class="tag green-tag">${escapeHtml(hairLabel)}</span>
              </div>
              ${renderCalendarPanel({ showSync: true })}
              <div class="settings-toolbar">
                <button class="pixel-button small settings-button" data-action="toggle-settings">${uiSettings.settingsOpen ? "Close Settings" : "Settings"}</button>
                <span class="settings-chip">${uiSettings.layoutProfile === "portrait" ? "Portrait" : "Landscape"}</span>
                <span class="settings-chip">${uiSettings.showAdventureLog ? "Log On" : "Log Off"}</span>
              </div>
            </div>
            <div class="player-summary">
              ${renderAvatar(state.character, "compact")}
              <div class="hero-stats">
                <div class="hero-stat"><span>Level</span><strong>${levelInfo.level}</strong></div>
                <div class="hero-stat rank"><span>League Rank</span><strong>${escapeHtml(rank)}</strong></div>
                <div class="hero-stat"><span>Coins</span><strong>${escapeHtml(state.gold)}</strong></div>
                <div class="hero-stat"><span>Streak</span><strong>${escapeHtml(state.streak)}</strong></div>
              </div>
              ${renderInventoryHud(levelInfo, week)}
            </div>
          </div>
          <div class="meters">
            <div>
              <div class="meter-label"><span>XP Progress</span><span>${levelInfo.currentLevelXp}/${levelInfo.nextLevelXp} XP</span></div>
              <div class="meter-shell"><div class="meter-fill" style="width: ${progress}%"></div></div>
            </div>
            <div>
              <div class="meter-label"><span>Weekly Clear</span><span>${week.done}/${week.total}</span></div>
              <div class="meter-shell"><div class="meter-fill purple-fill" style="width: ${week.percent}%"></div></div>
            </div>
          </div>
        </header>

        ${renderSettingsDrawer()}
        ${renderTrainingArena({ levelInfo, selectedWorkout, selectedDone, selectedRested, selectedFuture, selectedLate, selectedComplete })}
        ${renderGameCockpit({ levelInfo, progress, week, selectedWorkout, selectedRested, selectedFuture, selectedLate, selectedComplete })}
        ${renderDashboardTabs()}
        ${activeDashboardTab === "edit" ? renderEditorTab() : activeDashboardTab === "engine" ? renderRpgEngineTab() : `
        <section class="dashboard-grid">
          <aside class="side-stack">
            ${renderCollapsiblePanel({
              id: "trainingRoutes",
              title: "Training Routes",
              meta: `${week.done}/${week.total}`,
              content: `<div class="day-list">${renderTrainingDays()}</div>`,
            })}
            ${renderCollapsiblePanel({
              id: "battleStats",
              title: "Battle Stats",
              meta: `${Object.keys(state.stats).length} stats`,
              content: `<div class="stat-list">${renderStats()}</div>`,
            })}
          </aside>

          <section class="pixel-card panel-pad">
            <div class="quest-header">
              <div>
                <p class="eyebrow">Main Route</p>
                <h2>${escapeHtml(selectedWorkout.day)}: ${escapeHtml(selectedWorkout.title)}</h2>
                <p class="copy">${escapeHtml(selectedWorkout.theme)}</p>
                ${selectedLate ? `<p class="late-warning">This route is past its calendar day. Exercise XP and clear bonus are halved.</p>` : ""}
                ${selectedFuture ? `<p class="future-warning">This future route is preview-only until ${escapeHtml(selectedWorkout.day)}.</p>` : ""}
                ${selectedRested ? `<p class="rest-warning">${renderRestIcon()} Rest day taken. You recovered for +${escapeHtml(selectedRestXp)} XP, which is 25% of this route's available XP.</p>` : ""}
              </div>
              <button
                class="pixel-button green-button"
                data-action="claim-day"
                ${!selectedComplete || selectedClaimed || selectedFuture || selectedRested ? "disabled" : ""}
              >${selectedRested ? `Rested +${escapeHtml(selectedRestXp)}` : selectedClaimed ? "Bonus Claimed" : selectedFuture ? `Locked Until ${escapeHtml(selectedWorkout.day)}` : `Claim +${selectedClearBonus}`}</button>
            </div>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Clear</th>
                    <th>Section</th>
                    <th>Exercise</th>
                    <th>Quality</th>
                    <th>Sets</th>
                    <th>Rep/Time</th>
                    <th>XP</th>
                  </tr>
                </thead>
                <tbody>${renderExerciseRows(selectedWorkout)}</tbody>
              </table>
            </div>
          </section>

          <aside class="side-stack">
            ${renderCollapsiblePanel({
              id: "sideRoutes",
              title: "Side Routes",
              meta: `${BONUS_QUESTS.filter((quest) => state.completedSpecial[quest.id]).length}/${BONUS_QUESTS.length}`,
              className: "purple",
              content: `
                <p class="copy">Extra work that builds your stats.</p>
                <div class="quest-list">${renderQuestCards(BONUS_QUESTS)}</div>
              `,
            })}
            ${renderCollapsiblePanel({
              id: "championTrials",
              title: "Champion Trials",
              meta: `${BOSS_QUESTS.filter((quest) => state.completedSpecial[quest.id]).length}/${BOSS_QUESTS.length}`,
              className: "red",
              content: `
                <p class="copy">High XP conditioning and specialty trials.</p>
                <div class="quest-list">${renderQuestCards(BOSS_QUESTS, true)}</div>
              `,
            })}
            ${adventureLogPanel}
          </aside>
        </section>
        `}
      </main>
    </div>
  `;
}

function normalizeImportedWorkout(raw, index) {
  if (!raw || typeof raw !== "object") return { error: `Workout ${index + 1} is not an object.` };
  if (!String(raw.title || "").trim()) return { error: `Workout ${index + 1} is missing a title.` };
  if (!Array.isArray(raw.exercises) || !raw.exercises.length) return { error: `Workout ${index + 1} needs an exercises array.` };

  const exercises = raw.exercises.map((exercise, exerciseIndex) => {
    if (!exercise || typeof exercise !== "object") return null;
    const section = String(exercise.section || "Strength").trim();
    const name = String(exercise.name || "").trim();
    const quality = String(exercise.quality || "").trim();
    const reps = String(exercise.reps || "").trim();
    if (!name || !quality || !reps) return null;
    return {
      section: SECTION_XP[section] ? section : "Strength",
      name,
      quality,
      sets: Math.max(1, Number(exercise.sets) || 1),
      reps,
    };
  });

  if (exercises.some((exercise) => !exercise)) {
    return { error: `Workout ${index + 1} has an incomplete exercise row.` };
  }

  return {
    workout: {
      day: String(raw.day || "Custom Route").trim(),
      title: String(raw.title).trim(),
      theme: String(raw.theme || "Imported training route.").trim(),
      clearBonus: Math.max(0, Number(raw.clearBonus) || 0),
      exercises,
    },
  };
}

function parseWorkoutSplitImport(importText) {
  if (!String(importText || "").trim()) return { error: "Paste a workout split JSON array first." };
  let parsed;
  try {
    parsed = JSON.parse(importText);
  } catch {
    return { error: "Import is not valid JSON yet." };
  }

  const workouts = Array.isArray(parsed) ? parsed : Array.isArray(parsed.workouts) ? parsed.workouts : null;
  if (!workouts || !workouts.length) return { error: "Import needs a workout array." };

  const routeReplacements = {};
  const customWorkouts = [];
  const timestamp = Date.now();

  for (let index = 0; index < workouts.length; index += 1) {
    const normalized = normalizeImportedWorkout(workouts[index], index);
    if (normalized.error) return normalized;

    if (index < IMPORT_ROUTE_IDS.length) {
      const routeId = IMPORT_ROUTE_IDS[index];
      const presetRoute = WORKOUTS.find((workout) => workout.id === routeId);
      routeReplacements[routeId] = {
        ...normalized.workout,
        id: routeId,
        day: presetRoute.day,
        custom: true,
        replaced: true,
      };
    } else {
      customWorkouts.push({
        ...normalized.workout,
        id: `custom-import-${timestamp}-${index}`,
        custom: true,
      });
    }
  }

  return {
    routeReplacements,
    originalWorkouts: originalWorkoutsFromRouteReplacements(routeReplacements),
    customWorkouts,
    count: workouts.length,
  };
}

function splitDelimitedLine(line, delimiter) {
  const values = [];
  let value = "";
  let inQuotes = false;
  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const nextChar = line[index + 1];
    if (char === '"' && nextChar === '"') {
      value += '"';
      index += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === delimiter && !inQuotes) {
      values.push(value.trim());
      value = "";
    } else {
      value += char;
    }
  }
  values.push(value.trim());
  return values;
}

function titleCase(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function inferSectionFromText(text) {
  const value = String(text || "").toLowerCase();
  if (value.includes("warm")) return "Warm-Up";
  if (value.includes("sprint") || value.includes("speed")) return "Speed";
  if (value.includes("agility") || value.includes("shuffle")) return "Agility";
  if (value.includes("jump") || value.includes("clean") || value.includes("power")) return "Power";
  if (value.includes("core") || value.includes("plank") || value.includes("ab")) return "Core";
  if (value.includes("mobility") || value.includes("stretch")) return "Mobility";
  if (value.includes("carry")) return "Carry";
  if (value.includes("grip") || value.includes("hang")) return "Grip";
  if (value.includes("condition") || value.includes("bike") || value.includes("rope")) return "Conditioning";
  if (value.includes("recover") || value.includes("walk")) return "Recovery";
  return "Strength";
}

function workoutFromRows(rows, sourceName) {
  const header = rows[0].map((item) => item.trim().toLowerCase());
  const hasHeader = ["day", "title", "workout", "exercise", "name", "section", "quality", "sets", "reps"].some((key) => header.includes(key));
  const dataRows = hasHeader ? rows.slice(1) : rows;
  const indexFor = (...names) => names.map((name) => header.indexOf(name)).find((index) => index >= 0);
  const dayIndex = hasHeader ? indexFor("day", "route") : 0;
  const titleIndex = hasHeader ? indexFor("title", "workout", "workout title") : 1;
  const themeIndex = hasHeader ? indexFor("theme", "focus", "description") : 2;
  const bonusIndex = hasHeader ? indexFor("clearbonus", "clear bonus", "bonus", "xp bonus") : -1;
  const sectionIndex = hasHeader ? indexFor("section", "type", "category") : 3;
  const nameIndex = hasHeader ? indexFor("name", "exercise", "movement") : 4;
  const qualityIndex = hasHeader ? indexFor("quality", "target", "focus") : 5;
  const setsIndex = hasHeader ? indexFor("sets", "set") : 6;
  const repsIndex = hasHeader ? indexFor("reps", "rep/time", "time", "duration") : 7;
  const groups = new Map();

  dataRows.forEach((row) => {
    if (!row.some(Boolean)) return;
    const title = row[titleIndex] || row[dayIndex] || sourceName.replace(/\.[^.]+$/, "") || "Imported Workout";
    const day = row[dayIndex] || "Imported Route";
    const key = `${day}::${title}`;
    if (!groups.has(key)) {
      groups.set(key, {
        day,
        title,
        theme: row[themeIndex] || "Imported training route.",
        clearBonus: Number(row[bonusIndex]) || 75,
        exercises: [],
      });
    }
    const name = row[nameIndex] || (!hasHeader ? row[0] : "");
    if (!name) return;
    groups.get(key).exercises.push({
      section: row[sectionIndex] || inferSectionFromText(name),
      name,
      quality: row[qualityIndex] || inferSectionFromText(name),
      sets: Number(row[setsIndex]) || 1,
      reps: row[repsIndex] || "Reps",
    });
  });

  return [...groups.values()].filter((workout) => workout.exercises.length);
}

function parseDelimitedWorkoutText(text, fileName) {
  const lines = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  if (lines.length < 2) return [];
  const delimiter = lines[0].includes("\t") ? "\t" : ",";
  if (delimiter === "," && !lines[0].includes(",")) return [];
  const rows = lines.map((line) => splitDelimitedLine(line, delimiter));
  return workoutFromRows(rows, fileName);
}

function parsePlainWorkoutText(text, fileName) {
  const lines = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const workouts = [];
  let current = null;

  function startWorkout(label) {
    const cleaned = label.replace(/^#+\s*/, "").replace(/:$/, "").trim();
    current = {
      day: /monday|tuesday|wednesday|thursday|friday|saturday|sunday/i.test(cleaned) ? titleCase(cleaned.split(/[-:|]/)[0]) : "Imported Route",
      title: cleaned || fileName.replace(/\.[^.]+$/, "") || "Imported Workout",
      theme: "Analyzed from uploaded file.",
      clearBonus: 75,
      exercises: [],
    };
    workouts.push(current);
  }

  lines.forEach((line, index) => {
    const normalized = line.replace(/^[-*]\s*/, "").trim();
    const heading = /^#{1,3}\s+/.test(line) || /^(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/i.test(normalized) || (/:$/.test(normalized) && normalized.length < 70);
    if (heading) {
      startWorkout(normalized);
      return;
    }
    if (!current) startWorkout(fileName.replace(/\.[^.]+$/, "") || "Imported Workout");

    const parts = normalized.includes("|")
      ? normalized.split("|").map((part) => part.trim())
      : normalized.split(/\s+-\s+|\s+–\s+/).map((part) => part.trim());
    const first = parts[0] || normalized;
    const setsMatch = normalized.match(/(\d+)\s*(?:x|sets?\s*(?:of)?)/i);
    const repsMatch = normalized.match(/(?:x|for|reps?:?)\s*([0-9/ -]+(?:sec|min|yd|each|side|total|reps?)?)/i);
    current.exercises.push({
      section: parts[1] && SECTION_XP[parts[1]] ? parts[1] : inferSectionFromText(normalized),
      name: first.replace(/^\d+\.\s*/, ""),
      quality: parts[2] || inferSectionFromText(normalized),
      sets: setsMatch ? Number(setsMatch[1]) : 1,
      reps: parts[3] || repsMatch?.[1]?.trim() || "Reps",
    });
  });

  return workouts.filter((workout) => workout.exercises.length);
}

function analyzeWorkoutFileText(fileName, text) {
  const trimmed = String(text || "").trim();
  if (!trimmed) return { error: "That file is empty." };

  try {
    const parsed = JSON.parse(trimmed);
    const workouts = Array.isArray(parsed) ? parsed : Array.isArray(parsed.workouts) ? parsed.workouts : null;
    if (workouts?.length) {
      const checked = workouts.map((workout, index) => normalizeImportedWorkout(workout, index));
      const bad = checked.find((item) => item.error);
      if (bad) return bad;
      return {
        workouts: checked.map((item) => item.workout),
        report: `AI analyzer read ${fileName} as JSON and found ${checked.length} workout route${checked.length === 1 ? "" : "s"}.`,
      };
    }
  } catch {
    // Continue into CSV/plain-text analysis.
  }

  let workouts = parseDelimitedWorkoutText(trimmed, fileName);
  let format = "CSV/TSV";
  if (!workouts.length) {
    workouts = parsePlainWorkoutText(trimmed, fileName);
    format = "plain text";
  }
  const checked = workouts.map((workout, index) => normalizeImportedWorkout(workout, index));
  const bad = checked.find((item) => item.error);
  if (!checked.length || bad) return { error: bad?.error || "The analyzer could not find complete workouts in that file." };

  return {
    workouts: checked.map((item) => item.workout),
    report: `AI analyzer read ${fileName} as ${format} and built ${checked.length} workout route${checked.length === 1 ? "" : "s"}. Review the JSON, then start your journey.`,
  };
}

function isPdfFile(file) {
  const name = String(file?.name || "").toLowerCase();
  return file?.type === "application/pdf" || name.endsWith(".pdf");
}

function isImageFile(file) {
  const name = String(file?.name || "").toLowerCase();
  return String(file?.type || "").startsWith("image/") || /\.(png|jpe?g|webp)$/i.test(name);
}

function readFileAsText(file) {
  if (file && typeof file.text === "function") return file.text();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("The file could not be read."));
    reader.readAsText(file);
  });
}

function readFileAsArrayBuffer(file) {
  if (file && typeof file.arrayBuffer === "function") return file.arrayBuffer();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("The file could not be read."));
    reader.readAsArrayBuffer(file);
  });
}

function binaryStringFromBuffer(buffer) {
  const bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer || []);
  const chunkSize = 8192;
  let output = "";
  for (let index = 0; index < bytes.length; index += chunkSize) {
    output += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }
  return output;
}

function decodePdfTextBytes(value) {
  const text = String(value || "");
  if (text.length >= 2 && text.charCodeAt(0) === 0xfe && text.charCodeAt(1) === 0xff) {
    let decoded = "";
    for (let index = 2; index + 1 < text.length; index += 2) {
      decoded += String.fromCharCode((text.charCodeAt(index) << 8) + text.charCodeAt(index + 1));
    }
    return decoded;
  }
  return text;
}

function readPdfLiteralString(source, startIndex) {
  let depth = 1;
  let index = startIndex + 1;
  let output = "";

  while (index < source.length && depth > 0) {
    const char = source[index];
    const nextChar = source[index + 1];

    if (char === "\\") {
      if (/[0-7]/.test(nextChar || "")) {
        let octal = nextChar;
        let consumed = 1;
        while (consumed < 3 && /[0-7]/.test(source[index + 1 + consumed] || "")) {
          octal += source[index + 1 + consumed];
          consumed += 1;
        }
        output += String.fromCharCode(parseInt(octal, 8));
        index += consumed + 1;
        continue;
      }

      if (nextChar === "\r" || nextChar === "\n") {
        index += nextChar === "\r" && source[index + 2] === "\n" ? 3 : 2;
        continue;
      }

      const escaped = { n: "\n", r: "\r", t: "\t", b: "\b", f: "\f", "(": "(", ")": ")", "\\": "\\" };
      output += escaped[nextChar] ?? nextChar ?? "";
      index += 2;
      continue;
    }

    if (char === "(") {
      depth += 1;
      output += char;
      index += 1;
      continue;
    }

    if (char === ")") {
      depth -= 1;
      if (depth > 0) output += char;
      index += 1;
      continue;
    }

    output += char;
    index += 1;
  }

  return { text: decodePdfTextBytes(output), nextIndex: index };
}

function readPdfHexString(source, startIndex) {
  const endIndex = source.indexOf(">", startIndex + 1);
  if (endIndex === -1) return { text: "", nextIndex: startIndex + 1 };
  let hex = source.slice(startIndex + 1, endIndex).replace(/\s+/g, "");
  if (!hex || /[^0-9a-f]/i.test(hex)) return { text: "", nextIndex: endIndex + 1 };
  if (hex.length % 2) hex += "0";
  let output = "";
  for (let index = 0; index < hex.length; index += 2) {
    output += String.fromCharCode(parseInt(hex.slice(index, index + 2), 16));
  }
  return { text: decodePdfTextBytes(output), nextIndex: endIndex + 1 };
}

function extractPdfStringsFromSource(source) {
  const chunks = [];
  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    const nextChar = source[index + 1];
    if (char === "(") {
      const result = readPdfLiteralString(source, index);
      if (result.text.trim()) chunks.push(result.text);
      index = result.nextIndex - 1;
    } else if (char === "<" && nextChar !== "<") {
      const result = readPdfHexString(source, index);
      if (result.text.trim()) chunks.push(result.text);
      index = result.nextIndex - 1;
    }
  }
  return chunks;
}

async function inflatePdfBytes(bytes) {
  if (typeof DecompressionStream !== "function" || typeof Blob === "undefined" || typeof Response === "undefined") return "";
  const formats = ["deflate", "deflate-raw"];
  for (const format of formats) {
    try {
      const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream(format));
      const inflated = await new Response(stream).arrayBuffer();
      return binaryStringFromBuffer(inflated);
    } catch {
      // Try the next supported deflate flavor.
    }
  }
  return "";
}

async function getPdfTextSources(buffer) {
  const bytes = new Uint8Array(buffer || []);
  const raw = binaryStringFromBuffer(bytes);
  const sources = [];
  let searchIndex = 0;

  while (searchIndex < raw.length) {
    const streamIndex = raw.indexOf("stream", searchIndex);
    if (streamIndex === -1) break;
    const endIndex = raw.indexOf("endstream", streamIndex + 6);
    if (endIndex === -1) break;

    const dictionaryStart = raw.lastIndexOf("<<", streamIndex);
    const dictionaryEnd = raw.lastIndexOf(">>", streamIndex);
    const dictionary = dictionaryStart !== -1 && dictionaryEnd !== -1 && dictionaryEnd > dictionaryStart
      ? raw.slice(dictionaryStart, dictionaryEnd)
      : "";

    let contentStart = streamIndex + 6;
    if (raw[contentStart] === "\r" && raw[contentStart + 1] === "\n") contentStart += 2;
    else if (raw[contentStart] === "\n" || raw[contentStart] === "\r") contentStart += 1;

    let contentEnd = endIndex;
    while (contentEnd > contentStart && (raw[contentEnd - 1] === "\n" || raw[contentEnd - 1] === "\r")) {
      contentEnd -= 1;
    }

    const streamBytes = bytes.slice(contentStart, contentEnd);
    if (/FlateDecode/i.test(dictionary)) {
      const inflated = await inflatePdfBytes(streamBytes);
      if (inflated) sources.push(inflated);
    } else {
      sources.push(binaryStringFromBuffer(streamBytes));
    }
    searchIndex = endIndex + 9;
  }

  return sources.length ? sources : [raw];
}

async function extractPdfText(buffer) {
  const sources = await getPdfTextSources(buffer);
  const chunks = sources.flatMap((source) => extractPdfStringsFromSource(source));
  return chunks
    .map((chunk) => chunk.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join("\n");
}

function browserWindow() {
  return typeof window !== "undefined" ? window : null;
}

function assetUrl(path) {
  const win = browserWindow();
  try {
    return win?.location ? new URL(path, win.location.href).href : path;
  } catch {
    return path;
  }
}

function loadOcrScript() {
  const win = browserWindow();
  if (win?.Tesseract?.recognize) return Promise.resolve(true);
  if (ocrScriptPromise) return ocrScriptPromise;
  if (typeof document === "undefined" || typeof document.createElement !== "function") return Promise.resolve(false);

  ocrScriptPromise = new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = assetUrl(OCR_SCRIPT_PATH);
    script.async = true;
    script.onload = () => resolve(Boolean(browserWindow()?.Tesseract?.recognize));
    script.onerror = () => resolve(false);
    (document.head || document.body || document.documentElement).appendChild(script);
  });
  return ocrScriptPromise;
}

async function getOcrEngine() {
  const loaded = await loadOcrScript();
  return loaded ? browserWindow()?.Tesseract : null;
}

function updateImportProgress(message) {
  draftCharacter = { ...draftCharacter, workoutSetup: "import", importAnalysis: message };
  render();
}

function ocrLogger(message) {
  const status = String(message?.status || "reading image").replace(/_/g, " ");
  const progress = Number(message?.progress || 0);
  const now = Date.now();
  if (now - lastOcrProgressRender < 900 && progress < 1) return;
  lastOcrProgressRender = now;
  const percent = progress > 0 ? ` ${Math.round(progress * 100)}%` : "";
  updateImportProgress(`Reading screenshot with OCR: ${status}${percent}...`);
}

async function recognizeImageText(engine, file) {
  try {
    return await engine.recognize(file, "eng", {
      workerPath: assetUrl(OCR_WORKER_PATH),
      langPath: OCR_LANG_PATH,
      logger: ocrLogger,
    });
  } catch (firstError) {
    try {
      return await engine.recognize(file, "eng", { logger: ocrLogger });
    } catch {
      throw firstError;
    }
  }
}

function analysisWithReport(analysis, report) {
  if (analysis.error) return analysis;
  return { ...analysis, report };
}

async function analyzePdfWorkoutFile(file) {
  const buffer = await readFileAsArrayBuffer(file);
  const extractedText = await extractPdfText(buffer);
  if (!extractedText.trim()) {
    return {
      error: "I could not find readable text inside that PDF. If it is a scanned PDF, upload it as a screenshot/image so OCR can try it, or export it as text/CSV.",
    };
  }

  const analysis = analyzeWorkoutFileText(file.name, extractedText);
  return analysisWithReport(
    analysis,
    `AI analyzer read text from ${file.name} as a PDF and built ${analysis.workouts?.length || 0} workout route${analysis.workouts?.length === 1 ? "" : "s"}. Review the JSON, then start your journey.`
  );
}

async function analyzeImageWorkoutFile(file) {
  const engine = await getOcrEngine();
  if (!engine?.recognize) {
    return {
      error: "Screenshot OCR could not start in this browser. Try a text-based PDF, CSV, JSON, TXT, or paste the workout text.",
    };
  }

  const result = await recognizeImageText(engine, file);
  const extractedText = String(result?.data?.text || "").trim();
  if (!extractedText) {
    return { error: "OCR ran, but it could not find workout text in that screenshot. Try a clearer image or crop closer to the workout." };
  }

  const analysis = analyzeWorkoutFileText(file.name, extractedText);
  return analysisWithReport(
    analysis,
    `AI OCR read text from ${file.name} and built ${analysis.workouts?.length || 0} workout route${analysis.workouts?.length === 1 ? "" : "s"}. Review the JSON, then start your journey.`
  );
}

async function analyzeWorkoutFile(file) {
  if (isPdfFile(file)) return analyzePdfWorkoutFile(file);
  if (isImageFile(file)) return analyzeImageWorkoutFile(file);
  const text = await readFileAsText(file);
  return analyzeWorkoutFileText(file.name, text);
}

function createCharacterFromDraft() {
  characterCreatorError = "";
  const setupMode = draftCharacter.workoutSetup || "preset";
  let importedSplit = null;
  if (setupMode === "import") {
    const importResult = parseWorkoutSplitImport(draftCharacter.importText);
    if (importResult.error) {
      characterCreatorError = importResult.error;
      render();
      return;
    }
    importedSplit = importResult;
  }
  if (setupMode === "random") {
    const week = generateWeek({
      phase: draftCharacter.randomPhase || "hybrid",
      athleteLevel: draftCharacter.randomLevel || "elite",
      seed: Date.now(),
    });
    importedSplit = parseWorkoutSplitImport(JSON.stringify(week));
    if (importedSplit.error) {
      characterCreatorError = importedSplit.error;
      render();
      return;
    }
  }

  const { workoutSetup, importText, importAnalysis, randomPhase, randomLevel, ...profileDraft } = draftCharacter;
  const character = {
    ...profileDraft,
    workoutSetup,
    randomPhase,
    randomLevel,
    name: draftCharacter.name.trim() || "Unnamed Hunter",
    heightFeet: Number(draftCharacter.heightFeet) || 6,
    heightInches: Number(draftCharacter.heightInches) || 0,
    weight: Number(draftCharacter.weight) || 200,
    createdAt: new Date().toISOString(),
  };
  activeDashboardTab = setupMode === "create" ? "edit" : "routes";
  if (setupMode === "create") {
    const todayRouteId = getTodayRouteId();
    const todayWorkout = WORKOUTS.find((workout) => workout.id === todayRouteId) || WORKOUTS[0];
    customWorkoutDraft = workoutToDraft(todayWorkout, todayRouteId);
  }
  setState((prev) => ({
    ...prev,
    selectedDay: getTodayRouteId(),
    character,
    originalWorkouts: importedSplit ? importedSplit.originalWorkouts : null,
    routeReplacements: {},
    customWorkouts: importedSplit ? importedSplit.customWorkouts : [],
    log: [
      setupMode === "import"
        ? `Hunter profile created: ${character.name}. Imported ${importedSplit.count} workout routes.`
        : setupMode === "random"
          ? `Hunter profile created: ${character.name}. Random ${phaseLabel(randomPhase || "hybrid")} week generated.`
          : setupMode === "create"
            ? `Hunter profile created: ${character.name}. Edit Workout tab is ready.`
            : `Hunter profile created: ${character.name}. Preset training routes unlocked.`,
      ...prev.log.slice(0, 6),
    ],
  }));
}

function completeExercise(dayId, index) {
  const workout = findWorkoutById(dayId);
  const exercise = workout?.exercises[index];
  const key = `${dayId}-${index}`;
  if (!exercise || state.completedExercises[key]) return;
  if (isWorkoutRested(dayId)) {
    setState((prev) => ({ ...prev, log: [`${workout.day} is a rest day. Training is locked for recovery.`, ...prev.log.slice(0, 6)] }));
    return;
  }
  if (isFutureWorkout(workout)) {
    setState((prev) => ({ ...prev, log: [`${workout.day} is locked until its calendar day.`, ...prev.log.slice(0, 6)] }));
    return;
  }
  const baseXp = exerciseXp(exercise);
  const xp = adjustedXp(baseXp, workout);
  const stat = statForSection(exercise.section);
  const lateText = xp !== baseXp ? " Late clear penalty applied." : "";
  setState((prev) => ({
    ...prev,
    xp: prev.xp + xp,
    gold: prev.gold + Math.ceil(xp / 6),
    completedExercises: { ...prev.completedExercises, [key]: true },
    stats: { ...prev.stats, [stat]: (prev.stats[stat] || 1) + 1 },
    log: rewardLog(prev, prev.xp + xp, `Cleared ${exercise.name}. +${xp} XP to ${stat}.${lateText}`),
  }));
}

function claimDayClear() {
  const selectedWorkout = findWorkoutById(state.selectedDay);
  const selectedDone = selectedWorkout.exercises.filter((_, index) => state.completedExercises[`${selectedWorkout.id}-${index}`]).length;
  const selectedComplete = selectedDone === selectedWorkout.exercises.length;
  const selectedClaimed = Boolean(state.claimedDays[selectedWorkout.id]);
  if (isWorkoutRested(selectedWorkout.id)) {
    setState((prev) => ({ ...prev, log: [`${selectedWorkout.day} was used for rest and recovery.`, ...prev.log.slice(0, 6)] }));
    return;
  }
  if (isFutureWorkout(selectedWorkout)) {
    setState((prev) => ({ ...prev, log: [`${selectedWorkout.day} bonus is locked until its calendar day.`, ...prev.log.slice(0, 6)] }));
    return;
  }
  if (!selectedComplete || selectedClaimed) return;
  const clearBonus = adjustedXp(selectedWorkout.clearBonus, selectedWorkout);
  const lateText = clearBonus !== selectedWorkout.clearBonus ? " Late clear penalty applied." : "";
  setState((prev) => ({
    ...prev,
    xp: prev.xp + clearBonus,
    gold: prev.gold + Math.ceil(clearBonus / 5),
    streak: prev.streak + 1,
    claimedDays: { ...prev.claimedDays, [selectedWorkout.id]: true },
    stats: { ...prev.stats, Discipline: (prev.stats.Discipline || 1) + 2 },
    log: rewardLog(prev, prev.xp + clearBonus, `${selectedWorkout.day} cleared. Daily bonus claimed: +${clearBonus} XP.${lateText}`),
  }));
}

function restDay(dayId) {
  const workout = findWorkoutById(dayId);
  if (!workout) return;
  const completedCount = workout.exercises.filter((_, index) => state.completedExercises[`${dayId}-${index}`]).length;
  const claimed = Boolean(state.claimedDays[dayId]);
  if (isWorkoutRested(dayId)) return;
  if (isFutureWorkout(workout)) {
    setState((prev) => ({ ...prev, log: [`${workout.day} rest is locked until its calendar day.`, ...prev.log.slice(0, 6)] }));
    return;
  }
  if (completedCount > 0 || claimed) {
    setState((prev) => ({ ...prev, log: [`${workout.day} already started. Finish the route instead of resting.`, ...prev.log.slice(0, 6)] }));
    return;
  }

  const xp = restXpForWorkout(workout);
  setState((prev) => ({
    ...prev,
    xp: prev.xp + xp,
    gold: prev.gold + Math.ceil(xp / 8),
    restedDays: {
      ...(prev.restedDays || {}),
      [dayId]: { xp, restedAt: new Date().toISOString() },
    },
    stats: { ...prev.stats, Recovery: (prev.stats.Recovery || 1) + 1 },
    log: rewardLog(prev, prev.xp + xp, `${workout.day} rest day taken. ${xp} XP recovered at 25% of the route.`),
  }));
}

function completeSpecial(quest, isBoss = false) {
  if (!quest || state.completedSpecial[quest.id]) return;
  setState((prev) => ({
    ...prev,
    xp: prev.xp + quest.xp,
    gold: prev.gold + Math.ceil(quest.xp / 5),
    completedSpecial: { ...prev.completedSpecial, [quest.id]: true },
    stats: { ...prev.stats, [quest.stat]: (prev.stats[quest.stat] || 1) + (isBoss ? 3 : 1) },
    log: rewardLog(prev, prev.xp + quest.xp, `${quest.title} conquered. +${quest.xp} XP to ${quest.stat}.`),
  }));
}

function completeRpgTraining(sessionId) {
  const session = RPG_TRAINING_SESSIONS.find((item) => item.id === sessionId);
  if (!session || rpgActionBusy) return;
  const triggered = Math.random() < session.statReward.chance;
  startRpgAction((prev) => {
    const rpg = normalizeRpgState(prev.rpg);
    return {
      ...prev,
      rpg: {
        ...rpg,
        lastBattle: {
          mode: "training",
          label: session.name,
          enemyType: "recovery-shrine",
          enemyName: "Training Grounds",
          enemyHpPercent: 100,
          pending: true,
          won: false,
        },
      },
      log: rpgLog(prev, `Training started: ${session.name}.`, false),
    };
  }, (prev) => {
    const rpg = normalizeRpgState(prev.rpg);
    const statUpdates = { ...prev.stats };
    let baseStr = rpg.baseStr;
    let baseDef = rpg.baseDef;
    let boostText = "";
    if (triggered) {
      if (session.statReward.type === "str") {
        baseStr += session.statReward.value;
        boostText = ` Engine STR +${session.statReward.value}.`;
      } else {
        baseDef += session.statReward.value;
        boostText = ` Engine DEF +${session.statReward.value}.`;
      }
      statUpdates[session.statReward.stat] = (statUpdates[session.statReward.stat] || 1) + session.statReward.value;
    }
    return {
      ...prev,
      xp: prev.xp + session.xpReward,
      gold: prev.gold + session.goldReward,
      stats: statUpdates,
      rpg: {
        ...rpg,
        baseStr,
        baseDef,
        trainingCompletions: {
          ...rpg.trainingCompletions,
          [session.id]: (rpg.trainingCompletions[session.id] || 0) + 1,
        },
        lastBattle: {
          mode: "training",
          label: session.name,
          enemyType: "recovery-shrine",
          enemyName: "Training Grounds",
          enemyHpPercent: 0,
          pending: false,
          won: true,
        },
      },
      log: rpgLog(prev, `${session.name} complete. +${session.xpReward} XP and +${session.goldReward} coins.${boostText}`, true, prev.xp + session.xpReward),
    };
  });
}

function buyOrEquipRpgItem(itemId) {
  const item = getRpgItem(itemId);
  if (!item) return;
  setState((prev) => {
    const rpg = normalizeRpgState(prev.rpg);
    const owned = rpg.purchasedItemIds.includes(item.id);
    if (!owned && prev.gold < item.cost) {
      return {
        ...prev,
        log: rpgLog(prev, `Not enough coins for ${item.name}. Need ${item.cost}.`, false),
      };
    }

    const purchasedItemIds = owned ? rpg.purchasedItemIds : [...rpg.purchasedItemIds, item.id];
    const nextRpg = {
      ...rpg,
      purchasedItemIds,
      equippedWeaponId: item.type === "weapon" ? item.id : rpg.equippedWeaponId,
      equippedArmorId: item.type === "armor" ? item.id : rpg.equippedArmorId,
      lastBattle: {
        mode: "shop",
        label: item.name,
        enemyType: item.type === "weapon" ? "iron-mimic" : "core-sentinel",
        enemyName: item.type === "weapon" ? "Weapon Rack" : "Armor Stand",
        enemyHpPercent: 0,
        won: true,
      },
    };
    return {
      ...prev,
      gold: owned ? prev.gold : prev.gold - item.cost,
      rpg: nextRpg,
      log: rpgLog(prev, `${owned ? "Equipped" : "Purchased and equipped"} ${item.name}. +${item.stat} ${item.type === "weapon" ? "ATK" : "DEF"}.`, false),
    };
  });
}

function challengeRpgZone(zoneId) {
  const zone = getRpgZone(zoneId);
  if (!zone || rpgActionBusy) return;
  const computed = getRpgComputedStats();
  if (computed.attack < zone.reqStr) {
    setState((prev) => {
      const rpg = normalizeRpgState(prev.rpg);
      return {
        ...prev,
        rpg: {
          ...rpg,
          lastBattle: {
            mode: "battle",
            zoneId: zone.id,
            enemyType: zone.enemyType,
            enemyName: zone.enemyName,
            enemyHpPercent: 100,
            pending: false,
            won: false,
          },
        },
        log: rpgLog(prev, `${zone.name} is locked. You need ${zone.reqStr} ATK and currently have ${computed.attack}.`, false),
      };
    });
    return;
  }

  const playerDamage = Math.max(1, computed.attack - Math.floor(zone.enemyAtk / 3));
  const enemyDamage = Math.max(1, zone.enemyAtk - computed.defense);
  const turnsToWin = Math.ceil(zone.enemyHp / playerDamage);
  const playerHpPool = 100 + computed.defense * 5;
  const playerLostHp = turnsToWin * enemyDamage;
  const won = playerLostHp < playerHpPool;
  const defeatTurns = Math.max(1, Math.floor(playerHpPool / enemyDamage));
  const damageBeforeDefeat = defeatTurns * playerDamage;
  const enemyHpPercent = won ? 0 : Math.max(8, Math.round(((zone.enemyHp - damageBeforeDefeat) / zone.enemyHp) * 100));

  startRpgAction((prev) => {
    const rpg = normalizeRpgState(prev.rpg);
    return {
      ...prev,
      rpg: {
        ...rpg,
        lastBattle: {
          mode: "battle",
          zoneId: zone.id,
          enemyType: zone.enemyType,
          enemyName: zone.enemyName,
          enemyHpPercent: 100,
          pending: true,
          won: false,
        },
      },
      log: rpgLog(prev, `Entering ${zone.name}. ${zone.enemyName} is at full HP.`, false),
    };
  }, (prev) => {
    const rpg = normalizeRpgState(prev.rpg);
    if (!won) {
      return {
        ...prev,
        rpg: {
          ...rpg,
          lastBattle: {
            mode: "battle",
            zoneId: zone.id,
            enemyType: zone.enemyType,
            enemyName: zone.enemyName,
            enemyHpPercent,
            pending: false,
            won: false,
          },
        },
        log: rpgLog(prev, `${zone.enemyName} held the zone. Train or equip better gear before the rematch.`),
      };
    }

    return {
      ...prev,
      xp: prev.xp + zone.xpReward,
      gold: prev.gold + zone.goldReward,
      stats: { ...prev.stats, Discipline: (prev.stats.Discipline || 1) + 1 },
      rpg: {
        ...rpg,
        zoneWins: {
          ...rpg.zoneWins,
          [zone.id]: (rpg.zoneWins[zone.id] || 0) + 1,
        },
        lastBattle: {
          mode: "battle",
          zoneId: zone.id,
          enemyType: zone.enemyType,
          enemyName: zone.enemyName,
          enemyHpPercent: 0,
          pending: false,
          won: true,
        },
      },
      log: rpgLog(prev, `Victory over ${zone.enemyName}. +${zone.xpReward} XP and +${zone.goldReward} coins.`, true, prev.xp + zone.xpReward),
    };
  }, 900);
}

function resetWeek() {
  setState((prev) => ({
    ...prev,
    completedExercises: {},
    claimedDays: {},
    restedDays: {},
    completedSpecial: {},
    log: ["Weekly board reset. XP and stats stayed saved.", ...prev.log.slice(0, 6)],
  }));
}

function syncToday(addLog = true) {
  const todayRouteId = getTodayRouteId();
  const todayWorkout = findWorkoutById(todayRouteId);
  if (activeDashboardTab === "edit") loadWorkoutIntoEditor(todayRouteId);
  setState((prev) => ({
    ...prev,
    selectedDay: todayRouteId,
    log: addLog ? [`Synced to ${todayWorkout.day} on the Gregorian calendar.`, ...prev.log.slice(0, 6)] : prev.log,
  }));
}

function workoutToDraft(workout, targetRoute = "new") {
  return {
    day: workout.day || "Custom Route",
    targetRoute,
    title: workout.title || "",
    theme: workout.theme || "",
    clearBonus: String(workout.clearBonus ?? 75),
    exercises: (workout.exercises || []).map((exercise) => ({
      section: exercise.section || "Strength",
      name: exercise.name || "",
      quality: exercise.quality || "",
      sets: String(exercise.sets || 1),
      reps: exercise.reps || "",
    })),
  };
}

function editorTargetForWorkout(workout) {
  const canTarget = TRAINING_WEEK_ORDER[workout.id] || (state.customWorkouts || []).some((item) => item.id === workout.id);
  return canTarget ? workout.id : "new";
}

function loadWorkoutIntoEditor(dayId = state.selectedDay) {
  const workout = findWorkoutById(dayId);
  customWorkoutDraft = workoutToDraft(workout, editorTargetForWorkout(workout));
}

function loadSelectedWorkoutIntoEditor() {
  loadWorkoutIntoEditor();
  activeDashboardTab = "edit";
  render();
}

function clearRoutesProgress(completedExercises, claimedDays, restedDays, routeIds) {
  return routeIds.reduce((result, routeId) => (
    clearWorkoutProgress(result.completedExercises, result.claimedDays, routeId, result.restedDays)
  ), { completedExercises, claimedDays, restedDays });
}

function fillEditorWithRandomWorkout() {
  const selectedWorkout = findWorkoutById(state.selectedDay);
  const targetRoute = TRAINING_WEEK_ORDER[selectedWorkout.id] ? selectedWorkout.id : "new";
  const workout = generateWorkout({
    phase: randomWorkoutDraft.phase,
    athleteLevel: randomWorkoutDraft.athleteLevel,
    seed: Date.now(),
    day: targetRoute === "new" ? "Random Route" : selectedWorkout.day,
  });
  customWorkoutDraft = workoutToDraft(workout, targetRoute);
  activeDashboardTab = "edit";
  setState((prev) => ({ ...prev, log: [`Random ${phaseLabel(workout.phase)} workout loaded into the editor.`, ...prev.log.slice(0, 6)] }));
}

function applyRandomWeek() {
  const week = generateWeek({
    phase: randomWorkoutDraft.phase,
    athleteLevel: randomWorkoutDraft.athleteLevel,
    seed: Date.now(),
  });
  const split = parseWorkoutSplitImport(JSON.stringify(week));
  if (split.error) {
    setState((prev) => ({ ...prev, log: [split.error, ...prev.log.slice(0, 6)] }));
    return;
  }

  setState((prev) => {
    const cleared = clearRoutesProgress(prev.completedExercises, prev.claimedDays, prev.restedDays || {}, IMPORT_ROUTE_IDS);
    return {
      ...prev,
      selectedDay: getTodayRouteId(),
      routeReplacements: split.routeReplacements,
      completedExercises: cleared.completedExercises,
      claimedDays: cleared.claimedDays,
      restedDays: cleared.restedDays,
      log: [`Random ${phaseLabel(randomWorkoutDraft.phase)} week generated and placed on the seven training routes.`, ...prev.log.slice(0, 6)],
    };
  });
}

function loadLibraryWorkout(libraryId) {
  const libraryWorkout = INTERNET_WORKOUT_LIBRARY.find((item) => item.id === libraryId);
  if (!libraryWorkout) {
    setState((prev) => ({ ...prev, log: ["That library workout could not be found.", ...prev.log.slice(0, 6)] }));
    return;
  }

  customWorkoutDraft = workoutToDraft({
    ...libraryWorkout.workout,
    theme: `${libraryWorkout.workout.theme} Source: ${libraryWorkout.sourceName}.`,
  }, "new");
  activeDashboardTab = "edit";
  setState((prev) => ({
    ...prev,
    log: [`Loaded ${libraryWorkout.workout.title} from ${libraryWorkout.sourceName} into the editor.`, ...prev.log.slice(0, 6)],
  }));
}

function sanitizeCustomWorkoutDraft() {
  const exercises = customWorkoutDraft.exercises
    .map((exercise) => ({
      section: exercise.section || "Strength",
      name: String(exercise.name || "").trim(),
      quality: String(exercise.quality || "").trim(),
      sets: Math.max(1, Number(exercise.sets) || 1),
      reps: String(exercise.reps || "").trim(),
    }))
    .filter((exercise) => exercise.name && exercise.quality && exercise.reps);

  const targetRoute = customWorkoutDraft.targetRoute || "new";
  if (!String(customWorkoutDraft.title || "").trim()) return { error: "Add a workout title first." };
  if (targetRoute === "new" && !String(customWorkoutDraft.day || "").trim()) return { error: "Add a day or route label first." };
  if (targetRoute !== "new" && !TRAINING_WEEK_ORDER[targetRoute] && !(state.customWorkouts || []).some((item) => item.id === targetRoute)) {
    return { error: "Pick a valid route placement first." };
  }
  if (!exercises.length) return { error: "Add at least one complete exercise row." };

  return {
    workout: {
      id: targetRoute === "new" ? `custom-${Date.now()}` : targetRoute,
      custom: true,
      day: String(customWorkoutDraft.day || "Custom Route").trim(),
      title: String(customWorkoutDraft.title).trim(),
      theme: String(customWorkoutDraft.theme || "Custom training route.").trim(),
      clearBonus: Math.max(0, Number(customWorkoutDraft.clearBonus) || 0),
      exercises,
    },
  };
}

function clearWorkoutProgress(completedExercises, claimedDays, dayId, restedDays = state.restedDays || {}) {
  const nextCompleted = { ...completedExercises };
  Object.keys(nextCompleted).forEach((key) => {
    if (key.startsWith(`${dayId}-`)) delete nextCompleted[key];
  });
  const nextClaimed = { ...claimedDays };
  delete nextClaimed[dayId];
  const nextRested = { ...restedDays };
  delete nextRested[dayId];
  return { completedExercises: nextCompleted, claimedDays: nextClaimed, restedDays: nextRested };
}

function saveCustomWorkout() {
  const result = sanitizeCustomWorkoutDraft();
  if (result.error) {
    setState((prev) => ({ ...prev, log: [result.error, ...prev.log.slice(0, 6)] }));
    return;
  }

  const targetRoute = customWorkoutDraft.targetRoute;
  customWorkoutDraft = createBlankCustomWorkoutDraft();

  if (TRAINING_WEEK_ORDER[targetRoute]) {
    const replacedRoute = WORKOUTS.find((workout) => workout.id === targetRoute);
    if (state.character?.workoutSetup === "create") {
      const originalWorkout = {
        ...result.workout,
        id: targetRoute,
        day: replacedRoute?.day || result.workout.day,
        custom: true,
        replaced: false,
      };
      setState((prev) => {
        const routeReplacements = { ...(prev.routeReplacements || {}) };
        delete routeReplacements[targetRoute];
        const originalWorkouts = getOriginalWorkouts().map((workout) => (
          workout.id === targetRoute ? originalWorkout : workout
        ));
        const cleared = clearWorkoutProgress(prev.completedExercises, prev.claimedDays, targetRoute, prev.restedDays || {});
        return {
          ...prev,
          selectedDay: targetRoute,
          originalWorkouts,
          routeReplacements,
          completedExercises: cleared.completedExercises,
          claimedDays: cleared.claimedDays,
          restedDays: cleared.restedDays,
          log: [`${replacedRoute?.day || "Route"} saved as part of your original custom split.`, ...prev.log.slice(0, 6)],
        };
      });
      return;
    }

    const replacementWorkout = {
      ...result.workout,
      id: targetRoute,
      day: replacedRoute?.day || result.workout.day,
      replaced: true,
    };
    setState((prev) => {
      const cleared = clearWorkoutProgress(prev.completedExercises, prev.claimedDays, targetRoute, prev.restedDays || {});
      return {
        ...prev,
        selectedDay: targetRoute,
        routeReplacements: { ...(prev.routeReplacements || {}), [targetRoute]: replacementWorkout },
        completedExercises: cleared.completedExercises,
        claimedDays: cleared.claimedDays,
        restedDays: cleared.restedDays,
        log: [`${replacedRoute?.day || "Route"} replaced with ${replacementWorkout.title}.`, ...prev.log.slice(0, 6)],
      };
    });
    return;
  }

  if (targetRoute !== "new") {
    setState((prev) => {
      const cleared = clearWorkoutProgress(prev.completedExercises, prev.claimedDays, targetRoute, prev.restedDays || {});
      return {
        ...prev,
        selectedDay: targetRoute,
        customWorkouts: (prev.customWorkouts || []).map((workout) => (
          workout.id === targetRoute ? { ...result.workout, custom: true } : workout
        )),
        completedExercises: cleared.completedExercises,
        claimedDays: cleared.claimedDays,
        restedDays: cleared.restedDays,
        log: [`Custom workout updated: ${result.workout.title}.`, ...prev.log.slice(0, 6)],
      };
    });
    return;
  }

  setState((prev) => ({
    ...prev,
    selectedDay: result.workout.id,
    customWorkouts: [...(prev.customWorkouts || []), result.workout],
    log: [`Custom workout saved: ${result.workout.title}.`, ...prev.log.slice(0, 6)],
  }));
}

function restoreRoute(dayId) {
  const replacement = state.routeReplacements?.[dayId];
  if (!replacement) return;
  setState((prev) => {
    const routeReplacements = { ...(prev.routeReplacements || {}) };
    delete routeReplacements[dayId];
    const cleared = clearWorkoutProgress(prev.completedExercises, prev.claimedDays, dayId, prev.restedDays || {});
    const original = getOriginalWorkouts().find((workout) => workout.id === dayId);
    return {
      ...prev,
      selectedDay: dayId,
      routeReplacements,
      completedExercises: cleared.completedExercises,
      claimedDays: cleared.claimedDays,
      restedDays: cleared.restedDays,
      log: [`${original?.day || "Route"} restored to original workout.`, ...prev.log.slice(0, 6)],
    };
  });
}

function restartGame() {
  clearRpgActionTimer();
  draftCharacter = createBlankCharacterDraft();
  customWorkoutDraft = createBlankCustomWorkoutDraft();
  randomWorkoutDraft = { phase: "strength", athleteLevel: "elite" };
  activeDashboardTab = "routes";
  titleStarted = true;
  setState({
    ...structuredClone(DEFAULT_STATE),
    stats: { ...STAT_START },
    completedExercises: {},
    claimedDays: {},
    restedDays: {},
    completedSpecial: {},
    customWorkouts: [],
    originalWorkouts: null,
    routeReplacements: {},
    log: ["New Day 1 started. Create your hunter from the beginning."],
  });
}

function handleAction(event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;

  if (action === "start-game") {
    titleStarted = true;
    if (state.character) {
      activeDashboardTab = state.character.workoutSetup === "create" ? "edit" : "routes";
      if (activeDashboardTab === "edit") loadWorkoutIntoEditor(getTodayRouteId());
      syncToday(false);
    }
    else render();
    return;
  }

  if (action === "restart-game") restartGame();

  if (action === "select-character-option") {
    const fieldName = button.dataset.characterField;
    const value = button.dataset.characterValue;
    if (!fieldName || value === undefined) return;
    characterCreatorError = "";
    draftCharacter = { ...draftCharacter, [fieldName]: value };
    if (fieldName === "workoutSetup") importAnalysisRun += 1;
    render();
    return;
  }

  if (action === "show-tab") {
    activeDashboardTab = button.dataset.tab || "routes";
    if (activeDashboardTab === "edit") loadWorkoutIntoEditor(state.selectedDay);
    render();
    return;
  }

  if (action === "toggle-panel") {
    const panelId = button.dataset.panelId;
    if (!panelId) return;
    setState((prev) => ({
      ...prev,
      collapsedPanels: {
        ...DEFAULT_STATE.collapsedPanels,
        ...(prev.collapsedPanels || {}),
        [panelId]: !Boolean(prev.collapsedPanels?.[panelId]),
      },
    }));
    return;
  }

  if (action === "toggle-settings") {
    setState((prev) => ({
      ...prev,
      uiSettings: {
        ...normalizeUiSettings(prev.uiSettings),
        settingsOpen: !normalizeUiSettings(prev.uiSettings).settingsOpen,
      },
    }));
    return;
  }

  if (action === "toggle-log-visibility") {
    setState((prev) => {
      const settings = normalizeUiSettings(prev.uiSettings);
      return {
        ...prev,
        uiSettings: {
          ...settings,
          showAdventureLog: !settings.showAdventureLog,
        },
      };
    });
    return;
  }

  if (action === "toggle-layout-profile") {
    setState((prev) => {
      const settings = normalizeUiSettings(prev.uiSettings);
      return {
        ...prev,
        uiSettings: {
          ...settings,
          layoutProfile: settings.layoutProfile === "portrait" ? "landscape" : "portrait",
        },
      };
    });
    return;
  }

  if (action === "sync-today") syncToday();

  if (action === "select-day") {
    if (activeDashboardTab === "edit") loadWorkoutIntoEditor(button.dataset.dayId);
    setState((prev) => ({ ...prev, selectedDay: button.dataset.dayId }));
    return;
  }

  if (action === "add-custom-exercise") {
    customWorkoutDraft = {
      ...customWorkoutDraft,
      exercises: [...customWorkoutDraft.exercises, { section: "Strength", name: "", quality: "", sets: "3", reps: "" }],
    };
    render();
  }

  if (action === "remove-custom-exercise") {
    const index = Number(button.dataset.index);
    customWorkoutDraft = {
      ...customWorkoutDraft,
      exercises: customWorkoutDraft.exercises.filter((_, exerciseIndex) => exerciseIndex !== index),
    };
    render();
  }

  if (action === "save-custom-workout") saveCustomWorkout();

  if (action === "load-selected-workout") loadSelectedWorkoutIntoEditor();

  if (action === "generate-random-workout") fillEditorWithRandomWorkout();

  if (action === "generate-random-week") applyRandomWeek();

  if (action === "load-library-workout") loadLibraryWorkout(button.dataset.libraryId);

  if (action === "rpg-train") completeRpgTraining(button.dataset.sessionId);

  if (action === "buy-rpg-item") buyOrEquipRpgItem(button.dataset.itemId);

  if (action === "challenge-rpg-zone") challengeRpgZone(button.dataset.zoneId);

  if (action === "rest-day") restDay(button.dataset.dayId);

  if (action === "restore-route") restoreRoute(button.dataset.dayId);

  if (action === "complete-exercise") {
    completeExercise(button.dataset.dayId, Number(button.dataset.index));
  }

  if (action === "claim-day") claimDayClear();

  if (action === "complete-bonus") {
    completeSpecial(BONUS_QUESTS.find((quest) => quest.id === button.dataset.questId));
  }

  if (action === "complete-boss") {
    completeSpecial(BOSS_QUESTS.find((quest) => quest.id === button.dataset.questId), true);
  }

  if (action === "reset-week") resetWeek();
}

function handleCharacterInput(event) {
  const field = event.target.closest("[data-character-field]");
  if (!field) return;
  const fieldName = field.dataset.characterField;
  characterCreatorError = "";
  draftCharacter = { ...draftCharacter, [fieldName]: field.value };
  if (fieldName === "workoutSetup") {
    importAnalysisRun += 1;
    render();
    return;
  }
  if (fieldName === "hairstyle") {
    render();
    return;
  }
  updateCharacterPreview();
}

function handleCustomWorkoutInput(event) {
  const libraryFilter = event.target.closest("[data-library-filter]");
  if (libraryFilter) {
    workoutLibraryFilter = libraryFilter.value || "all";
    render();
    return;
  }

  const randomField = event.target.closest("[data-random-workout-field]");
  if (randomField) {
    randomWorkoutDraft = {
      ...randomWorkoutDraft,
      [randomField.dataset.randomWorkoutField]: randomField.value,
    };
    return;
  }

  const workoutField = event.target.closest("[data-custom-workout-field]");
  if (workoutField) {
    customWorkoutDraft = {
      ...customWorkoutDraft,
      [workoutField.dataset.customWorkoutField]: workoutField.value,
    };
    return;
  }

  const exerciseField = event.target.closest("[data-custom-exercise-field]");
  if (!exerciseField) return;
  const index = Number(exerciseField.dataset.index);
  const exerciseFieldName = exerciseField.dataset.customExerciseField;
  customWorkoutDraft = {
    ...customWorkoutDraft,
    exercises: customWorkoutDraft.exercises.map((exercise, exerciseIndex) => (
      exerciseIndex === index ? { ...exercise, [exerciseFieldName]: exerciseField.value } : exercise
    )),
  };
}

async function handleImportFileChange(event) {
  const input = event.target.closest("[data-import-file]");
  if (!input || !input.files || !input.files.length) return;
  const file = input.files[0];
  const runId = importAnalysisRun + 1;
  importAnalysisRun = runId;
  characterCreatorError = "";
  const importMessage = isImageFile(file)
    ? `Loading OCR engine for ${file.name}...`
    : isPdfFile(file)
      ? `Reading PDF text from ${file.name}...`
      : `Analyzing ${file.name}...`;
  updateImportProgress(importMessage);

  try {
    const analysis = await analyzeWorkoutFile(file);
    if (runId !== importAnalysisRun) return;
    if (analysis.error) {
      characterCreatorError = analysis.error;
      draftCharacter = { ...draftCharacter, workoutSetup: "import", importAnalysis: "" };
      render();
      return;
    }
    characterCreatorError = "";
    draftCharacter = {
      ...draftCharacter,
      workoutSetup: "import",
      importText: JSON.stringify(analysis.workouts, null, 2),
      importAnalysis: analysis.report,
    };
    render();
  } catch {
    if (runId !== importAnalysisRun) return;
    characterCreatorError = "The file could not be analyzed. Try a clearer screenshot, text-based PDF, CSV, JSON, TXT, or paste the workout text.";
    draftCharacter = { ...draftCharacter, workoutSetup: "import", importAnalysis: "" };
    render();
  }
}

function handleSubmit(event) {
  if (!event.target.matches("[data-character-form]")) return;
  event.preventDefault();
  createCharacterFromDraft();
}

function render() {
  if (!titleStarted) {
    app.innerHTML = renderTitleScreen();
    return;
  }
  app.innerHTML = state.character ? renderDashboard() : renderCharacterCreator();
}

app.addEventListener("click", handleAction);
app.addEventListener("input", handleCharacterInput);
app.addEventListener("change", handleCharacterInput);
app.addEventListener("input", handleCustomWorkoutInput);
app.addEventListener("change", handleCustomWorkoutInput);
app.addEventListener("change", handleImportFileChange);
app.addEventListener("submit", handleSubmit);

const validationErrors = validateWorkoutData();
if (validationErrors.length) {
  console.error("Workout data validation failed:", validationErrors);
}

if (typeof window !== "undefined") {
  window.Day1Randomizer = { generateWorkout, generateWeek, completeWorkout };
  window.generateWorkout = generateWorkout;
  window.generateWeek = generateWeek;
  window.completeWorkout = completeWorkout;
}

render();

if (typeof window !== "undefined" && typeof window.setInterval === "function") {
  window.setInterval(() => {
    updateCalendarClock();
    const todayRouteId = getTodayRouteId();
    if (todayRouteId !== lastTodayRouteId) {
      lastTodayRouteId = todayRouteId;
      render();
    }
  }, 1000);
}

if ("serviceWorker" in navigator && window.location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch((error) => {
      console.warn("Day 1 app install cache could not start:", error);
    });
  });
}
