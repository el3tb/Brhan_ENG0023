/*
 * BURHAN — ENG0023 Engineering Drawings and Model
 * Question bank rebuilt from the four supplied course PDFs only.
 * Each question includes a chapter/topic label and bilingual explanation.
 */
'use strict';

const questionsDB = { 1: [], 2: [], 3: [], 4: [] };
let questionId = 0;
function add(ch, topic, question, options, correct, en, ar, image = null, type = 'mcq') {
  if (!questionsDB[ch] || !Array.isArray(options) || options.length < 2 || !Number.isInteger(correct) || correct < 0 || correct >= options.length) {
    throw new Error('Invalid question definition: ' + question);
  }
  questionsDB[ch].push({ id: ++questionId, chapter: ch, topic, type, question, options, correct, explanationEn: en, explanationAr: ar, image: null });
}
function addFact(ch, topic, term, definition, distractors, en, ar, image = null) {
  add(ch, topic, `According to the lecture, what is ${term}?`, [definition, ...distractors].slice(0,4), 0, en, ar, image);
}
function addTF(ch, topic, question, isTrue, en, ar, image = null) {
  add(ch, topic, question, ['True', 'False'], isTrue ? 0 : 1, en, ar, image, 'tf');
}
function addBlank(ch, topic, question, options, correct, en, ar, image = null) {
  add(ch, topic, question, options, correct, en, ar, image, 'blank');
}
function addMatching(ch, topic, question, pairs, en, ar, image = null) {
  const options = pairs.map(pair => pair[1]);
  if (options.length < 3 || new Set(options).size !== options.length) throw new Error('Invalid matching set: ' + question);
  questionsDB[ch].push({ id: ++questionId, chapter: ch, topic, type: 'matching', question, options, correct: null, pairs, explanationEn: en, explanationAr: ar, image: null });
}
function addDrawing(ch, topic, question, image, en, ar, sourcePage = null) {
  // The online exam uses auto-graded MCQ/TF/fill/matching items only.
  // Increment once to preserve the original IDs used by the curation map, but do not store the paper task or its answer-bearing source image.
  questionId++;
}

// -----------------------------------------------------------------------------
// CHAPTER 1 — Introduction to Engineering Drawing & Tools (course PDF only)
// Topics: definition, graphics/word language, drawing types, design process,
// applications, standards, sheet sizes, paper elements, scales and instruments.
// -----------------------------------------------------------------------------
add(1,'Introduction','According to Chapter 1, a drawing is:',[
'A graphic representation of a real thing, an idea, or a proposed design',
'A list of written instructions without a graphic representation',
'A finished manufactured object',
'A numerical table only'
],0,'The lecture defines drawing as a graphic representation of a real thing, an idea, or a proposed design for later manufacturing or construction.','تعرف المحاضرة الرسم بأنه تمثيل رسومي لشيء حقيقي أو فكرة أو تصميم مقترح بغرض التصنيع أو الإنشاء لاحقًا.');
add(1,'Introduction','The lecture says drawing is also known as:',[
'Drafting','Shading','Sculpting','Printing'
],0,'The slide states that this graphics language is known as “drawing” or “drafting”.','تذكر السلايد أن هذه اللغة الرسومية تُعرف باسم Drawing أو Drafting.');
add(1,'Introduction','Why is graphics language effective for technical communication?',[
'Words alone may not describe size, shape and features completely and concisely',
'It removes the need to show shape',
'It communicates emotions only',
'It is used only to decorate a page'
],0,'The lecture demonstrates that word descriptions are inadequate for communicating an object’s size, shape and features completely and concisely.','توضح المحاضرة أن الوصف بالكلمات وحده لا يكفي لشرح حجم الجسم وشكله وخصائصه بصورة كاملة وموجزة.');
add(1,'Introduction','Which items are listed as basic elements of engineering drawing as a graphics language?',[
'Line types, projection methods and geometric constructions',
'Colour, texture and price',
'Music, symbols and paragraphs',
'Volume, mass and temperature'
],0,'The diagram lists line types, projection methods and geometric constructions under graphics language.','يسرد المخطط أنواع الخطوط وطرق الإسقاط والإنشاءات الهندسية ضمن اللغة الرسومية.');
add(1,'Introduction','What does graphics language mainly describe?',[
'The shape of an object',
'The object’s price only',
'The name of the person who owns it',
'The manufacturing date only'
],0,'The lecture says graphics language describes the shape mainly.','تذكر المحاضرة أن اللغة الرسومية تصف شكل الجسم أساسًا.');
add(1,'Introduction','What does word language describe in an engineering drawing?',[
'Size, location and specifications of the object',
'Shape only',
'Only the colour of an object',
'Only the visible outline'
],0,'The lecture assigns size, location and specification to word language.','تخصص المحاضرة الحجم والموقع والمواصفات للغة المكتوبة.');
add(1,'Drawing methods','In freehand drawing, lines are sketched using:',[
'Pencils and erasers without other drawing instruments',
'A compass and a T-square only',
'CAD software only',
'A printer only'
],0,'The freehand drawing slide says lines are sketched without instruments other than pencils and erasers.','تذكر سلايد الرسم الحر أن الخطوط تُرسم دون أدوات أخرى غير الأقلام والممحاة.');
add(1,'Drawing methods','Instrument drawing is described as a method that uses instruments to draw:',[
'Straight lines, circles and curves accurately',
'Only decorative patterns',
'Only handwritten paragraphs',
'Only shaded photographs'
],0,'The lecture says drawing instruments are used to draw straight lines, circles and curves concisely and accurately.','تذكر المحاضرة أن أدوات الرسم تُستخدم لرسم الخطوط المستقيمة والدوائر والمنحنيات بدقة واختصار.');
add(1,'Drawing methods','Which software examples are named on the computer drawing slide?',[
'AutoCAD, SolidWorks and CATIA',
'Word, PowerPoint and Excel',
'Photoshop, Premiere and Audition',
'Chrome, Firefox and Edge'
],0,'The lecture lists AutoCAD, SolidWorks and CATIA as examples of commercial drawing software.','تذكر المحاضرة AutoCAD وSolidWorks وCATIA أمثلةً لبرامج الرسم التجارية.');
add(1,'Drawing methods','Compared with a sketch, an engineering drawing is expected to have:',[
'An accurate scale and careful preparation using drawing tools',
'An approximate scale only',
'No dimensions',
'No drawing instruments under any circumstances'
],0,'The lecture contrasts sketches, whose scale is approximate, with engineering drawings prepared carefully using tools and an accurate scale.','تقارن المحاضرة بين الرسم التخطيطي ذي المقياس التقريبي والرسم الهندسي الذي يُعد بأدوات ومقياس دقيقين.');
add(1,'Drawing types','According to the lecture, technical drawing should:',[
'Communicate the same message to every user or reader',
'Be interpreted differently by every reader',
'Communicate emotion rather than technical details',
'Avoid using standard representations'
],0,'The lecture states that technical drawing must communicate the same message to every reader.','تذكر المحاضرة أن الرسم الفني يجب أن ينقل الرسالة نفسها إلى كل قارئ.');
add(1,'Drawing types','How does the lecture contrast artistic drawing with technical drawing?',[
'Artistic drawing may be interpreted differently by different viewers',
'Artistic drawing always has a fully accurate scale',
'Technical drawing is interpreted differently by everyone',
'Both must communicate exactly the same message in every case'
],0,'The slide says artistic drawing is usually interpreted differently by everyone who sees it.','تذكر السلايد أن الرسم الفني غالبًا ما يفسره المشاهدون بطرق مختلفة.');
add(1,'Drawing types','Which statement about a sketch matches the lecture?',[
'It is made without drawing tools other than pencil and paper, and its scale is approximate',
'It must always use CAD',
'It must have an exact scale',
'It is made only with a compass and set squares'
],0,'The lecture defines a sketch as a drawing made without drawing tools, using pencil and paper, with an approximate scale.','تعرف المحاضرة الرسم التخطيطي بأنه رسم بالقلم والورق دون أدوات رسم، ويكون مقياسه تقريبيًا.');
add(1,'Design process','According to the design-process section, what is one purpose of visualization?',[
'To mentally picture things that do not yet exist',
'To replace all communication',
'To calculate paper weight',
'To select a pencil grade only'
],0,'The slide describes visualization as the ability to mentally picture things that do not exist.','تصف السلايد التصور بأنه القدرة على تخيل أشياء غير موجودة بعد.');
add(1,'Design process','What does the design-process slide say detail drawings and data provide?',[
'Precise information for production or implementation',
'Only an artistic interpretation',
'Only a rough idea without dimensions',
'Only a list of tools'
],0,'The design-process section connects detail drawings and data with recording precise information for production or implementation.','يربط المخطط الرسومات التفصيلية والبيانات بتسجيل المعلومات الدقيقة للإنتاج أو التنفيذ.');
add(1,'Design process','Why should a design solution be communicated to others without ambiguity?',[
'To communicate the design solution clearly',
'To make the drawing more decorative',
'To avoid recording the solution',
'To make dimensions approximate'
],0,'The design-process section says the design solution should be communicated to others without ambiguity.','يذكر مخطط عملية التصميم أن الحل التصميمي ينبغي أن يُنقل للآخرين دون لبس.');
add(1,'Engineering applications','According to Chapter 1, engineers use technical means to:',[
'Solve problems and design products, systems, devices and structures',
'Produce artistic images only',
'Write stories only',
'Make drawings without a purpose'
],0,'The lecture defines engineers as people who use technical means to solve problems and design products, systems, devices and structures.','تعرف المحاضرة المهندسين بأنهم يستخدمون وسائل تقنية لحل المشكلات وتصميم المنتجات والأنظمة والأجهزة والمنشآت.');
add(1,'Drawing standards','Drawing standards are:',[
'Sets of rules that govern how technical drawings are represented',
'Optional colour palettes only',
'Lists of drawing prices',
'Rules for artistic shading only'
],0,'The standards slide defines drawing standards as rules governing representation in technical drawings.','تعرف سلايد المعايير معايير الرسم بأنها قواعد تنظم طريقة تمثيل الرسومات الفنية.');
add(1,'Drawing standards','Why are drawing standards used?',[
'So drawings convey the same meaning to everyone who reads them',
'So every reader interprets a drawing differently',
'To remove dimensions from drawings',
'To replace all drawing tools'
],0,'The lecture says standards help drawings convey the same meaning to all readers.','تذكر المحاضرة أن المعايير تساعد الرسومات على نقل المعنى نفسه لجميع القراء.');
add(1,'Drawing standards','Which code is paired with the United States in the Chapter 1 standards table?',[
'ANSI','JIS','BS','DIN'
],0,'The table pairs ANSI with the United States.','يربط الجدول الرمز ANSI بالولايات المتحدة.');
add(1,'Drawing standards','Which code is paired with Japan in the standards table?',[
'JIS','AS','BS','ISO'
],0,'The table pairs JIS with Japan.','يربط الجدول الرمز JIS باليابان.');
add(1,'Drawing standards','Which code is paired with the United Kingdom in the standards table?',[
'BS','ANSI','DIN','JIS'
],0,'The table pairs BS with the United Kingdom.','يربط الجدول الرمز BS بالمملكة المتحدة.');
add(1,'Drawing standards','Which code is paired with Australia in the standards table?',[
'AS','DIN','BS','JIS'
],0,'The table pairs AS with Australia.','يربط الجدول الرمز AS بأستراليا.');
add(1,'Drawing standards','Which code is paired with Germany in the standards table?',[
'DIN','ANSI','ISO','AS'
],0,'The table pairs DIN with Germany.','يربط الجدول الرمز DIN بألمانيا.');
add(1,'Drawing standards','Which standard is identified as international in the Chapter 1 table?',[
'ISO','JIS','BS','AS'
],0,'The standards table lists ISO as the international standard.','يسرد جدول المعايير ISO بوصفه المعيار الدولي.');
add(1,'Drawing standards','What does ANSI stand for in the course slide?',[
'American National Standard Institute','Australian National Standard Institute','Asian National Standards Index','American Numbering System for Instruments'
],0,'The Chapter 1 table expands ANSI as American National Standard Institute.','يوسع جدول الفصل الأول ANSI إلى American National Standard Institute.');
add(1,'Drawing standards','What does JIS stand for in the course slide?',[
'Japanese Industrial Standard','Joint International System','Japan Institute of Sketching','Japanese Instrument Scale'
],0,'The table expands JIS as Japanese Industrial Standard.','يوسع الجدول JIS إلى Japanese Industrial Standard.');
add(1,'Drawing standards','What does BS stand for in the course slide?',[
'British Standard','Basic Scale','Board Sheet','Building System'
],0,'The table expands BS as British Standard.','يوسع الجدول BS إلى British Standard.');
add(1,'Drawing sheets','What are the dimensions of an A4 sheet in the lecture?',[
'210 × 297 mm','297 × 420 mm','420 × 594 mm','594 × 841 mm'
],0,'The slide lists A4 as 210 × 297 millimetres.','تذكر السلايد أن أبعاد A4 هي 210 × 297 مليمترًا.', 'assets/drawing-sheet.svg');
add(1,'Drawing sheets','What are the dimensions of an A3 sheet in the lecture?',[
'297 × 420 mm','210 × 297 mm','420 × 594 mm','841 × 1189 mm'
],0,'The slide lists A3 as 297 × 420 millimetres.','تذكر السلايد أن أبعاد A3 هي 297 × 420 مليمترًا.', 'assets/drawing-sheet.svg');
add(1,'Drawing sheets','Which standard sheet is listed as 420 × 594 mm?',[
'A2','A3','A1','A0'
],0,'The standard sheet table lists A2 as 420 × 594 millimetres.','يسرد جدول أحجام الأوراق القياسية A2 بأبعاد 420 × 594 مليمترًا.', 'assets/drawing-sheet.svg');
add(1,'Drawing sheets','Which standard sheet is listed as 594 × 841 mm?',[
'A1','A2','A3','A4'
],0,'The standard sheet table lists A1 as 594 × 841 millimetres.','يسرد جدول أحجام الأوراق القياسية A1 بأبعاد 594 × 841 مليمترًا.', 'assets/drawing-sheet.svg');
add(1,'Drawing sheets','Which standard sheet is listed as 841 × 1189 mm?',[
'A0','A1','A2','A4'
],0,'The standard sheet table lists A0 as 841 × 1189 millimetres.','يسرد جدول أحجام الأوراق القياسية A0 بأبعاد 841 × 1189 مليمترًا.', 'assets/drawing-sheet.svg');
add(1,'Drawing sheets','Which drawing-sheet element is described as the heaviest peripheral line enclosing all drawings?',[
'Border line','Guide line','Dimension line','Center line'
],0,'The lecture defines the border line as the heaviest peripheral line enclosing the drawings.','تعرف المحاضرة خط الإطار بأنه أثقل خط محيطي يحيط بالرسومات.', 'assets/drawing-sheet.svg');
add(1,'Drawing sheets','Which item in the title block is explicitly listed in the lecture?',[
'Drawn by','Favourite colour','Student’s hobbies','Paper price'
],0,'The title block contains details such as drawn by, checked by, date, scale, drawing title, drawing number and company name.','تتضمن خانة العنوان معلومات مثل اسم الرسام والمراجع والتاريخ والمقياس وعنوان الرسم ورقمه واسم الشركة.', 'assets/drawing-sheet.svg');
add(1,'Drawing sheets','What is the function of a guide line on the drawing paper?',[
'To guide the height of letters','To show a cutting plane','To represent hidden edges','To show the scale ratio'
],0,'The lecture defines a guide line as the lightest line used to guide the height of alphabets.','تعرف المحاضرة خط الإرشاد بأنه أخف خط يُستخدم لتوجيه ارتفاع الحروف.', 'assets/drawing-sheet.svg');
add(1,'Drawing scales','A scale of 1:1 represents:',[
'Full size','Enlargement','Reduction','An approximate sketch only'
],0,'The lecture labels SCALE 1:1 as full size.','تسمي المحاضرة المقياس 1:1 مقياس الحجم الكامل.', 'assets/scale.svg');
add(1,'Drawing scales','According to the scale slide, X:1 where X > 1 represents:',[
'Enlargement','Reduction','Full size','A paper size'
],0,'The slide labels SCALE X:1 (X > 1) as an enlargement scale.','تسمي السلايد المقياس X:1 عندما تكون X أكبر من 1 مقياس تكبير.', 'assets/scale.svg');
add(1,'Drawing scales','According to the scale slide, 1:X where X > 1 represents:',[
'Reduction','Enlargement','Full size','No scale'
],0,'The slide labels SCALE 1:X (X > 1) as a reduction scale.','تسمي السلايد المقياس 1:X عندما تكون X أكبر من 1 مقياس تصغير.', 'assets/scale.svg');
add(1,'Drawing scales','A drawn representation is half the actual size. Which scale notation matches the lecture’s reduction rule?',[
'1:2','2:1','1:1','2:2'
],0,'A drawing smaller than the actual object uses a reduction scale; 1:2 is a reduction ratio.','يستخدم الرسم الأصغر من الجسم الحقيقي مقياس تصغير؛ والنسبة 1:2 مثال على ذلك.', 'assets/scale.svg');
add(1,'Drawing tools','Which pencil grades does the lecture recommend for thick lines?',[
'2H or HB','4H only','9H only','2B only'
],0,'The pencil slide says 2H or HB for thick lines.','تذكر سلايد الأقلام استخدام 2H أو HB للخطوط السميكة.');
add(1,'Drawing tools','Which pencil grade does the lecture recommend for thin lines?',[
'4H','2B','4B','HB only'
],0,'The pencil slide says 4H for thin lines.','تذكر سلايد الأقلام استخدام 4H للخطوط الرفيعة.');
add(1,'Drawing tools','In the pencil-grade scale shown, which side is labelled hardest?',[
'The H-grade side','The B-grade side','The centre of the scale only','Neither side'
],0,'The pencil scale in the lecture places the hardest grades toward the H end.','يضع مقياس الأقلام في المحاضرة الدرجات الأشد صلابة باتجاه طرف H.');
add(1,'Drawing tools','Which instrument is shown by name in the drawing-tools slide?',[
'T-square','Micrometer','Vernier caliper','Soldering iron'
],0,'The drawing-tools slide explicitly labels a T-square.','تسمي سلايد أدوات الرسم مسطرة T-square صراحةً.');
add(1,'Drawing tools','Which pair is explicitly shown in the drawing-tools slide?',[
'Triangles (set-squares) and T-square','Micrometer and thermometer','Wrench and pliers','Screwdriver and drill'
],0,'The slide labels T-square and triangles (set-square) as drawing tools.','تسمي السلايد مسطرة T-square والمثلثات (Set-Squares) ضمن أدوات الرسم.');
add(1,'Drawing tools','Which instrument is shown for drawing circles?',[
'Compass','T-square','Adhesive tape','Divider only'
],0,'The lecture includes a compass among the drawing instruments and describes how to prepare and use it.','تدرج المحاضرة الفرجار ضمن أدوات الرسم وتشرح كيفية تجهيزه واستخدامه.');
add(1,'Drawing tools','What should be done to the compass lead before drawing, according to the slide?',[
'Sharpen it with sandpaper','Soak it in water','Cover it with tape','Remove the lead'
],0,'The compass-preparation slide says to sharpen the lead with sandpaper.','تذكر سلايد تجهيز الفرجار سنّ القلم باستخدام ورق الصنفرة.');
add(1,'Drawing tools','When preparing the compass, how should the needle and lead tips be adjusted?',[
'The needle should extend slightly more than the lead','The lead should extend far beyond the needle','Both tips must be removed','The tips must never touch the paper'
],0,'The lecture says the needle should extend slightly more than the lead.','تذكر المحاضرة أن يمتد سن الإبرة قليلًا أكثر من سن القلم.');
add(1,'Drawing tools','How does the lecture instruct students to complete a circle with a compass?',[
'Revolve the handle clockwise','Move the compass in a straight line','Rotate the paper only','Lift the needle continuously'
],0,'The slide says to complete the circle by revolving the handle clockwise.','تذكر السلايد إكمال الدائرة بتدوير مقبض الفرجار باتجاه عقارب الساعة.');
add(1,'Drawing tools','Which of these is also labelled in the drawing-tools slides?',[
'Protractor','Thermometer','Hacksaw','Soldering iron'
],0,'A protractor is explicitly labelled in the drawing-tools slide.','تظهر المنقلة (Protractor) صراحة في سلايد أدوات الرسم.');
add(1,'Drawing tools','Which other tools are shown in the drawing-tools slides?',[
'Divider and circle template','Caliper and micrometer only','Hammer and chisel','Welding mask and torch'
],0,'The slides show a divider and a circle template among the drawing tools.','تعرض السلايدات الفرجار الفاصل وقالب الدوائر ضمن أدوات الرسم.');
add(1,'Drawing tools','Which statement best matches the lecture’s message about using drawing instruments?',[
'Knowledge, skill and practice help produce accurate drawings',
'Instruments guarantee accuracy without practice',
'Only expensive instruments matter',
'Instruments are not needed for technical drawings'
],0,'The lecture emphasizes knowledge, skill and practice in using a variety of instruments.','تؤكد المحاضرة أهمية المعرفة والمهارة والتدريب عند استخدام أدوات الرسم المختلفة.');
add(1,'Visual question','Which drawing-sheet component contains the drawing title, scale, author and checking details?',[
'Title block','Border line','Guide line','Scale line'
],0,'The title block is the box containing information such as the drawing title, scale and author.','خانة العنوان هي الصندوق الذي يحتوي على معلومات مثل عنوان الرسم والمقياس واسم من أعدّه.','assets/drawing-sheet.svg');
add(1,'Visual question','According to the lecture, which scale ratio represents enlargement?',[
'2:1','1:2','1:1','A4'
],0,'The lecture’s rule X:1 where X is greater than 1 represents enlargement.','قاعدة المحاضرة X:1 عندما تكون X أكبر من 1 تمثل التكبير.','assets/scale.svg');
add(1,'Visual question','Which is the largest sheet in the ISO A0–A4 sequence listed in the lecture?',[
'A0','A1','A3','A4'
],0,'A0 is the largest standard sheet listed in the lecture table.','A0 أكبر ورقة قياسية ضمن الأحجام المذكورة في جدول المحاضرة.','assets/drawing-sheet.svg');

