// ============================================
// ملف: script.js
// الموقع: اختبارات برهان - Engineering Drawing
// ============================================

// ============================================
// الدوال الأساسية - يجب أن تكون في البداية
// ============================================

function goToHomePage() {
    // إخفاء شاشة التعهد
    const pledgeScreen = document.getElementById('pledgeScreen');
    const mainContent = document.getElementById('mainContent');
    
    if (pledgeScreen && mainContent) {
        pledgeScreen.style.display = 'none';
        mainContent.style.display = 'block';
        initChapters();
        showMessage('✓ تم التحقق - مرحباً بك في اختبارات برهان');
    } else {
        console.error("لم يتم العثور على العناصر");
    }
}

function showMessage(text) {
    const msg = document.createElement('div');
    msg.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #00d4ff;
        color: #0a1929;
        padding: 15px 40px;
        border-radius: 50px;
        z-index: 10001;
        font-size: 18px;
        font-weight: bold;
        box-shadow: 0 5px 20px rgba(0,212,255,0.3);
        border: 2px solid white;
    `;
    msg.textContent = text;
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 3000);
}

function initChapters() {
    const grid = document.getElementById('chaptersGrid');
    if (!grid) return;
    
    const chaptersInfo = {
        1: { icon: '📘', title: 'الفصل الأول', name: 'Introduction to Engineering Drawing', questions: 50, time: '40 دقيقة' },
        2: { icon: '📗', title: 'الفصل الثاني', name: 'Line Types', questions: 60, time: '50 دقيقة' },
        3: { icon: '📙', title: 'الفصل الثالث', name: '2D Geometric Shapes', questions: 45, time: '35 دقيقة' },
        4: { icon: '📕', title: 'الفصل الرابع', name: 'Platonic Solids', questions: 45, time: '35 دقيقة' },
        5: { icon: '💻', title: 'الفصل الخامس', name: 'AutoCAD Basics', questions: 30, time: '30 دقيقة' },
        6: { icon: '🛠️', title: 'الفصل السادس', name: 'AutoCAD Modify Commands', questions: 30, time: '30 دقيقة' }
    };
    
    grid.innerHTML = Object.keys(chaptersInfo).map(num => {
        const ch = chaptersInfo[num];
        return `
            <div class="chapter-card" onclick="startChapter(${num})">
                <div class="chapter-icon">${ch.icon}</div>
                <h3>${ch.title}</h3>
                <div style="font-size: 18px; color: #0a1929; margin-bottom: 10px;">${ch.name}</div>
                <div class="questions">📝 ${ch.questions} سؤال</div>
                <div class="time">⏱️ ${ch.time}</div>
                <div class="chapter-preview">
                    <span>📐</span><span>📏</span><span>✏️</span>
                </div>
            </div>
        `;
    }).join('');
}

// ============================================
// بنك الأسئلة الكامل
// ============================================

const questionsDB = {
    // الفصل الأول: Introduction to Engineering Drawing (50 سؤال)
    1: [
        { question: "Drawing can be created by:", options: ["Freehand sketch", "Using drawing instruments", "Using computer", "All of the above"], correct: 3 },
        { question: "First angle projection is more common in:", options: ["USA", "UK", "Asia", "Africa"], correct: 1 },
        { question: "Third angle projection is more common in:", options: ["USA", "UK", "Europe", "Australia"], correct: 0 },
        { question: "What is the main purpose of engineering drawing?", options: ["Express emotions", "Convey technical information", "Create art", "Decorate spaces"], correct: 1 },
        { question: "Which of the following is NOT a type of engineering drawing?", options: ["Artistic drawing", "Technical drawing", "Mechanical drawing", "Civil drawing"], correct: 0 },
        { question: "Dimension numbers in a drawing represent:", options: ["The scaled size", "The true size", "The estimated size", "The approximate size"], correct: 1 },
        { question: "What does the 'B' in HB pencil scale stand for?", options: ["Hardness", "Blackness", "Brightness", "Blueness"], correct: 1 },
        { question: "What does the 'H' in HB pencil scale stand for?", options: ["Hardness", "Blackness", "Height", "Heat"], correct: 0 },
        { question: "Engineering drawing is considered as:", options: ["Art form", "Graphical language", "Music notation", "Literary work"], correct: 1 },
        { question: "Which of the following is an element of engineering drawing?", options: ["Graphics language", "Word language", "Both A and B", "None of the above"], correct: 2 },
        { question: "The purpose of artistic drawing is to:", options: ["Convey emotion", "Show exact measurements", "Display technical details", "Show manufacturing process"], correct: 0 },
        { question: "Which standard drawing code is internationally recognized?", options: ["ISO", "ABC", "XYZ", "123"], correct: 0 },
        { question: "Engineering drawing instruments are used to make the drawing:", options: ["Precise", "Colorful", "Large", "Small"], correct: 0 },
        { question: "What is GSM in paper measurement?", options: ["Grams per square meter", "Giant size measure", "Graphic standard method", "General scale measurement"], correct: 0 },
        { question: "Which type of paper is best for finished artwork?", options: ["Sketch paper", "Drawing paper", "Newsprint", "Tissue paper"], correct: 1 },
        { question: "The 'H' in HB scale stands for:", options: ["Hardness", "Heavy", "Height", "Heat"], correct: 0 },
        { question: "The 'B' in HB scale stands for:", options: ["Blackness", "Brightness", "Blue", "Bold"], correct: 0 },
        { question: "Which pencil is harder: 2H or 2B?", options: ["2H", "2B", "Both same", "Cannot determine"], correct: 0 },
        { question: "Which pencil is darker: 4B or 2B?", options: ["4B", "2B", "Both same", "Cannot determine"], correct: 0 },
        { question: "Artistic drawing can be understood by:", options: ["Everyone", "Engineers only", "Artists only", "Designers only"], correct: 0 },
        { question: "Engineering drawing requires knowledge of:", options: ["Standards and scales", "Colors only", "Shading only", "Perspective only"], correct: 0 },
        { question: "ANSI stands for:", options: ["American National Standards Institute", "Asian National Standards Institute", "Australian National Standards Institute", "African National Standards Institute"], correct: 0 },
        { question: "JIS stands for:", options: ["Japanese Industrial Standards", "Joint International Standards", "Journal of Industrial Standards", "Java Integration System"], correct: 0 },
        { question: "BS stands for:", options: ["British Standards", "Basic Standards", "Blue Standards", "Back Side"], correct: 0 },
        { question: "The graphical language in engineering drawing describes:", options: ["Shape", "Size", "Material", "Cost"], correct: 0 },
        { question: "The word language in engineering drawing describes:", options: ["Size and specifications", "Shape only", "Color only", "Texture only"], correct: 0 },
        { question: "Features of an object in engineering drawing include:", options: ["Surface and edge", "Color and texture", "Weight and density", "Cost and material"], correct: 0 },
        { question: "Conventional drawing tools include:", options: ["Pencils and compass", "Computer and mouse", "Printer and scanner", "All of the above"], correct: 0 },
        { question: "Digital drawing tools include:", options: ["CAD software", "Pencils", "Paper", "Eraser"], correct: 0 },
        { question: "CAD stands for:", options: ["Computer Aided Design", "Computer Assisted Drawing", "Creative Art Design", "Central Application Database"], correct: 0 },
        { question: "The main advantage of digital media is:", options: ["Editability and efficiency", "Lower cost", "Better quality", "Easier to learn"], correct: 0 },
        { question: "Sketch paper weight ranges from:", options: ["30-60 lbs", "70-100 lbs", "100-150 lbs", "150-200 lbs"], correct: 0 },
        { question: "Drawing paper weight is at least:", options: ["80 lbs", "40 lbs", "20 lbs", "10 lbs"], correct: 0 },
        { question: "Cold press paper has:", options: ["Some texture", "Very smooth surface", "Very rough surface", "Glossy surface"], correct: 0 },
        { question: "Hot press paper has:", options: ["Smooth texture", "Rough texture", "Medium texture", "No texture"], correct: 0 },
        { question: "Markers work best on:", options: ["Smooth papers", "Rough papers", "Textured papers", "Newsprint"], correct: 0 },
        { question: "Pastels work best on:", options: ["Rough paper", "Smooth paper", "Glossy paper", "Coated paper"], correct: 0 },
        { question: "Newsprint paper is used for:", options: ["Ball point pens", "Water colors", "Oil paints", "Acrylic paints"], correct: 0 },
        { question: "Cartridge paper weight range is:", options: ["80-200 gsm", "200-300 gsm", "300-400 gsm", "400-500 gsm"], correct: 0 },
        { question: "Acid free paper prevents:", options: ["Yellowing over time", "Tearing", "Fading", "Wrinkling"], correct: 0 },
        { question: "A3 paper size is commonly used for:", options: ["Title blocks", "Small sketches", "Business cards", "Stamps"], correct: 0 },
        { question: "Title block contains:", options: ["Student name and ID", "Drawing only", "Colors only", "Pictures only"], correct: 0 },
        { question: "Engineering drawing is essential for:", options: ["Manufacturing", "Painting", "Sculpting", "Singing"], correct: 0 },
        { question: "Machine drawing is used by:", options: ["Mechanical engineers", "Civil engineers", "Electrical engineers", "Software engineers"], correct: 0 },
        { question: "Building drawing is used by:", options: ["Civil engineers", "Mechanical engineers", "Electrical engineers", "Chemical engineers"], correct: 0 },
        { question: "Circuit diagrams are used by:", options: ["Electrical engineers", "Civil engineers", "Mechanical engineers", "Architects"], correct: 0 },
        { question: "Computer graphics are used by:", options: ["All engineers", "Only designers", "Only artists", "Only programmers"], correct: 0 },
        { question: "The purpose of engineering drawing is to provide information about:", options: ["Size, shape, and material", "Color only", "Price only", "Weight only"], correct: 0 },
        { question: "Engineering drawing is a:", options: ["Two-dimensional representation", "Three-dimensional model", "One-dimensional line", "Four-dimensional concept"], correct: 0 },
        { question: "The art of representing engineering objects is called:", options: ["Engineering drawing", "Artistic drawing", "Abstract drawing", "Modern art"], correct: 0 }
    ],

    // الفصل الثاني: Line Types (60 سؤال)
    2: [
        { question: "What type of line shows visible edges of an object?", options: ["Hidden line", "Visible line", "Center line", "Phantom line"], correct: 1 },
        { question: "Hidden lines are represented by:", options: ["Continuous thick line", "Dashed line", "Chain line", "Wavy line"], correct: 1 },
        { question: "Center lines are used to show:", options: ["Center of circles", "Hidden edges", "Visible edges", "Cutting planes"], correct: 0 },
        { question: "Which line type is part of a dimension?", options: ["Break lines", "Phantom lines", "Extension lines", "Cutting plane lines"], correct: 2 },
        { question: "Extension lines should start from the object at:", options: ["0 mm", "1.5 mm", "5 mm", "10 mm"], correct: 1 },
        { question: "Section lines (hatching) are drawn at what angle?", options: ["30°", "45°", "60°", "90°"], correct: 1 },
        { question: "Cutting plane lines show:", options: ["Hidden features", "Where a section is cut", "Center of objects", "Dimensions"], correct: 1 },
        { question: "Phantom lines are used to show:", options: ["Visible edges", "Alternate positions of moving parts", "Center of circles", "Dimensions"], correct: 1 },
        { question: "Break lines are used to:", options: ["Show dimensions", "Save drawing space", "Show center", "Show hidden edges"], correct: 1 },
        { question: "Leader lines connect:", options: ["Two points", "Notes to features", "Two circles", "Two lines"], correct: 1 },
        { question: "Visible outline is represented by:", options: ["Continuous thick line", "Continuous thin line", "Dashed line", "Chain line"], correct: 0 },
        { question: "Center line is represented by:", options: ["Continuous thick line", "Continuous thin line", "Dashed line", "Chain thin line"], correct: 3 },
        { question: "Symmetry lines are used as:", options: ["Axis of symmetry", "Cutting plane", "Hidden edge", "Dimension line"], correct: 0 },
        { question: "Which line type is thick and black?", options: ["Visible lines", "Center lines", "Hidden lines", "Phantom lines"], correct: 0 },
        { question: "Dimension lines have at their ends:", options: ["Circles", "Arrowheads", "Squares", "Triangles"], correct: 1 },
        { question: "Long break lines are represented by:", options: ["Thick wavy line", "Long thin lines", "Dashed lines", "Chain lines"], correct: 1 },
        { question: "Short break lines are represented by:", options: ["Thick wavy line", "Long thin lines", "Dashed lines", "Chain lines"], correct: 0 },
        { question: "In section views, what do section lines represent?", options: ["Center of object", "Material cut through", "Hidden features", "Dimensions"], correct: 1 },
        { question: "Cutting plane lines extend past the edge by:", options: ["6 mm", "1 mm", "10 mm", "15 mm"], correct: 0 },
        { question: "Cutting plane lines have arrows pointing:", options: ["Away from section view", "Toward section view", "Both directions", "No arrows"], correct: 0 },
        { question: "Phantom lines are composed of:", options: ["Long dashes and small dashes", "Only dots", "Only dashes", "Continuous line"], correct: 0 },
        { question: "Phantom lines are used to show:", options: ["Repetitive details", "Visible edges", "Hidden edges", "Center lines"], correct: 0 },
        { question: "Cylindrical break lines are:", options: ["Thin lines", "Thick lines", "Dashed lines", "Chain lines"], correct: 0 },
        { question: "Dimension lines should not be crossed by:", options: ["Extension lines", "Visible lines", "Hidden lines", "Center lines"], correct: 0 },
        { question: "Hidden lines should meet at:", options: ["Corners", "Midpoints", "Ends", "Centers"], correct: 0 },
        { question: "Center lines should extend beyond the object:", options: ["Short distance", "Long distance", "Not extend", "Half the size"], correct: 0 },
        { question: "Section lines are also called:", options: ["Hatching", "Dimension lines", "Hidden lines", "Visible lines"], correct: 0 },
        { question: "The thickness of visible lines is:", options: ["Thick", "Thin", "Medium", "Variable"], correct: 0 },
        { question: "The thickness of hidden lines is:", options: ["Thin", "Thick", "Medium", "Very thick"], correct: 0 },
        { question: "The thickness of center lines is:", options: ["Thin", "Thick", "Very thick", "Extra thick"], correct: 0 },
        { question: "Arrowheads are used on:", options: ["Dimension lines", "Hidden lines", "Center lines", "Section lines"], correct: 0 },
        { question: "Extension lines begin at a distance of:", options: ["1.5 mm from object", "0 mm from object", "5 mm from object", "10 mm from object"], correct: 0 },
        { question: "Extension lines extend beyond dimension line by:", options: ["3 mm", "1 mm", "5 mm", "10 mm"], correct: 0 },
        { question: "Leader lines should not be parallel to:", options: ["Dimension lines", "Visible lines", "Hidden lines", "Center lines"], correct: 0 },
        { question: "Cutting plane lines are:", options: ["Thick dashed lines", "Thin continuous lines", "Thick continuous lines", "Thin dashed lines"], correct: 0 },
        { question: "The direction of sight for section view is shown by:", options: ["Arrows", "Dots", "Circles", "Squares"], correct: 0 },
        { question: "Break lines are used to reveal:", options: ["Interior features", "Exterior features", "Dimensions", "Notes"], correct: 0 },
        { question: "Symmetry lines are also called:", options: ["Axis of symmetry", "Center lines", "Hidden lines", "Visible lines"], correct: 0 },
        { question: "Phantom lines show relationship between:", options: ["Elements that fit together", "Hidden features", "Visible edges", "Dimensions"], correct: 0 },
        { question: "Long break lines indicate:", options: ["Removed section", "Added section", "Hidden section", "Visible section"], correct: 0 },
        { question: "Short break lines are:", options: ["Thick wavy lines", "Thin straight lines", "Dashed lines", "Chain lines"], correct: 0 },
        { question: "Cylindrical break lines are used for:", options: ["Spherical parts", "Rectangular parts", "Triangular parts", "Square parts"], correct: 0 },
        { question: "The standard line types are used in:", options: ["Technical drawings", "Artistic drawings", "Abstract art", "Paintings"], correct: 0 },
        { question: "Line styles in CAD are called:", options: ["Linestyles", "Drawstyles", "Penstyles", "Artstyles"], correct: 0 },
        { question: "Hidden lines represent features that are:", options: ["Not visible", "Visible", "Cut", "Sectioned"], correct: 0 },
        { question: "Section lines represent surfaces cut by:", options: ["Cutting plane", "Visible plane", "Hidden plane", "Center plane"], correct: 0 },
        { question: "Center lines are made up of:", options: ["Alternating long and short dashes", "Only short dashes", "Only long dashes", "Continuous line"], correct: 0 },
        { question: "Dimension lines are broken for:", options: ["Dimension number", "Arrowheads", "Extension lines", "Notes"], correct: 0 },
        { question: "Extension lines show the extent of:", options: ["Dimension", "Object", "View", "Section"], correct: 0 },
        { question: "Leader lines are used to direct:", options: ["Dimensions and notes", "Only dimensions", "Only notes", "Only symbols"], correct: 0 },
        { question: "Cutting plane lines show location of:", options: ["Cutting planes", "Hidden features", "Visible features", "Center lines"], correct: 0 },
        { question: "Break lines separate sections for:", options: ["Clarity", "Confusion", "Decoration", "Art"], correct: 0 },
        { question: "Phantom lines are also used for:", options: ["Alternate position of parts", "Visible edges", "Hidden edges", "Center lines"], correct: 0 },
        { question: "Symmetry lines act as:", options: ["Axis of symmetry", "Cutting plane", "Hidden edge", "Visible edge"], correct: 0 },
        { question: "The thickness of cutting plane lines is:", options: ["0.6 mm", "0.1 mm", "0.2 mm", "0.3 mm"], correct: 0 },
        { question: "Cutting plane lines have line segments at:", options: ["90 degrees", "45 degrees", "30 degrees", "60 degrees"], correct: 0 },
        { question: "The arrows on cutting plane lines point:", options: ["Away from section view", "Toward section view", "Up", "Down"], correct: 0 },
        { question: "Phantom lines have pairs of:", options: ["Small dashes", "Large dashes", "Dots", "Circles"], correct: 0 },
        { question: "Long break lines are:", options: ["Long and thin", "Short and thick", "Dashed", "Chain"], correct: 0 },
        { question: "Short break lines are:", options: ["Thick and wavy", "Thin and straight", "Dashed", "Chain"], correct: 0 }
    ],

    // الفصل الثالث: 2D Geometric Shapes (45 سؤال)
    3: [
        { question: "What is a 2D shape?", options: ["Has length and width only", "Has length, width and height", "Has depth only", "Has volume"], correct: 0 },
        { question: "Which of the following is a 2D shape?", options: ["Cube", "Sphere", "Circle", "Cone"], correct: 2 },
        { question: "How many sides does a pentagon have?", options: ["4", "5", "6", "8"], correct: 1 },
        { question: "Sum of interior angles of a triangle is:", options: ["90°", "180°", "270°", "360°"], correct: 1 },
        { question: "A regular polygon has:", options: ["All sides equal", "All angles equal", "Both sides and angles equal", "No specific property"], correct: 2 },
        { question: "Which shape has four equal sides and four right angles?", options: ["Rectangle", "Square", "Rhombus", "Parallelogram"], correct: 1 },
        { question: "What is the sum of interior angles of a pentagon?", options: ["360°", "450°", "540°", "720°"], correct: 2 },
        { question: "An octagon has how many sides?", options: ["6", "7", "8", "9"], correct: 2 },
        { question: "Which of these is NOT a polygon?", options: ["Triangle", "Square", "Circle", "Pentagon"], correct: 2 },
        { question: "A hexagon has how many sides?", options: ["5", "6", "7", "8"], correct: 1 },
        { question: "In a right-angled triangle, one angle is:", options: ["30°", "45°", "60°", "90°"], correct: 3 },
        { question: "An equilateral triangle has:", options: ["Two equal sides", "All sides equal", "No equal sides", "One right angle"], correct: 1 },
        { question: "The interior angle of a regular pentagon is:", options: ["90°", "108°", "120°", "135°"], correct: 1 },
        { question: "A quadrilateral has how many sides?", options: ["3", "4", "5", "6"], correct: 1 },
        { question: "A heptagon has how many sides?", options: ["6", "7", "8", "9"], correct: 1 },
        { question: "A decagon has how many sides?", options: ["8", "9", "10", "11"], correct: 2 },
        { question: "A nonagon has how many sides?", options: ["7", "8", "9", "10"], correct: 2 },
        { question: "A dodecagon has how many sides?", options: ["10", "11", "12", "13"], correct: 2 },
        { question: "The sum of interior angles of a hexagon is:", options: ["540°", "630°", "720°", "810°"], correct: 2 },
        { question: "The sum of interior angles of an octagon is:", options: ["960°", "1040°", "1080°", "1120°"], correct: 2 },
        { question: "The sum of interior angles of a decagon is:", options: ["1260°", "1320°", "1440°", "1500°"], correct: 2 },
        { question: "An isosceles triangle has:", options: ["Two equal sides", "All sides equal", "No equal sides", "One right angle"], correct: 0 },
        { question: "A scalene triangle has:", options: ["All sides different", "Two equal sides", "All sides equal", "One right angle"], correct: 0 },
        { question: "An acute triangle has all angles:", options: ["Less than 90°", "Greater than 90°", "Equal to 90°", "More than 180°"], correct: 0 },
        { question: "An obtuse triangle has one angle:", options: ["Greater than 90°", "Less than 90°", "Equal to 90°", "Equal to 180°"], correct: 0 },
        { question: "A rectangle has opposite sides:", options: ["Equal and parallel", "Equal only", "Parallel only", "Different"], correct: 0 },
        { question: "A rhombus has all sides:", options: ["Equal", "Different", "Parallel", "Perpendicular"], correct: 0 },
        { question: "A parallelogram has opposite sides:", options: ["Parallel and equal", "Perpendicular", "Intersecting", "Curved"], correct: 0 },
        { question: "A trapezoid has how many parallel sides?", options: ["Two", "One", "Three", "Four"], correct: 1 },
        { question: "The diagonals of a square:", options: ["Are equal and bisect at 90°", "Are unequal", "Don't bisect", "Are parallel"], correct: 0 },
        { question: "The diagonals of a rectangle:", options: ["Are equal", "Are unequal", "Are perpendicular", "Are parallel"], correct: 0 },
        { question: "The diagonals of a rhombus:", options: ["Bisect at 90°", "Are equal", "Are parallel", "Don't bisect"], correct: 0 },
        { question: "A circle is defined by:", options: ["Center and radius", "Three points", "Diameter", "All of the above"], correct: 3 },
        { question: "The radius of a circle is:", options: ["Half the diameter", "Twice the diameter", "Equal to diameter", "None"], correct: 0 },
        { question: "A chord is:", options: ["Line connecting two points on circle", "Line from center to circle", "Line through center", "Curved line"], correct: 0 },
        { question: "The diameter is the:", options: ["Longest chord", "Shortest chord", "Radius", "Arc"], correct: 0 },
        { question: "An arc is:", options: ["Part of circle", "Whole circle", "Diameter", "Radius"], correct: 0 },
        { question: "A semi-circle is:", options: ["Half of circle", "Quarter of circle", "Full circle", "Arc"], correct: 0 },
        { question: "An ellipse is:", options: ["Oval shape", "Circle", "Square", "Triangle"], correct: 0 },
        { question: "2D shapes have:", options: ["Area only", "Volume only", "Both area and volume", "Neither"], correct: 0 },
        { question: "3D shapes have:", options: ["Volume", "Only area", "Only length", "Only width"], correct: 0 },
        { question: "A polygon with all sides equal is called:", options: ["Regular polygon", "Irregular polygon", "Complex polygon", "Simple polygon"], correct: 0 },
        { question: "A pentagon has how many diagonals?", options: ["5", "6", "7", "8"], correct: 0 },
        { question: "A hexagon has how many diagonals?", options: ["9", "10", "11", "12"], correct: 0 },
        { question: "An octagon has how many diagonals?", options: ["20", "18", "16", "14"], correct: 0 }
    ],

    // الفصل الرابع: Platonic Solids (45 سؤال)
    4: [
        { question: "How many Platonic solids exist?", options: ["3", "4", "5", "6"], correct: 2 },
        { question: "Which Platonic solid is associated with Earth?", options: ["Tetrahedron", "Cube", "Octahedron", "Icosahedron"], correct: 1 },
        { question: "Which Platonic solid is associated with Fire?", options: ["Tetrahedron", "Cube", "Octahedron", "Dodecahedron"], correct: 0 },
        { question: "Which Platonic solid is associated with Air?", options: ["Tetrahedron", "Cube", "Octahedron", "Icosahedron"], correct: 2 },
        { question: "Which Platonic solid is associated with Water?", options: ["Tetrahedron", "Cube", "Octahedron", "Icosahedron"], correct: 3 },
        { question: "Which Platonic solid is associated with the Universe?", options: ["Tetrahedron", "Cube", "Dodecahedron", "Icosahedron"], correct: 2 },
        { question: "How many faces does a tetrahedron have?", options: ["4", "6", "8", "12"], correct: 0 },
        { question: "How many faces does a cube have?", options: ["4", "6", "8", "12"], correct: 1 },
        { question: "How many faces does an octahedron have?", options: ["4", "6", "8", "12"], correct: 2 },
        { question: "How many faces does a dodecahedron have?", options: ["8", "10", "12", "20"], correct: 2 },
        { question: "How many faces does an icosahedron have?", options: ["8", "12", "20", "24"], correct: 2 },
        { question: "All faces of Platonic solids are:", options: ["Regular and congruent", "Irregular", "Different sizes", "Curved"], correct: 0 },
        { question: "Platonic solids are:", options: ["Concave", "Convex", "Both", "Neither"], correct: 1 },
        { question: "How many edges does a cube have?", options: ["8", "10", "12", "14"], correct: 2 },
        { question: "How many vertices does a tetrahedron have?", options: ["4", "6", "8", "10"], correct: 0 },
        { question: "According to Euler's formula, F + V - E = ?", options: ["0", "1", "2", "3"], correct: 2 },
        { question: "How many edges does a tetrahedron have?", options: ["4", "5", "6", "7"], correct: 2 },
        { question: "How many vertices does a cube have?", options: ["6", "8", "10", "12"], correct: 1 },
        { question: "How many edges does an octahedron have?", options: ["10", "11", "12", "13"], correct: 2 },
        { question: "How many vertices does an octahedron have?", options: ["4", "5", "6", "7"], correct: 2 },
        { question: "How many edges does a dodecahedron have?", options: ["20", "25", "30", "35"], correct: 2 },
        { question: "How many vertices does a dodecahedron have?", options: ["20", "25", "30", "35"], correct: 0 },
        { question: "How many edges does an icosahedron have?", options: ["20", "25", "30", "35"], correct: 2 },
        { question: "How many vertices does an icosahedron have?", options: ["10", "11", "12", "13"], correct: 2 },
        { question: "At each vertex of a tetrahedron, how many faces meet?", options: ["2", "3", "4", "5"], correct: 1 },
        { question: "At each vertex of a cube, how many faces meet?", options: ["2", "3", "4", "5"], correct: 1 },
        { question: "At each vertex of an octahedron, how many faces meet?", options: ["2", "3", "4", "5"], correct: 2 },
        { question: "At each vertex of a dodecahedron, how many faces meet?", options: ["2", "3", "4", "5"], correct: 1 },
        { question: "At each vertex of an icosahedron, how many faces meet?", options: ["3", "4", "5", "6"], correct: 2 },
        { question: "The faces of a tetrahedron are:", options: ["Triangles", "Squares", "Pentagons", "Hexagons"], correct: 0 },
        { question: "The faces of a cube are:", options: ["Triangles", "Squares", "Pentagons", "Hexagons"], correct: 1 },
        { question: "The faces of an octahedron are:", options: ["Triangles", "Squares", "Pentagons", "Hexagons"], correct: 0 },
        { question: "The faces of a dodecahedron are:", options: ["Triangles", "Squares", "Pentagons", "Hexagons"], correct: 2 },
        { question: "The faces of an icosahedron are:", options: ["Triangles", "Squares", "Pentagons", "Hexagons"], correct: 0 },
        { question: "A regular tetrahedron has faces that are:", options: ["Equilateral triangles", "Right triangles", "Isosceles triangles", "Scalene triangles"], correct: 0 },
        { question: "A cube has how many planes of symmetry?", options: ["6", "7", "8", "9"], correct: 3 },
        { question: "A tetrahedron has how many planes of symmetry?", options: ["4", "5", "6", "7"], correct: 2 },
        { question: "Which Platonic solid has no parallel faces?", options: ["Tetrahedron", "Cube", "Octahedron", "Dodecahedron"], correct: 0 },
        { question: "Which Platonic solid has the greatest volume for its surface area?", options: ["Tetrahedron", "Cube", "Dodecahedron", "Icosahedron"], correct: 3 },
        { question: "Which Platonic solid has the greatest number of faces?", options: ["Dodecahedron", "Icosahedron", "Octahedron", "Cube"], correct: 1 },
        { question: "How many diagonals does a dodecahedron have?", options: ["100", "120", "140", "160"], correct: 3 },
        { question: "The internal angle of a regular pentagon is:", options: ["108°", "120°", "135°", "150°"], correct: 0 },
        { question: "In a dodecahedron, how many edges meet at each vertex?", options: ["2", "3", "4", "5"], correct: 1 },
        { question: "In an icosahedron, how many edges meet at each vertex?", options: ["3", "4", "5", "6"], correct: 2 },
        { question: "Platonic solids are also called:", options: ["Regular polyhedra", "Irregular solids", "Complex solids", "Simple solids"], correct: 0 }
    ],

    // الفصل الخامس: AutoCAD Basics (30 سؤال) - محدث بأسئلتك الجديدة
    5: [
        { question: "What does AutoCAD stand for?", options: ["Automatic Computer Aided Design & Drafting", "Auto Control Design", "Advanced CAD", "None"], correct: 0 },
        { question: "AutoCAD was first released in:", options: ["1980", "1982", "1990", "2000"], correct: 1 },
        { question: "AutoCAD is developed by:", options: ["Microsoft", "Autodesk", "IBM", "Intel"], correct: 1 },
        { question: "AutoCAD is used for:", options: ["Playing games", "CAD design and drafting", "Writing documents", "Browsing"], correct: 1 },
        { question: "AutoCAD supports:", options: ["2D only", "3D only", "Both 2D and 3D", "None"], correct: 2 },
        { question: "First AutoCAD versions ran on:", options: ["Windows", "Linux", "DOS", "Mac"], correct: 2 },
        { question: "Model space is:", options: ["2D paper", "3D drawing area in real size", "Printing area", "Menu"], correct: 1 },
        { question: "Paper space is:", options: ["3D space", "Layout like paper", "Coding area", "Storage"], correct: 1 },
        { question: "Most drawings are done in:", options: ["Paper space", "Model space", "Layout", "View"], correct: 1 },
        { question: "AutoCAD drawings are:", options: ["Inaccurate", "Accurate and clean", "Hard to edit", "Slow"], correct: 1 },
        { question: "Manual drawing is:", options: ["Faster", "Less accurate", "Easier", "Automatic"], correct: 1 },
        { question: "AutoCAD allows:", options: ["Easy modification", "No editing", "Only printing", "Only saving"], correct: 0 },
        { question: "AutoCAD requires:", options: ["Pencil", "Computer system", "Only paper", "Scanner"], correct: 1 },
        { question: "Plotter is used for:", options: ["Input", "Printing drawings", "Coding", "Saving"], correct: 1 },
        { question: "Input device commonly used:", options: ["Plotter", "Mouse", "Printer", "CPU"], correct: 1 },
        { question: "Right-click shows:", options: ["Delete", "Shortcut menu", "Save", "Zoom"], correct: 1 },
        { question: "Commands can be entered using:", options: ["Command line", "Toolbars", "Menus", "All of the above"], correct: 3 },
        { question: "Command line is usually:", options: ["Top", "Bottom of screen", "Left", "Hidden"], correct: 1 },
        { question: "Autocomplete appears when:", options: ["Saving", "Typing command", "Printing", "Drawing"], correct: 1 },
        { question: "OSNAP is used for:", options: ["Zoom", "Precise point selection", "Coloring", "Printing"], correct: 1 },
        { question: "Absolute coordinates are:", options: ["Based on previous point", "From (0,0) origin", "Angle based", "Random"], correct: 1 },
        { question: "Absolute format is:", options: ["@X,Y", "X,Y", "@D<A", "None"], correct: 1 },
        { question: "Relative coordinates use:", options: ["X,Y", "@X,Y", "D<A", "None"], correct: 1 },
        { question: "Relative coordinates depend on:", options: ["Origin", "Previous point", "Angle", "Axis"], correct: 1 },
        { question: "Polar coordinates use:", options: ["X,Y", "Distance & angle", "Only angle", "Only distance"], correct: 1 },
        { question: "Polar format is:", options: ["@X,Y", "@D<A", "X,Y", "None"], correct: 1 },
        { question: "Example @10<90 means:", options: ["Right", "Up", "Left", "Down"], correct: 1 },
        { question: "In 2D drawing, unused axis is:", options: ["X", "Y", "Z", "None"], correct: 2 },
        { question: "0° direction is:", options: ["Right", "Up", "Left", "Down"], correct: 0 },
        { question: "180° direction is:", options: ["Right", "Left", "Up", "Down"], correct: 1 }
    ],

    // الفصل السادس: AutoCAD Modify Commands (30 سؤال) - محدث بأسئلتك الجديدة
    6: [
        { question: "LINE command is used to:", options: ["Draw circles", "Draw lines", "Delete", "Rotate"], correct: 1 },
        { question: "LINE shortcut:", options: ["L", "LN", "LI", "LE"], correct: 0 },
        { question: "LINE command works by:", options: ["One point", "Multiple points", "Radius", "Angle"], correct: 1 },
        { question: "CIRCLE command is used to:", options: ["Draw circles", "Draw lines", "Copy", "Move"], correct: 0 },
        { question: "Default circle method:", options: ["Diameter", "Center and radius", "3 points", "Arc"], correct: 1 },
        { question: "Circle can be created using:", options: ["Only radius", "Multiple methods", "Only diameter", "Only points"], correct: 1 },
        { question: "POLYLINE is:", options: ["Single line", "Connected segments", "Circle", "Arc"], correct: 1 },
        { question: "POLYLINE shortcut:", options: ["PL", "PO", "PN", "PY"], correct: 0 },
        { question: "POLYLINE creates:", options: ["Separate lines", "One object", "Circle", "Arc"], correct: 1 },
        { question: "RECTANGLE command:", options: ["Draws circle", "Draws closed rectangle", "Draws arc", "Deletes"], correct: 1 },
        { question: "RECTANGLE shortcut:", options: ["R", "REC", "RE", "RT"], correct: 1 },
        { question: "EXPLODE command:", options: ["Deletes object", "Breaks object into parts", "Moves", "Rotates"], correct: 1 },
        { question: "MOVE command:", options: ["Moves object", "Copies", "Deletes", "Rotates"], correct: 0 },
        { question: "COPY command:", options: ["Moves", "Duplicates objects", "Deletes", "Rotates"], correct: 1 },
        { question: "ROTATE command:", options: ["Moves", "Rotates object", "Deletes", "Copies"], correct: 1 },
        { question: "OFFSET command:", options: ["Deletes", "Creates parallel copies", "Rotates", "Moves"], correct: 1 },
        { question: "TRIM command:", options: ["Extends", "Cuts extra parts", "Copies", "Moves"], correct: 1 },
        { question: "EXTEND command:", options: ["Shortens", "Lengthens objects", "Deletes", "Copies"], correct: 1 },
        { question: "FILLET command:", options: ["Sharp edge", "Rounded corner", "Delete", "Move"], correct: 1 },
        { question: "CHAMFER command:", options: ["Curve", "Angled edge", "Circle", "Copy"], correct: 1 },
        { question: "ERASE command:", options: ["Copies", "Deletes object", "Rotates", "Offset"], correct: 1 },
        { question: "MODIFY toolbar is used for:", options: ["Drawing only", "Editing objects", "Printing", "Saving"], correct: 1 },
        { question: "TRIM removes:", options: ["Whole object", "Extra parts of object", "Layers", "Colors"], correct: 1 },
        { question: "OFFSET creates:", options: ["Circles", "Parallel objects", "Angles", "Points"], correct: 1 },
        { question: "ROTATE requires:", options: ["Radius", "Base point", "Length", "Axis"], correct: 1 },
        { question: "COPY creates:", options: ["One object", "Multiple duplicates", "Deletes", "Rotates"], correct: 1 },
        { question: "EXPLODE converts:", options: ["Lines to circle", "Object to separate parts", "Copy", "Rotate"], correct: 1 },
        { question: "RECTANGLE creates:", options: ["Open shape", "Closed polyline", "Circle", "Arc"], correct: 1 },
        { question: "POLYLINE is useful for:", options: ["Separate objects", "Continuous paths", "Printing", "Deleting"], correct: 1 },
        { question: "LINE command starts by:", options: ["Radius", "First point selection", "Angle", "Offset"], correct: 1 }
    ]
};

// أوقات الاختبار لكل فصل (بالثواني)
const chapterTimes = {
    1: 2400,
    2: 3000,
    3: 2100,
    4: 2100,
    5: 1800,
    6: 1800
};

// المتغيرات العامة
let currentChapter = 1;
let currentQuestions = [];
let userAnswers = [];
let currentIndex = 0;
let timerInterval = null;
let timeLeft = 0;
let quizActive = false;
let quizSubmitted = false;

// ============================================
// دوال الاختبار
// ============================================

function startChapter(chapter) {
    currentChapter = chapter;
    currentQuestions = questionsDB[chapter];
    userAnswers = new Array(currentQuestions.length).fill(null);
    currentIndex = 0;
    quizActive = true;
    quizSubmitted = false;
    timeLeft = chapterTimes[chapter];
    
    document.getElementById('homeScreen').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'block';
    
    updateDisplay();
    startTimer();
}

function backToHome() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    document.getElementById('homeScreen').style.display = 'block';
    document.getElementById('quizScreen').style.display = 'none';
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            timeLeft = 0;
            submitQuiz();
        } else {
            timeLeft--;
            updateTimer();
        }
    }, 1000);
}

function updateTimer() {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function updateDisplay() {
    document.getElementById('questionCounter').textContent = 
        `${currentIndex + 1}/${currentQuestions.length}`;
    
    const q = currentQuestions[currentIndex];
    let html = `
        <div class="question-number">Question ${currentIndex + 1}</div>
        <div class="question-text">${q.question}</div>
        <div class="options">
    `;
    
    q.options.forEach((opt, i) => {
        const selected = userAnswers[currentIndex] === i ? 'selected' : '';
        const letter = String.fromCharCode(65 + i);
        html += `<div class="option ${selected}" onclick="selectOption(${i})">${letter}. ${opt}</div>`;
    });
    
    html += '</div>';
    document.getElementById('questionBox').innerHTML = html;
    
    document.getElementById('prevBtn').disabled = currentIndex === 0;
    document.getElementById('nextBtn').disabled = currentIndex === currentQuestions.length - 1;
}

function selectOption(index) {
    if (!quizActive || quizSubmitted) return;
    userAnswers[currentIndex] = index;
    
    document.querySelectorAll('.option').forEach((opt, i) => {
        opt.classList.toggle('selected', i === index);
    });
}

function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        updateDisplay();
    }
}

function nextQuestion() {
    if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        updateDisplay();
    }
}

function submitQuiz() {
    if (!quizActive || quizSubmitted) return;
    
    clearInterval(timerInterval);
    quizActive = false;
    quizSubmitted = true;
    
    let correct = 0;
    let wrong = 0;
    const results = [];
    
    currentQuestions.forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.correct;
        if (isCorrect) {
            correct++;
        } else {
            wrong++;
        }
        
        results.push({
            question: q.question,
            userAnswer: userAnswers[i] !== null ? q.options[userAnswers[i]] : 'لم يتم الإجابة',
            correctAnswer: q.options[q.correct],
            isCorrect
        });
    });
    
    const score = Math.round((correct / currentQuestions.length) * 100);
    showResults(results, correct, wrong, score);
}

function showResults(results, correct, wrong, score) {
    let correctHtml = '';
    let wrongHtml = '';
    
    results.forEach((r, i) => {
        const item = `
            <div class="answer-item ${r.isCorrect ? 'correct' : 'wrong'}">
                <div class="answer-question">${i+1}. ${r.question}</div>
                <div class="answer-details">
                    ${!r.isCorrect ? `<div style="color: #dc3545; margin-bottom: 5px;">❌ إجابتك: ${r.userAnswer}</div>` : ''}
                    <div style="color: #28a745;">✓ الإجابة الصحيحة: ${r.correctAnswer}</div>
                </div>
            </div>
        `;
        
        if (r.isCorrect) {
            correctHtml += item;
        } else {
            wrongHtml += item;
        }
    });
    
    const resultDiv = document.createElement('div');
    resultDiv.className = 'result-screen';
    resultDiv.id = 'resultScreen';
    resultDiv.innerHTML = `
        <div class="result-box">
            <div class="result-header">
                <h2>نتيجة الاختبار</h2>
                <div class="score-circle">
                    <div class="score-number">${score}%</div>
                    <div class="score-label">الدرجة</div>
                </div>
                <div class="stats-row">
                    <span class="correct-stat">✓ صحيح: ${correct}</span>
                    <span class="wrong-stat">✗ خطأ: ${wrong}</span>
                </div>
            </div>
            
            <div class="result-tabs">
                <button class="tab-btn active" onclick="showResultTab('correct')">✅ الإجابات الصحيحة (${correct})</button>
                <button class="tab-btn" onclick="showResultTab('wrong')">❌ الإجابات الخاطئة (${wrong})</button>
            </div>
            
            <div id="correctTab" class="answers-list">
                ${correctHtml || '<p style="text-align:center; padding:20px;">لا توجد إجابات صحيحة</p>'}
            </div>
            
            <div id="wrongTab" class="answers-list" style="display:none;">
                ${wrongHtml || '<p style="text-align:center; padding:20px;">لا توجد أخطاء - ممتاز!</p>'}
            </div>
            
            <button class="close-results" onclick="closeResults()">العودة للصفحة الرئيسية</button>
        </div>
    `;
    
    document.body.appendChild(resultDiv);
}

function showResultTab(tab) {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(t => t.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    document.getElementById('correctTab').style.display = tab === 'correct' ? 'block' : 'none';
    document.getElementById('wrongTab').style.display = tab === 'wrong' ? 'block' : 'none';
}

function closeResults() {
    const resultScreen = document.getElementById('resultScreen');
    if (resultScreen) resultScreen.remove();
    backToHome();
}

// تهيئة الصفحة عند التحميل
window.onload = function() {
    document.getElementById('pledgeScreen').style.display = 'flex';
    document.getElementById('mainContent').style.display = 'none';
};
