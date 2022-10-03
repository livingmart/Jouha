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

		contactus: "اتصل بنا",
		home: "الصفحة الرئيسية",
		we: "نحن هنا من أجلك!",
		youhave: "لديك طلب أو تحتاج إلى دعم؟ نحن نتطلع الى الاستماع منك!",
		book: "الكتاب",
		hr: "خدمة العملاء على مدار 24 ساعة",
		specres: "نموذج الاتصال / طلب خاص",
		sendmes: "أرسل رسالة",
		getupdate: "احصل على تحديثات فورية منا حول الخدمة السريعة",
		sendme: "أرسل لي التحديثات",

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

		$("[data-language=contactus]").text(language.ar.contactus);
		$("[data-language=home]").text(language.ar.home);
		$("[data-language=we]").text(language.ar.we);
		$("[data-language=youhave]").text(language.ar.youhave);
		$("[data-language=book]").text(language.ar.book);
		$("[data-language=hr]").text(language.ar.hr);
		$("[data-language=specres]").text(language.ar.specres);
		$("[data-language=sendmes]").text(language.ar.sendmes);
		$("[data-language=getupdate]").text(language.ar.getupdate);
		$("[data-language=sendme]").text(language.ar.sendme);

		
		
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
