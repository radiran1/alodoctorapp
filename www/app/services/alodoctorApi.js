(function () {
	'use strict';
	angular.module('alodoctorApp').factory('alodoctorApi', ['$http', '$q', '$ionicLoading', '$timeout', alodoctorApi]);
	function alodoctorApi($http, $q, $ionicLoading, $timeout) {
		var request = JSON.parse('{"apprequest":{"ApiKey":"WIG3BmFbjWBmwDZPE5E7b2bP6L6mGTsXArdiOegc4eU=","DeviceId":"9774d56d682e549c", "RequestDateTime":"2015-01-01"},"ClinicId":"2","Take":"40","Skip":"0","Term":"‌","SortType":"desc"}');
		var currentNoteId;
		function getNotes() {
			var deferred = $q.defer();
			$ionicLoading.show({ template: '... در حال بارگذاری اطلاعات' });
			$http({
				url: 'http://api.alodoctor.ir/note/getnotes',
				method: "POST",
				data: JSON.stringify(request),
				headers: { 'Content-Type': 'application/json;charset=utf-8' }
			}).success(function (data) {
				$timeout(function () {
					$ionicLoading.hide();
					deferred.resolve(data);
				}, 3000);
			}).error(function () {
				$timeout(function () {
					$ionicLoading.hide();
					deferred.reject();
				});

			});

			return deferred.promise;
		};


		function setNoteId(noteId) {
			currentNoteId = noteId;
		}
		return {
			getNotes: getNotes,
			setNoteId: setNoteId
		};
	};
})();

