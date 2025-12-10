import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* ما في أي خلفية ولا دوائر ولا شيء */}
      
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-10">

          {/* بسم الله الرحمن الرحيم */}
          <p className="text-base md:text-lg text-primary/80 font-medium tracking-wider opacity-0 animate-fade-in">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>

          {/* التحية */}
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-relaxed">
            <span className="opacity-0 animate-fade-in block">
              السلام عليكم ورحمة الله وبركاته
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 block mt-3 text-2xl md:text-4xl">
              أهلاً ومرحباً بكم في
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2 block mt-3 text-3xl md:text-5xl font-bold">
              موقع دروس مشايخ اهل السنة والجماعة
            </span>
            <span className="block mt-5 text-xl md:text-3xl text-foreground/80 opacity-0 animate-fade-in-delay-3">
              بالجنوب الجزائري
            </span>
          </h1>

          {/* الوصف */}
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-4 leading-loose px-4">
            «وَمَنْ يُعَظِّمْ شَعَائِرَ اللَّهِ فَإِنَّهَا مِنْ تَقْوَى الْقُلُوبِ»
            <br /><br />
            تجدون هنا – بحمد الله – دروسًا نافعة وفتاوى سديدة ومؤلفات قيّمة باللغتين العربية والتارقية<br />
            لمعالي الشيخ محمد أداس، والشيخ أبو الزبير الأزوادي، والشيخ سالم موريدا،<br />
            والشيخ أبو إسحاق، والشيخ أبو أسامة ابن وقليل<br />
            <span className="block mt-5 text-primary font-semibold text-lg">
              حفظهم الله تعالى، وبارك في علمهم، ونفع بهم الأمة
            </span>
          </p>

          {/* الزر */}
          <div className="pt-8 opacity-0 animate-fade-in-delay-5">
            <a
              href="#books"
              className="cosmic-button inline-block px-10 py-4 text-base md:text-lg font-bold"
            >
              اطلع على المؤلفات والدروس النافعة
            </a>
          </div>
        </div>
      </div>

      {/* السهم السفلي */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-0 animate-fade-in-delay-6">
        <span className="text-xs md:text-sm text-muted-foreground mb-2">
          اسحب للأسفل
        </span>
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};