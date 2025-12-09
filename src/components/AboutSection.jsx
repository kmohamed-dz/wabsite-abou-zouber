import { Briefcase, Code, User, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

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

            {/* الشيخ أبو الزبير الأزوادي */}
            <SheikhCard
              name="فضيلة الشيخ أبو الزبير محمد بن موسى الأزوادي"
              shortText="حفظ القرآن في تينزاوتين، ودرس العلم في بلاد شنقيط. له مؤلفات مشهورة منها «إشهار السيوف والأسنة...»"
              fullText={`
                حفظ القرآن في تينزاوتين، ودرس العلم في بلاد شنقيط (موريتانيا).<br />
                له عدة مؤلفات من أشهرها كتاب «إشهار السيوف والأسنة في نحر الظلوم لأهل السنة».<br />
                وهو الآن يواصل دروسه في المدرسة القمرية الواقعة في جنوب الجزائر (تمنراست).<br />
                نسأل الله أن يطيل عمره على طاعته وينفع به.
              `}
            />

            {/* الشيخ محمد أداس السوقي */}
            <SheikhCard
              name="فضيلة الشيخ محمد أداس السوقي"
              shortText="الشيخ محمد أداس بن أحمد السوقي الأنصاري، ينتسب إلى الصحابي سعد بن عبادة رضي الله عنه، حفظ القرآن وهو ابن 14 سنة..."
              fullText={`
                هو الشيخ محمد أداس بن أحمد السوقي الأنصاري، يمتد نسبه إلى الصحابي الجليل سعد بن عبادة بن دليم الأنصاري رضي الله عنه.<br /><br />
                
                حفظ القرآن الكريم كاملاً على يد عم أمه وخال أبيه وهو ابن أربع عشرة سنة فقط، ثم جدَّ في طلب العلم فحفظ المتون المقررة كالأخضري والآجرومية وغيرها.<br /><br />
                
                من أبرز شيوخه: العلامة سيد البكاي بن سيد محمد السوقي، والشيخ العتيق بن سعد الدين.<br /><br />
                
                عُيِّن سابقاً معلماً للقرآن في مديرية الشؤون الدينية بتمنراست، وهو الآن عضو في المجلس العلمي بولاية تمنراست.<br /><br />
                
                نسأل الله أن ينفع به ويبارك في عمره وعلمه.
              `}
            />

            {/* الشيخ سالم موريدا */}
            <SheikhCard
              name="فضيلة الشيخ سالم موريدا"
              shortText="حفظ القرآن والمتون الفقهية، ثم حصل على ليسانس في علم النفس، وبعدها طلب العلم في موريتانيا عند الشيخ محمد سالم ولد عدود..."
              fullText={`
                حفظ القرآن الكريم وبعض المتون الفقهية كمتن ابن عاشر، ثم حصل على شهادة ليسانس في علم النفس في ولاية وهران، وعُيّن أستاذاً مستخلفاً بثانوية سالي دائرة رڨان، ثم غادر إلى بلاد شنقيط وطلب العلم هناك، وأفضل شيوخه عنده العلامة الشيخ محمد سالم ولد عدود.<br /><br />
                رجع إلى أدرار ينشر التوحيد ويحذر من الشرك في مدرسته المسماة بالمدرسة الشمقمقية، وله عدة مؤلفات منها «المعين على كشف المتوسل بالصالحين» وغيرها.<br /><br />
                نسأل الله أن ينفع به.
              `}
            />

            {/* الشيخ أبو إسحاق */}
            <SheikhCard
              name="فضيلة الشيخ أبو إسحاق"
              shortText="متدرج في التعليم النظامي إلى الجامعة، حاصل على ليسانس علوم إسلامية تخصص أصول الفقه..."
              fullText=" 
متدرج في التعليم النظامي إلى الجامعة، حاصل على ليسانس علوم إسلامية تخصص أصول الفقه من كلية أصول الدين جامعة الجزائر ،سنة التخرج ٢٠٠٤
أستاذ تعليم ابتدائي منذ ٢٠٠٥ إلى يومنا هذا .، ويُعرف  حرصه على نشر التوحيد وتحذير الأمة من البدع والخرافات. نسأل الله أن ينفع به."
            />

            {/* الشيخ أبو أسامة ابن وقليل */}
            <SheikhCard
              name="فضيلة الشيخ أبو أسامة ابن وقليل"
              shortText="أصله من ولاية المدية، القاطن حاليا بولاية غرداية تتلمذ على يد الشيخ مقبل الوادعي رحمه الله لـمدة ..."
              fullText="أصله من ولاية المدية، القاطن حاليا بولاية غرداية تتلمذ على يد الشيخ مقبل الوادعي رحمه الله لـمدة تزيد على عشر سنوات وكان الشيخ مقبل يقدمه ويسأل عنه كثيرا في حلقه العلمية ويقول  هل الشيخ مصطفى موجود؟ ، بل كان الشيخ مقبل يقدمه للتدريس أحيانا، وطلب منه الشيخ مقبل أن يشرح كتاب نيل الأوطار، ولازم الشيخ مقبل رحمه الله حتى الوفاة. وقد استفاد كثيرا من علماء اليمن بدار الحديث بدماج، وذكره الشيخ محمد الصغير العبدلي المقطري في مقدمة كتابه  الحلل الذهبية على التحفة السنية . ووظف إماما بأحد المساجد بدولة الإمارات. الشيخ أبو أسامة هادئ الطبع، حسن الخلق، قليل الكلام، بعيد عن الشهرة، تعلوا وجهه إبتسامة، يحب طلبة العلم، ويرحب بهم، أخلاقه مع الناس بولاية غرداية جيدة، وهو متخلق بالحياء والتواضع والزهد، ويلمس هذا من جلس مرة واحدة في حلقه العلمية.."
            />

          </div>

          {/* ====================== عمود الهدف والاستخدام ====================== */}
          <div className="lg:col-span-2 space-y-8">
            <div className="gradient-border p-8 rounded-2xl card-hover">
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-full bg-primary/10">
                  <Code className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">الهدف من تطوير هذا الموقع</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    أن ينتفع به طلبة العلم في كل مكان، وأن يتم تجميع مصادر التعلم في مكان واحد ليسهل على الطالب المراجعة والحفظ والاستفادة من علم هؤلاء المشايخ الأفاضل.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-8 rounded-2xl card-hover">
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-full bg-primary/10">
                  <User className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">كيفية استخدام الموقع</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    يتوفر في الموقع دروس وفتاوى ومقالات وكتب مؤلفة من المشايخ، كلها مرتبة ومصنفة ليسهل الوصول إليها بسرعة ويسر.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-8 rounded-2xl card-hover">
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-full bg-primary/10">
                  <Briefcase className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">انشر الخير</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    ساعد في نشر هذا الموقع بين طلبة العلم لينتفعوا بعلم المشايخ الأفاضل ولنشر المنهج السلفي على الوجه الصحيح، ففي إحياء سنة ونشر علم حسنة.
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

// مكوّن الشيخ - JavaScript خالص (بدون TypeScript)
const SheikhCard = ({ name, shortText, fullText }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-card rounded-2xl p-8 shadow-lg border transition-all duration-300">
      <h3 className="text-2xl font-bold text-primary mb-4 text-right">{name}</h3>

      <div className="text-muted-foreground leading-relaxed text-right space-y-3">
        <p
          className="transition-all duration-500"
          dangerouslySetInnerHTML={{ __html: isExpanded ? fullText : shortText }}
        />

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-primary font-medium hover:underline mt-4"
        >
          {isExpanded ? (
            <>
              عرض أقل <ChevronUp className="h-5 w-5" />
            </>
          ) : (
            <>
              اقرأ المزيد <ChevronDown className="h-5 w-5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};