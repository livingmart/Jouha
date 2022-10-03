var language = {
	ar: {
		findservice: "ابحث عن خدمة",
		jobs: "فرصة عمل",
		contact: "اتصل بنا",
		login: "تسجيل الدخول",
		mobilehome: "مسكن",
		mobileservice: "ابحث عن خدمة",
		mobilejobs: "فرصة عمل",
		mobilecontact: "اتصل بنا",

		service: "خدمة",
		home: "الصفحة الرئيسية",
		ourservice: "خدمتنا",
		logisdropdown: "الخدمات اللوجستية والتسليم",
		logistitle: "الخدمات اللوجستية والتسليم",
		logissubtitle:
			"نحن نقدم خدمات لوجستية حيث نقدمها لجميعنا    العملاء في أي مكان في جميع أنحاء البلاد.",
		mission: "بعثة",
		logisdisc:
			"هدفنا هو أن نكون أفضل شريك توصيل يمكنك الوثوق به دائمًا في أي وقت &                                             كل مره. هذا هو ، من خلال ضمان أننا نقدم  خدمة فعالة وفعالة وجيدة التنظيم مصممة بشكل فريد لتناسب  احتياجاتك.",
		expect: "ماذا تتوقع؟",
		logissupport: "24/7 دعم فني",
		logisuniversal:
			"حلول سلسلة التوريد العالمية التي تساعد   تقليل التكلفة وتقليل المخاطر",
		logisres:
			"حلول ذكية وسريعة الاستجابة لتتبع ملفات  الشحنات من نقطة الانزال إلى",
		logispac:
			"التعبئة والتغليف المناسبة والتدابير الحافظة ل   ضمان جودة الشحنات الخاصة بك",
		servresserv: "اطلب خدمة التوصيل الآن",
		secdropdown: "خدمات الأمن",
		sectitle: "خدمات الأمن",
		secsubtitle:
			"أمن عملك هو مصدر قلق رئيسي بالنسبة لنا. نحن     العمل على تلبية احتياجات عملائنا على الصعيدين المحلي والدولي بخدمات متفوقة.",
		secdesc:
			"جعل الأولوية رقم واحد الخاص بك. نحن نفهم أن كل      تتطلب العلامة التجارية والبشر خدمات أمنية عالية الجودة ومتسقة",
		secweprov:
			"نحن نقدم خدمات لوجستية حيث نقدمها لجميع عملائنا في أي مكان في جميع أنحاء البلاد.",
		secquality: "جودة خدماتنا والتزامنا     القوى العاملة",
		secoff: "ضباط مدربين جيدا ومتفانين",

		seccon: "الاستشارات وتقديم الحلول لـ   المنظمات التي تواجه تحديات أمنية",
		servressec: "اطلب خدمة الأمن الآن",
		cleandropdown: "خدمات التنظيف",
		cleantitle: "خدمات التنظيف",
		cleansubtitle:
			"نعلم جميعًا مدى أهمية الحفاظ على نظافة كل منزل وتنظيمها والدور المهم الذي تلعبه في حياتنا اليومية   حياة صحية لذا ، دعنا نساعدك على أن تظل سعيدًا دائمًا وفي حالة جيدة دائمًا   العقل عن طريق التأكد من أن بيئتك دائمًا في أفضل حالة.",
		cleanhelp:
			"للمساعدة في خلق بيئة مواتية للزوار والعملاء ، و     الحفاظ على بيئة منتجة لموظفيك.",
		cleanstand: "معايير عالية واهتمام كبير بالتفاصيل",
		cleanprof: "نهج احترافي وأنيق للغاية",
		cleanknow: "موظفين على دراية كبيرة ومجهزين",
		cleanfull: "المسؤولية الكاملة والمساءلة عن العمل الذي نقوم به",
		servresclean: "اطلب خدمة التنظيف الآن",

		footerbest: "أفضل طريقة للعثور على خدمة أو تقديمها.",
		footersignup: "سجل في دقيقتين فقط واحصل على عروض عمل فورية!",
		pages: "الصفحات",
		findservice: "ابحث عن خدمة",
		footeroppor: "فرصة عمل",
		footercontact: "اتصل بنا",
		quickcon: "اتصال سريع",
		footeraddress: "تبوك",
		footerphone: "هاتف:",
		footeremail: "البريد الإلكتروني:",
		footercopyright: "© حقوق النشر مشغل بواسطة Jouha",
	},
};

