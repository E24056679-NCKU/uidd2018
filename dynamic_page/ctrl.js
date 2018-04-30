function changeMusic(idx)
{
	pauseMusic();
	let newSrc = "./music/";
	let newPicSrc = "./house_pics/"
	if(idx == 'left')
	{
		newSrc += "lefthouse.mp3";
		newPicSrc += "left_house.png";
	}
	else if(idx == 'mid')
	{
		newSrc += "midhouse.mp3";
		newPicSrc += "mid_house.png";
	}
	else if(idx == 'right')
	{
		newSrc += "righthouse.mp3";
		newPicSrc += "right_house.png";
	}
	$('#audiosrc')[0].src = newSrc;
	$('#story_pic').attr('src', newPicSrc);
	$('#audio')[0].load();
	$('#record_container').css('display', 'inline-block');
	$('#record_container').animate({
	    'opacity' : '0.5'
	}, 500);
	$('#record_container').animate({
	    'opacity' : '1'
	}, 500);
}

function pauseMusic()
{
	$('#audio')[0].pause();
	music_status = false;
}

function playMusic()
{
	$('#audio')[0].play();
	music_status = true;
}

var music_status = false;
function toggleMusic()
{
	if(music_status == true)
		pauseMusic();
	else
		playMusic();
}

function moveRecord()
{
	$('#record_container').animate({
	    'margin-top': '5.3%',
	    'margin-left': '45.3%'
	}, 1000);
	$('#record_a').hide();
}

function hideHouses()
{
	$('.house').animate({
		'opacity' : '0'
	}, 500, function(){$('.house').hide()});
}

function showHouses()
{
	$('.house').show();
	$('.house').animate({
		'opacity' : '1'
	}, 500);
}

function hideClouds()
{
	$('.cloud').hide();
}

function showLyrics()
{
	$('.lyrics').css('display', 'inline-block');
	$('.lyrics').animate({
		'opacity' : '1'
	}, 500);
}

function hideLyrics()
{
	$('.lyrics').animate({
		'opacity' : '0'
	}, 500);
	$('.lyrics').css('display', 'none');
}

function showStory()
{
	$('.story').css('display', 'inline-block');
	$('.story').animate({
		'opacity' : '1'
	}, 500);
}

function hideStory()
{
	$('.story').animate({
		'opacity' : '0'
	}, 500);
	$('.story').css('display', 'none');
}

function changeStory(idx)
{
	let story1="沿著一條彎曲街道漫步向北而行，沿途可見臺灣最早的民設媽祖廟－－開基天后宮及著名古蹟烏鬼井，在這條街道上，可以發現兩旁街巷有一些近二百年歷史的老屋舊宅與現代樓房形成強烈對比，傳統打鐵店、餅店、香舖店分散林立其中，默默地訴說起時代的變遷，這裡是臺南有名的大銃老街（現今臺南市北區自強街）。\n\n大銃街位於禾察港北岸，清朝時期稱為水仔尾街，位於現今北區區公所旁，入口處立有石碑作為紀念，地理範圍大致以現今自強街為主，北接長北街（現今較明顯區域則以公園南路為界），南接西門路三段24巷。";
	let story2="三山國王廟後方便是自強街，也就是以前的大銃街，現仍保留原有舊式房屋，可見日式拉門與瓦片的屋頂，大部分仍為住家。大銃街附近的道路彎曲，往北走可以走到烏鬼井。大銃街與米街街區為連接城內外，為城市中心大街通往小北門的重要路徑。相較於其他熱門觀光景點此處顯得較落寞，但也因此能夠享受漫步在舊街道的寧靜之感。\n\n當時大銃街附近港口屬於軍事港，又是城內城外居民的必經之地，許多農民進城會在大銃街修理農具。由於其為府城南北買通之路、交通樞鈕，故可以想像郊商雲集熱鬧的景象。直到日軍開闢西門路三段才喪失交通樞紐的地位，逐漸衰敗。";
	let story3="在鎮北坊文化園區的自強街巷弄裡，有著一口被稱為「烏鬼井」的古蹟。傳說此井水源旺盛、取用不竭，在西元1653年開鑿後至今仍然有水，當時是來往船隻及當地人的飲用水。\n\n據說由前來的東印度公司中的荷蘭人帶著黑奴前來開挖，因當時台灣人並沒有看過皮膚黝黑的黑人，因此稱呼為烏鬼，也成為這口井的名稱由來。後來到了日治時期井水漸漸少人取用，加上常有人意外跌落，日人便將井口封住掩埋，直到西元1955年才在考古工作中挖掘修復。";
	if(idx == "left")
	{
		var storytext = $("#story_text").text(story1);
		storytext.html(storytext.html().replace(/\n/g,'<br/>'));
	}
	else if(idx == "mid")
	{
		var storytext = $("#story_text").text(story2);
		storytext.html(storytext.html().replace(/\n/g,'<br/>'));
	}
	else if(idx == "right")
	{
		var storytext = $("#story_text").text(story3);
		storytext.html(storytext.html().replace(/\n/g,'<br/>'));
	}
}

