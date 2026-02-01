// Illustrator Calendar Script

if (app.documents.length === 0) {
    var doc = app.documents.add(DocumentColorSpace.RGB, 1000, 800);
} else {
    var doc = app.activeDocument;
}

// User Input
var year = prompt("Enter Year (e.g. 2026):", "2026");
var month = prompt("Enter Month (1-12):", "1");

year = parseInt(year);
month = parseInt(month) - 1;

// Month names
var monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
];

// Calendar calculation
var firstDay = new Date(year, month, 1).getDay();
var totalDays = new Date(year, month + 1, 0).getDate();

// Layout settings
var startX = 30;
var startY = 450;
var cellW = 80;
var cellH = 50;

// Title
var title = doc.textFrames.add();
title.contents = monthNames[month] + " " + year;
title.top = 750;
title.left = 350;
title.textRange.characterAttributes.size = 28;

// Day headers
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
for (var d = 0; d < 7; d++) {
    var dayText = doc.textFrames.add();
    dayText.contents = days[d];
    dayText.left = startX + (d * cellW);
    dayText.top = startY + 30;
    dayText.textRange.characterAttributes.size = 16;
}

// Draw calendar grid
var day = 1;
var row = 0;

for (var i = 0; i < 42; i++) {
    var col = i % 7;

    if (i >= firstDay && day <= totalDays) {
        var text = doc.textFrames.add();
        text.contents = day.toString();
        text.left = startX + (col * cellW) + 10;
        text.top = startY - (row * cellH) - 20;
        text.textRange.characterAttributes.size = 18;
        day++;
    }

    if (col === 6) row++;
}

// Draw boxes
row = 0;
for (var r = 0; r < 6; r++) {
    for (var c = 0; c < 7; c++) {
        var rect = doc.pathItems.rectangle(
            startY - (r * cellH),
            startX + (c * cellW),
            cellW,
            cellH
        );
        rect.stroked = true;
        rect.filled = false;
    }
}