Kakao.init('a2015c29e24aea62bc2d87d6a476dedd');
//移댁뭅�� 媛쒕컻�� id :�쇳삙��

//�뚯뒪��

//function sendLink(rmsg) {
//      Kakao.Link.sendTalkLink({
//        label: "[珥덈���] "+rmsg
//      });
//}
//


function sendLink(rmsg, rimg, isrc) {
	  Kakao.Link.sendScrap({
			requestUrl: isrc
		  });


}

function sendLink_new(rmsg, rimg, isrc) {
      //Kakao.init('a2015c29e24aea62bc2d87d6a476dedd');
		// // 移댁뭅�ㅻ쭅�� 踰꾪듉�� �앹꽦�⑸땲��. 泥섏쓬 �쒕쾲留� �몄텧�섎㈃ �⑸땲��.
		Kakao.Link.sendTalkLink({
        label: "[珥덈���] "+rmsg,
		image : {
				src: rimg,	//constraint: 500KB�댄븯�� �대�吏�留� �쒖떆�� (�ъ쭊�⑸웾 珥덇낵�� 移댁뭅�ㅽ넚 怨듭쑀 �⑥��딆쓬);
				width: '400',
				height: '300'
		},
		 webButton: {
              text: '紐⑤컮�쇱큹���� 蹂대윭媛�湲�',
              url: isrc
        }
      });

	  Kakao.Link.sendScrap({
		requestUrl: isrc
	  });
}


function executeKakaoStoryLink(rtitle,rurl,rimg)
{
    kakao.link("story").send({
        post : rurl,
        appid : "www.cardq.co.kr",
        appver : "1.0",
        appname : "앱네임?",
        urlinfo : JSON.stringify({title:rtitle, desc:rurl, imageurl:[rimg], type:"article"})
    });
}

function goLinkSNS(sns,s_url){
	if (sns == "tw"){
		location.href = "http://twitter.com/home/?status="+encodeURIComponent(s_url);
	}
	else if (sns == "fb"){
		location.href = "http://www.facebook.com/sharer.php?u=" + encodeURIComponent(s_url) + "&t=" + encodeURIComponent("뭐여이게.");
	}
}

function shareStory(rurl){
	Kakao.Story.share({
	  url: rurl
	});

}