if (window.location.hash) {
	if (location.hash.substring(1) === "eng") {
		// remove all hash tags and reload page to default text
		window.location.href = window.location.toString().split(/\?|#/)[0];
	} else if (location.hash.substring(1) === "ar") {
		// sections
		$("[data-language=findservice]").text(language.ar.findservice);
		$("[data-language=jobs]").text(language.ar.jobs);
		$("[data-language=contact]").text(language.ar.contact);
		$("[data-language=login]").text(language.ar.login);
		$("[data-language=mobilehome]").text(language.ar.mobilehome);
		$("[data-language=mobileservice]").text(language.ar.mobileservice);
		$("[data-language=mobilejobs]").text(language.ar.mobilejobs);
		$("[data-language=mobilecontact]").text(language.ar.mobilecontact);

		$("[data-language=service]").text(language.ar.service);
		$("[data-language=home]").text(language.ar.home);
		$("[data-language=ourservice]").text(language.ar.ourservice);
		$("[data-language=logisdropdown]").text(language.ar.logisdropdown);
		$("[data-language=logistitle]").text(language.ar.logistitle);
		$("[data-language=mission]").text(language.ar.mission);
		$("[data-language=logisdisc]").text(language.ar.logisdisc);
		$("[data-language=logissubtitle]").text(language.ar.logissubtitle);
		$("[data-language=expect]").text(language.ar.expect);
		$("[data-language=logissupport]").text(language.ar.logissupport);
		$("[data-language=logisuniversal]").text(language.ar.logisuniversal);
		$("[data-language=logisres]").text(language.ar.logisres);
		$("[data-language=logispac]").text(language.ar.logispac);
		$("[data-language=servresserv]").text(language.ar.servresserv);
		$("[data-language=secdropdown]").text(language.ar.secdropdown);
		$("[data-language=sectitle]").text(language.ar.sectitle);
		$("[data-language=secsubtitle]").text(language.ar.secsubtitle);
		$("[data-language=secdesc]").text(language.ar.secdesc);
		$("[data-language=secweprov]").text(language.ar.secweprov);
		$("[data-language=secquality]").text(language.ar.secquality);
		$("[data-language=secoff]").text(language.ar.secoff);

		$("[data-language=seccon]").text(language.ar.seccon);
		$("[data-language=servressec]").text(language.ar.servressec);
		$("[data-language=cleandropdown]").text(language.ar.cleandropdown);
		$("[data-language=cleantitle]").text(language.ar.cleantitle);
		$("[data-language=cleansubtitle]").text(language.ar.cleansubtitle);
		$("[data-language=cleanhelp]").text(language.ar.cleanhelp);
		$("[data-language=cleanstand]").text(language.ar.cleanstand);
		$("[data-language=cleanprof]").text(language.ar.cleanprof);
		$("[data-language=cleanknow]").text(language.ar.cleanknow);
		$("[data-language=cleanfull]").text(language.ar.cleanfull);
		$("[data-language=servresclean]").text(language.ar.servresclean);
		
		$("[data-language=footerbest]").text(language.ar.footerbest);
		$("[data-language=footersignup]").text(language.ar.footersignup);
		$("[data-language=pages]").text(language.ar.pages);
		$("[data-language=findservice]").text(language.ar.findservice);
		$("[data-language=footeroppor]").text(language.ar.footeroppor);
		$("[data-language=footercontact]").text(language.ar.footercontact);
		$("[data-language=quickcon]").text(language.ar.quickcon);
		$("[data-language=footeraddress]").text(language.ar.footeraddress);
		$("[data-language=footerphone]").text(language.ar.footerphone);
		$("[data-language=footeremail]").text(language.ar.footeremail);
		$("[data-language=footercopyright]").text(language.ar.footercopyright);
	}
}

$("[data-callLang]").on("click", function () {
	if ($(this).attr("data-callLang") === "eng") {
		window.location.href = window.location.toString().split(/\?|#/)[0];
		return false;
	}

	window.location.hash = $(this).attr("data-callLang");
	location.reload(true);
});

// nav menu toggle
// $(".menu-btn").click(function () {
// 	$(this).toggleClass("fas fa-times");
// 	$(".menunav").toggleClass("active");
// });
