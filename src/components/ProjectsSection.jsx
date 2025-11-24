import { ExternalLink, ArrowRight, Github } from "lucide-react";

const books = [
  {
    id: 1,
    title: "فتاوى اللجنة الدائمة",
    description: "مجموعة فتاوى رسمية في مختلف الأبواب الفقهية",
    image: "/books/1.jpg",
    tags: ["فتاوى", "رسمي"],
    demoUrl: "https://t.me/c/2364626944/1/459",
    githubUrl: "https://t.me/c/2364626944/1/459",
  },
  {
    id: 2,
    title: "شرح كتاب التوحيد",
    description: "شرح الشيخ محمد بن عبدالوهاب رحمه الله",
    image: "/books/2.jpg",
    tags: ["عقيدة", "توحيد"],
    demoUrl: "https://t.me/your_link",
    githubUrl: "https://t.me/your_link",
  },
  {
    id: 3,
    title: "الملخص الفقهي",
    description: "للشيخ صالح الفوزان حفظه الله",
    image: "/books/3.jpg",
    tags: ["فقه", "الفوزان"],
    demoUrl: "https://t.me/another_link",
    githubUrl: "https://t.me/another_link",
  },
  {
    id: 4,
    title: "فتاوى اللجنة الدائمة",
    description: "مجموعة فتاوى رسمية في مختلف الأبواب الفقهية",
    image: "/books/1.jpg",
    tags: ["فتاوى", "رسمي"],
    demoUrl: "https://t.me/c/2364626944/1/459",
    githubUrl: "https://t.me/c/2364626944/1/459",
  },
  {
    id: 5,
    title: "شرح كتاب التوحيد",
    description: "شرح الشيخ محمد بن عبدالوهاب رحمه الله",
    image: "/books/2.jpg",
    tags: ["عقيدة", "توحيد"],
    demoUrl: "https://t.me/your_link",
    githubUrl: "https://t.me/your_link",
  },
  {
    id: 6,
    title: "الملخص الفقهي",
    description: "للشيخ صالح الفوزان حفظه الله",
    image: "/books/3.jpg",
    tags: ["فقه", "الفوزان"],
    demoUrl: "https://t.me/another_link",
    githubUrl: "https://t.me/another_link",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          الكتب التي تم تأليفها من <span className="text-primary">قبلهم</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          جزء من مؤلفات المشايخ.
        </p>

        {/* الكروت صغيرة وأنيقة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="group bg-card rounded-xl overflow-hidden shadow-sm card-hover border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* الصورة */}
              <div className="h-40 bg-gray-100 overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x300/efefef/999999?text=غلاف+الكتاب";
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4">
                {/* التاغات */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {book.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* العنوان */}
                <h3 className="text-lg font-bold text-right text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {book.title}
                </h3>

                {/* الوصف */}
                <p className="text-xs text-muted-foreground text-right mt-2 line-clamp-2 leading-relaxed">
                  {book.description}
                </p>

                {/* الأيقونات */}
                <div className="flex justify-end gap-3 mt-4">
                  <a
                    href={book.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors"
                    title="اطلب الكتاب"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={book.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors"
                    title="معلومات إضافية"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* زر التواصل العام */}
        <div className="text-center mt-16">
          <a
            href="https://t.me/your_telegram"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button inline-flex items-center gap-3 px-8 py-4 text-lg font-bold"
          >
            ارسل رسالة هنا إذا أردت اقتناء أحد هذه المؤلفات أو معرفة أين تشتريها
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};