// Add additional source-supported standard-code and tool recall questions.
const standards = [
 ['ANSI','American National Standard Institute','United States'],
 ['JIS','Japanese Industrial Standard','Japan'],
 ['BS','British Standard','United Kingdom'],
 ['AS','Australian Standard','Australia'],
 ['DIN','Deutsches Institut für Normung','Germany'],
 ['ISO','International Standards Organization','International']
];
standards.forEach(([code, full, country])=>{
 add(1,'Drawing standards',`Which full name is paired with ${code} in the Chapter 1 standards table?`,[full,...standards.filter(x=>x[0]!==code).slice(0,3).map(x=>x[1])],0,`${code} is paired with “${full}” in the supplied standards table.`,`يربط جدول المعايير الرمز ${code} بالاسم “${full}”.`);
 add(1,'Drawing standards',`Which code is paired with ${country} in the Chapter 1 table?`,[code,...standards.filter(x=>x[0]!==code).slice(0,3).map(x=>x[0])],0,`The supplied table pairs ${country} with ${code}.`,`يربط الجدول المرفق ${country} بالرمز ${code}.`);
});

// -----------------------------------------------------------------------------
// CHAPTER 2 — Line Types
// -----------------------------------------------------------------------------
add(2,'Visible/object lines','Which line represents features that can be seen in the current view?',[
'Visible/object line','Hidden line','Phantom line','Cutting-plane line'
],0,'Visible/object lines represent features that can be seen in the current view.','تمثل خطوط الأجسام الظاهرة الخصائص التي يمكن رؤيتها في المنظور الحالي.','assets/line-types.svg');
add(2,'Visible/object lines','How are visible/object lines described in the lecture?',[
'Dark and thick','Light and short dashed','Thin with alternating long and short dashes','Thin with pairs of short dashes'
],0,'The lecture describes visible/object lines as dark, thick lines outlining visible features.','تصف المحاضرة خطوط الأجسام الظاهرة بأنها داكنة وسميكة وتحدد الملامح المرئية.','assets/line-types.svg');
add(2,'Hidden lines','What do hidden lines represent?',[
'Features that cannot be seen in the current view','Visible outlines only','The centre of a circle only','A note connected to a feature'
],0,'Hidden lines show outlines of features that cannot be seen in the particular view.','تُظهر الخطوط المخفية ملامح الخصائص التي لا تُرى في المنظور المحدد.','assets/line-types.svg');
add(2,'Hidden lines','Which description matches hidden lines in the lecture?',[
'Light, narrow, short dashed lines','Dark continuous thick lines','Thin lines with arrowheads','Thick wavy lines'
],0,'The lecture describes hidden lines as light, narrow, short and dashed.','تصف المحاضرة الخطوط المخفية بأنها خفيفة ورفيعة وقصيرة ومتقطعة.','assets/line-types.svg');
add(2,'Hidden lines','What rule does the lecture give for the start and end of hidden lines?',[
'A dash should start and end the line except at a parallel visible or hidden line','A hidden line must always start with a gap','Every hidden line must end with an arrow','Hidden lines should be drawn as circles'
],0,'The slide says a dash should start and end hidden lines except where the line begins or terminates at a parallel visible or hidden line.','تذكر السلايد أن يبدأ الخط المخفي وينتهي بشرطة، باستثناء موضع بدايته أو نهايته عند خط ظاهر أو مخفي موازٍ.');
add(2,'Hidden lines','What does the lecture say about hidden-line dashes at corners?',[
'The dashes should meet in the corners','They must stop far from every corner','They should form circles','They should be replaced with arrows'
],0,'The lecture states that hidden-line dashes should meet in the corners.','تذكر المحاضرة أن شرطات الخطوط المخفية ينبغي أن تلتقي عند الزوايا.');
add(2,'Section lines','What do section lines (hatching) indicate?',[
'Surfaces cut by a cutting plane in a section view','The outline of a visible object only','The axis of a circle','A movable part’s alternate position'
],0,'Section lines represent surfaces of an object cut by a cutting plane.','تمثل خطوط التهشير الأسطح التي يقطعها مستوى القطع في الجسم.','assets/line-types.svg');
add(2,'Section lines','At what angle does the lecture say a section/hatching line is drawn?',[
'45°','30°','60°','90°'
],0,'The slide says a thin section line is drawn at 45 degrees.','تذكر السلايد أن خط التهشير الرفيع يُرسم بزاوية 45 درجة.','assets/line-types.svg');
add(2,'Center lines','What are center lines used to mark?',[
'Centres of circles and axes of symmetrical parts','Only hidden edges','Only dimensions','The direction of a section view'
],0,'Center lines mark circle centres and axes of symmetrical parts such as cylinders and bolts.','تحدد خطوط المركز مراكز الدوائر ومحاور الأجزاء المتماثلة مثل الأسطوانات والمسامير.','assets/line-types.svg');
add(2,'Center lines','Which pattern describes a center line in the lecture?',[
'Alternating long and short dashes','Only short equal dashes','A continuous thick line','A thick wavy line'
],0,'The lecture describes center lines as thin lines made of alternating long and short dashes.','تصف المحاضرة خطوط المركز بأنها رفيعة وتتكون من شرطات طويلة وقصيرة متناوبة.','assets/line-types.svg');
add(2,'Center lines','How should center lines extend in relation to the object or feature?',[
'Continue a short distance beyond it','Stop exactly at the outline in all cases','Cross the entire sheet','End with arrowheads'
],0,'The slide says center lines should continue a short distance beyond the object or feature.','تذكر السلايد أن يمتد خط المركز مسافة قصيرة بعد الجسم أو الخاصية.');
add(2,'Dimension lines','What do dimension lines indicate?',[
'The sizes of features on a drawing','The alternate position of a moving part','The surface cut by a plane','Only symmetry'
],0,'Dimension lines indicate sizes of features on a drawing.','تشير خطوط الأبعاد إلى أحجام الخصائص في الرسم.','assets/line-types.svg');
add(2,'Dimension lines','What is shown at the ends of dimension lines?',[
'Arrowheads','Pairs of short dashes','Wavy ends','Circular markers only'
],0,'The lecture describes dimension lines as thin lines with arrowheads at their ends.','تصف المحاضرة خطوط الأبعاد بأنها خطوط رفيعة ذات رؤوس أسهم عند الأطراف.','assets/line-types.svg');
add(2,'Dimension lines','Why is a dimension line interrupted along its length in the lecture?',[
'To make room for the dimension number','To show a hidden edge','To mark the centre of a circle','To show a movable part'
],0,'The dimension line is broken along its length to make room for the dimension number.','يُترك فراغ في خط البعد لإتاحة مساحة لرقم البعد.');
add(2,'Extension lines','What is the main function of extension lines?',[
'To determine the extent of a dimension','To show hidden features','To mark the centre of a circle','To represent a cut surface'
],0,'Extension lines determine the extent of a dimension.','تحدد خطوط الامتداد مدى البعد.','assets/line-types.svg');
add(2,'Extension lines','According to the lecture, how far should an extension line begin from the object?',[
'1.5 mm','3 mm','6 mm','10 mm'
],0,'The slide says extension lines begin 1.5 mm away from the object.','تذكر السلايد أن يبدأ خط الامتداد على بعد 1.5 مليمتر من الجسم.');
add(2,'Extension lines','How far should an extension line extend beyond the last dimension according to the slide?',[
'3 mm','1.5 mm','6 mm','12 mm'
],0,'The lecture says the extension line should reach 3 mm beyond the last dimension.','تذكر المحاضرة أن يمتد خط الامتداد 3 مليمترات بعد آخر بُعد.');
add(2,'Extension lines','What does the lecture say about dimension lines and crossing?',[
'Dimension lines should not be crossed','Dimension lines must cross every extension line twice','Dimension lines should be wavy','Dimension lines should always be parallel to leader lines'
],0,'The extension-line slide states that dimension lines should not be crossed.','تذكر سلايد خطوط الامتداد أنه ينبغي عدم تقاطع خطوط الأبعاد.');
add(2,'Leader lines','What do leader lines connect?',[
'A specific note to a feature on a drawing','Two hidden edges','The centre of a circle to the border','Two section views only'
],0,'Leader lines connect a note, dimension, symbol or item/part number to a feature.','تصل الخطوط الإرشادية ملاحظة أو بُعدًا أو رمزًا أو رقم عنصر/قطعة بخاصية في الرسم.','assets/line-types.svg');
add(2,'Leader lines','Which lines should not be parallel to leader lines according to the lecture?',[
'Dimension, extension and section lines','Visible and hidden lines only','Center and symmetry lines only','Border and guide lines only'
],0,'The lecture says dimension lines, extension lines and section lines should not be parallel to leader lines.','تذكر المحاضرة أن خطوط الأبعاد والامتداد والقطع لا ينبغي أن تكون موازية للخطوط الإرشادية.');
add(2,'Cutting-plane lines','What does a cutting-plane line indicate?',[
'Where an object is mentally cut to show interior detail','Where a dimension number is written','The centre of a round object','The position of a moving part'
],0,'A cutting-plane line indicates where a section is mentally cut to reveal interior detail.','يشير خط مستوى القطع إلى الموضع الذي يُتصور قطع الجسم عنده لإظهار التفاصيل الداخلية.','assets/line-types.svg');
add(2,'Cutting-plane lines','How thick are cutting-plane lines in the supplied lecture?',[
'0.6 mm','0.2 mm','1.5 mm','3 mm'
],0,'The slide specifies thick cutting-plane lines of 0.6 mm.','تحدد السلايد سماكة خط مستوى القطع بـ 0.6 مليمتر.');
add(2,'Cutting-plane lines','How far do cutting-plane lines extend past the edge of the object according to the slide?',[
'6 mm','1.5 mm','3 mm','12 mm'
],0,'The lecture states that cutting-plane lines extend 6 mm beyond the object edge.','تذكر المحاضرة أن يمتد خط مستوى القطع 6 مليمترات بعد حافة الجسم.');
add(2,'Cutting-plane lines','What do arrows on cutting-plane lines indicate?',[
'The direction of the line of sight for the section view','The object’s scale','The centre of the object','The dimension value'
],0,'The arrows represent the direction of the line of sight for the section view and point away from the sectioned view.','تمثل الأسهم اتجاه خط النظر للمنظور المقطعي وتتجه بعيدًا عن المنظور المقطوع.');
add(2,'Break lines','Why are break lines used?',[
'To shorten an object in a drawing or reveal interior features','To label dimensions','To mark circle centres','To show a note leader'
],0,'The lecture says break lines show where an object is broken to save drawing space or reveal interior features.','توضح المحاضرة أن خطوط الكسر تُظهر موضع اختصار الجسم لتوفير مساحة الرسم أو كشف خصائص داخلية.','assets/line-types.svg');
add(2,'Break lines','How is a short break line described?',[
'A thick wavy line','A thin continuous line with arrows','A long dash followed by two short dashes','A thin line at 45 degrees'
],0,'The lecture describes short break lines as thick wavy lines.','تصف المحاضرة خطوط الكسر القصيرة بأنها خطوط متموجة سميكة.','assets/line-types.svg');
add(2,'Break lines','What do long break lines indicate?',[
'The centre section of an object has been removed to allow a smaller drawing','The centre of a circle','The surface cut by hatching','The alternate location of a moving part'
],0,'Long break lines indicate that the centre section of an object has been removed so it can be drawn on a smaller sheet.','تشير خطوط الكسر الطويلة إلى حذف الجزء الأوسط من الجسم ليمكن رسمه على ورقة أصغر.');
add(2,'Break lines','Which description is given for cylindrical break lines?',[
'Thin lines used to depict spherical parts broken in half or to shorten the object','Thick wavy lines only','Long and short alternating dashes','Arrowed cutting-plane lines'
],0,'The slide describes cylindrical break lines as thin lines used to depict spherical parts broken in half or to shorten an object.','تصف السلايد خطوط الكسر الأسطوانية بأنها خطوط رفيعة لتصوير الأجزاء الكروية وكأنها مقسومة أو لاختصار الجسم.');
add(2,'Phantom lines','What is one use of phantom lines?',[
'To depict the alternate location of moving parts','To show visible outlines only','To represent cut material','To show dimension length'
],0,'The lecture lists alternate locations of moving parts as a phantom-line function.','تذكر المحاضرة تمثيل المواضع البديلة للأجزاء المتحركة إحدى وظائف الخطوط الوهمية.','assets/line-types.svg');
add(2,'Phantom lines','Which other uses of phantom lines are listed?',[
'Show relationships between fitting elements and repetitive detail','Show only hidden edges','Show only dimensions','Show only a section surface'
],0,'The lecture lists relationships between elements that fit together and repetitive detail as other phantom-line functions.','تذكر المحاضرة إظهار العلاقة بين العناصر المتوافقة والتفاصيل المتكررة ضمن وظائف الخطوط الوهمية.');
add(2,'Phantom lines','How are phantom lines described in the lecture?',[
'Thin lines with long dashes alternating with pairs of short dashes','Thick continuous lines','Short wavy lines','Only 45-degree hatching'
],0,'The lecture describes phantom lines as thin lines made of long dashes alternating with pairs of small dashes.','تصف المحاضرة الخطوط الوهمية بأنها رفيعة وتتكون من شرطات طويلة تتناوب مع أزواج من الشرطات القصيرة.','assets/line-types.svg');
add(2,'Symmetry lines','What is the purpose of a symmetry line?',[
'To act as an axis of symmetry of a particular view','To show the direction of a section cut','To connect a note to a feature','To represent a visible outline'
],0,'The slide says symmetry lines act as the axis of symmetry of a particular view.','تذكر السلايد أن خط التماثل يعمل محورًا للتماثل في منظور معين.','assets/line-types.svg');
add(2,'Visual line identification','Which line type is conventionally represented by short, separated dashes?',[
'Hidden line','Visible/object line','Dimension line','Short break line'
],0,'Hidden lines are conventionally drawn as short, separated dashes in the supplied line-type definitions.','تُرسم الخطوط المخفية اصطلاحًا بشرطات قصيرة منفصلة وفق تعريفات أنواع الخطوط في المقرر.','assets/line-types.svg');
add(2,'Visual line identification','Which line type is conventionally represented by a thick wavy line?',[
'Short break line','Visible/object line','Centre line','Dimension line'
],0,'A short break line is conventionally represented by a thick wavy line.','يُمثّل خط الكسر القصير اصطلاحًا بخط متموج سميك.','assets/line-types.svg');
add(2,'Visual line identification','Which line type uses alternating long and short dashes?',[
'Centre line','Visible/object line','Hidden line','Section line'
],0,'Centre lines use alternating long and short dashes.','تستخدم خطوط المركز شرطات طويلة وقصيرة بالتناوب.','assets/line-types.svg');
add(2,'Visual line identification','Which line type is typically drawn with arrowheads at both ends to indicate a size?',[
'Dimension line','Hidden line','Phantom line','Short break line'
],0,'Dimension lines use arrowheads at both ends to indicate a measured size.','تستخدم خطوط الأبعاد رأسي سهم عند الطرفين لتحديد القياس.','assets/line-types.svg');
add(2,'Visual line identification','Which line type represents a cut surface using diagonal hatching?',[
'Section lines','Visible/object line','Centre line','Phantom line'
],0,'Section lines use diagonal hatching to represent surfaces cut by a section plane.','تستخدم خطوط المقاطع تهشيرًا مائلًا لتمثيل الأسطح التي يقطعها مستوى القطع.','assets/line-types.svg');

// Additional questions generated from the source's eleven line-type definitions.
const lineFacts = [
 ['Visible/object line','Visible features in the current view','Dark, thick continuous line'],
 ['Hidden line','Features not visible in the current view','Light, narrow, short dashes'],
 ['Section line','Surface cut by a cutting plane','Thin hatching at 45°'],
 ['Center line','Centre of circles and axes of symmetry','Thin alternating long and short dashes'],
 ['Dimension line','Size of a feature','Thin line with arrowheads'],
 ['Extension line','Extent of a dimension','Thin line extending from the object'],
 ['Leader line','Connect a note to a feature','Thin connecting line'],
 ['Cutting-plane line','Location of a section cut and viewing direction','Thick dashed line with arrows'],
 ['Break line','Shorten an object or reveal an interior feature','Wavy or long break representation'],
 ['Phantom line','Alternate position, fit relationship or repetitive detail','Long dashes alternating with pairs of short dashes'],
 ['Symmetry line','Axis of symmetry of a view','Symmetry axis line']
];
lineFacts.forEach(([name,use,appearance])=>{
 add(2,'Line-type review',`Which line type is used to ${use.charAt(0).toLowerCase()+use.slice(1)}?`,[name,...lineFacts.filter(x=>x[0]!==name).slice(0,3).map(x=>x[0])],0,`${name} is the line type described in the supplied lecture for this purpose.`,`نوع الخط الصحيح وفق المحاضرة لهذا الاستخدام هو ${name}.`);
 add(2,'Line-type review',`Which description matches ${name}?`,[use,...lineFacts.filter(x=>x[0]!==name).slice(0,3).map(x=>x[1])],0,`The lecture associates ${name.toLowerCase()} with this application: ${use}.`,`تربط المحاضرة ${name} بهذا الاستخدام: ${use}.`);
});

