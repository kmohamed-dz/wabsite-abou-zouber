import { useState } from "react";
import { cn } from "@/lib/utils";

const lectures = [
  // نفس القائمة اللي عندك...
  { name: "وسائل منع الحمل وإسقاطه", scholar: "الشيخ محمد أداس حفظه الله", category: "الفتاوي", link: "https://t.me/qq5558880/350" },
  { name: "أجوبة الشيخ محمد أداس على بعض الأسئلة", scholar: "الشيخ محمد أداس", category: "الفتاوي", link: "https://t.me/qq5558880/345" },
  { name: "صنع الطعام والإحداد على الميت وزيارة القبور", scholar: "الشيخ محمد أداس", category: "الفتاوي", link: "https://t.me/qq5558880/332" },
  { name: "التحذير من الشرك ووجوب الخوف منه", scholar: "الشيخ محمد أداس", category: "الفتاوي", link: "https://t.me/qq5558880/318" },
  { name: "حكم التهاون في متابعة المؤذن", scholar: "الشيخ محمد أداس", category: "الفتاوي", link: "https://t.me/qq5558880/310" },
  { name: "لباس المرأة الشرعي", scholar: "الشيخ محمد أداس", category: "الفتاوي", link: "https://t.me/qq5558880/298" },
  { name: "حكم التهنئة برأس السنة الميلادية", scholar: "من فتاوى الشيخ ابن عثيمين رحمه الله - ألقاه الشيخ محمد أداس", category: "الدروس", link: "https://t.me/qq5558880/301" },
  { name: "الملخص في شرح كتاب التوحيد", scholar: "الشيخ محمد أداس حفظه الله", category: "الدروس", link: "https://t.me/qq5558880/289" },
  { name: "حكم الاحتفال بالمولد النبوي", scholar: "الشيخ محمد أداس", category: "الدروس", link: "https://t.me/qq5558880/275" },
  { name: "آفات غلاء المهور", scholar: "الشيخ محمد أداس", category: "الدروس", link: "https://t.me/qq5558880/262" },
  { name: "رد على الشبهات حول دعوة الشيخ محمد بن عبد الوهاب", scholar: "الشيخ محمد أداس", category: "الدروس", link: "https://t.me/qq5558880/248" },
];

const categories = ["all", "الفتاوي", "الدروس", "المقالات"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filtered = lectures.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            مصادر <span className="text-primary">التعلم الشرعي</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            دروس وفتاوى من الشيخ محمد أداس حفظه الله تعالى
          </p>
        </div>

        {/* أزرار الفلترة */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-3 rounded-full font-semibold transition-all",
                activeCategory === cat
                  ? "bg-primary text-white shadow-lg"
                  : "bg-card border hover:bg-secondary/50"
              )}
            >
              {cat === "all" ? "الكل" : cat}
            </button>
          ))}
        </div>

        {/* البطاقات - صغيرة وأنيقة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((item, index) => (
            <a
              key={index}
              href={item.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group block bg-card rounded-xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/40 hover:-translate-y-1.5",
                !item.link && "opacity-60 pointer-events-none"
              )}
            >
              <div className="text-right">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-relaxed">
                  {item.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                  {item.scholar}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-end gap-2 text-green-600">
                <span className="text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  استمع
                </span>
                <div className="p-2 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.36 6.64l-1.79 8.42c-.13.61-.47.76-.95.47l-2.72-2-1.39 1.34c-.15.15-.28.28-.57.28l.19-2.72 5-4.56c.22-.2-.05-.31-.32-.11l-6.18 3.89-2.38-.74c-.52-.16-.53-.52.11-.76l9.9-3.81c.43-.17.81.1.81.53z"/>
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-xl">جاري إضافة المزيد من الدروس والفتاوى قريبًا بإذن الله</p>
          </div>
        )}
      </div>
    </section>
  );
};