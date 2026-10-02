/* =====================================================================
   ICONIC × ECSEL Expo 2026 — Landing Page
   i18n : Français / العربية / English
   ---------------------------------------------------------------------
   - Les slogans de marque restent en anglais (DON'T JUST SHOW UP…).
   - Les VALEURS des champs du formulaire restent en français (canoniques)
     pour que les leads reçus par ICONIC soient homogènes ; seul le texte
     affiché est traduit.
   ===================================================================== */
(function () {
  "use strict";

  var DICT = {
    /* ----------------------------- FRANÇAIS ----------------------------- */
    fr: {
      "nav.formats": "Les formats",
      "nav.approche": "Notre approche",
      "nav.offre": "Votre offre média",
      "nav.contact": "Contact",
      "nav.cta": "Recevoir mon offre",

      "hero.partnerSub": "",
      "skip": "Aller au formulaire",
      "hero.lead": "Vous exposez à ECSEL Expo 2026 ? Transformez votre présence au salon en une véritable opportunité de <strong>visibilité</strong>, de <strong>contenu</strong> et de <strong>business</strong>.",
      "hero.sub": "ICONIC imagine pour votre marque une offre média personnalisée, adaptée à vos objectifs, votre activité et votre présence à ECSEL Expo.",
      "hero.cta1": "Recevoir mon offre personnalisée",
      "hero.cta2": "Découvrir comment ça marche",
      "hero.visualNote": "Votre marque. Notre regard.",

      "valeur.eyebrow": "Votre présence, amplifiée",
      "valeur.title1": "Votre marque mérite",
      "valeur.title2": "plus qu’un simple stand.",
      "valeur.body": "Vidéo, interview, stories, shooting, contenu social media ou couverture complète : ICONIC conçoit une présence média adaptée à vos objectifs pendant ECSEL Expo 2026.",
      "valeur.note": "Quelques questions suffisent pour construire votre offre personnalisée.",
      "valeur.link": "Explorer les formats",

      "formats.eyebrow": "Les formats ICONIC",
      "formats.title1": "Du contenu qui",
      "formats.title2": "vous met en scène.",
      "formats.sub": "Le bon format pour votre marque. Le bon regard pour le salon.",
      "f1.index": "01 / Le mouvement",
      "f1.title": "Vidéo<br>&amp; Reels",
      "f1.desc": "Donner du rythme à votre présence.",
      "f1.badge": "Vidéo",
      "f2.index": "02 / La parole",
      "f2.desc": "Le visage et la voix de votre marque.",
      "f2.badge": "Interviews",
      "f3.title": "Présentation de stand",
      "f3.desc": "Votre présence, mise en scène.",
      "f4.title": "Présentation produit / service",
      "f4.desc": "Vos solutions au premier plan.",
      "f5.title": "Stories",
      "f5.desc": "L’énergie du salon, en direct.",
      "f6.title": "Shooting photo",
      "f6.desc": "Des images qui restent.",

      "app.eyebrow": "Un salon. Trois temps forts.",
      "app.sub": "Votre visibilité ne commence pas et ne s’arrête pas au stand.",
      "p1.title": "Avant",
      "p1.lead": "Créer l’attention.",
      "p1.desc": "Préparer votre présence avec du contenu qui donne envie de vous rencontrer.",
      "p1.tag": "Contenu avant le salon",
      "p2.title": "Pendant",
      "p2.lead": "Faire vivre votre marque.",
      "p2.desc": "Capturer vos rencontres, vos produits et les moments qui comptent au cœur du salon.",
      "p2.tag": "Couverture pendant le salon",
      "p3.title": "Après",
      "p3.lead": "Prolonger votre visibilité.",
      "p3.desc": "Faire durer votre présence avec du contenu réutilisable sur vos réseaux.",
      "p3.tag": "Contenu après le salon",

      "offre.eyebrow": "Votre offre personnalisée",
      "offre.title1": "Parlons de",
      "offre.title2": "votre marque.",
      "offre.sub": "Vous avez les objectifs. Nous imaginons le contenu. Quelques questions pour comprendre vos besoins et concevoir votre présence média à ECSEL Expo.",
      "offre.badge": "Sur mesure · Sans engagement",

      "prog.1": "Entreprise", "prog.2": "Objectifs", "prog.3": "Contenu", "prog.4": "Visibilité", "prog.5": "Coordonnées",
      "step.count": "Étape {n} / 5",

      "s1.legend": "Votre entreprise",
      "s1.hint": "Les champs marqués d’un <span class=\"req\">*</span> sont obligatoires.",
      "f.fullname": "Nom &amp; prénom",
      "f.company": "Entreprise / Marque",
      "f.activite": "Votre activité",
      "meta.multi": "Plusieurs réponses possibles",
      "act.1": "E-commerce / Boutique en ligne", "act.2": "Startup", "act.3": "Marque / Fabricant", "act.4": "Prestataire de services",
      "act.5": "Technologie / Solution digitale", "act.6": "Logistique / Livraison", "act.7": "Paiement / Fintech", "act.8": "Autre",
      "ph.autre": "Précisez votre activité",
      "f.taille": "Quelle est la taille de votre entreprise ?",
      "size.1": "Je me lance / Jeune projet", "size.2": "TPE", "size.3": "PME", "size.4": "Grande entreprise / Groupe",

      "s2.legend": "Vos objectifs",
      "f.objectifs": "Quel est votre principal objectif à ECSEL Expo ?",
      "obj.1": "Faire connaître ma marque", "obj.2": "Présenter mes produits ou services", "obj.3": "Gagner en visibilité sur les réseaux sociaux",
      "obj.4": "Attirer de nouveaux clients", "obj.5": "Générer des contacts / leads", "obj.6": "Lancer une nouveauté",
      "obj.7": "Renforcer mon image de marque", "obj.8": "Trouver des partenaires / investisseurs", "obj.9": "Mettre en avant le fondateur ou le dirigeant",

      "s3.legend": "Votre contenu",
      "f.contenu": "Quel type de contenu vous intéresse ?",
      "ct.1": "Vidéo / Reel", "ct.2": "Interview", "ct.3": "Présentation de mon stand", "ct.4": "Présentation d’un produit ou service",
      "ct.5": "Stories", "ct.6": "Shooting photo", "ct.7": "Contenu avant le salon", "ct.8": "Couverture pendant le salon",
      "ct.9": "Contenu après le salon", "ct.10": "Je préfère être conseillé(e) par l’équipe ICONIC",

      "s4.legend": "Votre visibilité",
      "f.visibilite": "Quel niveau de visibilité recherchez-vous ?",
      "vis.1": "Une présence simple et efficace", "vis.2": "Une visibilité renforcée",
      "vis.3": "Une campagne complète avant, pendant et après ECSEL", "vis.4": "Je ne sais pas encore — conseillez-moi",
      "f.stand": "Numéro de stand",
      "meta.stand": "si disponible",
      "f.message": "Vous souhaitez nous préciser quelque chose ?",
      "ph.message": "Votre message (optionnel)",

      "s5.legend": "Vos coordonnées",
      "f.phone": "Téléphone / WhatsApp",
      "f.email": "E-mail",
      "f.canal": "Comment préférez-vous être contacté(e) ?",
      "can.2": "Téléphone", "can.3": "E-mail",
      "consent": "En envoyant ce formulaire, vous acceptez d’être contacté(e) par l’équipe ICONIC au sujet de votre présence à ECSEL Expo 2026.",

      "btn.prev": "Précédent",
      "btn.next": "Continuer",
      "btn.submit": "Recevoir mon offre personnalisée",
      "reassure": "Sans engagement — L’équipe ICONIC vous contacte après étude de votre demande.",
      "err.required": "Ce champ est obligatoire.",
      "err.email": "Adresse e-mail invalide.",
      "err.phone": "Numéro de téléphone invalide.",
      "err.group": "Veuillez sélectionner au moins une option.",
      "err.autre": "Merci de préciser votre activité.",
      "err.general": "Une erreur est survenue. Merci de réessayer.",
      "err.network": "Impossible d’envoyer pour le moment. Vérifiez votre connexion et réessayez.",

      "success.title": "Merci {name} !",
      "success.text": "Votre demande a bien été envoyée. L’équipe ICONIC étudie vos besoins et vous recontacte très prochainement pour construire votre offre média personnalisée.",
      "success.sub": "Sans engagement · #Weareiconic",
      "success.home": "Retour en haut",
      "success.wa": "Envoyer aussi sur WhatsApp",

      "final.text": "Votre présence à ECSEL Expo ne s’arrête pas à votre stand. Transformez-la en contenu, visibilité et opportunités avec ICONIC.",
      "final.cta": "Parler à l’équipe ICONIC",

      "footer.tag": "Partenaire média officiel d’ECSEL Expo Algiers 2026.<br>Nous façonnons l’avenir des médias numériques.",
      "footer.rights": "Tous droits réservés."
    },

    /* ----------------------------- العربية ----------------------------- */
    ar: {
      "nav.formats": "الصيغ",
      "nav.approche": "منهجنا",
      "nav.offre": "عرضك الإعلامي",
      "nav.contact": "تواصل",
      "nav.cta": "اطلب عرضك",

      "hero.partnerSub": "الشريك الإعلامي الرسمي",
      "skip": "انتقل إلى النموذج",
      "hero.lead": "هل تعرض في ECSEL Expo 2026؟ حوّل حضورك في المعرض إلى فرصة حقيقية لتحقيق <strong>الظهور</strong> و<strong>المحتوى</strong> و<strong>فرص الأعمال</strong>.",
      "hero.sub": "تصمّم ICONIC لعلامتك عرضًا إعلاميًا مخصّصًا يناسب أهدافك ونشاطك وحضورك في ECSEL Expo.",
      "hero.cta1": "اطلب عرضك المخصّص",
      "hero.cta2": "اكتشف كيف نعمل",
      "hero.visualNote": "علامتك. رؤيتنا.",

      "valeur.eyebrow": "حضورك، مُضاعَف",
      "valeur.title1": "علامتك تستحقّ",
      "valeur.title2": "أكثر من مجرّد جناح.",
      "valeur.body": "فيديو، مقابلة، ستوريز، تصوير، محتوى سوشيال ميديا أو تغطية كاملة: تصمّم ICONIC حضورًا إعلاميًا يناسب أهدافك خلال ECSEL Expo 2026.",
      "valeur.note": "بضعة أسئلة تكفي لبناء عرضك المخصّص.",
      "valeur.link": "استكشف الصيغ",

      "formats.eyebrow": "صيغ ICONIC",
      "formats.title1": "محتوى",
      "formats.title2": "يُبرز علامتك.",
      "formats.sub": "الصيغة المناسبة لعلامتك. النظرة المناسبة للمعرض.",
      "f1.index": "01 / الحركة",
      "f1.title": "فيديو<br>&amp; Reels",
      "f1.desc": "امنح حضورك إيقاعًا.",
      "f1.badge": "فيديو",
      "f2.index": "02 / الكلمة",
      "f2.desc": "وجه علامتك وصوتها.",
      "f2.badge": "مقابلات",
      "f3.title": "تقديم الجناح",
      "f3.desc": "حضورك، بإخراجٍ متقن.",
      "f4.title": "تقديم منتج / خدمة",
      "f4.desc": "حلولك في الواجهة.",
      "f5.title": "ستوريز",
      "f5.desc": "طاقة المعرض، مباشرةً.",
      "f6.title": "جلسة تصوير",
      "f6.desc": "صور تبقى.",

      "app.eyebrow": "معرض واحد. ثلاث لحظات قويّة.",
      "app.sub": "ظهورك لا يبدأ ولا ينتهي عند الجناح.",
      "p1.title": "قبل",
      "p1.lead": "اصنع الاهتمام.",
      "p1.desc": "هيّئ حضورك بمحتوى يشوّق الناس للقائك.",
      "p1.tag": "محتوى ما قبل المعرض",
      "p2.title": "أثناء",
      "p2.lead": "أحيِ علامتك.",
      "p2.desc": "التقط لقاءاتك ومنتجاتك واللحظات المهمّة في قلب المعرض.",
      "p2.tag": "تغطية أثناء المعرض",
      "p3.title": "بعد",
      "p3.lead": "مدّد ظهورك.",
      "p3.desc": "أدِم حضورك بمحتوى قابل لإعادة الاستخدام على شبكاتك.",
      "p3.tag": "محتوى ما بعد المعرض",

      "offre.eyebrow": "عرضك المخصّص",
      "offre.title1": "لنتحدّث عن",
      "offre.title2": "علامتك.",
      "offre.sub": "أنت تملك الأهداف. ونحن نبتكر المحتوى. بضعة أسئلة لفهم احتياجاتك وتصميم حضورك الإعلامي في ECSEL Expo.",
      "offre.badge": "حسب الطلب · دون التزام",

      "prog.1": "الشركة", "prog.2": "الأهداف", "prog.3": "المحتوى", "prog.4": "الظهور", "prog.5": "التواصل",
      "step.count": "الخطوة {n} / 5",

      "s1.legend": "شركتك",
      "s1.hint": "الحقول المميّزة بـ <span class=\"req\">*</span> إلزامية.",
      "f.fullname": "الاسم واللقب",
      "f.company": "الشركة / العلامة",
      "f.activite": "نشاطك",
      "meta.multi": "عدّة إجابات ممكنة",
      "act.1": "تجارة إلكترونية / متجر إلكتروني", "act.2": "شركة ناشئة", "act.3": "علامة / مُصنّع", "act.4": "مزوّد خدمات",
      "act.5": "تكنولوجيا / حلّ رقمي", "act.6": "لوجستيك / توصيل", "act.7": "دفع / فينتك", "act.8": "أخرى",
      "ph.autre": "حدّد نشاطك",
      "f.taille": "ما حجم شركتك؟",
      "size.1": "أنا في البداية / مشروع ناشئ", "size.2": "مؤسسة مصغّرة", "size.3": "مؤسسة صغيرة أو متوسطة", "size.4": "شركة كبيرة / مجموعة",

      "s2.legend": "أهدافك",
      "f.objectifs": "ما هدفك الرئيسي في ECSEL Expo؟",
      "obj.1": "التعريف بعلامتي", "obj.2": "تقديم منتجاتي أو خدماتي", "obj.3": "زيادة ظهوري على مواقع التواصل",
      "obj.4": "جذب عملاء جدد", "obj.5": "توليد جهات اتصال / leads", "obj.6": "إطلاق منتج جديد",
      "obj.7": "تعزيز صورة علامتي", "obj.8": "إيجاد شركاء / مستثمرين", "obj.9": "إبراز المؤسّس أو المدير",

      "s3.legend": "المحتوى الذي يهمّك",
      "f.contenu": "ما نوع المحتوى الذي يهمّك؟",
      "ct.1": "فيديو / Reel", "ct.2": "مقابلة", "ct.3": "تقديم جناحي", "ct.4": "تقديم منتج أو خدمة",
      "ct.5": "ستوريز", "ct.6": "جلسة تصوير", "ct.7": "محتوى ما قبل المعرض", "ct.8": "تغطية أثناء المعرض",
      "ct.9": "محتوى ما بعد المعرض", "ct.10": "أفضّل أن ينصحني فريق ICONIC",

      "s4.legend": "ظهورك",
      "f.visibilite": "ما مستوى الظهور الذي تبحث عنه؟",
      "vis.1": "حضور بسيط وفعّال", "vis.2": "ظهور مُعزّز",
      "vis.3": "حملة كاملة قبل وأثناء وبعد ECSEL", "vis.4": "لا أعرف بعد — انصحوني",
      "f.stand": "رقم الجناح",
      "meta.stand": "إن وُجد",
      "f.message": "هل تودّ إضافة شيء؟",
      "ph.message": "رسالتك (اختياري)",

      "s5.legend": "بيانات التواصل",
      "f.phone": "الهاتف / واتساب",
      "f.email": "البريد الإلكتروني",
      "f.canal": "كيف تفضّل أن نتواصل معك؟",
      "can.2": "هاتف", "can.3": "بريد إلكتروني",
      "consent": "بإرسالك هذا النموذج، فإنك توافق على أن يتواصل معك فريق ICONIC بخصوص حضورك في ECSEL Expo 2026.",

      "btn.prev": "السابق",
      "btn.next": "متابعة",
      "btn.submit": "اطلب عرضك المخصّص",
      "reassure": "دون التزام — يتواصل معك فريق ICONIC بعد دراسة طلبك.",
      "err.required": "هذا الحقل إلزامي.",
      "err.email": "البريد الإلكتروني غير صالح.",
      "err.phone": "رقم الهاتف غير صالح.",
      "err.group": "يرجى اختيار خيار واحد على الأقل.",
      "err.autre": "يرجى تحديد نشاطك.",
      "err.general": "حدث خطأ. يرجى المحاولة مرة أخرى.",
      "err.network": "تعذّر الإرسال حاليًا. تحقّق من اتصالك وأعد المحاولة.",

      "success.title": "شكرًا {name}!",
      "success.text": "تمّ إرسال طلبك بنجاح. يدرس فريق ICONIC احتياجاتك وسيتواصل معك قريبًا جدًا لبناء عرضك الإعلامي المخصّص.",
      "success.sub": "دون التزام · #Weareiconic",
      "success.home": "العودة إلى الأعلى",
      "success.wa": "أرسِل أيضًا عبر واتساب",

      "final.text": "حضورك في ECSEL Expo لا يتوقّف عند جناحك. حوّله إلى محتوى وظهور وفرص مع ICONIC.",
      "final.cta": "تحدّث مع فريق ICONIC",

      "footer.tag": "الشريك الإعلامي الرسمي لمعرض ECSEL Expo Algiers 2026.<br>نحن نحدّد مستقبل الإعلام الرقمي.",
      "footer.rights": "جميع الحقوق محفوظة."
    },

    /* ----------------------------- ENGLISH ----------------------------- */
    en: {
      "nav.formats": "Formats",
      "nav.approche": "Our approach",
      "nav.offre": "Your media offer",
      "nav.contact": "Contact",
      "nav.cta": "Get my offer",

      "hero.partnerSub": "",
      "skip": "Skip to form",
      "hero.lead": "Exhibiting at ECSEL Expo 2026? Turn your presence at the show into a real opportunity for <strong>visibility</strong>, <strong>content</strong> and <strong>business</strong>.",
      "hero.sub": "ICONIC designs a personalized media offer for your brand — tailored to your goals, your business and your presence at ECSEL Expo.",
      "hero.cta1": "Get my personalized offer",
      "hero.cta2": "See how it works",
      "hero.visualNote": "Your brand. Our vision.",

      "valeur.eyebrow": "Your presence, amplified",
      "valeur.title1": "Your brand deserves",
      "valeur.title2": "more than just a booth.",
      "valeur.body": "Video, interview, stories, photoshoot, social media content or full coverage: ICONIC designs a media presence tailored to your goals during ECSEL Expo 2026.",
      "valeur.note": "A few questions are enough to build your personalized offer.",
      "valeur.link": "Explore the formats",

      "formats.eyebrow": "ICONIC formats",
      "formats.title1": "Content that",
      "formats.title2": "puts you in the spotlight.",
      "formats.sub": "The right format for your brand. The right eye for the show.",
      "f1.index": "01 / Motion",
      "f1.title": "Video<br>&amp; Reels",
      "f1.desc": "Give your presence rhythm.",
      "f1.badge": "Video",
      "f2.index": "02 / The voice",
      "f2.desc": "The face and voice of your brand.",
      "f2.badge": "Interviews",
      "f3.title": "Stand presentation",
      "f3.desc": "Your presence, staged.",
      "f4.title": "Product / service presentation",
      "f4.desc": "Your solutions front and center.",
      "f5.title": "Stories",
      "f5.desc": "The energy of the show, live.",
      "f6.title": "Photoshoot",
      "f6.desc": "Images that last.",

      "app.eyebrow": "One show. Three key moments.",
      "app.sub": "Your visibility doesn’t begin or end at the booth.",
      "p1.title": "Before",
      "p1.lead": "Create attention.",
      "p1.desc": "Prepare your presence with content that makes people want to meet you.",
      "p1.tag": "Pre-show content",
      "p2.title": "During",
      "p2.lead": "Bring your brand to life.",
      "p2.desc": "Capture your meetings, your products and the moments that matter at the heart of the show.",
      "p2.tag": "On-site coverage",
      "p3.title": "After",
      "p3.lead": "Extend your visibility.",
      "p3.desc": "Make your presence last with content you can reuse on your networks.",
      "p3.tag": "Post-show content",

      "offre.eyebrow": "Your personalized offer",
      "offre.title1": "Let’s talk about",
      "offre.title2": "your brand.",
      "offre.sub": "You have the goals. We imagine the content. A few questions to understand your needs and design your media presence at ECSEL Expo.",
      "offre.badge": "Tailor-made · No commitment",

      "prog.1": "Company", "prog.2": "Goals", "prog.3": "Content", "prog.4": "Visibility", "prog.5": "Contact",
      "step.count": "Step {n} / 5",

      "s1.legend": "Your company",
      "s1.hint": "Fields marked with <span class=\"req\">*</span> are required.",
      "f.fullname": "Full name",
      "f.company": "Company / Brand",
      "f.activite": "Your activity",
      "meta.multi": "Multiple answers possible",
      "act.1": "E-commerce / Online store", "act.2": "Startup", "act.3": "Brand / Manufacturer", "act.4": "Service provider",
      "act.5": "Technology / Digital solution", "act.6": "Logistics / Delivery", "act.7": "Payment / Fintech", "act.8": "Other",
      "ph.autre": "Specify your activity",
      "f.taille": "What is the size of your company?",
      "size.1": "Just starting / Young project", "size.2": "Micro-business", "size.3": "SME", "size.4": "Large company / Group",

      "s2.legend": "Your goals",
      "f.objectifs": "What is your main goal at ECSEL Expo?",
      "obj.1": "Raise awareness of my brand", "obj.2": "Present my products or services", "obj.3": "Gain visibility on social media",
      "obj.4": "Attract new customers", "obj.5": "Generate contacts / leads", "obj.6": "Launch something new",
      "obj.7": "Strengthen my brand image", "obj.8": "Find partners / investors", "obj.9": "Highlight the founder or director",

      "s3.legend": "Your content",
      "f.contenu": "What type of content interests you?",
      "ct.1": "Video / Reel", "ct.2": "Interview", "ct.3": "Presentation of my stand", "ct.4": "Presentation of a product or service",
      "ct.5": "Stories", "ct.6": "Photoshoot", "ct.7": "Pre-show content", "ct.8": "Coverage during the show",
      "ct.9": "Post-show content", "ct.10": "I’d rather be advised by the ICONIC team",

      "s4.legend": "Your visibility",
      "f.visibilite": "What level of visibility are you looking for?",
      "vis.1": "A simple, effective presence", "vis.2": "Enhanced visibility",
      "vis.3": "A full campaign before, during and after ECSEL", "vis.4": "I don’t know yet — advise me",
      "f.stand": "Stand number",
      "meta.stand": "if available",
      "f.message": "Anything you’d like to add?",
      "ph.message": "Your message (optional)",

      "s5.legend": "Your contact details",
      "f.phone": "Phone / WhatsApp",
      "f.email": "E-mail",
      "f.canal": "How would you prefer to be contacted?",
      "can.2": "Phone", "can.3": "E-mail",
      "consent": "By submitting this form, you agree to be contacted by the ICONIC team about your presence at ECSEL Expo 2026.",

      "btn.prev": "Back",
      "btn.next": "Continue",
      "btn.submit": "Get my personalized offer",
      "reassure": "No commitment — the ICONIC team will contact you after reviewing your request.",
      "err.required": "This field is required.",
      "err.email": "Invalid e-mail address.",
      "err.phone": "Invalid phone number.",
      "err.group": "Please select at least one option.",
      "err.autre": "Please specify your activity.",
      "err.general": "Something went wrong. Please try again.",
      "err.network": "Unable to send right now. Check your connection and try again.",

      "success.title": "Thank you {name}!",
      "success.text": "Your request has been sent. The ICONIC team is reviewing your needs and will get back to you very soon to build your personalized media offer.",
      "success.sub": "No commitment · #Weareiconic",
      "success.home": "Back to top",
      "success.wa": "Also send on WhatsApp",

      "final.text": "Your presence at ECSEL Expo doesn’t stop at your stand. Turn it into content, visibility and opportunities with ICONIC.",
      "final.cta": "Talk to the ICONIC team",

      "footer.tag": "Official Media Partner of ECSEL Expo Algiers 2026.<br>We’re shaping the future of digital media.",
      "footer.rights": "All rights reserved."
    }
  };

  var SUPPORTED = ["fr", "ar", "en"];
  var DEFAULT_LANG = "fr";
  var STORAGE_KEY = "iconic_lang";

  window.ICONIC_I18N = DICT;

  function getStored() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function store(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function t(key, lang) {
    lang = lang || document.documentElement.lang || DEFAULT_LANG;
    var table = DICT[lang] || DICT[DEFAULT_LANG];
    return table[key] != null ? table[key] : (DICT[DEFAULT_LANG][key] || "");
  }
  window.ICONIC_T = t;

  function apply(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = DEFAULT_LANG;
    var html = document.documentElement;
    html.lang = lang;
    html.dir = (lang === "ar") ? "rtl" : "ltr";

    // Texte simple
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i], key = el.getAttribute("data-i18n");
      el.textContent = t(key, lang);
    }
    // Texte avec HTML autorisé (contrôlé par nous : <br>, <strong>, <span class=req>)
    var htmlNodes = document.querySelectorAll("[data-i18n-html]");
    for (var j = 0; j < htmlNodes.length; j++) {
      var he = htmlNodes[j], hk = he.getAttribute("data-i18n-html");
      he.innerHTML = t(hk, lang);
    }
    // Placeholders
    var phNodes = document.querySelectorAll("[data-i18n-ph]");
    for (var k = 0; k < phNodes.length; k++) {
      var pe = phNodes[k];
      pe.setAttribute("placeholder", t(pe.getAttribute("data-i18n-ph"), lang));
    }

    // Boutons de langue
    var btns = document.querySelectorAll("[data-lang]");
    for (var b = 0; b < btns.length; b++) {
      var active = btns[b].getAttribute("data-lang") === lang;
      btns[b].classList.toggle("is-active", active);
      btns[b].setAttribute("aria-pressed", String(active));
    }

    store(lang);
    document.dispatchEvent(new CustomEvent("iconic:langchange", { detail: { lang: lang } }));
  }
  window.ICONIC_setLang = apply;

  function init() {
    // Boutons
    var switches = document.querySelectorAll("[data-lang]");
    for (var i = 0; i < switches.length; i++) {
      switches[i].addEventListener("click", function () {
        apply(this.getAttribute("data-lang"));
      });
    }
    var start = getStored() || DEFAULT_LANG;
    apply(start);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