// -----------------------------------------------------------------------------
// CHAPTER 3 — 2-D Geometric Shapes, projections and views
// -----------------------------------------------------------------------------
add(3,'Engineering drawing','How does Chapter 3 define an engineering drawing?',[
'A technical drawing that shows shape, structure, dimensions, tolerances, accuracy and other requirements to manufacture a part',
'A decorative image without dimensions',
'A written paragraph only',
'A three-dimensional object itself'
],0,'The chapter defines engineering drawing as a technical drawing conveying the shape, structure, dimensions, tolerances, accuracy and other requirements needed to manufacture a part.','يعرف الفصل الرسم الهندسي بأنه رسم فني يوضح الشكل والبنية والأبعاد والتفاوتات والدقة والمتطلبات الأخرى اللازمة لتصنيع جزء.');
add(3,'2D vs 3D','A 2-D drawing lies on which axes according to the lecture?',[
'X and Y','X and Z only','Y and Z only','X, Y and Z'
],0,'The slide says a 2D drawing sits only in the X and Y axes.','تذكر السلايد أن الرسم ثنائي الأبعاد يقع على محوري X وY فقط.','assets/shapes-2d.svg');
add(3,'2D vs 3D','Which dimensions does a 2-D shape have, according to the lecture?',[
'Length and breadth, with no depth or thickness','Length, breadth and depth','Depth only','Height only'
],0,'The lecture describes 2D shapes as having length and breadth but no depth or thickness.','تصف المحاضرة الأشكال ثنائية الأبعاد بأن لها طولًا وعرضًا دون عمق أو سماكة.','assets/shapes-2d.svg');
add(3,'2D vs 3D','Which set of measurements can be found for 2-D shapes according to the lecture?',[
'Area and perimeter','Volume only','CSA, LSA and TSA only','Mass and density'
],0,'The 2D/3D comparison slide says area and perimeter can be found for 2D shapes.','تذكر سلايد المقارنة أن مساحة ومحيط الأشكال ثنائية الأبعاد يمكن حسابهما.','assets/shapes-2d.svg');
add(3,'2D vs 3D','Which description matches a 3-D shape in the lecture?',[
'It has three dimensions: depth/height, breadth and length','It has only X and Y axes','It is always flat','It has no depth'
],0,'The lecture says 3D shapes have depth or height, breadth and length.','تذكر المحاضرة أن الأشكال ثلاثية الأبعاد لها عمق أو ارتفاع وعرض وطول.');
add(3,'2D vs 3D','Which measurements does the lecture list for 3-D shapes?',[
'Volume, CSA, LSA or TSA','Area and perimeter only','Length only','Radius only'
],0,'The slide lists volume, curved surface area, lateral surface area and total surface area for 3D shapes.','تذكر السلايد الحجم والمساحة السطحية المنحنية والجانبية والكلية للأشكال ثلاثية الأبعاد.');
add(3,'Projection theory','What is the purpose of projection theory?',[
'To graphically represent a 3-D object on 2-D media','To turn a 2D shape into a paragraph','To remove the object’s shape','To calculate the weight of paper'
],0,'The projection-theory slide says its purpose is to represent a 3D object graphically on 2D media such as paper or a screen.','تذكر سلايد نظرية الإسقاط أن هدفها تمثيل جسم ثلاثي الأبعاد رسوميًا على وسيط ثنائي الأبعاد كالورق أو الشاشة.','assets/orthographic-views.svg');
add(3,'Projection theory','Which two variables form the basis of projection theory in the lecture?',[
'Line of sight and plane of projection','Scale and paper weight','Radius and diameter','Edge and vertex'
],0,'The slide lists line of sight and plane of projection as the two variables.','تسرد السلايد خط النظر ومستوى الإسقاط بوصفهما المتغيرين الأساسيين.','assets/orthographic-views.svg');
add(3,'Projection theory','What is the line of sight (LOS)?',[
'An imaginary ray between the observer’s eye and an object','A thick visible line on the object','The border of a drawing sheet','A dimension arrow'
],0,'The lecture defines LOS as an imaginary ray of light between the observer’s eye and the object.','تعرف المحاضرة خط النظر بأنه شعاع ضوء تخيلي بين عين المشاهد والجسم.','assets/orthographic-views.svg');
add(3,'Projection theory','What is the plane of projection?',[
'An imaginary flat plane onto which the image created by the line of sight is projected','A physical face of every object','A pencil grade','A scale ratio'
],0,'The lecture defines the plane of projection as an imaginary flat plane on which the image formed by LOS is projected.','تعرف المحاضرة مستوى الإسقاط بأنه سطح مستوٍ تخيلي يُسقط عليه الشكل الناتج عن خط النظر.','assets/orthographic-views.svg');
add(3,'Projection types','What are the two line-of-sight arrangements shown in the lecture?',[
'Parallel and convergent','Horizontal and vertical only','Visible and hidden','First angle and third angle only'
],0,'The slide says lines of sight can be parallel or converge.','تذكر السلايد أن خطوط النظر قد تكون متوازية أو متقاربة.','assets/orthographic-views.svg');
add(3,'Projection types','The parallel projection lines can be:',[
'Normal (orthogonal) or oblique to the plane of projection','Only curved','Only convergent','Only horizontal'
],0,'The lecture says parallel projection lines can be normal/orthogonal or oblique to the plane.','تذكر المحاضرة أن خطوط الإسقاط المتوازية قد تكون عمودية أو مائلة على مستوى الإسقاط.','assets/orthographic-views.svg');
add(3,'Projection types','Which projection does this course consider?',[
'Parallel and orthogonal projection (orthographic projection)','Convergent projection only','Oblique projection only','Perspective projection only'
],0,'The lecture explicitly says the course considers only parallel and orthogonal projection, i.e. orthographic projection.','تذكر المحاضرة صراحة أن المقرر يتناول الإسقاط المتوازي والعمودي، أي الإسقاط المتعامد.','assets/orthographic-views.svg');
add(3,'Views','What does a multiview drawing show?',[
'A 2-D view of an object','A virtual 3-D view only','A perspective image only','A physical model'
],0,'The lecture describes multiview drawing as showing a 2D view of an object.','تصف المحاضرة الرسم متعدد المساقط بأنه يعرض منظورًا ثنائي الأبعاد للجسم.','assets/orthographic-views.svg');
add(3,'Views','What does an axonometric drawing show?',[
'A virtual 3-D view of an object','Only one flat 2-D view','Only a circle’s radius','Only a title block'
],0,'The lecture says an axonometric drawing shows a virtual 3D view of an object.','تذكر المحاضرة أن الرسم الأكسونومتري يعرض منظورًا ثلاثي الأبعاد افتراضيًا للجسم.','assets/orthographic-views.svg');
add(3,'Views','According to the lecture, a view depends on:',[
'The relative orientation between an object and a plane','The paper brand only','The pencil grade only','The object’s price'
],0,'The slide says a view depends on the relative orientation between an object and a plane.','تذكر السلايد أن المنظور يعتمد على الاتجاه النسبي بين الجسم والمستوى.','assets/orthographic-views.svg');
add(3,'First/third angle','According to the supplied first/third-angle slide, first-angle projection is more common in:',[
'Europe','The USA only','Australia only','Japan only'
],0,'The projection slide states that first-angle projection is more common in Europe.','تذكر سلايد الإسقاط أن الإسقاط بالزاوية الأولى أكثر شيوعًا في أوروبا.','assets/projection-first-third.svg');
add(3,'First/third angle','According to the supplied first/third-angle slide, third-angle projection is widely used in:',[
'Both the USA and the UK','Europe only','Japan and Australia only','Africa only'
],0,'The projection slide states that third-angle projection is widely used in both the USA and the UK.','تذكر سلايد الإسقاط أن الإسقاط بالزاوية الثالثة مستخدم على نطاق واسع في الولايات المتحدة والمملكة المتحدة.','assets/projection-first-third.svg');
add(3,'Visual projection question','According to the first-angle projection convention taught in the course, which view is placed to the right of the frustum?',[
'The circular end view','The title block','The top view only','The hidden-line sample'
],0,'The course diagram places the circular end view to the right of the frustum in the first-angle symbol.','يضع رسم المقرر المنظر الدائري النهائي إلى يمين مخروط الإسقاط في رمز الزاوية الأولى.','assets/projection-first-third.svg');
add(3,'Visual projection question','According to the third-angle projection convention taught in the course, which view is placed to the left of the frustum?',[
'The circular end view','The hidden-line view','The title block','The side view only'
],0,'The course diagram places the circular end view to the left of the frustum in the third-angle symbol.','يضع رسم المقرر المنظر الدائري النهائي إلى يسار مخروط الإسقاط في رمز الزاوية الثالثة.','assets/projection-first-third.svg');
add(3,'Visual orthographic question','What is the purpose of separate orthographic views of a three-dimensional object?',[
'To show 2-D views of the 3-D object','To show only colour and shading','To replace dimensions with words','To make the object perspective-only'
],0,'The chapter describes multiview drawings as 2D views of an object.','يصف الفصل الرسومات متعددة المساقط بأنها مناظر ثنائية الأبعاد للجسم.','assets/orthographic-views.svg');
add(3,'2D shapes','Which group contains the basic 2-D shapes named in the lecture?',[
'Circle, triangle, square, rectangle, pentagon and octagon','Cube, cone, sphere and cylinder only','Tetrahedron, cube and octahedron only','Bolt, nut and screw'
],0,'The slide lists circle, triangle, square, rectangle, pentagon, quadrilateral, hexagon and octagon among basic 2D shapes.','تسرد السلايد الدائرة والمثلث والمربع والمستطيل والخماسي والرباعي والسداسي والثماني ضمن الأشكال ثنائية الأبعاد.','assets/shapes-2d.svg');
add(3,'2D shapes','According to the lecture, what makes a polygon regular?',[
'All its sides and angles are equal','Only one side is longer','It has a curved boundary','It has no sides'
],0,'The lecture says a polygon with all sides and angles equal is called a regular polygon.','تذكر المحاضرة أن المضلع الذي تتساوى جميع أضلاعه وزواياه يسمى مضلعًا منتظمًا.','assets/shapes-2d.svg');
add(3,'Circle','What is the centre-to-boundary distance of a circle called?',[
'Radius','Diameter','Chord','Arc'
],0,'The lecture defines the radius as the distance from the centre to the outer line of the circle.','تعرف المحاضرة نصف القطر بأنه المسافة من المركز إلى محيط الدائرة.','assets/shapes-2d.svg');
add(3,'Circle','What is a diameter according to the geometric-shapes table?',[
'A line segment passing through the centre and joining two points on the circle','Any curved part of a circle','A segment that never touches the centre','The distance from the centre to the circle'
],0,'The table defines the diameter as a line segment through the centre joining two points on the circle.','يعرف الجدول القطر بأنه قطعة مستقيمة تمر بالمركز وتصل بين نقطتين على الدائرة.','assets/shapes-2d.svg');
add(3,'Circle','What is an arc?',[
'Any part of the curve of a circle','The longest chord','A line through the centre','A square side'
],0,'The geometric-shapes table defines an arc as any part of the circle’s curve.','يعرف جدول الأشكال الهندسية القوس بأنه أي جزء من منحنى الدائرة.','assets/shapes-2d.svg');
add(3,'Circle','What is a chord?',[
'A line segment joining two points on a circle, not necessarily through the centre','The distance from the centre to the boundary','The entire circular boundary','A line that cannot touch the circle'
],0,'The lecture defines a chord as a segment joining two points on a circle, not necessarily passing through the centre.','تعرف المحاضرة الوتر بأنه قطعة مستقيمة تصل بين نقطتين على الدائرة ولا يلزم أن تمر بالمركز.','assets/shapes-2d.svg');
add(3,'Circle','Which statement about the diameter appears in the lecture?',[
'The diameter is the biggest chord','The diameter is always shorter than every chord','The diameter is an arc','The diameter does not pass through the centre'
],0,'The lecture explicitly states that the diameter is the biggest chord.','تذكر المحاضرة صراحة أن القطر هو أكبر وتر.','assets/shapes-2d.svg');
add(3,'Circle and oval','How does the lecture distinguish an oval from a circle?',[
'Points on an oval are not all the same distance from the centre','Every point on an oval is at the same distance from the centre','An oval has four straight sides','A circle has no centre'
],0,'The lecture says the points of an oval are not all the same distance from the centre.','تذكر المحاضرة أن نقاط الشكل البيضاوي ليست كلها على المسافة نفسها من المركز.','assets/shapes-2d.svg');
add(3,'Triangle','How many sides, edges and vertices does a triangle have according to the lecture?',[
'Three sides, three edges and three vertices','Four sides, four edges and four vertices','Five sides and five vertices','Two sides and two vertices'
],0,'The lecture describes a triangle as a three-sided polygon with three edges and three vertices.','تصف المحاضرة المثلث بأنه مضلع ثلاثي الأضلاع وله ثلاثة أحرف وثلاثة رؤوس.','assets/shapes-2d.svg');
add(3,'Triangle','What is the sum of the three interior angles of a triangle?',[
'180°','90°','270°','360°'
],0,'The lecture states that the sum of the three angles of a triangle is 180 degrees.','تذكر المحاضرة أن مجموع زوايا المثلث الثلاث 180 درجة.','assets/shapes-2d.svg');
add(3,'Triangle types','A triangle with all sides unequal is called:',[
'Scalene','Isosceles','Equilateral','Right-angled'
],0,'The lecture defines a scalene triangle as having all sides unequal.','تعرف المحاضرة المثلث مختلف الأضلاع بأن جميع أضلاعه غير متساوية.','assets/shapes-2d.svg');
add(3,'Triangle types','A triangle with any two equal sides is called:',[
'Isosceles','Scalene','Equilateral only','Obtuse'
],0,'The lecture defines an isosceles triangle as having any two of its three sides equal.','تعرف المحاضرة المثلث متساوي الساقين بأن ضلعين من أضلاعه الثلاثة متساويان.','assets/shapes-2d.svg');
add(3,'Triangle types','A triangle whose three sides are equal is called:',[
'Equilateral','Scalene','Isosceles only','Obtuse'
],0,'The lecture defines an equilateral triangle as one whose all sides are equal.','تعرف المحاضرة المثلث متساوي الأضلاع بأن أضلاعه الثلاثة متساوية.','assets/shapes-2d.svg');
add(3,'Triangle types','In an acute-angled triangle, all three angles are:',[
'Less than 90°','Greater than 90°','Exactly 90°','Exactly 180°'
],0,'The lecture defines an acute triangle as having all three angles less than 90 degrees.','تعرف المحاضرة المثلث الحاد بأن زواياه الثلاث كلها أقل من 90 درجة.');
add(3,'Triangle types','An obtuse-angled triangle has:',[
'One angle greater than 90°','All angles greater than 90°','All angles equal to 90°','No angle greater than 45°'
],0,'The lecture says an obtuse triangle has any one angle greater than 90 degrees.','تذكر المحاضرة أن المثلث المنفرج له زاوية واحدة أكبر من 90 درجة.');
add(3,'Triangle types','A right-angled triangle has one angle equal to:',[
'90°','60°','120°','180°'
],0,'The lecture defines a right triangle as one with an angle equal to 90 degrees.','تعرف المحاضرة المثلث القائم بأن إحدى زواياه تساوي 90 درجة.');
add(3,'Square','Which statement about a square matches the lecture?',[
'Four equal sides and four 90° angles','Opposite sides equal but no right angles','All angles are different','It has five sides'
],0,'The lecture defines a square as a four-sided polygon with equal sides and all angles equal to 90 degrees.','تعرف المحاضرة المربع بأنه مضلع رباعي متساوي الأضلاع وزواياه كلها 90 درجة.','assets/shapes-2d.svg');
add(3,'Square','What does the lecture say about square diagonals?',[
'They are equal and bisect each other at 90°','They are unequal and parallel','They never intersect','They are always outside the square'
],0,'The lecture says square diagonals are equal and bisect each other at right angles.','تذكر المحاضرة أن قطري المربع متساويان وينصف كل منهما الآخر بزاوية قائمة.','assets/shapes-2d.svg');
add(3,'Rectangle','Which statement about a rectangle is given in the lecture?',[
'Opposite sides are equal and parallel, and all angles are 90°','All four sides must be equal','It has one curved side','Its angles are all different'
],0,'The lecture defines a rectangle as having opposite sides equal and parallel and all angles equal to 90 degrees.','تعرف المحاضرة المستطيل بأن أضلاعه المتقابلة متساوية ومتوازية وزواياه كلها 90 درجة.','assets/shapes-2d.svg');
add(3,'Rectangle','What does the lecture say about rectangle diagonals?',[
'They are equal and bisect each other','They bisect each other at 90° in every rectangle','They are always unequal','They are parallel'
],0,'The geometric-shapes table says rectangle diagonals are equal and bisect each other.','يذكر جدول الأشكال الهندسية أن قطري المستطيل متساويان وينصف كل منهما الآخر.','assets/shapes-2d.svg');
add(3,'Parallelogram','Which property defines a parallelogram in the lecture?',[
'Opposite sides are equal and parallel','All sides must be perpendicular','It has one curved edge','All four angles are 90° by definition'
],0,'The lecture defines a parallelogram as a quadrilateral whose opposite sides are equal and parallel.','تعرف المحاضرة متوازي الأضلاع بأنه شكل رباعي أضلاعه المتقابلة متساوية ومتوازية.','assets/shapes-2d.svg');
add(3,'Parallelogram','What does the lecture say about the diagonals of a parallelogram?',[
'They bisect each other','They are always perpendicular','They never intersect','They are always equal'
],0,'The lecture says the diagonals of a parallelogram bisect each other.','تذكر المحاضرة أن قطري متوازي الأضلاع ينصف كل منهما الآخر.','assets/shapes-2d.svg');
add(3,'Rhombus','How does the lecture describe a rhombus?',[
'A parallelogram in which all sides are equal','A rectangle with no parallel sides','A triangle with two equal sides','A polygon with a curved edge'
],0,'The lecture defines a rhombus as a parallelogram in which all sides are equal.','تعرف المحاضرة المعين بأنه متوازي أضلاع جميع أضلاعه متساوية.','assets/shapes-2d.svg');
add(3,'Rhombus','What property of rhombus diagonals is given in the lecture?',[
'They bisect each other at right angles','They are always parallel','They do not bisect each other','They are always longer than every side'
],0,'The lecture states that rhombus diagonals bisect each other at right angles.','تذكر المحاضرة أن قطري المعين ينصف كل منهما الآخر بزاوية قائمة.','assets/shapes-2d.svg');
add(3,'Trapezium','According to the supplied lecture, a trapezium has:',[
'One pair of opposite sides parallel and the other pair not parallel','Two pairs of opposite sides parallel by definition','Four curved sides','No parallel sides in any case'
],0,'The lecture defines a trapezium as a quadrilateral with one pair of opposite sides parallel and the other pair not parallel.','تعرف المحاضرة شبه المنحرف بأنه شكل رباعي له زوج واحد من الأضلاع المتقابلة المتوازية والزوج الآخر غير متوازٍ.','assets/shapes-2d.svg');
add(3,'Trapezium','What is an isosceles trapezium according to the lecture?',[
'A trapezium whose non-parallel sides are equal','A trapezium with no parallel sides','A square rotated by 45°','A trapezium with four equal sides'
],0,'The lecture says a trapezium with equal non-parallel sides is an isosceles trapezium.','تذكر المحاضرة أن شبه المنحرف الذي يتساوى ضلعاه غير المتوازيين يسمى شبه منحرف متساوي الساقين.','assets/shapes-2d.svg');
add(3,'Polygons','How many sides does a pentagon have?',[
'5','4','6','8'
],0,'The lecture defines a pentagon as a polygon with five sides.','تعرف المحاضرة الخماسي بأنه مضلع له خمسة أضلاع.','assets/shapes-2d.svg');
add(3,'Polygons','What is the sum of the interior angles of a pentagon given in the lecture?',[
'540°','360°','720°','1080°'
],0,'The lecture gives 540 degrees as the sum of a pentagon’s interior angles.','تذكر المحاضرة أن مجموع زوايا الخماسي الداخلية 540 درجة.','assets/shapes-2d.svg');
add(3,'Polygons','How many sides does a hexagon have?',[
'6','5','7','8'
],0,'The lecture defines a hexagon as a polygon with six sides.','تعرف المحاضرة السداسي بأنه مضلع له ستة أضلاع.','assets/shapes-2d.svg');
add(3,'Polygons','What is the sum of the interior angles of a hexagon given in the lecture?',[
'720°','540°','1080°','1440°'
],0,'The lecture gives 720 degrees as the sum of a hexagon’s interior angles.','تذكر المحاضرة أن مجموع زوايا السداسي الداخلية 720 درجة.','assets/shapes-2d.svg');
add(3,'Polygons','How many sides does a heptagon have?',[
'7','6','8','9'
],0,'The lecture defines a heptagon as a polygon with seven sides.','تعرف المحاضرة السباعي بأنه مضلع له سبعة أضلاع.','assets/shapes-2d.svg');
add(3,'Polygons','How many sides does an octagon have?',[
'8','6','7','9'
],0,'The lecture defines an octagon as an eight-sided polygon.','تعرف المحاضرة الثماني بأنه مضلع له ثمانية أضلاع.','assets/shapes-2d.svg');
add(3,'Polygons','What is the sum of the interior angles of an octagon given in the lecture?',[
'1080°','720°','540°','1440°'
],0,'The lecture gives 1080 degrees as the sum of an octagon’s interior angles.','تذكر المحاضرة أن مجموع زوايا الثماني الداخلية 1080 درجة.','assets/shapes-2d.svg');
add(3,'Polygons','How many sides does a decagon have?',[
'10','8','9','12'
],0,'The lecture defines a decagon as a polygon with ten sides.','تعرف المحاضرة العشاري بأنه مضلع له عشرة أضلاع.','assets/shapes-2d.svg');
add(3,'Polygons','What is the sum of the interior angles of a decagon given in the lecture?',[
'1440°','1080°','720°','540°'
],0,'The lecture gives 1440 degrees as the sum of a decagon’s interior angles.','تذكر المحاضرة أن مجموع زوايا العشاري الداخلية 1440 درجة.','assets/shapes-2d.svg');
add(3,'Polygons','What is the interior angle of a regular pentagon as stated in the lecture?',[
'108°','72°','90°','120°'
],0,'The lecture states that each interior angle of a regular pentagon is 108 degrees.','تذكر المحاضرة أن كل زاوية داخلية في الخماسي المنتظم تساوي 108 درجات.','assets/shapes-2d.svg');
add(3,'Polygons','What is the exterior angle of a regular pentagon as stated in the lecture?',[
'72°','108°','90°','180°'
],0,'The lecture states that each exterior angle of a regular pentagon is 72 degrees.','تذكر المحاضرة أن كل زاوية خارجية في الخماسي المنتظم تساوي 72 درجة.','assets/shapes-2d.svg');
add(3,'3D shapes in Chapter 3','How many faces, edges and vertices does a cube have in the Chapter 3 table?',[
'6 faces, 12 edges, 8 vertices','8 faces, 12 edges, 6 vertices','4 faces, 6 edges, 4 vertices','12 faces, 30 edges, 20 vertices'
],0,'The Chapter 3 table lists a cube as having 6 faces, 12 edges and 8 vertices.','يسرد جدول الفصل الثالث للمكعب 6 أوجه و12 حرفًا و8 رؤوس.','assets/platonic-solids.svg');
add(3,'3D shapes in Chapter 3','How many faces, edges and vertices does a cuboid have in the Chapter 3 table?',[
'6 faces, 12 edges, 8 vertices','6 faces, 8 edges, 12 vertices','5 faces, 9 edges, 6 vertices','2 faces, 1 edge, 1 vertex'
],0,'The Chapter 3 table lists a rectangular prism/cuboid as having 6 faces, 12 edges and 8 vertices.','يسرد جدول الفصل الثالث للمتوازي المستطيلات 6 أوجه و12 حرفًا و8 رؤوس.');
add(3,'3D shapes in Chapter 3','Which description of a cone appears in the Chapter 3 table?',[
'It has a circular base and the top is called the apex or vertex','It has two circular bases and no vertex','It has six square faces','It has only flat rectangular faces'
],0,'The chapter says a cone has a circular base and its top is called the apex or vertex.','يذكر الفصل أن للمخروط قاعدة دائرية وتسمى قمته Apex أو Vertex.');
add(3,'3D shapes in Chapter 3','Which description of a cylinder appears in the Chapter 3 table?',[
'Two circular bases at opposite ends connected by a curved surface','One circular base and an apex','Six square faces','A shape with only triangular faces'
],0,'The lecture describes a cylinder as having two circular bases connected by a curved surface and no vertex.','تصف المحاضرة الأسطوانة بأن لها قاعدتين دائريتين متقابلتين متصلتين بسطح منحني ولا رأس لها.');
add(3,'3D shapes in Chapter 3','Which example of a sphere is given in the lecture?',[
'Earth or a ball','A brick or book','A birthday hat','A water pipe'
],0,'The Chapter 3 table gives Earth and a ball as sphere examples.','يعطي جدول الفصل الثالث الأرض والكرة مثالين للكرة المجسمة.');
add(3,'Visual shapes','Which two-dimensional shape has a curved boundary and no straight sides?',[
'Circle','Triangle','Square','Trapezium'
],0,'The lecture distinguishes the circle as a curved shape, unlike polygons with sides.','تميز المحاضرة الدائرة بوصفها شكلًا منحنيًا بخلاف المضلعات ذات الأضلاع.','assets/shapes-2d.svg');
add(3,'Visual shapes','Which polygon has eight sides?',[
'Octagon','Pentagon','Triangle','Rectangle'
],0,'An octagon is an eight-sided polygon in the lecture.','الثماني مضلع له ثمانية أضلاع وفق المحاضرة.','assets/shapes-2d.svg');
add(3,'Visual shapes','Which quadrilateral has one pair of opposite sides parallel and the other pair not parallel, according to the lecture?',[
'Trapezium','Circle','Triangle','Pentagon'
],0,'The lecture defines a trapezium as a quadrilateral with one pair of opposite sides parallel.','تعرف المحاضرة شبه المنحرف بأنه شكل رباعي له زوج واحد من الأضلاع المتقابلة المتوازية.','assets/shapes-2d.svg');

