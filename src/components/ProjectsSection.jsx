import { ExternalLink, ArrowRight } from "lucide-react";

const books = [
  {
    id: 1,
    title: "أربعون حديثا في فضائل القرءان ",
    author: "تأليف: الشيخ أبو الزبير محمد بن موسى الأزوادي حفظه الله",
    //description: "كتاب نفيس في بيان حكم السحر وأنواعه وطرق العلاج الشرعي منه",
    image: "/projects/abouzuber2.jpg", // ضع اسم الصورة اللي حملتها من الصورة الأولى
    downloadUrl: "https://chat.whatsapp.com/KB1375T6gWo8WmfrwyqtA7?mode=hqrt1"
  },
  {
    id: 2,
    title:  "الطرة على لامية الافعال والمجمرة",
    author: "تأليف: الشيخ سالم موريدا  حفظه الله",
    //description: "ردود علمية قوية على الصوفية والروافض والأشاعرة وغيرهم",
    image:"/projects/salam1.jpg",
    downloadUrl: "https://chat.whatsapp.com/KB1375T6gWo8WmfrwyqtA7?mode=hqrt1"
  },
  {
    id: 3,
    title: "إ مداد الأنداد بنظم الأضداد  ",
    author: "إعداد: الشيخ محمد أداس السوقي حفظه الله",
    //description: "مجموعة نفيسة من الفوائد واللطائف والمواعظ من الكتاب والسنة",
    image: "/projects/adas1.jpg",
    downloadUrl: "https://chat.whatsapp.com/KB1375T6gWo8WmfrwyqtA7?mode=hqrt1"
  },
  {
    id: 4,
    title: "إتحاف الإخوان بالتعليق على منظومة حسن البيان في نظم مشتركان القرءان",
    author: "تأليف: الشيخ أبو الزبير محمد بن موسى الأزوادي حفظه الله",
    //description: "شرح نفيس لكلمة التوحيد «لا إله إلا الله» مع بيان شروطها ونواقضها",
    image: "/projects/abouzuber3.jpg",
    downloadUrl: "https://chat.whatsapp.com/KB1375T6gWo8WmfrwyqtA7?mode=hqrt1"
  },
  {
    id: 5,
    title: "المعين على كشف شبه المتوسل بالصالحين ",
    author: "تأليف: الشيخ سالم موريدا حفظه الله",
    //description: "كشف لحقيقة جماعة الإخوان المفلسين وانحرافهم عن منهج السلف",
    image: "/projects/salam3.jpg",
    downloadUrl: "https://chat.whatsapp.com/KB1375T6gWo8WmfrwyqtA7?mode=hqrt1"
  },
  {
    id: 6,
    title: "تهذيب الدر المنظوم على ألفاظ نظم آجروم ويليه التنبيهات على أوهام من نسب ابن آب إلى الأغلال الشناقطة والتصحيح أنه جزائري من توات ",
    author: "تأليف: الشيخ سالم موريدا حفظه الله",
    //description: "فتاوى وأحكام تتعلق بتلاوة القرآن وحفظه وتجويده والعمل به",
    image: "/projects/salam4.jpg",
    downloadUrl: "https://chat.whatsapp.com/KB1375T6gWo8WmfrwyqtA7?mode=hqrt1"
  },
  {
    id: 7,
    title: "    ",
    author: " تأليف: الشيخ سالم موريدا حفظه الله" ,
    //description: "مجموعة من فتاوى الشيخ في العقيدة والمنهج والرد على المخالفين",
    image: "/projects/salam2.jpg",
    //downloadUrl: "https://t.me/your_link_here"
  },
  {
    id: 8,
    title: "إشهار السيوف والاسنة في نحر الظلوم لأهل السنة ",
    author: "تأليف: الشيخ أبو الزبير محمد بن موسى الأزوادي حفظه الله",
    //description: "كتاب في بيان أحكام الجهاد وشروطه وضوابطه على منهج أهل السنة",
    image: "/projects/abouzube1.jpg",
    downloadUrl: "https://chat.whatsapp.com/KB1375T6gWo8WmfrwyqtA7?mode=hqrt1"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-secondary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            الكتب <span className="text-primary">التي ألّفها المشايخ</span> حفظهم الله
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            مؤلفات نفيسة في العقيدة والتوحيد والرد على أهل البدع، من إصدارات المشايخ الأفاضل
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg border hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              {/* صورة الغلاف */}
              <div className="h-64 bg-muted overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x500/f5f5f5/999?text=غلاف+الكتاب";
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-right text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-sm text-primary/80 font-semibold text-right mt-2">
                    {book.author}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground text-right leading-relaxed line-clamp-3">
                  {book.description}
                </p>

                <div className="flex justify-end pt-4 border-t border-border/30">
                  <a
                    href={book.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
                  >
                    اطلب الكتاب أو حمل نسخة
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* زر التواصل */}
        <div className="text-center mt-20">
          <a
            href="#contact"
            //target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all"
          >
            تواصل معنا للحصول على أي كتاب من المؤلفات
            <ArrowRight size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};