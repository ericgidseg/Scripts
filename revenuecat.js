[rewrite_local]
#修改
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/Revenuecat.js
#清理
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/Revenuecat.js
https://api.lianjiu.fun/app/api/v1/profile url reject

[mitm] 
hostname = api.revenuecat.com, api.lianjiu.fun

************************************/

const Q = {};
const Q1 = JSON.parse(typeof $response != "undefined" && $response.body || null);
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  Q.headers = $request.headers;
} else if (Q1 && Q1.subscriber) {
  Q1.subscriber.subscriptions = Q1.subscriber.subscriptions || {};
  Q1.subscriber.entitlements = Q1.subscriber.entitlements || {};
  var headers = {};
  for (var key in $request.headers) {
  const reg = /^[a-z]+$/;
  if (key === "User-Agent" && !reg.test(key)) {
    var lowerkey = key.toLowerCase();
    $request.headers[lowerkey] = $request.headers[key];
    delete $request.headers[key];
    }
  }
  var UA = $request.headers['user-agent'];
  const app = '1';
  const UAMappings = {
    'AmazingWidget':{name:'pro',id:'moyo_subcription_yearly'},//10.22
    'dtdVibe':{name:'pro',id:'com.dtd.aroundu.year'},//9.26
    'DtdVibe':{name:'pro',id:'com.dtd.playlist.premium.subscription.yearr'},//9.26
    'AdGuard%20Home%20Remote':{name:'aghrpro',id:'adguard.home.remote.pro'},//9.25
    'Chatme':{name:'premium',id:'chatme_premium_year_discount'},//9.24
    'Alpenglow':{ name: 'newPro', id: 'ProLifetime'},//9.23
    'Opal':{ name: 'premium_tier_2', id: 'com.withopal.opal.premiumtier2lifetime'},//9.11
    'Photoooo':{ name: 'lifetime', id: 'canoe_28_rnb_forever'},//9.18
    'Baby%20Generator':{ name: 'premium_features', id: 'babygenerator_499_weekly'},//9.9
    'Boring':{ name: 'pro', id: 'month'},//8.29lifelog
    'Snipd':{ name: 'premium', id: 'test_snipd_premium_grandfather_1y_4200_trial_2w_v1'},//9.10
    'Overdue':{ name: 'Pro', id: '1'},//8.29我的物品
    'iScape':{ name: 'Pro', id: 'Limited_YearlyProAutoRenew'},//8.15
    'GigaBody':{ name: 'Pro', id: 'GigaBodySubscriptionYear_v1'},//8.21
    'FunPix':{ name: 'premium', id: 'intro_price_weekly'},//8.15
    'WiseMate':{ name: 'vip_entitlement', id: 'wisemate.ai.ios.week'},//8.15
    'Loora':{ name: 'Yearly', id: 'yearly_119_99_no_trial'},//8.14
    'Browser':{ name: 'pro', id: 'pro_zoomable'},//8.7
    'becoming':{ name: 'Strength Pro', id: 'strength_membership_monthly'},//练就
    'Chords':{ name: 'FullUnlock', id: 'cas_full_unlock_yearly_50_off'},//8.1
    'reader':{ name: 'subscriptions', id: 'com.valo.reader.vip1.forever'},
    'Gradient':{ name: 'unlimited', id: 'com.tickettothemoon.gradient.unlimited.yearly.small'},//7.23
    'Python3IDE':{ name: 'pro', id: 'python3ide_six_month'},//7.14
    'Scale%20Finder':{ name: 'Pro', id: 'sf_2999_1y_1w0'},//7.14
    'Who%20Stalks':{ name: 'Premium', id: 'ws_999_1m'},//7.14
    'PrevisShot':{ name: 'VIP', id: 'com.previsshot.previsshot.continuous_subscribe_12month_vip'},//7.9
    'Super%20AI%20Chat':{ name: 'premium', id: 'chatbot_v4_1999_1y'},
    'MusicPutty':{ name: 'pro_version', id: 'mp_3599_1y'},//6.24
    'Linearity':{ name: 'pro', id: 'linearity_curve_pro_yearly_special_offer_trial'},
    'iplayTV':{ name: 'com.ll.btplayer.12', id: 'com.ll.btplayer.12'},//6.21
    '%E8%B5%84%E6%BA%90%E6%90%AC%E8%BF%90%E5%A4%A7%E5%B8%88':{ name: 'SaveTikYoutu_common', id: 'LifetimeSubscription'},
    'DHWaterMarkManager':{ name: 'Vip', id: 'lifetimeVIP_001'},//6.20
    'Krishna%20VPN%20Plus%20Browser':{ name: 'vpnz-lifetime', id: 'vpnz-lifetime'},//7.7
    'XBListeningEnglish':{ name: 'enPro', id: 'com.shenming.newconceptvip.year'},
    'FretTrainer':{ name: 'pro', id: 'frettrainer.sub.yearly.pro'},//5.7
    '%E9%B2%B8%E8%90%BD%E6%96%87%E6%A1%88':{ name: 'vip', id: 'jl_year'},//2024.5.6
    'PeachTree':{ name: 'GoldMember', id: 'LifetimeGoldMembership'},//2024.5.5
    'No%20Fusion':{ name: 'LivePhoto', id: 'com.grey.livephoto.reference.price'},//2024.5.5
    'mark_cup':{ name: 'premiun', id: '202403180021'},//20.24.5.4
    'VOX':{ name: 'VOX Premium', id: 'com.coppertino.VoxMobile.AU.Loop1_v8'},//20.24.4.22
    'PDF%20Viewer':{ name: 'sub.pro', id: 'com.pspdfkit.viewer.sub.pro.yearly'},//2024.3.21
    'Text%20Workflow':{ name: 'pro', id: 'tw_99_1m'},//2024.3.2
    'FaceMa':{ name: 'Pro access', id: 'Pro_Lifetime'},//Facemo
    'MadeYu':{ name: 'pro_plus', id: 'my_549_1m_400'},//
    'clica':{ name: 'pro', id: 'clica.vip.year'},//
    'FoJiCam':{ name: 'ProVersionLifeTime', id: 'com.uzero.cn.fojicam.life2'},//2024.4.9
    'ShellBoxKit':{ name: 'pro', id: 'ShellBoxKit.Lifetime'},//2024.4.9
    'PicSeedClient':{ name: 'Pro', id: 'com.picseed.sub.pro.monthly'},//7.6
    'StarDiary':{ name: 'pro', id: 'com.gsdyx.StarDiary.nonConsumable.forever'},
    'CountDuck':{ name: 'premium', id: 'Lifetime'},
    'StarFocus':{ name: 'pro', id: 'com.gsdyx.StarFocus.nonConsumable.forever'},
    'Context_iOS':{ name: 'pro', id: 'ctx_3y_sspai_preorder_angel'},
    'Vision':{ name: 'promo_3.0', id: 'vis_lifetime_3.0_promo'},
    'Structured':{ name: 'pro', id: 'today.structured.pro'},
    'Cookie':{ name: 'allaccess', id: 'app.ft.Bookkeeping.lifetime'},
    'CountDuck':{ name: 'premium', id: 'Lifetime'},
    'HTTPBot':{ name: 'Pro', id: 'httpbot_1499_1y_1w0'},
    'MyPianist':{ name: 'pro', id: 'com.collaparte.mypianist.pro.gift.twelve'},
    'TouchRetouchBasic':{ name: 'premium', id: 'tr5_yearlysubsc_30_and_20_dlrs'},//年底订阅
    'Free':{ name: 'pro', id: 'appspree_pro_lifetime'},
    'Version':{ name: 'pro', id: 'httpbot_1499_1y_1w0'},
    'wordswag':{ name: 'pro', id: 'Pro_Launch_Monthly'},
    'BlackBox':{ name: 'plus', id: 'app.filmnoir.appstore.purchases.lifetime'},
    'LongmaoApp':{ name: 'pro', id: 'douyina_forever_01'},
    'AnkiPro':{ name: 'Premium', id: 'com.ankipro.app.lifetime'},
    'AIChat':{ name: 'AI Plus', id: 'aiplus_yearly'},
    'SmartAIChat':{ name: 'Premium', id: 'sc_3999_1y'},
    'AIKeyboard':{ name: 'plus_keyboard', id: 'aiplus_keyboard_yearly'},
    'TextMask':{ name: 'pro', id: 'tm_lifetime'},
    'MusicMate':{ name: 'premium', id: 'mm_lifetime_68_premium'},
    'ImagineAI':{ name: 'pro', id: 'artistai.yearly.1'},
    'VoiceAI':{ name: 'Special Offer', id: 'voiceannualspecial'},
    'Langster':{ name: 'Premium', id: 'com.langster.universal.lifetime'},
    'Chat%E7%BB%83%E5%8F%A3%E8%AF%AD':{ name: 'Premium', id: 'com.tech.AiSpeak.All'},
    'Readle':{ name: 'Premium', id: 'com.hello.german.yearly'},
    'image_upscaler':{ name: 'pro', id: 'yearly_sub_pro'},
    'Muse':{ name: 'pro', id: 'monthly_pro_muse'},
    'Funexpected%20Math':{ name: 'plus', id: 'Plus6Months14DaysTrial'},
    'cdiary':{ name: 'Premium', id: 'pub.kiya.daymoment.lifetime'},
    'Sex%20Actions':{ name: 'Premium Plus', id: 'ru.sexactions.subscriptionPlusWeek1'},
    'Law':{ name: 'vip', id: 'LawVIPOneYear'},
    'Emoji+%20%F0%9F%98%9':{ name: 'premium', id: 'com.emoji.freemium.subscription.premium'},
    'universal':{ name: 'Premium', id: 'remotetv.yearly.01'},
    'HabitKit':{ name: 'Pro', id: 'habitkit_1799_lt'},
    'windiary':{ name: 'Pro', id: 'windiary_1799_lt'},
    'Liftbear':{ name: 'Pro', id: 'liftbear_2399_1y'},
    'Currency':{ name: 'plus', id: 'com.jeffreygrossman.currencyapp.iap.pro.crossgrade'},

    'VSCO':{name:'pro',id:'vscopro_global_5999_annual_7D_free'},
    'Pillow':{name:'premium',id:'com.neybox.pillow.premium.yearly'}
    
    
    
    };

  const data = {
    "expires_date": "2099-12-31T12:00:00Z",
    "original_purchase_date": "2023-09-01T11:00:00Z",
    "purchase_date": "2023-09-01T11:00:00Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };
  for (const i in UAMappings) {
    if (new RegExp(`^${i}`, 'i').test(UA)) {
      const { name, id } = UAMappings[i];
      Q1.subscriber.subscriptions = {};
      Q1.subscriber.subscriptions[id] = data;
      Q1.subscriber.entitlements[name] = JSON.parse(JSON.stringify(data));
      Q1.subscriber.entitlements[name].product_identifier = id;
      break;
    }
  }
  Q.body = JSON.stringify(Q1);
}
$done(Q);
