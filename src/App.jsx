import { useState, useEffect, useRef } from "react";

// ═══════════════════════════════════════════════════════════
// DATA: All 18 chapters with full content
// ═══════════════════════════════════════════════════════════
const CHAPTERS = [
  {
    id: 1, title: "מודל חישוב בסיסי", icon: "⚙️",
    goals: ["להבין מהו משתנה ואיך משנים ערכים", "לדעת את טיפוסי הנתונים הבסיסיים", "להשתמש באופרטורים חשבוניים"],
    theory: `**משתנה** הוא תא זיכרון עם שם. בשפת C מגדירים משתנה עם טיפוס הנתון:

\`\`\`c
int age = 17;
float grade = 95.5;
char letter = 'A';
\`\`\`

**טיפוסי נתונים עיקריים:**
- \`int\` – מספר שלם (4 בתים)
- \`float\` – מספר עשרוני (4 בתים)
- \`double\` – מספר עשרוני מדויק יותר (8 בתים)
- \`char\` – תו בודד (1 בית)

**אופרטורים חשבוניים:** \`+  -  *  /  %\`
**casting:** \`(float)5/2\` = 2.5 (ולא 2)`,
    code: `#include <stdio.h>
#include <math.h>

int main() {
    int a = 10, b = 3;
    float result;
    
    printf("חיבור: %d\\n", a + b);
    printf("חיסור: %d\\n", a - b);
    printf("כפל: %d\\n", a * b);
    printf("חילוק שלם: %d\\n", a / b);
    printf("שארית: %d\\n", a % b);
    
    // casting
    result = (float)a / b;
    printf("חילוק עשרוני: %.2f\\n", result);
    
    // פונקציות מתמטיות
    printf("שורש של 16: %.1f\\n", sqrt(16));
    printf("2 בחזקת 8: %.0f\\n", pow(2, 8));
    
    return 0;
}`,
    traceTable: {
      headers: ["שורה", "a", "b", "result", "פלט"],
      rows: [
        ["int a=10, b=3", "10", "3", "?", ""],
        ["a+b", "10", "3", "?", "13"],
        ["a-b", "10", "3", "?", "7"],
        ["(float)a/b", "10", "3", "3.33", "3.33"],
        ["sqrt(16)", "10", "3", "3.33", "4.0"],
      ]
    },
    questions: [
      { q: "מה ההבדל בין int ל-float?", a: "int שומר מספרים שלמים בלבד, float שומר מספרים עשרוניים" },
      { q: "מה יהיה ערך 7/2 ב-C ללא casting?", a: "3 (חילוק שלם)" },
      { q: "מה תפקיד האופרטור %?", a: "מחזיר את שארית החלוקה" },
    ],
    exercises: [
      "כתוב תכנית שמחשבת היקף ושטח עיגול עם רדיוס נתון",
      "כתוב תכנית שמקבלת טמפרטורה בצלזיוס ומציגה בפרנהייט",
      "חשב את הממוצע של 5 מספרים מוגדרים מראש",
    ],
    challenge: "כתוב מחשבון שמחשב את כל 5 הפעולות החשבוניות בין שני מספרים שנקראים מהמשתמש.",
    quiz: [
      { q: "מה הגודל של int בבתים?", options: ["2", "4", "8", "1"], correct: 1 },
      { q: "מה יהיה הערך של (float)7/2?", options: ["3", "3.5", "4", "3.0"], correct: 1 },
      { q: "איזה אופרטור מחזיר שארית חלוקה?", options: ["/", "%", "//", "&"], correct: 1 },
    ]
  },
  {
    id: 2, title: "קלט / פלט", icon: "💬",
    goals: ["להשתמש ב-printf ו-scanf", "להכיר פורמטים שונים", "לקרוא ולהדפיס סוגי נתונים שונים"],
    theory: `**printf** – מדפיס לפלט הסטנדרטי
**scanf** – קורא קלט מהמשתמש

**פורמטים נפוצים:**
| פורמט | טיפוס | דוגמה |
|--------|--------|--------|
| \`%d\` | int | 42 |
| \`%f\` | float | 3.14 |
| \`%.2f\` | float עם 2 ספרות | 3.14 |
| \`%c\` | char | 'A' |
| \`%s\` | מחרוזת | "שלום" |
| \`%x\` | hex | 2a |

**חשוב:** ב-scanf משתמשים ב-& לפני המשתנה: \`scanf("%d", &x)\``,
    code: `#include <stdio.h>

int main() {
    int age;
    float height;
    char name[50];
    
    printf("הכנס את שמך: ");
    scanf("%s", name);
    
    printf("הכנס גיל: ");
    scanf("%d", &age);
    
    printf("הכנס גובה (מ'): ");
    scanf("%f", &height);
    
    printf("\\nשלום %s!\\n", name);
    printf("גיל: %d\\n", age);
    printf("גובה: %.2f מטר\\n", height);
    
    return 0;
}`,
    traceTable: {
      headers: ["פעולה", "name", "age", "height", "פלט"],
      rows: [
        ["scanf name", "\"דניאל\"", "?", "?", ""],
        ["scanf age", "\"דניאל\"", "17", "?", ""],
        ["scanf height", "\"דניאל\"", "17", "1.75", ""],
        ["printf", "\"דניאל\"", "17", "1.75", "שלום דניאל!\nגיל: 17\nגובה: 1.75 מטר"],
      ]
    },
    questions: [
      { q: "למה צריך & ב-scanf?", a: "כי scanf צריך את כתובת המשתנה כדי לכתוב לתוכו" },
      { q: "מה ההבדל בין %f ל-%.2f?", a: "%.2f מדפיס בדיוק 2 ספרות אחרי הנקודה" },
    ],
    exercises: [
      "כתוב תכנית שקוראת שני מספרים ומחשבת את סכומם",
      "קרא שם ומחיר מוצר, והדפס עם מע\"מ (17%)",
    ],
    challenge: "כתוב תכנית שקוראת ציונים ב-5 מקצועות ומדפיסה ציון ממוצע ודירוג.",
    quiz: [
      { q: "מה הפורמט להדפסת מספר עשרוני עם 3 ספרות?", options: ["%d", "%3f", "%.3f", "%f3"], correct: 2 },
      { q: "ב-scanf, לפני int x, כותבים:", options: ["x", "&x", "*x", "@x"], correct: 1 },
    ]
  },
  {
    id: 3, title: "מבוא לפיתוח אלגוריתמים", icon: "🧩",
    goals: ["לפרק בעיה לתת-בעיות", "לבנות אלגוריתם שלב אחר שלב", "לקשר בין תת-בעיות לפתרון"],
    theory: `**אלגוריתם** הוא רצף מוגדר של פעולות לפתרון בעיה.

**עקרון הפירוק:** בעיה מורכבת = סכום בעיות פשוטות

**שלבים:**
1. **הבנת הבעיה** – מה הקלט? מה הפלט?
2. **פירוק** – חלק לשלבים קטנים
3. **אלגוריתם מילולי** – תאר בעברית פשוטה
4. **מימוש** – תרגם לקוד
5. **בדיקה** – הרץ על דוגמאות

**דוגמה: חישוב ממוצע**
- קלט: מספר ערכים
- אלגוריתם: קרא ערכים → סכם → חלק במספר
- פלט: הממוצע`,
    code: `#include <stdio.h>

// תת-בעיה 1: חישוב שטח מלבן
float areaRectangle(float width, float height) {
    return width * height;
}

// תת-בעיה 2: חישוב היקף מלבן
float perimeterRectangle(float width, float height) {
    return 2 * (width + height);
}

int main() {
    float w = 5.0, h = 3.0;
    
    // שימוש בתת-בעיות
    printf("שטח: %.2f\\n", areaRectangle(w, h));
    printf("היקף: %.2f\\n", perimeterRectangle(w, h));
    
    return 0;
}`,
    traceTable: {
      headers: ["שלב", "w", "h", "פעולה", "תוצאה"],
      rows: [
        ["1", "5.0", "3.0", "areaRectangle(5,3)", "15.00"],
        ["2", "5.0", "3.0", "perimeterRectangle(5,3)", "16.00"],
      ]
    },
    questions: [
      { q: "מה היתרון בפירוק לתת-בעיות?", a: "קוד קריא יותר, קל לתחזוקה, ניתן לשימוש חוזר" },
      { q: "מה ההבדל בין אלגוריתם מילולי לקוד?", a: "אלגוריתם מילולי תאורטי ובעברית, קוד הוא מימוש בשפת תכנות" },
    ],
    exercises: [
      "פרק את בעיית מציאת המספר הגדול מ-3 מספרים לתת-בעיות",
      "כתוב אלגוריתם מילולי לחישוב ממוצע כיתה",
    ],
    challenge: "בנה מחשבון BMI: קלט = משקל וגובה, חשב BMI, קבע קטגוריה.",
    quiz: [
      { q: "מה השלב הראשון בפיתוח אלגוריתם?", options: ["כתיבת קוד", "הבנת הבעיה", "בדיקה", "פירוק"], correct: 1 },
    ]
  },
  {
    id: 4, title: "ביצוע מותנה", icon: "🔀",
    goals: ["להשתמש ב-if/else", "להבין תנאים בוליאניים", "להשתמש ב-switch-case"],
    theory: `**ביצוע מותנה** מאפשר לתכנית לבחור בין נתיבים שונים.

**if-else:**
\`\`\`c
if (תנאי) {
    // אם אמת
} else if (תנאי2) {
    // אם אמת2
} else {
    // אחרת
}
\`\`\`

**אופרטורים לוגיים:**
- \`&&\` – AND (וגם)
- \`||\` – OR (או)
- \`!\` – NOT (לא)

**switch-case** – מתאים כשיש ערכים ספציפיים:
\`\`\`c
switch(x) {
    case 1: ...; break;
    case 2: ...; break;
    default: ...;
}
\`\`\``,
    code: `#include <stdio.h>

int main() {
    int grade;
    printf("הכנס ציון: ");
    scanf("%d", &grade);
    
    if (grade >= 90)
        printf("מצוין!\\n");
    else if (grade >= 75)
        printf("טוב מאוד\\n");
    else if (grade >= 60)
        printf("טוב\\n");
    else
        printf("לא עבר\\n");
    
    // switch לדוגמה
    int day = 3;
    switch(day) {
        case 1: printf("ראשון\\n"); break;
        case 2: printf("שני\\n"); break;
        case 3: printf("שלישי\\n"); break;
        default: printf("יום אחר\\n");
    }
    
    return 0;
}`,
    traceTable: {
      headers: ["ציון", "grade>=90", "grade>=75", "grade>=60", "פלט"],
      rows: [
        ["95", "✓", "-", "-", "מצוין!"],
        ["80", "✗", "✓", "-", "טוב מאוד"],
        ["65", "✗", "✗", "✓", "טוב"],
        ["50", "✗", "✗", "✗", "לא עבר"],
      ]
    },
    questions: [
      { q: "מתי עדיף להשתמש ב-switch על פני if-else?", a: "כשבודקים ערך אחד מול מספר ערכים ספציפיים" },
      { q: "מה קורה אם שוכחים break ב-switch?", a: "הביצוע ימשיך לcase הבא (fall-through)" },
    ],
    exercises: [
      "כתוב תכנית שקובעת אם מספר זוגי או אי-זוגי",
      "כתוב מחשבון הנחות לפי גיל לכרטיסי קולנוע",
    ],
    challenge: "כתוב תכנית שמקבלת 3 מספרים ומציאה את הגדול, האמצעי והקטן.",
    quiz: [
      { q: "איזה אופרטור מחזיר true רק אם שני התנאים נכונים?", options: ["||", "&&", "!", "=="], correct: 1 },
      { q: "מה הכתיבה הנכונה לבדיקת שווה?", options: ["=", "==", "===", ":="], correct: 1 },
    ]
  },
  {
    id: 5, title: "נכונות אלגוריתמים", icon: "✅",
    goals: ["להבין מה זה נכונות אלגוריתם", "לזהות שגיאות לוגיות", "לבדוק אלגוריתמים"],
    theory: `**נכונות אלגוריתם** = האם הוא נותן תוצאה נכונה לכל קלט חוקי?

**שני סוגי שגיאות:**
1. **שגיאת מימוש** – syntax error, compilation error
2. **שגיאה לוגית** – הקוד מתקמפל אבל נותן תוצאה שגויה

**תחום קלטים חוקיים** – אלו ערכים האלגוריתם מטפל בהם?

**בדיקות:**
- ערכים גבוליים (0, -1, מקסימום)
- ערכים "רגילים"
- ערכים שליליים

**תיעוד** – תגובות בקוד מסייעות להבנה ולאיתור שגיאות`,
    code: `#include <stdio.h>

// פונקציה לחישוב שורש - צריכה לבדוק קלט
#include <math.h>

float safeSquareRoot(float x) {
    if (x < 0) {
        printf("שגיאה: לא ניתן לחשב שורש של מספר שלילי\\n");
        return -1; // ערך שגיאה
    }
    return sqrt(x);
}

// בדיקת חלוקה
float safeDivide(float a, float b) {
    if (b == 0) {
        printf("שגיאה: חלוקה באפס!\\n");
        return 0;
    }
    return a / b;
}

int main() {
    printf("%.2f\\n", safeSquareRoot(16));  // 4.00
    printf("%.2f\\n", safeSquareRoot(-4)); // שגיאה
    printf("%.2f\\n", safeDivide(10, 2));   // 5.00
    printf("%.2f\\n", safeDivide(10, 0));   // שגיאה
    return 0;
}`,
    traceTable: {
      headers: ["קריאה", "x/b", "תנאי", "ערך מוחזר"],
      rows: [
        ["safeSquareRoot(16)", "16", "x>=0 ✓", "4.00"],
        ["safeSquareRoot(-4)", "-4", "x<0 ✓", "שגיאה"],
        ["safeDivide(10,2)", "b=2", "b≠0 ✓", "5.00"],
        ["safeDivide(10,0)", "b=0", "b==0 ✓", "שגיאה"],
      ]
    },
    questions: [
      { q: "מה ההבדל בין שגיאת קומפילציה לשגיאה לוגית?", a: "שגיאת קומפילציה מונעת הרצה, שגיאה לוגית מתרחשת בזמן ריצה ונותנת תוצאה שגויה" },
    ],
    exercises: [
      "מצא את השגיאה הלוגית: for(i=1; i<=10; i++) sum=i; printf(sum);",
      "הוסף בדיקות קלט לחישוב ממוצע כיתה",
    ],
    challenge: "כתוב פונקציה שמחשבת פקטוריאל ומטפלת בקלטים לא חוקיים.",
    quiz: [
      { q: "שגיאה לוגית היא:", options: ["syntax error", "שגיאת קומפילציה", "שגיאה שהקוד מריץ אבל תוצאה שגויה", "אין כזה דבר"], correct: 2 },
    ]
  },
  {
    id: 6, title: "לולאות", icon: "🔄",
    goals: ["להשתמש ב-while, do-while, for", "להבין מונים וצוברים", "לבנות לולאות מקוננות"],
    theory: `**שלושה סוגי לולאות:**

**while** – כשלא יודעים מראש כמה פעמים:
\`\`\`c
while (תנאי) { ... }
\`\`\`

**do-while** – מבצע לפחות פעם אחת:
\`\`\`c
do { ... } while (תנאי);
\`\`\`

**for** – כשיודעים כמה פעמים:
\`\`\`c
for (אתחול; תנאי; עדכון) { ... }
\`\`\`

**מונה** – ספירת אירועים: \`count++\`
**צובר** – סכימת ערכים: \`sum += x\`
**זקיף** – ערך מיוחד לסיום לולאה (למשל -1)`,
    code: `#include <stdio.h>

int main() {
    int i, sum = 0;
    
    // for loop - סכום 1 עד 10
    for (i = 1; i <= 10; i++) {
        sum += i;
    }
    printf("סכום 1-10: %d\\n", sum); // 55
    
    // לולאה מקוננת - טבלת כפל
    int r, c;
    for (r = 1; r <= 3; r++) {
        for (c = 1; c <= 3; c++) {
            printf("%d\\t", r * c);
        }
        printf("\\n");
    }
    
    // while עם זקיף
    int num, count = 0;
    printf("הכנס מספרים (זקיף=-1):\\n");
    // scanf("%d", &num);
    // while (num != -1) { count++; scanf("%d", &num); }
    // printf("נספרו %d מספרים\\n", count);
    
    return 0;
}`,
    traceTable: {
      headers: ["i", "sum (לפני)", "sum += i", "sum (אחרי)"],
      rows: [
        ["1", "0", "0+1", "1"],
        ["2", "1", "1+2", "3"],
        ["3", "3", "3+3", "6"],
        ["...", "...", "...", "..."],
        ["10", "45", "45+10", "55"],
      ]
    },
    questions: [
      { q: "מה ההבדל בין while ל-do-while?", a: "do-while מבצע את הגוף לפחות פעם אחת לפני בדיקת התנאי" },
      { q: "מה זה 'זקיף' בלולאה?", a: "ערך מיוחד שמסמל סיום קלט, לדוגמה -1" },
    ],
    exercises: [
      "כתוב לולאה שמדפיסה מספרים זוגיים מ-2 עד 20",
      "חשב את הסכום של הספרות של מספר נתון",
    ],
    challenge: "כתוב לולאות מקוננות שמציירות משולש כוכביות בגודל n.",
    quiz: [
      { q: "כמה פעמים רץ: for(i=0; i<5; i++)?", options: ["4", "5", "6", "אינסוף"], correct: 1 },
      { q: "מה ההבדל העיקרי בין while ל-for?", options: ["אין הבדל", "for מיועד למספר ידוע של איטרציות", "while מהיר יותר", "for לא יכול להשתמש במשתנה"], correct: 1 },
    ]
  },
  {
    id: 7, title: "פונקציות", icon: "🔧",
    goals: ["לפרק קוד לפונקציות", "להבין פרמטרים וערכי החזרה", "להכיר scope ו-stack"],
    theory: `**פונקציה** = בלוק קוד עם שם שניתן לקרוא לו.

**הגדרת פונקציה:**
\`\`\`c
טיפוס_החזרה שם(פרמטרים) {
    // גוף הפונקציה
    return ערך;
}
\`\`\`

**Scope:** משתנה מקומי קיים רק בתוך הפונקציה שבה הוגדר.

**Stack:** בכל קריאה לפונקציה, נוצר "מסגרת" חדשה ב-stack עם המשתנים המקומיים.

**אבטיפוס (Prototype):** הצהרה על פונקציה לפני השימוש בה:
\`\`\`c
int max(int a, int b); // אבטיפוס
\`\`\``,
    code: `#include <stdio.h>

// אבטיפוס
int max(int a, int b);
float average(int arr[], int n);
void printStars(int n);

int main() {
    printf("Max(5,8) = %d\\n", max(5, 8));
    
    int grades[] = {85, 92, 78, 96, 88};
    printf("ממוצע: %.2f\\n", average(grades, 5));
    
    printStars(5);
    
    return 0;
}

int max(int a, int b) {
    return (a > b) ? a : b;
}

float average(int arr[], int n) {
    int sum = 0, i;
    for (i = 0; i < n; i++)
        sum += arr[i];
    return (float)sum / n;
}

void printStars(int n) {
    int i;
    for (i = 0; i < n; i++)
        printf("*");
    printf("\\n");
}`,
    traceTable: {
      headers: ["קריאה", "פרמטרים", "חישוב", "ערך מוחזר"],
      rows: [
        ["max(5,8)", "a=5, b=8", "8>5? כן", "8"],
        ["average(grades,5)", "n=5", "sum=439", "87.80"],
        ["printStars(5)", "n=5", "5 כוכביות", "void"],
      ]
    },
    questions: [
      { q: "מה זה void בפונקציה?", a: "הפונקציה לא מחזירה ערך" },
      { q: "מה ה-scope של משתנה מקומי?", a: "קיים רק בתוך הפונקציה שבה הוגדר" },
    ],
    exercises: [
      "כתוב פונקציה שמחזירה האם מספר ראשוני",
      "כתוב פונקציה שמחשבת פקטוריאל",
    ],
    challenge: "כתוב ספרייה של פונקציות מתמטיות: כולל GCD, LCM, isPrime.",
    quiz: [
      { q: "מה תפקיד ה-return בפונקציה?", options: ["מתחיל את הפונקציה", "מחזיר ערך ומסיים את הפונקציה", "קורא לפונקציה אחרת", "מגדיר משתנה"], correct: 1 },
    ]
  },
  {
    id: 8, title: "מערכים חד-ממדיים", icon: "📦",
    goals: ["להגדיר ולאתחל מערך", "לגשת לאלמנטים", "להעביר מערך לפונקציה"],
    theory: `**מערך** = אוסף של משתנים מאותו טיפוס תחת שם אחד.

\`\`\`c
int arr[5] = {10, 20, 30, 40, 50};
//           [0]  [1]  [2]  [3]  [4]
\`\`\`

**גישה לאלמנט:** \`arr[i]\` – אינדקס מתחיל מ-0!

**העברה לפונקציה:**
\`\`\`c
void printArray(int arr[], int n) { ... }
\`\`\`

**מערך תווים (מחרוזת):**
\`\`\`c
char name[20] = "שלום";
\`\`\``,
    code: `#include <stdio.h>

void printArray(int arr[], int n) {
    int i;
    for (i = 0; i < n; i++)
        printf("[%d]=%d  ", i, arr[i]);
    printf("\\n");
}

int findMax(int arr[], int n) {
    int max = arr[0], i;
    for (i = 1; i < n; i++)
        if (arr[i] > max)
            max = arr[i];
    return max;
}

int main() {
    int grades[5] = {85, 92, 78, 96, 88};
    int n = 5;
    
    printArray(grades, n);
    printf("ציון מקסימלי: %d\\n", findMax(grades, n));
    
    // מערך תווים
    char name[] = "Alice";
    printf("שם: %s\\n", name);
    
    return 0;
}`,
    traceTable: {
      headers: ["i", "arr[i]", "arr[i]>max?", "max"],
      rows: [
        ["0", "85", "85>? (init)", "85"],
        ["1", "92", "92>85 ✓", "92"],
        ["2", "78", "78>92 ✗", "92"],
        ["3", "96", "96>92 ✓", "96"],
        ["4", "88", "88>96 ✗", "96"],
      ]
    },
    questions: [
      { q: "מה האינדקס של האלמנט הראשון במערך?", a: "0" },
      { q: "מה קורה אם ניגש לאינדקס מחוץ לגבולות?", a: "התנהגות לא מוגדרת (undefined behavior) - עלול לגרום לקריסה" },
    ],
    exercises: [
      "כתוב פונקציה שמחשבת סכום ומינימום של מערך",
      "הפוך מערך (reverse)",
    ],
    challenge: "כתוב פונקציה שמסירה כפולים ממערך.",
    quiz: [
      { q: "מה האינדקס האחרון במערך בגודל n?", options: ["n", "n-1", "n+1", "0"], correct: 1 },
    ]
  },
  {
    id: 9, title: "מערכים דו-ממדיים", icon: "🗂️",
    goals: ["להגדיר מטריצה", "לעבוד עם לולאות מקוננות", "לחפש במטריצה"],
    theory: `**מטריצה** = מערך של מערכים.

\`\`\`c
int matrix[3][4]; // 3 שורות, 4 עמודות
matrix[i][j]       // שורה i, עמודה j
\`\`\`

**מעבר על מטריצה:**
\`\`\`c
for (i = 0; i < rows; i++)
    for (j = 0; j < cols; j++)
        process(matrix[i][j]);
\`\`\`

**חיפוש בינארי** – רק במערך ממוין!
- בדוק אמצע
- חצי ימני או שמאלי
- O(log n) לעומת O(n) בחיפוש סדרתי`,
    code: `#include <stdio.h>
#define ROWS 3
#define COLS 3

void printMatrix(int mat[][COLS], int rows) {
    int i, j;
    for (i = 0; i < rows; i++) {
        for (j = 0; j < COLS; j++)
            printf("%4d", mat[i][j]);
        printf("\\n");
    }
}

int sumDiagonal(int mat[][COLS], int n) {
    int sum = 0, i;
    for (i = 0; i < n; i++)
        sum += mat[i][i];
    return sum;
}

int main() {
    int mat[ROWS][COLS] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };
    
    printMatrix(mat, ROWS);
    printf("אלכסון ראשי: %d\\n", sumDiagonal(mat, ROWS));
    
    return 0;
}`,
    traceTable: {
      headers: ["i", "j", "mat[i][j]", "סכום אלכסון"],
      rows: [
        ["0", "0", "1", "1"],
        ["1", "1", "5", "6"],
        ["2", "2", "9", "15"],
      ]
    },
    questions: [
      { q: "מה ההבדל בין חיפוש סדרתי לבינארי?", a: "סדרתי O(n) עובד על כל מערך, בינארי O(log n) דורש מערך ממוין" },
    ],
    exercises: [
      "כתוב פונקציה שמחשבת את סכום כל שורה במטריצה",
      "מצא את המקסימום במטריצה",
    ],
    challenge: "כתוב פונקציה שמחשבת כפל מטריצות.",
    quiz: [
      { q: "כיצד ניגשים לאלמנט בשורה 2, עמודה 3?", options: ["mat[3][2]", "mat[2][3]", "mat[1][2]", "mat[2][2]"], correct: 2 },
    ]
  },
  {
    id: 10, title: "מצביעים", icon: "👆",
    goals: ["להבין מהו מצביע", "להשתמש ב-& ו-*", "לעבור מערך במצביע"],
    theory: `**מצביע** = משתנה שמכיל **כתובת** של משתנה אחר.

\`\`\`c
int x = 5;
int *ptr = &x;  // ptr מצביע על x
printf("%d", *ptr); // 5 - ניתור (dereference)
*ptr = 10;          // שינוי ערך x דרך ptr
\`\`\`

**& = כתובת של**, **\* = ערך ב-כתובת**

**העברה לפי reference:**
\`\`\`c
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}
\`\`\`

**שקילות מערך-מצביע:**
\`arr[i]\` ≡ \`*(arr + i)\``,
    code: `#include <stdio.h>
#include <stdlib.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void printWithPointer(int *arr, int n) {
    int i;
    for (i = 0; i < n; i++)
        printf("%d ", *(arr + i));
    printf("\\n");
}

int main() {
    int x = 5, y = 10;
    int *ptr = &x;
    
    printf("x = %d, כתובת = %p\\n", x, &x);
    printf("*ptr = %d\\n", *ptr);
    
    swap(&x, &y);
    printf("אחרי swap: x=%d, y=%d\\n", x, y);
    
    int arr[] = {10, 20, 30, 40, 50};
    printWithPointer(arr, 5);
    
    return 0;
}`,
    traceTable: {
      headers: ["משתנה", "ערך", "כתובת", "מצביע"],
      rows: [
        ["x", "5", "0x1000", "ptr → 0x1000"],
        ["*ptr", "5 (=x)", "0x1000", "-"],
        ["x (אחרי swap)", "10", "0x1000", "-"],
        ["y (אחרי swap)", "5", "0x1004", "-"],
      ]
    },
    questions: [
      { q: "מה ההבדל בין * בהגדרת מצביע ל-* בשימוש?", a: "בהגדרה: int *p מגדיר p כמצביע. בשימוש: *p מנתר לערך שp מצביע עליו" },
    ],
    exercises: [
      "כתוב פונקציה שמחזירה מינימום ומקסימום דרך מצביעים",
      "כתוב swap שמחליף float",
    ],
    challenge: "ממיין מערך באמצעות qsort עם פונקציית השוואה.",
    quiz: [
      { q: "אם int *p = &x, מה *p?", options: ["כתובת x", "ערך x", "כתובת p", "null"], correct: 1 },
    ]
  },
  {
    id: 11, title: "מחרוזות", icon: "📝",
    goals: ["לעבוד עם מחרוזות ב-C", "להשתמש בפונקציות string.h", "למיין מחרוזות"],
    theory: `**מחרוזת ב-C** = מערך char שמסתיים ב-'\\0'

\`\`\`c
char str[] = "Hello"; // {'H','e','l','l','o','\\0'}
\`\`\`

**פונקציות נפוצות (string.h):**
- \`strlen(s)\` – אורך המחרוזת
- \`strcpy(dst, src)\` – העתקה
- \`strcat(dst, src)\` – שרשור
- \`strcmp(s1, s2)\` – השוואה (0=שוות)
- \`strchr(s, c)\` – חיפוש תו
- \`strstr(s, sub)\` – חיפוש תת-מחרוזת

**ctype.h:**
- \`isalpha(c)\`, \`isdigit(c)\`, \`toupper(c)\`, \`tolower(c)\``,
    code: `#include <stdio.h>
#include <string.h>
#include <ctype.h>

void toUpperCase(char *str) {
    int i;
    for (i = 0; str[i]; i++)
        str[i] = toupper(str[i]);
}

int countVowels(char *str) {
    int count = 0, i;
    char vowels[] = "aeiouAEIOU";
    for (i = 0; str[i]; i++)
        if (strchr(vowels, str[i]))
            count++;
    return count;
}

int main() {
    char s1[50] = "Hello";
    char s2[] = " World";
    
    printf("אורך: %lu\\n", strlen(s1));
    strcat(s1, s2);
    printf("שרשור: %s\\n", s1);
    printf("תנועות: %d\\n", countVowels(s1));
    
    toUpperCase(s1);
    printf("אותיות גדולות: %s\\n", s1);
    
    // השוואה
    if (strcmp("abc", "abc") == 0)
        printf("המחרוזות שוות\\n");
    
    return 0;
}`,
    traceTable: {
      headers: ["פעולה", "s1", "s2", "תוצאה"],
      rows: [
        ["init", "Hello", " World", ""],
        ["strlen(s1)", "Hello", " World", "5"],
        ["strcat(s1,s2)", "Hello World", " World", ""],
        ["countVowels", "Hello World", "", "3 (e,o,o)"],
        ["toUpperCase", "HELLO WORLD", "", ""],
      ]
    },
    questions: [
      { q: "מה מחזיר strcmp כשמחרוזות שוות?", a: "0" },
      { q: "למה מחרוזות ב-C מסתיימות ב-\\0?", a: "כדי שהפונקציות ידעו היכן מסתיימת המחרוזת" },
    ],
    exercises: [
      "כתוב פונקציה שהופכת מחרוזת (reverse)",
      "בדוק אם מחרוזת היא פלינדרום",
    ],
    challenge: "מיין מערך מחרוזות בסדר אלפביתי.",
    quiz: [
      { q: "מה מחזיר strlen('Hello')?", options: ["6", "5", "4", "0"], correct: 1 },
    ]
  },
  {
    id: 12, title: "מיון וחיפוש", icon: "🔍",
    goals: ["לממש מיון בועות ומיון הכנסה", "לממש חיפוש בינארי", "להבין סיבוכיות"],
    theory: `**מיון בועות (Bubble Sort) – O(n²):**
השווה זוגות סמוכים, החלף אם לא בסדר.

**מיון הכנסה (Insertion Sort) – O(n²):**
הכנס כל אלמנט למקומו הנכון בחלק הממוין.

**חיפוש בינארי – O(log n):**
\`\`\`
mid = (low + high) / 2
אם arr[mid] == target: מצאנו!
אם arr[mid] < target: חפש בימין
אם arr[mid] > target: חפש בשמאל
\`\`\`

**סיבוכיות:**
- חיפוש סדרתי: O(n)
- חיפוש בינארי: O(log n) ← הרבה יותר מהיר!`,
    code: `#include <stdio.h>

void bubbleSort(int arr[], int n) {
    int i, j, temp;
    for (i = 0; i < n-1; i++)
        for (j = 0; j < n-i-1; j++)
            if (arr[j] > arr[j+1]) {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
}

int binarySearch(int arr[], int n, int target) {
    int low = 0, high = n-1, mid;
    while (low <= high) {
        mid = (low + high) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1; // לא נמצא
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = 7;
    
    bubbleSort(arr, n);
    
    int i;
    for (i = 0; i < n; i++)
        printf("%d ", arr[i]);
    printf("\\n");
    
    int idx = binarySearch(arr, n, 25);
    printf("25 נמצא באינדקס: %d\\n", idx);
    
    return 0;
}`,
    traceTable: {
      headers: ["איטרציה", "מערך", "פעולה"],
      rows: [
        ["התחלה", "[64,34,25,12,22,11,90]", ""],
        ["i=0", "[34,25,12,22,11,64,90]", "בועה גדולה עולה"],
        ["i=1", "[25,12,22,11,34,64,90]", ""],
        ["...", "...", ""],
        ["סוף", "[11,12,22,25,34,64,90]", "ממוין!"],
      ]
    },
    questions: [
      { q: "למה חיפוש בינארי מחייב מערך ממוין?", a: "כי הוא מחלק את המערך לחצי בכל שלב, וזה אפשרי רק אם יודעים באיזה חצי נמצא הערך" },
    ],
    exercises: [
      "ממש insertion sort",
      "כתוב חיפוש בינארי רקורסיבי",
    ],
    challenge: "ממש merge sort.",
    quiz: [
      { q: "מה הסיבוכיות של חיפוש בינארי?", options: ["O(n)", "O(n²)", "O(log n)", "O(1)"], correct: 2 },
    ]
  },
  {
    id: 13, title: "מבנים ואיגודים", icon: "🏗️",
    goals: ["להגדיר struct", "ליצור מערכי מבנים", "להשתמש במצביעים למבנים"],
    theory: `**struct** = אוסף של שדות מטיפוסים שונים תחת שם אחד.

\`\`\`c
struct Student {
    char name[50];
    int age;
    float grade;
};
struct Student s = {"Alice", 17, 95.5};
\`\`\`

**גישה לשדות:**
- דרך משתנה: \`s.name\`
- דרך מצביע: \`ptr->name\` (שקול ל-\`(*ptr).name\`)

**typedef** מקצר:
\`\`\`c
typedef struct { ... } Student;
Student s;
\`\`\`

**union** – כל השדות חולקים אותו זיכרון (גודל = גדול ביותר).`,
    code: `#include <stdio.h>
#include <string.h>

typedef struct {
    char name[50];
    int age;
    float grade;
} Student;

void printStudent(Student *s) {
    printf("שם: %s, גיל: %d, ציון: %.1f\\n",
           s->name, s->age, s->grade);
}

Student findBest(Student arr[], int n) {
    int i, best = 0;
    for (i = 1; i < n; i++)
        if (arr[i].grade > arr[best].grade)
            best = i;
    return arr[best];
}

int main() {
    Student class[3] = {
        {"Alice", 17, 92.5},
        {"Bob", 18, 88.0},
        {"Carol", 17, 96.0}
    };
    
    int i;
    for (i = 0; i < 3; i++)
        printStudent(&class[i]);
    
    Student best = findBest(class, 3);
    printf("\\nהטוב ביותר: %s\\n", best.name);
    
    return 0;
}`,
    traceTable: {
      headers: ["שם", "גיל", "ציון", "הטוב ביותר?"],
      rows: [
        ["Alice", "17", "92.5", ""],
        ["Bob", "18", "88.0", ""],
        ["Carol", "17", "96.0", "✓"],
      ]
    },
    questions: [
      { q: "מה ההבדל בין . ל->?", a: ". משמש עם משתנה struct, -> משמש עם מצביע ל-struct" },
    ],
    exercises: [
      "הגדר מבנה Point ופונקציה לחישוב מרחק בין שתי נקודות",
      "מיין מערך סטודנטים לפי ציון",
    ],
    challenge: "ממש מערך dynamic של סטודנטים עם malloc.",
    quiz: [
      { q: "אם Student *p, איך ניגשים לשדה name?", options: ["p.name", "p->name", "*p.name", "&p.name"], correct: 1 },
    ]
  },
  {
    id: 14, title: "יחידות ספרייה ומאקרו", icon: "📚",
    goals: ["להבין קבצי header ומימוש", "לכתוב מאקרו", "להכיר הידור מותנה"],
    theory: `**ספרייה** = קוד שכתבת ומשתמשים בו בפרויקטים שונים.

**קובץ header (.h):** הצהרות (prototypes, defines, types)
**קובץ מימוש (.c):** הגדרות פונקציות

\`\`\`c
// math_utils.h
#ifndef MATH_UTILS_H
#define MATH_UTILS_H
int factorial(int n);
#define PI 3.14159
#define MAX(a,b) ((a)>(b)?(a):(b))
#endif
\`\`\`

**מאקרו vs פונקציה:**
- מאקרו: החלפת טקסט בקומפילציה, לא בודק טיפוסים
- פונקציה: עדיף לרוב – בטוחה יותר

**הידור מותנה:**
\`\`\`c
#ifdef DEBUG
    printf("debug info\\n");
#endif
\`\`\``,
    code: `#include <stdio.h>

// מאקרו
#define PI 3.14159
#define SQUARE(x) ((x)*(x))
#define MAX(a,b) ((a)>(b)?(a):(b))
#define MIN(a,b) ((a)<(b)?(a):(b))

// הידור מותנה
#define DEBUG 1

double circleArea(double r) {
    return PI * SQUARE(r);
}

int main() {
    printf("שטח עיגול r=5: %.2f\\n", circleArea(5));
    printf("SQUARE(4) = %d\\n", SQUARE(4));
    printf("MAX(3,7) = %d\\n", MAX(3,7));
    printf("MIN(3,7) = %d\\n", MIN(3,7));
    
#ifdef DEBUG
    printf("[DEBUG] כל החישובים הושלמו\\n");
#endif
    
    return 0;
}`,
    traceTable: {
      headers: ["מאקרו", "ביטוי", "אחרי החלפה", "תוצאה"],
      rows: [
        ["SQUARE(4)", "(4)*(4)", "4*4", "16"],
        ["MAX(3,7)", "((3)>(7)?(3):(7))", "7>3?3:7", "7"],
        ["MIN(3,7)", "((3)<(7)?(3):(7))", "3<7?3:7", "3"],
      ]
    },
    questions: [
      { q: "למה כותבים סוגריים בהגדרת מאקרו?", a: "למניעת שגיאות בגלל סדר פעולות, למשל SQUARE(2+3) בלי סוגריים יהיה 2+3*2+3=11 ולא 25" },
    ],
    exercises: [
      "כתוב מאקרו SWAP לשני משתנים",
      "כתוב מאקרו ABS לערך מוחלט",
    ],
    challenge: "צור קובץ header עם ספרייה של פונקציות מתמטיות.",
    quiz: [
      { q: "מה תפקיד #ifndef בקובץ header?", options: ["מגדיר מאקרו", "מונע הכללה כפולה", "מייבא ספרייה", "מסיים קובץ"], correct: 1 },
    ]
  },
  {
    id: 15, title: "הקצאת זיכרון דינמית", icon: "💾",
    goals: ["להבין הבדל בין stack ל-heap", "להשתמש ב-malloc, calloc, realloc", "לשחרר זיכרון עם free"],
    theory: `**Stack** – זיכרון אוטומטי, גודל קבוע, מהיר.
**Heap** – זיכרון דינמי, גודל גמיש, מנוהל ידנית.

\`\`\`c
#include <stdlib.h>
int *arr = (int*)malloc(n * sizeof(int));
if (arr == NULL) { /* שגיאה */ }
// ... שימוש ...
free(arr);           // חשוב מאוד!
\`\`\`

**malloc** – מקצה ולא מאפס
**calloc** – מקצה ומאפס לאפס
**realloc** – שינוי גודל

**זליגת זיכרון (Memory Leak):**
כשלא קוראים ל-free → הזיכרון לא חוזר למערכת!`,
    code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int n, i;
    printf("כמה מספרים? ");
    scanf("%d", &n);
    
    // הקצאה דינמית
    int *arr = (int*)malloc(n * sizeof(int));
    if (arr == NULL) {
        printf("שגיאה בהקצאת זיכרון!\\n");
        return 1;
    }
    
    // קריאת ערכים
    for (i = 0; i < n; i++) {
        printf("הכנס מספר %d: ", i+1);
        scanf("%d", &arr[i]);
    }
    
    // חישוב סכום
    int sum = 0;
    for (i = 0; i < n; i++) sum += arr[i];
    printf("סכום: %d, ממוצע: %.2f\\n", sum, (float)sum/n);
    
    free(arr); // שחרור זיכרון!
    arr = NULL;
    
    return 0;
}`,
    traceTable: {
      headers: ["פעולה", "זיכרון", "ערך", "הערה"],
      rows: [
        ["malloc(5*4)", "Heap: 20 bytes", "כתובת", "לא מאופס"],
        ["arr[0]=10", "Heap[0]", "10", ""],
        ["arr[1]=20", "Heap[1]", "20", ""],
        ["free(arr)", "Heap: שוחרר", "-", "חשוב!"],
      ]
    },
    questions: [
      { q: "מה ההבדל בין malloc ל-calloc?", a: "calloc מאפס את הזיכרון לאפס, malloc לא מאפס" },
      { q: "מה קורה אם שוכחים free?", a: "זליגת זיכרון - הזיכרון נשאר תפוס עד לסיום התכנית" },
    ],
    exercises: [
      "כתוב פונקציה שמקצה מערך דינמי וממלאת אותו בערכי rand",
      "ממש realloc להגדלת מערך",
    ],
    challenge: "ממש מחסנית (stack) עם מערך דינמי.",
    quiz: [
      { q: "מה מחזיר malloc אם ההקצאה נכשלת?", options: ["0", "NULL", "-1", "שגיאה"], correct: 1 },
    ]
  },
  {
    id: 16, title: "קלט/פלט לקבצים", icon: "📁",
    goals: ["לפתוח ולסגור קבצים", "לקרוא ולכתוב נתונים", "להבין קבצי טקסט ובינארי"],
    theory: `**עבודה עם קבצים:**

\`\`\`c
FILE *f = fopen("data.txt", "r");  // r=קריאה, w=כתיבה, a=הוספה
if (f == NULL) { /* שגיאה */ }
// ...
fclose(f);
\`\`\`

**קבצי טקסט:**
- \`fprintf(f, "%d", x)\`
- \`fscanf(f, "%d", &x)\`
- \`fgets(str, n, f)\`

**קבצי בינארי:**
- \`fwrite(&data, size, count, f)\`
- \`fread(&data, size, count, f)\`

**EOF** – סוף קובץ (End Of File)`,
    code: `#include <stdio.h>
#include <stdlib.h>

void writeFile(const char *filename) {
    FILE *f = fopen(filename, "w");
    if (!f) { printf("שגיאה!"); return; }
    
    int data[] = {10, 20, 30, 40, 50};
    int i;
    for (i = 0; i < 5; i++)
        fprintf(f, "%d\\n", data[i]);
    
    fclose(f);
}

void readFile(const char *filename) {
    FILE *f = fopen(filename, "r");
    if (!f) { printf("שגיאה!"); return; }
    
    int x, sum = 0;
    while (fscanf(f, "%d", &x) == 1) {
        printf("קראתי: %d\\n", x);
        sum += x;
    }
    printf("סכום: %d\\n", sum);
    
    fclose(f);
}

int main() {
    writeFile("data.txt");
    readFile("data.txt");
    return 0;
}`,
    traceTable: {
      headers: ["פעולה", "מצב קובץ", "נתון", "הערה"],
      rows: [
        ["fopen(w)", "פתוח לכתיבה", "-", "מוחק תוכן קיים"],
        ["fprintf(10)", "כתוב", "10\\n", ""],
        ["fprintf(20)", "כתוב", "20\\n", ""],
        ["fclose", "סגור", "-", "שומר שינויים"],
        ["fopen(r)", "פתוח לקריאה", "-", ""],
        ["fscanf→10", "קרא", "10", ""],
      ]
    },
    questions: [
      { q: "מה ההבדל בין w ל-a בfopen?", a: "w מוחק תוכן קיים, a מוסיף לסוף הקובץ" },
      { q: "למה חשוב לקרוא fclose?", a: "לשחרור משאבים ולוודא שכל הנתונים נכתבו לדיסק" },
    ],
    exercises: [
      "כתוב תכנית שקוראת שמות מקובץ ומדפיסה בסדר הפוך",
      "כפל תוכן קובץ טקסט",
    ],
    challenge: "כתוב תכנית שמנהלת ספר טלפונים בקובץ בינארי.",
    quiz: [
      { q: "מה מחזיר fscanf בהגיעו לסוף קובץ?", options: ["0", "EOF (-1)", "NULL", "1"], correct: 1 },
    ]
  },
  {
    id: 17, title: "עבודה עם ביטים", icon: "⚡",
    goals: ["להבין פעולות bitwise", "להשתמש בהזזות", "להכיר ייצוג בינארי"],
    theory: `**פעולות ביטים:**
- \`&\` AND: שניהם 1 → 1
- \`|\` OR: לפחות אחד 1 → 1
- \`^\` XOR: שונים → 1
- \`~\` NOT: הפיכה
- \`<<\` הזזה שמאלה (כפל ב-2)
- \`>>\` הזזה ימינה (חלוקה ב-2)

**דוגמה:**
\`\`\`
5  = 0000 0101
3  = 0000 0011
5&3= 0000 0001 = 1
5|3= 0000 0111 = 7
5^3= 0000 0110 = 6
\`\`\`

**שימושים:** דגלים (flags), הצפנה, ייעול, ממשקי חומרה`,
    code: `#include <stdio.h>

void printBinary(int n) {
    int i;
    for (i = 7; i >= 0; i--)
        printf("%d", (n >> i) & 1);
    printf(" (%d)\\n", n);
}

int main() {
    int a = 5, b = 3;
    
    printf("a = "); printBinary(a);
    printf("b = "); printBinary(b);
    printf("a & b = "); printBinary(a & b);
    printf("a | b = "); printBinary(a | b);
    printf("a ^ b = "); printBinary(a ^ b);
    printf("~a = "); printBinary(~a);
    printf("a << 1 = "); printBinary(a << 1);  // *2
    printf("a >> 1 = "); printBinary(a >> 1);  // /2
    
    // בדיקת ביט
    int flags = 0b00001010; // ביטים 1 ו-3 דלוקים
    printf("\\nביט 1 דלוק? %s\\n", (flags & (1<<1)) ? "כן" : "לא");
    
    return 0;
}`,
    traceTable: {
      headers: ["פעולה", "a (bin)", "b (bin)", "תוצאה (bin)", "עשרוני"],
      rows: [
        ["a & b", "00000101", "00000011", "00000001", "1"],
        ["a | b", "00000101", "00000011", "00000111", "7"],
        ["a ^ b", "00000101", "00000011", "00000110", "6"],
        ["a << 1", "00000101", "-", "00001010", "10"],
        ["a >> 1", "00000101", "-", "00000010", "2"],
      ]
    },
    questions: [
      { q: "מה עושה a << 1?", a: "מכפיל ב-2 (מזיז ביטים שמאלה)" },
      { q: "איך בודקים אם ביט מסוים דלוק?", a: "num & (1 << bit_pos) — אם לא 0 אז דלוק" },
    ],
    exercises: [
      "כתוב פונקציה שסופרת ביטים דלוקים במספר",
      "כתוב פונקציה שמחליפה שני מספרים ללא משתנה עזר (XOR swap)",
    ],
    challenge: "ממש bitset: מבנה נתונים לניהול אוסף של bits.",
    quiz: [
      { q: "מה תוצאת 6 ^ 6?", options: ["6", "0", "12", "1"], correct: 1 },
    ]
  },
  {
    id: 18, title: "רקורסיה", icon: "🌀",
    goals: ["להבין עיקרון הרקורסיה", "לזהות תנאי עצירה", "לעקוב אחרי stack קריאות"],
    theory: `**רקורסיה** = פונקציה שקוראת לעצמה.

**כל פונקציה רקורסיבית צריכה:**
1. **תנאי עצירה** (base case) – מתי לעצור
2. **קריאה רקורסיבית** – פישוט הבעיה

\`\`\`c
int factorial(int n) {
    if (n == 0) return 1;     // תנאי עצירה
    return n * factorial(n-1); // רקורסיה
}
\`\`\`

**Stack קריאות:**
\`\`\`
factorial(3)
  └→ factorial(2)
       └→ factorial(1)
            └→ factorial(0) = 1
\`\`\`

**Backtracking** – רקורסיה שמנסה כל האפשרויות.`,
    code: `#include <stdio.h>

// פקטוריאל
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// פיבונאצ'י
int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

// הדפסת מספר בבינארי (רקורסיבי)
void printBinary(int n) {
    if (n > 1) printBinary(n / 2);
    printf("%d", n % 2);
}

// חיפוש בינארי רקורסיבי
int binarySearch(int arr[], int low, int high, int target) {
    if (low > high) return -1;
    int mid = (low + high) / 2;
    if (arr[mid] == target) return mid;
    if (arr[mid] < target) return binarySearch(arr, mid+1, high, target);
    return binarySearch(arr, low, mid-1, target);
}

int main() {
    printf("5! = %d\\n", factorial(5));        // 120
    printf("fib(8) = %d\\n", fibonacci(8));    // 21
    printf("13 בבינארי: "); printBinary(13); printf("\\n");
    
    int arr[] = {1,3,5,7,9,11,13};
    printf("חיפוש 7: אינדקס %d\\n", binarySearch(arr, 0, 6, 7));
    
    return 0;
}`,
    traceTable: {
      headers: ["קריאה", "n", "תנאי עצירה?", "מחזיר"],
      rows: [
        ["factorial(4)", "4", "לא", "4 * factorial(3)"],
        ["factorial(3)", "3", "לא", "3 * factorial(2)"],
        ["factorial(2)", "2", "לא", "2 * factorial(1)"],
        ["factorial(1)", "1", "✓ כן", "1"],
        ["חזרה", "2", "", "2*1=2"],
        ["חזרה", "3", "", "3*2=6"],
        ["חזרה", "4", "", "4*6=24"],
      ]
    },
    questions: [
      { q: "מה קורה אם אין תנאי עצירה?", a: "Stack overflow – גלישת מחסנית, הקריאות אינסופיות עד שהזיכרון נגמר" },
      { q: "מה ההבדל בין רקורסיה לאיטרציה?", a: "רקורסיה פשוטה לכתיבה אבל יקרה יותר בזיכרון, איטרציה יעילה יותר" },
    ],
    exercises: [
      "כתוב פונקציה רקורסיבית לחישוב GCD",
      "ממש חזקה (power) בצורה רקורסיבית",
    ],
    challenge: "פתור את פאזל מגדלי האנוי (Towers of Hanoi) רקורסיבית.",
    quiz: [
      { q: "מה קורה ללא תנאי עצירה ברקורסיה?", options: ["הפונקציה מחזירה 0", "Stack overflow", "הקוד לא מתקמפל", "לולאה סופית"], correct: 1 },
      { q: "מה הפלט של factorial(0)?", options: ["0", "1", "שגיאה", "-1"], correct: 1 },
    ]
  },
];

