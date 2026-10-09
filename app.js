(() => {
'use strict';
const A='assets/';
const I={
 paw:'<circle cx="12" cy="19" r="4.1" fill="currentColor" stroke="none"/><ellipse cx="4.4" cy="11.4" rx="2.1" ry="3" fill="currentColor" stroke="none"/><ellipse cx="9.1" cy="7.2" rx="2.1" ry="2.9" fill="currentColor" stroke="none"/><ellipse cx="15.2" cy="7.2" rx="2.1" ry="2.9" fill="currentColor" stroke="none"/><ellipse cx="20" cy="11.4" rx="2.1" ry="3" fill="currentColor" stroke="none"/>',
 home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
 book:'<path d="M12 6c-3-2-6-2-10-1v14c4-1 7-1 10 1 3-2 6-2 10-1V5c-4-1-7-1-10 1zm0 0v14"/>',
 health:'<path d="M6 3v5a4 4 0 0 0 8 0V3M4 3h4M12 3h4M10 12v2a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="10" r="2"/>',
 bowl:'<path d="M3 12h18l-2 8H5zM4 12l2-4h12l2 4"/><circle cx="8" cy="7" r="1"/><circle cx="12" cy="6" r="1"/><circle cx="16" cy="7" r="1"/>',
 scissors:'<circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/><path d="m8.1 15.9 11-12M15.9 15.9l-11-12"/>',
 shield:'<path d="M12 2 4 5v6c0 5 3.4 8.5 8 11 4.6-2.5 8-6 8-11V5z"/><path d="m8 12 2.5 2.5 5.5-5.5"/>',
 camera:'<path d="M4 7h4l1.5-2h5L16 7h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z"/><circle cx="12" cy="14" r="4"/>',
 users:'<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2z"/><path d="M17 5a3 3 0 0 1 0 6m.5 4a5 5 0 0 1 4.5 5"/>',
 cart:'<circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2 3h3l2.5 13h13L23 7H6"/>',
 map:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.7"/>',
 heart:'<path d="M20.8 4.8a5.5 5.5 0 0 0-7.8 0L12 5.9l-1.1-1.1a5.5 5.5 0 1 0-7.8 7.8L12 21l8.8-8.4a5.5 5.5 0 0 0 0-7.8z"/>',
 calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 2v6M17 2v6M3 10h18"/><path d="M8 14h2m4 0h2m-8 4h2"/>',
 search:'<circle cx="10.5" cy="10.5" r="7"/><path d="m16 16 5.5 5.5"/>',
 bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9zM10 21h4"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 22v-3a8 8 0 0 1 16 0v3"/>',
 back:'<path d="m15 3-9 9 9 9"/>',
 next:'<path d="m9 3 9 9-9 9"/>',
 menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
 close:'<path d="M5 5 19 19M19 5 5 19"/>',
 star:'<path d="m12 2 3.2 6.6 7.3 1.1-5.3 5.1 1.3 7.2-6.5-3.5-6.5 3.5 1.3-7.2-5.3-5.1 7.3-1.1z"/>',
 bulb:'<path d="M9 18h6m-5 3h4M9 15c-2-2-4-4-4-7a7 7 0 0 1 14 0c0 3-2 5-4 7v2H9z"/>',
 plus:'<path d="M12 4v16M4 12h16"/>',
 trash:'<path d="M4 7h16M10 4h4M6 7l1 14h10l1-14M10 11v7M14 11v7"/>',
 check:'<path d="m4 12 5 5L20 6"/>',
 edit:'<path d="m4 20 4-.7L20 7a2 2 0 0 0-3-3L5 16z"/>',
 clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
 info:'<circle cx="12" cy="12" r="10"/><path d="M12 11v6M12 7h.01"/>',
 share:'<path d="M12 3v13m-5-8 5-5 5 5M5 14v7h14v-7"/>'
};
const ic=(n,cls='')=>`<svg class="${cls}" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round">${I[n]||I.paw}</svg>`;
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const categories=[
{id:'home',name:'ホーム',icon:'home'},
{id:'encyclopedia',name:'トイプードル図鑑',icon:'book'},
{id:'health',name:'健康・病気',icon:'health'},
{id:'food',name:'ごはん・栄養',icon:'bowl'},
{id:'grooming',name:'トリミング・ケア',icon:'scissors'},
{id:'training',name:'しつけ・育て方',icon:'shield'},
{id:'photos',name:'写真・動画投稿',icon:'camera'},
{id:'community',name:'トイプー仲間',icon:'users'},
{id:'goods',name:'おすすめグッズ',icon:'cart'},
{id:'outing',name:'おでかけスポット',icon:'map'},
{id:'adoption',name:'里親・ブリーダー',icon:'heart'},
{id:'events',name:'イベント・オフ会',icon:'calendar'}
];
const articles=[
{id:'about',cat:'encyclopedia',title:'トイプードルとは？',summary:'歴史・性格・大きさ・毛色・寿命など、トイプードルの基本を詳しく紹介。',image:'dog-cozy.webp',sections:[['原産と歴史','プードルはヨーロッパで水辺の回収犬として活躍してきた犬種で、フランスで発展し人気を集めました。トイプードルはプードルを小型化したサイズの呼称です。'],['体格と特徴','体高の目安は約24〜28cm、体重は約2〜4kg。体重には個体差があり、無理な小型化より健康的な体格が大切です。巻き毛のシングルコートは抜け毛が比較的少ない一方、毛玉を防ぐためにこまめな手入れが必要です。'],['性格と運動','一般に賢く、人との交流を好む活発な犬種です。短い散歩だけでなく、遊びやトレーニングなど頭を使う活動も生活に取り入れましょう。性格は育ち方や個体差でも変わります。'],['寿命と健康','寿命の目安は12〜15年程度ですが、個体差があります。膝蓋骨脱臼、歯周病、外耳炎、目の病気などに注意し、体重管理や定期健診を続けることが大切です。']]},
{id:'colors',cat:'encyclopedia',title:'毛色と人気のカット',summary:'レッド、アプリコット、ブラック、ホワイトなどの毛色とお手入れ。',sections:[['いろいろな毛色','レッド、アプリコット、ブラウン、ブラック、ホワイト、シルバーなど多彩な色があります。成長とともに毛色が変化する場合もあります。'],['カットの種類','テディベアカット、アフロカット、ラムクリップ、顔バリなどさまざま。毛質や皮膚の状態を見ながら安全なスタイルを選びましょう。']]},
{id:'life-stage',cat:'encyclopedia',title:'子犬・成犬・シニアの暮らし',summary:'ライフステージ別に暮らしのポイントを確認。',sections:[['子犬期','健康診断、社会化、生活リズム作りが大切です。散歩開始時期やワクチンは獣医師に確認してください。'],['成犬期','適切な食事量、運動、デンタルケア、被毛の管理を習慣にしましょう。'],['シニア期','活動量・食欲・歩き方・体重変化に注目し、必要に応じて診察や生活環境の調整を行いましょう。']]},
{id:'first-dog',cat:'training',title:'はじめてのトイプードルの育て方',summary:'迎える前の準備から安心できる毎日の生活まで。',image:'card-training.webp',sections:[['お迎え前に','安心して寝られる場所、水飲み、食器、トイレ、犬用ブラシ、首輪・ハーネスなどを用意します。'],['最初の1週間','静かで安心できる環境を作り、毎日の食事や睡眠の時間を整えます。急な長時間の外出や過度な刺激は避けます。'],['社会化','人や音、場所に少しずつ慣れてもらい、怖がるときは無理強いせず、ご褒美を使って良い体験を増やします。']]},
{id:'training-toilet',cat:'training',title:'トイレと基本のしつけ',summary:'ほめて伸ばすトレーニングの基本。',sections:[['トイレトレーニング','寝起き・食後・遊んだ後など、成功しやすい時間にトイレへ誘導し、できたらすぐに褒めます。失敗を叱るのは避けましょう。'],['基本の合図','「おいで」「待て」「おすわり」などを短時間で楽しく練習します。できた瞬間に褒めるのがコツです。']]},
{id:'health-check',cat:'health',title:'毎日の健康チェック',summary:'食欲・体重・排便・皮膚・目・耳を確認。',sections:[['健康観察','食欲、飲水量、排泄、呼吸、歩き方、耳のにおい、皮膚の赤みなどに普段と違う変化がないか見ましょう。'],['受診の目安','呼吸が苦しそう、繰り返し吐く、強い痛み、ぐったりしているなどの場合は早めに動物病院へ相談してください。']]},
{id:'health-legs',cat:'health',title:'膝蓋骨脱臼と足腰のケア',summary:'小型犬で気を付けたい膝のトラブル。',sections:[['気づきたいサイン','急に片足を浮かせる、スキップするように歩く、歩くのを嫌がるなどがみられる場合があります。'],['暮らしの工夫','滑りにくい床材や適正体重の維持、過度なジャンプの予防が役立ちます。症状があるときは獣医師に相談してください。']]},
{id:'health-teeth',cat:'health',title:'歯みがきとお口の病気',summary:'歯周病を防ぐためにできること。',sections:[['歯のケア','犬用歯ブラシと犬用歯みがき用品を使い、口に触ることから段階的に慣らしましょう。'],['チェック','口臭の増加、歯ぐきの出血、食べにくそうな様子があれば診察を検討しましょう。']]},
{id:'food-guide',cat:'food',title:'トイプードルにおすすめのごはん',summary:'年齢・体格に合うフードの選び方と食事量。',image:'card-food.webp',sections:[['フードの選び方','年齢や健康状態に合った「総合栄養食」を基本に選びます。パッケージの給与量は目安なので、体重や体型を見ながら調整します。'],['おやつ','おやつの与えすぎに注意しましょう。人間の食品には犬が食べてはいけないものもあります。'],['気を付けたい食品','チョコレート、ぶどう・レーズン、ねぎ類、キシリトールなどは犬に危険です。誤食時はすぐに動物病院へ相談してください。']]},
{id:'food-water',cat:'food',title:'お水と体重管理',summary:'日々の水分補給と体型をチェック。',sections:[['水分補給','新鮮な水をいつでも飲める状態にしましょう。飲水量の急激な変化があれば相談してください。'],['体型チェック','肋骨の触れやすさとくびれを確認し、適正体重は獣医師と相談して決めます。']]},
{id:'trim-catalog',cat:'grooming',title:'可愛いトリミングカタログ',summary:'テディベアカットなどの定番スタイルを紹介。',image:'card-trim.webp',sections:[['人気のスタイル','テディベアカットは丸い口元を生かした可愛らしい印象。アフロカット、ラムカットなども人気です。'],['サロンで伝えること','希望する長さや形を写真で伝え、毛玉や皮膚の状態、生活のしやすさについて相談しましょう。']]},
{id:'groom-home',cat:'grooming',title:'ブラッシングとおうちケア',summary:'毛玉や皮膚トラブルを防ぐ毎日のお手入れ。',sections:[['ブラッシング','できれば毎日やさしくブラッシングして毛玉を予防します。引っ張りすぎず、皮膚に負担をかけないことが大切です。'],['トリミング','伸び続ける巻き毛は一般に4〜6週間前後を目安にサロンで整えますが、毛質やスタイルで間隔は異なります。'],['耳と爪','耳の蒸れや爪の伸びも定期的に確認します。痛がる場合は無理に処置せず専門家に相談しましょう。']]},
{id:'goods-start',cat:'goods',title:'最初にそろえたいグッズ',summary:'食器、ハーネス、ブラシ、ベッドなどを用途別に紹介。',sections:[['生活用品','食器、給水器、トイレ用品、休憩スペース、移動用キャリーが基本です。'],['お手入れ用品','被毛に合うブラシ、コーム、犬用歯ブラシなど。安全性と犬のサイズを優先して選びましょう。'],['おもちゃ','誤飲しにくい大きさで、破損していないものを選びます。遊んでいる間は様子を見守りましょう。']]},
{id:'outing-tips',cat:'outing',title:'愛犬とのおでかけ準備',summary:'持ち物、暑さ対策、施設のルールを確認。',sections:[['準備するもの','水、食器、排泄物処理用品、リード、必要なお薬、連絡先などを携帯しましょう。'],['施設の確認','ペット同伴可否、屋内外のルール、ワクチン条件などは施設ごとに異なるため、訪問前に公式情報を確認してください。'],['熱中症対策','暑い時間の散歩や車内放置を避けましょう。地面の熱さにも気を付けてください。']]},
{id:'adoption-guide',cat:'adoption',title:'お迎え先を選ぶ前に',summary:'里親・ブリーダー探しの確認事項。',sections:[['健康と飼育環境','実際の飼育場所を確認し、健康状態、親犬の情報、ワクチンなどの記録について尋ねましょう。'],['契約と責任','譲渡条件、費用、動物愛護管理法にもとづく説明や登録状況を確認し、最後まで責任を持って育てられるかを家族で話し合いましょう。']]},
{id:'community-guide',cat:'community',title:'トイプー仲間と交流するコツ',summary:'飼い主同士が安全に情報交換するためのヒント。',sections:[['情報交換','食事、育て方、トリミングなど共通の話題でつながりましょう。'],['安全のために','自宅住所や連絡先などの個人情報は安易に公開しないようにしましょう。初対面で会う場合は公共の場所を選ぶことが大切です。']]},
{id:'events-guide',cat:'events',title:'オフ会を楽しむためのマナー',summary:'犬の体調・距離感・会場ルールを大切に。',sections:[['参加前','イベント主催者の最新案内、参加条件、予防接種の必要性、料金を確認しましょう。'],['当日','犬が不安そうなら無理に交流させず、休憩と水分を取りながら様子を見守ります。']]} 
];
const articleMap=Object.fromEntries(articles.map(x=>[x.id,x]));
const catMap=Object.fromEntries(categories.map(x=>[x.id,x]));
const app=document.getElementById('app');
let drawer=false;
const load=(k,d)=>{try{const s=localStorage.getItem('poomy:'+k);return s?JSON.parse(s):d;}catch{return d;}};
const save=(k,v)=>{try{localStorage.setItem('poomy:'+k,JSON.stringify(v));return true;}catch{alert('保存容量が不足しています。写真を減らしてからお試しください。');return false;}};
let pet=load('pet',{}), health=load('health',[]), photos=load('photos',[]), favorites=load('favorites',[]);
const path=()=>decodeURIComponent((location.hash||'#/home').replace(/^#\/?/,'').replace(/^\//,'')||'home');
const to=route=>{drawer=false;const p='#/'+route;if(location.hash!==p)location.hash=p;else{render();scrollTo({top:0})}};
const header=(title='POOMY')=>`<header class="sub-header"><button class="icon-button" aria-label="戻る" data-back>${ic('back')}</button><h1>${esc(title)}</h1><button class="icon-button" aria-label="ホーム" data-go="home">${ic('home')}</button></header>`;
const foot=()=>`<nav class="bottom-nav" aria-label="下部メニュー"><button class="nav-item ${path()==='home'?'selected':''}" data-go="home">${ic('home')}<span>ホーム</span></button><button class="nav-item ${path()==='search'?'selected':''}" data-go="search">${ic('search')}<span>検索</span></button><button class="nav-item center" data-go="home" aria-label="POOMYのホーム">${ic('paw')}</button><button class="nav-item ${path()==='notice'?'selected':''}" data-go="notice">${ic('bell')}<span>お知らせ</span></button><button class="nav-item ${path()==='mypage'?'selected':''}" data-go="mypage">${ic('user')}<span>マイページ</span></button></nav>`;
function home(){return `<main class="screen"><div class="home-cover"><img src="${A}home-cover.webp" alt="POOMY プーミー。トイプードルとの毎日を、もっと幸せに。ピンクの背景と笑顔のトイプードル"><button class="cover-menu" aria-label="メニューを開く" data-menu>メニュー</button><button class="cover-about" data-go="about" aria-label="トイプードルとは？ 詳細ページへ">トイプードルとは？</button></div><section class="category-grid" aria-label="12の機能">${categories.map(c=>`<button class="category-tile" data-go="${c.id==='home'?'home':'category/'+c.id}">${ic(c.icon)}<span>${esc(c.name)}</span></button>`).join('')}</section><section class="home-recs"><div class="section-heading"><h2>おすすめコンテンツ</h2><button class="text-link" data-go="category/encyclopedia">もっと見る ❯</button></div><div class="recommend-grid">${[['first-dog','card-training.webp','はじめてのトイプードルの育て方'],['food-guide','card-food.webp','トイプードルにおすすめのごはん'],['trim-catalog','card-trim.webp','可愛いトリミングカタログ']].map(([id,img,name])=>`<button class="rec-card" data-go="article/${id}"><img src="${A+img}" alt="トイプードルの写真"><strong>${name}</strong></button>`).join('')}</div></section><div class="panel" style="margin-top:0"><h2>🐾 愛犬と毎日をもっと楽しく</h2><p>マイページに愛犬を登録すると、健康記録や写真をこの端末に保存できます。</p><button class="outline-button" data-go="mypage">${ic('heart')}愛犬を登録する ${ic('next')}</button></div>${siteFooter()}</main>`;}
const facts=[['原産国','フランス（プードルの起源には諸説あり）'],['分類','小型犬'],['体高','約24〜28cm'],['体重','約2〜4kg'],['寿命','約12〜15年'],['毛色','レッド、アプリコット、ブラック、ホワイト、グレー など']];
function about(){return `${header('トイプードルとは？')}<main class="screen"><div class="detail-hero"><img src="${A}dog-cozy.webp" alt="ピンクの毛布でくつろぐ可愛いトイプードル"></div><div class="detail-main"><section class="detail-intro"><h2 class="about-title">${ic('paw')}トイプードルとは？</h2><p>トイプードルは、プードルの中でも小柄なサイズの犬たち。くるくるの巻き毛と愛くるしい表情、賢く人懐っこい一面を持ち、世界中で愛されているコンパニオンドッグです。</p></section><section class="info-panel"><h2>${ic('heart')}基本情報</h2><div class="fact-wrap"><img class="fact-dog" src="${A}dog-full.webp" alt="おすわりをするトイプードル"><dl class="fact-list">${facts.map(([a,b])=>`<div class="fact-row"><dt>${a}</dt><dd>${b}</dd></div>`).join('')}</dl></div></section><section class="feature-panel"><h2>${ic('heart')}トイプードルの特徴</h2>${[['bulb','とても賢い','人とのコミュニケーションを楽しみ、新しいことを覚えるのが得意な傾向があります。'],['heart','人懐っこく愛情深い','飼い主とのふれあいを好む子が多く、家族と過ごす時間を大切にします。'],['star','抜け毛が比較的少ない','巻き毛が特徴ですが、抜け毛がゼロではありません。アレルギーが起こらない保証もありません。'],['paw','おしゃれで可愛い','ふわふわの巻き毛を生かして、いろいろなトリミングスタイルを楽しめます。']].map(([icon,t,body])=>`<div class="feature-item"><div class="feature-icon">${ic(icon)}</div><div class="feature-text"><h3>${t}</h3><p>${body}</p></div></div>`).join('')}</section><button class="pink-button" data-jump="more-about">${ic('paw')}もっと詳しく知る ${ic('next')}</button><section class="panel full-about" id="more-about" style="margin:22px 0 0"><h2>トイプードルをもっと知ろう</h2>${articleMap.about.sections.map(([t,b])=>`<h2>${t}</h2><p>${b}</p>`).join('')}<h2>暮らしに必要なお手入れ</h2><p>毎日のブラッシング、歯みがき、散歩、定期的なトリミングを無理のない範囲で習慣に。食欲や元気、体重の変化を日々観察しましょう。</p><p class="soft-note">※体高・体重・寿命は一般的な目安です。病気や食事についての個別の判断は獣医師に相談してください。</p><div style="display:grid;gap:10px"><button class="outline-button" data-go="category/health">健康・病気について読む ${ic('next')}</button><button class="outline-button" data-go="category/grooming">トリミング・ケアについて読む ${ic('next')}</button></div></section></div></main>`;}
function category(id){let c=catMap[id];if(!c)return notFound();if(id==='photos')return photoPage();if(id==='community')return communityPage();if(id==='events')return eventsPage();return `${header(c.name)}<main class="screen"><section class="panel"><h2 class="category-title">${ic(c.icon)}${esc(c.name)}</h2><p class="section-intro">トイプードルに役立つ情報をまとめました。気になるテーマをタップして詳しく読めます。</p><div class="topic-list">${articles.filter(a=>a.cat===id).map(topicCard).join('')}</div>${id==='health'?'<button class="pink-button" style="margin-top:19px" data-go="health-log">'+ic('plus')+'健康記録をつける</button>':''}${id==='adoption'?'<p class="status" style="margin-top:12px">施設・募集情報はこの試作版には掲載していません。実際の掲載には最新情報の確認が必要です。</p>':''}${id==='outing'?'<p class="status" style="margin-top:12px">同伴可能なお店や施設は、利用前に公式の営業・同伴条件をご確認ください。</p>':''}</section><div class="panel"><h2>うちの子の記録</h2><p>毎日の健康記録や思い出を、愛犬のプロフィールと一緒に残せます。</p><button class="outline-button" data-go="mypage">マイページへ ${ic('next')}</button></div></main>`;}
function topicCard(a){return `<button class="topic-card" data-go="${a.id==='about'?'about':'article/'+a.id}"><span><strong>${esc(a.title)}</strong><small>${esc(a.summary)}</small></span>${ic('next')}</button>`;}
function articlePage(id){const a=articleMap[id];if(!a)return notFound();if(id==='about')return about();return `${header(a.title)}<main class="screen"><div class="panel"><div class="tag-row" style="margin-bottom:12px"><span class="tag">${esc(catMap[a.cat]?.name||'ガイド')}</span></div>${a.image?`<div class="article-image"><img src="${A+a.image}" alt="可愛いトイプードル"></div>`:''}<h2 style="font-size:23px">${esc(a.title)}</h2><p>${esc(a.summary)}</p><div class="full-about">${a.sections.map(([t,b])=>`<h2>${esc(t)}</h2><p>${esc(b)}</p>`).join('')}</div><div class="status" style="margin:18px 0">※一般的な情報です。健康や病気については必要に応じて動物病院へご相談ください。</div><div class="two-col"><button class="outline-button" data-fav="${a.id}">${ic('heart')} ${favorites.includes(a.id)?'保存済み':'お気に入り'}</button><button class="outline-button" data-go="category/${a.cat}">関連記事を見る</button></div></div></main>`;}
const siteFooter=()=>`<footer class="site-footer">POOMY — トイプードルとの毎日を、もっと幸せに。<br>この端末内に保存される試作版です。</footer>`;
function notFound(){return header('ページが見つかりません')+`<main class="screen"><section class="panel"><p>お探しのページは見つかりません。</p><button class="pink-button" data-go="home">ホームへ戻る</button></section></main>`;}
function petCard(){return pet.name?`<div class="panel" style="text-align:center">${pet.photo?`<img src="${pet.photo}" alt="愛犬の写真" style="height:150px;width:150px;border-radius:50%;object-fit:cover;margin:0 auto 10px;border:5px solid #fff">`:`<img src="${A}illustrated-logo.webp" style="width:115px;height:115px;border-radius:50%;margin:0 auto 10px" alt="トイプードルのイラスト">`}<h2>${esc(pet.name)}ちゃん</h2><div class="mini-stats" style="justify-content:center">${pet.birth?`<span>誕生日 ${esc(pet.birth)}</span>`:''}${pet.sex?`<span>${esc(pet.sex)}</span>`:''}${pet.color?`<span>${esc(pet.color)}</span>`:''}</div>${pet.note?`<p style="margin-top:15px">${esc(pet.note)}</p>`:''}</div>`:'';}
function mypage(){return `${header('マイページ')}<main class="screen">${petCard()}<section class="panel"><h2>${ic('paw')} うちの子プロフィール</h2><p class="section-intro">登録内容はこのスマホ・ブラウザに保存されます。機種変更時の自動引き継ぎはありません。</p><form id="pet-form"><label class="field"><span>愛犬の名前 *</span><input name="name" maxlength="28" required placeholder="例：もも" value="${esc(pet.name||'')}"></label><div class="two-col"><label class="field"><span>誕生日</span><input type="date" name="birth" value="${esc(pet.birth||'')}"></label><label class="field"><span>性別</span><select name="sex"><option value="">選択してください</option>${['男の子','女の子','不明'].map(x=>`<option ${pet.sex===x?'selected':''}>${x}</option>`).join('')}</select></label></div><label class="field"><span>毛色</span><input name="color" maxlength="30" placeholder="例：アプリコット" value="${esc(pet.color||'')}"></label><label class="field"><span>ひとこと</span><textarea name="note" maxlength="300" placeholder="好きなこと、性格など">${esc(pet.note||'')}</textarea></label><label class="field"><span>愛犬の写真（任意）</span><input type="file" name="photo" accept="image/*"></label><button class="pink-button" type="submit">${ic('heart')}プロフィールを保存する</button></form></section><section class="panel"><h2>毎日の記録</h2><div class="topic-list"><button class="topic-card" data-go="health-log"><span><strong>健康記録</strong><small>体重・体調・食事などを記録</small></span>${ic('next')}</button><button class="topic-card" data-go="category/photos"><span><strong>写真アルバム</strong><small>大切な思い出を端末に保存</small></span>${ic('next')}</button><button class="topic-card" data-go="saved"><span><strong>お気に入りの記事</strong><small>あとで見返せる記事一覧</small></span>${ic('next')}</button></div></section></main>`;}
function healthLog(){let rows=[...health].sort((a,b)=>b.date.localeCompare(a.date));return `${header('健康記録')}<main class="screen"><section class="panel"><h2>${ic('heart')} 健康メモを残す</h2><p class="section-intro">体重や元気の変化を振り返りましょう。緊急時は記録より先に動物病院へ連絡してください。</p><form id="health-form"><label class="field"><span>日付 *</span><input type="date" required name="date" value="${new Date().toLocaleDateString('sv-SE')}"></label><div class="two-col"><label class="field"><span>体重（kg）</span><input type="number" min="0.1" max="100" step="0.01" name="weight" placeholder="例：3.2"></label><label class="field"><span>元気</span><select name="mood"><option>いつもどおり</option><option>元気いっぱい</option><option>少し元気がない</option><option>体調に変化あり</option></select></label></div><label class="field"><span>メモ</span><textarea name="note" maxlength="500" placeholder="ごはん・お散歩・体調の変化など"></textarea></label><button type="submit" class="pink-button">${ic('plus')}記録を保存する</button></form></section><section class="panel"><h2>これまでの記録（${rows.length}件）</h2>${rows.length?rows.map(r=>`<div class="entry"><div class="entry-title"><strong>${esc(r.date)}${r.weight?' ・ '+esc(r.weight)+'kg':''}</strong><button class="small-action" data-delete-health="${r.id}">削除</button></div><div class="muted">${esc(r.mood)}</div>${r.note?`<p style="white-space:pre-wrap;margin:8px 0 0">${esc(r.note)}</p>`:''}</div>`).join(''):`<div class="empty">まだ健康記録はありません。<br>今日の様子から始めてみましょう。</div>`}</section></main>`;}
function photoPage(){return `${header('写真・動画投稿')}<main class="screen"><section class="panel"><img class="top-photo" src="${A}dog-smile.webp" alt="笑顔のトイプードル"><h2>うちの子の写真アルバム</h2><p>可愛い写真を残しましょう。写真はこの端末内だけに保存され、他の飼い主には公開されません。</p><form id="photo-form"><label class="field"><span>写真を選ぶ（JPEG・PNGなど）</span><input type="file" name="picture" accept="image/*" required></label><label class="field"><span>写真のひとこと（任意）</span><input name="caption" maxlength="80" placeholder="例：今日のお散歩"></label><button class="pink-button" type="submit">${ic('camera')}アルバムに追加</button></form></section><section class="panel"><h2>思い出の写真（${photos.length}枚）</h2>${photos.length?`<div class="image-grid">${photos.map(p=>`<div class="album-item"><img src="${p.src}" alt="${esc(p.caption||'愛犬の写真')}" title="${esc(p.caption||'')}"><button class="delete-photo" aria-label="写真を削除" data-delete-photo="${p.id}">×</button></div>`).join('')}</div>`:`<div class="empty">まだ写真はありません。<br>お気に入りの一枚を登録してみましょう。</div>`}<p class="muted" style="margin-top:14px">※動画投稿・他ユーザーへの公開はサーバー連携後に対応する機能です。</p></section></main>`;}
function communityPage(){return `${header('トイプー仲間')}<main class="screen"><div class="panel"><img class="top-photo" src="${A}dog-smile.webp" alt="笑顔のトイプードル"><h2>トイプー仲間</h2><p>トイプードル好き同士でつながりたい方のためのコーナーです。</p><div class="status">この初期版では、友達検索やメッセージ送信などの実際の交流サービスはまだ利用できません。ユーザー登録と安全なコミュニティ機能は、公開用のデータベースと認証の設定が必要です。</div><div class="topic-list" style="margin-top:18px">${topicCard(articleMap['community-guide'])}<button class="topic-card" data-go="category/photos"><span><strong>うちの子の写真を残す</strong><small>端末内のプライベートアルバムを使う</small></span>${ic('next')}</button></div></div></main>`;}
function eventsPage(){return `${header('イベント・オフ会')}<main class="screen"><section class="panel"><h2>${ic('calendar')} イベント・オフ会</h2><p>ワンちゃん同士の交流や季節のお出かけがもっと楽しくなる情報コーナーです。</p><div class="status">現在開催中のイベントを自動取得する仕組みはまだありません。架空の開催情報を避けるため、実在イベントの一覧は掲載していません。</div><div class="topic-list" style="margin-top:18px">${topicCard(articleMap['events-guide'])}${topicCard(articleMap['outing-tips'])}</div></section></main>`;}
function searchPage(){return `${header('検索')}<main class="screen"><section class="panel"><h2>気になる情報を検索</h2><div class="search-row">${ic('search')}<input id="search-keyword" class="search-input" type="search" autocomplete="off" placeholder="健康、しつけ、トリミング…"></div><p class="muted">トイプードルのお役立ち記事を検索します。</p><div id="search-results" class="topic-list"></div></section></main>`;}
function performSearch(){let e=document.querySelector('#search-keyword'),res=document.querySelector('#search-results');if(!e||!res)return;let q=e.value.trim().normalize('NFKC').toLowerCase().replace(/[\s　]+/g,' '),tokens=q.split(' ').filter(Boolean);let arr=articles.filter(a=>{let s=[a.title,a.summary,catMap[a.cat]?.name,...a.sections.flat()].join(' ').normalize('NFKC').toLowerCase();return tokens.every(t=>s.includes(t));});res.innerHTML=arr.length?arr.map(topicCard).join(''):'<div class="empty">該当する記事がありません。<br>別の言葉で試してみてください。</div>';}
function savedPage(){let arr=favorites.map(id=>articleMap[id]).filter(Boolean);return `${header('お気に入り')}<main class="screen"><section class="panel"><h2>${ic('heart')} お気に入りの記事</h2>${arr.length?`<div class="topic-list">${arr.map(topicCard).join('')}</div>`:'<p class="empty">お気に入りの記事はまだありません。<br>各記事のハートボタンから登録できます。</p>'}</section></main>`;}
function noticePage(){return `${header('お知らせ')}<main class="screen"><section class="panel"><h2>${ic('bell')} POOMYからのお知らせ</h2><div class="entry"><strong style="color:#e74880">POOMYへようこそ！</strong><p>トイプードル図鑑、育て方の記事、健康記録、写真アルバムをお楽しみください。</p></div><div class="entry"><strong style="color:#e74880">愛犬プロフィールを登録しませんか？</strong><p>名前や誕生日を登録すると、マイページからいつでも確認できます。</p><button class="outline-button" data-go="mypage">登録する ${ic('next')}</button></div><p class="muted" style="margin-top:18px">この画面はアプリ内のご案内です。プッシュ通知はまだ実装していません。</p></section></main>`;}
function draw(){return `<div class="drawer-backdrop" data-close-menu></div><aside class="drawer" role="dialog" aria-label="メニュー" aria-modal="true"><button class="close-drawer" aria-label="メニューを閉じる" data-close-menu>${ic('close')}</button><img class="drawer-logo" src="${A}illustrated-logo.webp" alt="トイプードルのロゴ"><h2>POOMY</h2><p style="color:#cc6084;font-weight:750">トイプードルとの毎日を、もっと幸せに。</p><div class="drawer-menu">${[{id:'home',name:'ホーム',icon:'home'}, {id:'about',name:'トイプードルとは？',icon:'paw'}, ...categories.filter(c=>c.id!=='home').map(c=>({id:'category/'+c.id,name:c.name,icon:c.icon})), {id:'health-log',name:'健康記録',icon:'heart'},{id:'mypage',name:'マイページ',icon:'user'}].map(m=>`<button data-go="${m.id}">${ic(m.icon)}${esc(m.name)}</button>`).join('')}</div></aside>`;}
function render(){const r=path();let inner;
if(r==='home')inner=home();else if(r==='about')inner=about();else if(r.startsWith('category/'))inner=category(r.slice(9));else if(r.startsWith('article/'))inner=articlePage(r.slice(8));else if(r==='mypage')inner=mypage();else if(r==='health-log')inner=healthLog();else if(r==='search')inner=searchPage();else if(r==='saved')inner=savedPage();else if(r==='notice')inner=noticePage();else inner=notFound();
app.innerHTML=`<div class="shell">${inner}${siteFooterOn(r)}${foot()}</div>${drawer?draw():''}`;
if(r==='search')performSearch();document.title=(r==='home'?'POOMY':document.querySelector('.sub-header h1')?.textContent||'POOMY')+' | POOMY プーミー';
}
const siteFooterOn=r=>r==='home'?'':siteFooter();
function compressImage(file,maxSide=750){return new Promise((resolve,reject)=>{if(!file.type.startsWith('image/'))return reject(new Error('画像ファイルを選択してください。'));if(file.size>15*1024*1024)return reject(new Error('15MB以下の画像を選択してください。'));const url=URL.createObjectURL(file),img=new Image();img.onload=()=>{URL.revokeObjectURL(url);let ratio=Math.min(1,maxSide/Math.max(img.width,img.height)),canvas=document.createElement('canvas');canvas.width=Math.round(img.width*ratio);canvas.height=Math.round(img.height*ratio);let ctx=canvas.getContext('2d');ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);ctx.drawImage(img,0,0,canvas.width,canvas.height);resolve(canvas.toDataURL('image/jpeg',.72))};img.onerror=()=>{URL.revokeObjectURL(url);reject(new Error('画像を読み込めませんでした。'))};img.src=url;});}
window.addEventListener('hashchange',()=>{render();window.scrollTo({top:0,behavior:'instant'});});
document.addEventListener('click',e=>{
const go=e.target.closest('[data-go]');if(go){to(go.dataset.go);return;}
if(e.target.closest('[data-menu]')){drawer=true;render();return;}
if(e.target.closest('[data-close-menu]')){drawer=false;render();return;}
if(e.target.closest('[data-back]')){if(path()==='home')return;history.length>1?history.back():to('home');return;}
const jump=e.target.closest('[data-jump]');if(jump){document.getElementById(jump.dataset.jump)?.scrollIntoView({behavior:'smooth',block:'start'});return;}
const fav=e.target.closest('[data-fav]');if(fav){let id=fav.dataset.fav;favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];save('favorites',favorites);render();return;}
const del=e.target.closest('[data-delete-health]');if(del){if(confirm('この健康記録を削除しますか？')){health=health.filter(x=>String(x.id)!==del.dataset.deleteHealth);save('health',health);render();}return;}
const delphoto=e.target.closest('[data-delete-photo]');if(delphoto){if(confirm('この写真を削除しますか？')){photos=photos.filter(x=>String(x.id)!==delphoto.dataset.deletePhoto);save('photos',photos);render();}return;}
});
document.addEventListener('input',e=>{if(e.target.id==='search-keyword')performSearch();});
document.addEventListener('submit',async e=>{
if(!['pet-form','health-form','photo-form'].includes(e.target.id))return;e.preventDefault();const form=e.target,fd=new FormData(form),submit=form.querySelector('[type=submit]');if(submit)submit.disabled=true;
try{
 if(form.id==='pet-form'){
  const next={...pet,name:String(fd.get('name')||'').trim().slice(0,28),birth:String(fd.get('birth')||''),sex:String(fd.get('sex')||''),color:String(fd.get('color')||'').trim().slice(0,30),note:String(fd.get('note')||'').trim().slice(0,300)};
  if(!next.name)return alert('愛犬のお名前を入力してください。');
  let file=fd.get('photo');if(file instanceof File&&file.size)next.photo=await compressImage(file,480);
  if(save('pet',next)){pet=next;alert('愛犬のプロフィールを保存しました！');render();}
 }else if(form.id==='health-form'){
  const date=String(fd.get('date')||'');if(!/^\d{4}-\d{2}-\d{2}$/.test(date))return alert('日付を選んでください。');
  let item={id:Date.now(),date,weight:String(fd.get('weight')||''),mood:String(fd.get('mood')||''),note:String(fd.get('note')||'').slice(0,500)};
  if(save('health',[item,...health])){health=[item,...health];render();}
 }else if(form.id==='photo-form'){
  const f=fd.get('picture');if(!(f instanceof File)||!f.size)return alert('写真を選択してください。');
  if(photos.length>=18)return alert('写真は最大18枚まで保存できます。');
  const pic=await compressImage(f,650);let item={id:Date.now(),src:pic,caption:String(fd.get('caption')||'').slice(0,80)};
  if(save('photos',[item,...photos])){photos=[item,...photos];render();}
 }
}catch(ex){alert(ex?.message||'処理できませんでした。別の写真でお試しください。');}finally{if(submit)submit.disabled=false;}
});
if(!location.hash)history.replaceState(null,'','#/home');
render();
if('serviceWorker' in navigator && location.protocol.startsWith('http'))navigator.serviceWorker.register('./sw.js').catch(()=>{});
})();