// -----------------------------------------------------------------------------
// CHAPTER 4 — Platonic Solids
// -----------------------------------------------------------------------------
add(4,'Definition','Platonic solids are also known in the lecture as:',[
'Regular solids or regular polyhedra','Irregular curves','Flat 2D shapes','Drawing instruments'
],0,'The lecture says Platonic solids are also known as regular solids or regular polyhedra.','تذكر المحاضرة أن المجسمات الأفلاطونية تُعرف أيضًا بالمجسمات المنتظمة أو متعددات السطوح المنتظمة.','assets/platonic-solids.svg');
add(4,'Definition','Which description best matches the definition of a Platonic solid in the lecture?',[
'A regular convex polyhedron with identical congruent regular-polygon faces and the same number of faces meeting at each vertex',
'A flat shape with one curved edge',
'Any solid with faces of different shapes and sizes',
'A drawing made without instruments'
],0,'The lecture defines a Platonic solid as a regular convex polyhedron with congruent regular polygon faces and the same number of faces meeting at each vertex.','تعرف المحاضرة المجسم الأفلاطوني بأنه متعدد سطوح محدب منتظم ذو أوجه مضلعة منتظمة متطابقة ويلتقي العدد نفسه من الأوجه عند كل رأس.','assets/platonic-solids.svg');
add(4,'General properties','How many types of Platonic solids are listed in the lecture?',[
'5','3','4','6'
],0,'The lecture lists five Platonic solids.','تسرد المحاضرة خمسة مجسمات أفلاطونية.','assets/platonic-solids.svg');
add(4,'General properties','Which statement is a listed property of Platonic solids?',[
'All faces are regular and congruent','Faces are always curved','Different faces must have different sizes','The solids are concave'
],0,'The lecture lists regular, congruent faces and convexity among the properties.','تذكر المحاضرة انتظام الأوجه وتطابقها والتحدب ضمن خصائص المجسمات الأفلاطونية.','assets/platonic-solids.svg');
add(4,'General properties','According to the lecture, Platonic solids are:',[
'Three-dimensional, convex and regular','Two-dimensional and flat','Always concave','Made only of curved surfaces'
],0,'The slide describes Platonic solids as three-dimensional, convex and regular.','تصف السلايد المجسمات الأفلاطونية بأنها ثلاثية الأبعاد ومحدبة ومنتظمة.','assets/platonic-solids.svg');
add(4,'General properties','What does the lecture say about faces of a Platonic solid?',[
'They do not intersect except at their edges','They overlap throughout their interiors','They must all be circles','They have different shapes'
],0,'The lecture says faces of Platonic solids do not intersect except at their edges.','تذكر المحاضرة أن أوجه المجسمات الأفلاطونية لا تتقاطع إلا عند أحرفها.','assets/platonic-solids.svg');
add(4,'Tetrahedron','How many faces does a tetrahedron have?',[
'4','6','8','12'
],0,'The lecture lists 4 faces for a tetrahedron.','تذكر المحاضرة أن رباعي الوجوه له 4 أوجه.','assets/platonic-solids.svg');
add(4,'Tetrahedron','How many edges does a tetrahedron have?',[
'6','4','8','12'
],0,'The lecture lists 6 edges for a tetrahedron.','تذكر المحاضرة أن رباعي الوجوه له 6 أحرف.','assets/platonic-solids.svg');
add(4,'Tetrahedron','How many vertices does a tetrahedron have?',[
'4','6','8','12'
],0,'The lecture lists 4 vertices for a tetrahedron.','تذكر المحاضرة أن رباعي الوجوه له 4 رؤوس.','assets/platonic-solids.svg');
add(4,'Tetrahedron','Which association does the lecture give for a tetrahedron?',[
'Fire','Earth','Air','Water'
],0,'The lecture associates the tetrahedron with fire.','تربط المحاضرة رباعي الوجوه بالنار.','assets/platonic-solids.svg');
add(4,'Tetrahedron','Which property of a tetrahedron is explicitly listed?',[
'It has no parallel faces','It has 20 vertices','It has 12 square faces','It has 30 edges'
],0,'The lecture says a tetrahedron has no parallel faces.','تذكر المحاضرة أن رباعي الوجوه لا يملك أوجهًا متوازية.','assets/platonic-solids.svg');
add(4,'Tetrahedron','How many planes of symmetry does the lecture assign to a tetrahedron?',[
'6','4','8','12'
],0,'The tetrahedron slide explicitly lists 6 planes of symmetry.','تذكر سلايد رباعي الوجوه صراحة أن له 6 مستويات تماثل.','assets/platonic-solids.svg');
add(4,'Cube','How many faces does a cube have?',[
'6','4','8','12'
],0,'The lecture lists 6 square faces for a cube.','تذكر المحاضرة أن للمكعب 6 أوجه مربعة.','assets/platonic-solids.svg');
add(4,'Cube','How many edges does a cube have?',[
'12','6','8','20'
],0,'The lecture lists 12 edges for a cube.','تذكر المحاضرة أن للمكعب 12 حرفًا.','assets/platonic-solids.svg');
add(4,'Cube','How many vertices does a cube have?',[
'8','6','12','4'
],0,'The lecture lists 8 vertices for a cube.','تذكر المحاضرة أن للمكعب 8 رؤوس.','assets/platonic-solids.svg');
add(4,'Cube','Which statement about cube faces is given in the lecture?',[
'Each face is a square and all sides of the cube have the same length','Every face is a triangle','The faces are all different sizes','The cube has circular faces'
],0,'The lecture describes the cube as having six identical square faces and equal side lengths.','تصف المحاضرة المكعب بأنه يتكون من ستة أوجه مربعة متطابقة وأضلاع متساوية الطول.','assets/platonic-solids.svg');
add(4,'Cube','What is the angle between any two faces of a cube according to the lecture?',[
'90°','45°','60°','180°'
],0,'The cube slide says the angle between any two faces is 90 degrees.','تذكر سلايد المكعب أن الزاوية بين أي وجهين تساوي 90 درجة.','assets/platonic-solids.svg');
add(4,'Cube','How many faces and edges meet at each cube vertex according to the lecture?',[
'Three faces and three edges','Two faces and two edges','Four faces and four edges','Six faces and six edges'
],0,'The lecture states that each cube vertex meets three faces and three edges.','تذكر المحاضرة أن كل رأس في المكعب تلتقي عنده ثلاثة أوجه وثلاثة أحرف.','assets/platonic-solids.svg');
add(4,'Cube','Which association does the lecture give for the cube?',[
'Earth','Fire','Water','Universe'
],0,'The lecture associates the cube with earth.','تربط المحاضرة المكعب بالأرض.','assets/platonic-solids.svg');
add(4,'Octahedron','How many faces does an octahedron have?',[
'8','4','6','12'
],0,'The lecture lists 8 faces for an octahedron.','تذكر المحاضرة أن لثماني الوجوه 8 أوجه.','assets/platonic-solids.svg');
add(4,'Octahedron','How many edges does an octahedron have?',[
'12','6','8','30'
],0,'The lecture lists 12 edges for an octahedron.','تذكر المحاضرة أن لثماني الوجوه 12 حرفًا.','assets/platonic-solids.svg');
add(4,'Octahedron','How many vertices does an octahedron have?',[
'6','4','8','12'
],0,'The lecture lists 6 vertices for an octahedron.','تذكر المحاضرة أن لثماني الوجوه 6 رؤوس.','assets/platonic-solids.svg');
add(4,'Octahedron','How many edges meet at each octahedron vertex according to the lecture?',[
'4','3','5','6'
],0,'The lecture says four edges meet at each octahedron vertex.','تذكر المحاضرة أن أربعة أحرف تلتقي عند كل رأس لثماني الوجوه.','assets/platonic-solids.svg');
add(4,'Octahedron','Which association does the lecture give for the octahedron?',[
'Air','Fire','Earth','Water'
],0,'The lecture associates the octahedron with air.','تربط المحاضرة ثماني الوجوه بالهواء.','assets/platonic-solids.svg');
add(4,'Dodecahedron','How many pentagonal faces does a dodecahedron have?',[
'12','8','20','30'
],0,'The lecture describes a dodecahedron as having 12 pentagonal faces.','تصف المحاضرة الاثني عشري الوجوه بأنه يتكون من 12 وجهًا خماسيًا.','assets/platonic-solids.svg');
add(4,'Dodecahedron','How many edges does a dodecahedron have?',[
'30','12','20','160'
],0,'The lecture lists 30 edges for a dodecahedron.','تذكر المحاضرة أن للاثني عشري الوجوه 30 حرفًا.','assets/platonic-solids.svg');
add(4,'Dodecahedron','How many vertices does a dodecahedron have?',[
'20','12','30','160'
],0,'The lecture lists 20 vertices for a dodecahedron.','تذكر المحاضرة أن للاثني عشري الوجوه 20 رأسًا.','assets/platonic-solids.svg');
add(4,'Dodecahedron','How many edges meet at each dodecahedron vertex according to the lecture?',[
'3','2','4','5'
],0,'The lecture says three edges meet at each dodecahedron vertex.','تذكر المحاضرة أن ثلاثة أحرف تلتقي عند كل رأس للاثني عشري الوجوه.','assets/platonic-solids.svg');
add(4,'Dodecahedron','How many diagonals does the supplied lecture state for a dodecahedron?',[
'160','30','20','12'
],0,'The supplied Chapter 4 slide explicitly states that a dodecahedron has 160 diagonals.','تذكر سلايد الفصل الرابع صراحة أن للاثني عشري الوجوه 160 قطرًا.','assets/platonic-solids.svg');
add(4,'Dodecahedron','Which association does the lecture give for the dodecahedron?',[
'The universe','Fire','Earth','Air'
],0,'The lecture associates the dodecahedron with the universe.','تربط المحاضرة الاثني عشري الوجوه بالكون.','assets/platonic-solids.svg');
add(4,'Icosahedron','How many faces does an icosahedron have?',[
'20','8','12','30'
],0,'The lecture lists 20 faces for an icosahedron.','تذكر المحاضرة أن للعشريني الوجوه 20 وجهًا.','assets/platonic-solids.svg');
add(4,'Icosahedron','How many edges does an icosahedron have?',[
'30','20','12','8'
],0,'The lecture lists 30 edges for an icosahedron.','تذكر المحاضرة أن للعشريني الوجوه 30 حرفًا.','assets/platonic-solids.svg');
add(4,'Icosahedron','How many vertices does an icosahedron have?',[
'12','20','30','8'
],0,'The lecture lists 12 vertices for an icosahedron.','تذكر المحاضرة أن للعشريني الوجوه 12 رأسًا.','assets/platonic-solids.svg');
add(4,'Icosahedron','What shape are the faces of a regular icosahedron?',[
'Equilateral triangles','Squares','Pentagons','Circles'
],0,'The lecture says the icosahedron consists of equilateral-triangle faces.','تذكر المحاضرة أن أوجه العشريني الوجوه مثلثات متساوية الأضلاع.','assets/platonic-solids.svg');
add(4,'Icosahedron','Which distinction does the lecture give to the icosahedron?',[
'It has the greatest number of faces of any Platonic solid','It has the fewest faces','It has 12 pentagonal faces','It has no vertices'
],0,'The lecture says the icosahedron has the greatest number of faces among Platonic solids.','تذكر المحاضرة أن العشريني الوجوه يملك أكبر عدد من الأوجه بين المجسمات الأفلاطونية.','assets/platonic-solids.svg');
add(4,'Icosahedron','Which association does the lecture give for the icosahedron?',[
'Water','Earth','Fire','Universe'
],0,'The lecture associates the icosahedron with water.','تربط المحاضرة العشريني الوجوه بالماء.','assets/platonic-solids.svg');
add(4,'Existence of five solids','According to the lecture, how many faces meet at each vertex at minimum for these five solids?',[
'At least 3','At least 1','Exactly 2','At least 6'
],0,'The proof slide says at least three faces meet at each vertex for each of the five solids.','تذكر سلايد البرهان أن ثلاثة أوجه على الأقل تلتقي عند كل رأس في كل واحد من المجسمات الخمسة.');
add(4,'Existence of five solids','What condition do the internal angles meeting at a vertex satisfy in the lecture’s explanation?',[
'Their sum is less than 360°','Their sum is greater than 360°','Their sum is always exactly 360°','Their sum is unrelated to 360°'
],0,'The slide says the internal angles that meet at a vertex are less than 360 degrees.','تذكر السلايد أن مجموع الزوايا الداخلية التي تلتقي عند الرأس أقل من 360 درجة.');
add(4,'Existence of five solids','According to the lecture table, three equilateral triangles meeting at a tetrahedron vertex have a total angle of:',[
'180°','240°','270°','300°'
],0,'The lecture table gives 60° × 3 = 180° for the tetrahedron.','يعطي جدول المحاضرة 60° × 3 = 180° لرباعي الوجوه.');
add(4,'Existence of five solids','According to the lecture table, three square faces meeting at a cube vertex have a total angle of:',[
'270°','180°','240°','324°'
],0,'The lecture table gives 90° × 3 = 270° for the cube.','يعطي جدول المحاضرة 90° × 3 = 270° للمكعب.');
add(4,'Existence of five solids','According to the lecture table, four equilateral triangles meeting at an octahedron vertex have a total angle of:',[
'240°','180°','270°','324°'
],0,'The lecture table gives 60° × 4 = 240° for the octahedron.','يعطي جدول المحاضرة 60° × 4 = 240° لثماني الوجوه.');
add(4,'Existence of five solids','According to the lecture table, three regular pentagon angles at a dodecahedron vertex total:',[
'324°','240°','270°','360°'
],0,'The lecture table gives 108° × 3 = 324° for the dodecahedron.','يعطي جدول المحاضرة 108° × 3 = 324° للاثني عشري الوجوه.');
add(4,'Existence of five solids','According to the lecture table, five equilateral-triangle angles at an icosahedron vertex total:',[
'300°','180°','240°','324°'
],0,'The lecture table gives 60° × 5 = 300° for the icosahedron.','يعطي جدول المحاضرة 60° × 5 = 300° للعشريني الوجوه.');
add(4,'Euler formula','The worked example in Chapter 4 checks a dodecahedron with F = 12, V = 20 and E = 30. What is F + V − E?',[
'2','0','1','12'
],0,'The lecture example calculates 12 + 20 − 30 = 2.','يحسب مثال المحاضرة 12 + 20 − 30 = 2.','assets/platonic-solids.svg');
add(4,'Euler formula','A solid has 6 faces, 8 vertices and 12 edges. What is F + V − E?',[
'2','0','4','6'
],0,'Using the values shown in the course examples, F + V − E = 6 + 8 − 12 = 2.','باستخدام القيم الواردة في أمثلة المقرر: F + V − E = 6 + 8 − 12 = 2.','assets/platonic-solids.svg');
add(4,'Visual solid identification','Which Platonic solid has 6 faces, 12 edges and 8 vertices?',[
'Cube','Tetrahedron','Octahedron','Dodecahedron'
],0,'The lecture identifies the cube as having 6 faces, 12 edges and 8 vertices.','تحدد المحاضرة المكعب بأنه يملك 6 أوجه و12 حرفًا و8 رؤوس.','assets/platonic-solids.svg');
add(4,'Visual solid identification','Which Platonic solid has 4 triangular faces, 6 edges and 4 vertices?',[
'Tetrahedron','Cube','Octahedron','Icosahedron'
],0,'The lecture identifies the tetrahedron by its 4 triangular faces, 6 edges and 4 vertices.','تحدد المحاضرة رباعي الوجوه بأوجهه المثلثة الأربعة و6 أحرف و4 رؤوس.','assets/platonic-solids.svg');
add(4,'Visual solid identification','Which Platonic solid has 12 pentagonal faces?',[
'Dodecahedron','Octahedron','Cube','Tetrahedron'
],0,'The lecture says the dodecahedron has 12 pentagonal faces.','تذكر المحاضرة أن للاثني عشري الوجوه 12 وجهًا خماسيًا.','assets/platonic-solids.svg');
add(4,'Visual solid identification','Which Platonic solid has the greatest number of faces among the five solids?',[
'Icosahedron','Cube','Tetrahedron','Octahedron'
],0,'The lecture states that the icosahedron has the greatest number of faces of any Platonic solid.','تذكر المحاضرة أن العشريني الوجوه يملك أكبر عدد من الأوجه بين المجسمات الأفلاطونية.','assets/platonic-solids.svg');