// ═══════════════════════════════════════════════════════════
// COMPONENTS
// ═══════════════════════════════════════════════════════════

const COLORS = {
  bg: "#0a0e1a",
  surface: "#111827",
  card: "#1a2235",
  accent: "#00d4ff",
  accent2: "#7c3aed",
  accent3: "#10b981",
  warn: "#f59e0b",
  danger: "#ef4444",
  text: "#e2e8f0",
  muted: "#64748b",
  border: "#1e293b",
};

function Badge({ children, color = COLORS.accent }) {
  return (
    <span style={{
      background: `${color}22`,
      color,
      border: `1px solid ${color}44`,
      borderRadius: 6,
      padding: "2px 10px",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: 1,
    }}>{children}</span>
  );
}

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);
  const copyCode = () => {
    navigator.clipboard.writeText(code).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div style={{ position: "relative", borderRadius: 12, overflow: "hidden", border: `1px solid ${COLORS.border}` }}>
      <div style={{ background: "#0d1117", padding: "10px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: `1px solid ${COLORS.border}` }}>
        <span style={{ color: COLORS.muted, fontSize: 12, fontFamily: "monospace" }}>C</span>
        <button onClick={copyCode} style={{ background: "transparent", border: "none", color: copied ? COLORS.accent3 : COLORS.muted, cursor: "pointer", fontSize: 12, fontWeight: 700 }}>
          {copied ? "✓ הועתק" : "העתק"}
        </button>
      </div>
      <pre style={{
        background: "#0d1117",
        color: "#e2e8f0",
        padding: "20px",
        margin: 0,
        overflowX: "auto",
        fontSize: 14,
        lineHeight: 1.7,
        fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
        direction: "ltr",
        textAlign: "left",
      }}>
        {code.split('\n').map((line, i) => {
          // Basic syntax highlighting
          const highlighted = line
            .replace(/(#include|#define|#ifdef|#ifndef|#endif|int|float|char|double|void|return|if|else|while|for|do|switch|case|break|default|typedef|struct|union|NULL)\b/g, '<kw>$1</kw>')
            .replace(/(".*?")/g, '<str>$1</str>')
            .replace(/(\/\/.*$)/g, '<cm>$1</cm>')
            .replace(/\b(\d+\.?\d*)\b/g, '<num>$1</num>');
          return (
            <span key={i} style={{ display: "block" }}>
              <span style={{ color: COLORS.muted, userSelect: "none", marginRight: 16, fontSize: 11, minWidth: 24, display: "inline-block" }}>{i + 1}</span>
              <span dangerouslySetInnerHTML={{
                __html: highlighted
                  .replace(/<kw>/g, '<span style="color:#79c0ff">')
                  .replace(/<\/kw>/g, '</span>')
                  .replace(/<str>/g, '<span style="color:#a5d6ff">')
                  .replace(/<\/str>/g, '</span>')
                  .replace(/<cm>/g, '<span style="color:#6e7681">')
                  .replace(/<\/cm>/g, '</span>')
                  .replace(/<num>/g, '<span style="color:#ffa657">')
                  .replace(/<\/num>/g, '</span>')
              }} />
            </span>
          );
        })}
      </pre>
    </div>
  );
}

function TraceTable({ data }) {
  if (!data) return null;
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, fontFamily: "monospace" }}>
        <thead>
          <tr>
            {data.headers.map((h, i) => (
              <th key={i} style={{ background: `${COLORS.accent}22`, color: COLORS.accent, padding: "10px 14px", textAlign: "center", borderBottom: `2px solid ${COLORS.accent}44`, whiteSpace: "nowrap" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, ri) => (
            <tr key={ri} style={{ background: ri % 2 === 0 ? `${COLORS.surface}` : `${COLORS.card}` }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{ padding: "8px 14px", textAlign: "center", color: COLORS.text, borderBottom: `1px solid ${COLORS.border}` }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function QuizSection({ quiz, chapterId, onComplete }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const score = submitted ? quiz.filter((q, i) => answers[i] === q.correct).length : 0;

  return (
    <div>
      {quiz.map((q, qi) => (
        <div key={qi} style={{ marginBottom: 20, padding: 16, background: COLORS.surface, borderRadius: 10, border: `1px solid ${COLORS.border}` }}>
          <div style={{ fontWeight: 700, marginBottom: 12, color: COLORS.text }}>{qi + 1}. {q.q}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {q.options.map((opt, oi) => {
              let bg = COLORS.card;
              let border = COLORS.border;
              let color = COLORS.muted;
              if (answers[qi] === oi) { bg = `${COLORS.accent}22`; border = COLORS.accent; color = COLORS.accent; }
              if (submitted && oi === q.correct) { bg = `${COLORS.accent3}22`; border = COLORS.accent3; color = COLORS.accent3; }
              if (submitted && answers[qi] === oi && oi !== q.correct) { bg = `${COLORS.danger}22`; border = COLORS.danger; color = COLORS.danger; }
              return (
                <button key={oi} onClick={() => !submitted && setAnswers(a => ({ ...a, [qi]: oi }))}
                  style={{ textAlign: "right", padding: "10px 14px", background: bg, border: `1px solid ${border}`, borderRadius: 8, color, cursor: submitted ? "default" : "pointer", transition: "all 0.2s", fontFamily: "inherit", fontSize: 13 }}>
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      ))}
      {!submitted ? (
        <button onClick={() => { setSubmitted(true); onComplete(score, quiz.length); }}
          style={{ background: COLORS.accent, color: "#000", border: "none", borderRadius: 8, padding: "12px 28px", fontWeight: 800, fontSize: 15, cursor: "pointer" }}>
          הגש בוחן
        </button>
      ) : (
        <div style={{ padding: 16, background: score === quiz.length ? `${COLORS.accent3}22` : `${COLORS.warn}22`, borderRadius: 10, border: `1px solid ${score === quiz.length ? COLORS.accent3 : COLORS.warn}`, textAlign: "center" }}>
          <div style={{ fontSize: 28, marginBottom: 6 }}>{score === quiz.length ? "🏆" : score >= quiz.length / 2 ? "👍" : "📚"}</div>
          <div style={{ fontWeight: 800, fontSize: 18, color: score === quiz.length ? COLORS.accent3 : COLORS.warn }}>
            {score} / {quiz.length} נכונות
          </div>
          {score < quiz.length && <div style={{ color: COLORS.muted, fontSize: 13, marginTop: 6 }}>עיין בתשובות הירוקות למעלה</div>}
        </div>
      )}
    </div>
  );
}

function ChapterView({ chapter, progress, onProgress }) {
  const [tab, setTab] = useState("theory");
  const [openQ, setOpenQ] = useState(null);
  const [quizDone, setQuizDone] = useState(false);

  const tabs = [
    { id: "theory", label: "📖 תיאוריה" },
    { id: "code", label: "💻 קוד" },
    { id: "trace", label: "📊 מעקב" },
    { id: "questions", label: "🧠 שאלות" },
    { id: "exercises", label: "🛠 תרגילים" },
    { id: "quiz", label: "✅ בוחן" },
  ];

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <span style={{ fontSize: 32 }}>{chapter.icon}</span>
          <div>
            <div style={{ color: COLORS.muted, fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>פרק {chapter.id}</div>
            <h2 style={{ margin: 0, fontSize: 24, color: COLORS.text, fontWeight: 900 }}>{chapter.title}</h2>
          </div>
        </div>
        {/* Goals */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
          {chapter.goals.map((g, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, background: COLORS.card, borderRadius: 8, padding: "6px 12px", border: `1px solid ${COLORS.border}` }}>
              <span style={{ color: COLORS.accent3, fontSize: 12 }}>🎯</span>
              <span style={{ color: COLORS.muted, fontSize: 12 }}>{g}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 20, overflowX: "auto", paddingBottom: 4 }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            style={{ padding: "8px 16px", borderRadius: 8, border: "none", cursor: "pointer", whiteSpace: "nowrap", fontFamily: "inherit", fontWeight: tab === t.id ? 800 : 500, fontSize: 13,
              background: tab === t.id ? COLORS.accent : COLORS.card,
              color: tab === t.id ? "#000" : COLORS.muted,
              transition: "all 0.2s" }}>
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ background: COLORS.card, borderRadius: 14, padding: 24, border: `1px solid ${COLORS.border}`, minHeight: 300 }}>
        {tab === "theory" && (
          <div>
            {chapter.theory.split('\n').map((line, i) => {
              if (line.startsWith('```')) return null;
              if (line.startsWith('**') && line.endsWith('**')) return (
                <h3 key={i} style={{ color: COLORS.accent, margin: "16px 0 8px" }}>{line.replace(/\*\*/g, '')}</h3>
              );
              if (line.includes('```c') || line.includes('```')) return null;
              if (line.startsWith('- ')) return (
                <div key={i} style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                  <span style={{ color: COLORS.accent }}>▸</span>
                  <span style={{ color: COLORS.text, fontSize: 14 }} dangerouslySetInnerHTML={{ __html: line.slice(2).replace(/`([^`]+)`/g, `<code style="background:#0d1117;color:#79c0ff;padding:2px 6px;border-radius:4px;font-family:monospace">$1</code>`) }} />
                </div>
              );
              if (line.startsWith('|')) return null; // skip table for now
              if (!line.trim()) return <div key={i} style={{ height: 8 }} />;
              return (
                <p key={i} style={{ color: COLORS.text, fontSize: 14, lineHeight: 1.8, margin: "4px 0" }}
                  dangerouslySetInnerHTML={{ __html: line.replace(/`([^`]+)`/g, `<code style="background:#0d1117;color:#79c0ff;padding:2px 6px;border-radius:4px;font-family:monospace">$1</code>`).replace(/\*\*([^*]+)\*\*/g, '<strong style="color:#e2e8f0">$1</strong>') }} />
              );
            })}
          </div>
        )}

        {tab === "code" && (
          <div>
            <CodeBlock code={chapter.code} />
          </div>
        )}

        {tab === "trace" && (
          <div>
            <div style={{ marginBottom: 16, color: COLORS.muted, fontSize: 13 }}>
              📊 טבלת מעקב – עקוב אחרי ערכי המשתנים בכל שלב של הרצת התכנית:
            </div>
            <TraceTable data={chapter.traceTable} />
          </div>
        )}

        {tab === "questions" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {chapter.questions.map((q, qi) => (
              <div key={qi} style={{ borderRadius: 10, border: `1px solid ${COLORS.border}`, overflow: "hidden" }}>
                <button onClick={() => setOpenQ(openQ === qi ? null : qi)}
                  style={{ width: "100%", textAlign: "right", padding: "14px 18px", background: openQ === qi ? `${COLORS.accent2}22` : COLORS.surface, border: "none", cursor: "pointer", fontFamily: "inherit", display: "flex", justifyContent: "space-between", alignItems: "center", color: COLORS.text, fontWeight: 600, fontSize: 14 }}>
                  <span style={{ color: COLORS.accent2 }}>{openQ === qi ? "▲" : "▼"}</span>
                  {q.q}
                </button>
                {openQ === qi && (
                  <div style={{ padding: "14px 18px", background: `${COLORS.accent2}11`, borderTop: `1px solid ${COLORS.border}`, color: COLORS.text, fontSize: 14, lineHeight: 1.7 }}>
                    💡 {q.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "exercises" && (
          <div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ color: COLORS.accent, fontWeight: 800, marginBottom: 12 }}>🛠 תרגילים מדורגים</div>
              {chapter.exercises.map((ex, i) => (
                <div key={i} style={{ display: "flex", gap: 12, padding: "12px 16px", background: COLORS.surface, borderRadius: 8, marginBottom: 8, border: `1px solid ${COLORS.border}` }}>
                  <span style={{ background: COLORS.accent, color: "#000", borderRadius: 6, width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 12, flexShrink: 0 }}>{i + 1}</span>
                  <span style={{ color: COLORS.text, fontSize: 14 }}>{ex}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: 16, background: `${COLORS.warn}11`, borderRadius: 10, border: `1px solid ${COLORS.warn}44` }}>
              <div style={{ color: COLORS.warn, fontWeight: 800, marginBottom: 8 }}>🧪 משימת אתגר</div>
              <div style={{ color: COLORS.text, fontSize: 14 }}>{chapter.challenge}</div>
            </div>
          </div>
        )}

        {tab === "quiz" && (
          <div>
            <div style={{ color: COLORS.accent, fontWeight: 800, marginBottom: 16 }}>✅ בוחן מסכם לפרק {chapter.id}</div>
            <QuizSection
              quiz={chapter.quiz}
              chapterId={chapter.id}
              onComplete={(score, total) => {
                const pct = Math.round((score / total) * 100);
                onProgress(chapter.id, pct);
                setQuizDone(true);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════════
export default function CLearnApp() {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [progress, setProgress] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [view, setView] = useState("home"); // home | chapter | progress

  const handleProgress = (chapterId, score) => {
    setProgress(p => ({ ...p, [chapterId]: Math.max(p[chapterId] || 0, score) }));
  };

  const totalScore = Object.values(progress).reduce((a, b) => a + b, 0);
  const maxScore = CHAPTERS.length * 100;
  const overallPct = Math.round((totalScore / maxScore) * 100);
  const completedChapters = Object.keys(progress).length;

  const openChapter = (ch) => {
    setSelectedChapter(ch);
    setView("chapter");
    if (window.innerWidth < 768) setSidebarOpen(false);
  };

  return (
    <div style={{ minHeight: "100vh", background: COLORS.bg, color: COLORS.text, fontFamily: "'Segoe UI', Tahoma, Arial, sans-serif", direction: "rtl", display: "flex", flexDirection: "column" }}>
      {/* Top Bar */}
      <div style={{ background: COLORS.surface, borderBottom: `1px solid ${COLORS.border}`, padding: "0 20px", display: "flex", alignItems: "center", gap: 16, height: 60, flexShrink: 0, position: "sticky", top: 0, zIndex: 100 }}>
        <button onClick={() => setSidebarOpen(s => !s)} style={{ background: "transparent", border: "none", color: COLORS.muted, cursor: "pointer", fontSize: 20, padding: 4 }}>☰</button>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 22 }}>🖥️</span>
          <span style={{ fontWeight: 900, fontSize: 18, color: COLORS.accent, letterSpacing: -0.5 }}>לומדים C</span>
          <Badge color={COLORS.accent2}>18 פרקים</Badge>
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ display: "flex", align: "center", gap: 8 }}>
          <div style={{ background: COLORS.card, borderRadius: 8, padding: "6px 14px", fontSize: 13, border: `1px solid ${COLORS.border}` }}>
            <span style={{ color: COLORS.muted }}>ציון כולל: </span>
            <span style={{ color: COLORS.accent, fontWeight: 800 }}>{overallPct}%</span>
          </div>
          <div style={{ background: COLORS.card, borderRadius: 8, padding: "6px 14px", fontSize: 13, border: `1px solid ${COLORS.border}` }}>
            <span style={{ color: COLORS.muted }}>פרקים: </span>
            <span style={{ color: COLORS.accent3, fontWeight: 800 }}>{completedChapters}/{CHAPTERS.length}</span>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* Sidebar */}
        {sidebarOpen && (
          <div style={{ width: 260, background: COLORS.surface, borderLeft: `1px solid ${COLORS.border}`, flexShrink: 0, overflowY: "auto", padding: "12px 0" }}>
            <button onClick={() => setView("home")} style={{ width: "100%", textAlign: "right", padding: "10px 18px", background: view === "home" ? `${COLORS.accent}22` : "transparent", border: "none", cursor: "pointer", color: view === "home" ? COLORS.accent : COLORS.muted, fontFamily: "inherit", fontWeight: 700, fontSize: 13, display: "flex", gap: 8, alignItems: "center" }}>
              <span>🏠</span> דף הבית
            </button>
            <div style={{ height: 1, background: COLORS.border, margin: "8px 0" }} />
            {CHAPTERS.map(ch => {
              const pct = progress[ch.id] || 0;
              const isActive = selectedChapter?.id === ch.id && view === "chapter";
              return (
                <button key={ch.id} onClick={() => openChapter(ch)}
                  style={{ width: "100%", textAlign: "right", padding: "10px 18px", background: isActive ? `${COLORS.accent}15` : "transparent", border: "none", cursor: "pointer", color: isActive ? COLORS.accent : COLORS.text, fontFamily: "inherit", fontSize: 13, display: "flex", gap: 10, alignItems: "center", borderRight: isActive ? `3px solid ${COLORS.accent}` : "3px solid transparent", transition: "all 0.15s" }}>
                  <span style={{ fontSize: 16, flexShrink: 0 }}>{ch.icon}</span>
                  <div style={{ flex: 1, textAlign: "right" }}>
                    <div style={{ fontWeight: 600, fontSize: 12 }}>{ch.title}</div>
                    <div style={{ marginTop: 3 }}>
                      <div style={{ background: COLORS.border, borderRadius: 3, height: 3, width: "100%" }}>
                        <div style={{ background: pct === 100 ? COLORS.accent3 : pct > 0 ? COLORS.accent : "transparent", width: `${pct}%`, height: "100%", borderRadius: 3, transition: "width 0.5s" }} />
                      </div>
                    </div>
                  </div>
                  <span style={{ color: pct === 100 ? COLORS.accent3 : COLORS.muted, fontSize: 10, fontWeight: 800, flexShrink: 0 }}>
                    {pct === 100 ? "✓" : pct > 0 ? `${pct}%` : `${ch.id}`}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Main Content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "28px 32px" }}>
          {view === "home" && (
            <div>
              {/* Hero */}
              <div style={{ background: `linear-gradient(135deg, ${COLORS.card} 0%, #1a1040 100%)`, borderRadius: 20, padding: "40px 36px", marginBottom: 32, border: `1px solid ${COLORS.border}`, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -20, left: -20, width: 200, height: 200, background: `${COLORS.accent}08`, borderRadius: "50%" }} />
                <div style={{ position: "relative" }}>
                  <div style={{ color: COLORS.accent, fontWeight: 900, fontSize: 13, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>קורס מקיף</div>
                  <h1 style={{ margin: "0 0 12px", fontSize: 36, fontWeight: 900, lineHeight: 1.2 }}>
                    שפת <span style={{ color: COLORS.accent }}>C</span> מהיסוד
                  </h1>
                  <p style={{ color: COLORS.muted, fontSize: 15, lineHeight: 1.7, maxWidth: 500, margin: "0 0 24px" }}>
                    18 פרקים מקיפים ללימוד שפת C, כולל תיאוריה, קוד, טבלאות מעקב, שאלות ובוחנים.
                  </p>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <button onClick={() => openChapter(CHAPTERS[0])} style={{ background: COLORS.accent, color: "#000", border: "none", borderRadius: 10, padding: "12px 24px", fontWeight: 800, fontSize: 15, cursor: "pointer" }}>
                      התחל ללמוד ←
                    </button>
                    {completedChapters > 0 && (
                      <button onClick={() => openChapter(CHAPTERS[completedChapters] || CHAPTERS[0])} style={{ background: COLORS.card, color: COLORS.accent, border: `1px solid ${COLORS.accent}44`, borderRadius: 10, padding: "12px 24px", fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
                        המשך מפרק {completedChapters + 1}
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16, marginBottom: 32 }}>
                {[
                  { label: "פרקים", value: "18", icon: "📚", color: COLORS.accent },
                  { label: "הושלמו", value: completedChapters, icon: "✅", color: COLORS.accent3 },
                  { label: "ציון כולל", value: `${overallPct}%`, icon: "🏆", color: COLORS.warn },
                  { label: "נושאים", value: "180+", icon: "🎯", color: COLORS.accent2 },
                ].map((s, i) => (
                  <div key={i} style={{ background: COLORS.card, borderRadius: 14, padding: "20px", border: `1px solid ${COLORS.border}`, textAlign: "center" }}>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
                    <div style={{ fontSize: 28, fontWeight: 900, color: s.color }}>{s.value}</div>
                    <div style={{ color: COLORS.muted, fontSize: 12, marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Chapter Grid */}
              <h2 style={{ color: COLORS.text, fontWeight: 800, marginBottom: 16 }}>📖 כל הפרקים</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14 }}>
                {CHAPTERS.map(ch => {
                  const pct = progress[ch.id] || 0;
                  return (
                    <button key={ch.id} onClick={() => openChapter(ch)}
                      style={{ textAlign: "right", background: COLORS.card, border: `1px solid ${pct === 100 ? COLORS.accent3 + "55" : COLORS.border}`, borderRadius: 14, padding: "18px", cursor: "pointer", transition: "all 0.2s", fontFamily: "inherit", color: COLORS.text }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                        <span style={{ fontSize: 8, color: pct === 100 ? COLORS.accent3 : COLORS.muted, fontWeight: 800, background: pct === 100 ? `${COLORS.accent3}22` : COLORS.surface, padding: "3px 8px", borderRadius: 6 }}>
                          {pct === 100 ? "✓ הושלם" : pct > 0 ? `${pct}%` : `פרק ${ch.id}`}
                        </span>
                        <span style={{ fontSize: 28 }}>{ch.icon}</span>
                      </div>
                      <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 6 }}>{ch.title}</div>
                      <div style={{ color: COLORS.muted, fontSize: 11, marginBottom: 10 }}>{ch.goals[0]}</div>
                      <div style={{ background: COLORS.surface, borderRadius: 4, height: 4 }}>
                        <div style={{ background: pct === 100 ? COLORS.accent3 : COLORS.accent, width: `${pct}%`, height: "100%", borderRadius: 4, transition: "width 0.5s" }} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {view === "chapter" && selectedChapter && (
            <div>
              {/* Chapter Navigation */}
              <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
                <button onClick={() => setView("home")} style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 8, padding: "8px 14px", cursor: "pointer", color: COLORS.muted, fontFamily: "inherit", fontSize: 13 }}>
                  ← חזור לבית
                </button>
                {selectedChapter.id > 1 && (
                  <button onClick={() => openChapter(CHAPTERS[selectedChapter.id - 2])} style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 8, padding: "8px 14px", cursor: "pointer", color: COLORS.muted, fontFamily: "inherit", fontSize: 13 }}>
                    ▶ פרק קודם
                  </button>
                )}
                {selectedChapter.id < CHAPTERS.length && (
                  <button onClick={() => openChapter(CHAPTERS[selectedChapter.id])} style={{ background: COLORS.accent, border: "none", borderRadius: 8, padding: "8px 14px", cursor: "pointer", color: "#000", fontFamily: "inherit", fontWeight: 700, fontSize: 13 }}>
                    פרק הבא ▶
                  </button>
                )}
              </div>
              <ChapterView chapter={selectedChapter} progress={progress} onProgress={handleProgress} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
