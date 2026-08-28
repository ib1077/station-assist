/* ===== phrases 配列 ===== */
const phrases = {
  dore: [
    { cat:"dore", no:1, role:"Q", ja:"この列車はどの駅で降りますか？", en:"Which station will you get off at?" , zh:"您要在哪个车站下车？", ko:"어느 역에서 내리시나요?"},
    { cat:"dore", no:2, role:"Q", ja:"最終の目的地はどこですか？", en:"What is your final destination?" , zh:"您的最终目的地是哪里？", ko:"최종 목적지가 어디인가요?"},
    { cat:"dore", no:3, role:"I", ja:"乗り換えてください。", en:"Please transfer." , zh:"请换乘。", ko:"환승해 주세요."},
    { cat:"dore", no:4, role:"I", ja:"次に来る列車をご利用ください。", en:"Please take the next arriving train." , zh:"请乘坐下一班到达的列车。", ko:"다음에 오는 열차를 이용해 주세요."},
    { cat:"dore", no:5, role:"E", ja:"乗り換え時間が短いです。", en:"Transfer time is short." , zh:"换乘时间较短。", ko:"환승 시간이 짧습니다."},
    { cat:"dore", no:6, role:"I", ja:"乗車を急いでください。", en:"Please board as soon as possible." , zh:"请尽快上车。", ko:"서둘러 탑승해 주세요."}
  ],

  train: [
    { cat:"train", no:1, role:"E", ja:"この列車は特急列車です。", en:"This is a limited express train." , zh:"这是特急列车。", ko:"이 열차는 특급열차입니다."},
    { cat:"train", no:2, role:"E", ja:"全席指定席です。", en:"Reserved seats only." , zh:"全车为指定席。", ko:"전 좌석 지정석입니다."},
    { cat:"train", no:3, role:"Q", ja:"指定席特急券をお持ちですか？", en:"Do you have a reserved seat ticket?" , zh:"您有指定席特急券吗？", ko:"지정석 특급권을 가지고 계신가요?"},
    { cat:"train", no:4, role:"I", ja:"席のご案内をします。", en:"We will show you to your seat." , zh:"我们为您安排座位。", ko:"좌석을 안내해 드리겠습니다."},
    { cat:"train", no:5, role:"I", ja:"車掌にお知らせください。", en:"Please speak to the conductor." , zh:"请告知列车员。", ko:"차장에게 알려 주세요."},
    { cat:"train", no:6, role:"E", ja:"この列車は智頭線を通ります。", en:"This train runs on the Chizu Line." , zh:"这趟列车经过智头线。", ko:"이 열차는 지즈선을 운행합니다."},
    { cat:"train", no:7, role:"E", ja:"ジャパンレールパスは使えません。", en:"Japan Rail Pass is not valid." , zh:"不能使用日本铁路周游券。", ko:"재팬 레일 패스를 사용할 수 없습니다."},
    { cat:"train", no:8, role:"E", ja:"ICカードは使えません。", en:"IC cards cannot be used." , zh:"不能使用IC卡。", ko:"IC카드를 사용할 수 없습니다."},
    { cat:"train", no:9, role:"E", ja:"指定席は満席です。ドア付近での立席乗車となります。", en:"Reserved seats are full. Please stand near the door." , zh:"指定席已满，请在车门附近站立乘车。", ko:"지정석은 매진되었습니다. 문 근처에서 서서 이용해 주세요."},
    { cat:"train", no:10, role:"E", ja:"この列車は普通列車です。各駅に停まります。", en:"This is a local train. It stops at all stations." , zh:"这是普通列车，每站都停。", ko:"이 열차는 보통열차입니다. 모든 역에 정차합니다."},
    { cat:"train", no:11, role:"I", ja:"後ろのドアからご乗車ください。運賃は後払いです。前のドアからお降りください。", en:"Please board through the rear door, pay when you get off, and exit through the front door." , zh:"请从后门上车，车费下车时支付，请从前门下车。", ko:"뒷문으로 타시고 운임은 내리실 때 지불해 주세요. 앞문으로 내려 주세요."},
    { cat:"train", no:12, role:"I", ja:"運賃箱にお支払いください。乗車券を運転士に見せてください。", en:"Please pay at the fare box and show your ticket to the driver." , zh:"请将车费投入运费箱，并向司机出示车票。", ko:"운임함에 운임을 지불하고 승차권을 운전기사에게 보여 주세요."}
  ],

  ticket: [
    { cat:"ticket", no:1, role:"Q", ja:"行き先を教えてください。", en:"Please tell me your destination." , zh:"请告诉我您的目的地。", ko:"목적지를 알려 주세요."},
    { cat:"ticket", no:2, role:"I", ja:"乗車券を見せてください。", en:"Please show your ticket." , zh:"请出示车票。", ko:"승차권을 보여 주세요."},
    { cat:"ticket", no:3, role:"Q", ja:"スマートフォンのルート検索を見せてください。", en:"Can you show me your route search?" , zh:"请给我看一下您手机上的路线查询结果。", ko:"스마트폰의 경로 검색 결과를 보여 주세요."},
    { cat:"ticket", no:4, role:"I", ja:"きっぷを購入してください。", en:"Please buy a ticket." , zh:"请购买车票。", ko:"승차권을 구매해 주세요."},
    { cat:"ticket", no:5, role:"E", ja:"智頭線の運賃が必要です。JRの乗車券は使えません。", en:"The Chizu Line fare is required. JR tickets are not valid." , zh:"需要支付智头线的车费。JR车票不能使用。", ko:"지즈선 운임이 필요합니다. JR 승차권은 사용할 수 없습니다."},
    { cat:"ticket", no:6, role:"I", ja:"運賃をお支払いください。", en:"Please pay the fare." , zh:"请支付车费。", ko:"운임을 지불해 주세요."},
    { cat:"ticket", no:7, role:"I", ja:"降車駅でお支払いください。", en:"Please pay at your destination station." , zh:"请在下车站支付车费。", ko:"내리는 역에서 운임을 지불해 주세요."},
    { cat:"ticket", no:8, role:"E", ja:"乗車券に未使用証明をします。", en:"We can mark your ticket as unused." , zh:"我们可以在车票上加盖未使用证明。", ko:"승차권에 미사용 확인을 해 드립니다."},
    { cat:"ticket", no:9, role:"E", ja:"駅の窓口で払い戻しできます。", en:"You can get a refund at the ticket counter." , zh:"可以在车站窗口办理退款。", ko:"역 창구에서 환불할 수 있습니다."},
    { cat:"ticket", no:10, role:"I", ja:"智頭線の運賃をお支払いください。", en:"Please pay the Chizu Line fare." , zh:"请支付智头线的车费。", ko:"지즈선 운임을 지불해 주세요."},
    { cat:"ticket", no:11, role:"E", ja:"パスのエリア外です。エリア外の運賃をお支払いください。", en:"You are outside the pass area. Please pay the extra fare." , zh:"这里不在通票使用范围内，请支付范围外的车费。", ko:"패스 이용 범위 밖입니다. 범위 밖의 운임을 지불해 주세요."},
    { cat:"ticket", no:12, role:"I", ja:"JR区間と智頭線は別々にきっぷを購入してください。", en:"Please buy separate tickets for the JR section and the Chizu Line." , zh:"JR区间和智头线请分别购买车票。", ko:"JR 구간과 지즈선 승차권은 각각 구매해 주세요."},
    { cat:"ticket", no:13, role:"E", ja:"乗車ルートと乗車券のルートが違います。", en:"Your ticket route is incorrect." , zh:"您的乘车路线与车票上的路线不一致。", ko:"이용하신 경로와 승차권의 경로가 다릅니다."},
    { cat:"ticket", no:14, role:"I", ja:"差額をお支払いください。", en:"Please pay the fare difference." , zh:"请支付差额。", ko:"차액을 지불해 주세요."},
    { cat:"ticket", no:15, role:"I", ja:"現金のみでお支払いください。", en:"Please pay in cash only." , zh:"请使用现金支付。", ko:"현금으로만 지불해 주세요."},
    { cat:"ticket", no:16, role:"E", ja:"クレジットカードまたはICカードで支払えます。", en:"You can pay by credit card or IC card." , zh:"可以使用信用卡或IC卡支付。", ko:"신용카드 또는 IC카드로 지불할 수 있습니다."},
    { cat:"ticket", no:17, role:"E", ja:"早く到着するルートがあります。料金は高くなります。", en:"There is a faster route. It costs more." , zh:"有更快的路线，但费用会更高。", ko:"더 빨리 도착하는 경로가 있습니다. 요금은 더 비쌉니다."},
    { cat:"ticket", no:18, role:"Q", ja:"このルートにしますか？", en:"Would you like this route?" , zh:"要选择这条路线吗？", ko:"이 경로로 하시겠어요?"},
    { cat:"ticket", no:19, role:"E", ja:"変更・払い戻しは列車の発車前のみできます。", en:"Changes and refunds are available only before departure." , zh:"只有在列车出发前可以办理变更或退款。", ko:"변경 및 환불은 열차 출발 전에만 가능합니다."},
    { cat:"ticket", no:20, role:"E", ja:"乗り遅れの場合は、同日の後続の特急列車に立席で乗車できます。", en:"If you miss your train, you may take a later limited express train on the same day as a standing passenger." , zh:"如果错过列车，当天的后续特急列车可以站立乘车。", ko:"열차를 놓친 경우, 같은 날의 다음 특급열차를 서서 이용할 수 있습니다."},
    { cat:"ticket", no:21, role:"E", ja:"後続の列車の指定席利用には、差額のお支払いが必要です。", en:"A fare difference is required to use a reserved seat on a later train." , zh:"如果要乘坐后续列车的指定席，需要支付差额。", ko:"다음 열차의 지정석을 이용하려면 차액을 지불해야 합니다."}
  ],

  ic: [
    { cat:"ic", no:1, role:"E", ja:"ここはICカードエリア外です。通常のきっぷを購入してください。", en:"This is outside the IC card area. Please buy a regular ticket." , zh:"这里不在IC卡使用范围内，请购买普通车票。", ko:"여기는 IC카드 이용 범위 밖입니다. 일반 승차권을 구매해 주세요."},
    { cat:"ic", no:2, role:"I", ja:"ICカードを自動改札機にタッチしてください。", en:"Please tap your IC card at the ticket gate." , zh:"请将IC卡在自动检票机上轻触。", ko:"IC카드를 자동 개찰기에 태그해 주세요."},
    { cat:"ic", no:3, role:"Q", ja:"どの駅からICカードで入場しましたか？", en:"Which station did you enter from with your IC card?" , zh:"您是从哪个车站使用IC卡进站的？", ko:"어느 역에서 IC카드로 입장하셨나요?"},
    { cat:"ic", no:4, role:"I", ja:"ICカードエリアの駅でカードの入場記録の取り消しができます。係員におたずねください。", en:"Please ask the staff at an IC card area station to cancel your IC card entry record." , zh:"请在可以使用IC卡的车站向工作人员咨询，取消IC卡的进站记录。", ko:"IC카드를 사용할 수 있는 역에서 직원에게 문의하여 IC카드의 입장 기록을 취소해 주세요."}
  ],

  info: [
    { cat:"info", no:1, role:"E", ja:"信号待ちです。", en:"We are waiting for a signal." , zh:"正在等待信号。", ko:"신호를 기다리고 있습니다."},
    { cat:"info", no:2, role:"E", ja:"しばらく停車します。", en:"We will stop for a while." , zh:"列车会暂时停车。", ko:"잠시 정차합니다."},
    { cat:"info", no:3, role:"E", ja:"列車の運行が遅れています。", en:"Train services are delayed." , zh:"列车运行有所延误。", ko:"열차 운행이 지연되고 있습니다."},
    { cat:"info", no:4, role:"I", ja:"次の列車をご利用ください。", en:"Please take the next train." , zh:"请乘坐下一班列车。", ko:"다음 열차를 이용해 주세요."},
    { cat:"info", no:5, role:"I", ja:"次に来る列車をご利用ください。", en:"Please take the next arriving train." , zh:"请乘坐下一班到达的列车。", ko:"다음에 오는 열차를 이용해 주세요."},
    { cat:"info", no:6, role:"E", ja:"運転を見合わせています。", en:"Train service is suspended." , zh:"列车暂时停运。", ko:"열차 운행을 잠시 중단하고 있습니다."},
    { cat:"info", no:7, role:"E", ja:"運転再開時刻は未定です。", en:"We do not know when train service will resume." , zh:"目前还无法确定列车何时恢复运行。", ko:"열차 운행 재개 시각은 아직 정해지지 않았습니다."},
    { cat:"info", no:8, role:"E", ja:"🌧 天候の影響 ⚠️ 事故の影響 🔧 故障の影響", en:"🌧 Bad weather ⚠️ An accident 🔧 A mechanical problem" , zh:"🌧 天气影响　⚠️ 事故影响　🔧 设备故障", ko:"🌧 날씨의 영향　⚠️ 사고의 영향　🔧 고장의 영향"},
    { cat:"info", no:9, role:"E", ja:"この列車は途中で運転を取りやめます。", en:"This train will terminate before the final destination." , zh:"这趟列车将在途中终止运行。", ko:"이 열차는 도중에 운행을 종료합니다."},
    { cat:"info", no:10, role:"E", ja:"誤った列車に乗っています。", en:"You are on the wrong train." , zh:"您乘坐的是错误的列车。", ko:"잘못된 열차를 타고 계십니다."},
    { cat:"info", no:11, role:"I", ja:"次の駅で降りてください。戻る列車をご利用ください。", en:"Please get off at the next station and take a train back." , zh:"请在下一站下车，然后乘坐返回方向的列车。", ko:"다음 역에서 내리신 후, 되돌아가는 열차를 이용해 주세요."}
  ]
};
