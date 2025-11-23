import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          نبذة <span className="text-primary">  عن المشايخ الافاضل</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              فضيلة الشيخ سالم موريدا
            </h3>
            <p className="text-muted-foreground">
              With over 5 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>
            <h3 className="text-2xl font-semibold">
              فضيلة الشيخ أبو الزبير الازوادي
            </h3>
            <p className="text-muted-foreground">
              With over 5 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>
            <h3 className="text-2xl font-semibold">
              فضيلة الشيخ اداس
            </h3>
            <p className="text-muted-foreground">
              With over 5 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>
            <h3 className="text-2xl font-semibold">
              فضيلة الشيخ أبو إسحاق
            </h3>
            <p className="text-muted-foreground">
              With over 5 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>
            <h3 className="text-2xl font-semibold">
              فضيلة الشيخ   أبو أسامة ابن وقليل
            </h3>
            <p className="text-muted-foreground">
              With over 5 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> الهدف من تطوير هذا الموقع</h4>
                  <p className="text-muted-foreground">
                    ان ينتفع به طلبة العلم في كل مكان وان يتم تجميع مصادر تعلم في مكان واحد لكي يسهل عليه المراجعة والحفظ
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">كيفية استخدام الموقع</h4>
                  <p className="text-muted-foreground">
                    يتوفر في الموقع عدة مصادر طلب العلم من بينها فيديوهات لدروس وفتاوي  المشايخ ومقالات وكتب تم تأليفها من طرفهم.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg"></h4>
                  <p className="text-muted-foreground">
                    حاول نشر هذا الموقع بين طلبة العلم لكي يستفيدوا بعلم هولاء المشايخ الافاضل ونشر المنهج السلفي على الشكل الصحيح.
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