// -----------------------------------------------------------------------------
// ADDITIONAL ACADEMIC QUESTION SET
// Question formats follow the supplied Business Statistics quiz pattern:
// MCQ, True/False, Fill in the Blank, Matching, and paper-based Drawing tasks.
// Every item below is grounded in the four supplied ENG0023 chapter PDFs.
// -----------------------------------------------------------------------------

// Chapter 1 — Introduction to Engineering Drawing & Tools
add(1,'Drawing sheets','What is the principal function of a border line on a drawing sheet?',[ 'It encloses the drawings and is the heaviest peripheral line', 'It indicates the height of letters', 'It records the drawing scale only', 'It marks hidden edges' ],0,'The Chapter 1 slide defines the border line as the heaviest peripheral line enclosing the drawings.','تعرّف شريحة الفصل الأول خط الإطار بأنه أثقل خط محيطي يحيط بالرسومات.','assets/drawing-sheet.svg');
add(1,'Drawing sheets','Which information is specifically associated with the title block in the lecture?',[ 'Drawing title, scale, drawn-by/check-by details, date and drawing number', 'Only the object colour', 'Only the paper manufacturer', 'Only the list of visible lines' ],0,'The title block records identification and administration details for a drawing, including its title, scale, author/checker, date, drawing number and company name.','تسجل خانة العنوان بيانات تعريف الرسم وإدارته، ومنها العنوان والمقياس واسم الرسام والمراجع والتاريخ ورقم الرسم واسم الشركة.','assets/drawing-sheet.svg');
add(1,'Drawing sheets','Which standard sheet has dimensions of 297 × 420 mm in the supplied table?',[ 'A3', 'A4', 'A2', 'A1' ],0,'The Chapter 1 ISO sheet-size table lists A3 as 297 × 420 mm.','يسرد جدول أحجام الأوراق في الفصل الأول أبعاد A3 بأنها 297 × 420 مم.','assets/drawing-sheet.svg');
add(1,'Drawing sheets','Which sheet size comes immediately after A0 as the next smaller size in the ISO A-series?',[ 'A1', 'A2', 'A3', 'A4' ],0,'The Chapter 1 sheet-size diagram shows the ISO sequence from A0 to A4, with A1 immediately smaller than A0.','يوضح مخطط أحجام الأوراق في الفصل الأول التسلسل من A0 إلى A4، وتأتي A1 مباشرةً بعد A0 بوصفها الحجم الأصغر التالي.','assets/drawing-sheet.svg');
add(1,'Drawing scales','A drawing is half the size of the actual object. Which scale notation represents this reduction?',[ '1:2', '2:1', '1:1', '2:2' ],0,'The lecture identifies 1:X, where X is greater than 1, as a reduction scale; 1:2 represents half size.','تحدد المحاضرة 1:X، عندما تكون X أكبر من 1، مقياسًا للتصغير؛ وتمثل 1:2 نصف الحجم الحقيقي.','assets/scale.svg');
add(1,'Drawing scales','Which notation represents an enlargement scale according to the slide?',[ 'X:1, where X > 1', '1:X, where X > 1', '1:1 only', 'X:X only' ],0,'The slide labels X:1, with X greater than 1, as an enlargement scale.','تسمي الشريحة X:1، عندما تكون X أكبر من 1، مقياس تكبير.','assets/scale.svg');
add(1,'Drawing tools','According to the pencil slide, which pencil grades are suggested for a thick line?',[ '2H or HB', '4H only', '4B only', '8B only' ],0,'The supplied pencil slide notes 2H or HB for a thick line and 4H for a thin line.','تشير شريحة الأقلام إلى استخدام 2H أو HB للخط السميك و4H للخط الرفيع.');
add(1,'Drawing tools','Which pencil grade is suggested for a thin line in the supplied slide?',[ '4H', '4B', '8B', '2B' ],0,'The pencil slide explicitly labels 4H for a thin line.','تحدد شريحة الأقلام 4H للخط الرفيع.');
add(1,'Drawing methods','Which statement best distinguishes a sketch from an engineering drawing in the lecture?',[ 'A sketch uses an approximate scale, while an engineering drawing is prepared accurately with tools', 'A sketch always uses an exact scale, while an engineering drawing never does', 'Both must be made only with CAD software', 'An engineering drawing contains no dimensions' ],0,'The lecture contrasts an approximate-scale sketch with an engineering drawing prepared carefully using drawing instruments and an accurate scale.','تقارن المحاضرة بين الرسم التخطيطي ذي المقياس التقريبي والرسم الهندسي المعد بعناية باستخدام أدوات ومقياس دقيقين.');
add(1,'Drawing standards','What is the main reason for applying drawing standards?',[ 'To help different readers interpret a drawing consistently', 'To make each reader interpret the drawing differently', 'To remove all written information', 'To avoid using dimensions' ],0,'The lecture says standards make technical drawings communicate the same meaning to their readers.','تذكر المحاضرة أن المعايير تجعل الرسومات الفنية تنقل المعنى نفسه إلى القراء.');
add(1,'Drawing tools','What does CAD stand for in the drawing-method slides?',[ 'Computer-Aided Design', 'Computer-Automated Dimension', 'Central Artistic Draft', 'Common Axis Drawing' ],0,'The chapter identifies CAD as Computer-Aided Design and gives commercial drawing software as examples.','يعرّف الفصل CAD بأنه التصميم بمساعدة الحاسوب، ويذكر أمثلة لبرامج الرسم التجارية.');
add(1,'Drawing sheets','What does GSM express when describing paper?',[ 'Grams per square metre', 'Grids per standard model', 'Graphic scale measurement', 'Geometry sheet margin' ],0,'GSM is the paper-weight unit shown in the course material and means grams per square metre.','وحدة GSM الظاهرة في المادة تعني غرامًا لكل متر مربع، وتستخدم لوصف وزن الورق.');
add(1,'Drawing tools','Which instrument is most directly associated with drawing circles and arcs?',[ 'Compass', 'T-square', 'Set square', 'Drawing board' ],0,'The drawing-tools material presents the compass as an instrument for constructing circles and arcs.','تعرض مادة أدوات الرسم الفرجار أداةً لإنشاء الدوائر والأقواس.');
add(1,'Drawing tools','Which instrument is shown as a tool for guiding horizontal lines?',[ 'T-square', 'Compass', 'Divider only', 'Eraser' ],0,'The drawing-tools slides include the T-square among the standard instruments used to guide straight drawing lines.','تدرج شرائح أدوات الرسم مسطرة T ضمن الأدوات القياسية لتوجيه الخطوط المستقيمة.');
add(1,'Engineering applications','Why is engineering drawing important in manufacturing or construction?',[ 'It communicates the shape, dimensions and specifications needed to make or build an object', 'It replaces all engineering measurements with artistic impressions', 'It is used only to decorate a report', 'It describes emotions rather than object features' ],0,'The chapter defines drawing as a graphic representation used for later manufacturing or construction and highlights technical communication.','يعرّف الفصل الرسم بأنه تمثيل رسومي يستخدم لاحقًا في التصنيع أو الإنشاء، ويؤكد دوره في التواصل الفني.');
addBlank(1,'Drawing scales','A scale of 1:1 represents ______ size.', ['full', 'reduced', 'enlarged', 'approximate only'],0,'The lecture labels SCALE 1:1 as full size.','تسمي المحاضرة المقياس 1:1 مقياس الحجم الكامل.');
addBlank(1,'Drawing sheets','The lightest line used to guide the height of letters is called a ______ line.', ['guide', 'border', 'dimension', 'cutting-plane'],0,'The lecture defines the guide line as the lightest line used to guide letter height.','تعرّف المحاضرة خط الإرشاد بأنه أخف خط يُستخدم لتوجيه ارتفاع الحروف.');
addBlank(1,'Drawing sheets','The box that records the drawing title, scale and author is the ______.', ['title block', 'border line', 'guide line', 'extension line'],0,'The title block contains identification details about the drawing.','تحتوي خانة العنوان على بيانات تعريف الرسم.');
addTF(1,'Drawing standards','Drawing standards help technical drawings communicate the same meaning to different readers.',true,'The lecture states that standards make technical drawings convey the same meaning to all readers.','تذكر المحاضرة أن المعايير تجعل الرسومات الفنية تنقل المعنى نفسه إلى جميع القراء.');
addTF(1,'Drawing types','Artistic drawings are always interpreted in exactly the same way by every viewer.',false,'The lecture contrasts technical drawings with artistic drawings, which may be interpreted differently by different viewers.','تقارن المحاضرة بين الرسومات الفنية والرسومات الفنية الهندسية؛ فقد يفسر المشاهدون الرسم الفني بطرق مختلفة.');
addTF(1,'Drawing scales','A scale is a ratio between a linear dimension on the drawing and the corresponding actual object dimension.',true,'This is the scale definition shown in Chapter 1.','هذا هو تعريف المقياس الوارد في الفصل الأول.');
addTF(1,'Drawing scales','The notation 1:X, where X is greater than 1, indicates enlargement.',false,'The slide defines 1:X as reduction when X is greater than 1; enlargement is written X:1.','تعرّف الشريحة 1:X بأنه مقياس تصغير عندما تكون X أكبر من 1؛ أما التكبير فيكتب X:1.');
addTF(1,'Drawing sheets','A0 is the largest sheet size in the ISO A0–A4 sequence shown in the lecture.',true,'The supplied sheet-size diagram shows A0 as the largest sheet and A4 as the smallest among those listed.','يوضح مخطط أحجام الأوراق أن A0 أكبر الأحجام وA4 أصغرها ضمن الأحجام المذكورة.');
addTF(1,'Drawing tools','The letter B in the pencil grading scale refers to blackness.',true,'The pencil-grade scale uses B for blackness and H for hardness.','يستخدم مقياس درجات الأقلام الحرف B للدلالة على السواد والحرف H للدلالة على الصلابة.');
addTF(1,'Drawing methods','Freehand drawing requires the use of a compass, T-square and set squares for every line.',false,'The lecture says freehand lines are sketched without instruments other than pencils and erasers.','تذكر المحاضرة أن الرسم الحر يتم دون أدوات أخرى غير الأقلام والممحاة.');
addTF(1,'Drawing tools','The chapter presents drawing instruments, knowledge, skill and practice as contributing to accurate technical drawing.',true,'The instrument slide says knowledge, skill and practice help bring precision to technical drawing.','تذكر شريحة الأدوات أن المعرفة والمهارة والممارسة تساعد على تحقيق الدقة في الرسم الفني.');
addMatching(1,'Drawing sheets','Match each drawing-sheet element with its function.',[
 ['Border line','The heaviest peripheral line that encloses the drawing'],
 ['Title block','A box containing drawing identification and administrative details'],
 ['Guide line','The lightest line used to guide letter height'],
 ['Drawing scale','The ratio between a drawing dimension and the actual dimension']
],'Each term is matched to the definition given in the Chapter 1 slides.','يرتبط كل مصطلح بالتعريف الوارد له في شرائح الفصل الأول.','assets/drawing-sheet.svg');
addMatching(1,'Drawing standards','Match each standards abbreviation with the organization or standard named in the lecture.',[
 ['ANSI','American National Standards Institute'],
 ['JIS','Japanese Industrial Standards'],
 ['BS','British Standards'],
 ['ISO','International Organization for Standardization']
],'The standards table associates each abbreviation with the named national or international standard.','يربط جدول المعايير كل اختصار بالمعيار أو الجهة الوطنية أو الدولية المذكورة.');

// Chapter 2 — Line Types
add(2,'Hidden lines','Which drafting convention for hidden lines is stated in the lecture?',[ 'A dash should normally start and end the hidden line', 'Every hidden line must be continuous and thick', 'Hidden lines must be drawn at 45 degrees', 'Hidden lines always use arrowheads' ],0,'The lecture states that a dash should be used to start and end hidden lines, subject to the noted exception at parallel lines.','تذكر المحاضرة أن الخط المخفي يبدأ وينتهي بشرطة، مع الاستثناء الموضح عند التقاء الخطوط المتوازية.','assets/line-types.svg');
add(2,'Hidden lines','What should happen to hidden-line dashes at corners?',[ 'They should meet at the corners', 'They should stop far before the corner', 'They should form circles', 'They should be replaced by arrowheads' ],0,'The Chapter 2 slide says hidden-line dashes should meet in the corners.','تذكر شريحة الفصل الثاني أن شرطات الخطوط المخفية ينبغي أن تلتقي عند الزوايا.','assets/line-types.svg');
add(2,'Extension lines','How far should an extension line extend beyond the last dimension, according to the lecture?',[ '3 mm', '1.5 mm', '6 mm', '10 mm' ],0,'The lecture says extension lines begin 1.5 mm away from the object and extend 3 mm beyond the last dimension.','تذكر المحاضرة أن خط الامتداد يبدأ على بعد 1.5 مم من الجسم ويمتد 3 مم بعد آخر بُعد.','assets/line-types.svg');
add(2,'Extension lines','Which statement about dimension lines and extension lines appears in the lecture?',[ 'Dimension lines should not be crossed', 'Dimension lines should always be crossed', 'Extension lines must be thick object lines', 'Extension lines replace all dimensions' ],0,'The extension-line slide explicitly states that dimension lines should not be crossed.','تنص شريحة خطوط الامتداد صراحةً على عدم تقاطع خطوط الأبعاد.','assets/line-types.svg');
add(2,'Cutting-plane lines','What do arrows on a cutting-plane line indicate in the lecture?',[ 'The direction of sight for the section view', 'The direction to draw a border', 'The centre of a circle', 'The length of an extension line' ],0,'The lecture says cutting-plane arrows represent the line-of-sight direction and point away from the sectioned view.','تذكر المحاضرة أن أسهم مستوى القطع توضح اتجاه النظر للمقطع وتتجه بعيدًا عن المنظر المقطوع.','assets/line-types.svg');
add(2,'Break lines','Which description matches a short break line?',[ 'A thick wavy line', 'A thin chain line with long and short dashes', 'A continuous thick outline', 'A thin line with arrowheads' ],0,'The lecture describes short break lines as thick wavy lines.','تصف المحاضرة خطوط الكسر القصيرة بأنها خطوط متموجة سميكة.','assets/line-types.svg');
add(2,'Break lines','What is the purpose of a long break line?',[ 'To indicate that a central section has been removed so a long object can be drawn shorter', 'To indicate the centre of a circle', 'To identify a cutting plane only', 'To show a visible outline' ],0,'The lecture describes long break lines as long, thin lines indicating that the centre section of an object has been removed to fit the drawing on a smaller sheet.','تصف المحاضرة خطوط الكسر الطويلة بأنها خطوط رفيعة طويلة تدل على حذف الجزء الأوسط من الجسم كي يُرسم على ورقة أصغر.','assets/line-types.svg');
add(2,'Phantom lines','Which pattern characterizes phantom lines in the lecture?',[ 'Long dashes alternating with pairs of short dashes', 'Only short equal dashes', 'A continuous thick line', 'A thick wavy line' ],0,'The lecture defines phantom lines as thin lines composed of long dashes alternating with pairs of small dashes.','تعرّف المحاضرة الخطوط الوهمية بأنها خطوط رفيعة تتكون من شرطات طويلة تتناوب مع أزواج من الشرطات القصيرة.','assets/line-types.svg');
add(2,'Leader lines','Which lines should not be parallel to leader lines, according to the lecture?',[ 'Dimension, extension and section lines', 'Visible outlines only', 'Hidden lines only', 'Border lines only' ],0,'The leader-line slide states that dimension, extension and section lines should not be parallel to leader lines.','تذكر شريحة الخطوط الإرشادية أن خطوط الأبعاد والامتداد والمقاطع ينبغي ألا تكون موازية للخطوط الإرشادية.','assets/line-types.svg');
add(2,'Center lines','How should a centre line continue in relation to the object?',[ 'It should extend a short distance beyond the object or feature', 'It must stop exactly at the object boundary', 'It should be drawn as a thick continuous outline', 'It should end with arrowheads' ],0,'The lecture says centre lines should continue a short distance beyond the object or feature.','تذكر المحاضرة أن خط المركز ينبغي أن يمتد مسافة قصيرة خارج الجسم أو الخاصية.','assets/line-types.svg');
add(2,'Section lines','At what angle are section lines drawn in the supplied lecture?',[ '45°', '30°', '60°', '90°' ],0,'The section-line slide specifies a thin line drawn at 45 degrees.','تحدد شريحة خطوط المقاطع رسم خط رفيع بزاوية 45 درجة.','assets/line-types.svg');
add(2,'Visible/object lines','Which line should be selected to show an edge visible in the current view?',[ 'Visible/object line', 'Hidden line', 'Phantom line', 'Break line' ],0,'Visible/object lines represent features that can be seen in the current view and are shown as dark, thick lines.','تمثل خطوط الأجسام الظاهرة الخصائص التي يمكن رؤيتها في المنظور الحالي، وتُرسم بخطوط داكنة سميكة.','assets/line-types.svg');
add(2,'Symmetry lines','A symmetry line is used primarily to represent:',[ 'An axis of symmetry in a view', 'A dimension value', 'The location of a cutting plane only', 'The outline of a hidden feature' ],0,'The lecture says a symmetry line acts as the axis of symmetry of a particular view.','تذكر المحاضرة أن خط التماثل يعمل محورًا للتماثل في منظور معين.','assets/line-types.svg');
addBlank(2,'Visible/object lines','The outline of a feature that can be seen in the current view is drawn with a ______ line.', ['visible/object', 'hidden', 'phantom', 'break'],0,'Visible/object lines show features that can be seen in the current view.','تُظهر خطوط الأجسام الظاهرة الخصائص التي يمكن رؤيتها في المنظور الحالي.','assets/line-types.svg');
addBlank(2,'Section lines','In a sectional view, hatching represents the material cut by the ______.', ['cutting plane', 'title block', 'extension line', 'centre line'],0,'Section lines indicate material surfaces cut through by a cutting plane.','تشير خطوط التهشير إلى أسطح المادة التي يقطعها مستوى القطع.','assets/line-types.svg');
addBlank(2,'Leader lines','A ______ line connects a note or symbol to a feature on a drawing.', ['leader', 'hidden', 'symmetry', 'break'],0,'Leader lines connect notes, dimensions, symbols or item numbers to drawing features.','تصل الخطوط الإرشادية الملاحظات والأبعاد والرموز وأرقام العناصر بالخصائص في الرسم.','assets/line-types.svg');
addTF(2,'Visible/object lines','Visible/object lines are described as dark and thick in the lecture.',true,'The visible-line slide describes them as dark, thick lines outlining visible features.','تصف شريحة الخطوط الظاهرة هذه الخطوط بأنها داكنة وسميكة وتحدد الخصائص المرئية.','assets/line-types.svg');
addTF(2,'Hidden lines','Hidden lines are continuous, thick lines used to show visible outlines.',false,'The lecture describes hidden lines as light, narrow, short and dashed; visible outlines use dark, thick lines.','تصف المحاضرة الخطوط المخفية بأنها خفيفة ورفيعة وقصيرة ومتقطعة؛ أما الحدود الظاهرة فتستخدم خطوطًا داكنة سميكة.','assets/line-types.svg');
addTF(2,'Center lines','Centre lines use alternating long and short dashes.',true,'This alternating long-short pattern is stated in the centre-line section.','يذكر قسم خطوط المركز هذا النمط المتناوب من الشرطات الطويلة والقصيرة.','assets/line-types.svg');
addTF(2,'Dimension lines','Dimension lines use arrowheads at their ends and leave room for the dimension number.',true,'The lecture describes dimension lines as thin lines with arrowheads, broken along their length to make room for the dimension number.','تصف المحاضرة خطوط الأبعاد بأنها خطوط رفيعة ذات رؤوس أسهم، ويُترك فيها موضع لرقم البعد.','assets/line-types.svg');
addTF(2,'Extension lines','The lecture says extension lines begin 1.5 mm away from the object.',true,'The stated starting gap is 1.5 mm.','المسافة الابتدائية المذكورة في المحاضرة هي 1.5 مم.','assets/line-types.svg');
addTF(2,'Cutting-plane lines','Cutting-plane arrows point toward the sectioned view.',false,'The lecture says the arrows point away from the sectioned view.','تذكر المحاضرة أن الأسهم تتجه بعيدًا عن المنظر المقطوع.','assets/line-types.svg');
addTF(2,'Break lines','Long break lines are described as long, thin lines.',true,'The lecture uses long, thin lines to indicate a removed central section.','تستخدم المحاضرة خطوطًا طويلة ورفيعة للدلالة على حذف جزء مركزي.','assets/line-types.svg');
addTF(2,'Phantom lines','Phantom lines can show alternate positions of moving parts.',true,'The lecture lists alternate locations of moving parts as one function of phantom lines.','تذكر المحاضرة تمثيل المواضع البديلة للأجزاء المتحركة إحدى وظائف الخطوط الوهمية.','assets/line-types.svg');
addTF(2,'Leader lines','Leader lines are used to connect a note to a feature on a drawing.',true,'This is the stated application of leader lines in Chapter 2.','هذا هو الاستخدام المذكور للخطوط الإرشادية في الفصل الثاني.','assets/line-types.svg');
addMatching(2,'Line-type identification','Match each line type with its main application.',[
 ['Visible/object line','Shows features visible in the current view'],
 ['Hidden line','Shows features that cannot be seen in the current view'],
 ['Centre line','Marks the centre of circles or axes of symmetry'],
 ['Dimension line','Indicates the size of a feature']
],'These are the applications listed in the Chapter 2 line-type table.','هذه هي الاستخدامات الواردة في جدول أنواع الخطوط في الفصل الثاني.','assets/line-types.svg');
addMatching(2,'Line-type appearance','Match each line type with the appearance described in the lecture.',[
 ['Hidden line','Light, narrow, short dashes'],
 ['Section line','Thin hatching at 45 degrees'],
 ['Short break line','Thick wavy line'],
 ['Phantom line','Long dashes alternating with pairs of short dashes']
],'Each description follows the line-appearance definitions in Chapter 2.','يتبع كل وصف تعريف مظهر الخط الوارد في الفصل الثاني.','assets/line-types.svg');