/*		var note = JSON.parse('{"Id":8381,"Name":"چه کنیم ابروهایمان پرپشت شود؟","Description":"اگر می‌خواهید ابروهایتان به‌طور طبیعی پرپشت و پهن باشد از این راهکارها استفاده کنید.","Image":"http://alodoctor.ir/Uploads/Picture/af29123d-d8a2-4355-8f63-51025079ada3.jpg","ClickCount":1221,"Link":"http://alodoctor.ir/mobile/article/8381"}');
				tes = JSON.parse('{"Notes":[{"Id":8381,"Name":"چه کنیم ابروهایمان پرپشت شود؟","Description":"اگر می‌خواهید ابروهایتان به‌طور طبیعی پرپشت و پهن باشد از این راهکارها استفاده کنید.","Image":"http://alodoctor.ir/Uploads/Picture/af29123d-d8a2-4355-8f63-51025079ada3.jpg","ClickCount":1221,"Link":"http://alodoctor.ir/mobile/article/8381"},{"Id":8376,"Name":"چگونه لنز مناسب انتخاب کنیم؟","Description":"لنز تماسی یک عدسی نازک پلاستیکی است که روی قرنیه چشم قرار می‌گیرد. لنز تماسی می تواند صرفاً جنبه زیبایی ( تغییر رنگ  عنبیه چشم ) داشته باشد یا جنبه پزشکی نیز داشته باشد ( مانند درمان عیوب انکساری چشم با لنز تماسی).","Image":"http://alodoctor.ir/Uploads/Picture/98cb7880-9573-4c44-8305-d608497637d0.jpg","ClickCount":28,"Link":"http://alodoctor.ir/mobile/article/8376"},{"Id":8369,"Name":"آیا دلایل ریزش موهایتان را می‌دانید؟","Description":"آیا شما هم از آن دسته هستید که ریزش مو دارید و دلیل و راه درمان آن را نمی دانید؟آیا به پزشک هم مراجعه کرده اید؟","Image":"http://alodoctor.ir/Uploads/Picture/258c22b5-fee2-4be4-a004-db60cb41868a.jpg","ClickCount":90,"Link":"http://alodoctor.ir/mobile/article/8369"},{"Id":8364,"Name":"علت گرایش مردان به لیزر موهای زائد چیست؟","Description":"امروزه در میان اقدامات درمانی و غیردرمانی رایج در حوزه زیبایی، یکی از موارد پرطرفدار، رهایی از موهای زائد با استفاده از لیزر است، زیرا تنها راه تضعیف دائمی موهای ناخواسته، لیزر است.","Image":"http://alodoctor.ir/Uploads/Picture/8f37c451-afde-4e09-a03d-03c78dbd26e3.jpg","ClickCount":58,"Link":"http://alodoctor.ir/mobile/article/8364"},{"Id":8345,"Name":"آیا نوع خوابیدن بر ایجاد چروک دور چشم تأثیر می‌گذارد؟","Description":"داشتن پوستی سالم و شاداب یکی از دغدغه‌های فکری خیلی‌ها، مخصوصا خیلی‌ از خانم‌هاست. در این مطلب چند راهکار بدین منظور ارائه شده است.","Image":"http://alodoctor.ir/Uploads/Picture/1a94f1c1-7d80-4cb9-8abb-fd7bfd616181.jpg","ClickCount":61,"Link":"http://alodoctor.ir/mobile/article/8345"},{"Id":8357,"Name":"آیا بوتاکس به کاهش وزن کمک می‌کند؟","Description":"محققان از ۶۰ فرد چاق برای حضور در یک آزمایش یک هفته‌ای تمام وقت ثبت نام کردند تا ببینند آیا تزریق بوتاکس می‌تواند باعث کاهش وزن شود یا خیر.","Image":"http://alodoctor.ir/Uploads/Picture/93f7bef1-e060-4216-9581-92f4cf059304.jpg","ClickCount":4948,"Link":"http://alodoctor.ir/mobile/article/8357"},{"Id":8354,"Name":"توصیه‌هایی برای جلوگیری از اگزما (قسمت دوم)","Description":"دکتر لیفرمن می‌گوید: «من توصیه می‌کنم بیماران صبور باشند و مرطوب‌کننده‌هایی پیدا کنند که عاری از خوشبو کننده، رنگ و مواد افزودنی باشد که می‌توانند پوست را خراش کنند.","Image":"http://alodoctor.ir/Uploads/Picture/2519ccc9-eed4-40f9-88b7-c2de87e1b419.jpg","ClickCount":15665,"Link":"http://alodoctor.ir/mobile/article/8354"},{"Id":8353,"Name":"توصیه‌هایی برای جلوگیری از اگزما (قسمت اول)","Description":"اگر آلرژی دارید یا دچار سرماخوردگی بهاری هستید یا پوست‌تان خشک و بیش از حد حساس است؛ احتمالا با اگزما نیز دست و پنجه نرم می‌کنید.","Image":"http://alodoctor.ir/Uploads/Picture/eb736fb5-8846-4ee4-8034-932a4f94c8e8.jpg","ClickCount":1733,"Link":"http://alodoctor.ir/mobile/article/8353"},{"Id":8336,"Name":"اقدامات لازم برای درمان جوش صورت چیست؟","Description":"اگر فرد مبتلا به آکنه در مورد این بیماری آگاهی کافی داشته باشد با انتخاب راهکارهای ساده می‌تواند بهتر با این مشکل مقابله کند و از شدت آن بکاهد.","Image":"http://alodoctor.ir/Uploads/Picture/ac2754dc-f2b0-4f64-a068-0acb4c7db9d4.jpg","ClickCount":641,"Link":"http://alodoctor.ir/mobile/article/8336"},{"Id":8338,"Name":"حقایقی که باید درباره بوتاکس بدانید","Description":"بوتاکس ماده‌ای است که حدود ۱۰۰ سال است استفاده می‌شود و حدود ۵۰ سال است که کاربرد دارویی دارد.","Image":"http://alodoctor.ir/Uploads/Picture/8fbf2700-1f2d-4649-abc6-be8c7fa7bad7.jpg","ClickCount":1513,"Link":"http://alodoctor.ir/mobile/article/8338"}],"Take":10,"Skip":1,"TotalItems":50,"AppResponse":{"ResponseDateTime":"2015-05-01T15:00:06.3007817Z","StatusCode":0,"Copyright":"http://www.alodoctor.ir"}}');*/