function changeLyrics(idx)
{
	let lyrics1="多少柔情多少淚　往事如煙去不回\n想起過去多少歡樂　如今已隨流水\n\n多少柔情多少淚　良辰美景去不回\n剩下一片迷離夢靜　夢醒時更悲哀\n\n多情的夢　愛情的夢　如今已消逝\n愛情的花　愛情的花　如已枯萎\n\n多少柔情多少淚　淚已流乾心已碎\n長夜漫漫往事如煙　如今獨自沉醉\n\n多少柔情多少淚";
	let lyrics2="身穿花紅長洋裝　風吹金髮思情郎\n想郎船何往　音信全無通　伊是行船仔逐風浪\n放阮情難忘　心情無底講　相思寄著海邊風\n海風無情笑阮憨　啊.....不知初戀心茫茫\n\n相思情郎想自己　不知爹親二十年\n思念想要見　只有金十字　給阮母親仔做為記\n放阮私生兒　聽母初講起　越想不幸越哀悲\n到底現在生還死　啊.....伊是荷蘭的船醫\n\n想起母子的運命　心肝想爹也怨爹\n別人有爹疼　阮是母親晟　今日青春孤單影呀\n全望多情兄　望兄的船隻　早日回歸安平城\n安平純情金小姐　啊.....等你入港銅鑼聲";
	let lyrics3="如果沒有遇見你  我將會是在那裡\n日子過得怎麼樣  人生是否要珍惜\n也許認識某一人  過著平凡的日子\n不知道會不會  也有愛情甜如蜜\n任時光匆匆流去我只在乎你\n心甘情願感染你的氣息\n人生幾何  能夠得到知己\n失去生命的力量也不可惜\n所以我  求求你  別讓我離開你\n除了你我不能感到一絲絲情意\n\n如果有了某一天  你說即將要離去\n我會迷失我自己  走入無邊人海裡\n不要什麼諾言  只要天天在一起\n我不能只依靠  片片回憶活下去\n任時光匆匆流去  我只在乎你\n心甘情願感染你的氣息\n人生幾何  能夠得到知己\n失去生命的力量也不可惜\n所以我  求求你  別讓我離開你\n除了你我不能感到一絲絲情意\n\n任時光匆匆流去  我只在乎你\n心甘情願感染你的氣息\n人生幾何  能夠得到知己\n失去生命的力量也不可惜\n所以我  求求你  別讓我離開你\n除了你我不能感到一絲絲情意\n";
	if(idx == "left")
	{
		var lyricstext = $("#lyrics_text").text(lyrics1);
		lyricstext.html(lyricstext.html().replace(/\n/g,'<br/>'));
	}
	else if(idx == "mid")
	{
		var lyricstext = $("#lyrics_text").text(lyrics2);
		lyricstext.html(lyricstext.html().replace(/\n/g,'<br/>'));
	}
	else if(idx == "right")
	{
		var lyricstext = $("#lyrics_text").text(lyrics3);
		lyricstext.html(lyricstext.html().replace(/\n/g,'<br/>'));
	}
}