// Chapter 3 — 2-D Geometric Shapes, projections and views
add(3,'Projection theory','In orthographic projection, the projection lines are:',[ 'Parallel and normal to the plane of projection', 'Convergent and curved', 'Always oblique to the plane', 'Unrelated to the plane of projection' ],0,'The lecture identifies orthographic projection as parallel projection with projection lines normal to the plane.','تحدد المحاضرة الإسقاط المتعامد بأنه إسقاط متوازٍ تكون فيه خطوط الإسقاط عمودية على المستوى.','assets/orthographic-views.svg');
add(3,'Views','Which statement distinguishes multiview drawing from an axonometric drawing in the lecture?',[ 'Multiview drawing shows 2-D views; axonometric drawing shows a virtual 3-D view', 'Multiview drawing is always a physical model', 'Axonometric drawing shows only dimensions', 'Both are written descriptions' ],0,'The lecture describes multiview drawing as a 2D view and axonometric drawing as a virtual 3D view.','تصف المحاضرة الرسم متعدد المساقط بأنه منظر ثنائي الأبعاد، والرسم الأكسونومتري بأنه منظر ثلاثي الأبعاد افتراضي.','assets/orthographic-views.svg');
add(3,'First/third angle','In the first-angle projection symbol shown in the course, where is the circular end view placed relative to the frustum?', [ 'To the right of the frustum', 'To the left of the frustum', 'Directly above the frustum', 'Below the title block' ],0,'The course’s first-angle symbol places the circular end view to the right of the frustum.','يضع رمز الزاوية الأولى في المقرر المنظر الدائري النهائي إلى يمين مخروط الإسقاط.','assets/projection-first-third.svg');
add(3,'First/third angle','In the third-angle projection symbol shown in the course, where is the circular end view placed relative to the frustum?', [ 'To the left of the frustum', 'To the right of the frustum', 'Directly above the frustum', 'Below the title block' ],0,'The course’s third-angle symbol places the circular end view to the left of the frustum.','يضع رمز الزاوية الثالثة في المقرر المنظر الدائري النهائي إلى يسار مخروط الإسقاط.','assets/projection-first-third.svg');
add(3,'Circle','Which statement about a circle’s diameter is stated in the lecture?',[ 'It is the largest chord of the circle', 'It is always shorter than the radius', 'It does not pass through the centre', 'It is a curved line on the circumference' ],0,'The geometric-shapes material explicitly states that the diameter is the biggest chord.','تذكر مادة الأشكال الهندسية صراحةً أن القطر هو أكبر وتر في الدائرة.','assets/shapes-2d.svg');
add(3,'Triangle','What is the sum of the interior angles of a triangle?',[ '180°', '90°', '270°', '360°' ],0,'The Chapter 3 material states that the three angles of a triangle sum to 180 degrees.','تذكر مادة الفصل الثالث أن مجموع زوايا المثلث الثلاث يساوي 180 درجة.','assets/shapes-2d.svg');
add(3,'Polygons','What is the sum of the interior angles of a regular pentagon according to the lecture table?',[ '540°', '360°', '720°', '1080°' ],0,'The polygon table gives 540 degrees as the sum of a pentagon’s interior angles.','يعطي جدول المضلعات 540 درجة مجموعًا للزوايا الداخلية للخماسي.','assets/shapes-2d.svg');
add(3,'Polygons','What is the sum of the interior angles of a hexagon according to the lecture table?',[ '720°', '540°', '900°', '1080°' ],0,'The polygon table gives 720 degrees as the sum of a hexagon’s interior angles.','يعطي جدول المضلعات 720 درجة مجموعًا للزوايا الداخلية للسداسي.','assets/shapes-2d.svg');
add(3,'Polygons','Which polygon has ten sides?',[ 'Decagon', 'Octagon', 'Heptagon', 'Pentagon' ],0,'The Chapter 3 table defines a decagon as a polygon with ten sides.','يعرّف جدول الفصل الثالث العشاري بأنه مضلع له عشرة أضلاع.','assets/shapes-2d.svg');
add(3,'Square','Which statement about a square’s diagonals matches the lecture?',[ 'They are equal and bisect each other at right angles', 'They are unequal and parallel', 'They do not bisect each other', 'They are curved' ],0,'The lecture states that square diagonals are equal and bisect each other at right angles.','تذكر المحاضرة أن قطري المربع متساويان وينصف كل منهما الآخر بزاوية قائمة.','assets/shapes-2d.svg');
add(3,'Rectangle','Which property of a rectangle’s diagonals is given in the lecture?',[ 'They are equal and bisect each other', 'They are always perpendicular', 'They are curved', 'They never meet' ],0,'The geometric-shapes table says rectangle diagonals are equal and bisect each other.','يذكر جدول الأشكال الهندسية أن قطري المستطيل متساويان وينصف كل منهما الآخر.','assets/shapes-2d.svg');
add(3,'Rhombus','Which property is stated for the diagonals of a rhombus?',[ 'They bisect each other at right angles', 'They are always equal and parallel', 'They do not bisect the angles', 'They are curved' ],0,'The lecture states that rhombus diagonals bisect each other at right angles.','تذكر المحاضرة أن قطري المعين ينصف كل منهما الآخر بزاوية قائمة.','assets/shapes-2d.svg');
add(3,'Trapezium','According to the lecture, a trapezium has:',[ 'One pair of opposite sides parallel and the other pair not parallel', 'All four sides equal', 'Two pairs of equal parallel sides in every case', 'No straight sides' ],0,'The supplied table defines a trapezium as a quadrilateral with one pair of opposite sides parallel and the other pair not parallel.','يعرّف الجدول شبه المنحرف بأنه شكل رباعي له زوج واحد من الأضلاع المتقابلة المتوازية والزوج الآخر غير متوازٍ.','assets/shapes-2d.svg');
add(3,'3D shapes in Chapter 3','Which 3-D shape has two circular bases connected by a curved surface and no vertex?',[ 'Cylinder', 'Cone', 'Cuboid', 'Sphere' ],0,'The Chapter 3 table describes a cylinder as having two circular bases joined by a curved surface and no vertex.','يصف جدول الفصل الثالث الأسطوانة بأن لها قاعدتين دائريتين تصل بينهما سطح منحنٍ ولا تحتوي على رأس.','assets/shapes-2d.svg');
add(3,'3D shapes in Chapter 3','Which solid is described as having a circular base and an apex?',[ 'Cone', 'Cylinder', 'Cuboid', 'Sphere' ],0,'The lecture describes a cone as having a circular base and a top called the apex or vertex.','تصف المحاضرة المخروط بأن له قاعدة دائرية وقمة تسمى Apex أو Vertex.','assets/shapes-2d.svg');
add(3,'3D shapes in Chapter 3','How many faces, vertices and edges does a cuboid have according to the lecture table?',[ '6 faces, 8 vertices and 12 edges', '6 faces, 6 vertices and 8 edges', '8 faces, 12 vertices and 6 edges', '4 faces, 4 vertices and 6 edges' ],0,'The Chapter 3 table lists 6 faces, 8 vertices and 12 edges for a cuboid.','يسرد جدول الفصل الثالث 6 أوجه و8 رؤوس و12 حرفًا لمتوازي المستطيلات.','assets/shapes-2d.svg');
addBlank(3,'Projection theory','The imaginary ray between the observer’s eye and the object is the line of ______.', ['sight', 'dimension', 'symmetry', 'extension'],0,'The lecture defines LOS as an imaginary ray between the observer’s eye and the object.','تعرّف المحاضرة خط النظر بأنه شعاع تخيلي بين عين المشاهد والجسم.','assets/orthographic-views.svg');
addBlank(3,'2D vs 3D','A 2-D drawing has length and breadth but no ______ or thickness.', ['depth', 'volume', 'vertex', 'radius'],0,'The lecture says 2D shapes have length and breadth but no depth or thickness.','تذكر المحاضرة أن الأشكال ثنائية الأبعاد لها طول وعرض دون عمق أو سماكة.','assets/shapes-2d.svg');
addBlank(3,'Polygons','A polygon with eight sides is called an ______.', ['octagon', 'hexagon', 'decagon', 'pentagon'],0,'The polygon table defines an octagon as a polygon with eight sides.','يعرّف جدول المضلعات الثماني بأنه مضلع له ثمانية أضلاع.','assets/shapes-2d.svg');
addBlank(3,'Circle','A line segment through the centre joining two points on the circle is the ______.', ['diameter', 'radius', 'arc', 'tangent'],0,'The lecture defines the diameter as a line segment through the centre joining two points on the circle.','تعرّف المحاضرة القطر بأنه قطعة مستقيمة تمر بالمركز وتصل بين نقطتين على الدائرة.','assets/shapes-2d.svg');
addTF(3,'2D vs 3D','A 2-D shape has depth and thickness.',false,'The lecture states that a 2D shape has length and breadth but no depth or thickness.','تذكر المحاضرة أن الشكل ثنائي الأبعاد له طول وعرض دون عمق أو سماكة.','assets/shapes-2d.svg');
addTF(3,'Projection theory','Projection theory is used to represent a 3-D object graphically on a 2-D medium.',true,'This is the stated purpose of projection theory in the supplied chapter.','هذا هو الهدف المذكور لنظرية الإسقاط في الفصل المرفق.','assets/orthographic-views.svg');
addTF(3,'Views','An axonometric drawing presents a virtual 3-D view of an object.',true,'The chapter contrasts an axonometric virtual 3D view with multiview 2D views.','يقارن الفصل بين المنظر الثلاثي الأبعاد الافتراضي في الرسم الأكسونومتري والمناظر الثنائية الأبعاد في الرسم متعدد المساقط.','assets/orthographic-views.svg');
addTF(3,'First/third angle','The lecture says first-angle projection is more common in Europe.',true,'The first/third-angle slide gives this regional usage statement.','تذكر شريحة الزاويتين أن الإسقاط بالزاوية الأولى أكثر شيوعًا في أوروبا.','assets/projection-first-third.svg');
addTF(3,'First/third angle','The supplied slide says third-angle projection is widely used in the USA and the UK.',true,'This is stated in the first/third-angle comparison slide.','هذا مذكور في شريحة المقارنة بين الزاويتين الأولى والثالثة.','assets/projection-first-third.svg');
addTF(3,'Triangle','The sum of the three interior angles of a triangle is 360°.',false,'The Chapter 3 material gives the sum as 180 degrees.','تحدد مادة الفصل الثالث مجموع زوايا المثلث بثلاث زوايا يساوي 180 درجة.','assets/shapes-2d.svg');
addTF(3,'Rectangle','The diagonals of a rectangle are equal and bisect each other.',true,'This property is given in the geometric-shapes table.','هذه الخاصية واردة في جدول الأشكال الهندسية.','assets/shapes-2d.svg');
addTF(3,'Circle','The diameter is the largest chord of a circle.',true,'The lecture explicitly identifies the diameter as the biggest chord.','تحدد المحاضرة القطر صراحةً بأنه أكبر وتر في الدائرة.','assets/shapes-2d.svg');
addTF(3,'3D shapes in Chapter 3','A cylinder has a vertex at its top.',false,'The Chapter 3 table says a cylinder has no vertex.','يذكر جدول الفصل الثالث أن الأسطوانة لا تحتوي على رأس.','assets/shapes-2d.svg');
addMatching(3,'Geometric properties','Match each 2-D shape with the property stated in the lecture.',[
 ['Square','All sides equal; all angles are 90 degrees'],
 ['Rectangle','Opposite sides equal and parallel; all angles are 90 degrees'],
 ['Parallelogram','Opposite sides equal and parallel'],
 ['Rhombus','A parallelogram with all sides equal']
],'Each pairing follows the definitions in the Chapter 3 geometric-shapes table.','يتبع كل تطابق التعريف الوارد في جدول الأشكال الهندسية في الفصل الثالث.','assets/shapes-2d.svg');
addMatching(3,'Projection vocabulary','Match each projection term with its definition.',[
 ['Line of sight (LOS)','An imaginary ray between the observer’s eye and the object'],
 ['Plane of projection','An imaginary flat plane onto which the image is projected'],
 ['Multiview drawing','A drawing that shows 2-D views of an object'],
 ['Axonometric drawing','A drawing that shows a virtual 3-D view of an object']
],'These definitions are taken from the projection and views slides in Chapter 3.','هذه التعريفات مأخوذة من شرائح الإسقاط والمناظر في الفصل الثالث.','assets/orthographic-views.svg');




