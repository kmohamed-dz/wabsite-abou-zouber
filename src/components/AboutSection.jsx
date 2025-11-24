import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-secondary/5">
      <div className="container mx-auto max-w-6xl">
        {/* العنوان */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          نبذة <span className="text-primary">عن المشايخ الأفاضل</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ====================== عمود المشايخ ====================== */}
          <div className="space-y-10">
            {/* الشيخ الأول – أبو الزبير الأزوادي */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold text-primary mb-4">
                فضيلة الشيخ أبو الزبير محمد بن موسى الأزوادي
              </h3>
              <p className="text-muted-foreground leading-relaxed text-right">
                ولد ...<br />
                حفظ القرآن في تينزاوتين، ودرس العلم في بلاد شنقيط (موريتانيا).<br />
                له عدة مؤلفات من أشهرها كتاب «إشهار السيوف والأسنة في نحر الظلوم لأهل السنة».<br />
                وهو الآن يواصل دروسه في المدرسة القمرية الواقعة في جنوب الجزائر (تمنراست).<br />
                نسأل الله أن يطيل عمره على طاعته وينفع به.
              </p>
            </div>

            {/* الشيخ الثاني – محمد أداس */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold text-primary mb-4">
                فضيلة الشيخ محمد أداس
              </h3>
              <p className="text-muted-foreground leading-relaxed text-right">
                {/* ←←← أضف هنا نبذة الشيخ محمد أداس ←←← */}
                حفظ القرآن الكريم... درس على يد فلان... له دروس مشهورة في كذا... مؤلفاته...
              </p>
            </div>

            {/* الشيخ الثالث – سالم موريدا */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold text-primary mb-4">
                فضيلة الشيخ سالم موريدا
              </h3>
              <p className="text-muted-foreground leading-relaxed text-right">
                {/* ←←← أضف هنا نبذة الشيخ سالم موريدا ←←← */}
              </p>
            </div>

            {/* الشيخ الرابع – أبو إسحاق */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold text-primary mb-4">
                فضيلة الشيخ أبو إسحاق
              </h3>
              <p className="text-muted-foreground leading-relaxed text-right">
                {/* ←←← أضف هنا نبذة الشيخ أبو إسحاق ←←← */}
              </p>
            </div>

            {/* الشيخ الخامس – أبو أسامة ابن وقليل */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border">
              <h3 className="text-2xl font-bold text-primary mb-4">
                فضيلة الشيخ أبو أسامة ابن وقليل
              </h3>
              <p className="text-muted-foreground leading-relaxed text-right">
                {/* ←←← أضف هنا نبذة الشيخ أبو أسامة ←←← */}
              </p>
            </div>
          </div>

          {/* ====================== عمود الهدف والاستخدام ====================== */}
          <div className="lg:col-span-2 space-y-8">
            {/* الهدف من الموقع */}
            <div className="gradient-border p-8 rounded-2xl card-hover">
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-full bg-primary/10">
                  <Code className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">الهدف من تطوير هذا الموقع</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    أن ينتفع به طلبة العلم في كل مكان، وأن يتم تجميع مصادر التعلم في مكان واحد
                    ليسهل على الطالب المراجعة والحفظ والاستفادة من علم هؤلاء المشايخ الأفاضل.
                  </p>
                </div>
              </div>
            </div>

            {/* كيفية الاستخدام */}
            <div className="gradient-border p-8 rounded-2xl card-hover">
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-full bg-primary/10">
                  <User className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">كيفية استخدام الموقع</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    يتوفر في الموقع دروس وفتاوى ومقالات وكتب مؤلفة من المشايخ،
                    كلها مرتبة ومصنفة ليسهل الوصول إليها بسرعة ويسر.
                  </p>
                </div>
              </div>
            </div>

            {/* دعوة للنشر */}
            <div className="gradient-border p-8 rounded-2xl card-hover">
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-full bg-primary/10">
                  <Briefcase className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">انشر الخير</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    ساعد في نشر هذا الموقع بين طلبة العلم لينتفعوا بعلم المشايخ الأفاضل
                    ولنشر المنهج السلفي على الوجه الصحيح، ففي إحياء سنة ونشر علم حسنة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};