// Chapter 4 — Platonic Solids
add(4,'General properties','Which set of properties defines a Platonic solid in the supplied chapter?',[ 'A convex regular polyhedron with congruent regular polygon faces and the same number of faces meeting at each vertex', 'Any 3-D object with curved faces', 'A flat 2-D polygon', 'A solid whose faces are all different shapes' ],0,'The chapter defines Platonic solids as convex regular polyhedra made of congruent regular polygon faces, with the same number of faces meeting at every vertex.','يعرّف الفصل المجسمات الأفلاطونية بأنها متعددات وجوه منتظمة محدبة تتكون من أوجه مضلعة منتظمة متطابقة، ويلتقي العدد نفسه من الأوجه عند كل رأس.','assets/platonic-solids.svg');
add(4,'General properties','According to the chapter, how do the faces of a Platonic solid meet?',[ 'They do not intersect except along their edges', 'They overlap across their interiors', 'They meet only at the centre', 'They are curved and disconnected' ],0,'One listed property says Platonic-solid faces do not intersect except at their edges.','تذكر إحدى الخصائص أن أوجه المجسمات الأفلاطونية لا تتقاطع إلا عند أحرفها.','assets/platonic-solids.svg');
add(4,'Tetrahedron','Which description of a regular tetrahedron matches the chapter?',[ 'Four equilateral-triangle faces, six edges and four vertices', 'Six square faces, twelve edges and eight vertices', 'Eight triangular faces, twelve edges and six vertices', 'Twelve pentagonal faces, thirty edges and twenty vertices' ],0,'The tetrahedron has four triangular faces, six edges and four vertices; in the regular form its faces are equilateral triangles.','يتكون رباعي الوجوه من أربعة أوجه مثلثة وستة أحرف وأربعة رؤوس؛ وتكون أوجهه في الشكل المنتظم مثلثات متساوية الأضلاع.','assets/platonic-solids.svg');
add(4,'Tetrahedron','Which special property of the tetrahedron is stated in the supplied material?',[ 'It has no parallel faces', 'It has six square faces', 'It has twelve pentagonal faces', 'It has twenty vertices' ],0,'The Chapter 4 material specifically states that a tetrahedron has no parallel faces.','تذكر مادة الفصل الرابع تحديدًا أن رباعي الوجوه لا يحتوي على أوجه متوازية.','assets/platonic-solids.svg');
add(4,'Cube','What is another name for a cube given in the chapter?',[ 'Regular hexahedron', 'Regular octahedron', 'Triangular pyramid', 'Icosahedron' ],0,'The supplied chapter calls the cube a regular hexahedron.','يسمي الفصل المرفق المكعب متعدد السطوح السداسي المنتظم.','assets/platonic-solids.svg');
add(4,'Cube','How many faces meet at each vertex of a cube?',[ 'Three', 'Two', 'Four', 'Six' ],0,'The cube section says each vertex meets three faces and three edges.','يذكر قسم المكعب أن ثلاثة أوجه وثلاثة أحرف تلتقي عند كل رأس.','assets/platonic-solids.svg');
add(4,'Octahedron','How many edges meet at each vertex of an octahedron, according to the chapter?',[ 'Four', 'Three', 'Five', 'Six' ],0,'The octahedron section says four edges meet at each vertex.','يذكر قسم ثماني الوجوه أن أربعة أحرف تلتقي عند كل رأس.','assets/platonic-solids.svg');
add(4,'Dodecahedron','Which polygon forms each face of a regular dodecahedron?',[ 'Pentagon', 'Triangle', 'Square', 'Hexagon' ],0,'The chapter describes the dodecahedron as having 12 pentagonal faces.','يصف الفصل الاثني عشري الوجوه بأنه يتكون من 12 وجهًا خماسيًا.','assets/platonic-solids.svg');
add(4,'Dodecahedron','How many edges and vertices does a dodecahedron have in the supplied chapter?',[ '30 edges and 20 vertices', '12 edges and 12 vertices', '20 edges and 30 vertices', '6 edges and 4 vertices' ],0,'The chapter lists 30 edges and 20 vertices for a dodecahedron.','يسرد الفصل 30 حرفًا و20 رأسًا للاثني عشري الوجوه.','assets/platonic-solids.svg');
add(4,'Icosahedron','Which combination describes an icosahedron in the supplied chapter?',[ '20 faces, 30 edges and 12 vertices', '12 faces, 30 edges and 20 vertices', '8 faces, 12 edges and 6 vertices', '4 faces, 6 edges and 4 vertices' ],0,'The chapter lists 20 faces, 30 edges and 12 vertices for the icosahedron.','يسرد الفصل 20 وجهًا و30 حرفًا و12 رأسًا للعشريني الوجوه.','assets/platonic-solids.svg');
add(4,'Icosahedron','Which distinction is attributed to the icosahedron in the chapter?',[ 'It has the greatest number of faces among the five Platonic solids', 'It has the fewest faces', 'Its faces are pentagons', 'It has no vertices' ],0,'The chapter states that the icosahedron has the greatest number of faces of any Platonic solid.','يذكر الفصل أن العشريني الوجوه يملك أكبر عدد من الأوجه بين المجسمات الأفلاطونية.','assets/platonic-solids.svg');
add(4,'Platonic-solid associations','Which solid is associated with fire in the chapter’s account of Plato’s associations?',[ 'Tetrahedron', 'Cube', 'Octahedron', 'Dodecahedron' ],0,'The chapter associates the tetrahedron with fire.','يربط الفصل رباعي الوجوه بالنار.','assets/platonic-solids.svg');
add(4,'Platonic-solid associations','Which solid is associated with air?',[ 'Octahedron', 'Tetrahedron', 'Cube', 'Icosahedron' ],0,'The chapter associates the octahedron with air.','يربط الفصل ثماني الوجوه بالهواء.','assets/platonic-solids.svg');
add(4,'Platonic-solid associations','Which solid is associated with the universe?',[ 'Dodecahedron', 'Cube', 'Icosahedron', 'Tetrahedron' ],0,'The chapter associates the dodecahedron with the universe.','يربط الفصل الاثني عشري الوجوه بالكون.','assets/platonic-solids.svg');
add(4,'Existence of five solids','Which angle condition is listed on the proof slide for the faces meeting at a vertex?',[ 'Their total is less than 360°', 'Their total is greater than 360°', 'Their total is exactly 360°', 'Their total is always 180°' ],0,'The proof slide states that the internal angles meeting at a vertex are less than 360 degrees; its table illustrates totals below 360 degrees for the five solids.','تذكر شريحة البرهان أن مجموع الزوايا الداخلية التي تلتقي عند الرأس أقل من 360 درجة، ويوضح جدولها مجاميع أقل من 360 درجة للمجسمات الخمسة.','assets/platonic-solids.svg');
add(4,'Euler relation','A solid has 6 faces, 8 vertices and 12 edges. Using the relation demonstrated in the chapter, what is F + V − E?',[ '2', '0', '4', '6' ],0,'The chapter’s worked examples show F + V − E = 2; here 6 + 8 − 12 = 2.','توضح أمثلة الفصل أن F + V − E = 2؛ وفي هذه المسألة 6 + 8 − 12 = 2.','assets/platonic-solids.svg');
addBlank(4,'Platonic solids','The cube is also known as a regular ______.', ['hexahedron', 'tetrahedron', 'octahedron', 'icosahedron'],0,'The chapter identifies the cube as a regular hexahedron.','يحدد الفصل المكعب بأنه متعدد سطوح سداسي منتظم.','assets/platonic-solids.svg');
addBlank(4,'Platonic solids','The ______ has 20 faces, 30 edges and 12 vertices.', ['icosahedron', 'dodecahedron', 'octahedron', 'tetrahedron'],0,'The chapter lists these counts for the icosahedron.','يسرد الفصل هذه الأعداد للعشريني الوجوه.','assets/platonic-solids.svg');
addTF(4,'General properties','All faces of a Platonic solid are regular and congruent.',true,'The chapter lists regular and congruent faces as a defining property.','يسرد الفصل انتظام الأوجه وتطابقها ضمن الخصائص التعريفية.','assets/platonic-solids.svg');
addTF(4,'General properties','Platonic solids are concave polyhedra according to the supplied chapter.',false,'The chapter states that Platonic solids are convex polyhedra.','يذكر الفصل أن المجسمات الأفلاطونية متعددة سطوح محدبة.','assets/platonic-solids.svg');
addTF(4,'Tetrahedron','A tetrahedron has four faces, six edges and four vertices.',true,'These counts are listed in the tetrahedron section.','هذه الأعداد واردة في قسم رباعي الوجوه.','assets/platonic-solids.svg');
addTF(4,'Cube','The angle between any two adjacent faces of a cube is 90°.',true,'The cube section states that the angle between any two faces is 90 degrees.','يذكر قسم المكعب أن الزاوية بين أي وجهين تساوي 90 درجة.','assets/platonic-solids.svg');
addTF(4,'Octahedron','An octahedron has six faces and eight vertices.',false,'The chapter lists eight faces and six vertices for an octahedron.','يسرد الفصل ثمانية أوجه وستة رؤوس لثماني الوجوه.','assets/platonic-solids.svg');
addTF(4,'Dodecahedron','Three edges meet at each vertex of a dodecahedron.',true,'This property is stated in the dodecahedron section.','هذه الخاصية مذكورة في قسم الاثني عشري الوجوه.','assets/platonic-solids.svg');
addTF(4,'Icosahedron','The icosahedron consists of equilateral-triangle faces.',true,'The chapter describes the icosahedron’s faces as equilateral triangles.','يصف الفصل أوجه العشريني الوجوه بأنها مثلثات متساوية الأضلاع.','assets/platonic-solids.svg');
addTF(4,'Euler relation','The worked example in Chapter 4 evaluates F + V − E as 2.',true,'The dodecahedron example calculates 12 + 20 − 30 = 2.','يحسب مثال الاثني عشري الوجوه 12 + 20 − 30 = 2.','assets/platonic-solids.svg');
addTF(4,'Existence of five solids','The supplied proof slide states that the internal angles meeting at a vertex exceed 360°.',false,'The proof slide states that the total is less than 360 degrees.','تذكر شريحة البرهان أن المجموع أقل من 360 درجة.','assets/platonic-solids.svg');
addMatching(4,'Platonic-solid properties','Match each Platonic solid with its face shape.',[
 ['Tetrahedron','Equilateral triangles'],
 ['Cube','Squares'],
 ['Dodecahedron','Pentagons'],
 ['Icosahedron','Equilateral triangles with 20 faces']
],'The pairings follow the face descriptions in Chapter 4.','تتبع المطابقات أوصاف الأوجه الواردة في الفصل الرابع.','assets/platonic-solids.svg');
addMatching(4,'Platonic-solid associations','Match each solid with the element associated with it in the chapter.',[
 ['Tetrahedron','Fire'],
 ['Cube','Earth'],
 ['Octahedron','Air'],
 ['Icosahedron','Water']
],'These associations are listed in the introductory slides of Chapter 4.','هذه الارتباطات واردة في الشرائح التمهيدية للفصل الرابع.','assets/platonic-solids.svg');


// Visual multiple-choice projection questions. Diagrams are answer-neutral SVG choices.
function addProjection(question, options, correct, en, ar, topic, sourcePage) {
 const q={id:++questionId,chapter:3,topic,type:'mcq',question,
   options:options.map((_,i)=>`View ${String.fromCharCode(65+i)}`),
   optionImages:options,correct,explanationEn:en,explanationAr:ar,
   image:'assets/projection-object.svg',sourcePage};
 questionsDB[3].push(q);
}
addProjection('Study the isometric object. Which option represents its TOP (PLAN) view?',[
 'assets/projection-top-a.svg','assets/projection-top-b.svg','assets/projection-top-c.svg'
],1,'From above, the stepped shape projects to an outer rectangle with an interior L-shaped division, corresponding to option B. Compare the changes in height and their footprint, not the isometric slanted edges.','عند النظر من الأعلى يظهر المحيط الخارجي مستطيلاً مع تقسيم داخلي على شكل حرف L، وهو الخيار B. اعتمد على امتداد الأسطح من الأعلى لا على الخطوط المائلة في الرسم المنظوري.','Orthographic projection — top view',15);
addProjection('Study the isometric object. Which option represents its FRONT ELEVATION?',[
 'assets/projection-front-a.svg','assets/projection-front-b.svg','assets/projection-front-c.svg'
],0,'From the indicated front orientation, the outline is stepped, with the taller segment on one side and the base extending across the width, corresponding to option A.','عند النظر من الاتجاه الأمامي المحدد يظهر محيط متدرج بارتفاع أكبر في أحد الجانبين وقاعدة ممتدة، وهو الخيار A.','Orthographic projection — front view',15);
addProjection('Study the isometric object. Which option represents its RIGHT-SIDE view?',[
 'assets/projection-side-a.svg','assets/projection-side-b.svg','assets/projection-side-c.svg'
],1,'The right-side elevation reduces depth into a flat profile showing the tall rectangle and the horizontal height change, matching option B.','عند الإسقاط من الجانب الأيمن يُختزل العمق في مسقط مسطح يظهر الشكل المستطيلي المرتفع وخط تغير الارتفاع، وهو الخيار B.','Orthographic projection — right-side view',15);
// Additional unique source-supported fact: tetrahedron face shape.
add(4,'Tetrahedron','What shape are the faces of a regular tetrahedron?',[ 'Equilateral triangles', 'Squares', 'Regular pentagons', 'Circles' ],0,'The Chapter 4 material identifies the tetrahedron as a solid with four equilateral-triangle faces.','تحدد مادة الفصل الرابع رباعي الوجوه بأنه مجسم أوجهه الأربعة مثلثات متساوية الأضلاع.','assets/platonic-solids.svg');

// Deduplicate repeated factual targets across MCQ, True/False, Fill-in and Matching.
// Projection questions are intentionally exempt when the view/object/diagram differs.
const duplicateQuestionIds = new Set([
  // Chapter 1: retain the stronger or more informative version of each fact.
  13, 35, 40, 44, 53, 54,
  56, 57, 58, 59, 60, 61, 63, 65, 67,
  242, 244, 245, 246, 247, 248, 249, 250, 251, 253, 254, 256, 257, 258, 259, 260, 261, 263, 264, 266, 267, 268, 269,
  // Chapter 2: remove the generic line-type review set and repeated facts.
  71, 77, 80, 93,
  ...Array.from({length: 22}, (_, i) => 105 + i),
  ...Array.from({length: 22}, (_, i) => 270 + i),
  293, 294, 295, 296,
  // Chapter 3: repeated text questions; keep the original questions and the distinct projection diagrams.
  185, 191, 192,
  ...Array.from({length: 28}, (_, i) => 297 + i),
  326, 327,
  // Chapter 4: repeated definitions, counts, associations, visual repeats and duplicate Euler checks.
  196, 197,
  237, 238, 239, 240, 241,
  328, 329, 330, 331,
  ...Array.from({length: 24}, (_, i) => 333 + i)
]);
for (const chapter of Object.keys(questionsDB)) {
  questionsDB[chapter] = questionsDB[chapter].filter(q => !duplicateQuestionIds.has(q.id));
}
// Keep some source-supported format variety without duplicating the tested fact.
const blankRewrites = new Map([
  [62, 'AS stands for ______ in the Chapter 1 standards table.'],
  [64, 'DIN stands for ______ in the Chapter 1 standards table.'],
  [66, 'ISO stands for ______ in the Chapter 1 standards table.'],
  [89, 'The thickness of a cutting-plane line in the supplied lecture is ______.'],
  [90, 'A cutting-plane line extends approximately ______ beyond the edge of the object.'],
  [252, 'CAD stands for ______.'],
  [332, 'A cube is also known as a regular ______.'],
  [360, 'The faces of a regular tetrahedron are ______ triangles.']
]);
for (const questions of Object.values(questionsDB)) {
  for (const q of questions) {
    if (blankRewrites.has(q.id)) {
      q.question = blankRewrites.get(q.id);
      q.type = 'blank';
    }
  }
}
// Paper-drawing tasks are excluded from the online exam.
for (const chapter of Object.keys(questionsDB)) {
  questionsDB[chapter] = questionsDB[chapter].filter(q => q.type !== 'drawing');
}
// Reassign contiguous IDs after curation so saved question indexes remain clean.
let curatedId = 0;
for (const chapter of Object.keys(questionsDB)) {
  for (const q of questionsDB[chapter]) q.id = ++curatedId;
}
questionId = curatedId;

// Attach only a neutral, unlabelled line-sample sheet to visual line-identification questions.
// It contains numbered line patterns but no line-type names or answer labels.
const neutralLineQuestions = new Set([
  'Which line type is conventionally represented by short, separated dashes?',
  'Which line type is conventionally represented by a thick wavy line?',
  'Which line type uses alternating long and short dashes?',
  'Which line type is typically drawn with arrowheads at both ends to indicate a size?',
  'Which line type represents a cut surface using diagonal hatching?'
]);
for (const questions of Object.values(questionsDB)) {
  for (const q of questions) {
    if (q.chapter === 2 && neutralLineQuestions.has(q.question)) q.image = 'assets/line-practice-blank.svg';
  }
}

// Validation: prevent answer-bearing reference sheets from appearing during questions.
// Only dedicated projection tasks may show an unlabelled isometric object and unlabelled view choices.
for (const [chapter, questions] of Object.entries(questionsDB)) {
  questions.forEach(q => {
    const invalidCore = q.chapter !== Number(chapter) || !q.explanationEn || !q.explanationAr || !q.topic || !q.question;
    const invalidChoice = ['mcq','tf','blank'].includes(q.type) && (!Array.isArray(q.options) || q.options[q.correct] === undefined);
    const invalidMatching = q.type === 'matching' && (!Array.isArray(q.pairs) || q.pairs.length < 3 || q.pairs.some(pair => !pair[0] || !pair[1]));
    const invalidDrawing = q.type === 'drawing' && (!q.image || q.options.length !== 0);
    const safeExamImages = new Set(['assets/projection-object.svg', 'assets/line-practice-blank.svg']);
    const unsafeImage = q.image && !safeExamImages.has(q.image);
    const lingeringDrawingTask = q.type === 'drawing';
    if (invalidCore || invalidChoice || invalidMatching || invalidDrawing || unsafeImage || lingeringDrawingTask) throw new Error('Invalid question record or unsafe image: ' + q.question);
  });
}

const chapterMeta = {
  1: { title: 'Introduction to Engineering Drawing & Tools', ar: 'مقدمة في الرسم الهندسي وأدواته', sourceFile: 'CHAPTER 1 Introduction to Engineering Drawing & Tools.pdf', icon: '✏️', time: 60, topics: 'Drawing language · standards · sheets · scales · instruments' },
  2: { title: 'Line Types', ar: 'أنواع الخطوط', sourceFile: 'ENG0023 CHAPTER 2.pdf', icon: '📐', time: 60, topics: 'Visible · hidden · section · dimension · break · phantom lines' },
  3: { title: '2-D Geometric Shapes & Projection', ar: 'الأشكال الهندسية ثنائية الأبعاد والإسقاط', sourceFile: 'CHAPTER 3 2-D Geometric Shapes.pdf', icon: '📏', time: 75, topics: '2D/3D · projection · views · polygons · geometric properties' },
  4: { title: 'Platonic Solids', ar: 'المجسمات الأفلاطونية', sourceFile: 'CHAPTER 4 PLATNOIC SOLIDS.pdf', icon: '🧊', time: 60, topics: 'Five solids · faces · edges · vertices · Euler relation' }
};

let currentChapter = null;
let currentQuestions = [];
let userAnswers = [];
let currentIndex = 0;
let timerInterval = null;
let quizDeadline = null;
let timeLeft = 0;
let quizActive = false;
let quizSubmitted = false;
let shuffledOptions = [];

const $ = id => document.getElementById(id);
const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const typeNames = {
  mcq: 'Multiple Choice',
  tf: 'True / False',
  blank: 'Fill in the Blank',
  matching: 'Matching',
  drawing: 'Drawing Exercise'
};

function goToHomePage() {
  $('pledgeScreen').hidden = true;
  playDrawingIntro();
}
function revealMain() {
  $('pledgeScreen').hidden = true;
  $('mainContent').hidden = false;
  initChapters();
  saveNavigationState();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function playDrawingIntro() {
  const intro=$('drawingIntro');
  if (!intro) { revealMain(); return; }
  intro.hidden=false;
  $('pledgeScreen').hidden=true;
  window.setTimeout(()=>{intro.hidden=true;revealMain()},1750);
}
function saveNavigationState() {
  try {
    if ($('mainContent').hidden) return;
    const page=!$('resultsScreen').hidden?'results':!$('quizScreen').hidden?'quiz':'home';
    sessionStorage.setItem('burhanNavigation_v2',JSON.stringify({page,currentChapter,currentIds:currentQuestions.map(q=>q.id),userAnswers,shuffledOptions,currentIndex,quizActive,quizSubmitted,deadline:quizDeadline,timeLeft:Number.isFinite(timeLeft)?timeLeft:"none"}));
  } catch(_){}
}

function initChapters() {
  const grid = $('chaptersGrid');
  grid.innerHTML = Object.entries(chapterMeta).map(([num, meta]) => {
    const count = questionsDB[num].length;
    const autoCount = questionsDB[num].filter(q => q.type !== 'drawing').length;
    const drawingCount = count - autoCount;
    return `<button class="chapter-card" type="button" onclick="startChapter(${num})">
      <span class="chapter-top"><span class="chapter-icon">${meta.icon}</span><span class="chapter-count">${count} سؤالًا</span></span>
      <span class="chapter-title-ar">الفصل ${num}</span><span class="chapter-title">${esc(meta.title)}</span>
      <span class="chapter-ar">${esc(meta.ar)}</span><span class="chapter-topics">${esc(meta.topics)}</span>
      <span class="chapter-footer"><span>⏱ ${meta.time} دقيقة · ${autoCount} سؤالًا مصححًا${drawingCount ? `` : ''}</span><span class="start-label">ابدأ المراجعة <b>←</b></span></span>
    </button>`;
  }).join('');
  $('totalQuestions').textContent = Object.values(questionsDB).reduce((n, qs) => n + qs.length, 0);
}
function shuffleArray(arr) {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
function settingChecked(id, fallback = false) {
  const el = $(id);
  return el ? el.checked : fallback;
}
function settingValue(id, fallback) {
  const el = $(id);
  return el ? el.value : fallback;
}
function launchQuiz(chapter) {
  if (quizActive && !confirm('هل تريد إنهاء الاختبار الحالي والبدء باختبار جديد؟')) return;
  stopTimer();
  currentChapter = Number(chapter);
  const shuffleQuestions = settingChecked('shuffleQuestionsSetting', true);
  const shuffleChoices = settingChecked('shuffleOptionsSetting', true);
  const limitValue = settingValue('questionCountSetting', 'all');
  let bank = [...questionsDB[currentChapter]];
  if (shuffleQuestions) bank = shuffleArray(bank);
  if (limitValue !== 'all') bank = bank.slice(0, Math.max(1, Number(limitValue) || bank.length));
  currentQuestions = bank;
  userAnswers = Array(currentQuestions.length).fill(null);
  shuffledOptions = currentQuestions.map(q => {
    if (q.type === 'drawing') return { options: [], correct: null, originalIndices: [] };
    const originalIndices = q.options.map((_, i) => i);
    const indices = shuffleChoices ? shuffleArray(originalIndices) : originalIndices;
    return {
      options: indices.map(i => q.options[i]),
      optionImages: q.optionImages ? indices.map(i => q.optionImages[i]) : null,
      correct: Number.isInteger(q.correct) ? indices.indexOf(q.correct) : null,
      originalIndices: indices
    };
  });
  currentIndex = 0;
  quizActive = true;
  quizSubmitted = false;
  const duration = settingValue('durationChoice', 'chapter');
  timeLeft = duration === 'none' ? Infinity : (duration === 'chapter' ? chapterMeta[currentChapter].time * 60 : Math.max(1, Number(duration) || chapterMeta[currentChapter].time) * 60);
  $('homeScreen').hidden = true;
  $('quizScreen').hidden = false;
  $('resultsScreen').hidden = true;
  renderQuestion();
  updateTimer();
  quizDeadline = Number.isFinite(timeLeft) && timeLeft > 0 ? Date.now()+timeLeft*1000 : null;
  if (duration !== 'none') timerInterval = setInterval(() => {
    if (!quizActive || quizSubmitted) return;
    timeLeft = quizDeadline ? Math.max(0,Math.ceil((quizDeadline-Date.now())/1000)) : timeLeft;
    updateTimer();
    if (Number.isFinite(timeLeft) && timeLeft <= 0) submitQuiz(true);
  }, 1000);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function stopTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = null;
}
function updateTimer() {
  if (!Number.isFinite(timeLeft)) { $('timer').textContent='∞'; $('timer').classList.remove('timer-warning'); return; }
  const m = Math.floor(Math.max(0, timeLeft) / 60);
  const s = Math.max(0, timeLeft) % 60;
  $('timer').textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  $('timer').classList.toggle('timer-warning', timeLeft <= 60);
}
function isAnsweredAt(index) {
  const q = currentQuestions[index];
  const answer = userAnswers[index];
  if (!q || answer === null || answer === undefined) return false;
  if (q.type === 'matching') return q.pairs.every((_, row) => answer && Number.isInteger(answer[row]));
  if (q.type === 'drawing') return answer === 'completed';
  return Number.isInteger(answer);
}
function answeredCount() {
  return currentQuestions.reduce((count, _, index) => count + (isAnsweredAt(index) ? 1 : 0), 0);
}
function updateProgress() {
  const answered = answeredCount();
  $('answeredCounter').textContent = `${answered} / ${currentQuestions.length}`;
  $('progressFill').style.width = `${currentQuestions.length ? answered / currentQuestions.length * 100 : 0}%`;
  $('nextBtn').disabled = false;
  $('nextBtn').textContent = currentIndex === currentQuestions.length - 1 ? 'عرض النتيجة' : 'التالي ←';
}
function renderQuestion() {
  if (!currentQuestions.length) return;
  const q = currentQuestions[currentIndex];
  const optSet = shuffledOptions[currentIndex];
  $('questionCounter').textContent = `${currentIndex + 1} / ${currentQuestions.length}`;
  $('chapterHeading').textContent = `Chapter ${currentChapter} · ${chapterMeta[currentChapter].title}`;
  $('questionMeta').innerHTML = `<span class="eyebrow">CHAPTER ${currentChapter}</span><span class="topic-chip">${esc(q.topic)}</span><span class="type-chip">${esc(typeNames[q.type] || 'Question')}</span>`;
  $('questionText').textContent = q.question;
  $('questionImageWrap').hidden = !q.image;
  $('questionImage').src = q.image || '';
  $('questionImage').alt = q.image ? `Course diagram for ${q.topic}` : '';
  $('questionImageCaption').textContent = q.image ? 'Study the course diagram carefully before answering. / تأمل الرسم قبل الإجابة.' : '';
  const answer = userAnswers[currentIndex];
  if (q.type === 'matching') {
    $('optionsList').innerHTML = renderMatching(q, optSet, answer);
  } else if (q.type === 'drawing') {
    $('optionsList').innerHTML = `<div class="drawing-task-note" dir="rtl"><strong>تمرين عملي</strong><p>نفّذ الرسم على الورق، ثم اضغط على زر «أتممت الرسم» لتسجيل إنجاز التمرين. لا تُحتسب هذه التمارين آليًا ضمن الدرجة.</p></div><button type="button" class="button ${answer === 'completed' ? 'button-success' : 'button-primary'} drawing-complete" onclick="markDrawingComplete()">${answer === 'completed' ? '✓ تم تسجيل إتمام الرسم' : 'أتممت الرسم على الورق'}</button>`;
  } else if (q.type === 'blank') {
    $('optionsList').innerHTML = `<label class="blank-answer-label" for="blankAnswer">اختر الإجابة:</label><select id="blankAnswer" class="blank-answer-select" onchange="selectOption(this.value === '' ? null : Number(this.value))"><option value="">Select an answer</option>${optSet.options.map((opt, i) => `<option value="${i}" ${answer === i ? 'selected' : ''}>${String.fromCharCode(65+i)}. ${esc(opt)}</option>`).join('')}</select>`;
  } else {
    $('optionsList').innerHTML = optSet.options.map((opt, i) => {
      const selected = answer === i;
      return `<button type="button" class="option-card ${selected ? 'selected' : ''}" aria-pressed="${selected}" onclick="selectOption(${i})"><span class="option-letter">${String.fromCharCode(65+i)}</span><span class="option-text">${optSet.optionImages && optSet.optionImages[i] ? `<img class="projection-choice-img" src="${esc(optSet.optionImages[i])}" alt="Orthographic projection option ${String.fromCharCode(65+i)}" loading="lazy">` : esc(opt)}</span><span class="option-check">${selected ? '✓' : ''}</span></button>`;
    }).join('');
  }
  $('prevBtn').disabled = currentIndex === 0;
  updateProgress();
  renderQuestionPalette();
  saveNavigationState();
}
function renderMatching(q, optSet, answer) {
  const chosen = answer && typeof answer === 'object' ? answer : {};
  return `<div class="matching-instructions" dir="rtl">طابق كل مصطلح في العمود الأول مع التعريف الصحيح في العمود الثاني. جميع المصطلحات والتعريفات باللغة الإنجليزية.</div>
    <div class="matching-definition-bank"><h3>Column B — Definitions</h3><ol>${optSet.options.map((definition, i) => `<li><b>${String.fromCharCode(65+i)}.</b> ${esc(definition)}</li>`).join('')}</ol></div>
    <div class="matching-rows"><h3>Column A — Terms</h3>${q.pairs.map((pair, row) => `<label class="matching-row"><span><b>${row+1}.</b> ${esc(pair[0])}</span><select aria-label="Match ${esc(pair[0])}" onchange="selectMatchingOption(${row}, this.value)"><option value="">Select a definition</option>${optSet.options.map((definition, i) => `<option value="${i}" ${chosen[row] === i ? 'selected' : ''}>${String.fromCharCode(65+i)} — ${esc(definition)}</option>`).join('')}</select></label>`).join('')}</div>`;
}
function selectOption(index) {
  if (!quizActive || quizSubmitted) return;
  userAnswers[currentIndex] = Number.isInteger(index) ? index : null;
  renderQuestion();
  saveNavigationState();
}
function selectMatchingOption(row, rawValue) {
  if (!quizActive || quizSubmitted) return;
  if (!userAnswers[currentIndex] || typeof userAnswers[currentIndex] !== 'object') userAnswers[currentIndex] = {};
  if (rawValue === '') delete userAnswers[currentIndex][row];
  else userAnswers[currentIndex][row] = Number(rawValue);
  updateProgress();
}
function markDrawingComplete() {
  if (!quizActive || quizSubmitted) return;
  userAnswers[currentIndex] = 'completed';
  renderQuestion();
}
function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
function nextQuestion() {
  if (currentIndex < currentQuestions.length - 1) {
    currentIndex++;
    renderQuestion();
    window.scrollTo({top:0,behavior:'smooth'});
  } else {
    const missing=currentQuestions.filter((_,i)=>!isAnsweredAt(i)).length;
    if(missing && !confirm(`هناك ${missing} سؤالًا غير مجاب. هل تريد إنهاء الاختبار واحتسابها ضمن غير المجاب؟`)) return;
    submitQuiz(true);
  }
}
function goToQuestion(index) {
 if(!quizActive || index<0 || index>=currentQuestions.length)return;
 currentIndex=index;renderQuestion();
 window.scrollTo({top:0,behavior:'smooth'});
}
function renderQuestionPalette() {
 const el=$('questionPalette');if(!el)return;
 el.innerHTML=currentQuestions.map((q,i)=>`<button type="button" class="palette-number ${isAnsweredAt(i)?'answered':'unanswered'} ${i===currentIndex?'current':''}" aria-label="السؤال ${i+1}" aria-current="${i===currentIndex?'step':'false'}" onclick="goToQuestion(${i})">${i+1}</button>`).join('');
 if($('paletteAnsweredCount'))$('paletteAnsweredCount').textContent=answeredCount();
 if($('paletteUnansweredCount'))$('paletteUnansweredCount').textContent=currentQuestions.length-answeredCount();
}
function startChapter(chapter) {
  window.burhanPendingChapter=Number(chapter);
  const dialog=$('durationDialog');
  if(dialog && typeof dialog.showModal==='function')dialog.showModal();
  else confirmStartQuiz();
}
function cancelStartQuiz(){const dialog=$('durationDialog');if(dialog?.open)dialog.close();}
function confirmStartQuiz(){
 const chapter=window.burhanPendingChapter;
 cancelStartQuiz();if(chapter)launchQuiz(chapter);
}
function endQuizEarly() {
  if (confirm('هل تريد إنهاء الاختبار الآن؟ ستظهر الأسئلة غير المجاب عنها في المراجعة.')) submitQuiz(true);
}
function isCorrectAt(index) {
  const q = currentQuestions[index];
  const answer = userAnswers[index];
  const optSet = shuffledOptions[index];
  if (!q || q.type === 'drawing' || !isAnsweredAt(index)) return false;
  if (q.type !== 'matching') return answer === optSet.correct;
  return q.pairs.every((pair, row) => {
    const originalOptionIndex = q.options.indexOf(pair[1]);
    const expectedShuffledIndex = optSet.originalIndices.indexOf(originalOptionIndex);
    return answer[row] === expectedShuffledIndex;
  });
}
function formatUserAnswer(q, answer, optSet) {
  if (q.type === 'drawing') return answer === 'completed' ? 'Completed on paper / أُنجز على الورق' : 'Not marked as completed / لم يُسجل إتمام الرسم';
  if (answer === null || answer === undefined) return 'Not answered / لم تتم الإجابة';
  if (q.type === 'matching') return q.pairs.map((pair, row) => `${pair[0]} → ${Number.isInteger(answer[row]) ? (optSet.options[answer[row]] || '—') : '—'}`).join(' | ');
  return optSet.options[answer] ?? 'Not answered / لم تتم الإجابة';
}
function formatCorrectAnswer(q, optSet) {
  if (q.type === 'drawing') return 'Paper-based drawing task; use the guidance below. / تمرين رسم على الورق؛ راجع الإرشادات أدناه.';
  if (q.type === 'matching') return q.pairs.map(pair => `${pair[0]} → ${pair[1]}`).join(' | ');
  return optSet.options[optSet.correct];
}
function optionAnalysis(q, optSet) {
  if (q.type === 'drawing') return '';
  if (q.type === 'matching') {
    return `<div class="option-analysis"><h5>Correct matches</h5><ul>${q.pairs.map(pair => `<li><strong>${esc(pair[0])}</strong> — ${esc(pair[1])}</li>`).join('')}</ul></div>`;
  }
  const wrongOptions = optSet.options.map((option, i) => ({ option, i })).filter(item => item.i !== optSet.correct);
  if (!wrongOptions.length) return '';
  return `<div class="option-analysis"><h5>Why the other options do not fit</h5><ul>${wrongOptions.map(item => `<li><strong>${String.fromCharCode(65+item.i)}. ${esc(item.option)}</strong> — This choice does not match the specific definition, function or rule asked about in this question.</li>`).join('')}</ul></div>`;
}
function optionAnalysisArabic(q, optSet) {
  if (q.type === 'drawing') return '';
  if (q.type === 'matching') {
    return `<div class="option-analysis" dir="rtl"><h5>المطابقات الصحيحة</h5><ul>${q.pairs.map(pair => `<li><strong>${esc(pair[0])}</strong> — ${esc(pair[1])}</li>`).join('')}</ul></div>`;
  }
  const wrongOptions = optSet.options.map((option, i) => ({ option, i })).filter(item => item.i !== optSet.correct);
  if (!wrongOptions.length) return '';
  return `<div class="option-analysis" dir="rtl"><h5>لماذا لا تناسب الخيارات الأخرى؟</h5><ul>${wrongOptions.map(item => `<li><strong>${String.fromCharCode(65+item.i)}. ${esc(item.option)}</strong> — لا يطابق هذا الخيار التعريف أو الوظيفة أو القاعدة المحددة التي يسأل عنها السؤال.</li>`).join('')}</ul></div>`;
}
function buildExplanation(q, optSet) {
  const drawingNoteEn = q.type === 'drawing' ? '<p><strong>Assessment note:</strong> This exercise is completed on paper and is not automatically graded. Use the source diagram and the chapter conventions to check your work.</p>' : '';
  const drawingNoteAr = q.type === 'drawing' ? '<p><strong>ملاحظة التصحيح:</strong> يُنفّذ هذا التمرين على الورق ولا يُصحّح آليًا. استخدم الرسم الأصلي واصطلاحات الفصل لمراجعة عملك.</p>' : '';
  return `<div class="explanation en"><h4>Detailed explanation — English</h4><p>${esc(q.explanationEn)}</p>${q.type !== 'drawing' ? `<p><strong>Reasoning:</strong> The correct answer follows the rule or definition stated in the relevant course topic, rather than relying on an unstated assumption.</p>${optionAnalysis(q,optSet)}` : drawingNoteEn}</div>
    <div class="explanation ar" dir="rtl" lang="ar"><h4>الشرح المفصل — العربية</h4><p>${esc(q.explanationAr)}</p>${q.type !== 'drawing' ? `<p><strong>التعليل:</strong> تعتمد الإجابة الصحيحة على القاعدة أو التعريف المذكور في موضوع المقرر ذي الصلة، لا على افتراض غير وارد في المادة.</p>${optionAnalysisArabic(q,optSet)}` : drawingNoteAr}</div>`;
}
function submitQuiz(automatic = false) {
  if (!quizActive || quizSubmitted) return;
  if (!automatic) {
    const firstMissing = currentQuestions.findIndex((_, i) => !isAnsweredAt(i));
    if (firstMissing >= 0) {
      currentIndex = firstMissing;
      renderQuestion();
      showToast('أكمل جميع الأسئلة قبل عرض النتيجة.');
      return;
    }
  }
  quizSubmitted = true;
  quizActive = false;
  stopTimer();
  const rows = currentQuestions.map((q, i) => ({
    q,
    i,
    selected: userAnswers[i],
    isAnswered: isAnsweredAt(i),
    isCorrect: q.type === 'drawing' ? null : isCorrectAt(i),
    opts: shuffledOptions[i]
  }));
  const autoRows = rows.filter(row => row.q.type !== 'drawing');
  const drawingRows = []; 
  const correct = autoRows.filter(row => row.isAnswered && row.isCorrect).length;
  const blank = autoRows.filter(row => !row.isAnswered).length;
  const wrong = autoRows.length - correct - blank;
  const score = autoRows.length ? Math.round(correct / autoRows.length * 100) : 0;
  $('quizScreen').hidden = true;
  $('resultsScreen').hidden = false;
  $('resultScore').textContent = `${score}%`;
  $('resultCorrect').textContent = correct;
  $('resultWrong').textContent = wrong;
  $('resultBlank').textContent = blank;
  $('resultTotal').textContent = rows.length;
  $('resultAutoTotal').textContent = autoRows.length;
  const drawingCounter=$('resultDrawing'); if(drawingCounter) drawingCounter.textContent = 0;
  $('resultChapterTitle').textContent = `Chapter ${currentChapter} · ${chapterMeta[currentChapter].title}`;
  $('resultMessage').textContent = automatic ? 'انتهى الاختبار تلقائيًا بسبب انتهاء الوقت أو اختيار الإنهاء المبكر. راجع الشرح ومصدر كل سؤال أدناه.' : 'اكتمل الاختبار. يمكنك مراجعة الإجابة والتعليل بالإنجليزية والعربية ومصدر كل سؤال أدناه.';
  $('reviewList').innerHTML = rows.map((row, idx) => {
    const q = row.q;
    const state = q.type === 'drawing' ? 'drawing' : !row.isAnswered ? 'unanswered' : row.isCorrect ? 'correct' : 'wrong';
    const status = q.type === 'drawing' ? 'Drawing task / تمرين رسم' : !row.isAnswered ? 'غير مجاب' : row.isCorrect ? 'صحيحة / Correct' : 'خاطئة / Incorrect';
    const image = q.image ? `<img class="review-image" src="${esc(q.image)}" alt="Course diagram for review question ${idx+1}">` : '';
    const candidateImages = row.opts.optionImages ? `<div class="review-choice-grid">${row.opts.optionImages.map((src,i)=>`<figure><img src="${esc(src)}" alt="Projection option ${String.fromCharCode(65+i)}"><figcaption>${String.fromCharCode(65+i)}${i===row.opts.correct?' — Correct':''}</figcaption></figure>`).join('')}</div>` : ''; 
    const meta = chapterMeta[q.chapter];
    const pageText = q.sourcePage ? ` · PDF page ${q.sourcePage}` : '';
    const source = `<div class="review-meta"><strong>Source / المصدر:</strong> ${esc(meta.sourceFile)} · <strong>Chapter ${q.chapter}:</strong> ${esc(meta.title)} · <strong>Topic:</strong> ${esc(q.topic)}${pageText}</div>`;
    const userAnswer = formatUserAnswer(q, row.selected, row.opts);
    const correctAnswer = formatCorrectAnswer(q, row.opts);
    return `<details class="review-item ${state}" ${idx < 3 ? 'open' : ''}>
      <summary><span class="review-num">${idx+1}</span><span class="review-question">${esc(q.question)}</span><span class="review-status">${status}</span></summary>
      <div class="review-body">${source}${image}${candidateImages}
        <p><b>Your answer / إجابتك:</b> ${esc(userAnswer)}</p>
        <p><b>Correct answer / الإجابة الصحيحة:</b> ${esc(correctAnswer)}</p>
        ${buildExplanation(q,row.opts)}
      </div></details>`;
  }).join('');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function returnHome() {
  if (quizActive && !confirm('العودة ستنهي الاختبار الحالي. هل تريد المتابعة؟')) return;
  stopTimer();
  quizActive = false;
  quizSubmitted = false;
  $('resultsScreen').hidden = true;
  $('quizScreen').hidden = true;
  $('homeScreen').hidden = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function showToast(message) {
  const toast = $('toast');
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(showToast.handle);
  showToast.handle = setTimeout(() => { toast.hidden = true; }, 3000);
}
function showReviewFilter(filter) {
  document.querySelectorAll('[data-review-filter]').forEach(btn => btn.classList.toggle('active', btn.dataset.reviewFilter === filter));
  document.querySelectorAll('.review-item').forEach(item => {
    item.hidden = filter === 'all' ? false : !item.classList.contains(filter);
  });
}
window.addEventListener('pagehide',saveNavigationState);
document.addEventListener('DOMContentLoaded', () => {
  $('pledgeScreen').hidden = false;
  $('mainContent').hidden = true;
  initChapters();
  const isReload = (performance.getEntriesByType('navigation')[0]?.type === 'reload');
  if (isReload) {
    try {
      const saved=JSON.parse(sessionStorage.getItem('burhanNavigation_v2')||'null');
      if(saved) {
        $('pledgeScreen').hidden=true;
        $('mainContent').hidden=false;
        if(saved.page === 'quiz' && saved.currentIds?.length){
          currentChapter=saved.currentChapter;
          currentQuestions=saved.currentIds.map(id=>Object.values(questionsDB).flat().find(q=>q.id===id)).filter(Boolean);
          if(currentQuestions.length===saved.currentIds.length){
            userAnswers=saved.userAnswers; shuffledOptions=saved.shuffledOptions;
            currentIndex=Math.min(saved.currentIndex,currentQuestions.length-1);
            timeLeft=saved.deadline?Math.max(0,Math.ceil((saved.deadline-Date.now())/1000)):saved.timeLeft;
            quizActive=true;quizSubmitted=false;
            $('homeScreen').hidden=true; $('quizScreen').hidden=false; $('resultsScreen').hidden=true;
            renderQuestion();
            updateTimer();
            if(Number.isFinite(timeLeft) && timeLeft<=0)submitQuiz(true);
            else {
              quizDeadline=saved.deadline;
              if (Number.isFinite(timeLeft)) timerInterval=setInterval(()=>{
                if(!quizActive)return;
                if(quizDeadline) timeLeft=Math.max(0,Math.ceil((quizDeadline-Date.now())/1000));
                updateTimer(); if(Number.isFinite(timeLeft) && timeLeft<=0)submitQuiz(true);
              },1000);
            }
          }
        } else if(saved.page==='results' && saved.currentIds?.length){
          currentChapter=saved.currentChapter;
          currentQuestions=saved.currentIds.map(id=>Object.values(questionsDB).flat().find(q=>q.id===id)).filter(Boolean);
          userAnswers=saved.userAnswers;shuffledOptions=saved.shuffledOptions;
          quizActive=true;quizSubmitted=false;
          submitQuiz(true);
        }
      }
    }catch(_){ $('pledgeScreen').hidden=false;$('mainContent').hidden=true; }
  }else{ sessionStorage.removeItem('burhanNavigation_v2'); }
  document.querySelectorAll('[data-review-filter]').forEach(btn => btn.addEventListener('click', () => showReviewFilter(btn.dataset.reviewFilter)));
});

// Preserve screen on refresh without introducing account-based login.
document.addEventListener('click',()=>setTimeout(saveNavigationState,0));
document.addEventListener('change',()=>setTimeout(saveNavigationState,0));
