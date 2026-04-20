export interface Stock {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
}

export interface Sector {
  id: string;
  name: string;
  macroCategory: '電子產業' | '傳統產業' | '金融保險' | '生技醫療' | '服務與生活' | '新創與環境';
  description: string;
  icon: string;
  marketCap?: string;
  topStocks: Stock[];
}

export const sectors: Sector[] = [
  {
    id: "tse-market",
    name: "台灣上市企業 (TSE)",
    macroCategory: '電子產業', // Using existing UI categories
    description: "台灣證券交易所掛牌之上市企業與ETF，總計約 1,083 檔。代表台灣經濟的核心動能。",
    icon: "TrendingUp",
    marketCap: "NT$ 60+ 兆",
    topStocks: [
      {
            id: "0050",
            name: "元大台灣50",
            symbol: "0050",
            price: 84.15,
            change: -1.18,
            changePercent: -0.51
      },
      {
            id: "0051",
            name: "元大中型100",
            symbol: "0051",
            price: 121.3,
            change: -0.96,
            changePercent: 0.25
      },
      {
            id: "0052",
            name: "富邦科技",
            symbol: "0052",
            price: 48.85,
            change: -2.42,
            changePercent: -2.43
      },
      {
            id: "0053",
            name: "元大電子",
            symbol: "0053",
            price: 191.85,
            change: -0.44,
            changePercent: 1.16
      },
      {
            id: "0055",
            name: "元大MSCI金融",
            symbol: "0055",
            price: 33.43,
            change: 1.75,
            changePercent: -0.24
      },
      {
            id: "0056",
            name: "元大高股息",
            symbol: "0056",
            price: 40.98,
            change: -1.71,
            changePercent: -0.28
      },
      {
            id: "0057",
            name: "富邦摩台",
            symbol: "0057",
            price: 249.7,
            change: 1.77,
            changePercent: -0.98
      },
      {
            id: "0061",
            name: "元大寶滬深",
            symbol: "0061",
            price: 24.02,
            change: 1.26,
            changePercent: 0.67
      },
      {
            id: "1101",
            name: "台泥",
            symbol: "1101",
            price: 25.1,
            change: -2.33,
            changePercent: 2.28
      },
      {
            id: "1102",
            name: "亞泥",
            symbol: "1102",
            price: 35.7,
            change: -1.95,
            changePercent: 0.11
      },
      {
            id: "1103",
            name: "嘉泥",
            symbol: "1103",
            price: 14,
            change: -1.87,
            changePercent: -1.58
      },
      {
            id: "1104",
            name: "環泥",
            symbol: "1104",
            price: 29.35,
            change: -1.18,
            changePercent: -2.24
      },
      {
            id: "1108",
            name: "幸福",
            symbol: "1108",
            price: 14.9,
            change: -0.9,
            changePercent: 0.81
      },
      {
            id: "1109",
            name: "信大",
            symbol: "1109",
            price: 15.5,
            change: -2.1,
            changePercent: 2.06
      },
      {
            id: "1110",
            name: "東泥",
            symbol: "1110",
            price: 15.85,
            change: -2.37,
            changePercent: -1.71
      },
      {
            id: "1201",
            name: "味全",
            symbol: "1201",
            price: 13.4,
            change: 1.58,
            changePercent: -0.56
      },
      {
            id: "1203",
            name: "味王",
            symbol: "1203",
            price: 43.4,
            change: 1,
            changePercent: 0.93
      },
      {
            id: "1210",
            name: "大成",
            symbol: "1210",
            price: 54.2,
            change: -2.11,
            changePercent: -1.99
      },
      {
            id: "1213",
            name: "大飲",
            symbol: "1213",
            price: 9.33,
            change: -1.31,
            changePercent: 0.4
      },
      {
            id: "1215",
            name: "卜蜂",
            symbol: "1215",
            price: 142.5,
            change: -1.43,
            changePercent: -2.07
      },
      {
            id: "1216",
            name: "統一",
            symbol: "1216",
            price: 73.5,
            change: 0.16,
            changePercent: -1.32
      },
      {
            id: "1217",
            name: "愛之味",
            symbol: "1217",
            price: 10.4,
            change: 0.4,
            changePercent: -2.26
      },
      {
            id: "1218",
            name: "泰山",
            symbol: "1218",
            price: 19.05,
            change: -0.31,
            changePercent: 1.6
      },
      {
            id: "1219",
            name: "福壽",
            symbol: "1219",
            price: 14.3,
            change: -1.09,
            changePercent: 1.21
      },
      {
            id: "1220",
            name: "台榮",
            symbol: "1220",
            price: 12.8,
            change: 1.25,
            changePercent: 1.67
      },
      {
            id: "1225",
            name: "福懋油",
            symbol: "1225",
            price: 33.3,
            change: -0.86,
            changePercent: -0.84
      },
      {
            id: "1227",
            name: "佳格",
            symbol: "1227",
            price: 30.75,
            change: 1.49,
            changePercent: 0.2
      },
      {
            id: "1229",
            name: "聯華",
            symbol: "1229",
            price: 44.4,
            change: 0.78,
            changePercent: -2.05
      },
      {
            id: "1231",
            name: "聯華食",
            symbol: "1231",
            price: 90.2,
            change: -1.71,
            changePercent: 0.21
      },
      {
            id: "1232",
            name: "大統益",
            symbol: "1232",
            price: 150,
            change: -0.59,
            changePercent: -1.65
      },
      {
            id: "1233",
            name: "天仁",
            symbol: "1233",
            price: 29.5,
            change: 2.01,
            changePercent: -0.93
      },
      {
            id: "1234",
            name: "黑松",
            symbol: "1234",
            price: 36.2,
            change: 2.2,
            changePercent: -1.1
      },
      {
            id: "1235",
            name: "興泰",
            symbol: "1235",
            price: 45.2,
            change: 1.26,
            changePercent: -2.23
      },
      {
            id: "1236",
            name: "宏亞",
            symbol: "1236",
            price: 26.9,
            change: 0.94,
            changePercent: 0.66
      },
      {
            id: "1256",
            name: "鮮活果汁-KY",
            symbol: "1256",
            price: 157,
            change: 1.28,
            changePercent: -1.55
      },
      {
            id: "1301",
            name: "台塑",
            symbol: "1301",
            price: 53.4,
            change: -0.52,
            changePercent: 0.11
      },
      {
            id: "1303",
            name: "南亞",
            symbol: "1303",
            price: 87.7,
            change: 0.87,
            changePercent: -1.21
      },
      {
            id: "1304",
            name: "台聚",
            symbol: "1304",
            price: 14.55,
            change: 2.44,
            changePercent: -1.03
      },
      {
            id: "1305",
            name: "華夏",
            symbol: "1305",
            price: 14.9,
            change: -1.24,
            changePercent: -0.74
      },
      {
            id: "1307",
            name: "三芳",
            symbol: "1307",
            price: 31.9,
            change: -1.13,
            changePercent: 2.24
      },
      {
            id: "1308",
            name: "亞聚",
            symbol: "1308",
            price: 15.25,
            change: 1.98,
            changePercent: -0.76
      },
      {
            id: "1309",
            name: "台達化",
            symbol: "1309",
            price: 19.6,
            change: -1.64,
            changePercent: 1.24
      },
      {
            id: "1310",
            name: "台苯",
            symbol: "1310",
            price: 10.05,
            change: -0.83,
            changePercent: 1.53
      },
      {
            id: "1312",
            name: "國喬",
            symbol: "1312",
            price: 14.1,
            change: 0.95,
            changePercent: 2.38
      },
      {
            id: "1313",
            name: "聯成",
            symbol: "1313",
            price: 12.2,
            change: 0.59,
            changePercent: -0.7
      },
      {
            id: "1314",
            name: "中石化",
            symbol: "1314",
            price: 7.7,
            change: -0.05,
            changePercent: -0.26
      },
      {
            id: "1315",
            name: "達新",
            symbol: "1315",
            price: 64.9,
            change: -0.04,
            changePercent: 0.35
      },
      {
            id: "1316",
            name: "上曜",
            symbol: "1316",
            price: 12,
            change: 2.3,
            changePercent: 0.47
      },
      {
            id: "1319",
            name: "東陽",
            symbol: "1319",
            price: 78.5,
            change: 1.11,
            changePercent: 1.26
      },
      {
            id: "1321",
            name: "大洋",
            symbol: "1321",
            price: 32.7,
            change: 0.81,
            changePercent: 0.61
      },
      {
            id: "1323",
            name: "永裕",
            symbol: "1323",
            price: 21,
            change: 0.35,
            changePercent: 1.58
      },
      {
            id: "1324",
            name: "地球",
            symbol: "1324",
            price: 11.25,
            change: -1.25,
            changePercent: -1.32
      },
      {
            id: "1325",
            name: "恆大",
            symbol: "1325",
            price: 27.05,
            change: 1.26,
            changePercent: -1.28
      },
      {
            id: "1326",
            name: "台化",
            symbol: "1326",
            price: 51,
            change: -2.29,
            changePercent: -0.99
      },
      {
            id: "1337",
            name: "再生-KY",
            symbol: "1337",
            price: 5.52,
            change: 1.61,
            changePercent: 2.48
      },
      {
            id: "1338",
            name: "廣華-KY",
            symbol: "1338",
            price: 16.05,
            change: 1.36,
            changePercent: 1.33
      },
      {
            id: "1339",
            name: "昭輝",
            symbol: "1339",
            price: 41,
            change: -2.15,
            changePercent: 1.16
      },
      {
            id: "1340",
            name: "勝悅-KY",
            symbol: "1340",
            price: 6.41,
            change: 0.21,
            changePercent: -1.91
      },
      {
            id: "1341",
            name: "富林-KY",
            symbol: "1341",
            price: 60.3,
            change: -2.13,
            changePercent: -0.1
      },
      {
            id: "1342",
            name: "八貫",
            symbol: "1342",
            price: 91.1,
            change: -1.44,
            changePercent: 0.93
      },
      {
            id: "1402",
            name: "遠東新",
            symbol: "1402",
            price: 26.3,
            change: 1.06,
            changePercent: -1
      },
      {
            id: "1409",
            name: "新纖",
            symbol: "1409",
            price: 16.7,
            change: 0.66,
            changePercent: 1.78
      },
      {
            id: "1410",
            name: "南染",
            symbol: "1410",
            price: 30.8,
            change: 0.28,
            changePercent: 0.28
      },
      {
            id: "1413",
            name: "宏洲",
            symbol: "1413",
            price: 9.85,
            change: 0.58,
            changePercent: -1.13
      },
      {
            id: "1414",
            name: "東和",
            symbol: "1414",
            price: 16.55,
            change: -1.26,
            changePercent: 1.91
      },
      {
            id: "1416",
            name: "廣豐",
            symbol: "1416",
            price: 11.7,
            change: 1.13,
            changePercent: -1.07
      },
      {
            id: "1417",
            name: "嘉裕",
            symbol: "1417",
            price: 8.96,
            change: -1.28,
            changePercent: 2.39
      },
      {
            id: "1418",
            name: "東華",
            symbol: "1418",
            price: 18.75,
            change: 2.42,
            changePercent: -1.02
      },
      {
            id: "1419",
            name: "新紡",
            symbol: "1419",
            price: 64,
            change: 0.79,
            changePercent: -1.95
      },
      {
            id: "1423",
            name: "利華",
            symbol: "1423",
            price: 40.4,
            change: -1.1,
            changePercent: -0.64
      },
      {
            id: "1432",
            name: "大魯閣",
            symbol: "1432",
            price: 16.95,
            change: -0.94,
            changePercent: -2.02
      },
      {
            id: "1434",
            name: "福懋",
            symbol: "1434",
            price: 16.8,
            change: 1.96,
            changePercent: 1.84
      },
      {
            id: "1435",
            name: "中福",
            symbol: "1435",
            price: 14.1,
            change: -2.26,
            changePercent: -0.61
      },
      {
            id: "1436",
            name: "華友聯",
            symbol: "1436",
            price: 52.8,
            change: 0.68,
            changePercent: -1.98
      },
      {
            id: "1437",
            name: "勤益控",
            symbol: "1437",
            price: 30.5,
            change: -2.15,
            changePercent: -2.45
      },
      {
            id: "1438",
            name: "三地開發",
            symbol: "1438",
            price: 28.45,
            change: -0.07,
            changePercent: -1.28
      },
      {
            id: "1439",
            name: "雋揚",
            symbol: "1439",
            price: 27.55,
            change: -1.9,
            changePercent: 2.02
      },
      {
            id: "1440",
            name: "南紡",
            symbol: "1440",
            price: 13.2,
            change: 0.23,
            changePercent: 1.08
      },
      {
            id: "1441",
            name: "大東",
            symbol: "1441",
            price: 9.8,
            change: -0.29,
            changePercent: 0.05
      },
      {
            id: "1442",
            name: "名軒",
            symbol: "1442",
            price: 29,
            change: 1.46,
            changePercent: 0.92
      },
      {
            id: "1443",
            name: "立益物流",
            symbol: "1443",
            price: 24,
            change: 1.9,
            changePercent: 1.33
      },
      {
            id: "1444",
            name: "力麗",
            symbol: "1444",
            price: 6.59,
            change: 0.78,
            changePercent: -0.43
      },
      {
            id: "1445",
            name: "大宇",
            symbol: "1445",
            price: 13.1,
            change: -1.54,
            changePercent: 2.43
      },
      {
            id: "1446",
            name: "宏和",
            symbol: "1446",
            price: 16.55,
            change: -1.76,
            changePercent: -0.06
      },
      {
            id: "1447",
            name: "力鵬",
            symbol: "1447",
            price: 5.28,
            change: 1,
            changePercent: 2.44
      },
      {
            id: "1449",
            name: "佳和",
            symbol: "1449",
            price: 14.4,
            change: 1.11,
            changePercent: -1.82
      },
      {
            id: "1451",
            name: "年興",
            symbol: "1451",
            price: 17.3,
            change: 1.53,
            changePercent: 0.95
      },
      {
            id: "1452",
            name: "宏益",
            symbol: "1452",
            price: 12,
            change: -2.4,
            changePercent: -2.03
      },
      {
            id: "1453",
            name: "大將",
            symbol: "1453",
            price: 12.15,
            change: 0.01,
            changePercent: -1.77
      },
      {
            id: "1454",
            name: "台富",
            symbol: "1454",
            price: 13.3,
            change: -1.76,
            changePercent: -0.65
      },
      {
            id: "1455",
            name: "集盛",
            symbol: "1455",
            price: 9.02,
            change: 0.89,
            changePercent: 2.02
      },
      {
            id: "1456",
            name: "怡華",
            symbol: "1456",
            price: 14.45,
            change: 1.49,
            changePercent: 0.34
      },
      {
            id: "1457",
            name: "宜進",
            symbol: "1457",
            price: 15,
            change: -1.79,
            changePercent: 1.59
      },
      {
            id: "1459",
            name: "聯發",
            symbol: "1459",
            price: 11.7,
            change: -0.43,
            changePercent: -0.14
      },
      {
            id: "1460",
            name: "宏遠",
            symbol: "1460",
            price: 6.91,
            change: -1.27,
            changePercent: 1.47
      },
      {
            id: "1463",
            name: "強盛新",
            symbol: "1463",
            price: 18,
            change: -2.34,
            changePercent: -1.67
      },
      {
            id: "1464",
            name: "得力",
            symbol: "1464",
            price: 10.55,
            change: 0.46,
            changePercent: 1.22
      },
      {
            id: "1465",
            name: "偉全",
            symbol: "1465",
            price: 12.7,
            change: -0.59,
            changePercent: 0.03
      },
      {
            id: "1466",
            name: "聚隆",
            symbol: "1466",
            price: 16.8,
            change: 0.81,
            changePercent: 1.82
      },
      {
            id: "1467",
            name: "南緯",
            symbol: "1467",
            price: 7,
            change: -2.05,
            changePercent: -2.14
      },
      {
            id: "1468",
            name: "昶和",
            symbol: "1468",
            price: 12.1,
            change: 0.55,
            changePercent: 1.4
      },
      {
            id: "1470",
            name: "大統新創",
            symbol: "1470",
            price: 23,
            change: -0.37,
            changePercent: -1.32
      },
      {
            id: "1471",
            name: "首利",
            symbol: "1471",
            price: 12,
            change: -0.24,
            changePercent: -2.35
      },
      {
            id: "1472",
            name: "三洋實業",
            symbol: "1472",
            price: 95.4,
            change: -0.83,
            changePercent: 1.31
      },
      {
            id: "1473",
            name: "台南",
            symbol: "1473",
            price: 23.2,
            change: 1.92,
            changePercent: 1.05
      },
      {
            id: "1474",
            name: "弘裕",
            symbol: "1474",
            price: 10.55,
            change: -0.77,
            changePercent: -1.08
      },
      {
            id: "1475",
            name: "業旺",
            symbol: "1475",
            price: 28.35,
            change: 0.57,
            changePercent: -1.75
      },
      {
            id: "1476",
            name: "儒鴻",
            symbol: "1476",
            price: 349.5,
            change: 1.71,
            changePercent: -0.95
      },
      {
            id: "1477",
            name: "聚陽",
            symbol: "1477",
            price: 215,
            change: -0.43,
            changePercent: 0.04
      },
      {
            id: "1503",
            name: "士電",
            symbol: "1503",
            price: 197.5,
            change: 1.44,
            changePercent: -1.96
      },
      {
            id: "1504",
            name: "東元",
            symbol: "1504",
            price: 62.9,
            change: -2.22,
            changePercent: 0.11
      },
      {
            id: "1506",
            name: "正道",
            symbol: "1506",
            price: 11.15,
            change: -1.01,
            changePercent: -0.28
      },
      {
            id: "1512",
            name: "瑞利",
            symbol: "1512",
            price: 7.45,
            change: 0.14,
            changePercent: -0.25
      },
      {
            id: "1513",
            name: "中興電",
            symbol: "1513",
            price: 153,
            change: -1.45,
            changePercent: 1.41
      },
      {
            id: "1514",
            name: "亞力",
            symbol: "1514",
            price: 114,
            change: 2.05,
            changePercent: -0.67
      },
      {
            id: "1515",
            name: "力山",
            symbol: "1515",
            price: 23.15,
            change: -2.1,
            changePercent: -1.52
      },
      {
            id: "1516",
            name: "川飛",
            symbol: "1516",
            price: 19.7,
            change: 1.4,
            changePercent: 1.47
      },
      {
            id: "1517",
            name: "利奇",
            symbol: "1517",
            price: 11.2,
            change: 1.5,
            changePercent: 1.69
      },
      {
            id: "1519",
            name: "華城",
            symbol: "1519",
            price: 872,
            change: 0.59,
            changePercent: -0.15
      },
      {
            id: "1521",
            name: "大億",
            symbol: "1521",
            price: 25.35,
            change: 0.73,
            changePercent: -0.36
      },
      {
            id: "1522",
            name: "堤維西",
            symbol: "1522",
            price: 32.8,
            change: -0.19,
            changePercent: -0.04
      },
      {
            id: "1524",
            name: "耿鼎",
            symbol: "1524",
            price: 29.55,
            change: 1.91,
            changePercent: 0.19
      },
      {
            id: "1525",
            name: "江申",
            symbol: "1525",
            price: 60.8,
            change: 0.19,
            changePercent: -2.46
      },
      {
            id: "1526",
            name: "日馳",
            symbol: "1526",
            price: 16.75,
            change: -1,
            changePercent: 0.95
      },
      {
            id: "1527",
            name: "鑽全",
            symbol: "1527",
            price: 33,
            change: 0.06,
            changePercent: 1.32
      },
      {
            id: "1528",
            name: "恩德",
            symbol: "1528",
            price: 29.2,
            change: -0.46,
            changePercent: -1.44
      },
      {
            id: "1529",
            name: "樂事綠能",
            symbol: "1529",
            price: 24.15,
            change: 0.67,
            changePercent: -1.97
      },
      {
            id: "1530",
            name: "亞崴",
            symbol: "1530",
            price: 28.35,
            change: 0,
            changePercent: -1.09
      },
      {
            id: "1531",
            name: "高林股",
            symbol: "1531",
            price: 13.1,
            change: 1.51,
            changePercent: -1.44
      },
      {
            id: "1532",
            name: "勤美",
            symbol: "1532",
            price: 21.8,
            change: -1.01,
            changePercent: -1.67
      },
      {
            id: "1533",
            name: "車王電",
            symbol: "1533",
            price: 31.25,
            change: 0.59,
            changePercent: -1.27
      },
      {
            id: "1535",
            name: "中宇",
            symbol: "1535",
            price: 52.2,
            change: 1.92,
            changePercent: -0.19
      },
      {
            id: "1536",
            name: "和大",
            symbol: "1536",
            price: 51.3,
            change: 2.13,
            changePercent: -1.69
      },
      {
            id: "1537",
            name: "廣隆",
            symbol: "1537",
            price: 125,
            change: -0.49,
            changePercent: 1.56
      },
      {
            id: "1538",
            name: "正峰",
            symbol: "1538",
            price: 12.8,
            change: 2.03,
            changePercent: -0.73
      },
      {
            id: "1539",
            name: "巨庭",
            symbol: "1539",
            price: 16.45,
            change: -1.94,
            changePercent: -0.09
      },
      {
            id: "1540",
            name: "喬福",
            symbol: "1540",
            price: 22,
            change: 2.24,
            changePercent: -1
      },
      {
            id: "1541",
            name: "錩泰",
            symbol: "1541",
            price: 25.2,
            change: 1.28,
            changePercent: 0.81
      },
      {
            id: "1558",
            name: "伸興",
            symbol: "1558",
            price: 93.7,
            change: 2.42,
            changePercent: 0.05
      },
      {
            id: "1560",
            name: "中砂",
            symbol: "1560",
            price: 533,
            change: 0.86,
            changePercent: 1.06
      },
      {
            id: "1563",
            name: "巧新",
            symbol: "1563",
            price: 42.8,
            change: 1.52,
            changePercent: -0.95
      },
      {
            id: "1568",
            name: "倉佑",
            symbol: "1568",
            price: 25.35,
            change: 1.54,
            changePercent: 2.08
      },
      {
            id: "1582",
            name: "信錦",
            symbol: "1582",
            price: 99.2,
            change: -0.27,
            changePercent: -1.06
      },
      {
            id: "1583",
            name: "程泰",
            symbol: "1583",
            price: 48.2,
            change: 2.1,
            changePercent: -2.14
      },
      {
            id: "1587",
            name: "吉茂",
            symbol: "1587",
            price: 34.4,
            change: -2.11,
            changePercent: 1.42
      },
      {
            id: "1590",
            name: "亞德客-KY",
            symbol: "1590",
            price: 1255,
            change: 0.78,
            changePercent: -0.69
      },
      {
            id: "1597",
            name: "直得",
            symbol: "1597",
            price: 117.5,
            change: -1.71,
            changePercent: -2.13
      },
      {
            id: "1598",
            name: "岱宇",
            symbol: "1598",
            price: 20.65,
            change: -1.23,
            changePercent: 1.03
      },
      {
            id: "1603",
            name: "華電",
            symbol: "1603",
            price: 32.8,
            change: 1.99,
            changePercent: 2.32
      },
      {
            id: "1604",
            name: "聲寶",
            symbol: "1604",
            price: 23.8,
            change: -0.06,
            changePercent: 0.99
      },
      {
            id: "1605",
            name: "華新",
            symbol: "1605",
            price: 32.3,
            change: -2.31,
            changePercent: -0.2
      },
      {
            id: "1608",
            name: "華榮",
            symbol: "1608",
            price: 33.15,
            change: -0.56,
            changePercent: 0.83
      },
      {
            id: "1609",
            name: "大亞",
            symbol: "1609",
            price: 34.55,
            change: -2.09,
            changePercent: 1.23
      },
      {
            id: "1611",
            name: "中電",
            symbol: "1611",
            price: 12.2,
            change: -0.26,
            changePercent: 0.59
      },
      {
            id: "1612",
            name: "宏泰",
            symbol: "1612",
            price: 35.65,
            change: 1.66,
            changePercent: 2.28
      },
      {
            id: "1614",
            name: "三洋電",
            symbol: "1614",
            price: 32.3,
            change: -0.7,
            changePercent: -0.91
      },
      {
            id: "1615",
            name: "大山",
            symbol: "1615",
            price: 47.55,
            change: -1.59,
            changePercent: 1.64
      },
      {
            id: "1616",
            name: "億泰",
            symbol: "1616",
            price: 23.65,
            change: 1.6,
            changePercent: 2.3
      },
      {
            id: "1617",
            name: "榮星",
            symbol: "1617",
            price: 15.75,
            change: 0.28,
            changePercent: -1.58
      },
      {
            id: "1618",
            name: "合機",
            symbol: "1618",
            price: 39.05,
            change: 1,
            changePercent: 1.47
      },
      {
            id: "1623",
            name: "大東電",
            symbol: "1623",
            price: 209.5,
            change: 1.77,
            changePercent: 2.42
      },
      {
            id: "1626",
            name: "艾美特-KY",
            symbol: "1626",
            price: 12,
            change: -2.22,
            changePercent: 2.36
      },
      {
            id: "1702",
            name: "南僑",
            symbol: "1702",
            price: 36.7,
            change: -0.93,
            changePercent: -0.2
      },
      {
            id: "1707",
            name: "葡萄王",
            symbol: "1707",
            price: 118.5,
            change: 0.35,
            changePercent: 2.45
      },
      {
            id: "1708",
            name: "東鹼",
            symbol: "1708",
            price: 39.35,
            change: 2.24,
            changePercent: 0.76
      },
      {
            id: "1709",
            name: "和益",
            symbol: "1709",
            price: 18.95,
            change: -1.45,
            changePercent: 0.98
      },
      {
            id: "1710",
            name: "東聯",
            symbol: "1710",
            price: 13.5,
            change: -0.6,
            changePercent: 1.09
      },
      {
            id: "1711",
            name: "永光",
            symbol: "1711",
            price: 47.95,
            change: -0.91,
            changePercent: -1.63
      },
      {
            id: "1712",
            name: "興農",
            symbol: "1712",
            price: 42.65,
            change: 0.89,
            changePercent: 2.48
      },
      {
            id: "1713",
            name: "國化",
            symbol: "1713",
            price: 48.25,
            change: -2.41,
            changePercent: 2.04
      },
      {
            id: "1714",
            name: "和桐",
            symbol: "1714",
            price: 9.63,
            change: -0.62,
            changePercent: 1.63
      },
      {
            id: "1717",
            name: "長興",
            symbol: "1717",
            price: 81,
            change: -1.6,
            changePercent: -2.05
      },
      {
            id: "1718",
            name: "中纖",
            symbol: "1718",
            price: 6.89,
            change: -0.85,
            changePercent: -0.3
      },
      {
            id: "1720",
            name: "生達",
            symbol: "1720",
            price: 63,
            change: -1.39,
            changePercent: 1.69
      },
      {
            id: "1721",
            name: "三晃",
            symbol: "1721",
            price: 20.5,
            change: 1.62,
            changePercent: 1.08
      },
      {
            id: "1722",
            name: "台肥",
            symbol: "1722",
            price: 45.65,
            change: 2.39,
            changePercent: -0.04
      },
      {
            id: "1723",
            name: "中碳",
            symbol: "1723",
            price: 81.2,
            change: 1.27,
            changePercent: 2.08
      },
      {
            id: "1725",
            name: "元禎",
            symbol: "1725",
            price: 31,
            change: -1.18,
            changePercent: -1.13
      },
      {
            id: "1726",
            name: "永記",
            symbol: "1726",
            price: 76.5,
            change: -0.12,
            changePercent: -1.54
      },
      {
            id: "1727",
            name: "中華化",
            symbol: "1727",
            price: 56.3,
            change: -1.85,
            changePercent: 2.12
      },
      {
            id: "1730",
            name: "花仙子",
            symbol: "1730",
            price: 52.8,
            change: 1.24,
            changePercent: -2.25
      },
      {
            id: "1731",
            name: "美吾華",
            symbol: "1731",
            price: 21.85,
            change: -2.4,
            changePercent: -2.08
      },
      {
            id: "1732",
            name: "毛寶",
            symbol: "1732",
            price: 26.1,
            change: 0.67,
            changePercent: 1.15
      },
      {
            id: "1733",
            name: "五鼎",
            symbol: "1733",
            price: 29.6,
            change: 2.02,
            changePercent: -0.97
      },
      {
            id: "1734",
            name: "杏輝",
            symbol: "1734",
            price: 32.15,
            change: -0.63,
            changePercent: -2.19
      },
      {
            id: "1735",
            name: "日勝化",
            symbol: "1735",
            price: 29.3,
            change: -1.04,
            changePercent: -2.41
      },
      {
            id: "1736",
            name: "喬山",
            symbol: "1736",
            price: 118.5,
            change: -2.5,
            changePercent: 1.21
      },
      {
            id: "1737",
            name: "臺鹽",
            symbol: "1737",
            price: 32.2,
            change: 1.81,
            changePercent: 1.51
      },
      {
            id: "1752",
            name: "南光",
            symbol: "1752",
            price: 35.55,
            change: 0.45,
            changePercent: 2.43
      },
      {
            id: "1760",
            name: "寶齡富錦",
            symbol: "1760",
            price: 64.5,
            change: -0.5,
            changePercent: -0.59
      },
      {
            id: "1762",
            name: "中化生",
            symbol: "1762",
            price: 29.35,
            change: 0.76,
            changePercent: -2.01
      },
      {
            id: "1773",
            name: "勝一",
            symbol: "1773",
            price: 157.5,
            change: 0.9,
            changePercent: 1.67
      },
      {
            id: "1776",
            name: "展宇",
            symbol: "1776",
            price: 16.15,
            change: 2.37,
            changePercent: -1.81
      },
      {
            id: "1783",
            name: "和康生",
            symbol: "1783",
            price: 41.75,
            change: 0.76,
            changePercent: -1.43
      },
      {
            id: "1786",
            name: "科妍",
            symbol: "1786",
            price: 63.4,
            change: 1.98,
            changePercent: 1.41
      },
      {
            id: "1789",
            name: "神隆",
            symbol: "1789",
            price: 21.9,
            change: 2.02,
            changePercent: 1.89
      },
      {
            id: "1795",
            name: "美時",
            symbol: "1795",
            price: 234.5,
            change: -2.3,
            changePercent: -0.9
      },
      {
            id: "1802",
            name: "台玻",
            symbol: "1802",
            price: 74.2,
            change: -2.21,
            changePercent: 0.45
      },
      {
            id: "1805",
            name: "寶徠",
            symbol: "1805",
            price: 11,
            change: -0.75,
            changePercent: -0.85
      },
      {
            id: "1806",
            name: "冠軍",
            symbol: "1806",
            price: 8.36,
            change: -0.58,
            changePercent: 1
      },
      {
            id: "1808",
            name: "潤隆",
            symbol: "1808",
            price: 30.05,
            change: -0.81,
            changePercent: 0.38
      },
      {
            id: "1809",
            name: "中釉",
            symbol: "1809",
            price: 27.2,
            change: 0.11,
            changePercent: 1.99
      },
      {
            id: "1810",
            name: "和成",
            symbol: "1810",
            price: 18.5,
            change: 0.17,
            changePercent: 0.45
      },
      {
            id: "1817",
            name: "凱撒衛",
            symbol: "1817",
            price: 38.7,
            change: -0.44,
            changePercent: 0.13
      },
      {
            id: "1903",
            name: "士紙",
            symbol: "1903",
            price: 49.3,
            change: 1.41,
            changePercent: 0.29
      },
      {
            id: "1904",
            name: "正隆",
            symbol: "1904",
            price: 18.6,
            change: 2.07,
            changePercent: 0.4
      },
      {
            id: "1905",
            name: "華紙",
            symbol: "1905",
            price: 14.1,
            change: 1.11,
            changePercent: 1.5
      },
      {
            id: "1906",
            name: "寶隆",
            symbol: "1906",
            price: 11.9,
            change: -1.29,
            changePercent: -0.97
      },
      {
            id: "1907",
            name: "永豐餘",
            symbol: "1907",
            price: 25.55,
            change: 0.13,
            changePercent: 2.24
      },
      {
            id: "1909",
            name: "榮成",
            symbol: "1909",
            price: 9.61,
            change: 0.34,
            changePercent: 2.22
      },
      {
            id: "2002",
            name: "中鋼",
            symbol: "2002",
            price: 20.1,
            change: -0.36,
            changePercent: 0.43
      },
      {
            id: "2006",
            name: "東和鋼鐵",
            symbol: "2006",
            price: 71.8,
            change: 0.79,
            changePercent: -1.86
      },
      {
            id: "2007",
            name: "燁興",
            symbol: "2007",
            price: 8,
            change: -1.07,
            changePercent: 1.04
      },
      {
            id: "2008",
            name: "高興昌",
            symbol: "2008",
            price: 27.4,
            change: 1.65,
            changePercent: -0.89
      },
      {
            id: "2009",
            name: "第一銅",
            symbol: "2009",
            price: 40.5,
            change: 0.77,
            changePercent: 1.78
      },
      {
            id: "2010",
            name: "春源",
            symbol: "2010",
            price: 24.95,
            change: -1.39,
            changePercent: 2.41
      },
      {
            id: "2012",
            name: "春雨",
            symbol: "2012",
            price: 16,
            change: 1.62,
            changePercent: -1.46
      },
      {
            id: "2013",
            name: "中鋼構",
            symbol: "2013",
            price: 44.05,
            change: 0.24,
            changePercent: -0.9
      },
      {
            id: "2014",
            name: "中鴻",
            symbol: "2014",
            price: 18.65,
            change: 1.31,
            changePercent: 1.89
      },
      {
            id: "2015",
            name: "豐興",
            symbol: "2015",
            price: 62.9,
            change: -0.61,
            changePercent: -0.57
      },
      {
            id: "2017",
            name: "官田鋼",
            symbol: "2017",
            price: 9.33,
            change: 0.72,
            changePercent: 1.66
      },
      {
            id: "2020",
            name: "美亞",
            symbol: "2020",
            price: 23.15,
            change: 0.88,
            changePercent: 1.32
      },
      {
            id: "2022",
            name: "聚亨",
            symbol: "2022",
            price: 8.83,
            change: -2.43,
            changePercent: -1.03
      },
      {
            id: "2023",
            name: "燁輝",
            symbol: "2023",
            price: 14,
            change: 2.32,
            changePercent: -0.06
      },
      {
            id: "2024",
            name: "志聯",
            symbol: "2024",
            price: 14.95,
            change: -0.61,
            changePercent: -2.1
      },
      {
            id: "2025",
            name: "千興",
            symbol: "2025",
            price: 12.25,
            change: -2,
            changePercent: 1.29
      },
      {
            id: "2027",
            name: "大成鋼",
            symbol: "2027",
            price: 37.6,
            change: 1.8,
            changePercent: -0.34
      },
      {
            id: "2028",
            name: "威致",
            symbol: "2028",
            price: 19.15,
            change: 0.32,
            changePercent: 0.24
      },
      {
            id: "2029",
            name: "盛餘",
            symbol: "2029",
            price: 20.6,
            change: 0.07,
            changePercent: 0.99
      },
      {
            id: "2030",
            name: "彰源",
            symbol: "2030",
            price: 16.5,
            change: -2.1,
            changePercent: 2.1
      },
      {
            id: "2031",
            name: "新光鋼",
            symbol: "2031",
            price: 41,
            change: -0.08,
            changePercent: -0.29
      },
      {
            id: "2032",
            name: "新鋼",
            symbol: "2032",
            price: 16.35,
            change: -0.5,
            changePercent: -1.23
      },
      {
            id: "2033",
            name: "佳大",
            symbol: "2033",
            price: 16.65,
            change: 1.98,
            changePercent: 0.07
      },
      {
            id: "2034",
            name: "允強",
            symbol: "2034",
            price: 21,
            change: 2.43,
            changePercent: 1.97
      },
      {
            id: "2038",
            name: "海光",
            symbol: "2038",
            price: 15.2,
            change: -2,
            changePercent: 0.96
      },
      {
            id: "2049",
            name: "上銀",
            symbol: "2049",
            price: 291,
            change: -0.48,
            changePercent: -0.03
      },
      {
            id: "2059",
            name: "川湖",
            symbol: "2059",
            price: 3640,
            change: 0.53,
            changePercent: 2.4
      },
      {
            id: "2062",
            name: "橋椿",
            symbol: "2062",
            price: 22,
            change: 0.48,
            changePercent: -0.76
      },
      {
            id: "2069",
            name: "運錩",
            symbol: "2069",
            price: 18.5,
            change: -0.08,
            changePercent: -1.48
      },
      {
            id: "2072",
            name: "世紀風電",
            symbol: "2072",
            price: 181,
            change: -1.44,
            changePercent: 0.33
      },
      {
            id: "2101",
            name: "南港",
            symbol: "2101",
            price: 35.65,
            change: 1.48,
            changePercent: -1.79
      },
      {
            id: "2102",
            name: "泰豐",
            symbol: "2102",
            price: 18.9,
            change: -0.3,
            changePercent: -0.94
      },
      {
            id: "2103",
            name: "台橡",
            symbol: "2103",
            price: 19.05,
            change: -0.58,
            changePercent: -1.74
      },
      {
            id: "2104",
            name: "國際中橡",
            symbol: "2104",
            price: 11.45,
            change: 0.64,
            changePercent: -1.05
      },
      {
            id: "2105",
            name: "正新",
            symbol: "2105",
            price: 32.65,
            change: -0.04,
            changePercent: -1.78
      },
      {
            id: "2106",
            name: "建大",
            symbol: "2106",
            price: 18.6,
            change: -1.19,
            changePercent: 0.44
      },
      {
            id: "2107",
            name: "厚生",
            symbol: "2107",
            price: 26.05,
            change: -2.46,
            changePercent: 0.59
      },
      {
            id: "2108",
            name: "南帝",
            symbol: "2108",
            price: 26.05,
            change: 2.41,
            changePercent: 1.19
      },
      {
            id: "2109",
            name: "華豐",
            symbol: "2109",
            price: 14.7,
            change: 1.86,
            changePercent: 1.3
      },
      {
            id: "2114",
            name: "鑫永銓",
            symbol: "2114",
            price: 88.9,
            change: -0.18,
            changePercent: -2.19
      },
      {
            id: "2115",
            name: "六暉-KY",
            symbol: "2115",
            price: 21.7,
            change: 0.61,
            changePercent: 0.09
      },
      {
            id: "2201",
            name: "裕隆",
            symbol: "2201",
            price: 26.75,
            change: 1.22,
            changePercent: 1.13
      },
      {
            id: "2204",
            name: "中華",
            symbol: "2204",
            price: 54.5,
            change: -0.96,
            changePercent: 2.16
      },
      {
            id: "2206",
            name: "三陽工業",
            symbol: "2206",
            price: 58.6,
            change: 0.32,
            changePercent: -0.06
      },
      {
            id: "2207",
            name: "和泰車",
            symbol: "2207",
            price: 515,
            change: -0.78,
            changePercent: 1.81
      },
      {
            id: "2208",
            name: "台船",
            symbol: "2208",
            price: 21.1,
            change: -1.74,
            changePercent: -2.4
      },
      {
            id: "2211",
            name: "長榮鋼",
            symbol: "2211",
            price: 100,
            change: -0.33,
            changePercent: 0.54
      },
      {
            id: "2227",
            name: "裕日車",
            symbol: "2227",
            price: 55.5,
            change: 2.07,
            changePercent: 0.11
      },
      {
            id: "2228",
            name: "劍麟",
            symbol: "2228",
            price: 90.5,
            change: -2.12,
            changePercent: 1.53
      },
      {
            id: "2231",
            name: "為升",
            symbol: "2231",
            price: 126.5,
            change: -1.58,
            changePercent: -2.03
      },
      {
            id: "2233",
            name: "宇隆",
            symbol: "2233",
            price: 231.5,
            change: -0.48,
            changePercent: 0.91
      },
      {
            id: "2236",
            name: "百達-KY",
            symbol: "2236",
            price: 126.5,
            change: 1.39,
            changePercent: 0.05
      },
      {
            id: "2239",
            name: "英利-KY",
            symbol: "2239",
            price: 24,
            change: 1.34,
            changePercent: -0.41
      },
      {
            id: "2241",
            name: "艾姆勒",
            symbol: "2241",
            price: 28.45,
            change: 1.04,
            changePercent: -1.43
      },
      {
            id: "2243",
            name: "宏旭-KY",
            symbol: "2243",
            price: 23.6,
            change: -0.57,
            changePercent: 0.76
      },
      {
            id: "2247",
            name: "汎德永業",
            symbol: "2247",
            price: 234.5,
            change: -1.82,
            changePercent: 0.8
      },
      {
            id: "2248",
            name: "華勝-KY",
            symbol: "2248",
            price: 54.3,
            change: -2.06,
            changePercent: 2.14
      },
      {
            id: "2250",
            name: "IKKA-KY",
            symbol: "2250",
            price: 64,
            change: 0.62,
            changePercent: -1.23
      },
      {
            id: "2254",
            name: "巨鎧精密-創",
            symbol: "2254",
            price: 70.5,
            change: 0.88,
            changePercent: 2.13
      },
      {
            id: "2258",
            name: "鴻華先進-創",
            symbol: "2258",
            price: 28.3,
            change: 1.52,
            changePercent: 1.72
      },
      {
            id: "2301",
            name: "光寶科",
            symbol: "2301",
            price: 162,
            change: 0.35,
            changePercent: 1.23
      },
      {
            id: "2302",
            name: "麗正",
            symbol: "2302",
            price: 19.4,
            change: -1.58,
            changePercent: -1.05
      },
      {
            id: "2303",
            name: "聯電",
            symbol: "2303",
            price: 73,
            change: 0.77,
            changePercent: -1.68
      },
      {
            id: "2305",
            name: "全友",
            symbol: "2305",
            price: 17.7,
            change: -1.81,
            changePercent: -1.45
      },
      {
            id: "2308",
            name: "台達電",
            symbol: "2308",
            price: 1840,
            change: 1.47,
            changePercent: 1.85
      },
      {
            id: "2312",
            name: "金寶",
            symbol: "2312",
            price: 24.55,
            change: -2,
            changePercent: -0.8
      },
      {
            id: "2313",
            name: "華通",
            symbol: "2313",
            price: 261.5,
            change: 2.37,
            changePercent: 2.44
      },
      {
            id: "2314",
            name: "台揚",
            symbol: "2314",
            price: 15.45,
            change: 2.49,
            changePercent: 0.78
      },
      {
            id: "2316",
            name: "楠梓電",
            symbol: "2316",
            price: 114.5,
            change: -0.4,
            changePercent: 1.65
      },
      {
            id: "2317",
            name: "鴻海",
            symbol: "2317",
            price: 206,
            change: 0.93,
            changePercent: -1.77
      },
      {
            id: "2321",
            name: "東訊",
            symbol: "2321",
            price: 13.3,
            change: -1.86,
            changePercent: -1.86
      },
      {
            id: "2323",
            name: "中環",
            symbol: "2323",
            price: 10.75,
            change: 1.05,
            changePercent: 1.55
      },
      {
            id: "2324",
            name: "仁寶",
            symbol: "2324",
            price: 30.35,
            change: -1.84,
            changePercent: -0.66
      },
      {
            id: "2327",
            name: "國巨*",
            symbol: "2327",
            price: 316.5,
            change: -2.46,
            changePercent: -0.51
      },
      {
            id: "2328",
            name: "廣宇",
            symbol: "2328",
            price: 45.6,
            change: 1.38,
            changePercent: -0.12
      },
      {
            id: "2329",
            name: "華泰",
            symbol: "2329",
            price: 61.5,
            change: -1.27,
            changePercent: 0.56
      },
      {
            id: "2330",
            name: "台積電",
            symbol: "2330",
            price: 2030,
            change: 1.66,
            changePercent: -2.34
      },
      {
            id: "2331",
            name: "精英",
            symbol: "2331",
            price: 21.8,
            change: 0.93,
            changePercent: -1.93
      },
      {
            id: "2332",
            name: "友訊",
            symbol: "2332",
            price: 15.35,
            change: 1.75,
            changePercent: 1.78
      },
      {
            id: "2337",
            name: "旺宏",
            symbol: "2337",
            price: 131,
            change: -2.2,
            changePercent: 0.98
      },
      {
            id: "2338",
            name: "光罩",
            symbol: "2338",
            price: 50.9,
            change: -0.55,
            changePercent: -2.3
      },
      {
            id: "2340",
            name: "台亞",
            symbol: "2340",
            price: 32.3,
            change: -0.71,
            changePercent: -0.15
      },
      {
            id: "2342",
            name: "茂矽",
            symbol: "2342",
            price: 30.5,
            change: -1.03,
            changePercent: -1.13
      },
      {
            id: "2344",
            name: "華邦電",
            symbol: "2344",
            price: 87.8,
            change: -0.39,
            changePercent: 0.16
      },
      {
            id: "2345",
            name: "智邦",
            symbol: "2345",
            price: 2070,
            change: 0.97,
            changePercent: 2.17
      },
      {
            id: "2347",
            name: "聯強",
            symbol: "2347",
            price: 83.9,
            change: -2.16,
            changePercent: -1.06
      },
      {
            id: "2348",
            name: "海悅",
            symbol: "2348",
            price: 77.5,
            change: -1.16,
            changePercent: 1.18
      },
      {
            id: "2349",
            name: "錸德",
            symbol: "2349",
            price: 13.75,
            change: -1.43,
            changePercent: -0.01
      },
      {
            id: "2351",
            name: "順德",
            symbol: "2351",
            price: 129,
            change: 1.38,
            changePercent: 1.42
      },
      {
            id: "2352",
            name: "佳世達",
            symbol: "2352",
            price: 25.65,
            change: -0.61,
            changePercent: 0.61
      },
      {
            id: "2353",
            name: "宏碁",
            symbol: "2353",
            price: 28.7,
            change: -0.68,
            changePercent: 2.33
      },
      {
            id: "2354",
            name: "鴻準",
            symbol: "2354",
            price: 51.6,
            change: -2.34,
            changePercent: 0.04
      },
      {
            id: "2355",
            name: "敬鵬",
            symbol: "2355",
            price: 52.1,
            change: -1.78,
            changePercent: -2.18
      },
      {
            id: "2356",
            name: "英業達",
            symbol: "2356",
            price: 45.75,
            change: 2,
            changePercent: -0.54
      },
      {
            id: "2357",
            name: "華碩",
            symbol: "2357",
            price: 599,
            change: -0.61,
            changePercent: 1.58
      },
      {
            id: "2359",
            name: "所羅門",
            symbol: "2359",
            price: 115,
            change: -0.88,
            changePercent: 2.46
      },
      {
            id: "2360",
            name: "致茂",
            symbol: "2360",
            price: 2255,
            change: -2.1,
            changePercent: 0.06
      },
      {
            id: "2362",
            name: "藍天",
            symbol: "2362",
            price: 38.35,
            change: -2.45,
            changePercent: -1.38
      },
      {
            id: "2363",
            name: "矽統",
            symbol: "2363",
            price: 54.4,
            change: -0.64,
            changePercent: -0.26
      },
      {
            id: "2364",
            name: "倫飛",
            symbol: "2364",
            price: 64.9,
            change: -1.3,
            changePercent: 1.08
      },
      {
            id: "2365",
            name: "昆盈",
            symbol: "2365",
            price: 34.9,
            change: -1.76,
            changePercent: -2.25
      },
      {
            id: "2367",
            name: "燿華",
            symbol: "2367",
            price: 68.5,
            change: 2.38,
            changePercent: -0.37
      },
      {
            id: "2368",
            name: "金像電",
            symbol: "2368",
            price: 1175,
            change: -1.91,
            changePercent: -2.34
      },
      {
            id: "2369",
            name: "菱生",
            symbol: "2369",
            price: 30.6,
            change: 1.32,
            changePercent: 1.18
      },
      {
            id: "2371",
            name: "大同",
            symbol: "2371",
            price: 33.1,
            change: 1.35,
            changePercent: -0.14
      },
      {
            id: "2373",
            name: "震旦行",
            symbol: "2373",
            price: 58.1,
            change: -1.36,
            changePercent: -1.64
      },
      {
            id: "2374",
            name: "佳能",
            symbol: "2374",
            price: 72.3,
            change: 1.07,
            changePercent: 2.44
      },
      {
            id: "2375",
            name: "凱美",
            symbol: "2375",
            price: 88,
            change: 2.1,
            changePercent: 1.13
      },
      {
            id: "2376",
            name: "技嘉",
            symbol: "2376",
            price: 281.5,
            change: 2.08,
            changePercent: -2.49
      },
      {
            id: "2377",
            name: "微星",
            symbol: "2377",
            price: 91.9,
            change: 1.49,
            changePercent: 1.87
      },
      {
            id: "2379",
            name: "瑞昱",
            symbol: "2379",
            price: 531,
            change: 1.85,
            changePercent: -2.45
      },
      {
            id: "2380",
            name: "虹光",
            symbol: "2380",
            price: 5.3,
            change: -1.58,
            changePercent: 1.66
      },
      {
            id: "2382",
            name: "廣達",
            symbol: "2382",
            price: 323,
            change: -1.96,
            changePercent: 1.43
      },
      {
            id: "2383",
            name: "台光電",
            symbol: "2383",
            price: 3800,
            change: -2.11,
            changePercent: 0.87
      },
      {
            id: "2385",
            name: "群光",
            symbol: "2385",
            price: 125.5,
            change: 0.18,
            changePercent: -1.75
      },
      {
            id: "2387",
            name: "精元",
            symbol: "2387",
            price: 40.35,
            change: 0.44,
            changePercent: -0.66
      },
      {
            id: "2388",
            name: "威盛",
            symbol: "2388",
            price: 65.3,
            change: 0.2,
            changePercent: 2.35
      },
      {
            id: "2390",
            name: "云辰",
            symbol: "2390",
            price: 10.1,
            change: 0.49,
            changePercent: -0.01
      },
      {
            id: "2392",
            name: "正崴",
            symbol: "2392",
            price: 36.6,
            change: 0.83,
            changePercent: -2.05
      },
      {
            id: "2393",
            name: "億光",
            symbol: "2393",
            price: 73.3,
            change: -1.3,
            changePercent: -1.06
      },
      {
            id: "2395",
            name: "研華",
            symbol: "2395",
            price: 366,
            change: -0.72,
            changePercent: -0.38
      },
      {
            id: "2397",
            name: "友通",
            symbol: "2397",
            price: 60.1,
            change: 2.43,
            changePercent: 0.29
      },
      {
            id: "2399",
            name: "映泰",
            symbol: "2399",
            price: 35.25,
            change: -0.32,
            changePercent: 0.2
      },
      {
            id: "2401",
            name: "凌陽",
            symbol: "2401",
            price: 23.65,
            change: -1.02,
            changePercent: -1.16
      },
      {
            id: "2402",
            name: "毅嘉",
            symbol: "2402",
            price: 77.7,
            change: -1.24,
            changePercent: -1.25
      },
      {
            id: "2404",
            name: "漢唐",
            symbol: "2404",
            price: 1025,
            change: -1.79,
            changePercent: 2.3
      },
      {
            id: "2405",
            name: "輔信",
            symbol: "2405",
            price: 15.75,
            change: 0.48,
            changePercent: 0.49
      },
      {
            id: "2406",
            name: "國碩",
            symbol: "2406",
            price: 33.95,
            change: -2.11,
            changePercent: -0.15
      },
      {
            id: "2408",
            name: "南亞科",
            symbol: "2408",
            price: 210,
            change: -0.17,
            changePercent: 0.04
      },
      {
            id: "2409",
            name: "友達",
            symbol: "2409",
            price: 19.85,
            change: 1.24,
            changePercent: 2.03
      },
      {
            id: "2412",
            name: "中華電",
            symbol: "2412",
            price: 137.5,
            change: 1.48,
            changePercent: 1.16
      },
      {
            id: "2413",
            name: "環科",
            symbol: "2413",
            price: 52,
            change: -1.73,
            changePercent: -1.52
      },
      {
            id: "2414",
            name: "精技",
            symbol: "2414",
            price: 45.3,
            change: -0.6,
            changePercent: 2.2
      },
      {
            id: "2415",
            name: "錩新",
            symbol: "2415",
            price: 29.05,
            change: -1.2,
            changePercent: -2.08
      },
      {
            id: "2417",
            name: "圓剛",
            symbol: "2417",
            price: 41.4,
            change: -1.64,
            changePercent: -1.49
      },
      {
            id: "2419",
            name: "仲琦",
            symbol: "2419",
            price: 36.8,
            change: 2.3,
            changePercent: 0.02
      },
      {
            id: "2420",
            name: "新巨",
            symbol: "2420",
            price: 55.1,
            change: -2.01,
            changePercent: -0.57
      },
      {
            id: "2421",
            name: "建準",
            symbol: "2421",
            price: 146.5,
            change: 0.63,
            changePercent: -2.35
      },
      {
            id: "2423",
            name: "固緯",
            symbol: "2423",
            price: 51.4,
            change: 1.17,
            changePercent: 0.16
      },
      {
            id: "2424",
            name: "隴華",
            symbol: "2424",
            price: 22.45,
            change: -0.74,
            changePercent: 2.23
      },
      {
            id: "2425",
            name: "承啟",
            symbol: "2425",
            price: 30.2,
            change: -2.18,
            changePercent: 2.45
      },
      {
            id: "2426",
            name: "鼎元",
            symbol: "2426",
            price: 54.4,
            change: -0.03,
            changePercent: -2.12
      },
      {
            id: "2427",
            name: "三商電",
            symbol: "2427",
            price: 22.25,
            change: 1.34,
            changePercent: 1.47
      },
      {
            id: "2428",
            name: "興勤",
            symbol: "2428",
            price: 182.5,
            change: -2.39,
            changePercent: -1.75
      },
      {
            id: "2429",
            name: "銘旺科",
            symbol: "2429",
            price: 39.85,
            change: -0.9,
            changePercent: 0.55
      },
      {
            id: "2430",
            name: "燦坤",
            symbol: "2430",
            price: 21.75,
            change: -1.72,
            changePercent: 1.25
      },
      {
            id: "2431",
            name: "聯昌",
            symbol: "2431",
            price: 11.5,
            change: 1.55,
            changePercent: 1.4
      },
      {
            id: "2432",
            name: "倚天酷碁-創",
            symbol: "2432",
            price: 28.35,
            change: 1.7,
            changePercent: -0.84
      },
      {
            id: "2433",
            name: "互盛電",
            symbol: "2433",
            price: 46,
            change: 1,
            changePercent: 0.45
      },
      {
            id: "2434",
            name: "統懋",
            symbol: "2434",
            price: 29.55,
            change: -0.71,
            changePercent: 0.44
      },
      {
            id: "2436",
            name: "偉詮電",
            symbol: "2436",
            price: 63.1,
            change: -2.14,
            changePercent: -1.17
      },
      {
            id: "2438",
            name: "翔耀",
            symbol: "2438",
            price: 22.45,
            change: -1.92,
            changePercent: 0.92
      },
      {
            id: "2439",
            name: "美律",
            symbol: "2439",
            price: 90,
            change: -1.96,
            changePercent: -1.82
      },
      {
            id: "2440",
            name: "太空梭",
            symbol: "2440",
            price: 15.15,
            change: -0.23,
            changePercent: -1.06
      },
      {
            id: "2441",
            name: "超豐",
            symbol: "2441",
            price: 88.4,
            change: 0.06,
            changePercent: -1
      },
      {
            id: "2442",
            name: "新美齊",
            symbol: "2442",
            price: 19.45,
            change: 1.35,
            changePercent: 1.72
      },
      {
            id: "2444",
            name: "兆勁",
            symbol: "2444",
            price: 13.9,
            change: 0.24,
            changePercent: -2.43
      },
      {
            id: "2449",
            name: "京元電子",
            symbol: "2449",
            price: 275,
            change: -0.12,
            changePercent: -0.03
      },
      {
            id: "2450",
            name: "神腦",
            symbol: "2450",
            price: 30.25,
            change: -1.93,
            changePercent: -2.45
      },
      {
            id: "2451",
            name: "創見",
            symbol: "2451",
            price: 246.5,
            change: -0.87,
            changePercent: 1.72
      },
      {
            id: "2453",
            name: "凌群",
            symbol: "2453",
            price: 55.5,
            change: 0.08,
            changePercent: 1.15
      },
      {
            id: "2454",
            name: "聯發科",
            symbol: "2454",
            price: 1925,
            change: -2.22,
            changePercent: 0.26
      },
      {
            id: "2455",
            name: "全新",
            symbol: "2455",
            price: 310.5,
            change: 2.48,
            changePercent: 1.23
      },
      {
            id: "2457",
            name: "飛宏",
            symbol: "2457",
            price: 24.75,
            change: -1.12,
            changePercent: 2.08
      },
      {
            id: "2458",
            name: "義隆",
            symbol: "2458",
            price: 138,
            change: -0.26,
            changePercent: 2.31
      },
      {
            id: "2459",
            name: "敦吉",
            symbol: "2459",
            price: 66.2,
            change: 1.18,
            changePercent: -1.7
      },
      {
            id: "2460",
            name: "建通",
            symbol: "2460",
            price: 36.8,
            change: 0.74,
            changePercent: -2.37
      },
      {
            id: "2461",
            name: "光群雷",
            symbol: "2461",
            price: 17.55,
            change: -0.95,
            changePercent: 1.25
      },
      {
            id: "2462",
            name: "良得電",
            symbol: "2462",
            price: 22.75,
            change: -2.22,
            changePercent: 0
      },
      {
            id: "2464",
            name: "盟立",
            symbol: "2464",
            price: 79,
            change: 1.8,
            changePercent: -0.02
      },
      {
            id: "2465",
            name: "麗臺",
            symbol: "2465",
            price: 60.4,
            change: -1.66,
            changePercent: 0.13
      },
      {
            id: "2466",
            name: "冠西電",
            symbol: "2466",
            price: 62.7,
            change: 1.16,
            changePercent: 0.4
      },
      {
            id: "2467",
            name: "志聖",
            symbol: "2467",
            price: 550,
            change: -0.83,
            changePercent: 0.29
      },
      {
            id: "2468",
            name: "華經",
            symbol: "2468",
            price: 34.9,
            change: -0.53,
            changePercent: -2.29
      },
      {
            id: "2471",
            name: "資通",
            symbol: "2471",
            price: 54,
            change: 0.92,
            changePercent: -0.64
      },
      {
            id: "2472",
            name: "立隆電",
            symbol: "2472",
            price: 184.5,
            change: -2.04,
            changePercent: -0.82
      },
      {
            id: "2474",
            name: "可成",
            symbol: "2474",
            price: 217,
            change: 2.24,
            changePercent: 0.19
      },
      {
            id: "2476",
            name: "鉅祥",
            symbol: "2476",
            price: 115,
            change: 2.45,
            changePercent: 1.36
      },
      {
            id: "2477",
            name: "美隆電",
            symbol: "2477",
            price: 24.05,
            change: -0.75,
            changePercent: 1.93
      },
      {
            id: "2478",
            name: "大毅",
            symbol: "2478",
            price: 77.2,
            change: 0.84,
            changePercent: -1.67
      },
      {
            id: "2480",
            name: "敦陽科",
            symbol: "2480",
            price: 140.5,
            change: -2.5,
            changePercent: -0.66
      },
      {
            id: "2481",
            name: "強茂",
            symbol: "2481",
            price: 118,
            change: 0.19,
            changePercent: 0.3
      },
      {
            id: "2482",
            name: "連宇",
            symbol: "2482",
            price: 17.7,
            change: 0.14,
            changePercent: -0.04
      },
      {
            id: "2483",
            name: "百容",
            symbol: "2483",
            price: 22.95,
            change: -1.58,
            changePercent: -1.59
      },
      {
            id: "2484",
            name: "希華",
            symbol: "2484",
            price: 42.4,
            change: -0.05,
            changePercent: -1.99
      },
      {
            id: "2485",
            name: "兆赫",
            symbol: "2485",
            price: 77.7,
            change: 1.27,
            changePercent: 0.43
      },
      {
            id: "2486",
            name: "一詮",
            symbol: "2486",
            price: 185,
            change: 1.61,
            changePercent: 1.47
      },
      {
            id: "2488",
            name: "漢平",
            symbol: "2488",
            price: 50.8,
            change: -0.27,
            changePercent: -0.74
      },
      {
            id: "2489",
            name: "瑞軒",
            symbol: "2489",
            price: 44.65,
            change: -0.86,
            changePercent: -0.84
      },
      {
            id: "2491",
            name: "吉祥全",
            symbol: "2491",
            price: 17,
            change: 0.57,
            changePercent: -1.23
      },
      {
            id: "2492",
            name: "華新科",
            symbol: "2492",
            price: 147,
            change: 1.81,
            changePercent: 1.66
      },
      {
            id: "2493",
            name: "揚博",
            symbol: "2493",
            price: 141,
            change: -0.55,
            changePercent: -1.25
      },
      {
            id: "2495",
            name: "普安",
            symbol: "2495",
            price: 42.85,
            change: -1.12,
            changePercent: -1.76
      },
      {
            id: "2496",
            name: "卓越",
            symbol: "2496",
            price: 65.9,
            change: -0.63,
            changePercent: 1.89
      },
      {
            id: "2497",
            name: "怡利電",
            symbol: "2497",
            price: 56.1,
            change: 0.48,
            changePercent: -1.78
      },
      {
            id: "2498",
            name: "宏達電",
            symbol: "2498",
            price: 41.3,
            change: 1.24,
            changePercent: -0.6
      },
      {
            id: "2501",
            name: "國建",
            symbol: "2501",
            price: 24.45,
            change: -0.04,
            changePercent: 2.29
      },
      {
            id: "2504",
            name: "國產",
            symbol: "2504",
            price: 35.85,
            change: 1.95,
            changePercent: 1.21
      },
      {
            id: "2505",
            name: "國揚",
            symbol: "2505",
            price: 18.8,
            change: -0.33,
            changePercent: 0.54
      },
      {
            id: "2506",
            name: "太設",
            symbol: "2506",
            price: 8.98,
            change: 1.03,
            changePercent: -0.39
      },
      {
            id: "2509",
            name: "全坤建",
            symbol: "2509",
            price: 14.5,
            change: 1.41,
            changePercent: -1.24
      },
      {
            id: "2511",
            name: "太子",
            symbol: "2511",
            price: 8.13,
            change: -1.01,
            changePercent: 1.12
      },
      {
            id: "2514",
            name: "龍邦",
            symbol: "2514",
            price: 13.5,
            change: 0.11,
            changePercent: 0.88
      },
      {
            id: "2515",
            name: "中工",
            symbol: "2515",
            price: 13.85,
            change: -0.08,
            changePercent: -2.16
      },
      {
            id: "2516",
            name: "新建",
            symbol: "2516",
            price: 13.6,
            change: 2.12,
            changePercent: 1.68
      },
      {
            id: "2520",
            name: "冠德",
            symbol: "2520",
            price: 31.05,
            change: -0.18,
            changePercent: 0.71
      },
      {
            id: "2524",
            name: "京城",
            symbol: "2524",
            price: 39.75,
            change: 0.86,
            changePercent: 0.41
      },
      {
            id: "2527",
            name: "宏璟",
            symbol: "2527",
            price: 36.7,
            change: 0.22,
            changePercent: -1.63
      },
      {
            id: "2528",
            name: "皇普",
            symbol: "2528",
            price: 24.05,
            change: 0.17,
            changePercent: -1.48
      },
      {
            id: "2530",
            name: "華建",
            symbol: "2530",
            price: 22.6,
            change: 2.38,
            changePercent: -2.4
      },
      {
            id: "2534",
            name: "宏盛",
            symbol: "2534",
            price: 19.9,
            change: 2.08,
            changePercent: -2.05
      },
      {
            id: "2535",
            name: "達欣工",
            symbol: "2535",
            price: 70.2,
            change: -0.83,
            changePercent: 0.4
      },
      {
            id: "2536",
            name: "宏普",
            symbol: "2536",
            price: 22.35,
            change: -1.32,
            changePercent: -1.24
      },
      {
            id: "2537",
            name: "聯上發",
            symbol: "2537",
            price: 10.35,
            change: 1.11,
            changePercent: 1.86
      },
      {
            id: "2538",
            name: "基泰",
            symbol: "2538",
            price: 10.1,
            change: 2.31,
            changePercent: -1.54
      },
      {
            id: "2539",
            name: "櫻花建",
            symbol: "2539",
            price: 46.7,
            change: 2.45,
            changePercent: 1.67
      },
      {
            id: "2540",
            name: "愛山林",
            symbol: "2540",
            price: 54,
            change: 1.23,
            changePercent: 0.83
      },
      {
            id: "2542",
            name: "興富發",
            symbol: "2542",
            price: 34.95,
            change: 1.59,
            changePercent: 1.42
      },
      {
            id: "2543",
            name: "皇昌",
            symbol: "2543",
            price: 57.6,
            change: -1.5,
            changePercent: 0.77
      },
      {
            id: "2545",
            name: "皇翔",
            symbol: "2545",
            price: 36.5,
            change: -0.96,
            changePercent: 2.25
      },
      {
            id: "2546",
            name: "根基",
            symbol: "2546",
            price: 86.3,
            change: -0.31,
            changePercent: -2.47
      },
      {
            id: "2547",
            name: "日勝生",
            symbol: "2547",
            price: 10.85,
            change: -1.08,
            changePercent: 1.22
      },
      {
            id: "2548",
            name: "華固",
            symbol: "2548",
            price: 130,
            change: -2.47,
            changePercent: 0.56
      },
      {
            id: "2597",
            name: "潤弘",
            symbol: "2597",
            price: 165.5,
            change: 0.92,
            changePercent: 1.55
      },
      {
            id: "2601",
            name: "益航",
            symbol: "2601",
            price: 5.64,
            change: -1.87,
            changePercent: -0.89
      },
      {
            id: "2603",
            name: "長榮",
            symbol: "2603",
            price: 198,
            change: 0.9,
            changePercent: -0.94
      },
      {
            id: "2605",
            name: "新興",
            symbol: "2605",
            price: 35.65,
            change: 0.49,
            changePercent: -1.74
      },
      {
            id: "2606",
            name: "裕民",
            symbol: "2606",
            price: 65,
            change: 0.19,
            changePercent: 1.7
      },
      {
            id: "2607",
            name: "榮運",
            symbol: "2607",
            price: 50.3,
            change: -1,
            changePercent: 2.45
      },
      {
            id: "2608",
            name: "嘉里大榮",
            symbol: "2608",
            price: 30.85,
            change: -0.87,
            changePercent: -2.1
      },
      {
            id: "2609",
            name: "陽明",
            symbol: "2609",
            price: 50.7,
            change: -1.43,
            changePercent: 0.3
      },
      {
            id: "2610",
            name: "華航",
            symbol: "2610",
            price: 18.3,
            change: 0.76,
            changePercent: 1.48
      },
      {
            id: "2611",
            name: "志信",
            symbol: "2611",
            price: 14.7,
            change: -2.14,
            changePercent: -0.89
      },
      {
            id: "2612",
            name: "中航",
            symbol: "2612",
            price: 60,
            change: 0.5,
            changePercent: 0.77
      },
      {
            id: "2613",
            name: "中櫃",
            symbol: "2613",
            price: 23,
            change: 0.02,
            changePercent: -0.13
      },
      {
            id: "2614",
            name: "東森",
            symbol: "2614",
            price: 20.4,
            change: -2.01,
            changePercent: -1.92
      },
      {
            id: "2615",
            name: "萬海",
            symbol: "2615",
            price: 75.3,
            change: -0.64,
            changePercent: -1.21
      },
      {
            id: "2616",
            name: "山隆",
            symbol: "2616",
            price: 15.45,
            change: -2.29,
            changePercent: -1.22
      },
      {
            id: "2617",
            name: "台航",
            symbol: "2617",
            price: 31.05,
            change: -2.34,
            changePercent: 0.98
      },
      {
            id: "2618",
            name: "長榮航",
            symbol: "2618",
            price: 35.3,
            change: 0.68,
            changePercent: 0.5
      },
      {
            id: "2630",
            name: "亞航",
            symbol: "2630",
            price: 49.3,
            change: -1.02,
            changePercent: 1.3
      },
      {
            id: "2633",
            name: "台灣高鐵",
            symbol: "2633",
            price: 27,
            change: 1.81,
            changePercent: 2.11
      },
      {
            id: "2634",
            name: "漢翔",
            symbol: "2634",
            price: 50.4,
            change: -2.32,
            changePercent: 0.33
      },
      {
            id: "2636",
            name: "台驊控股",
            symbol: "2636",
            price: 67.7,
            change: -1.2,
            changePercent: 0.57
      },
      {
            id: "2637",
            name: "慧洋-KY",
            symbol: "2637",
            price: 75.7,
            change: 1.03,
            changePercent: -1.89
      },
      {
            id: "2642",
            name: "宅配通",
            symbol: "2642",
            price: 23,
            change: 0.54,
            changePercent: -0.68
      },
      {
            id: "2645",
            name: "長榮航太",
            symbol: "2645",
            price: 160.5,
            change: -0.25,
            changePercent: 1.98
      },
      {
            id: "2646",
            name: "星宇航空",
            symbol: "2646",
            price: 20.95,
            change: 1.83,
            changePercent: -0.63
      },
      {
            id: "2701",
            name: "萬企",
            symbol: "2701",
            price: 10.95,
            change: 0.03,
            changePercent: 1.7
      },
      {
            id: "2702",
            name: "華園",
            symbol: "2702",
            price: 17.8,
            change: -2.08,
            changePercent: -1.34
      },
      {
            id: "2704",
            name: "國賓",
            symbol: "2704",
            price: 43.35,
            change: 0.47,
            changePercent: 0.74
      },
      {
            id: "2705",
            name: "六福",
            symbol: "2705",
            price: 17.6,
            change: 2.47,
            changePercent: 0.37
      },
      {
            id: "2706",
            name: "第一店",
            symbol: "2706",
            price: 12.7,
            change: -0.53,
            changePercent: 2.13
      },
      {
            id: "2707",
            name: "晶華",
            symbol: "2707",
            price: 180.5,
            change: -1.43,
            changePercent: -0.61
      },
      {
            id: "2712",
            name: "遠雄來",
            symbol: "2712",
            price: 17.4,
            change: -0.98,
            changePercent: 1.61
      },
      {
            id: "2722",
            name: "夏都",
            symbol: "2722",
            price: 24.6,
            change: 0.94,
            changePercent: -1.65
      },
      {
            id: "2723",
            name: "美食-KY",
            symbol: "2723",
            price: 66.6,
            change: 1.26,
            changePercent: -2.26
      },
      {
            id: "2727",
            name: "王品",
            symbol: "2727",
            price: 226,
            change: 1.91,
            changePercent: 0.85
      },
      {
            id: "2731",
            name: "雄獅",
            symbol: "2731",
            price: 159.5,
            change: 0.88,
            changePercent: -1.59
      },
      {
            id: "2739",
            name: "寒舍",
            symbol: "2739",
            price: 36.75,
            change: -1.74,
            changePercent: 1.67
      },
      {
            id: "2748",
            name: "雲品",
            symbol: "2748",
            price: 41.5,
            change: -1.06,
            changePercent: -1.04
      },
      {
            id: "2753",
            name: "八方雲集",
            symbol: "2753",
            price: 181.5,
            change: -2.12,
            changePercent: -0.79
      },
      {
            id: "2762",
            name: "世界健身-KY",
            symbol: "2762",
            price: 73.8,
            change: 1.5,
            changePercent: 0.58
      },
      {
            id: "2801",
            name: "彰銀",
            symbol: "2801",
            price: 21.6,
            change: -1.44,
            changePercent: -2.43
      },
      {
            id: "2812",
            name: "台中銀",
            symbol: "2812",
            price: 20.55,
            change: -0.31,
            changePercent: -0.96
      },
      {
            id: "2816",
            name: "旺旺保",
            symbol: "2816",
            price: 30.85,
            change: 1.95,
            changePercent: -2
      },
      {
            id: "2820",
            name: "華票",
            symbol: "2820",
            price: 17.2,
            change: -1.43,
            changePercent: 2.17
      },
      {
            id: "2832",
            name: "台產",
            symbol: "2832",
            price: 49,
            change: 0.25,
            changePercent: 0.75
      },
      {
            id: "2834",
            name: "臺企銀",
            symbol: "2834",
            price: 16.3,
            change: 1.44,
            changePercent: -0.56
      },
      {
            id: "2836",
            name: "高雄銀",
            symbol: "2836",
            price: 12.2,
            change: -2.14,
            changePercent: -1.92
      },
      {
            id: "2838",
            name: "聯邦銀",
            symbol: "2838",
            price: 20.9,
            change: -0.29,
            changePercent: 1.38
      },
      {
            id: "2845",
            name: "遠東銀",
            symbol: "2845",
            price: 12.65,
            change: -2.01,
            changePercent: 0.64
      },
      {
            id: "2849",
            name: "安泰銀",
            symbol: "2849",
            price: 14.1,
            change: -1.43,
            changePercent: 2.24
      },
      {
            id: "2850",
            name: "新產",
            symbol: "2850",
            price: 125.5,
            change: 1.34,
            changePercent: -0.76
      },
      {
            id: "2851",
            name: "中再保",
            symbol: "2851",
            price: 29.55,
            change: 1.7,
            changePercent: -0.75
      },
      {
            id: "2852",
            name: "第一保",
            symbol: "2852",
            price: 26.15,
            change: -1.7,
            changePercent: -0.27
      },
      {
            id: "2855",
            name: "統一證",
            symbol: "2855",
            price: 32.45,
            change: 0.7,
            changePercent: -2.14
      },
      {
            id: "2867",
            name: "三商壽",
            symbol: "2867",
            price: 7.87,
            change: -2.16,
            changePercent: 2.17
      },
      {
            id: "2880",
            name: "華南金",
            symbol: "2880",
            price: 36.15,
            change: 0.17,
            changePercent: -2.32
      },
      {
            id: "2881",
            name: "富邦金",
            symbol: "2881",
            price: 88,
            change: 1.32,
            changePercent: 0.53
      },
      {
            id: "2882",
            name: "國泰金",
            symbol: "2882",
            price: 75,
            change: -0.89,
            changePercent: -1.82
      },
      {
            id: "2883",
            name: "凱基金",
            symbol: "2883",
            price: 20.95,
            change: -0.53,
            changePercent: -2.35
      },
      {
            id: "2884",
            name: "玉山金",
            symbol: "2884",
            price: 32.75,
            change: -1.48,
            changePercent: -1.98
      },
      {
            id: "2885",
            name: "元大金",
            symbol: "2885",
            price: 50.2,
            change: 1.68,
            changePercent: -0.67
      },
      {
            id: "2886",
            name: "兆豐金",
            symbol: "2886",
            price: 39.5,
            change: 0.8,
            changePercent: -0.21
      },
      {
            id: "2887",
            name: "台新新光金",
            symbol: "2887",
            price: 24.3,
            change: -2.19,
            changePercent: -1.81
      },
      {
            id: "2889",
            name: "國票金",
            symbol: "2889",
            price: 15.2,
            change: -1.17,
            changePercent: -1.88
      },
      {
            id: "2890",
            name: "永豐金",
            symbol: "2890",
            price: 32.7,
            change: -0.02,
            changePercent: 0.29
      },
      {
            id: "2891",
            name: "中信金",
            symbol: "2891",
            price: 53.1,
            change: 0.98,
            changePercent: -1.68
      },
      {
            id: "2892",
            name: "第一金",
            symbol: "2892",
            price: 28.8,
            change: -1.88,
            changePercent: -0.96
      },
      {
            id: "2897",
            name: "王道銀行",
            symbol: "2897",
            price: 10.2,
            change: 1.56,
            changePercent: 0.27
      },
      {
            id: "2901",
            name: "欣欣",
            symbol: "2901",
            price: 23.55,
            change: 2.14,
            changePercent: -0.6
      },
      {
            id: "2903",
            name: "遠百",
            symbol: "2903",
            price: 23.05,
            change: 2.33,
            changePercent: -1.31
      },
      {
            id: "2904",
            name: "匯僑",
            symbol: "2904",
            price: 16.7,
            change: -2.36,
            changePercent: 1.49
      },
      {
            id: "2905",
            name: "三商",
            symbol: "2905",
            price: 14.5,
            change: 0.46,
            changePercent: 2.01
      },
      {
            id: "2906",
            name: "高林",
            symbol: "2906",
            price: 13,
            change: 0.67,
            changePercent: 1.94
      },
      {
            id: "2908",
            name: "特力",
            symbol: "2908",
            price: 20.3,
            change: -1.18,
            changePercent: -0.67
      },
      {
            id: "2910",
            name: "統領",
            symbol: "2910",
            price: 22.75,
            change: -1.38,
            changePercent: 0.53
      },
      {
            id: "2911",
            name: "麗嬰房",
            symbol: "2911",
            price: 4.91,
            change: 0.05,
            changePercent: -2.26
      },
      {
            id: "2912",
            name: "統一超",
            symbol: "2912",
            price: 237.5,
            change: 0.99,
            changePercent: 1.7
      },
      {
            id: "2913",
            name: "農林",
            symbol: "2913",
            price: 12.15,
            change: -2.21,
            changePercent: -0.41
      },
      {
            id: "2915",
            name: "潤泰全",
            symbol: "2915",
            price: 45.2,
            change: -1.69,
            changePercent: -2.06
      },
      {
            id: "2923",
            name: "鼎固-KY",
            symbol: "2923",
            price: 28,
            change: 1.07,
            changePercent: 0.15
      },
      {
            id: "2929",
            name: "淘帝-KY",
            symbol: "2929",
            price: 6.25,
            change: 2.28,
            changePercent: 0.54
      },
      {
            id: "2939",
            name: "永邑-KY",
            symbol: "2939",
            price: 25.25,
            change: 0.53,
            changePercent: 1.09
      },
      {
            id: "2945",
            name: "三商家購",
            symbol: "2945",
            price: 42.3,
            change: -1.88,
            changePercent: -1.83
      },
      {
            id: "3002",
            name: "歐格",
            symbol: "3002",
            price: 19.05,
            change: -1.16,
            changePercent: 0.46
      },
      {
            id: "3003",
            name: "健和興",
            symbol: "3003",
            price: 54.8,
            change: 0.71,
            changePercent: 0.47
      },
      {
            id: "3004",
            name: "豐達科",
            symbol: "3004",
            price: 113,
            change: -1.23,
            changePercent: 1.25
      },
      {
            id: "3005",
            name: "神基",
            symbol: "3005",
            price: 98.9,
            change: -2.06,
            changePercent: 1.57
      },
      {
            id: "3006",
            name: "晶豪科",
            symbol: "3006",
            price: 153,
            change: -0.44,
            changePercent: 0.37
      },
      {
            id: "3008",
            name: "大立光",
            symbol: "3008",
            price: 2605,
            change: 2.3,
            changePercent: -1.65
      },
      {
            id: "3010",
            name: "華立",
            symbol: "3010",
            price: 132.5,
            change: -1.84,
            changePercent: -1.08
      },
      {
            id: "3011",
            name: "今皓",
            symbol: "3011",
            price: 13.25,
            change: -1.64,
            changePercent: 0.64
      },
      {
            id: "3013",
            name: "晟銘電",
            symbol: "3013",
            price: 111,
            change: 2.19,
            changePercent: 0.28
      },
      {
            id: "3014",
            name: "聯陽",
            symbol: "3014",
            price: 124,
            change: 2.43,
            changePercent: -0.85
      },
      {
            id: "3015",
            name: "全漢",
            symbol: "3015",
            price: 50.7,
            change: 0.51,
            changePercent: -1.54
      },
      {
            id: "3016",
            name: "嘉晶",
            symbol: "3016",
            price: 63.1,
            change: -1.22,
            changePercent: 0.39
      },
      {
            id: "3017",
            name: "奇鋐",
            symbol: "3017",
            price: 2400,
            change: 1.85,
            changePercent: 0.52
      },
      {
            id: "3018",
            name: "隆銘綠能",
            symbol: "3018",
            price: 10.9,
            change: 2.06,
            changePercent: 0.32
      },
      {
            id: "3019",
            name: "亞光",
            symbol: "3019",
            price: 129,
            change: 1.1,
            changePercent: 2.41
      },
      {
            id: "3021",
            name: "鴻名",
            symbol: "3021",
            price: 16.4,
            change: 2.04,
            changePercent: 0
      },
      {
            id: "3022",
            name: "威強電",
            symbol: "3022",
            price: 69,
            change: -0.28,
            changePercent: 1.78
      },
      {
            id: "3023",
            name: "信邦",
            symbol: "3023",
            price: 282,
            change: 0.41,
            changePercent: -1.68
      },
      {
            id: "3024",
            name: "憶聲",
            symbol: "3024",
            price: 10.95,
            change: 2.3,
            changePercent: 0.2
      },
      {
            id: "3025",
            name: "星通",
            symbol: "3025",
            price: 64.5,
            change: -0.16,
            changePercent: 0.26
      },
      {
            id: "3026",
            name: "禾伸堂",
            symbol: "3026",
            price: 233.5,
            change: 2.08,
            changePercent: -2.12
      },
      {
            id: "3027",
            name: "盛達",
            symbol: "3027",
            price: 19.4,
            change: 2.2,
            changePercent: -1.95
      },
      {
            id: "3028",
            name: "增你強",
            symbol: "3028",
            price: 62.8,
            change: 0.34,
            changePercent: -1.81
      },
      {
            id: "3029",
            name: "零壹",
            symbol: "3029",
            price: 97.3,
            change: -1.55,
            changePercent: 1.27
      },
      {
            id: "3030",
            name: "德律",
            symbol: "3030",
            price: 338.5,
            change: -0.47,
            changePercent: 2.3
      },
      {
            id: "3031",
            name: "佰鴻",
            symbol: "3031",
            price: 33.2,
            change: 1.52,
            changePercent: 1.49
      },
      {
            id: "3032",
            name: "偉訓",
            symbol: "3032",
            price: 61.8,
            change: -0.68,
            changePercent: 2.35
      },
      {
            id: "3033",
            name: "威健",
            symbol: "3033",
            price: 34.65,
            change: -0.69,
            changePercent: 1.05
      },
      {
            id: "3034",
            name: "聯詠",
            symbol: "3034",
            price: 415,
            change: -1.51,
            changePercent: 1.03
      },
      {
            id: "3035",
            name: "智原",
            symbol: "3035",
            price: 159,
            change: 0.99,
            changePercent: 0.52
      },
      {
            id: "3036",
            name: "文曄",
            symbol: "3036",
            price: 230,
            change: -2.15,
            changePercent: 1.59
      },
      {
            id: "3037",
            name: "欣興",
            symbol: "3037",
            price: 643,
            change: 0,
            changePercent: -1.16
      },
      {
            id: "3038",
            name: "全台",
            symbol: "3038",
            price: 23.4,
            change: 2.01,
            changePercent: 0.05
      },
      {
            id: "3040",
            name: "遠見",
            symbol: "3040",
            price: 44.7,
            change: -2.26,
            changePercent: -1.78
      },
      {
            id: "3041",
            name: "揚智",
            symbol: "3041",
            price: 22.6,
            change: -0.53,
            changePercent: -2.11
      },
      {
            id: "3042",
            name: "晶技",
            symbol: "3042",
            price: 151.5,
            change: -1.78,
            changePercent: 2.4
      },
      {
            id: "3043",
            name: "科風",
            symbol: "3043",
            price: 20.15,
            change: 1.61,
            changePercent: -1.21
      },
      {
            id: "3044",
            name: "健鼎",
            symbol: "3044",
            price: 411.5,
            change: -0.1,
            changePercent: 1.27
      },
      {
            id: "3045",
            name: "台灣大",
            symbol: "3045",
            price: 112.5,
            change: -0.33,
            changePercent: 0.69
      },
      {
            id: "3046",
            name: "建碁",
            symbol: "3046",
            price: 49,
            change: 0.97,
            changePercent: 1.82
      },
      {
            id: "3047",
            name: "訊舟",
            symbol: "3047",
            price: 15.7,
            change: 2.31,
            changePercent: 1.52
      },
      {
            id: "3048",
            name: "益登",
            symbol: "3048",
            price: 39.35,
            change: 1.76,
            changePercent: 1.13
      },
      {
            id: "3049",
            name: "精金",
            symbol: "3049",
            price: 13.8,
            change: -0.8,
            changePercent: 2.16
      },
      {
            id: "3050",
            name: "鈺德",
            symbol: "3050",
            price: 13.15,
            change: -1.9,
            changePercent: 2.43
      },
      {
            id: "3051",
            name: "力特",
            symbol: "3051",
            price: 20.55,
            change: 2.49,
            changePercent: -0.71
      },
      {
            id: "3052",
            name: "夆典",
            symbol: "3052",
            price: 11.05,
            change: -2.12,
            changePercent: 2.22
      },
      {
            id: "3054",
            name: "立萬利",
            symbol: "3054",
            price: 75.7,
            change: 0.4,
            changePercent: 1.26
      },
      {
            id: "3055",
            name: "蔚華科",
            symbol: "3055",
            price: 68.2,
            change: 2.08,
            changePercent: -0.83
      },
      {
            id: "3056",
            name: "富華新",
            symbol: "3056",
            price: 14.65,
            change: -0.07,
            changePercent: -2.33
      },
      {
            id: "3057",
            name: "喬鼎",
            symbol: "3057",
            price: 18.6,
            change: -2.32,
            changePercent: -0.53
      },
      {
            id: "3058",
            name: "立德",
            symbol: "3058",
            price: 9.22,
            change: -2.47,
            changePercent: 1.36
      },
      {
            id: "3059",
            name: "華晶科",
            symbol: "3059",
            price: 37.65,
            change: 1.68,
            changePercent: -0.54
      },
      {
            id: "3060",
            name: "銘異",
            symbol: "3060",
            price: 30.25,
            change: 0.15,
            changePercent: -2.17
      },
      {
            id: "3062",
            name: "建漢",
            symbol: "3062",
            price: 30.05,
            change: 2.32,
            changePercent: 1.91
      },
      {
            id: "3090",
            name: "日電貿",
            symbol: "3090",
            price: 108.5,
            change: -0.53,
            changePercent: -0.29
      },
      {
            id: "3092",
            name: "鴻碩",
            symbol: "3092",
            price: 35.3,
            change: -0.48,
            changePercent: 0.88
      },
      {
            id: "3094",
            name: "聯傑",
            symbol: "3094",
            price: 24.8,
            change: 0.55,
            changePercent: 1.55
      },
      {
            id: "3130",
            name: "一零四",
            symbol: "3130",
            price: 221.5,
            change: 2.4,
            changePercent: -0.55
      },
      {
            id: "3135",
            name: "凌航",
            symbol: "3135",
            price: 119,
            change: 2.1,
            changePercent: 2.28
      },
      {
            id: "3138",
            name: "耀登",
            symbol: "3138",
            price: 184,
            change: -1.07,
            changePercent: 0.07
      },
      {
            id: "3149",
            name: "正達",
            symbol: "3149",
            price: 42.3,
            change: -0.71,
            changePercent: -0.18
      },
      {
            id: "3150",
            name: "鈺寶-創",
            symbol: "3150",
            price: 19.2,
            change: 1.35,
            changePercent: -1.86
      },
      {
            id: "3164",
            name: "景岳",
            symbol: "3164",
            price: 17.95,
            change: 2.24,
            changePercent: -0.13
      },
      {
            id: "3167",
            name: "大量",
            symbol: "3167",
            price: 685,
            change: -0.13,
            changePercent: -0.63
      },
      {
            id: "3168",
            name: "眾福科",
            symbol: "3168",
            price: 46,
            change: -1.36,
            changePercent: -0.8
      },
      {
            id: "3189",
            name: "景碩",
            symbol: "3189",
            price: 391.5,
            change: 1.48,
            changePercent: -2
      },
      {
            id: "3209",
            name: "全科",
            symbol: "3209",
            price: 47.45,
            change: -1.33,
            changePercent: 1.97
      },
      {
            id: "3229",
            name: "晟鈦",
            symbol: "3229",
            price: 30.7,
            change: 0.95,
            changePercent: -2.1
      },
      {
            id: "3231",
            name: "緯創",
            symbol: "3231",
            price: 136.5,
            change: -2.18,
            changePercent: -1.94
      },
      {
            id: "3257",
            name: "虹冠電",
            symbol: "3257",
            price: 55.1,
            change: -2.42,
            changePercent: 1.83
      },
      {
            id: "3266",
            name: "昇陽",
            symbol: "3266",
            price: 14.15,
            change: -1.83,
            changePercent: 1.29
      },
      {
            id: "3296",
            name: "勝德",
            symbol: "3296",
            price: 21.3,
            change: 0.73,
            changePercent: -1.41
      },
      {
            id: "3305",
            name: "昇貿",
            symbol: "3305",
            price: 120.5,
            change: 1.24,
            changePercent: -0.96
      },
      {
            id: "3308",
            name: "聯德",
            symbol: "3308",
            price: 20.7,
            change: 1.05,
            changePercent: -1.02
      },
      {
            id: "3311",
            name: "閎暉",
            symbol: "3311",
            price: 33.1,
            change: 1.44,
            changePercent: -0.6
      },
      {
            id: "3312",
            name: "弘憶股",
            symbol: "3312",
            price: 42.7,
            change: 2.31,
            changePercent: 0.69
      },
      {
            id: "3321",
            name: "同泰",
            symbol: "3321",
            price: 15.85,
            change: 0.11,
            changePercent: -2.14
      },
      {
            id: "3338",
            name: "泰碩",
            symbol: "3338",
            price: 65.5,
            change: -0.62,
            changePercent: -1.18
      },
      {
            id: "3346",
            name: "麗清",
            symbol: "3346",
            price: 18.45,
            change: 1.51,
            changePercent: -1.73
      },
      {
            id: "3356",
            name: "奇偶",
            symbol: "3356",
            price: 52.4,
            change: -0.26,
            changePercent: 2.38
      },
      {
            id: "3376",
            name: "新日興",
            symbol: "3376",
            price: 195,
            change: 1.62,
            changePercent: 1.32
      },
      {
            id: "3380",
            name: "明泰",
            symbol: "3380",
            price: 41.55,
            change: 0.15,
            changePercent: -0.14
      },
      {
            id: "3406",
            name: "玉晶光",
            symbol: "3406",
            price: 503,
            change: 1.58,
            changePercent: -0.09
      },
      {
            id: "3413",
            name: "京鼎",
            symbol: "3413",
            price: 314.5,
            change: 2.14,
            changePercent: -1.71
      },
      {
            id: "3416",
            name: "融程電",
            symbol: "3416",
            price: 160,
            change: -0.88,
            changePercent: -0.3
      },
      {
            id: "3419",
            name: "譁裕",
            symbol: "3419",
            price: 14.9,
            change: 0.59,
            changePercent: 2.42
      },
      {
            id: "3432",
            name: "台端",
            symbol: "3432",
            price: 16.25,
            change: -0.43,
            changePercent: 2.33
      },
      {
            id: "3437",
            name: "榮創",
            symbol: "3437",
            price: 27.2,
            change: 1.77,
            changePercent: 0.56
      },
      {
            id: "3443",
            name: "創意",
            symbol: "3443",
            price: 3255,
            change: -0.82,
            changePercent: 1.38
      },
      {
            id: "3447",
            name: "展達",
            symbol: "3447",
            price: 39.35,
            change: -1.04,
            changePercent: -0.34
      },
      {
            id: "3450",
            name: "聯鈞",
            symbol: "3450",
            price: 366,
            change: 0.26,
            changePercent: -0.05
      },
      {
            id: "3481",
            name: "群創",
            symbol: "3481",
            price: 25.9,
            change: 2.37,
            changePercent: -1.15
      },
      {
            id: "3494",
            name: "誠研",
            symbol: "3494",
            price: 8.35,
            change: 2.38,
            changePercent: 0.94
      },
      {
            id: "3501",
            name: "維熹",
            symbol: "3501",
            price: 47.95,
            change: -1.81,
            changePercent: -1.77
      },
      {
            id: "3504",
            name: "揚明光",
            symbol: "3504",
            price: 67.4,
            change: -0.87,
            changePercent: -1.97
      },
      {
            id: "3515",
            name: "華擎",
            symbol: "3515",
            price: 223.5,
            change: -1.07,
            changePercent: -0.43
      },
      {
            id: "3518",
            name: "柏騰",
            symbol: "3518",
            price: 27.05,
            change: -1.27,
            changePercent: 0.74
      },
      {
            id: "3528",
            name: "安馳",
            symbol: "3528",
            price: 72.3,
            change: 2.13,
            changePercent: -0.6
      },
      {
            id: "3530",
            name: "晶相光",
            symbol: "3530",
            price: 62.5,
            change: -1.44,
            changePercent: 1.47
      },
      {
            id: "3532",
            name: "台勝科",
            symbol: "3532",
            price: 188.5,
            change: -1.85,
            changePercent: -0.16
      },
      {
            id: "3533",
            name: "嘉澤",
            symbol: "3533",
            price: 2490,
            change: 0.09,
            changePercent: 1.62
      },
      {
            id: "3535",
            name: "晶彩科",
            symbol: "3535",
            price: 120.5,
            change: 2.48,
            changePercent: -2.27
      },
      {
            id: "3543",
            name: "州巧",
            symbol: "3543",
            price: 42.45,
            change: 1.24,
            changePercent: 1.48
      },
      {
            id: "3545",
            name: "敦泰",
            symbol: "3545",
            price: 51.9,
            change: 1.94,
            changePercent: 0.29
      },
      {
            id: "3550",
            name: "聯穎",
            symbol: "3550",
            price: 21.1,
            change: -2.37,
            changePercent: -1.74
      },
      {
            id: "3557",
            name: "嘉威",
            symbol: "3557",
            price: 31.7,
            change: -1.11,
            changePercent: -0.75
      },
      {
            id: "3563",
            name: "牧德",
            symbol: "3563",
            price: 957,
            change: 2.07,
            changePercent: -0.41
      },
      {
            id: "3576",
            name: "聯合再生",
            symbol: "3576",
            price: 18.3,
            change: -0.77,
            changePercent: 1.06
      },
      {
            id: "3583",
            name: "辛耘",
            symbol: "3583",
            price: 760,
            change: -0.19,
            changePercent: 1.94
      },
      {
            id: "3588",
            name: "通嘉",
            symbol: "3588",
            price: 54.6,
            change: 1.28,
            changePercent: -0.67
      },
      {
            id: "3591",
            name: "艾笛森",
            symbol: "3591",
            price: 24.75,
            change: -1.34,
            changePercent: -1.79
      },
      {
            id: "3592",
            name: "瑞鼎",
            symbol: "3592",
            price: 239.5,
            change: -0.59,
            changePercent: 1.85
      },
      {
            id: "3593",
            name: "力銘",
            symbol: "3593",
            price: 19.35,
            change: -0.9,
            changePercent: -1.73
      },
      {
            id: "3596",
            name: "智易",
            symbol: "3596",
            price: 177,
            change: 0.83,
            changePercent: -1.54
      },
      {
            id: "3605",
            name: "宏致",
            symbol: "3605",
            price: 65.6,
            change: -2.15,
            changePercent: -1.62
      },
      {
            id: "3607",
            name: "谷崧",
            symbol: "3607",
            price: 15.5,
            change: -0.54,
            changePercent: -1.85
      },
      {
            id: "3617",
            name: "碩天",
            symbol: "3617",
            price: 192,
            change: 1.96,
            changePercent: 1.66
      },
      {
            id: "3622",
            name: "洋華",
            symbol: "3622",
            price: 55.8,
            change: 0.87,
            changePercent: 1.79
      },
      {
            id: "3645",
            name: "達邁",
            symbol: "3645",
            price: 104.5,
            change: -2.22,
            changePercent: -0.2
      },
      {
            id: "3652",
            name: "精聯",
            symbol: "3652",
            price: 28,
            change: -0.64,
            changePercent: -0.59
      },
      {
            id: "3653",
            name: "健策",
            symbol: "3653",
            price: 4565,
            change: 0.86,
            changePercent: -1.03
      },
      {
            id: "3661",
            name: "世芯-KY",
            symbol: "3661",
            price: 3515,
            change: -0.99,
            changePercent: -1.96
      },
      {
            id: "3665",
            name: "貿聯-KY",
            symbol: "3665",
            price: 2365,
            change: -1.53,
            changePercent: 2.31
      },
      {
            id: "3669",
            name: "圓展",
            symbol: "3669",
            price: 39.35,
            change: 1.83,
            changePercent: 1.85
      },
      {
            id: "3673",
            name: "TPK-KY",
            symbol: "3673",
            price: 72.1,
            change: -0.69,
            changePercent: -0.09
      },
      {
            id: "3679",
            name: "新至陞",
            symbol: "3679",
            price: 122,
            change: 0.93,
            changePercent: -0.92
      },
      {
            id: "3686",
            name: "達能",
            symbol: "3686",
            price: 17.7,
            change: -2.24,
            changePercent: -1.69
      },
      {
            id: "3694",
            name: "海華",
            symbol: "3694",
            price: 61.3,
            change: -0.62,
            changePercent: -1.47
      },
      {
            id: "3701",
            name: "大眾控",
            symbol: "3701",
            price: 65.9,
            change: 1.46,
            changePercent: -2.4
      },
      {
            id: "3702",
            name: "大聯大",
            symbol: "3702",
            price: 98.8,
            change: -1,
            changePercent: -1.47
      },
      {
            id: "3703",
            name: "欣陸",
            symbol: "3703",
            price: 21.85,
            change: 0.22,
            changePercent: 0.75
      },
      {
            id: "3704",
            name: "合勤控",
            symbol: "3704",
            price: 37.45,
            change: -0.83,
            changePercent: -0.4
      },
      {
            id: "3705",
            name: "永信",
            symbol: "3705",
            price: 55.4,
            change: -1.89,
            changePercent: 0.42
      },
      {
            id: "3706",
            name: "神達",
            symbol: "3706",
            price: 84.1,
            change: 0.79,
            changePercent: 0.83
      },
      {
            id: "3708",
            name: "上緯投控",
            symbol: "3708",
            price: 123.5,
            change: -0.86,
            changePercent: 0.37
      },
      {
            id: "3711",
            name: "日月光投控",
            symbol: "3711",
            price: 442,
            change: -0.85,
            changePercent: 0.5
      },
      {
            id: "3712",
            name: "永崴投控",
            symbol: "3712",
            price: 19.3,
            change: 0.47,
            changePercent: 0.18
      },
      {
            id: "3714",
            name: "富采",
            symbol: "3714",
            price: 77.9,
            change: -1.34,
            changePercent: 1.13
      },
      {
            id: "3715",
            name: "定穎投控",
            symbol: "3715",
            price: 198,
            change: -1.91,
            changePercent: 2.14
      },
      {
            id: "3716",
            name: "中化控股",
            symbol: "3716",
            price: 32.7,
            change: 1.89,
            changePercent: -1.26
      },
      {
            id: "3717",
            name: "聯嘉投控",
            symbol: "3717",
            price: 21.9,
            change: 2.09,
            changePercent: 1.07
      },
      {
            id: "4104",
            name: "佳醫",
            symbol: "4104",
            price: 79.1,
            change: 1.79,
            changePercent: 2.13
      },
      {
            id: "4106",
            name: "雃博",
            symbol: "4106",
            price: 22.5,
            change: -0.27,
            changePercent: 0.13
      },
      {
            id: "4108",
            name: "懷特",
            symbol: "4108",
            price: 12.65,
            change: 1.1,
            changePercent: -0.22
      },
      {
            id: "4119",
            name: "旭富",
            symbol: "4119",
            price: 48.55,
            change: 2.28,
            changePercent: 0.76
      },
      {
            id: "4133",
            name: "亞諾法",
            symbol: "4133",
            price: 22.5,
            change: -0.7,
            changePercent: -2.28
      },
      {
            id: "4137",
            name: "麗豐-KY",
            symbol: "4137",
            price: 110.5,
            change: -0.4,
            changePercent: -2.19
      },
      {
            id: "4142",
            name: "國光生",
            symbol: "4142",
            price: 18.5,
            change: 0.05,
            changePercent: -0.41
      },
      {
            id: "4148",
            name: "全宇生技-KY",
            symbol: "4148",
            price: 38,
            change: 2.33,
            changePercent: -0.1
      },
      {
            id: "4155",
            name: "訊映",
            symbol: "4155",
            price: 13.4,
            change: -0.63,
            changePercent: -1.88
      },
      {
            id: "4164",
            name: "承業醫",
            symbol: "4164",
            price: 31.15,
            change: 0.79,
            changePercent: -0.8
      },
      {
            id: "4169",
            name: "泰宗",
            symbol: "4169",
            price: 166.5,
            change: -1.54,
            changePercent: -1.36
      },
      {
            id: "4190",
            name: "佐登-KY",
            symbol: "4190",
            price: 27,
            change: -1.48,
            changePercent: -1.04
      },
      {
            id: "4306",
            name: "炎洲",
            symbol: "4306",
            price: 13.7,
            change: 0.74,
            changePercent: -1.72
      },
      {
            id: "4414",
            name: "如興",
            symbol: "4414",
            price: 10.85,
            change: -2.02,
            changePercent: 1.78
      },
      {
            id: "4426",
            name: "利勤",
            symbol: "4426",
            price: 8.92,
            change: 1.96,
            changePercent: -0.71
      },
      {
            id: "4438",
            name: "廣越",
            symbol: "4438",
            price: 58.9,
            change: -1.99,
            changePercent: -2.3
      },
      {
            id: "4439",
            name: "冠星-KY",
            symbol: "4439",
            price: 97.4,
            change: -2.29,
            changePercent: 1.52
      },
      {
            id: "4440",
            name: "宜新實業",
            symbol: "4440",
            price: 18.15,
            change: -0.14,
            changePercent: 1.22
      },
      {
            id: "4441",
            name: "振大環球",
            symbol: "4441",
            price: 194.5,
            change: -1.04,
            changePercent: -0.17
      },
      {
            id: "4526",
            name: "東台",
            symbol: "4526",
            price: 34.4,
            change: 1.27,
            changePercent: 2.1
      },
      {
            id: "4532",
            name: "瑞智",
            symbol: "4532",
            price: 24.6,
            change: 0.85,
            changePercent: -0.29
      },
      {
            id: "4536",
            name: "拓凱",
            symbol: "4536",
            price: 156.5,
            change: -2,
            changePercent: -2.17
      },
      {
            id: "4540",
            name: "全球傳動",
            symbol: "4540",
            price: 57.9,
            change: -0.07,
            changePercent: 0.19
      },
      {
            id: "4545",
            name: "銘鈺",
            symbol: "4545",
            price: 31.4,
            change: 2.45,
            changePercent: -2.26
      },
      {
            id: "4551",
            name: "智伸科",
            symbol: "4551",
            price: 142,
            change: 1.53,
            changePercent: -1.44
      },
      {
            id: "4552",
            name: "力達-KY",
            symbol: "4552",
            price: 21.2,
            change: -0.32,
            changePercent: 1.19
      },
      {
            id: "4555",
            name: "氣立",
            symbol: "4555",
            price: 41.05,
            change: -2.21,
            changePercent: 2.43
      },
      {
            id: "4557",
            name: "永新-KY",
            symbol: "4557",
            price: 53.6,
            change: -1.85,
            changePercent: -0.27
      },
      {
            id: "4560",
            name: "強信-KY",
            symbol: "4560",
            price: 33.55,
            change: -0.28,
            changePercent: 0.57
      },
      {
            id: "4562",
            name: "穎漢",
            symbol: "4562",
            price: 35.5,
            change: -0.47,
            changePercent: 1.54
      },
      {
            id: "4564",
            name: "元翎",
            symbol: "4564",
            price: 19.85,
            change: -0.46,
            changePercent: -0.44
      },
      {
            id: "4566",
            name: "時碩工業",
            symbol: "4566",
            price: 70.1,
            change: 1.56,
            changePercent: 0.55
      },
      {
            id: "4569",
            name: "六方科-KY",
            symbol: "4569",
            price: 194.5,
            change: 0.95,
            changePercent: -0.5
      },
      {
            id: "4571",
            name: "鈞興-KY",
            symbol: "4571",
            price: 160,
            change: 1.98,
            changePercent: 0.47
      },
      {
            id: "4572",
            name: "駐龍",
            symbol: "4572",
            price: 146.5,
            change: 1.33,
            changePercent: 0.72
      },
      {
            id: "4576",
            name: "大銀微系統",
            symbol: "4576",
            price: 196,
            change: -1.18,
            changePercent: 1.89
      },
      {
            id: "4581",
            name: "光隆精密-KY",
            symbol: "4581",
            price: 51,
            change: 2.11,
            changePercent: 1.68
      },
      {
            id: "4583",
            name: "台灣精銳",
            symbol: "4583",
            price: 734,
            change: -0.14,
            changePercent: 2.39
      },
      {
            id: "4585",
            name: "達明",
            symbol: "4585",
            price: 319,
            change: -0.38,
            changePercent: -2.26
      },
      {
            id: "4588",
            name: "玖鼎電力",
            symbol: "4588",
            price: 60.2,
            change: -2.04,
            changePercent: 0.93
      },
      {
            id: "4590",
            name: "富田-創",
            symbol: "4590",
            price: 77.3,
            change: -1.32,
            changePercent: -0.19
      },
      {
            id: "4720",
            name: "德淵",
            symbol: "4720",
            price: 22.1,
            change: 0.14,
            changePercent: 0.93
      },
      {
            id: "4722",
            name: "國精化",
            symbol: "4722",
            price: 180,
            change: 1.02,
            changePercent: 1.96
      },
      {
            id: "4736",
            name: "泰博",
            symbol: "4736",
            price: 125.5,
            change: -0.95,
            changePercent: 1.49
      },
      {
            id: "4737",
            name: "華廣",
            symbol: "4737",
            price: 67,
            change: -2.41,
            changePercent: -2.01
      },
      {
            id: "4739",
            name: "康普",
            symbol: "4739",
            price: 90.4,
            change: 2.15,
            changePercent: -1.86
      },
      {
            id: "4746",
            name: "台耀",
            symbol: "4746",
            price: 52.7,
            change: -1.09,
            changePercent: 1.93
      },
      {
            id: "4755",
            name: "三福化",
            symbol: "4755",
            price: 151.5,
            change: 1.47,
            changePercent: -0.64
      },
      {
            id: "4763",
            name: "材料*-KY",
            symbol: "4763",
            price: 47.15,
            change: 0.11,
            changePercent: 1.99
      },
      {
            id: "4764",
            name: "雙鍵",
            symbol: "4764",
            price: 212.5,
            change: -0.88,
            changePercent: 2.32
      },
      {
            id: "4766",
            name: "南寶",
            symbol: "4766",
            price: 347.5,
            change: -1.95,
            changePercent: 0.18
      },
      {
            id: "4770",
            name: "上品",
            symbol: "4770",
            price: 230.5,
            change: 2.47,
            changePercent: -2.39
      },
      {
            id: "4771",
            name: "望隼",
            symbol: "4771",
            price: 196,
            change: -0.36,
            changePercent: 0.86
      },
      {
            id: "4807",
            name: "日成-KY",
            symbol: "4807",
            price: 15.4,
            change: 1.89,
            changePercent: 2.06
      },
      {
            id: "4904",
            name: "遠傳",
            symbol: "4904",
            price: 97.4,
            change: 2.19,
            changePercent: 0.92
      },
      {
            id: "4906",
            name: "正文",
            symbol: "4906",
            price: 37.75,
            change: -1.08,
            changePercent: 2.32
      },
      {
            id: "4912",
            name: "聯德控股-KY",
            symbol: "4912",
            price: 89.8,
            change: 1.81,
            changePercent: 0.01
      },
      {
            id: "4915",
            name: "致伸",
            symbol: "4915",
            price: 75.1,
            change: 0.96,
            changePercent: -0.69
      },
      {
            id: "4916",
            name: "事欣科",
            symbol: "4916",
            price: 67.8,
            change: 1.12,
            changePercent: -1.64
      },
      {
            id: "4919",
            name: "新唐",
            symbol: "4919",
            price: 129,
            change: 0.32,
            changePercent: -1.92
      },
      {
            id: "4927",
            name: "泰鼎-KY",
            symbol: "4927",
            price: 50.1,
            change: -0.84,
            changePercent: 0.3
      },
      {
            id: "4930",
            name: "燦星網",
            symbol: "4930",
            price: 19.2,
            change: -0.35,
            changePercent: -0.48
      },
      {
            id: "4934",
            name: "太極",
            symbol: "4934",
            price: 16.8,
            change: -1.22,
            changePercent: -0.95
      },
      {
            id: "4935",
            name: "茂林-KY",
            symbol: "4935",
            price: 38.35,
            change: -0.82,
            changePercent: -0.49
      },
      {
            id: "4938",
            name: "和碩",
            symbol: "4938",
            price: 83,
            change: -0.74,
            changePercent: 2.12
      },
      {
            id: "4942",
            name: "嘉彰",
            symbol: "4942",
            price: 38.45,
            change: -0.06,
            changePercent: 1.42
      },
      {
            id: "4943",
            name: "康控-KY",
            symbol: "4943",
            price: 10.95,
            change: 2.36,
            changePercent: -0.27
      },
      {
            id: "4949",
            name: "有成精密",
            symbol: "4949",
            price: 90.4,
            change: 1.71,
            changePercent: 0.36
      },
      {
            id: "4952",
            name: "凌通",
            symbol: "4952",
            price: 42.5,
            change: -1.59,
            changePercent: 1.5
      },
      {
            id: "4956",
            name: "光鋐",
            symbol: "4956",
            price: 49.75,
            change: -1.59,
            changePercent: -0.24
      },
      {
            id: "4958",
            name: "臻鼎-KY",
            symbol: "4958",
            price: 282,
            change: -2.27,
            changePercent: 1.96
      },
      {
            id: "4960",
            name: "誠美材",
            symbol: "4960",
            price: 33.85,
            change: -2.39,
            changePercent: 1.04
      },
      {
            id: "4961",
            name: "天鈺",
            symbol: "4961",
            price: 153,
            change: -0.68,
            changePercent: -1.72
      },
      {
            id: "4967",
            name: "十銓",
            symbol: "4967",
            price: 219.5,
            change: 1.12,
            changePercent: -1.88
      },
      {
            id: "4968",
            name: "立積",
            symbol: "4968",
            price: 112,
            change: -0.06,
            changePercent: -1.19
      },
      {
            id: "4976",
            name: "佳凌",
            symbol: "4976",
            price: 30.2,
            change: 2.44,
            changePercent: 0.94
      },
      {
            id: "4977",
            name: "眾達-KY",
            symbol: "4977",
            price: 235.5,
            change: 1.02,
            changePercent: 0.43
      },
      {
            id: "4989",
            name: "榮科",
            symbol: "4989",
            price: 102.5,
            change: -1.76,
            changePercent: -1.52
      },
      {
            id: "4994",
            name: "傳奇",
            symbol: "4994",
            price: 100.5,
            change: -2.43,
            changePercent: -0.17
      },
      {
            id: "4999",
            name: "鑫禾",
            symbol: "4999",
            price: 21.1,
            change: 0.42,
            changePercent: 1.36
      },
      {
            id: "5007",
            name: "三星",
            symbol: "5007",
            price: 57.7,
            change: -1.87,
            changePercent: -0.25
      },
      {
            id: "5203",
            name: "訊連",
            symbol: "5203",
            price: 65.3,
            change: 0.28,
            changePercent: 2.46
      },
      {
            id: "5215",
            name: "科嘉-KY",
            symbol: "5215",
            price: 38.35,
            change: 1.73,
            changePercent: -1.65
      },
      {
            id: "5222",
            name: "全訊",
            symbol: "5222",
            price: 144.5,
            change: 2.2,
            changePercent: 0.76
      },
      {
            id: "5225",
            name: "東科-KY",
            symbol: "5225",
            price: 78.2,
            change: -0.43,
            changePercent: -2.06
      },
      {
            id: "5234",
            name: "達興材料",
            symbol: "5234",
            price: 443,
            change: -0.61,
            changePercent: 2.33
      },
      {
            id: "5243",
            name: "乙盛-KY",
            symbol: "5243",
            price: 124,
            change: 1.04,
            changePercent: -0.21
      },
      {
            id: "5244",
            name: "弘凱",
            symbol: "5244",
            price: 46.2,
            change: 0.98,
            changePercent: -1.42
      },
      {
            id: "5258",
            name: "虹堡",
            symbol: "5258",
            price: 52,
            change: 2.06,
            changePercent: -0.49
      },
      {
            id: "5269",
            name: "祥碩",
            symbol: "5269",
            price: 1270,
            change: -2.32,
            changePercent: -0.95
      },
      {
            id: "5283",
            name: "禾聯碩",
            symbol: "5283",
            price: 55.4,
            change: 1.13,
            changePercent: -2.23
      },
      {
            id: "5284",
            name: "jpp-KY",
            symbol: "5284",
            price: 318.5,
            change: -0.85,
            changePercent: 1.9
      },
      {
            id: "5285",
            name: "界霖",
            symbol: "5285",
            price: 54.2,
            change: 0.21,
            changePercent: -0.63
      },
      {
            id: "5288",
            name: "豐祥-KY",
            symbol: "5288",
            price: 159,
            change: 0.57,
            changePercent: 1.48
      },
      {
            id: "5292",
            name: "華懋",
            symbol: "5292",
            price: 230.5,
            change: -2.48,
            changePercent: -1.45
      },
      {
            id: "5306",
            name: "桂盟",
            symbol: "5306",
            price: 84.4,
            change: -0.61,
            changePercent: 1.28
      },
      {
            id: "5388",
            name: "中磊",
            symbol: "5388",
            price: 82.2,
            change: -2.16,
            changePercent: 2.46
      },
      {
            id: "5434",
            name: "崇越",
            symbol: "5434",
            price: 417,
            change: 2.32,
            changePercent: 2.39
      },
      {
            id: "5469",
            name: "瀚宇博",
            symbol: "5469",
            price: 94.4,
            change: -1.47,
            changePercent: 1.65
      },
      {
            id: "5471",
            name: "松翰",
            symbol: "5471",
            price: 41.2,
            change: -0.02,
            changePercent: -2.04
      },
      {
            id: "5484",
            name: "慧友",
            symbol: "5484",
            price: 38.8,
            change: -0.47,
            changePercent: -0.8
      },
      {
            id: "5515",
            name: "建國",
            symbol: "5515",
            price: 41.2,
            change: -1.58,
            changePercent: -0.5
      },
      {
            id: "5519",
            name: "隆大",
            symbol: "5519",
            price: 33,
            change: 1.83,
            changePercent: -1.38
      },
      {
            id: "5521",
            name: "工信",
            symbol: "5521",
            price: 12.3,
            change: -0.03,
            changePercent: -1.96
      },
      {
            id: "5522",
            name: "遠雄",
            symbol: "5522",
            price: 69.7,
            change: -0.79,
            changePercent: -2.25
      },
      {
            id: "5525",
            name: "順天",
            symbol: "5525",
            price: 25.25,
            change: -0.17,
            changePercent: -2.5
      },
      {
            id: "5531",
            name: "鄉林",
            symbol: "5531",
            price: 8.83,
            change: -1.89,
            changePercent: 1.52
      },
      {
            id: "5533",
            name: "皇鼎",
            symbol: "5533",
            price: 14.65,
            change: -0.49,
            changePercent: -2.43
      },
      {
            id: "5534",
            name: "長虹",
            symbol: "5534",
            price: 79,
            change: 1.51,
            changePercent: 1.73
      },
      {
            id: "5538",
            name: "東明-KY",
            symbol: "5538",
            price: 32,
            change: -0.19,
            changePercent: -1.27
      },
      {
            id: "5546",
            name: "永固-KY",
            symbol: "5546",
            price: 17.15,
            change: 2.09,
            changePercent: 0.56
      },
      {
            id: "5607",
            name: "遠雄港",
            symbol: "5607",
            price: 48.15,
            change: -0.14,
            changePercent: 1.57
      },
      {
            id: "5608",
            name: "四維航",
            symbol: "5608",
            price: 16.3,
            change: -2.46,
            changePercent: 2.02
      },
      {
            id: "5706",
            name: "鳳凰",
            symbol: "5706",
            price: 52.7,
            change: -1.34,
            changePercent: -0.28
      },
      {
            id: "5871",
            name: "中租-KY",
            symbol: "5871",
            price: 118,
            change: 0.89,
            changePercent: 0.23
      },
      {
            id: "5876",
            name: "上海商銀",
            symbol: "5876",
            price: 39.85,
            change: -2.38,
            changePercent: 1.74
      },
      {
            id: "5880",
            name: "合庫金",
            symbol: "5880",
            price: 23.9,
            change: 0.45,
            changePercent: 2.22
      },
      {
            id: "5906",
            name: "台南-KY",
            symbol: "5906",
            price: 49.3,
            change: -2.35,
            changePercent: 0.33
      },
      {
            id: "5907",
            name: "大洋-KY",
            symbol: "5907",
            price: 5.73,
            change: -2.44,
            changePercent: 1.34
      },
      {
            id: "6005",
            name: "群益證",
            symbol: "6005",
            price: 27.6,
            change: 1.85,
            changePercent: -1.79
      },
      {
            id: "6024",
            name: "群益期",
            symbol: "6024",
            price: 56.4,
            change: -0.26,
            changePercent: 0.02
      },
      {
            id: "6108",
            name: "競國",
            symbol: "6108",
            price: 17.9,
            change: -0.89,
            changePercent: -1.41
      },
      {
            id: "6112",
            name: "邁達特",
            symbol: "6112",
            price: 48.05,
            change: -0.46,
            changePercent: -1.83
      },
      {
            id: "6115",
            name: "鎰勝",
            symbol: "6115",
            price: 47.8,
            change: -0.05,
            changePercent: -0.63
      },
      {
            id: "6116",
            name: "彩晶",
            symbol: "6116",
            price: 8.95,
            change: -1.37,
            changePercent: 0.82
      },
      {
            id: "6117",
            name: "迎廣",
            symbol: "6117",
            price: 81.6,
            change: 0.85,
            changePercent: -1.01
      },
      {
            id: "6120",
            name: "達運",
            symbol: "6120",
            price: 14.8,
            change: 0.25,
            changePercent: 0.5
      },
      {
            id: "6128",
            name: "上福",
            symbol: "6128",
            price: 21.05,
            change: -0.13,
            changePercent: -1.37
      },
      {
            id: "6133",
            name: "金橋",
            symbol: "6133",
            price: 23.1,
            change: 1.45,
            changePercent: -1.09
      },
      {
            id: "6136",
            name: "富爾特",
            symbol: "6136",
            price: 24.45,
            change: 1.34,
            changePercent: 0.32
      },
      {
            id: "6139",
            name: "亞翔",
            symbol: "6139",
            price: 723,
            change: 0.96,
            changePercent: -1.47
      },
      {
            id: "6141",
            name: "柏承",
            symbol: "6141",
            price: 31.2,
            change: -1.18,
            changePercent: 1.12
      },
      {
            id: "6142",
            name: "友勁",
            symbol: "6142",
            price: 9.23,
            change: 0.42,
            changePercent: -1.72
      },
      {
            id: "6152",
            name: "百一",
            symbol: "6152",
            price: 17.4,
            change: 2.11,
            changePercent: -2.47
      },
      {
            id: "6153",
            name: "嘉聯益",
            symbol: "6153",
            price: 18.75,
            change: -0.24,
            changePercent: -0.53
      },
      {
            id: "6155",
            name: "鈞寶",
            symbol: "6155",
            price: 50.6,
            change: -0.07,
            changePercent: 0.9
      },
      {
            id: "6164",
            name: "華興",
            symbol: "6164",
            price: 13,
            change: 0.7,
            changePercent: 1.12
      },
      {
            id: "6165",
            name: "浪凡",
            symbol: "6165",
            price: 45.2,
            change: -0.41,
            changePercent: 1.88
      },
      {
            id: "6166",
            name: "凌華",
            symbol: "6166",
            price: 73.8,
            change: -1.09,
            changePercent: -0.12
      },
      {
            id: "6168",
            name: "宏齊",
            symbol: "6168",
            price: 28.8,
            change: -1.64,
            changePercent: 1.5
      },
      {
            id: "6176",
            name: "瑞儀",
            symbol: "6176",
            price: 90.9,
            change: 2.07,
            changePercent: -2.26
      },
      {
            id: "6177",
            name: "達麗",
            symbol: "6177",
            price: 45.75,
            change: -0.07,
            changePercent: -1.95
      },
      {
            id: "6183",
            name: "關貿",
            symbol: "6183",
            price: 95.3,
            change: -2.49,
            changePercent: -1.51
      },
      {
            id: "6184",
            name: "大豐電",
            symbol: "6184",
            price: 47.55,
            change: 1.91,
            changePercent: -0.32
      },
      {
            id: "6189",
            name: "豐藝",
            symbol: "6189",
            price: 47.2,
            change: 2.21,
            changePercent: -1.36
      },
      {
            id: "6191",
            name: "精成科",
            symbol: "6191",
            price: 104.5,
            change: -2.11,
            changePercent: 0.85
      },
      {
            id: "6192",
            name: "巨路",
            symbol: "6192",
            price: 122.5,
            change: 0.47,
            changePercent: -1.13
      },
      {
            id: "6196",
            name: "帆宣",
            symbol: "6196",
            price: 359,
            change: 0.17,
            changePercent: -1.86
      },
      {
            id: "6197",
            name: "佳必琪",
            symbol: "6197",
            price: 185.5,
            change: -0.15,
            changePercent: -1.11
      },
      {
            id: "6201",
            name: "亞弘電",
            symbol: "6201",
            price: 51,
            change: -1.2,
            changePercent: 1.43
      },
      {
            id: "6202",
            name: "盛群",
            symbol: "6202",
            price: 55,
            change: -1.27,
            changePercent: 2.01
      },
      {
            id: "6205",
            name: "詮欣",
            symbol: "6205",
            price: 75,
            change: 0.2,
            changePercent: -0.71
      },
      {
            id: "6206",
            name: "飛捷",
            symbol: "6206",
            price: 108,
            change: -0.04,
            changePercent: 1.95
      },
      {
            id: "6209",
            name: "今國光",
            symbol: "6209",
            price: 62.1,
            change: -0.02,
            changePercent: -1.81
      },
      {
            id: "6213",
            name: "聯茂",
            symbol: "6213",
            price: 270.5,
            change: -0.52,
            changePercent: 0.51
      },
      {
            id: "6214",
            name: "精誠",
            symbol: "6214",
            price: 126,
            change: -1.82,
            changePercent: 2.4
      },
      {
            id: "6215",
            name: "和椿",
            symbol: "6215",
            price: 106,
            change: -1.5,
            changePercent: 0.96
      },
      {
            id: "6216",
            name: "居易",
            symbol: "6216",
            price: 25.75,
            change: -0.16,
            changePercent: -1.46
      },
      {
            id: "6224",
            name: "聚鼎",
            symbol: "6224",
            price: 61.1,
            change: 2.18,
            changePercent: -0.79
      },
      {
            id: "6225",
            name: "天瀚",
            symbol: "6225",
            price: 19.05,
            change: -1.65,
            changePercent: -0.87
      },
      {
            id: "6226",
            name: "光鼎",
            symbol: "6226",
            price: 14.6,
            change: 1.99,
            changePercent: -0.66
      },
      {
            id: "6230",
            name: "尼得科超眾",
            symbol: "6230",
            price: 161,
            change: -0.75,
            changePercent: 0.03
      },
      {
            id: "6235",
            name: "華孚",
            symbol: "6235",
            price: 45.7,
            change: 0.6,
            changePercent: 2.19
      },
      {
            id: "6239",
            name: "力成",
            symbol: "6239",
            price: 207.5,
            change: 1.68,
            changePercent: 1.55
      },
      {
            id: "6243",
            name: "迅杰",
            symbol: "6243",
            price: 30.95,
            change: 0.14,
            changePercent: -0.07
      },
      {
            id: "6257",
            name: "矽格",
            symbol: "6257",
            price: 177.5,
            change: 2.34,
            changePercent: -0.81
      },
      {
            id: "6269",
            name: "台郡",
            symbol: "6269",
            price: 64.7,
            change: 2.27,
            changePercent: -0.2
      },
      {
            id: "6271",
            name: "同欣電",
            symbol: "6271",
            price: 185.5,
            change: -0.48,
            changePercent: -1.05
      },
      {
            id: "6272",
            name: "驊陞",
            symbol: "6272",
            price: 32.55,
            change: -0.51,
            changePercent: 0.32
      },
      {
            id: "6277",
            name: "宏正",
            symbol: "6277",
            price: 71.1,
            change: 2.4,
            changePercent: 1.16
      },
      {
            id: "6278",
            name: "台表科",
            symbol: "6278",
            price: 157,
            change: -0.19,
            changePercent: 0.68
      },
      {
            id: "6281",
            name: "全國電",
            symbol: "6281",
            price: 53,
            change: -0.67,
            changePercent: -0.88
      },
      {
            id: "6282",
            name: "康舒",
            symbol: "6282",
            price: 50.9,
            change: 0.14,
            changePercent: 1.67
      },
      {
            id: "6283",
            name: "淳安",
            symbol: "6283",
            price: 23.6,
            change: -1.41,
            changePercent: 1.05
      },
      {
            id: "6285",
            name: "啟碁",
            symbol: "6285",
            price: 264.5,
            change: 1.25,
            changePercent: -2.36
      },
      {
            id: "6405",
            name: "悅城",
            symbol: "6405",
            price: 36.55,
            change: -2.08,
            changePercent: 1.35
      },
      {
            id: "6409",
            name: "旭隼",
            symbol: "6409",
            price: 781,
            change: -0.02,
            changePercent: -2.12
      },
      {
            id: "6412",
            name: "群電",
            symbol: "6412",
            price: 78.6,
            change: 0.18,
            changePercent: -0.35
      },
      {
            id: "6414",
            name: "樺漢",
            symbol: "6414",
            price: 304,
            change: 0.86,
            changePercent: -1.12
      },
      {
            id: "6415",
            name: "矽力*-KY",
            symbol: "6415",
            price: 332.5,
            change: -2.04,
            changePercent: -0.88
      },
      {
            id: "6416",
            name: "瑞祺電通",
            symbol: "6416",
            price: 81.4,
            change: -1.29,
            changePercent: 0.75
      },
      {
            id: "6426",
            name: "統新",
            symbol: "6426",
            price: 227,
            change: 1.98,
            changePercent: -0.58
      },
      {
            id: "6431",
            name: "光麗-KY",
            symbol: "6431",
            price: 21.3,
            change: -1.22,
            changePercent: 1.18
      },
      {
            id: "6438",
            name: "迅得",
            symbol: "6438",
            price: 179,
            change: -1.52,
            changePercent: 2.04
      },
      {
            id: "6442",
            name: "光聖",
            symbol: "6442",
            price: 2155,
            change: 1.6,
            changePercent: 1.43
      },
      {
            id: "6443",
            name: "元晶",
            symbol: "6443",
            price: 39,
            change: -0.81,
            changePercent: 0.39
      },
      {
            id: "6446",
            name: "藥華藥",
            symbol: "6446",
            price: 653,
            change: 0.23,
            changePercent: 1.08
      },
      {
            id: "6449",
            name: "鈺邦",
            symbol: "6449",
            price: 174.5,
            change: -0.37,
            changePercent: 2.24
      },
      {
            id: "6451",
            name: "訊芯-KY",
            symbol: "6451",
            price: 505,
            change: 1.41,
            changePercent: 2.37
      },
      {
            id: "6456",
            name: "GIS-KY",
            symbol: "6456",
            price: 77.6,
            change: 0.19,
            changePercent: -2.11
      },
      {
            id: "6464",
            name: "台數科",
            symbol: "6464",
            price: 76.3,
            change: 0.82,
            changePercent: -1.27
      },
      {
            id: "6472",
            name: "保瑞",
            symbol: "6472",
            price: 416,
            change: -0.26,
            changePercent: -0.64
      },
      {
            id: "6477",
            name: "安集",
            symbol: "6477",
            price: 34.45,
            change: 0.77,
            changePercent: 0.49
      },
      {
            id: "6491",
            name: "晶碩",
            symbol: "6491",
            price: 293.5,
            change: 1.78,
            changePercent: 1.18
      },
      {
            id: "6504",
            name: "南六",
            symbol: "6504",
            price: 41.45,
            change: -1.98,
            changePercent: 2.25
      },
      {
            id: "6505",
            name: "台塑化",
            symbol: "6505",
            price: 54.9,
            change: 0.66,
            changePercent: -0.62
      },
      {
            id: "6515",
            name: "穎崴",
            symbol: "6515",
            price: 10305,
            change: 1.15,
            changePercent: -2.2
      },
      {
            id: "6525",
            name: "捷敏-KY",
            symbol: "6525",
            price: 90.5,
            change: -0.36,
            changePercent: -0.11
      },
      {
            id: "6526",
            name: "達發",
            symbol: "6526",
            price: 506,
            change: 0.9,
            changePercent: 2.23
      },
      {
            id: "6531",
            name: "愛普*",
            symbol: "6531",
            price: 644,
            change: -1.86,
            changePercent: 1.84
      },
      {
            id: "6533",
            name: "晶心科",
            symbol: "6533",
            price: 235,
            change: -1.29,
            changePercent: -0.01
      },
      {
            id: "6534",
            name: "正瀚-創",
            symbol: "6534",
            price: 99.6,
            change: 1.98,
            changePercent: 1.02
      },
      {
            id: "6541",
            name: "泰福-KY",
            symbol: "6541",
            price: 41,
            change: 1,
            changePercent: 1.69
      },
      {
            id: "6550",
            name: "北極星藥業-KY",
            symbol: "6550",
            price: 18.8,
            change: 1.95,
            changePercent: 1.06
      },
      {
            id: "6552",
            name: "易華電",
            symbol: "6552",
            price: 27.6,
            change: -1.78,
            changePercent: 0.74
      },
      {
            id: "6558",
            name: "興能高",
            symbol: "6558",
            price: 30,
            change: -1.41,
            changePercent: -1.25
      },
      {
            id: "6573",
            name: "虹揚-KY",
            symbol: "6573",
            price: 12.5,
            change: -1.51,
            changePercent: 2.22
      },
      {
            id: "6579",
            name: "研揚",
            symbol: "6579",
            price: 118,
            change: 1.81,
            changePercent: 2.05
      },
      {
            id: "6581",
            name: "鋼聯",
            symbol: "6581",
            price: 107.5,
            change: -2.29,
            changePercent: -1.82
      },
      {
            id: "6582",
            name: "申豐",
            symbol: "6582",
            price: 32.25,
            change: -1.51,
            changePercent: -2.03
      },
      {
            id: "6585",
            name: "鼎基",
            symbol: "6585",
            price: 88.8,
            change: 1.65,
            changePercent: 1.06
      },
      {
            id: "6589",
            name: "台康生技",
            symbol: "6589",
            price: 50.6,
            change: -0.29,
            changePercent: -0.27
      },
      {
            id: "6591",
            name: "動力-KY",
            symbol: "6591",
            price: 58.9,
            change: 1.69,
            changePercent: 1.45
      },
      {
            id: "6592",
            name: "和潤企業",
            symbol: "6592",
            price: 64.5,
            change: -1.46,
            changePercent: 0.41
      },
      {
            id: "6598",
            name: "ABC-KY",
            symbol: "6598",
            price: 22.8,
            change: -2.47,
            changePercent: 1.52
      },
      {
            id: "6605",
            name: "帝寶",
            symbol: "6605",
            price: 129.5,
            change: 0.19,
            changePercent: 0.99
      },
      {
            id: "6606",
            name: "建德工業",
            symbol: "6606",
            price: 24.6,
            change: -0.38,
            changePercent: -2.05
      },
      {
            id: "6614",
            name: "資拓宏宇",
            symbol: "6614",
            price: 41,
            change: -0.91,
            changePercent: -1.02
      },
      {
            id: "6625",
            name: "必應",
            symbol: "6625",
            price: 76.6,
            change: 0.91,
            changePercent: 1.3
      },
      {
            id: "6641",
            name: "基士德-KY",
            symbol: "6641",
            price: 18.45,
            change: 2.43,
            changePercent: 1.84
      },
      {
            id: "6645",
            name: "金萬林-創",
            symbol: "6645",
            price: 13.25,
            change: 0.03,
            changePercent: 2.08
      },
      {
            id: "6655",
            name: "科定",
            symbol: "6655",
            price: 136.5,
            change: -0.23,
            changePercent: 2.29
      },
      {
            id: "6657",
            name: "華安",
            symbol: "6657",
            price: 46.2,
            change: -1,
            changePercent: 0.13
      },
      {
            id: "6658",
            name: "聯策",
            symbol: "6658",
            price: 79.8,
            change: 0.13,
            changePercent: 2.5
      },
      {
            id: "6666",
            name: "羅麗芬-KY",
            symbol: "6666",
            price: 41.6,
            change: 0.51,
            changePercent: -2.02
      },
      {
            id: "6668",
            name: "中揚光",
            symbol: "6668",
            price: 38.6,
            change: -0.18,
            changePercent: -1.78
      },
      {
            id: "6669",
            name: "緯穎",
            symbol: "6669",
            price: 3805,
            change: -0.8,
            changePercent: 1.51
      },
      {
            id: "6670",
            name: "復盛應用",
            symbol: "6670",
            price: 260,
            change: -2.34,
            changePercent: -0.16
      },
      {
            id: "6671",
            name: "三能-KY",
            symbol: "6671",
            price: 32.45,
            change: -2.2,
            changePercent: -0.16
      },
      {
            id: "6672",
            name: "騰輝電子-KY",
            symbol: "6672",
            price: 176,
            change: 0.65,
            changePercent: 0.91
      },
      {
            id: "6674",
            name: "鋐寶科技",
            symbol: "6674",
            price: 19,
            change: -1.61,
            changePercent: 2.2
      },
      {
            id: "6689",
            name: "伊雲谷",
            symbol: "6689",
            price: 71.1,
            change: 1.55,
            changePercent: -0.64
      },
      {
            id: "6691",
            name: "洋基工程",
            symbol: "6691",
            price: 659,
            change: 0.48,
            changePercent: -0.13
      },
      {
            id: "6695",
            name: "芯鼎",
            symbol: "6695",
            price: 40.4,
            change: -0.54,
            changePercent: 1.62
      },
      {
            id: "6698",
            name: "旭暉應材",
            symbol: "6698",
            price: 31.2,
            change: 1.99,
            changePercent: -1.47
      },
      {
            id: "6706",
            name: "惠特",
            symbol: "6706",
            price: 151.5,
            change: -0.31,
            changePercent: -0.61
      },
      {
            id: "6715",
            name: "嘉基",
            symbol: "6715",
            price: 426,
            change: -0.22,
            changePercent: 1.98
      },
      {
            id: "6719",
            name: "力智",
            symbol: "6719",
            price: 167.5,
            change: 0.39,
            changePercent: 1.73
      },
      {
            id: "6722",
            name: "輝創",
            symbol: "6722",
            price: 40,
            change: 0.73,
            changePercent: -1.36
      },
      {
            id: "6742",
            name: "澤米",
            symbol: "6742",
            price: 43.5,
            change: -0.02,
            changePercent: 0.12
      },
      {
            id: "6743",
            name: "安普新",
            symbol: "6743",
            price: 22.9,
            change: 0.25,
            changePercent: -0.92
      },
      {
            id: "6753",
            name: "龍德造船",
            symbol: "6753",
            price: 138.5,
            change: 1.27,
            changePercent: -0.91
      },
      {
            id: "6754",
            name: "匯僑設計",
            symbol: "6754",
            price: 47,
            change: -0.7,
            changePercent: 0.84
      },
      {
            id: "6756",
            name: "威鋒電子",
            symbol: "6756",
            price: 76.1,
            change: -1.57,
            changePercent: -0.27
      },
      {
            id: "6757",
            name: "台灣虎航",
            symbol: "6757",
            price: 49.6,
            change: -2.42,
            changePercent: 0.18
      },
      {
            id: "6768",
            name: "志強-KY",
            symbol: "6768",
            price: 85.4,
            change: 1.5,
            changePercent: -0.91
      },
      {
            id: "6770",
            name: "力積電",
            symbol: "6770",
            price: 52.6,
            change: 2.32,
            changePercent: -1.54
      },
      {
            id: "6771",
            name: "平和環保-創",
            symbol: "6771",
            price: 45.3,
            change: -1.48,
            changePercent: -2.33
      },
      {
            id: "6776",
            name: "展碁國際",
            symbol: "6776",
            price: 60.2,
            change: 1.17,
            changePercent: -0.15
      },
      {
            id: "6781",
            name: "AES-KY",
            symbol: "6781",
            price: 1040,
            change: -2.14,
            changePercent: -0.28
      },
      {
            id: "6782",
            name: "視陽",
            symbol: "6782",
            price: 235,
            change: 2.34,
            changePercent: 0.89
      },
      {
            id: "6789",
            name: "采鈺",
            symbol: "6789",
            price: 430,
            change: -1.27,
            changePercent: 1.1
      },
      {
            id: "6790",
            name: "永豐實",
            symbol: "6790",
            price: 40.2,
            change: 2.35,
            changePercent: 1.05
      },
      {
            id: "6792",
            name: "詠業",
            symbol: "6792",
            price: 61.2,
            change: -0.33,
            changePercent: 0.09
      },
      {
            id: "6794",
            name: "向榮生技",
            symbol: "6794",
            price: 81.2,
            change: -1.03,
            changePercent: -2.04
      },
      {
            id: "6796",
            name: "晉弘",
            symbol: "6796",
            price: 75.5,
            change: -1.01,
            changePercent: -1.89
      },
      {
            id: "6799",
            name: "來頡",
            symbol: "6799",
            price: 80.2,
            change: -0.87,
            changePercent: -1.08
      },
      {
            id: "6805",
            name: "富世達",
            symbol: "6805",
            price: 1870,
            change: -2.35,
            changePercent: -2.14
      },
      {
            id: "6806",
            name: "森崴能源",
            symbol: "6806",
            price: 24.65,
            change: 0.41,
            changePercent: 1.55
      },
      {
            id: "6807",
            name: "峰源-KY",
            symbol: "6807",
            price: 38.6,
            change: 1.03,
            changePercent: 0.21
      },
      {
            id: "6830",
            name: "汎銓",
            symbol: "6830",
            price: 885,
            change: -1.65,
            changePercent: -0.51
      },
      {
            id: "6831",
            name: "邁科",
            symbol: "6831",
            price: 475,
            change: 0.8,
            changePercent: 0.7
      },
      {
            id: "6834",
            name: "天二科技",
            symbol: "6834",
            price: 37.3,
            change: 2.22,
            changePercent: 2.04
      },
      {
            id: "6835",
            name: "圓裕",
            symbol: "6835",
            price: 38.35,
            change: 2.41,
            changePercent: -0.88
      },
      {
            id: "6838",
            name: "台新藥",
            symbol: "6838",
            price: 30.5,
            change: 1.99,
            changePercent: 1.85
      },
      {
            id: "6854",
            name: "錼創科技-KY創",
            symbol: "6854",
            price: 167.5,
            change: 2.45,
            changePercent: -0.13
      },
      {
            id: "6861",
            name: "睿生光電",
            symbol: "6861",
            price: 161.5,
            change: -0.5,
            changePercent: -0.99
      },
      {
            id: "6862",
            name: "三集瑞-KY",
            symbol: "6862",
            price: 188.5,
            change: -0.63,
            changePercent: 1.2
      },
      {
            id: "6863",
            name: "永道-KY",
            symbol: "6863",
            price: 99,
            change: 0.39,
            changePercent: 2.28
      },
      {
            id: "6869",
            name: "雲豹能源",
            symbol: "6869",
            price: 87.2,
            change: 1.75,
            changePercent: -1.04
      },
      {
            id: "6873",
            name: "泓德能源",
            symbol: "6873",
            price: 90.6,
            change: 0.6,
            changePercent: 1.98
      },
      {
            id: "6885",
            name: "全福生技",
            symbol: "6885",
            price: 23.95,
            change: -1.79,
            changePercent: -0.9
      },
      {
            id: "6887",
            name: "寶綠特-KY",
            symbol: "6887",
            price: 42.05,
            change: 2.26,
            changePercent: 1.69
      },
      {
            id: "6890",
            name: "來億-KY",
            symbol: "6890",
            price: 175.5,
            change: -1.25,
            changePercent: -2.17
      },
      {
            id: "6901",
            name: "鑽石投資",
            symbol: "6901",
            price: 14.5,
            change: -1.49,
            changePercent: 0.08
      },
      {
            id: "6902",
            name: "GOGOLOOK",
            symbol: "6902",
            price: 99.1,
            change: -1.82,
            changePercent: -1.39
      },
      {
            id: "6906",
            name: "現觀科",
            symbol: "6906",
            price: 67.5,
            change: -1.83,
            changePercent: 0.23
      },
      {
            id: "6908",
            name: "宏碁遊戲-創",
            symbol: "6908",
            price: 41.55,
            change: 2.14,
            changePercent: 0.3
      },
      {
            id: "6909",
            name: "創控",
            symbol: "6909",
            price: 64.9,
            change: 1.74,
            changePercent: 2.1
      },
      {
            id: "6914",
            name: "阜爾運通",
            symbol: "6914",
            price: 151.5,
            change: -1.12,
            changePercent: 1.75
      },
      {
            id: "6916",
            name: "華凌",
            symbol: "6916",
            price: 18.9,
            change: 0.08,
            changePercent: 2.35
      },
      {
            id: "6918",
            name: "愛派司",
            symbol: "6918",
            price: 74,
            change: -0.28,
            changePercent: 1.55
      },
      {
            id: "6919",
            name: "康霈*",
            symbol: "6919",
            price: 108,
            change: 1.89,
            changePercent: -0.13
      },
      {
            id: "6921",
            name: "嘉雨思-創",
            symbol: "6921",
            price: 86.2,
            change: 0.79,
            changePercent: 1.18
      },
      {
            id: "6923",
            name: "中台",
            symbol: "6923",
            price: 82.8,
            change: -0.45,
            changePercent: 2.24
      },
      {
            id: "6924",
            name: "榮惠-KY創",
            symbol: "6924",
            price: 89,
            change: -1.66,
            changePercent: 1.65
      },
      {
            id: "6928",
            name: "攸泰科技",
            symbol: "6928",
            price: 48.8,
            change: 1.87,
            changePercent: -0.32
      },
      {
            id: "6931",
            name: "青松健康",
            symbol: "6931",
            price: 50.3,
            change: -0.67,
            changePercent: -1.19
      },
      {
            id: "6933",
            name: "AMAX-KY",
            symbol: "6933",
            price: 196,
            change: -1.84,
            changePercent: 2.38
      },
      {
            id: "6934",
            name: "心誠鎂",
            symbol: "6934",
            price: 89.2,
            change: 1.61,
            changePercent: 2.05
      },
      {
            id: "6936",
            name: "永鴻生技",
            symbol: "6936",
            price: 35.7,
            change: -0.21,
            changePercent: 1.66
      },
      {
            id: "6937",
            name: "天虹",
            symbol: "6937",
            price: 306,
            change: -0.16,
            changePercent: -0.07
      },
      {
            id: "6944",
            name: "兆聯實業",
            symbol: "6944",
            price: 917,
            change: -1.25,
            changePercent: 0.27
      },
      {
            id: "6949",
            name: "沛爾生醫-創",
            symbol: "6949",
            price: 770,
            change: -2.05,
            changePercent: -1.38
      },
      {
            id: "6951",
            name: "青新-創",
            symbol: "6951",
            price: 82.1,
            change: 1.49,
            changePercent: 0.51
      },
      {
            id: "6952",
            name: "大武山",
            symbol: "6952",
            price: 40.5,
            change: 0.05,
            changePercent: 2.33
      },
      {
            id: "6955",
            name: "邦睿生技-創",
            symbol: "6955",
            price: 165,
            change: 1.6,
            changePercent: -0.94
      },
      {
            id: "6957",
            name: "裕慶-KY",
            symbol: "6957",
            price: 163.5,
            change: -1.5,
            changePercent: 0.08
      },
      {
            id: "6958",
            name: "日盛台駿",
            symbol: "6958",
            price: 19.9,
            change: -1.56,
            changePercent: -0.65
      },
      {
            id: "6962",
            name: "奕力-KY",
            symbol: "6962",
            price: 35,
            change: -1.73,
            changePercent: -0.35
      },
      {
            id: "6965",
            name: "中傑-KY",
            symbol: "6965",
            price: 89.7,
            change: 1.83,
            changePercent: 0.56
      },
      {
            id: "6969",
            name: "成信實業*-創",
            symbol: "6969",
            price: 29.8,
            change: 2.05,
            changePercent: 0.68
      },
      {
            id: "6988",
            name: "威力暘-創",
            symbol: "6988",
            price: 14.85,
            change: 2.28,
            changePercent: -0.94
      },
      {
            id: "6994",
            name: "富威電力",
            symbol: "6994",
            price: 73.4,
            change: -1.82,
            changePercent: 0.55
      },
      {
            id: "7610",
            name: "聯友金屬-創",
            symbol: "7610",
            price: 638,
            change: -1.14,
            changePercent: 0.86
      },
      {
            id: "7631",
            name: "聚賢研發-創",
            symbol: "7631",
            price: 137,
            change: -1.93,
            changePercent: 1.73
      },
      {
            id: "7705",
            name: "三商餐飲",
            symbol: "7705",
            price: 34.8,
            change: -2.3,
            changePercent: -0.46
      },
      {
            id: "7711",
            name: "永擎",
            symbol: "7711",
            price: 301,
            change: -1.09,
            changePercent: -2.2
      },
      {
            id: "7721",
            name: "微程式",
            symbol: "7721",
            price: 87.5,
            change: -1.81,
            changePercent: 1.25
      },
      {
            id: "7722",
            name: "LINEPAY",
            symbol: "7722",
            price: 305,
            change: 2.04,
            changePercent: -1.73
      },
      {
            id: "7730",
            name: "暉盛-創",
            symbol: "7730",
            price: 172.5,
            change: -1.33,
            changePercent: -1.36
      },
      {
            id: "7732",
            name: "金興精密",
            symbol: "7732",
            price: 35,
            change: 0.37,
            changePercent: 0.63
      },
      {
            id: "7736",
            name: "虎山",
            symbol: "7736",
            price: 80.1,
            change: 1.27,
            changePercent: 0.51
      },
      {
            id: "7740",
            name: "熙特爾-創",
            symbol: "7740",
            price: 178,
            change: 0.2,
            changePercent: 1.34
      },
      {
            id: "7749",
            name: "意騰-KY",
            symbol: "7749",
            price: 411.5,
            change: -2.4,
            changePercent: 1.07
      },
      {
            id: "7750",
            name: "新代",
            symbol: "7750",
            price: 1810,
            change: 2.38,
            changePercent: 2.4
      },
      {
            id: "7765",
            name: "中華資安",
            symbol: "7765",
            price: 232,
            change: -2.44,
            changePercent: 2.22
      },
      {
            id: "7769",
            name: "鴻勁",
            symbol: "7769",
            price: 4500,
            change: -0.6,
            changePercent: -0.95
      },
      {
            id: "7780",
            name: "大研生醫*",
            symbol: "7780",
            price: 20.35,
            change: -0.99,
            changePercent: 1.15
      },
      {
            id: "7786",
            name: "東方風能",
            symbol: "7786",
            price: 138,
            change: 0.01,
            changePercent: 2.16
      },
      {
            id: "7788",
            name: "松川精密",
            symbol: "7788",
            price: 163,
            change: 0.79,
            changePercent: -1.15
      },
      {
            id: "7791",
            name: "皇家可口",
            symbol: "7791",
            price: 66.2,
            change: -0.27,
            changePercent: 1.46
      },
      {
            id: "7795",
            name: "長廣",
            symbol: "7795",
            price: 399.5,
            change: -0.7,
            changePercent: -1.34
      },
      {
            id: "7799",
            name: "禾榮科",
            symbol: "7799",
            price: 388.5,
            change: -2.41,
            changePercent: -0.95
      },
      {
            id: "7821",
            name: "神數",
            symbol: "7821",
            price: 38.5,
            change: 0.1,
            changePercent: 1.38
      },
      {
            id: "7822",
            name: "倍利科",
            symbol: "7822",
            price: 1575,
            change: -0.53,
            changePercent: 1.74
      },
      {
            id: "7823",
            name: "奧義賽博-KY創",
            symbol: "7823",
            price: 79.6,
            change: 1.25,
            changePercent: -1.02
      },
      {
            id: "8011",
            name: "台通",
            symbol: "8011",
            price: 20.25,
            change: -1.85,
            changePercent: -0.43
      },
      {
            id: "8016",
            name: "矽創",
            symbol: "8016",
            price: 215,
            change: -2.32,
            changePercent: 1.32
      },
      {
            id: "8021",
            name: "尖點",
            symbol: "8021",
            price: 390.5,
            change: -0.77,
            changePercent: -2.42
      },
      {
            id: "8028",
            name: "昇陽半導體",
            symbol: "8028",
            price: 187,
            change: 1.65,
            changePercent: -2.01
      },
      {
            id: "8033",
            name: "雷虎",
            symbol: "8033",
            price: 148,
            change: -1.45,
            changePercent: 1.65
      },
      {
            id: "8039",
            name: "台虹",
            symbol: "8039",
            price: 143.5,
            change: -0.11,
            changePercent: 1.71
      },
      {
            id: "8045",
            name: "達運光電",
            symbol: "8045",
            price: 73.5,
            change: 0.75,
            changePercent: -0.74
      },
      {
            id: "8046",
            name: "南電",
            symbol: "8046",
            price: 724,
            change: -1.67,
            changePercent: -2.4
      },
      {
            id: "8070",
            name: "長華*",
            symbol: "8070",
            price: 48.3,
            change: -2.5,
            changePercent: 1.58
      },
      {
            id: "8072",
            name: "陞泰",
            symbol: "8072",
            price: 29.6,
            change: 2.21,
            changePercent: 1.29
      },
      {
            id: "8081",
            name: "致新",
            symbol: "8081",
            price: 241,
            change: 0.5,
            changePercent: -0.54
      },
      {
            id: "8101",
            name: "華冠",
            symbol: "8101",
            price: 14.25,
            change: 0.75,
            changePercent: 1.95
      },
      {
            id: "8103",
            name: "瀚荃",
            symbol: "8103",
            price: 93.1,
            change: -0.67,
            changePercent: -0.61
      },
      {
            id: "8104",
            name: "錸寶",
            symbol: "8104",
            price: 40,
            change: -1.87,
            changePercent: -2.32
      },
      {
            id: "8105",
            name: "凌巨",
            symbol: "8105",
            price: 13.95,
            change: -1.43,
            changePercent: -0.57
      },
      {
            id: "8110",
            name: "華東",
            symbol: "8110",
            price: 48.3,
            change: 0.66,
            changePercent: 1.48
      },
      {
            id: "8112",
            name: "至上",
            symbol: "8112",
            price: 87.2,
            change: -0.72,
            changePercent: -0.81
      },
      {
            id: "8114",
            name: "振樺電",
            symbol: "8114",
            price: 174,
            change: -1.28,
            changePercent: 0.11
      },
      {
            id: "8131",
            name: "福懋科",
            symbol: "8131",
            price: 60.7,
            change: -1.5,
            changePercent: -1.3
      },
      {
            id: "8150",
            name: "南茂",
            symbol: "8150",
            price: 67.3,
            change: -0.19,
            changePercent: 2.08
      },
      {
            id: "8162",
            name: "微矽電子-創",
            symbol: "8162",
            price: 43.15,
            change: -2.17,
            changePercent: 0.51
      },
      {
            id: "8163",
            name: "達方",
            symbol: "8163",
            price: 28.15,
            change: 1.53,
            changePercent: 1.3
      },
      {
            id: "8201",
            name: "無敵",
            symbol: "8201",
            price: 13.3,
            change: 0.41,
            changePercent: -0.63
      },
      {
            id: "8210",
            name: "勤誠",
            symbol: "8210",
            price: 1020,
            change: -2.41,
            changePercent: 0.58
      },
      {
            id: "8213",
            name: "志超",
            symbol: "8213",
            price: 36.6,
            change: -1.27,
            changePercent: 0.49
      },
      {
            id: "8215",
            name: "明基材",
            symbol: "8215",
            price: 29.25,
            change: -2.5,
            changePercent: -1.42
      },
      {
            id: "8222",
            name: "寶一",
            symbol: "8222",
            price: 37.85,
            change: -1.14,
            changePercent: -0.5
      },
      {
            id: "8249",
            name: "菱光",
            symbol: "8249",
            price: 50.2,
            change: -1.07,
            changePercent: 2.18
      },
      {
            id: "8261",
            name: "富鼎",
            symbol: "8261",
            price: 127.5,
            change: 1.17,
            changePercent: 0.72
      },
      {
            id: "8271",
            name: "宇瞻",
            symbol: "8271",
            price: 179.5,
            change: 1.1,
            changePercent: 1.58
      },
      {
            id: "8341",
            name: "日友",
            symbol: "8341",
            price: 76.3,
            change: -0.94,
            changePercent: -0.52
      },
      {
            id: "8367",
            name: "建新國際",
            symbol: "8367",
            price: 43.7,
            change: -1.33,
            changePercent: -0.25
      },
      {
            id: "8374",
            name: "羅昇",
            symbol: "8374",
            price: 81.6,
            change: 1.61,
            changePercent: -0.33
      },
      {
            id: "8404",
            name: "百和興業-KY",
            symbol: "8404",
            price: 17.95,
            change: -0.85,
            changePercent: -1.86
      },
      {
            id: "8411",
            name: "福貞-KY",
            symbol: "8411",
            price: 12.35,
            change: -1.14,
            changePercent: 0.86
      },
      {
            id: "8422",
            name: "可寧衛*",
            symbol: "8422",
            price: 29.45,
            change: -0.57,
            changePercent: 0.68
      },
      {
            id: "8429",
            name: "金麗-KY",
            symbol: "8429",
            price: 6.87,
            change: -2.02,
            changePercent: -0.04
      },
      {
            id: "8438",
            name: "昶昕",
            symbol: "8438",
            price: 88.3,
            change: -1.84,
            changePercent: -0.17
      },
      {
            id: "8442",
            name: "威宏-KY",
            symbol: "8442",
            price: 52.2,
            change: -0.65,
            changePercent: 0.52
      },
      {
            id: "8443",
            name: "阿瘦",
            symbol: "8443",
            price: 12.05,
            change: 0.46,
            changePercent: -0.37
      },
      {
            id: "8454",
            name: "富邦媒",
            symbol: "8454",
            price: 175.5,
            change: -1.78,
            changePercent: -2.16
      },
      {
            id: "8462",
            name: "柏文",
            symbol: "8462",
            price: 142,
            change: 0.35,
            changePercent: -0.81
      },
      {
            id: "8463",
            name: "潤泰材",
            symbol: "8463",
            price: 23.1,
            change: 1.48,
            changePercent: 0.42
      },
      {
            id: "8464",
            name: "億豐",
            symbol: "8464",
            price: 368.5,
            change: 0.17,
            changePercent: 1.8
      },
      {
            id: "8466",
            name: "美吉吉-KY",
            symbol: "8466",
            price: 17.75,
            change: -0.9,
            changePercent: -1.64
      },
      {
            id: "8467",
            name: "波力-KY",
            symbol: "8467",
            price: 155,
            change: 1.84,
            changePercent: -2.17
      },
      {
            id: "8473",
            name: "山林水",
            symbol: "8473",
            price: 37.4,
            change: -0.72,
            changePercent: -0.04
      },
      {
            id: "8476",
            name: "台境*",
            symbol: "8476",
            price: 18.2,
            change: 1.88,
            changePercent: -0.19
      },
      {
            id: "8478",
            name: "東哥遊艇",
            symbol: "8478",
            price: 171.5,
            change: 2.35,
            changePercent: 0.85
      },
      {
            id: "8481",
            name: "政伸",
            symbol: "8481",
            price: 42.1,
            change: -1.82,
            changePercent: -0.59
      },
      {
            id: "8482",
            name: "商億-KY",
            symbol: "8482",
            price: 49.8,
            change: -0.57,
            changePercent: 0.65
      },
      {
            id: "8487",
            name: "愛爾達-創",
            symbol: "8487",
            price: 79.4,
            change: 2.1,
            changePercent: -0.2
      },
      {
            id: "8488",
            name: "吉源-KY",
            symbol: "8488",
            price: 10.5,
            change: 0.04,
            changePercent: -0.17
      },
      {
            id: "8499",
            name: "鼎炫-KY",
            symbol: "8499",
            price: 270,
            change: -0.67,
            changePercent: -0.84
      },
      {
            id: "8926",
            name: "台汽電",
            symbol: "8926",
            price: 45.2,
            change: -0.08,
            changePercent: -1.22
      },
      {
            id: "8940",
            name: "新天地",
            symbol: "8940",
            price: 18,
            change: 0.51,
            changePercent: 0.86
      },
      {
            id: "8996",
            name: "高力",
            symbol: "8996",
            price: 1220,
            change: -0.98,
            changePercent: -0.01
      },
      {
            id: "9103",
            name: "美德醫療-DR",
            symbol: "9103",
            price: 4.93,
            change: -0.65,
            changePercent: 0.31
      },
      {
            id: "9105",
            name: "泰金寶-DR",
            symbol: "9105",
            price: 5.6,
            change: -0.99,
            changePercent: -0.53
      },
      {
            id: "9110",
            name: "越南控-DR",
            symbol: "9110",
            price: 3.1,
            change: 2.4,
            changePercent: 1.11
      },
      {
            id: "9136",
            name: "巨騰-DR",
            symbol: "9136",
            price: 10.15,
            change: -0.82,
            changePercent: 1.34
      },
      {
            id: "9802",
            name: "鈺齊-KY",
            symbol: "9802",
            price: 78.7,
            change: -1.28,
            changePercent: 0.67
      },
      {
            id: "9902",
            name: "台火",
            symbol: "9902",
            price: 14.8,
            change: 1.61,
            changePercent: -1.71
      },
      {
            id: "9904",
            name: "寶成",
            symbol: "9904",
            price: 27.9,
            change: 1.19,
            changePercent: 0.94
      },
      {
            id: "9905",
            name: "大華",
            symbol: "9905",
            price: 21.8,
            change: -0.68,
            changePercent: 2.2
      },
      {
            id: "9906",
            name: "欣巴巴",
            symbol: "9906",
            price: 41.6,
            change: -0.17,
            changePercent: 2.17
      },
      {
            id: "9907",
            name: "統一實",
            symbol: "9907",
            price: 18,
            change: 1.32,
            changePercent: -1.96
      },
      {
            id: "9908",
            name: "大台北",
            symbol: "9908",
            price: 29.85,
            change: -0.08,
            changePercent: 0.25
      },
      {
            id: "9910",
            name: "豐泰",
            symbol: "9910",
            price: 77.5,
            change: -0.39,
            changePercent: 1.39
      },
      {
            id: "9911",
            name: "櫻花",
            symbol: "9911",
            price: 83.8,
            change: 0.52,
            changePercent: 0.3
      },
      {
            id: "9912",
            name: "偉聯",
            symbol: "9912",
            price: 12.55,
            change: 0.19,
            changePercent: 0.4
      },
      {
            id: "9914",
            name: "美利達",
            symbol: "9914",
            price: 60.9,
            change: 0.82,
            changePercent: 0.71
      },
      {
            id: "9917",
            name: "中保科",
            symbol: "9917",
            price: 116.5,
            change: 1.43,
            changePercent: 0.64
      },
      {
            id: "9918",
            name: "欣天然",
            symbol: "9918",
            price: 43.6,
            change: 1.46,
            changePercent: -0.09
      },
      {
            id: "9919",
            name: "康那香",
            symbol: "9919",
            price: 14.8,
            change: -1.37,
            changePercent: 1.17
      },
      {
            id: "9921",
            name: "巨大",
            symbol: "9921",
            price: 69.2,
            change: 2.19,
            changePercent: 0.68
      },
      {
            id: "9924",
            name: "福興",
            symbol: "9924",
            price: 45.05,
            change: -1.96,
            changePercent: -2.4
      },
      {
            id: "9925",
            name: "新保",
            symbol: "9925",
            price: 40.75,
            change: -1.62,
            changePercent: -1.79
      },
      {
            id: "9926",
            name: "新海",
            symbol: "9926",
            price: 50,
            change: 0.27,
            changePercent: 1.23
      },
      {
            id: "9927",
            name: "泰銘",
            symbol: "9927",
            price: 70.5,
            change: -2.45,
            changePercent: 1.22
      },
      {
            id: "9928",
            name: "中視",
            symbol: "9928",
            price: 17.7,
            change: 2.45,
            changePercent: 1.32
      },
      {
            id: "9929",
            name: "秋雨",
            symbol: "9929",
            price: 12.7,
            change: 1.17,
            changePercent: -0.13
      },
      {
            id: "9930",
            name: "中聯資源",
            symbol: "9930",
            price: 71.1,
            change: 1.49,
            changePercent: 0.61
      },
      {
            id: "9931",
            name: "欣高",
            symbol: "9931",
            price: 36,
            change: -2.45,
            changePercent: 0.71
      },
      {
            id: "9933",
            name: "中鼎",
            symbol: "9933",
            price: 38.5,
            change: -1.53,
            changePercent: -0.65
      },
      {
            id: "9934",
            name: "成霖",
            symbol: "9934",
            price: 9.63,
            change: -0.83,
            changePercent: 2.29
      },
      {
            id: "9935",
            name: "慶豐富",
            symbol: "9935",
            price: 19.1,
            change: 0.01,
            changePercent: -0.43
      },
      {
            id: "9937",
            name: "全國",
            symbol: "9937",
            price: 57.5,
            change: -0.78,
            changePercent: -0.54
      },
      {
            id: "9938",
            name: "百和",
            symbol: "9938",
            price: 46.35,
            change: 1.32,
            changePercent: 1.26
      },
      {
            id: "9939",
            name: "宏全",
            symbol: "9939",
            price: 114.5,
            change: -0.49,
            changePercent: -0.19
      },
      {
            id: "9940",
            name: "信義",
            symbol: "9940",
            price: 20.1,
            change: -0.8,
            changePercent: -2.36
      },
      {
            id: "9941",
            name: "裕融",
            symbol: "9941",
            price: 78.3,
            change: 1.36,
            changePercent: -2.16
      },
      {
            id: "9942",
            name: "茂順",
            symbol: "9942",
            price: 117.5,
            change: -0.01,
            changePercent: -2.33
      },
      {
            id: "9943",
            name: "好樂迪",
            symbol: "9943",
            price: 57.1,
            change: -1.46,
            changePercent: 0.73
      },
      {
            id: "9944",
            name: "新麗",
            symbol: "9944",
            price: 16.7,
            change: -1.84,
            changePercent: -0.37
      },
      {
            id: "9945",
            name: "潤泰新",
            symbol: "9945",
            price: 24.65,
            change: -0.81,
            changePercent: -0.36
      },
      {
            id: "9946",
            name: "三發地產",
            symbol: "9946",
            price: 16.8,
            change: 0.57,
            changePercent: 1.4
      },
      {
            id: "9955",
            name: "佳龍",
            symbol: "9955",
            price: 31.1,
            change: -0.38,
            changePercent: 0.82
      },
      {
            id: "9958",
            name: "世紀鋼",
            symbol: "9958",
            price: 106,
            change: 1.46,
            changePercent: -2.48
      }
]
  },
  {
    id: "otc-market",
    name: "台灣上櫃企業 (OTC)",
    macroCategory: '新創與環境',
    description: "證券櫃檯買賣中心掛牌之上櫃企業，總計約 882 檔。包含眾多中小型高成長潛力股與生技新星。",
    icon: "Activity",
    marketCap: "NT$ 6+ 兆",
    topStocks: [
      {
            id: "1240",
            name: "茂生農經",
            symbol: "1240",
            price: 59.7,
            change: -1.54,
            changePercent: 1.38
      },
      {
            id: "1259",
            name: "安心",
            symbol: "1259",
            price: 59.5,
            change: 0.28,
            changePercent: -1.55
      },
      {
            id: "1264",
            name: "德麥",
            symbol: "1264",
            price: 278,
            change: -1.93,
            changePercent: -2.27
      },
      {
            id: "1268",
            name: "漢來美食",
            symbol: "1268",
            price: 157.5,
            change: 0.49,
            changePercent: 1.74
      },
      {
            id: "1294",
            name: "漢田生技",
            symbol: "1294",
            price: 82.7,
            change: 2.21,
            changePercent: -2.36
      },
      {
            id: "1295",
            name: "生合",
            symbol: "1295",
            price: 59.3,
            change: -1.89,
            changePercent: -0.25
      },
      {
            id: "1336",
            name: "台翰",
            symbol: "1336",
            price: 14.15,
            change: 2.17,
            changePercent: -0.24
      },
      {
            id: "1565",
            name: "精華",
            symbol: "1565",
            price: 108.5,
            change: 0.75,
            changePercent: 1.41
      },
      {
            id: "1569",
            name: "濱川",
            symbol: "1569",
            price: 52.5,
            change: 1.88,
            changePercent: -0.78
      },
      {
            id: "1570",
            name: "力肯",
            symbol: "1570",
            price: 32.8,
            change: -1.69,
            changePercent: -2.35
      },
      {
            id: "1580",
            name: "新麥",
            symbol: "1580",
            price: 126,
            change: 1.75,
            changePercent: -0.38
      },
      {
            id: "1584",
            name: "精剛",
            symbol: "1584",
            price: 21.15,
            change: -1.18,
            changePercent: -0.07
      },
      {
            id: "1586",
            name: "和勤",
            symbol: "1586",
            price: 22.75,
            change: 2.3,
            changePercent: -1.49
      },
      {
            id: "1591",
            name: "駿吉-KY",
            symbol: "1591",
            price: 57.7,
            change: 0.75,
            changePercent: 0.12
      },
      {
            id: "1593",
            name: "祺驊",
            symbol: "1593",
            price: 33.4,
            change: 1.61,
            changePercent: 0.23
      },
      {
            id: "1595",
            name: "川寶",
            symbol: "1595",
            price: 52.5,
            change: 0.21,
            changePercent: 0.58
      },
      {
            id: "1599",
            name: "宏佳騰",
            symbol: "1599",
            price: 25.4,
            change: 0.78,
            changePercent: -0.97
      },
      {
            id: "1742",
            name: "台蠟",
            symbol: "1742",
            price: 15.85,
            change: -1.64,
            changePercent: 1.91
      },
      {
            id: "1777",
            name: "生泰",
            symbol: "1777",
            price: 72.1,
            change: 1.96,
            changePercent: -0.11
      },
      {
            id: "1781",
            name: "合世",
            symbol: "1781",
            price: 11.5,
            change: 0.17,
            changePercent: -0.12
      },
      {
            id: "1784",
            name: "訊聯",
            symbol: "1784",
            price: 80.2,
            change: 1.75,
            changePercent: -0.84
      },
      {
            id: "1785",
            name: "光洋科",
            symbol: "1785",
            price: 156,
            change: 0.34,
            changePercent: -0.77
      },
      {
            id: "1788",
            name: "杏昌",
            symbol: "1788",
            price: 136,
            change: 0.3,
            changePercent: 1.04
      },
      {
            id: "1796",
            name: "金穎生技",
            symbol: "1796",
            price: 39.55,
            change: -1.89,
            changePercent: 0.72
      },
      {
            id: "1799",
            name: "易威",
            symbol: "1799",
            price: 43.5,
            change: 1.84,
            changePercent: -2.1
      },
      {
            id: "1813",
            name: "寶利徠",
            symbol: "1813",
            price: 13.4,
            change: 2.16,
            changePercent: -0.24
      },
      {
            id: "1815",
            name: "富喬",
            symbol: "1815",
            price: 127,
            change: 2.38,
            changePercent: -1.13
      },
      {
            id: "2035",
            name: "唐榮",
            symbol: "2035",
            price: 28.3,
            change: 1.5,
            changePercent: -1.44
      },
      {
            id: "2061",
            name: "風青",
            symbol: "2061",
            price: 16.1,
            change: -0.1,
            changePercent: 0.99
      },
      {
            id: "2063",
            name: "世鎧",
            symbol: "2063",
            price: 27.2,
            change: -0.57,
            changePercent: 1.35
      },
      {
            id: "2064",
            name: "晉椿",
            symbol: "2064",
            price: 11.75,
            change: -1.38,
            changePercent: 0.63
      },
      {
            id: "2065",
            name: "世豐",
            symbol: "2065",
            price: 30.75,
            change: -0.72,
            changePercent: 0.87
      },
      {
            id: "2066",
            name: "世德",
            symbol: "2066",
            price: 46.3,
            change: -1.68,
            changePercent: -0.12
      },
      {
            id: "2067",
            name: "嘉鋼",
            symbol: "2067",
            price: 7.21,
            change: 1.02,
            changePercent: -0.87
      },
      {
            id: "2070",
            name: "精湛",
            symbol: "2070",
            price: 45.65,
            change: 1.35,
            changePercent: 0.79
      },
      {
            id: "2073",
            name: "雄順",
            symbol: "2073",
            price: 26.9,
            change: -0.92,
            changePercent: 1.38
      },
      {
            id: "2221",
            name: "大甲",
            symbol: "2221",
            price: 32.15,
            change: 1.27,
            changePercent: -1.07
      },
      {
            id: "2230",
            name: "泰茂",
            symbol: "2230",
            price: 30.25,
            change: 1.61,
            changePercent: -2.02
      },
      {
            id: "2235",
            name: "謚源",
            symbol: "2235",
            price: 32.55,
            change: 1.28,
            changePercent: 1.93
      },
      {
            id: "2596",
            name: "綠意",
            symbol: "2596",
            price: 32.3,
            change: -1.65,
            changePercent: 1.82
      },
      {
            id: "2640",
            name: "大車隊",
            symbol: "2640",
            price: 187,
            change: 0.11,
            changePercent: 2.31
      },
      {
            id: "2641",
            name: "正德",
            symbol: "2641",
            price: 18.2,
            change: -0.36,
            changePercent: -1.07
      },
      {
            id: "2643",
            name: "捷迅",
            symbol: "2643",
            price: 68.4,
            change: 1.01,
            changePercent: 0.97
      },
      {
            id: "2718",
            name: "全心投控",
            symbol: "2718",
            price: 47.7,
            change: 1.9,
            changePercent: 1.52
      },
      {
            id: "2719",
            name: "燦星旅",
            symbol: "2719",
            price: 29.75,
            change: 0.53,
            changePercent: -0.21
      },
      {
            id: "2724",
            name: "藝舍-KY",
            symbol: "2724",
            price: 17.45,
            change: -1.55,
            changePercent: 1.6
      },
      {
            id: "2726",
            name: "雅茗-KY",
            symbol: "2726",
            price: 9.9,
            change: -1.14,
            changePercent: 0.15
      },
      {
            id: "2729",
            name: "瓦城",
            symbol: "2729",
            price: 172,
            change: 1.17,
            changePercent: -1.08
      },
      {
            id: "2732",
            name: "六角",
            symbol: "2732",
            price: 68.3,
            change: 0.52,
            changePercent: -0.45
      },
      {
            id: "2734",
            name: "易飛網",
            symbol: "2734",
            price: 17.3,
            change: 1.84,
            changePercent: -0.51
      },
      {
            id: "2736",
            name: "富野",
            symbol: "2736",
            price: 13.75,
            change: 0.47,
            changePercent: -1.49
      },
      {
            id: "2740",
            name: "華軒",
            symbol: "2740",
            price: 38.5,
            change: 0.57,
            changePercent: -0.85
      },
      {
            id: "2743",
            name: "山富",
            symbol: "2743",
            price: 72.9,
            change: 2.03,
            changePercent: -2.41
      },
      {
            id: "2745",
            name: "五福",
            symbol: "2745",
            price: 104.5,
            change: -0.98,
            changePercent: 1.8
      },
      {
            id: "2751",
            name: "王座",
            symbol: "2751",
            price: 57,
            change: -1.35,
            changePercent: 0.35
      },
      {
            id: "2752",
            name: "豆府",
            symbol: "2752",
            price: 191.5,
            change: 0.69,
            changePercent: 2.45
      },
      {
            id: "2754",
            name: "亞洲藏壽司",
            symbol: "2754",
            price: 69.5,
            change: 0.73,
            changePercent: 0.52
      },
      {
            id: "2755",
            name: "揚秦",
            symbol: "2755",
            price: 139.5,
            change: 2.02,
            changePercent: -0.63
      },
      {
            id: "2756",
            name: "聯發國際",
            symbol: "2756",
            price: 70,
            change: 1.75,
            changePercent: 0.66
      },
      {
            id: "2916",
            name: "滿心",
            symbol: "2916",
            price: 46.3,
            change: -0.44,
            changePercent: 0.9
      },
      {
            id: "2924",
            name: "宏太-KY",
            symbol: "2924",
            price: 20.75,
            change: 2.19,
            changePercent: 1.14
      },
      {
            id: "2926",
            name: "誠品生活",
            symbol: "2926",
            price: 36.2,
            change: 1.22,
            changePercent: 1.9
      },
      {
            id: "2937",
            name: "集雅社",
            symbol: "2937",
            price: 45.1,
            change: 0.64,
            changePercent: 0.09
      },
      {
            id: "2941",
            name: "米斯特",
            symbol: "2941",
            price: 35.1,
            change: -1.35,
            changePercent: 1.48
      },
      {
            id: "2947",
            name: "振宇五金",
            symbol: "2947",
            price: 78,
            change: 1.96,
            changePercent: -1.41
      },
      {
            id: "2948",
            name: "寶陞",
            symbol: "2948",
            price: 39.1,
            change: 0.51,
            changePercent: -0.88
      },
      {
            id: "2949",
            name: "欣新網",
            symbol: "2949",
            price: 57.5,
            change: -0.5,
            changePercent: 0.86
      },
      {
            id: "3064",
            name: "泰偉",
            symbol: "3064",
            price: 20.6,
            change: -0.23,
            changePercent: -0.92
      },
      {
            id: "3066",
            name: "李洲",
            symbol: "3066",
            price: 22.05,
            change: -0.14,
            changePercent: 0.36
      },
      {
            id: "3067",
            name: "全域",
            symbol: "3067",
            price: 18.6,
            change: 0.95,
            changePercent: 0.33
      },
      {
            id: "3071",
            name: "協禧",
            symbol: "3071",
            price: 30.15,
            change: 0.17,
            changePercent: -1.06
      },
      {
            id: "3073",
            name: "天方能源",
            symbol: "3073",
            price: 27,
            change: -1.19,
            changePercent: 2.16
      },
      {
            id: "3078",
            name: "僑威",
            symbol: "3078",
            price: 57.4,
            change: 1.85,
            changePercent: -1.49
      },
      {
            id: "3081",
            name: "聯亞",
            symbol: "3081",
            price: 2600,
            change: -0.9,
            changePercent: -0.72
      },
      {
            id: "3083",
            name: "網龍",
            symbol: "3083",
            price: 27.05,
            change: -0.43,
            changePercent: 0.95
      },
      {
            id: "3085",
            name: "新零售",
            symbol: "3085",
            price: 12.75,
            change: -1.67,
            changePercent: -1.33
      },
      {
            id: "3086",
            name: "華義*",
            symbol: "3086",
            price: 32.5,
            change: -2.22,
            changePercent: -1.21
      },
      {
            id: "3088",
            name: "艾訊",
            symbol: "3088",
            price: 97.8,
            change: 0.86,
            changePercent: 2.25
      },
      {
            id: "3093",
            name: "港建*",
            symbol: "3093",
            price: 73,
            change: 1.4,
            changePercent: -1.76
      },
      {
            id: "3095",
            name: "及成",
            symbol: "3095",
            price: 34.3,
            change: 1.06,
            changePercent: 2.06
      },
      {
            id: "3105",
            name: "穩懋",
            symbol: "3105",
            price: 539,
            change: -1.06,
            changePercent: 2.23
      },
      {
            id: "3114",
            name: "好德",
            symbol: "3114",
            price: 26.45,
            change: -1.11,
            changePercent: -1.73
      },
      {
            id: "3115",
            name: "富榮綱",
            symbol: "3115",
            price: 9.45,
            change: -2.27,
            changePercent: 1.7
      },
      {
            id: "3118",
            name: "進階",
            symbol: "3118",
            price: 33.45,
            change: 1.96,
            changePercent: 2.46
      },
      {
            id: "3122",
            name: "笙泉",
            symbol: "3122",
            price: 25.9,
            change: 0.17,
            changePercent: -1.43
      },
      {
            id: "3128",
            name: "昇銳",
            symbol: "3128",
            price: 24.65,
            change: -0.43,
            changePercent: -0.57
      },
      {
            id: "3131",
            name: "弘塑",
            symbol: "3131",
            price: 3255,
            change: -1.87,
            changePercent: -1.37
      },
      {
            id: "3141",
            name: "晶宏",
            symbol: "3141",
            price: 44.2,
            change: -1.55,
            changePercent: -0.05
      },
      {
            id: "3147",
            name: "大綜",
            symbol: "3147",
            price: 163,
            change: 0.84,
            changePercent: -0.81
      },
      {
            id: "3152",
            name: "璟德",
            symbol: "3152",
            price: 168,
            change: -0.03,
            changePercent: 0.59
      },
      {
            id: "3158",
            name: "嘉實",
            symbol: "3158",
            price: 89.1,
            change: 0.23,
            changePercent: 1.79
      },
      {
            id: "3162",
            name: "精確",
            symbol: "3162",
            price: 64.5,
            change: -1.24,
            changePercent: -0.77
      },
      {
            id: "3163",
            name: "波若威",
            symbol: "3163",
            price: 1225,
            change: -0.15,
            changePercent: 1.6
      },
      {
            id: "3169",
            name: "亞信",
            symbol: "3169",
            price: 95.4,
            change: 0.55,
            changePercent: 1.78
      },
      {
            id: "3171",
            name: "炎洲流通",
            symbol: "3171",
            price: 66.4,
            change: 0.15,
            changePercent: -1.58
      },
      {
            id: "3176",
            name: "基亞",
            symbol: "3176",
            price: 30.5,
            change: -0.98,
            changePercent: 0.93
      },
      {
            id: "3178",
            name: "公準",
            symbol: "3178",
            price: 72.5,
            change: 1.52,
            changePercent: 1.6
      },
      {
            id: "3188",
            name: "鑫龍騰",
            symbol: "3188",
            price: 26.65,
            change: -0.1,
            changePercent: -1.67
      },
      {
            id: "3191",
            name: "雲嘉南",
            symbol: "3191",
            price: 13.65,
            change: 0.5,
            changePercent: -0.31
      },
      {
            id: "3205",
            name: "佰研",
            symbol: "3205",
            price: 62.1,
            change: 2.09,
            changePercent: -1.84
      },
      {
            id: "3206",
            name: "志豐",
            symbol: "3206",
            price: 37.5,
            change: -0.16,
            changePercent: -0.55
      },
      {
            id: "3207",
            name: "耀勝",
            symbol: "3207",
            price: 65.4,
            change: 0.18,
            changePercent: -1.6
      },
      {
            id: "3211",
            name: "順達",
            symbol: "3211",
            price: 359,
            change: 1.67,
            changePercent: 2.35
      },
      {
            id: "3213",
            name: "茂訊",
            symbol: "3213",
            price: 107.5,
            change: -0.58,
            changePercent: -0.15
      },
      {
            id: "3217",
            name: "優群",
            symbol: "3217",
            price: 163,
            change: -1.95,
            changePercent: 1.76
      },
      {
            id: "3218",
            name: "大學光",
            symbol: "3218",
            price: 132,
            change: 2.37,
            changePercent: 1.95
      },
      {
            id: "3219",
            name: "倚強科",
            symbol: "3219",
            price: 69.6,
            change: -2.47,
            changePercent: -1.7
      },
      {
            id: "3221",
            name: "台嘉碩",
            symbol: "3221",
            price: 44.4,
            change: 0.07,
            changePercent: -0.32
      },
      {
            id: "3224",
            name: "三顧",
            symbol: "3224",
            price: 41.5,
            change: 0.16,
            changePercent: -1.5
      },
      {
            id: "3226",
            name: "龍鋒",
            symbol: "3226",
            price: 39.85,
            change: -2.4,
            changePercent: 2.31
      },
      {
            id: "3227",
            name: "原相",
            symbol: "3227",
            price: 198,
            change: -1.49,
            changePercent: 2.06
      },
      {
            id: "3228",
            name: "金麗科",
            symbol: "3228",
            price: 138.5,
            change: -0.31,
            changePercent: -2.02
      },
      {
            id: "3230",
            name: "錦明",
            symbol: "3230",
            price: 43.35,
            change: -0.78,
            changePercent: 1.4
      },
      {
            id: "3232",
            name: "昱捷",
            symbol: "3232",
            price: 22.6,
            change: -1.9,
            changePercent: 0.18
      },
      {
            id: "3234",
            name: "光環",
            symbol: "3234",
            price: 115.5,
            change: 1.05,
            changePercent: 1.48
      },
      {
            id: "3236",
            name: "千如",
            symbol: "3236",
            price: 35.25,
            change: -0.32,
            changePercent: 1.52
      },
      {
            id: "3252",
            name: "海灣",
            symbol: "3252",
            price: 20.1,
            change: 2.48,
            changePercent: -2.25
      },
      {
            id: "3259",
            name: "鑫創",
            symbol: "3259",
            price: 17.1,
            change: 0.05,
            changePercent: -2.25
      },
      {
            id: "3260",
            name: "威剛",
            symbol: "3260",
            price: 368.5,
            change: -1.05,
            changePercent: -1.68
      },
      {
            id: "3264",
            name: "欣銓",
            symbol: "3264",
            price: 172,
            change: -0.81,
            changePercent: -0.45
      },
      {
            id: "3265",
            name: "台星科",
            symbol: "3265",
            price: 167,
            change: 1.28,
            changePercent: 0.55
      },
      {
            id: "3268",
            name: "海德威",
            symbol: "3268",
            price: 17.1,
            change: -1,
            changePercent: 0.55
      },
      {
            id: "3272",
            name: "東碩",
            symbol: "3272",
            price: 17.5,
            change: -2.34,
            changePercent: -0.64
      },
      {
            id: "3276",
            name: "宇環",
            symbol: "3276",
            price: 14.45,
            change: -2.38,
            changePercent: 0.7
      },
      {
            id: "3284",
            name: "太普高",
            symbol: "3284",
            price: 18.8,
            change: 1.36,
            changePercent: -2.31
      },
      {
            id: "3285",
            name: "微端",
            symbol: "3285",
            price: 28.2,
            change: -0.1,
            changePercent: 0.28
      },
      {
            id: "3287",
            name: "廣寰科",
            symbol: "3287",
            price: 29.25,
            change: 0.68,
            changePercent: 0.5
      },
      {
            id: "3288",
            name: "點晶",
            symbol: "3288",
            price: 15.75,
            change: -0.84,
            changePercent: -1.74
      },
      {
            id: "3289",
            name: "宜特",
            symbol: "3289",
            price: 180,
            change: 1.55,
            changePercent: 1.09
      },
      {
            id: "3290",
            name: "東浦",
            symbol: "3290",
            price: 48.65,
            change: 1.95,
            changePercent: -2.06
      },
      {
            id: "3293",
            name: "鈊象",
            symbol: "3293",
            price: 775,
            change: 2.03,
            changePercent: 0.52
      },
      {
            id: "3294",
            name: "英濟",
            symbol: "3294",
            price: 33.4,
            change: -1.71,
            changePercent: -1.59
      },
      {
            id: "3297",
            name: "杭特",
            symbol: "3297",
            price: 36.9,
            change: -0.42,
            changePercent: 1.91
      },
      {
            id: "3303",
            name: "岱稜",
            symbol: "3303",
            price: 46.5,
            change: -1.66,
            changePercent: -0.64
      },
      {
            id: "3306",
            name: "鼎天",
            symbol: "3306",
            price: 47.45,
            change: -0.94,
            changePercent: -1.35
      },
      {
            id: "3310",
            name: "佳穎",
            symbol: "3310",
            price: 72.3,
            change: 1.27,
            changePercent: 0.94
      },
      {
            id: "3313",
            name: "斐成",
            symbol: "3313",
            price: 12.95,
            change: -0.63,
            changePercent: -1.44
      },
      {
            id: "3317",
            name: "尼克森",
            symbol: "3317",
            price: 54.6,
            change: -0.21,
            changePercent: 1.73
      },
      {
            id: "3322",
            name: "建舜電",
            symbol: "3322",
            price: 13.7,
            change: -0.39,
            changePercent: -0.88
      },
      {
            id: "3323",
            name: "加百裕",
            symbol: "3323",
            price: 33.15,
            change: 0.99,
            changePercent: -0.46
      },
      {
            id: "3324",
            name: "雙鴻",
            symbol: "3324",
            price: 1035,
            change: 0.29,
            changePercent: 0.73
      },
      {
            id: "3325",
            name: "旭品",
            symbol: "3325",
            price: 13.35,
            change: 0.54,
            changePercent: -0.35
      },
      {
            id: "3332",
            name: "幸康",
            symbol: "3332",
            price: 62.1,
            change: 0,
            changePercent: -0.94
      },
      {
            id: "3339",
            name: "泰谷",
            symbol: "3339",
            price: 69.3,
            change: 0.11,
            changePercent: -1.95
      },
      {
            id: "3349",
            name: "寶德",
            symbol: "3349",
            price: 28.4,
            change: 0.13,
            changePercent: -2.37
      },
      {
            id: "3354",
            name: "律勝",
            symbol: "3354",
            price: 28.15,
            change: -1.72,
            changePercent: -1.29
      },
      {
            id: "3357",
            name: "臺慶科",
            symbol: "3357",
            price: 181,
            change: -0.04,
            changePercent: 1.79
      },
      {
            id: "3360",
            name: "尚立",
            symbol: "3360",
            price: 14.15,
            change: -2,
            changePercent: -0.8
      },
      {
            id: "3362",
            name: "先進光",
            symbol: "3362",
            price: 113,
            change: 2.49,
            changePercent: -1.09
      },
      {
            id: "3363",
            name: "上詮",
            symbol: "3363",
            price: 899,
            change: -0.83,
            changePercent: -1.82
      },
      {
            id: "3372",
            name: "典範",
            symbol: "3372",
            price: 20.05,
            change: 0.25,
            changePercent: -0.63
      },
      {
            id: "3373",
            name: "熱映",
            symbol: "3373",
            price: 17.05,
            change: -1.86,
            changePercent: -2.17
      },
      {
            id: "3374",
            name: "精材",
            symbol: "3374",
            price: 184.5,
            change: 0.56,
            changePercent: -1.11
      },
      {
            id: "3379",
            name: "彬台",
            symbol: "3379",
            price: 37.3,
            change: 2.24,
            changePercent: -0.6
      },
      {
            id: "3388",
            name: "崇越電",
            symbol: "3388",
            price: 99.3,
            change: 0.23,
            changePercent: -1.77
      },
      {
            id: "3390",
            name: "旭軟",
            symbol: "3390",
            price: 24.25,
            change: -0.33,
            changePercent: 1.11
      },
      {
            id: "3402",
            name: "漢科",
            symbol: "3402",
            price: 132,
            change: -0.49,
            changePercent: 2.34
      },
      {
            id: "3426",
            name: "台興",
            symbol: "3426",
            price: 47.65,
            change: -2.17,
            changePercent: -1.16
      },
      {
            id: "3430",
            name: "奇鈦科",
            symbol: "3430",
            price: 85.6,
            change: 1.84,
            changePercent: -0.77
      },
      {
            id: "3434",
            name: "哲固",
            symbol: "3434",
            price: 30.9,
            change: 0.57,
            changePercent: 0.99
      },
      {
            id: "3438",
            name: "類比科",
            symbol: "3438",
            price: 46.55,
            change: -2.46,
            changePercent: 0.49
      },
      {
            id: "3441",
            name: "聯一光",
            symbol: "3441",
            price: 32.4,
            change: 2.05,
            changePercent: 0.55
      },
      {
            id: "3444",
            name: "利機",
            symbol: "3444",
            price: 83,
            change: 0.6,
            changePercent: -2.46
      },
      {
            id: "3455",
            name: "由田",
            symbol: "3455",
            price: 192.5,
            change: -1.36,
            changePercent: -2.46
      },
      {
            id: "3465",
            name: "進泰電子",
            symbol: "3465",
            price: 34.2,
            change: 1.77,
            changePercent: -2.37
      },
      {
            id: "3466",
            name: "德晉",
            symbol: "3466",
            price: 41,
            change: -1.34,
            changePercent: -0.72
      },
      {
            id: "3467",
            name: "台灣精材",
            symbol: "3467",
            price: 59.3,
            change: -2.11,
            changePercent: -0.69
      },
      {
            id: "3479",
            name: "安勤",
            symbol: "3479",
            price: 92.2,
            change: -0.32,
            changePercent: 1.45
      },
      {
            id: "3483",
            name: "力致",
            symbol: "3483",
            price: 88,
            change: -0.38,
            changePercent: 1.06
      },
      {
            id: "3484",
            name: "崧騰",
            symbol: "3484",
            price: 46,
            change: 2.32,
            changePercent: -1.92
      },
      {
            id: "3489",
            name: "森寶",
            symbol: "3489",
            price: 23.7,
            change: 2.24,
            changePercent: -1
      },
      {
            id: "3490",
            name: "單井",
            symbol: "3490",
            price: 29,
            change: 0.95,
            changePercent: -0.18
      },
      {
            id: "3491",
            name: "昇達科",
            symbol: "3491",
            price: 1670,
            change: -2.47,
            changePercent: 0.36
      },
      {
            id: "3492",
            name: "長盛",
            symbol: "3492",
            price: 23.6,
            change: -1.8,
            changePercent: 1.53
      },
      {
            id: "3498",
            name: "陽程",
            symbol: "3498",
            price: 84.6,
            change: 0.3,
            changePercent: -0.26
      },
      {
            id: "3499",
            name: "環天科",
            symbol: "3499",
            price: 16.65,
            change: -0.44,
            changePercent: 0.01
      },
      {
            id: "3508",
            name: "位速",
            symbol: "3508",
            price: 25.2,
            change: -1.13,
            changePercent: 0.29
      },
      {
            id: "3511",
            name: "矽瑪",
            symbol: "3511",
            price: 21.3,
            change: 2.44,
            changePercent: -1.33
      },
      {
            id: "3512",
            name: "皇龍",
            symbol: "3512",
            price: 22,
            change: 0.95,
            changePercent: 1.68
      },
      {
            id: "3516",
            name: "亞帝歐",
            symbol: "3516",
            price: 19.95,
            change: 2.47,
            changePercent: -1.78
      },
      {
            id: "3520",
            name: "華盈",
            symbol: "3520",
            price: 13.9,
            change: -1.11,
            changePercent: -0.74
      },
      {
            id: "3521",
            name: "台鋼建設",
            symbol: "3521",
            price: 14.55,
            change: -1.18,
            changePercent: 1.36
      },
      {
            id: "3522",
            name: "御嵿",
            symbol: "3522",
            price: 13.15,
            change: -0.16,
            changePercent: -1.47
      },
      {
            id: "3523",
            name: "迎輝",
            symbol: "3523",
            price: 12.55,
            change: -0.51,
            changePercent: 1.5
      },
      {
            id: "3526",
            name: "凡甲",
            symbol: "3526",
            price: 273.5,
            change: -1.48,
            changePercent: 1.2
      },
      {
            id: "3527",
            name: "聚積",
            symbol: "3527",
            price: 59.9,
            change: 0.38,
            changePercent: -0.29
      },
      {
            id: "3529",
            name: "力旺",
            symbol: "3529",
            price: 4075,
            change: 1.08,
            changePercent: 2.16
      },
      {
            id: "3531",
            name: "先益",
            symbol: "3531",
            price: 22.75,
            change: 0.57,
            changePercent: -0.39
      },
      {
            id: "3537",
            name: "堡達",
            symbol: "3537",
            price: 46.1,
            change: -1.58,
            changePercent: 1.91
      },
      {
            id: "3540",
            name: "曜越",
            symbol: "3540",
            price: 27.1,
            change: -1.32,
            changePercent: -0.56
      },
      {
            id: "3541",
            name: "西柏",
            symbol: "3541",
            price: 24,
            change: 1.82,
            changePercent: -1.4
      },
      {
            id: "3546",
            name: "宇峻",
            symbol: "3546",
            price: 71.4,
            change: -0.93,
            changePercent: 2.24
      },
      {
            id: "3548",
            name: "兆利",
            symbol: "3548",
            price: 105,
            change: -0.31,
            changePercent: -0.99
      },
      {
            id: "3551",
            name: "世禾",
            symbol: "3551",
            price: 198,
            change: -0.66,
            changePercent: 2.33
      },
      {
            id: "3552",
            name: "同致",
            symbol: "3552",
            price: 59.5,
            change: -0.34,
            changePercent: -0.7
      },
      {
            id: "3555",
            name: "博士旺",
            symbol: "3555",
            price: 260,
            change: -1.85,
            changePercent: -2.38
      },
      {
            id: "3556",
            name: "禾瑞亞",
            symbol: "3556",
            price: 48.1,
            change: -0.64,
            changePercent: -1.43
      },
      {
            id: "3558",
            name: "神準",
            symbol: "3558",
            price: 112,
            change: 0.67,
            changePercent: 0.14
      },
      {
            id: "3564",
            name: "其陽",
            symbol: "3564",
            price: 42.65,
            change: -0.11,
            changePercent: -1.08
      },
      {
            id: "3567",
            name: "逸昌",
            symbol: "3567",
            price: 26,
            change: 2.36,
            changePercent: -1.46
      },
      {
            id: "3570",
            name: "大塚",
            symbol: "3570",
            price: 163.5,
            change: -1.72,
            changePercent: -0.17
      },
      {
            id: "3577",
            name: "泓格",
            symbol: "3577",
            price: 80.2,
            change: -0.37,
            changePercent: 1.61
      },
      {
            id: "3580",
            name: "友威科",
            symbol: "3580",
            price: 84,
            change: 0.46,
            changePercent: -1.37
      },
      {
            id: "3581",
            name: "博磊",
            symbol: "3581",
            price: 119,
            change: -0.58,
            changePercent: -0.26
      },
      {
            id: "3587",
            name: "閎康",
            symbol: "3587",
            price: 367,
            change: 0.15,
            changePercent: -0.57
      },
      {
            id: "3594",
            name: "磐儀",
            symbol: "3594",
            price: 47,
            change: -1.91,
            changePercent: 1.33
      },
      {
            id: "3597",
            name: "映興",
            symbol: "3597",
            price: 24.7,
            change: -0.19,
            changePercent: 2
      },
      {
            id: "3609",
            name: "三一東林",
            symbol: "3609",
            price: 25.95,
            change: 1.73,
            changePercent: -2.09
      },
      {
            id: "3611",
            name: "鼎翰",
            symbol: "3611",
            price: 187,
            change: 2.39,
            changePercent: 0.22
      },
      {
            id: "3615",
            name: "安可",
            symbol: "3615",
            price: 34.9,
            change: 1.28,
            changePercent: 0
      },
      {
            id: "3623",
            name: "富晶通",
            symbol: "3623",
            price: 22.6,
            change: 1.05,
            changePercent: -1.5
      },
      {
            id: "3624",
            name: "光頡",
            symbol: "3624",
            price: 57,
            change: -0.84,
            changePercent: 0.64
      },
      {
            id: "3625",
            name: "西勝",
            symbol: "3625",
            price: 16.9,
            change: 2.05,
            changePercent: 1.12
      },
      {
            id: "3628",
            name: "盈正",
            symbol: "3628",
            price: 71.3,
            change: -2.37,
            changePercent: -1.26
      },
      {
            id: "3629",
            name: "地心引力",
            symbol: "3629",
            price: 17.45,
            change: -1.31,
            changePercent: -2.41
      },
      {
            id: "3630",
            name: "新鉅科",
            symbol: "3630",
            price: 29.7,
            change: -1.03,
            changePercent: 0.54
      },
      {
            id: "3631",
            name: "晟楠",
            symbol: "3631",
            price: 29.35,
            change: 2.27,
            changePercent: 1.3
      },
      {
            id: "3632",
            name: "研勤",
            symbol: "3632",
            price: 9,
            change: 1.94,
            changePercent: 1.21
      },
      {
            id: "3646",
            name: "艾恩特",
            symbol: "3646",
            price: 23.45,
            change: -1.69,
            changePercent: -1.16
      },
      {
            id: "3663",
            name: "鑫科",
            symbol: "3663",
            price: 70.3,
            change: -2.34,
            changePercent: -2.03
      },
      {
            id: "3664",
            name: "安瑞-KY",
            symbol: "3664",
            price: 7.34,
            change: 0.86,
            changePercent: 0.84
      },
      {
            id: "3666",
            name: "光耀",
            symbol: "3666",
            price: 24.7,
            change: -1.56,
            changePercent: 1.34
      },
      {
            id: "3672",
            name: "康聯訊",
            symbol: "3672",
            price: 11.5,
            change: -2.45,
            changePercent: -0.16
      },
      {
            id: "3675",
            name: "德微",
            symbol: "3675",
            price: 206,
            change: 2.42,
            changePercent: 2.45
      },
      {
            id: "3680",
            name: "家登",
            symbol: "3680",
            price: 430,
            change: 0.87,
            changePercent: 0.59
      },
      {
            id: "3684",
            name: "榮昌",
            symbol: "3684",
            price: 58.9,
            change: -1.26,
            changePercent: -1.95
      },
      {
            id: "3685",
            name: "元創精密",
            symbol: "3685",
            price: 34.45,
            change: -1.78,
            changePercent: -0.17
      },
      {
            id: "3687",
            name: "歐買尬",
            symbol: "3687",
            price: 69.1,
            change: -1.2,
            changePercent: 1.73
      },
      {
            id: "3689",
            name: "湧德",
            symbol: "3689",
            price: 132.5,
            change: 1.78,
            changePercent: 0.06
      },
      {
            id: "3691",
            name: "碩禾",
            symbol: "3691",
            price: 125,
            change: 0.19,
            changePercent: -0.82
      },
      {
            id: "3693",
            name: "營邦",
            symbol: "3693",
            price: 662,
            change: 0.19,
            changePercent: 0.55
      },
      {
            id: "3707",
            name: "漢磊",
            symbol: "3707",
            price: 56.2,
            change: -2.26,
            changePercent: -0.45
      },
      {
            id: "3709",
            name: "鑫聯大投控",
            symbol: "3709",
            price: 71.3,
            change: 1.14,
            changePercent: 1.79
      },
      {
            id: "3710",
            name: "連展投控",
            symbol: "3710",
            price: 6.84,
            change: 1.66,
            changePercent: -1.45
      },
      {
            id: "3713",
            name: "新晶投控",
            symbol: "3713",
            price: 16.4,
            change: 1.49,
            changePercent: 0.76
      },
      {
            id: "4102",
            name: "永日",
            symbol: "4102",
            price: 19.05,
            change: -0.42,
            changePercent: -0.42
      },
      {
            id: "4105",
            name: "東洋",
            symbol: "4105",
            price: 74.6,
            change: 2.3,
            changePercent: -1.33
      },
      {
            id: "4107",
            name: "邦特",
            symbol: "4107",
            price: 119.5,
            change: 0.65,
            changePercent: -2.16
      },
      {
            id: "4109",
            name: "加捷生醫",
            symbol: "4109",
            price: 12.6,
            change: 0.1,
            changePercent: 1.88
      },
      {
            id: "4111",
            name: "濟生",
            symbol: "4111",
            price: 29.3,
            change: -1.93,
            changePercent: 1.04
      },
      {
            id: "4113",
            name: "聯上",
            symbol: "4113",
            price: 16,
            change: 2.42,
            changePercent: 0.31
      },
      {
            id: "4114",
            name: "健喬",
            symbol: "4114",
            price: 31.95,
            change: 1.53,
            changePercent: -0.04
      },
      {
            id: "4116",
            name: "明基醫",
            symbol: "4116",
            price: 41,
            change: 0.83,
            changePercent: 0.96
      },
      {
            id: "4120",
            name: "友華",
            symbol: "4120",
            price: 47.35,
            change: -0.01,
            changePercent: 2.09
      },
      {
            id: "4121",
            name: "優盛",
            symbol: "4121",
            price: 15.5,
            change: 0.82,
            changePercent: 0.97
      },
      {
            id: "4123",
            name: "晟德",
            symbol: "4123",
            price: 40.4,
            change: -0.89,
            changePercent: 0.37
      },
      {
            id: "4126",
            name: "太醫",
            symbol: "4126",
            price: 81,
            change: 2.34,
            changePercent: -1.49
      },
      {
            id: "4127",
            name: "天良",
            symbol: "4127",
            price: 37.5,
            change: 0.22,
            changePercent: 0.35
      },
      {
            id: "4128",
            name: "中天",
            symbol: "4128",
            price: 17.15,
            change: 2.01,
            changePercent: 0.29
      },
      {
            id: "4129",
            name: "聯合",
            symbol: "4129",
            price: 105.5,
            change: 0.39,
            changePercent: 2.5
      },
      {
            id: "4130",
            name: "健亞",
            symbol: "4130",
            price: 32.5,
            change: 2.28,
            changePercent: 0.73
      },
      {
            id: "4131",
            name: "浩泰",
            symbol: "4131",
            price: 35.5,
            change: 0.21,
            changePercent: 1.86
      },
      {
            id: "4138",
            name: "曜亞",
            symbol: "4138",
            price: 63.9,
            change: 1.52,
            changePercent: 0.12
      },
      {
            id: "4139",
            name: "馬光-KY",
            symbol: "4139",
            price: 24.9,
            change: 2.05,
            changePercent: -0.88
      },
      {
            id: "4147",
            name: "中裕",
            symbol: "4147",
            price: 53.3,
            change: 0.41,
            changePercent: -0.2
      },
      {
            id: "4153",
            name: "鈺緯",
            symbol: "4153",
            price: 32,
            change: -2.48,
            changePercent: -0.32
      },
      {
            id: "4154",
            name: "樂威科-KY",
            symbol: "4154",
            price: 13.9,
            change: 0.26,
            changePercent: 1.08
      },
      {
            id: "4157",
            name: "太景*-KY",
            symbol: "4157",
            price: 10.55,
            change: -0.48,
            changePercent: 2.27
      },
      {
            id: "4160",
            name: "訊聯基因",
            symbol: "4160",
            price: 44.7,
            change: 1.53,
            changePercent: 2.13
      },
      {
            id: "4161",
            name: "聿新科",
            symbol: "4161",
            price: 24.2,
            change: -1.67,
            changePercent: -1.53
      },
      {
            id: "4162",
            name: "智擎",
            symbol: "4162",
            price: 58.9,
            change: -0.17,
            changePercent: 2.19
      },
      {
            id: "4163",
            name: "鐿鈦",
            symbol: "4163",
            price: 108,
            change: -0.73,
            changePercent: 0.64
      },
      {
            id: "4166",
            name: "友霖",
            symbol: "4166",
            price: 25.8,
            change: -0.05,
            changePercent: -0.65
      },
      {
            id: "4167",
            name: "松瑞藥",
            symbol: "4167",
            price: 19.9,
            change: -0.48,
            changePercent: -0.22
      },
      {
            id: "4168",
            name: "醣聯",
            symbol: "4168",
            price: 23.8,
            change: 1.91,
            changePercent: -0.9
      },
      {
            id: "4171",
            name: "瑞基",
            symbol: "4171",
            price: 19.7,
            change: 1.22,
            changePercent: -1.79
      },
      {
            id: "4173",
            name: "久裕",
            symbol: "4173",
            price: 19.65,
            change: -1.76,
            changePercent: -2.11
      },
      {
            id: "4174",
            name: "浩鼎",
            symbol: "4174",
            price: 37.95,
            change: 1.1,
            changePercent: 2.35
      },
      {
            id: "4175",
            name: "杏一",
            symbol: "4175",
            price: 55.4,
            change: -0.02,
            changePercent: -2.17
      },
      {
            id: "4183",
            name: "福永生技",
            symbol: "4183",
            price: 15.2,
            change: 0.85,
            changePercent: 2.48
      },
      {
            id: "4188",
            name: "安克",
            symbol: "4188",
            price: 12.05,
            change: 2.28,
            changePercent: -1.9
      },
      {
            id: "4192",
            name: "杏國",
            symbol: "4192",
            price: 19.8,
            change: 1.95,
            changePercent: 1.02
      },
      {
            id: "4198",
            name: "欣大健康",
            symbol: "4198",
            price: 40,
            change: -2.34,
            changePercent: 1.81
      },
      {
            id: "4205",
            name: "中華食",
            symbol: "4205",
            price: 77.4,
            change: 0.53,
            changePercent: -0.65
      },
      {
            id: "4207",
            name: "環泰",
            symbol: "4207",
            price: 17.65,
            change: -0.55,
            changePercent: 1.21
      },
      {
            id: "4303",
            name: "信立",
            symbol: "4303",
            price: 54.5,
            change: -0.11,
            changePercent: -0.27
      },
      {
            id: "4304",
            name: "勝昱",
            symbol: "4304",
            price: 28.4,
            change: 1.39,
            changePercent: -0.56
      },
      {
            id: "4305",
            name: "世坤",
            symbol: "4305",
            price: 44.15,
            change: -0.13,
            changePercent: 1.95
      },
      {
            id: "4401",
            name: "東隆興",
            symbol: "4401",
            price: 14.8,
            change: 0.26,
            changePercent: -2.42
      },
      {
            id: "4402",
            name: "郡都開發",
            symbol: "4402",
            price: 16.05,
            change: 0.65,
            changePercent: -1.4
      },
      {
            id: "4406",
            name: "新昕纖",
            symbol: "4406",
            price: 10,
            change: -0.33,
            changePercent: -1.65
      },
      {
            id: "4413",
            name: "飛寶企業",
            symbol: "4413",
            price: 18.2,
            change: -1.36,
            changePercent: -2.03
      },
      {
            id: "4416",
            name: "三圓",
            symbol: "4416",
            price: 15.1,
            change: -2.41,
            changePercent: -2.48
      },
      {
            id: "4417",
            name: "金洲",
            symbol: "4417",
            price: 48.05,
            change: -1.53,
            changePercent: -2.13
      },
      {
            id: "4419",
            name: "皇家美食",
            symbol: "4419",
            price: 46.4,
            change: -0.97,
            changePercent: -1.67
      },
      {
            id: "4420",
            name: "光明",
            symbol: "4420",
            price: 44.2,
            change: -1.69,
            changePercent: 0.4
      },
      {
            id: "4430",
            name: "耀億",
            symbol: "4430",
            price: 17.45,
            change: 2.35,
            changePercent: -1.91
      },
      {
            id: "4432",
            name: "銘旺實",
            symbol: "4432",
            price: 15.05,
            change: -1.24,
            changePercent: -0.16
      },
      {
            id: "4433",
            name: "興采",
            symbol: "4433",
            price: 20.7,
            change: 2.14,
            changePercent: 2.21
      },
      {
            id: "4442",
            name: "竣邦-KY",
            symbol: "4442",
            price: 58.1,
            change: 1.72,
            changePercent: -2.5
      },
      {
            id: "4502",
            name: "健信",
            symbol: "4502",
            price: 15.95,
            change: 2.06,
            changePercent: 0.32
      },
      {
            id: "4503",
            name: "金雨",
            symbol: "4503",
            price: 41.55,
            change: -0.22,
            changePercent: 1.08
      },
      {
            id: "4506",
            name: "崇友",
            symbol: "4506",
            price: 120.5,
            change: 2.02,
            changePercent: 2.45
      },
      {
            id: "4510",
            name: "高鋒",
            symbol: "4510",
            price: 47.05,
            change: 1.43,
            changePercent: -1.68
      },
      {
            id: "4513",
            name: "福裕",
            symbol: "4513",
            price: 16.6,
            change: 1.4,
            changePercent: 2.48
      },
      {
            id: "4523",
            name: "永彰",
            symbol: "4523",
            price: 30.1,
            change: 0.29,
            changePercent: -0.59
      },
      {
            id: "4527",
            name: "方土霖",
            symbol: "4527",
            price: 43.2,
            change: -1.21,
            changePercent: 0
      },
      {
            id: "4528",
            name: "江興鍛",
            symbol: "4528",
            price: 17.15,
            change: -1.48,
            changePercent: 0.94
      },
      {
            id: "4529",
            name: "淳紳",
            symbol: "4529",
            price: 3.1,
            change: -0.36,
            changePercent: -1.76
      },
      {
            id: "4530",
            name: "宏易",
            symbol: "4530",
            price: 28,
            change: 0.61,
            changePercent: -1.76
      },
      {
            id: "4533",
            name: "協易機",
            symbol: "4533",
            price: 31.65,
            change: -0.85,
            changePercent: 0.7
      },
      {
            id: "4534",
            name: "慶騰",
            symbol: "4534",
            price: 26.3,
            change: 0,
            changePercent: 1.03
      },
      {
            id: "4535",
            name: "至興",
            symbol: "4535",
            price: 28.25,
            change: -0.6,
            changePercent: -2.09
      },
      {
            id: "4538",
            name: "大詠城",
            symbol: "4538",
            price: 18.9,
            change: 2.21,
            changePercent: 0.45
      },
      {
            id: "4541",
            name: "晟田",
            symbol: "4541",
            price: 48.3,
            change: 2.17,
            changePercent: -2.46
      },
      {
            id: "4542",
            name: "科嶠",
            symbol: "4542",
            price: 169.5,
            change: -1.39,
            changePercent: 2.42
      },
      {
            id: "4543",
            name: "萬在",
            symbol: "4543",
            price: 37.5,
            change: 1.51,
            changePercent: 0.94
      },
      {
            id: "4549",
            name: "桓達",
            symbol: "4549",
            price: 99.5,
            change: -1.06,
            changePercent: 1.92
      },
      {
            id: "4550",
            name: "長佳",
            symbol: "4550",
            price: 24.7,
            change: 0.58,
            changePercent: 2.16
      },
      {
            id: "4554",
            name: "橙的",
            symbol: "4554",
            price: 29.9,
            change: 0.72,
            changePercent: 2.46
      },
      {
            id: "4556",
            name: "旭然",
            symbol: "4556",
            price: 32.75,
            change: 1.4,
            changePercent: -0.73
      },
      {
            id: "4558",
            name: "寶緯",
            symbol: "4558",
            price: 19.9,
            change: 2.24,
            changePercent: 1.19
      },
      {
            id: "4561",
            name: "健椿",
            symbol: "4561",
            price: 36.65,
            change: -2.1,
            changePercent: -0.53
      },
      {
            id: "4563",
            name: "百德",
            symbol: "4563",
            price: 40.7,
            change: -0.89,
            changePercent: 1.07
      },
      {
            id: "4568",
            name: "科際精密",
            symbol: "4568",
            price: 41.5,
            change: -1.81,
            changePercent: 1.28
      },
      {
            id: "4577",
            name: "達航科技",
            symbol: "4577",
            price: 145.5,
            change: 1.73,
            changePercent: -1.88
      },
      {
            id: "4580",
            name: "捷流閥業",
            symbol: "4580",
            price: 80,
            change: 1.7,
            changePercent: 1.06
      },
      {
            id: "4584",
            name: "君帆",
            symbol: "4584",
            price: 41.8,
            change: 1.54,
            changePercent: 1.01
      },
      {
            id: "4609",
            name: "唐鋒",
            symbol: "4609",
            price: 3.76,
            change: -1.54,
            changePercent: -1.2
      },
      {
            id: "4702",
            name: "中美實",
            symbol: "4702",
            price: 10,
            change: -2.49,
            changePercent: 1.02
      },
      {
            id: "4706",
            name: "大恭",
            symbol: "4706",
            price: 32.45,
            change: -0.4,
            changePercent: 0.61
      },
      {
            id: "4707",
            name: "磐亞",
            symbol: "4707",
            price: 15.05,
            change: -1.22,
            changePercent: 1.55
      },
      {
            id: "4711",
            name: "永純",
            symbol: "4711",
            price: 15.3,
            change: -1.36,
            changePercent: -0.25
      },
      {
            id: "4714",
            name: "永捷",
            symbol: "4714",
            price: 15.2,
            change: 1.49,
            changePercent: -1.78
      },
      {
            id: "4716",
            name: "大立",
            symbol: "4716",
            price: 16.2,
            change: -0.83,
            changePercent: -2.1
      },
      {
            id: "4721",
            name: "美琪瑪",
            symbol: "4721",
            price: 91.2,
            change: 1.5,
            changePercent: 1.64
      },
      {
            id: "4726",
            name: "永昕",
            symbol: "4726",
            price: 29.8,
            change: -1.02,
            changePercent: 1.21
      },
      {
            id: "4728",
            name: "雙美",
            symbol: "4728",
            price: 397.5,
            change: -1.12,
            changePercent: -0.95
      },
      {
            id: "4729",
            name: "熒茂",
            symbol: "4729",
            price: 20.5,
            change: -0.17,
            changePercent: 2.41
      },
      {
            id: "4735",
            name: "豪展",
            symbol: "4735",
            price: 30.6,
            change: -0.79,
            changePercent: 0.05
      },
      {
            id: "4741",
            name: "泓瀚",
            symbol: "4741",
            price: 58.3,
            change: -1.41,
            changePercent: 2.37
      },
      {
            id: "4743",
            name: "合一",
            symbol: "4743",
            price: 54.4,
            change: 1.44,
            changePercent: 1.35
      },
      {
            id: "4744",
            name: "皇將",
            symbol: "4744",
            price: 32,
            change: 1.6,
            changePercent: 0.57
      },
      {
            id: "4745",
            name: "合富-KY",
            symbol: "4745",
            price: 19.05,
            change: -2.26,
            changePercent: -0.15
      },
      {
            id: "4747",
            name: "強生",
            symbol: "4747",
            price: 52.8,
            change: -0.38,
            changePercent: -0.96
      },
      {
            id: "4749",
            name: "新應材",
            symbol: "4749",
            price: 895,
            change: 2.28,
            changePercent: -0.7
      },
      {
            id: "4754",
            name: "國碳科",
            symbol: "4754",
            price: 37.35,
            change: -1.84,
            changePercent: 0.02
      },
      {
            id: "4760",
            name: "勤凱",
            symbol: "4760",
            price: 267,
            change: -0.35,
            changePercent: -0.07
      },
      {
            id: "4767",
            name: "誠泰科技",
            symbol: "4767",
            price: 27.6,
            change: 1.43,
            changePercent: -1.13
      },
      {
            id: "4768",
            name: "晶呈科技",
            symbol: "4768",
            price: 462.5,
            change: 1.41,
            changePercent: 0.99
      },
      {
            id: "4772",
            name: "台特化",
            symbol: "4772",
            price: 308.5,
            change: -0.49,
            changePercent: -1.78
      },
      {
            id: "4804",
            name: "大略-KY",
            symbol: "4804",
            price: 3.63,
            change: -0.84,
            changePercent: -1.93
      },
      {
            id: "4806",
            name: "桂田文創",
            symbol: "4806",
            price: 10.15,
            change: 0.99,
            changePercent: 0.15
      },
      {
            id: "4903",
            name: "聯光通",
            symbol: "4903",
            price: 47.8,
            change: 1.34,
            changePercent: -1.88
      },
      {
            id: "4905",
            name: "台聯電",
            symbol: "4905",
            price: 90.7,
            change: -1.89,
            changePercent: 2.39
      },
      {
            id: "4907",
            name: "富宇",
            symbol: "4907",
            price: 39.75,
            change: -1.37,
            changePercent: 1.9
      },
      {
            id: "4908",
            name: "前鼎",
            symbol: "4908",
            price: 170.5,
            change: -0.36,
            changePercent: -2.42
      },
      {
            id: "4909",
            name: "新復興",
            symbol: "4909",
            price: 63.9,
            change: -0.72,
            changePercent: -2.17
      },
      {
            id: "4911",
            name: "德英",
            symbol: "4911",
            price: 37.35,
            change: -1.68,
            changePercent: -2.29
      },
      {
            id: "4923",
            name: "力士",
            symbol: "4923",
            price: 35.25,
            change: -1.43,
            changePercent: -1.9
      },
      {
            id: "4924",
            name: "欣厚-KY",
            symbol: "4924",
            price: 10.1,
            change: -2.03,
            changePercent: -0.85
      },
      {
            id: "4931",
            name: "新盛力",
            symbol: "4931",
            price: 145,
            change: 0.78,
            changePercent: -1.81
      },
      {
            id: "4933",
            name: "友輝",
            symbol: "4933",
            price: 60.4,
            change: -0.19,
            changePercent: 0.5
      },
      {
            id: "4939",
            name: "亞電",
            symbol: "4939",
            price: 41.15,
            change: -2.24,
            changePercent: -1.33
      },
      {
            id: "4946",
            name: "辣椒",
            symbol: "4946",
            price: 113,
            change: -0.32,
            changePercent: 1.1
      },
      {
            id: "4950",
            name: "金耘國際",
            symbol: "4950",
            price: 16.8,
            change: -2.39,
            changePercent: 2.2
      },
      {
            id: "4951",
            name: "精拓科",
            symbol: "4951",
            price: 72.3,
            change: -0.02,
            changePercent: 1.66
      },
      {
            id: "4953",
            name: "緯軟",
            symbol: "4953",
            price: 123.5,
            change: -0.49,
            changePercent: 1.04
      },
      {
            id: "4966",
            name: "譜瑞-KY",
            symbol: "4966",
            price: 546,
            change: -0.4,
            changePercent: -0.93
      },
      {
            id: "4971",
            name: "IET-KY",
            symbol: "4971",
            price: 767,
            change: 1.5,
            changePercent: 1.64
      },
      {
            id: "4972",
            name: "湯石照明",
            symbol: "4972",
            price: 16.95,
            change: -1.23,
            changePercent: -0.33
      },
      {
            id: "4973",
            name: "廣穎",
            symbol: "4973",
            price: 77.6,
            change: 0.94,
            changePercent: -0.27
      },
      {
            id: "4974",
            name: "亞泰",
            symbol: "4974",
            price: 71.1,
            change: 1.38,
            changePercent: -0.67
      },
      {
            id: "4979",
            name: "華星光",
            symbol: "4979",
            price: 644,
            change: -1.97,
            changePercent: -1.08
      },
      {
            id: "4987",
            name: "科誠",
            symbol: "4987",
            price: 81.4,
            change: 1.73,
            changePercent: 0.7
      },
      {
            id: "4991",
            name: "環宇-KY",
            symbol: "4991",
            price: 660,
            change: -0.34,
            changePercent: 1.09
      },
      {
            id: "4995",
            name: "晶達",
            symbol: "4995",
            price: 42.65,
            change: -2,
            changePercent: -0.03
      },
      {
            id: "5009",
            name: "榮剛",
            symbol: "5009",
            price: 31.3,
            change: -2.46,
            changePercent: 0.45
      },
      {
            id: "5011",
            name: "久陽",
            symbol: "5011",
            price: 14.65,
            change: 0.01,
            changePercent: 2.33
      },
      {
            id: "5013",
            name: "強新",
            symbol: "5013",
            price: 30.1,
            change: 2.05,
            changePercent: 0.23
      },
      {
            id: "5014",
            name: "建錩",
            symbol: "5014",
            price: 10.2,
            change: -1.58,
            changePercent: 1.35
      },
      {
            id: "5015",
            name: "華祺",
            symbol: "5015",
            price: 24.45,
            change: 1.22,
            changePercent: -0.39
      },
      {
            id: "5016",
            name: "松和",
            symbol: "5016",
            price: 30.6,
            change: 2.33,
            changePercent: -2.4
      },
      {
            id: "5201",
            name: "凱衛",
            symbol: "5201",
            price: 39.1,
            change: 1.72,
            changePercent: 0.71
      },
      {
            id: "5202",
            name: "力新",
            symbol: "5202",
            price: 14.15,
            change: 1.02,
            changePercent: -1.15
      },
      {
            id: "5205",
            name: "中茂",
            symbol: "5205",
            price: 25.85,
            change: 1.59,
            changePercent: 1.23
      },
      {
            id: "5206",
            name: "坤悅",
            symbol: "5206",
            price: 25.15,
            change: 2.15,
            changePercent: -0.91
      },
      {
            id: "5209",
            name: "新鼎",
            symbol: "5209",
            price: 165.5,
            change: 1.6,
            changePercent: 1.36
      },
      {
            id: "5210",
            name: "寶碩",
            symbol: "5210",
            price: 22.1,
            change: -2.5,
            changePercent: 0.12
      },
      {
            id: "5211",
            name: "蒙恬",
            symbol: "5211",
            price: 23.55,
            change: 1.35,
            changePercent: -1.85
      },
      {
            id: "5212",
            name: "凌網",
            symbol: "5212",
            price: 48.2,
            change: 1.66,
            changePercent: -2.29
      },
      {
            id: "5213",
            name: "亞昕",
            symbol: "5213",
            price: 26.65,
            change: -0.23,
            changePercent: 0.11
      },
      {
            id: "5220",
            name: "萬達光電",
            symbol: "5220",
            price: 20.25,
            change: 1.96,
            changePercent: -0.51
      },
      {
            id: "5223",
            name: "安力-KY",
            symbol: "5223",
            price: 26.5,
            change: 0.93,
            changePercent: 0.97
      },
      {
            id: "5227",
            name: "立凱-KY",
            symbol: "5227",
            price: 22.2,
            change: -1.31,
            changePercent: 0.15
      },
      {
            id: "5228",
            name: "鈺鎧",
            symbol: "5228",
            price: 37.1,
            change: -1.76,
            changePercent: -0.42
      },
      {
            id: "5230",
            name: "雷笛克光學",
            symbol: "5230",
            price: 18.25,
            change: 1.98,
            changePercent: -1.85
      },
      {
            id: "5236",
            name: "凌陽創新",
            symbol: "5236",
            price: 153.5,
            change: -1.23,
            changePercent: 0.76
      },
      {
            id: "5245",
            name: "智晶",
            symbol: "5245",
            price: 25.4,
            change: -1.68,
            changePercent: 1.07
      },
      {
            id: "5251",
            name: "天鉞電",
            symbol: "5251",
            price: 30.45,
            change: 2.34,
            changePercent: -0.34
      },
      {
            id: "5263",
            name: "智崴",
            symbol: "5263",
            price: 94,
            change: 2.16,
            changePercent: -1.56
      },
      {
            id: "5272",
            name: "笙科",
            symbol: "5272",
            price: 23.45,
            change: -0.41,
            changePercent: -1.81
      },
      {
            id: "5274",
            name: "信驊",
            symbol: "5274",
            price: 13805,
            change: -0.62,
            changePercent: 1.12
      },
      {
            id: "5276",
            name: "達輝-KY",
            symbol: "5276",
            price: 15.5,
            change: 0.26,
            changePercent: -1.25
      },
      {
            id: "5278",
            name: "尚凡*",
            symbol: "5278",
            price: 23.65,
            change: 0.33,
            changePercent: -0.52
      },
      {
            id: "5287",
            name: "數字",
            symbol: "5287",
            price: 161,
            change: -1.39,
            changePercent: 0.04
      },
      {
            id: "5289",
            name: "宜鼎",
            symbol: "5289",
            price: 1005,
            change: -0.79,
            changePercent: 0.54
      },
      {
            id: "5291",
            name: "邑昇",
            symbol: "5291",
            price: 70.3,
            change: -0.64,
            changePercent: -1.56
      },
      {
            id: "5299",
            name: "杰力",
            symbol: "5299",
            price: 84.5,
            change: -0.99,
            changePercent: -2.34
      },
      {
            id: "5301",
            name: "寶得利",
            symbol: "5301",
            price: 9.44,
            change: -0.93,
            changePercent: -1.58
      },
      {
            id: "5302",
            name: "太欣",
            symbol: "5302",
            price: 10.95,
            change: -0.59,
            changePercent: 2.15
      },
      {
            id: "5309",
            name: "系統電",
            symbol: "5309",
            price: 58.8,
            change: -0.73,
            changePercent: -1.3
      },
      {
            id: "5310",
            name: "天剛",
            symbol: "5310",
            price: 25.2,
            change: 0.96,
            changePercent: 2.36
      },
      {
            id: "5312",
            name: "寶島科",
            symbol: "5312",
            price: 99,
            change: -1.64,
            changePercent: 0.59
      },
      {
            id: "5314",
            name: "世紀*",
            symbol: "5314",
            price: 80.2,
            change: 0.2,
            changePercent: -0.43
      },
      {
            id: "5315",
            name: "光聯",
            symbol: "5315",
            price: 23.2,
            change: 1.15,
            changePercent: -0.2
      },
      {
            id: "5321",
            name: "美而快",
            symbol: "5321",
            price: 24.4,
            change: -1.87,
            changePercent: -0.21
      },
      {
            id: "5324",
            name: "士開",
            symbol: "5324",
            price: 12,
            change: -0.41,
            changePercent: 1.05
      },
      {
            id: "5328",
            name: "華容",
            symbol: "5328",
            price: 26.9,
            change: -0.46,
            changePercent: -0.93
      },
      {
            id: "5340",
            name: "建榮",
            symbol: "5340",
            price: 134,
            change: -1.54,
            changePercent: -1.42
      },
      {
            id: "5344",
            name: "立衛",
            symbol: "5344",
            price: 14.6,
            change: -0.48,
            changePercent: -0.25
      },
      {
            id: "5345",
            name: "馥鴻",
            symbol: "5345",
            price: 23.2,
            change: 2.34,
            changePercent: 0.05
      },
      {
            id: "5347",
            name: "世界",
            symbol: "5347",
            price: 132,
            change: 2.47,
            changePercent: 1.66
      },
      {
            id: "5348",
            name: "正能量智能",
            symbol: "5348",
            price: 17,
            change: -0.48,
            changePercent: 2.37
      },
      {
            id: "5351",
            name: "鈺創",
            symbol: "5351",
            price: 67.5,
            change: 1.87,
            changePercent: 1.9
      },
      {
            id: "5353",
            name: "台林",
            symbol: "5353",
            price: 25,
            change: 2.04,
            changePercent: -0.1
      },
      {
            id: "5355",
            name: "佳總",
            symbol: "5355",
            price: 6.41,
            change: -2.03,
            changePercent: 0.28
      },
      {
            id: "5356",
            name: "協益",
            symbol: "5356",
            price: 25.9,
            change: -1.05,
            changePercent: -0.74
      },
      {
            id: "5364",
            name: "力麗店",
            symbol: "5364",
            price: 11.35,
            change: -1.63,
            changePercent: -2.49
      },
      {
            id: "5371",
            name: "中光電",
            symbol: "5371",
            price: 78.3,
            change: 1.67,
            changePercent: 0.85
      },
      {
            id: "5381",
            name: "光譜",
            symbol: "5381",
            price: 25.3,
            change: 2.18,
            changePercent: -1.25
      },
      {
            id: "5386",
            name: "青雲",
            symbol: "5386",
            price: 352,
            change: -1.91,
            changePercent: 0.65
      },
      {
            id: "5392",
            name: "能率",
            symbol: "5392",
            price: 39,
            change: -1.51,
            changePercent: 2.28
      },
      {
            id: "5398",
            name: "慕康生醫",
            symbol: "5398",
            price: 20.7,
            change: 0.22,
            changePercent: -0.15
      },
      {
            id: "5403",
            name: "中菲",
            symbol: "5403",
            price: 94.4,
            change: 0.16,
            changePercent: 1.23
      },
      {
            id: "5410",
            name: "國眾",
            symbol: "5410",
            price: 32.4,
            change: -0.05,
            changePercent: -2.41
      },
      {
            id: "5425",
            name: "台半",
            symbol: "5425",
            price: 65.7,
            change: -2.32,
            changePercent: -2.47
      },
      {
            id: "5426",
            name: "振發",
            symbol: "5426",
            price: 19.25,
            change: 0.41,
            changePercent: 0.58
      },
      {
            id: "5432",
            name: "新門",
            symbol: "5432",
            price: 130,
            change: -0.17,
            changePercent: -1.2
      },
      {
            id: "5438",
            name: "東友",
            symbol: "5438",
            price: 19.25,
            change: -0.8,
            changePercent: 1.14
      },
      {
            id: "5439",
            name: "高技",
            symbol: "5439",
            price: 401.5,
            change: 1.91,
            changePercent: -1.46
      },
      {
            id: "5443",
            name: "均豪",
            symbol: "5443",
            price: 114,
            change: -2.41,
            changePercent: -1.26
      },
      {
            id: "5450",
            name: "南良",
            symbol: "5450",
            price: 13.9,
            change: -0.4,
            changePercent: 0.54
      },
      {
            id: "5452",
            name: "佶優",
            symbol: "5452",
            price: 34.15,
            change: 2.08,
            changePercent: 0
      },
      {
            id: "5455",
            name: "昇益",
            symbol: "5455",
            price: 25.45,
            change: 1.85,
            changePercent: 2.48
      },
      {
            id: "5457",
            name: "宣德",
            symbol: "5457",
            price: 38.15,
            change: -2.03,
            changePercent: 0.37
      },
      {
            id: "5460",
            name: "同協",
            symbol: "5460",
            price: 14.95,
            change: 0.08,
            changePercent: 1.73
      },
      {
            id: "5464",
            name: "霖宏",
            symbol: "5464",
            price: 30,
            change: 1.61,
            changePercent: -1.18
      },
      {
            id: "5465",
            name: "富驊",
            symbol: "5465",
            price: 26,
            change: -0.75,
            changePercent: -1.82
      },
      {
            id: "5468",
            name: "凱鈺",
            symbol: "5468",
            price: 18.15,
            change: -1.44,
            changePercent: -1.98
      },
      {
            id: "5474",
            name: "聰泰",
            symbol: "5474",
            price: 147.5,
            change: 2.28,
            changePercent: 0.8
      },
      {
            id: "5475",
            name: "德宏",
            symbol: "5475",
            price: 368.5,
            change: -1.99,
            changePercent: -1.38
      },
      {
            id: "5478",
            name: "智冠",
            symbol: "5478",
            price: 99.7,
            change: 1.58,
            changePercent: -0.8
      },
      {
            id: "5481",
            name: "新華",
            symbol: "5481",
            price: 22.6,
            change: 1.94,
            changePercent: -2.17
      },
      {
            id: "5483",
            name: "中美晶",
            symbol: "5483",
            price: 124.5,
            change: -0.23,
            changePercent: -2.3
      },
      {
            id: "5487",
            name: "通泰",
            symbol: "5487",
            price: 29.1,
            change: 1.05,
            changePercent: -1.43
      },
      {
            id: "5488",
            name: "松普",
            symbol: "5488",
            price: 10.15,
            change: -0.32,
            changePercent: -0.68
      },
      {
            id: "5489",
            name: "彩富",
            symbol: "5489",
            price: 41.05,
            change: 2.34,
            changePercent: -1.04
      },
      {
            id: "5490",
            name: "同亨",
            symbol: "5490",
            price: 26.45,
            change: -1.55,
            changePercent: -1.77
      },
      {
            id: "5493",
            name: "三聯",
            symbol: "5493",
            price: 83.2,
            change: -2.1,
            changePercent: -0.65
      },
      {
            id: "5498",
            name: "凱崴",
            symbol: "5498",
            price: 68.8,
            change: 2.13,
            changePercent: 1.55
      },
      {
            id: "5508",
            name: "永信建",
            symbol: "5508",
            price: 51.6,
            change: 0.69,
            changePercent: -0.36
      },
      {
            id: "5511",
            name: "德昌",
            symbol: "5511",
            price: 70.5,
            change: 0.96,
            changePercent: 0.95
      },
      {
            id: "5512",
            name: "力麒",
            symbol: "5512",
            price: 7.84,
            change: -0.37,
            changePercent: 2.39
      },
      {
            id: "5514",
            name: "三豐",
            symbol: "5514",
            price: 15.9,
            change: 1.15,
            changePercent: -0.83
      },
      {
            id: "5516",
            name: "雙喜",
            symbol: "5516",
            price: 12.15,
            change: 1.65,
            changePercent: 0
      },
      {
            id: "5520",
            name: "力泰",
            symbol: "5520",
            price: 79,
            change: 2.35,
            changePercent: 1.52
      },
      {
            id: "5523",
            name: "豐謙",
            symbol: "5523",
            price: 30.5,
            change: 1.52,
            changePercent: 2
      },
      {
            id: "5529",
            name: "鉅陞",
            symbol: "5529",
            price: 24.2,
            change: -0.2,
            changePercent: 0.48
      },
      {
            id: "5530",
            name: "龍巖",
            symbol: "5530",
            price: 44.95,
            change: 2.17,
            changePercent: -0.51
      },
      {
            id: "5536",
            name: "聖暉*",
            symbol: "5536",
            price: 825,
            change: 0.45,
            changePercent: -2.31
      },
      {
            id: "5543",
            name: "桓鼎-KY",
            symbol: "5543",
            price: 26.7,
            change: -1.75,
            changePercent: 2.43
      },
      {
            id: "5547",
            name: "久舜",
            symbol: "5547",
            price: 21.9,
            change: -2.12,
            changePercent: -0.58
      },
      {
            id: "5548",
            name: "安倉",
            symbol: "5548",
            price: 24.3,
            change: 2.31,
            changePercent: 1.32
      },
      {
            id: "5601",
            name: "台聯櫃",
            symbol: "5601",
            price: 36.55,
            change: -0.31,
            changePercent: 0.63
      },
      {
            id: "5603",
            name: "陸海",
            symbol: "5603",
            price: 16.8,
            change: -1.87,
            changePercent: 2.14
      },
      {
            id: "5604",
            name: "中連",
            symbol: "5604",
            price: 34.5,
            change: -2.33,
            changePercent: 1.11
      },
      {
            id: "5609",
            name: "中菲行",
            symbol: "5609",
            price: 80.2,
            change: -0.97,
            changePercent: 0.56
      },
      {
            id: "5701",
            name: "劍湖山",
            symbol: "5701",
            price: 3.48,
            change: -2.4,
            changePercent: -0.98
      },
      {
            id: "5703",
            name: "亞都",
            symbol: "5703",
            price: 14.8,
            change: -1.95,
            changePercent: -0.93
      },
      {
            id: "5704",
            name: "老爺知",
            symbol: "5704",
            price: 21.95,
            change: -0.81,
            changePercent: 2.08
      },
      {
            id: "5864",
            name: "致和證",
            symbol: "5864",
            price: 24.4,
            change: 0.12,
            changePercent: 1.39
      },
      {
            id: "5878",
            name: "台名",
            symbol: "5878",
            price: 41.05,
            change: 0.38,
            changePercent: -0.1
      },
      {
            id: "5902",
            name: "德記",
            symbol: "5902",
            price: 38.5,
            change: -2.2,
            changePercent: 1.55
      },
      {
            id: "5903",
            name: "全家",
            symbol: "5903",
            price: 191,
            change: -1.27,
            changePercent: 0.24
      },
      {
            id: "5904",
            name: "寶雅",
            symbol: "5904",
            price: 510,
            change: -0.96,
            changePercent: 1.02
      },
      {
            id: "5905",
            name: "南仁湖",
            symbol: "5905",
            price: 8.73,
            change: 0.54,
            changePercent: 0.76
      },
      {
            id: "6015",
            name: "宏遠證",
            symbol: "6015",
            price: 13,
            change: 1.02,
            changePercent: 0.29
      },
      {
            id: "6016",
            name: "康和證",
            symbol: "6016",
            price: 17.2,
            change: 1.65,
            changePercent: 1.09
      },
      {
            id: "6020",
            name: "大展證",
            symbol: "6020",
            price: 19.15,
            change: 0.24,
            changePercent: -2.39
      },
      {
            id: "6021",
            name: "美好證",
            symbol: "6021",
            price: 28.8,
            change: 1.83,
            changePercent: 2.15
      },
      {
            id: "6023",
            name: "元大期",
            symbol: "6023",
            price: 99.5,
            change: 2.39,
            changePercent: -2.36
      },
      {
            id: "6026",
            name: "福邦證",
            symbol: "6026",
            price: 14.8,
            change: -2.19,
            changePercent: 1.08
      },
      {
            id: "6028",
            name: "公勝保經",
            symbol: "6028",
            price: 80.4,
            change: -0.16,
            changePercent: 1.06
      },
      {
            id: "6101",
            name: "寬魚國際",
            symbol: "6101",
            price: 39.7,
            change: 0.3,
            changePercent: 0.48
      },
      {
            id: "6103",
            name: "合邦",
            symbol: "6103",
            price: 41.9,
            change: -1.95,
            changePercent: -2.47
      },
      {
            id: "6104",
            name: "創惟",
            symbol: "6104",
            price: 93.9,
            change: 2.31,
            changePercent: -2.47
      },
      {
            id: "6109",
            name: "亞元",
            symbol: "6109",
            price: 11.95,
            change: -1.05,
            changePercent: 1.5
      },
      {
            id: "6111",
            name: "光聚晶電",
            symbol: "6111",
            price: 48.1,
            change: -0.49,
            changePercent: -0.27
      },
      {
            id: "6113",
            name: "亞矽",
            symbol: "6113",
            price: 22.9,
            change: -0.45,
            changePercent: 1.7
      },
      {
            id: "6114",
            name: "久威",
            symbol: "6114",
            price: 29.8,
            change: -1.74,
            changePercent: -2.46
      },
      {
            id: "6118",
            name: "建達",
            symbol: "6118",
            price: 17.1,
            change: -1.14,
            changePercent: 0.07
      },
      {
            id: "6121",
            name: "新普",
            symbol: "6121",
            price: 348.5,
            change: 0.58,
            changePercent: 1.62
      },
      {
            id: "6122",
            name: "擎邦",
            symbol: "6122",
            price: 50.8,
            change: 1.74,
            changePercent: 2.46
      },
      {
            id: "6123",
            name: "上奇",
            symbol: "6123",
            price: 42.3,
            change: 1.2,
            changePercent: -2
      },
      {
            id: "6124",
            name: "業強",
            symbol: "6124",
            price: 31.05,
            change: 0.67,
            changePercent: -0.41
      },
      {
            id: "6125",
            name: "廣運",
            symbol: "6125",
            price: 56.6,
            change: -1.31,
            changePercent: 0.14
      },
      {
            id: "6126",
            name: "信音",
            symbol: "6126",
            price: 33.25,
            change: -2.15,
            changePercent: -1.75
      },
      {
            id: "6127",
            name: "九豪",
            symbol: "6127",
            price: 50.3,
            change: 0.6,
            changePercent: 2.34
      },
      {
            id: "6129",
            name: "普誠",
            symbol: "6129",
            price: 16.3,
            change: -1.84,
            changePercent: 2.19
      },
      {
            id: "6130",
            name: "上亞科技",
            symbol: "6130",
            price: 24.05,
            change: -2.12,
            changePercent: -1.6
      },
      {
            id: "6134",
            name: "萬旭",
            symbol: "6134",
            price: 31.35,
            change: 0.84,
            changePercent: 0.81
      },
      {
            id: "6138",
            name: "茂達",
            symbol: "6138",
            price: 229,
            change: 1.23,
            changePercent: 2.24
      },
      {
            id: "6140",
            name: "訊達",
            symbol: "6140",
            price: 18.75,
            change: 0.57,
            changePercent: -0.38
      },
      {
            id: "6143",
            name: "振曜",
            symbol: "6143",
            price: 93,
            change: 2.35,
            changePercent: 2.28
      },
      {
            id: "6144",
            name: "得利影",
            symbol: "6144",
            price: 16.25,
            change: 0.62,
            changePercent: -0.83
      },
      {
            id: "6146",
            name: "耕興",
            symbol: "6146",
            price: 221,
            change: 1.08,
            changePercent: 2.3
      },
      {
            id: "6147",
            name: "頎邦",
            symbol: "6147",
            price: 115,
            change: 1.46,
            changePercent: -0.25
      },
      {
            id: "6148",
            name: "驊宏資",
            symbol: "6148",
            price: 33,
            change: 1.77,
            changePercent: -0.86
      },
      {
            id: "6150",
            name: "撼訊",
            symbol: "6150",
            price: 53.4,
            change: -2.31,
            changePercent: 2.06
      },
      {
            id: "6151",
            name: "晉倫",
            symbol: "6151",
            price: 35.55,
            change: -2.13,
            changePercent: 1.66
      },
      {
            id: "6154",
            name: "順發",
            symbol: "6154",
            price: 13.25,
            change: -2.36,
            changePercent: -1.77
      },
      {
            id: "6156",
            name: "松上",
            symbol: "6156",
            price: 20.75,
            change: 2.03,
            changePercent: -0.99
      },
      {
            id: "6158",
            name: "禾昌",
            symbol: "6158",
            price: 18.3,
            change: 1.59,
            changePercent: -0.25
      },
      {
            id: "6160",
            name: "欣技",
            symbol: "6160",
            price: 15.75,
            change: 1.5,
            changePercent: 1.16
      },
      {
            id: "6161",
            name: "捷波",
            symbol: "6161",
            price: 42,
            change: 0.01,
            changePercent: -1.47
      },
      {
            id: "6163",
            name: "華電網",
            symbol: "6163",
            price: 67.4,
            change: -1.2,
            changePercent: -2.24
      },
      {
            id: "6167",
            name: "久正",
            symbol: "6167",
            price: 14.2,
            change: 2.3,
            changePercent: 1.32
      },
      {
            id: "6169",
            name: "昱泉",
            symbol: "6169",
            price: 16.95,
            change: 1.89,
            changePercent: 0.26
      },
      {
            id: "6170",
            name: "統振",
            symbol: "6170",
            price: 51.2,
            change: 1.99,
            changePercent: -1.27
      },
      {
            id: "6171",
            name: "大城地產",
            symbol: "6171",
            price: 25.95,
            change: 1.55,
            changePercent: -2.13
      },
      {
            id: "6173",
            name: "信昌電",
            symbol: "6173",
            price: 92.2,
            change: -0.77,
            changePercent: 0
      },
      {
            id: "6174",
            name: "安碁",
            symbol: "6174",
            price: 27.5,
            change: -0.62,
            changePercent: -1.51
      },
      {
            id: "6175",
            name: "立敦",
            symbol: "6175",
            price: 64.6,
            change: -0.74,
            changePercent: -0.39
      },
      {
            id: "6179",
            name: "亞通",
            symbol: "6179",
            price: 24.4,
            change: 1.9,
            changePercent: 0.68
      },
      {
            id: "6180",
            name: "橘子",
            symbol: "6180",
            price: 41.9,
            change: -2.03,
            changePercent: 1.93
      },
      {
            id: "6182",
            name: "合晶",
            symbol: "6182",
            price: 35.8,
            change: 2.14,
            changePercent: 1.14
      },
      {
            id: "6185",
            name: "幃翔",
            symbol: "6185",
            price: 14.05,
            change: 2.09,
            changePercent: -2.22
      },
      {
            id: "6186",
            name: "新潤",
            symbol: "6186",
            price: 40.65,
            change: 1.66,
            changePercent: -2.35
      },
      {
            id: "6187",
            name: "萬潤",
            symbol: "6187",
            price: 1215,
            change: -0.58,
            changePercent: -1.63
      },
      {
            id: "6188",
            name: "廣明",
            symbol: "6188",
            price: 86.3,
            change: -0.13,
            changePercent: 0.61
      },
      {
            id: "6190",
            name: "萬泰科",
            symbol: "6190",
            price: 62.7,
            change: -0.63,
            changePercent: 2.31
      },
      {
            id: "6194",
            name: "育富",
            symbol: "6194",
            price: 32.95,
            change: -1.99,
            changePercent: -0.69
      },
      {
            id: "6195",
            name: "詩肯",
            symbol: "6195",
            price: 24.5,
            change: -1.49,
            changePercent: 2.45
      },
      {
            id: "6198",
            name: "瑞築",
            symbol: "6198",
            price: 21.7,
            change: -1.27,
            changePercent: -1.21
      },
      {
            id: "6199",
            name: "天品",
            symbol: "6199",
            price: 113,
            change: -2.35,
            changePercent: 0.37
      },
      {
            id: "6203",
            name: "海韻電",
            symbol: "6203",
            price: 65.6,
            change: 0.97,
            changePercent: 1.78
      },
      {
            id: "6204",
            name: "艾華",
            symbol: "6204",
            price: 68.5,
            change: -0.09,
            changePercent: -2.2
      },
      {
            id: "6207",
            name: "雷科",
            symbol: "6207",
            price: 57.1,
            change: 0.19,
            changePercent: -0.02
      },
      {
            id: "6208",
            name: "日揚",
            symbol: "6208",
            price: 75,
            change: 1.56,
            changePercent: -1.62
      },
      {
            id: "6210",
            name: "慶生",
            symbol: "6210",
            price: 20.7,
            change: -2.39,
            changePercent: 1.2
      },
      {
            id: "6212",
            name: "理銘",
            symbol: "6212",
            price: 28.15,
            change: 1.73,
            changePercent: 1.08
      },
      {
            id: "6217",
            name: "中探針",
            symbol: "6217",
            price: 244,
            change: 2.09,
            changePercent: 1.8
      },
      {
            id: "6218",
            name: "豪勉",
            symbol: "6218",
            price: 37.6,
            change: -2.05,
            changePercent: -1.91
      },
      {
            id: "6219",
            name: "富旺",
            symbol: "6219",
            price: 14.1,
            change: -1.95,
            changePercent: 1.5
      },
      {
            id: "6220",
            name: "岳豐",
            symbol: "6220",
            price: 33.4,
            change: -0.18,
            changePercent: 1.73
      },
      {
            id: "6221",
            name: "晉泰",
            symbol: "6221",
            price: 27.6,
            change: -1.18,
            changePercent: -0.86
      },
      {
            id: "6222",
            name: "立軒",
            symbol: "6222",
            price: 20.75,
            change: -0.74,
            changePercent: 2.16
      },
      {
            id: "6223",
            name: "旺矽",
            symbol: "6223",
            price: 5195,
            change: -0.74,
            changePercent: 2.25
      },
      {
            id: "6227",
            name: "茂綸",
            symbol: "6227",
            price: 95,
            change: 1.93,
            changePercent: -1.79
      },
      {
            id: "6228",
            name: "全譜",
            symbol: "6228",
            price: 24.9,
            change: 0.35,
            changePercent: 2.01
      },
      {
            id: "6229",
            name: "研通",
            symbol: "6229",
            price: 25.2,
            change: 2.21,
            changePercent: -2.04
      },
      {
            id: "6231",
            name: "系微",
            symbol: "6231",
            price: 262.5,
            change: 1.02,
            changePercent: 1.66
      },
      {
            id: "6233",
            name: "旺玖",
            symbol: "6233",
            price: 25.95,
            change: -0.52,
            changePercent: 1.7
      },
      {
            id: "6234",
            name: "高僑",
            symbol: "6234",
            price: 32.95,
            change: 0.84,
            changePercent: 1.53
      },
      {
            id: "6236",
            name: "中湛",
            symbol: "6236",
            price: 18,
            change: 1.37,
            changePercent: 2.46
      },
      {
            id: "6237",
            name: "驊訊",
            symbol: "6237",
            price: 38.35,
            change: -1.8,
            changePercent: -0.43
      },
      {
            id: "6240",
            name: "松崗",
            symbol: "6240",
            price: 18.75,
            change: -1.77,
            changePercent: -0.22
      },
      {
            id: "6241",
            name: "易通展",
            symbol: "6241",
            price: 10.1,
            change: -0.96,
            changePercent: -1.42
      },
      {
            id: "6242",
            name: "立康",
            symbol: "6242",
            price: 38,
            change: 0.5,
            changePercent: 0.27
      },
      {
            id: "6244",
            name: "茂迪",
            symbol: "6244",
            price: 28.8,
            change: 1.19,
            changePercent: -0.31
      },
      {
            id: "6245",
            name: "立端",
            symbol: "6245",
            price: 82.8,
            change: 2.1,
            changePercent: -1.48
      },
      {
            id: "6246",
            name: "臺龍",
            symbol: "6246",
            price: 16.5,
            change: -1.56,
            changePercent: 1.92
      },
      {
            id: "6248",
            name: "沛波",
            symbol: "6248",
            price: 20,
            change: 1.82,
            changePercent: -1.97
      },
      {
            id: "6259",
            name: "百徽",
            symbol: "6259",
            price: 23.4,
            change: 0.72,
            changePercent: -1.71
      },
      {
            id: "6261",
            name: "久元",
            symbol: "6261",
            price: 78.3,
            change: -1.71,
            changePercent: 1.2
      },
      {
            id: "6263",
            name: "普萊德",
            symbol: "6263",
            price: 131.5,
            change: 1.57,
            changePercent: 1.35
      },
      {
            id: "6264",
            name: "富裔",
            symbol: "6264",
            price: 6.2,
            change: 0.77,
            changePercent: 1.92
      },
      {
            id: "6265",
            name: "方土昶",
            symbol: "6265",
            price: 38.9,
            change: 0.98,
            changePercent: 2.24
      },
      {
            id: "6266",
            name: "泰詠",
            symbol: "6266",
            price: 28.2,
            change: -2.25,
            changePercent: 2.04
      },
      {
            id: "6270",
            name: "倍微",
            symbol: "6270",
            price: 25.15,
            change: -0.06,
            changePercent: 2.03
      },
      {
            id: "6274",
            name: "台燿",
            symbol: "6274",
            price: 946,
            change: 1.41,
            changePercent: 1.29
      },
      {
            id: "6275",
            name: "元山",
            symbol: "6275",
            price: 50.1,
            change: 2.09,
            changePercent: 1.88
      },
      {
            id: "6276",
            name: "安鈦克",
            symbol: "6276",
            price: 31.3,
            change: 1.3,
            changePercent: 0.36
      },
      {
            id: "6279",
            name: "胡連",
            symbol: "6279",
            price: 109,
            change: 1.9,
            changePercent: -2.04
      },
      {
            id: "6284",
            name: "佳邦",
            symbol: "6284",
            price: 88.9,
            change: -1.14,
            changePercent: -2.43
      },
      {
            id: "6290",
            name: "良維",
            symbol: "6290",
            price: 235,
            change: -1.33,
            changePercent: 2.23
      },
      {
            id: "6291",
            name: "沛亨",
            symbol: "6291",
            price: 421.5,
            change: -1.34,
            changePercent: 2.38
      },
      {
            id: "6292",
            name: "迅德",
            symbol: "6292",
            price: 47.9,
            change: 2.26,
            changePercent: -0.78
      },
      {
            id: "6294",
            name: "智基",
            symbol: "6294",
            price: 39.3,
            change: -0.9,
            changePercent: 1.97
      },
      {
            id: "6411",
            name: "晶焱",
            symbol: "6411",
            price: 79,
            change: -2.16,
            changePercent: 2.47
      },
      {
            id: "6417",
            name: "韋僑",
            symbol: "6417",
            price: 122.5,
            change: 1.54,
            changePercent: -1.56
      },
      {
            id: "6418",
            name: "詠昇",
            symbol: "6418",
            price: 28.9,
            change: 1.93,
            changePercent: 1.89
      },
      {
            id: "6419",
            name: "京晨科",
            symbol: "6419",
            price: 128,
            change: -0.99,
            changePercent: 1.21
      },
      {
            id: "6423",
            name: "億而得",
            symbol: "6423",
            price: 97.9,
            change: -0.95,
            changePercent: -1.26
      },
      {
            id: "6425",
            name: "易發",
            symbol: "6425",
            price: 85.9,
            change: -0.2,
            changePercent: 1.59
      },
      {
            id: "6432",
            name: "今展科",
            symbol: "6432",
            price: 40.7,
            change: 2.02,
            changePercent: 1.45
      },
      {
            id: "6435",
            name: "大中",
            symbol: "6435",
            price: 178.5,
            change: 1.13,
            changePercent: -2.48
      },
      {
            id: "6441",
            name: "廣錠",
            symbol: "6441",
            price: 23,
            change: -1.86,
            changePercent: -0.33
      },
      {
            id: "6461",
            name: "益得",
            symbol: "6461",
            price: 18.1,
            change: 0.05,
            changePercent: 1.59
      },
      {
            id: "6462",
            name: "神盾",
            symbol: "6462",
            price: 122.5,
            change: 1.85,
            changePercent: -1.62
      },
      {
            id: "6465",
            name: "威潤",
            symbol: "6465",
            price: 49.05,
            change: -0.51,
            changePercent: 0.17
      },
      {
            id: "6469",
            name: "大樹",
            symbol: "6469",
            price: 81.2,
            change: -2.31,
            changePercent: 1.45
      },
      {
            id: "6470",
            name: "宇智",
            symbol: "6470",
            price: 47.7,
            change: -1.04,
            changePercent: -0.84
      },
      {
            id: "6474",
            name: "華豫寧",
            symbol: "6474",
            price: 36.85,
            change: 0.76,
            changePercent: -0.91
      },
      {
            id: "6482",
            name: "弘煜科",
            symbol: "6482",
            price: 31.7,
            change: -2.15,
            changePercent: 2.37
      },
      {
            id: "6485",
            name: "點序",
            symbol: "6485",
            price: 78.5,
            change: 1.68,
            changePercent: -1.68
      },
      {
            id: "6486",
            name: "互動",
            symbol: "6486",
            price: 88.2,
            change: 1.05,
            changePercent: 0.6
      },
      {
            id: "6488",
            name: "環球晶",
            symbol: "6488",
            price: 505,
            change: 0.27,
            changePercent: 2.13
      },
      {
            id: "6492",
            name: "生華科",
            symbol: "6492",
            price: 54.6,
            change: 1.44,
            changePercent: -2.36
      },
      {
            id: "6494",
            name: "九齊",
            symbol: "6494",
            price: 54.3,
            change: 1.38,
            changePercent: 1.61
      },
      {
            id: "6496",
            name: "科懋",
            symbol: "6496",
            price: 26.4,
            change: -2.39,
            changePercent: 1.27
      },
      {
            id: "6498",
            name: "久禾光",
            symbol: "6498",
            price: 93.2,
            change: 2.01,
            changePercent: 0.14
      },
      {
            id: "6499",
            name: "益安",
            symbol: "6499",
            price: 83.6,
            change: -1.05,
            changePercent: -1.38
      },
      {
            id: "6506",
            name: "雙邦",
            symbol: "6506",
            price: 16.95,
            change: -0.64,
            changePercent: 1.37
      },
      {
            id: "6508",
            name: "惠光",
            symbol: "6508",
            price: 26.05,
            change: -1.22,
            changePercent: -1.62
      },
      {
            id: "6509",
            name: "聚和",
            symbol: "6509",
            price: 44.25,
            change: 2.46,
            changePercent: -2.3
      },
      {
            id: "6510",
            name: "精測",
            symbol: "6510",
            price: 3740,
            change: -2.21,
            changePercent: -1.97
      },
      {
            id: "6512",
            name: "啟發電",
            symbol: "6512",
            price: 19.9,
            change: 1.14,
            changePercent: 1.96
      },
      {
            id: "6516",
            name: "勤崴國際",
            symbol: "6516",
            price: 61.2,
            change: -0.1,
            changePercent: -1.26
      },
      {
            id: "6517",
            name: "保勝光學",
            symbol: "6517",
            price: 59.8,
            change: -0.55,
            changePercent: 1.54
      },
      {
            id: "6523",
            name: "達爾膚",
            symbol: "6523",
            price: 104.5,
            change: -0.49,
            changePercent: -1.69
      },
      {
            id: "6527",
            name: "明達醫",
            symbol: "6527",
            price: 70.5,
            change: 1.45,
            changePercent: 1.73
      },
      {
            id: "6530",
            name: "創威",
            symbol: "6530",
            price: 125.5,
            change: -1.58,
            changePercent: -0.61
      },
      {
            id: "6532",
            name: "瑞耘",
            symbol: "6532",
            price: 83.5,
            change: -1.34,
            changePercent: 0.31
      },
      {
            id: "6535",
            name: "順藥",
            symbol: "6535",
            price: 131,
            change: 1.87,
            changePercent: -0.32
      },
      {
            id: "6538",
            name: "倉和",
            symbol: "6538",
            price: 72.5,
            change: -2.01,
            changePercent: -1.51
      },
      {
            id: "6542",
            name: "隆中",
            symbol: "6542",
            price: 51.4,
            change: -0.44,
            changePercent: -1.09
      },
      {
            id: "6546",
            name: "正基",
            symbol: "6546",
            price: 71.8,
            change: -1.49,
            changePercent: -1.85
      },
      {
            id: "6547",
            name: "高端疫苗",
            symbol: "6547",
            price: 48,
            change: -0.26,
            changePercent: 1.25
      },
      {
            id: "6548",
            name: "長科*",
            symbol: "6548",
            price: 54.7,
            change: 1.49,
            changePercent: -2.33
      },
      {
            id: "6556",
            name: "勝品",
            symbol: "6556",
            price: 68.2,
            change: 0.74,
            changePercent: -1.1
      },
      {
            id: "6560",
            name: "欣普羅",
            symbol: "6560",
            price: 38.4,
            change: -1.44,
            changePercent: 2.02
      },
      {
            id: "6561",
            name: "是方",
            symbol: "6561",
            price: 373,
            change: 0.25,
            changePercent: 1.01
      },
      {
            id: "6568",
            name: "宏觀",
            symbol: "6568",
            price: 225,
            change: -0.22,
            changePercent: -1.65
      },
      {
            id: "6569",
            name: "醫揚",
            symbol: "6569",
            price: 101.5,
            change: -0.55,
            changePercent: 0.95
      },
      {
            id: "6570",
            name: "維田",
            symbol: "6570",
            price: 39.85,
            change: 0.43,
            changePercent: 0.69
      },
      {
            id: "6574",
            name: "霈方",
            symbol: "6574",
            price: 106.5,
            change: 1.1,
            changePercent: -0.57
      },
      {
            id: "6576",
            name: "逸達",
            symbol: "6576",
            price: 76.6,
            change: -1.24,
            changePercent: 1.66
      },
      {
            id: "6577",
            name: "勁豐",
            symbol: "6577",
            price: 78.3,
            change: 1.91,
            changePercent: 0.07
      },
      {
            id: "6578",
            name: "達邦蛋白",
            symbol: "6578",
            price: 17.75,
            change: -0.06,
            changePercent: -0.71
      },
      {
            id: "6584",
            name: "南俊國際",
            symbol: "6584",
            price: 667,
            change: -0.31,
            changePercent: 1.3
      },
      {
            id: "6588",
            name: "東典光電",
            symbol: "6588",
            price: 155,
            change: 2.38,
            changePercent: 0.46
      },
      {
            id: "6590",
            name: "普鴻",
            symbol: "6590",
            price: 69.9,
            change: 0.25,
            changePercent: -2.46
      },
      {
            id: "6593",
            name: "台灣銘板",
            symbol: "6593",
            price: 37.85,
            change: -1.81,
            changePercent: 2.29
      },
      {
            id: "6596",
            name: "寬宏藝術",
            symbol: "6596",
            price: 100.5,
            change: 0.5,
            changePercent: 0.63
      },
      {
            id: "6597",
            name: "立誠",
            symbol: "6597",
            price: 58.1,
            change: -1.96,
            changePercent: -1.76
      },
      {
            id: "6603",
            name: "富強鑫",
            symbol: "6603",
            price: 25.45,
            change: -0.55,
            changePercent: 1.52
      },
      {
            id: "6609",
            name: "瀧澤科",
            symbol: "6609",
            price: 38.8,
            change: -1.9,
            changePercent: 1
      },
      {
            id: "6612",
            name: "奈米醫材",
            symbol: "6612",
            price: 71,
            change: -0.41,
            changePercent: 1.86
      },
      {
            id: "6613",
            name: "朋億*",
            symbol: "6613",
            price: 237.5,
            change: -0.27,
            changePercent: -2.33
      },
      {
            id: "6615",
            name: "慧智",
            symbol: "6615",
            price: 33.5,
            change: -1.86,
            changePercent: -0.01
      },
      {
            id: "6616",
            name: "特昇-KY",
            symbol: "6616",
            price: 10,
            change: 1.17,
            changePercent: 0.22
      },
      {
            id: "6617",
            name: "共信-KY",
            symbol: "6617",
            price: 66.7,
            change: -1.83,
            changePercent: -0.75
      },
      {
            id: "6620",
            name: "漢達",
            symbol: "6620",
            price: 80.7,
            change: 1.82,
            changePercent: -2.04
      },
      {
            id: "6624",
            name: "萬年清",
            symbol: "6624",
            price: 56.8,
            change: 1.01,
            changePercent: 1.21
      },
      {
            id: "6629",
            name: "泰金-KY",
            symbol: "6629",
            price: 116.5,
            change: 2.27,
            changePercent: 0.5
      },
      {
            id: "6637",
            name: "醫影",
            symbol: "6637",
            price: 72.1,
            change: -1.55,
            changePercent: 1.38
      },
      {
            id: "6640",
            name: "均華",
            symbol: "6640",
            price: 1620,
            change: -0.25,
            changePercent: -1.14
      },
      {
            id: "6642",
            name: "富致",
            symbol: "6642",
            price: 58,
            change: -0.74,
            changePercent: 2.24
      },
      {
            id: "6643",
            name: "M31",
            symbol: "6643",
            price: 506,
            change: 2.15,
            changePercent: 0.38
      },
      {
            id: "6649",
            name: "台生材",
            symbol: "6649",
            price: 39.65,
            change: -1.8,
            changePercent: -0.96
      },
      {
            id: "6651",
            name: "全宇昕",
            symbol: "6651",
            price: 93,
            change: 0.79,
            changePercent: 0.37
      },
      {
            id: "6654",
            name: "天正國際",
            symbol: "6654",
            price: 87.6,
            change: -1.91,
            changePercent: 0.32
      },
      {
            id: "6661",
            name: "威健生技",
            symbol: "6661",
            price: 18.65,
            change: 0.88,
            changePercent: 1.01
      },
      {
            id: "6662",
            name: "樂斯科",
            symbol: "6662",
            price: 30.4,
            change: 1.56,
            changePercent: -1.52
      },
      {
            id: "6664",
            name: "群翊",
            symbol: "6664",
            price: 438.5,
            change: 0.1,
            changePercent: -1.24
      },
      {
            id: "6667",
            name: "信紘科",
            symbol: "6667",
            price: 288.5,
            change: -2.39,
            changePercent: -1.29
      },
      {
            id: "6679",
            name: "鈺太",
            symbol: "6679",
            price: 276,
            change: 0.61,
            changePercent: 1.31
      },
      {
            id: "6680",
            name: "鑫創電子",
            symbol: "6680",
            price: 55.2,
            change: -1.77,
            changePercent: -0.71
      },
      {
            id: "6683",
            name: "雍智科技",
            symbol: "6683",
            price: 1870,
            change: 0.57,
            changePercent: 0.56
      },
      {
            id: "6684",
            name: "安格",
            symbol: "6684",
            price: 47.05,
            change: -1.66,
            changePercent: -0.89
      },
      {
            id: "6690",
            name: "安碁資訊",
            symbol: "6690",
            price: 170,
            change: -1.04,
            changePercent: 1.1
      },
      {
            id: "6692",
            name: "進能服",
            symbol: "6692",
            price: 32.05,
            change: 0.72,
            changePercent: 0.17
      },
      {
            id: "6693",
            name: "廣閎科",
            symbol: "6693",
            price: 143.5,
            change: -1.11,
            changePercent: -1.06
      },
      {
            id: "6697",
            name: "東捷資訊",
            symbol: "6697",
            price: 41.1,
            change: -1.88,
            changePercent: 2.09
      },
      {
            id: "6703",
            name: "軒郁",
            symbol: "6703",
            price: 115,
            change: -1.5,
            changePercent: -0.47
      },
      {
            id: "6708",
            name: "天擎",
            symbol: "6708",
            price: 39.3,
            change: -1.76,
            changePercent: -0.47
      },
      {
            id: "6712",
            name: "長聖",
            symbol: "6712",
            price: 140,
            change: -1.59,
            changePercent: 0.33
      },
      {
            id: "6716",
            name: "應廣",
            symbol: "6716",
            price: 77.8,
            change: 1.71,
            changePercent: -1.36
      },
      {
            id: "6720",
            name: "久昌",
            symbol: "6720",
            price: 162.5,
            change: 2.39,
            changePercent: 1.05
      },
      {
            id: "6721",
            name: "信實",
            symbol: "6721",
            price: 58.4,
            change: -0.05,
            changePercent: -2.13
      },
      {
            id: "6725",
            name: "矽科宏晟",
            symbol: "6725",
            price: 390.5,
            change: -1.23,
            changePercent: -0.54
      },
      {
            id: "6727",
            name: "亞泰金屬",
            symbol: "6727",
            price: 399,
            change: -0.39,
            changePercent: -1.24
      },
      {
            id: "6728",
            name: "上洋",
            symbol: "6728",
            price: 119,
            change: 1.59,
            changePercent: 1.34
      },
      {
            id: "6730",
            name: "常廣",
            symbol: "6730",
            price: 39,
            change: -2.16,
            changePercent: -2.17
      },
      {
            id: "6732",
            name: "昇佳電子",
            symbol: "6732",
            price: 158,
            change: -1.2,
            changePercent: 0.43
      },
      {
            id: "6733",
            name: "博晟生醫",
            symbol: "6733",
            price: 30.75,
            change: -0.5,
            changePercent: -1.52
      },
      {
            id: "6735",
            name: "美達科技",
            symbol: "6735",
            price: 75.9,
            change: 0.02,
            changePercent: -1.76
      },
      {
            id: "6739",
            name: "竹陞科技",
            symbol: "6739",
            price: 1560,
            change: -1.35,
            changePercent: 0.82
      },
      {
            id: "6741",
            name: "91APP*-KY",
            symbol: "6741",
            price: 63.7,
            change: -0.83,
            changePercent: 0.17
      },
      {
            id: "6751",
            name: "智聯服務",
            symbol: "6751",
            price: 51,
            change: 1.83,
            changePercent: -1.46
      },
      {
            id: "6752",
            name: "叡揚",
            symbol: "6752",
            price: 105.5,
            change: -0.88,
            changePercent: 0.48
      },
      {
            id: "6761",
            name: "穩得",
            symbol: "6761",
            price: 195.5,
            change: 2.38,
            changePercent: 0.13
      },
      {
            id: "6762",
            name: "達亞",
            symbol: "6762",
            price: 170.5,
            change: -1.02,
            changePercent: 0.97
      },
      {
            id: "6763",
            name: "綠界科技*",
            symbol: "6763",
            price: 48.6,
            change: 2.09,
            changePercent: -1.02
      },
      {
            id: "6767",
            name: "台微醫",
            symbol: "6767",
            price: 28.2,
            change: 0.79,
            changePercent: 1.52
      },
      {
            id: "6785",
            name: "昱展新藥",
            symbol: "6785",
            price: 168,
            change: -0.98,
            changePercent: -1.74
      },
      {
            id: "6788",
            name: "華景電",
            symbol: "6788",
            price: 431,
            change: -0.68,
            changePercent: 2.18
      },
      {
            id: "6791",
            name: "虎門科技",
            symbol: "6791",
            price: 135,
            change: -0.15,
            changePercent: -2.37
      },
      {
            id: "6803",
            name: "崑鼎",
            symbol: "6803",
            price: 289.5,
            change: 1.98,
            changePercent: 0.89
      },
      {
            id: "6804",
            name: "明係",
            symbol: "6804",
            price: 16.6,
            change: -1.87,
            changePercent: -0.59
      },
      {
            id: "6811",
            name: "宏碁資訊",
            symbol: "6811",
            price: 195,
            change: 0.93,
            changePercent: -2.39
      },
      {
            id: "6821",
            name: "聯寶",
            symbol: "6821",
            price: 67.5,
            change: 0.03,
            changePercent: 2.28
      },
      {
            id: "6823",
            name: "濾能",
            symbol: "6823",
            price: 77.1,
            change: 1.79,
            changePercent: -1.56
      },
      {
            id: "6829",
            name: "千附精密",
            symbol: "6829",
            price: 197,
            change: -2.14,
            changePercent: -1.76
      },
      {
            id: "6840",
            name: "東研信超",
            symbol: "6840",
            price: 69.9,
            change: 2.46,
            changePercent: 1.82
      },
      {
            id: "6841",
            name: "長佳智能",
            symbol: "6841",
            price: 58.8,
            change: 0.26,
            changePercent: -0.34
      },
      {
            id: "6843",
            name: "進典",
            symbol: "6843",
            price: 46.85,
            change: -0.09,
            changePercent: 1.85
      },
      {
            id: "6844",
            name: "諾貝兒",
            symbol: "6844",
            price: 62.9,
            change: -2.4,
            changePercent: 1.52
      },
      {
            id: "6846",
            name: "綠茵",
            symbol: "6846",
            price: 71.1,
            change: 1.56,
            changePercent: 1.59
      },
      {
            id: "6855",
            name: "數泓科",
            symbol: "6855",
            price: 110.5,
            change: -0.73,
            changePercent: 0.22
      },
      {
            id: "6856",
            name: "鑫傳",
            symbol: "6856",
            price: 51.7,
            change: 0.64,
            changePercent: 2.16
      },
      {
            id: "6859",
            name: "伯特光",
            symbol: "6859",
            price: 119.5,
            change: -2.34,
            changePercent: 2.3
      },
      {
            id: "6865",
            name: "偉康科技",
            symbol: "6865",
            price: 36.3,
            change: 2.06,
            changePercent: 0.23
      },
      {
            id: "6870",
            name: "騰雲",
            symbol: "6870",
            price: 190.5,
            change: 1.79,
            changePercent: 0.26
      },
      {
            id: "6872",
            name: "浩宇生醫",
            symbol: "6872",
            price: 18.5,
            change: 0.7,
            changePercent: -1.67
      },
      {
            id: "6874",
            name: "倍力",
            symbol: "6874",
            price: 88.7,
            change: -1.57,
            changePercent: -0.29
      },
      {
            id: "6875",
            name: "國邑*",
            symbol: "6875",
            price: 36.85,
            change: -1.13,
            changePercent: -2.02
      },
      {
            id: "6877",
            name: "鏵友益",
            symbol: "6877",
            price: 157.5,
            change: -1.39,
            changePercent: -0.05
      },
      {
            id: "6881",
            name: "潤德",
            symbol: "6881",
            price: 252,
            change: 1.28,
            changePercent: 0.93
      },
      {
            id: "6884",
            name: "海柏特",
            symbol: "6884",
            price: 35,
            change: 1.27,
            changePercent: -1.92
      },
      {
            id: "6894",
            name: "衛司特",
            symbol: "6894",
            price: 348.5,
            change: 0.29,
            changePercent: -0.07
      },
      {
            id: "6895",
            name: "宏碩系統",
            symbol: "6895",
            price: 168,
            change: -0.52,
            changePercent: 0.24
      },
      {
            id: "6899",
            name: "創為精密",
            symbol: "6899",
            price: 54.8,
            change: -1.53,
            changePercent: 0.76
      },
      {
            id: "6903",
            name: "巨漢",
            symbol: "6903",
            price: 394,
            change: -1.26,
            changePercent: -0.07
      },
      {
            id: "6904",
            name: "伯鑫",
            symbol: "6904",
            price: 118.5,
            change: -0.36,
            changePercent: 0.6
      },
      {
            id: "6907",
            name: "雅特力-KY",
            symbol: "6907",
            price: 129,
            change: -0.36,
            changePercent: 0.11
      },
      {
            id: "6910",
            name: "德鴻",
            symbol: "6910",
            price: 29.4,
            change: -0.79,
            changePercent: -2.4
      },
      {
            id: "6913",
            name: "鴻呈",
            symbol: "6913",
            price: 125.5,
            change: -0.81,
            changePercent: 0.22
      },
      {
            id: "6922",
            name: "宸曜",
            symbol: "6922",
            price: 166.5,
            change: 2.1,
            changePercent: 1.28
      },
      {
            id: "6925",
            name: "意藍",
            symbol: "6925",
            price: 73.5,
            change: -0.7,
            changePercent: 0.6
      },
      {
            id: "6929",
            name: "佑全",
            symbol: "6929",
            price: 30,
            change: -0.91,
            changePercent: -1.28
      },
      {
            id: "6953",
            name: "家碩",
            symbol: "6953",
            price: 240,
            change: 1.48,
            changePercent: -0.48
      },
      {
            id: "6961",
            name: "旅天下",
            symbol: "6961",
            price: 57.4,
            change: 1.21,
            changePercent: -1.29
      },
      {
            id: "6967",
            name: "汎瑋材料",
            symbol: "6967",
            price: 70,
            change: 0.87,
            changePercent: 1.04
      },
      {
            id: "6968",
            name: "萬達寵物",
            symbol: "6968",
            price: 46.6,
            change: 0.77,
            changePercent: -1.1
      },
      {
            id: "6971",
            name: "惠民實業",
            symbol: "6971",
            price: 29.5,
            change: 2.08,
            changePercent: -1.37
      },
      {
            id: "6982",
            name: "大井泵浦",
            symbol: "6982",
            price: 58.9,
            change: 0.51,
            changePercent: 1.57
      },
      {
            id: "6996",
            name: "力領科技",
            symbol: "6996",
            price: 185,
            change: 2.26,
            changePercent: 2.04
      },
      {
            id: "6997",
            name: "博弘",
            symbol: "6997",
            price: 82.1,
            change: -0.61,
            changePercent: 2.25
      },
      {
            id: "7402",
            name: "邑錡",
            symbol: "7402",
            price: 125.5,
            change: 0.68,
            changePercent: -1.03
      },
      {
            id: "7547",
            name: "碩網",
            symbol: "7547",
            price: 69.6,
            change: 1.05,
            changePercent: 1.2
      },
      {
            id: "7556",
            name: "意德士",
            symbol: "7556",
            price: 265.5,
            change: -0.16,
            changePercent: 1.12
      },
      {
            id: "7584",
            name: "樂意",
            symbol: "7584",
            price: 32.9,
            change: 2.41,
            changePercent: -2.33
      },
      {
            id: "7642",
            name: "昶瑞機電",
            symbol: "7642",
            price: 73.2,
            change: -2.48,
            changePercent: 2.11
      },
      {
            id: "7703",
            name: "銳澤",
            symbol: "7703",
            price: 230.5,
            change: -0.51,
            changePercent: -1.8
      },
      {
            id: "7704",
            name: "明遠精密",
            symbol: "7704",
            price: 63.9,
            change: -2.39,
            changePercent: 0.19
      },
      {
            id: "7708",
            name: "全家餐飲",
            symbol: "7708",
            price: 92.2,
            change: 2.4,
            changePercent: 0.42
      },
      {
            id: "7709",
            name: "榮田",
            symbol: "7709",
            price: 72.8,
            change: -2.2,
            changePercent: -0.67
      },
      {
            id: "7712",
            name: "博盛半導體",
            symbol: "7712",
            price: 120.5,
            change: 2.28,
            changePercent: 0.59
      },
      {
            id: "7713",
            name: "威力德生醫",
            symbol: "7713",
            price: 67,
            change: 1.89,
            changePercent: 0.09
      },
      {
            id: "7714",
            name: "創泓科技",
            symbol: "7714",
            price: 134,
            change: -0.15,
            changePercent: 2.31
      },
      {
            id: "7715",
            name: "裕山",
            symbol: "7715",
            price: 29,
            change: -0.19,
            changePercent: -2.26
      },
      {
            id: "7716",
            name: "昱臺國際",
            symbol: "7716",
            price: 25.3,
            change: 2.04,
            changePercent: 2.42
      },
      {
            id: "7717",
            name: "萊德光電-KY",
            symbol: "7717",
            price: 875,
            change: 1.42,
            changePercent: -0.84
      },
      {
            id: "7718",
            name: "友鋮",
            symbol: "7718",
            price: 48.65,
            change: 1.13,
            changePercent: 1.61
      },
      {
            id: "7723",
            name: "築間",
            symbol: "7723",
            price: 34.45,
            change: 1.91,
            changePercent: -0.42
      },
      {
            id: "7728",
            name: "光焱科技",
            symbol: "7728",
            price: 815,
            change: -0.89,
            changePercent: 1.49
      },
      {
            id: "7734",
            name: "印能科技",
            symbol: "7734",
            price: 2505,
            change: -1.15,
            changePercent: 1.3
      },
      {
            id: "7738",
            name: "東聯互動",
            symbol: "7738",
            price: 180,
            change: -1.79,
            changePercent: 1.29
      },
      {
            id: "7743",
            name: "金利食安",
            symbol: "7743",
            price: 20.25,
            change: -0.89,
            changePercent: -0.34
      },
      {
            id: "7744",
            name: "崴寶",
            symbol: "7744",
            price: 495,
            change: 2.32,
            changePercent: -0.28
      },
      {
            id: "7747",
            name: "昕奇雲端",
            symbol: "7747",
            price: 133,
            change: 0.84,
            changePercent: 1.78
      },
      {
            id: "7751",
            name: "竑騰",
            symbol: "7751",
            price: 1895,
            change: 1.71,
            changePercent: -1.07
      },
      {
            id: "7753",
            name: "星亞",
            symbol: "7753",
            price: 39.55,
            change: 0.63,
            changePercent: 1.13
      },
      {
            id: "7757",
            name: "金色三麥",
            symbol: "7757",
            price: 109.5,
            change: 2.23,
            changePercent: 1.88
      },
      {
            id: "7767",
            name: "仁大資訊",
            symbol: "7767",
            price: 44.65,
            change: 1.72,
            changePercent: -1.78
      },
      {
            id: "7770",
            name: "君曜",
            symbol: "7770",
            price: 50.3,
            change: -1.61,
            changePercent: -2.09
      },
      {
            id: "7777",
            name: "能率亞洲",
            symbol: "7777",
            price: 26.5,
            change: 2.12,
            changePercent: 1.88
      },
      {
            id: "7782",
            name: "光速火箭",
            symbol: "7782",
            price: 29.45,
            change: 0.76,
            changePercent: -0.59
      },
      {
            id: "7792",
            name: "安葆",
            symbol: "7792",
            price: 369,
            change: -0.13,
            changePercent: 0.5
      },
      {
            id: "7794",
            name: "宏碁智新",
            symbol: "7794",
            price: 31,
            change: -0.73,
            changePercent: -1.73
      },
      {
            id: "7805",
            name: "威聯通",
            symbol: "7805",
            price: 671,
            change: 1.49,
            changePercent: -1.27
      },
      {
            id: "7810",
            name: "捷創科技",
            symbol: "7810",
            price: 243.5,
            change: 0.41,
            changePercent: 0.57
      },
      {
            id: "7811",
            name: "民盛",
            symbol: "7811",
            price: 88.6,
            change: 0.73,
            changePercent: 1.54
      },
      {
            id: "8024",
            name: "佑華",
            symbol: "8024",
            price: 13,
            change: -2.24,
            changePercent: 2.04
      },
      {
            id: "8027",
            name: "鈦昇",
            symbol: "8027",
            price: 148.5,
            change: 0.09,
            changePercent: -0.35
      },
      {
            id: "8032",
            name: "光菱",
            symbol: "8032",
            price: 36.95,
            change: -2.37,
            changePercent: -1.17
      },
      {
            id: "8034",
            name: "榮群",
            symbol: "8034",
            price: 25.4,
            change: -1.95,
            changePercent: -0.24
      },
      {
            id: "8038",
            name: "長園科",
            symbol: "8038",
            price: 42.05,
            change: -0.96,
            changePercent: 1.85
      },
      {
            id: "8040",
            name: "九暘",
            symbol: "8040",
            price: 62.4,
            change: 1.68,
            changePercent: 1.83
      },
      {
            id: "8042",
            name: "金山電",
            symbol: "8042",
            price: 66.2,
            change: -1.44,
            changePercent: 2
      },
      {
            id: "8043",
            name: "蜜望實",
            symbol: "8043",
            price: 96.6,
            change: -0.47,
            changePercent: 2.47
      },
      {
            id: "8044",
            name: "網家",
            symbol: "8044",
            price: 24.1,
            change: 0.96,
            changePercent: 2.28
      },
      {
            id: "8047",
            name: "星雲",
            symbol: "8047",
            price: 55.3,
            change: -1.27,
            changePercent: 0.86
      },
      {
            id: "8048",
            name: "德勝",
            symbol: "8048",
            price: 64.6,
            change: 0.81,
            changePercent: -1.44
      },
      {
            id: "8049",
            name: "晶采",
            symbol: "8049",
            price: 25.7,
            change: 0.23,
            changePercent: 1.79
      },
      {
            id: "8050",
            name: "廣積",
            symbol: "8050",
            price: 42.15,
            change: -2.25,
            changePercent: 0.24
      },
      {
            id: "8054",
            name: "安國",
            symbol: "8054",
            price: 105,
            change: -0.06,
            changePercent: 0.14
      },
      {
            id: "8059",
            name: "凱碩",
            symbol: "8059",
            price: 20,
            change: 0.45,
            changePercent: -2.02
      },
      {
            id: "8064",
            name: "東捷",
            symbol: "8064",
            price: 78,
            change: -2.41,
            changePercent: 2.48
      },
      {
            id: "8066",
            name: "來思達",
            symbol: "8066",
            price: 18.4,
            change: 0.22,
            changePercent: 1.33
      },
      {
            id: "8067",
            name: "志旭",
            symbol: "8067",
            price: 13,
            change: 0.07,
            changePercent: 1.06
      },
      {
            id: "8068",
            name: "全達",
            symbol: "8068",
            price: 24.25,
            change: 1.39,
            changePercent: 1.81
      },
      {
            id: "8069",
            name: "元太",
            symbol: "8069",
            price: 155,
            change: -0.31,
            changePercent: -1.31
      },
      {
            id: "8071",
            name: "能率網通",
            symbol: "8071",
            price: 16.65,
            change: 1.8,
            changePercent: 2.41
      },
      {
            id: "8074",
            name: "鉅橡",
            symbol: "8074",
            price: 71.2,
            change: 1.79,
            changePercent: -1.33
      },
      {
            id: "8076",
            name: "伍豐",
            symbol: "8076",
            price: 23.35,
            change: -1.05,
            changePercent: -0.31
      },
      {
            id: "8077",
            name: "洛碁",
            symbol: "8077",
            price: 41.6,
            change: 1.17,
            changePercent: -1.28
      },
      {
            id: "8080",
            name: "泰霖",
            symbol: "8080",
            price: 28.8,
            change: 1.59,
            changePercent: -2.35
      },
      {
            id: "8083",
            name: "瑞穎",
            symbol: "8083",
            price: 173.5,
            change: 1.25,
            changePercent: -2.32
      },
      {
            id: "8084",
            name: "巨虹",
            symbol: "8084",
            price: 46.1,
            change: -1.55,
            changePercent: 1.87
      },
      {
            id: "8085",
            name: "福華",
            symbol: "8085",
            price: 15,
            change: -2.26,
            changePercent: 0.1
      },
      {
            id: "8086",
            name: "宏捷科",
            symbol: "8086",
            price: 148.5,
            change: 0.51,
            changePercent: -2.2
      },
      {
            id: "8087",
            name: "麗升能源",
            symbol: "8087",
            price: 35.45,
            change: 0.67,
            changePercent: -1.75
      },
      {
            id: "8088",
            name: "品安",
            symbol: "8088",
            price: 50.6,
            change: 0.74,
            changePercent: 0.28
      },
      {
            id: "8089",
            name: "康全電訊",
            symbol: "8089",
            price: 21.55,
            change: 1.65,
            changePercent: 1.84
      },
      {
            id: "8091",
            name: "翔名",
            symbol: "8091",
            price: 181.5,
            change: 0.13,
            changePercent: -0.63
      },
      {
            id: "8092",
            name: "建暐",
            symbol: "8092",
            price: 14.2,
            change: -0.16,
            changePercent: -0.99
      },
      {
            id: "8093",
            name: "保銳",
            symbol: "8093",
            price: 20,
            change: 2.06,
            changePercent: 0.26
      },
      {
            id: "8096",
            name: "擎亞",
            symbol: "8096",
            price: 91.5,
            change: -0.93,
            changePercent: 2.5
      },
      {
            id: "8097",
            name: "常珵",
            symbol: "8097",
            price: 53.5,
            change: -0.9,
            changePercent: 0.52
      },
      {
            id: "8099",
            name: "大世科",
            symbol: "8099",
            price: 69.7,
            change: 1.21,
            changePercent: -1.48
      },
      {
            id: "8102",
            name: "傑霖科技",
            symbol: "8102",
            price: 67.8,
            change: -0.47,
            changePercent: 2.4
      },
      {
            id: "8107",
            name: "大億金茂",
            symbol: "8107",
            price: 13.25,
            change: -0.59,
            changePercent: -0.11
      },
      {
            id: "8109",
            name: "博大",
            symbol: "8109",
            price: 107,
            change: 0.39,
            changePercent: -1.03
      },
      {
            id: "8111",
            name: "立碁",
            symbol: "8111",
            price: 79.2,
            change: 0.07,
            changePercent: 1.19
      },
      {
            id: "8121",
            name: "越峰",
            symbol: "8121",
            price: 29.35,
            change: 0.92,
            changePercent: 2.19
      },
      {
            id: "8147",
            name: "正淩",
            symbol: "8147",
            price: 162,
            change: 1.07,
            changePercent: -1.3
      },
      {
            id: "8155",
            name: "博智",
            symbol: "8155",
            price: 377.5,
            change: 1.16,
            changePercent: 2.29
      },
      {
            id: "8171",
            name: "天宇",
            symbol: "8171",
            price: 24,
            change: -0.08,
            changePercent: -0.08
      },
      {
            id: "8176",
            name: "智捷",
            symbol: "8176",
            price: 10.6,
            change: 0.93,
            changePercent: -1.15
      },
      {
            id: "8182",
            name: "加高",
            symbol: "8182",
            price: 39.05,
            change: 1.3,
            changePercent: -2.25
      },
      {
            id: "8183",
            name: "精星",
            symbol: "8183",
            price: 36.85,
            change: 0.27,
            changePercent: 1.49
      },
      {
            id: "8227",
            name: "巨有科技",
            symbol: "8227",
            price: 141,
            change: 2.08,
            changePercent: -1.49
      },
      {
            id: "8234",
            name: "新漢",
            symbol: "8234",
            price: 61,
            change: -1.95,
            changePercent: 1.65
      },
      {
            id: "8240",
            name: "華宏",
            symbol: "8240",
            price: 66.3,
            change: -1.56,
            changePercent: 0.47
      },
      {
            id: "8255",
            name: "朋程",
            symbol: "8255",
            price: 131.5,
            change: -1.45,
            changePercent: -2.12
      },
      {
            id: "8272",
            name: "全景軟體",
            symbol: "8272",
            price: 71.9,
            change: 0.32,
            changePercent: 1.36
      },
      {
            id: "8277",
            name: "商丞",
            symbol: "8277",
            price: 7.66,
            change: -0.65,
            changePercent: 1.78
      },
      {
            id: "8279",
            name: "生展",
            symbol: "8279",
            price: 106,
            change: -1.05,
            changePercent: -0.58
      },
      {
            id: "8284",
            name: "三竹",
            symbol: "8284",
            price: 63.8,
            change: -1.42,
            changePercent: -0.94
      },
      {
            id: "8289",
            name: "泰藝",
            symbol: "8289",
            price: 49.65,
            change: 0.12,
            changePercent: 1.64
      },
      {
            id: "8291",
            name: "尚茂",
            symbol: "8291",
            price: 13.5,
            change: -2,
            changePercent: 1.97
      },
      {
            id: "8299",
            name: "群聯",
            symbol: "8299",
            price: 1570,
            change: -1.46,
            changePercent: 0.33
      },
      {
            id: "8342",
            name: "益張",
            symbol: "8342",
            price: 92.8,
            change: -1.96,
            changePercent: -0.33
      },
      {
            id: "8349",
            name: "恒耀",
            symbol: "8349",
            price: 45.15,
            change: 1.88,
            changePercent: -0.57
      },
      {
            id: "8354",
            name: "冠好",
            symbol: "8354",
            price: 16.05,
            change: -2.1,
            changePercent: -2.31
      },
      {
            id: "8358",
            name: "金居",
            symbol: "8358",
            price: 367.5,
            change: -0.6,
            changePercent: -1.79
      },
      {
            id: "8383",
            name: "千附",
            symbol: "8383",
            price: 62.4,
            change: 0.14,
            changePercent: -2.22
      },
      {
            id: "8390",
            name: "金益鼎",
            symbol: "8390",
            price: 90,
            change: -1.67,
            changePercent: 1.82
      },
      {
            id: "8401",
            name: "白紗科",
            symbol: "8401",
            price: 24.85,
            change: 2.2,
            changePercent: -2.24
      },
      {
            id: "8403",
            name: "盛弘",
            symbol: "8403",
            price: 22.2,
            change: 2.21,
            changePercent: 1.42
      },
      {
            id: "8409",
            name: "商之器",
            symbol: "8409",
            price: 20.8,
            change: 0.58,
            changePercent: -2.3
      },
      {
            id: "8410",
            name: "森田",
            symbol: "8410",
            price: 37.1,
            change: 0.16,
            changePercent: 1.98
      },
      {
            id: "8415",
            name: "大國鋼",
            symbol: "8415",
            price: 33.7,
            change: -1.94,
            changePercent: 1.81
      },
      {
            id: "8416",
            name: "實威",
            symbol: "8416",
            price: 169.5,
            change: -1.56,
            changePercent: 0.67
      },
      {
            id: "8421",
            name: "旭源",
            symbol: "8421",
            price: 13.5,
            change: 2.28,
            changePercent: 0.21
      },
      {
            id: "8423",
            name: "保綠-KY",
            symbol: "8423",
            price: 18.3,
            change: 1.21,
            changePercent: 0.12
      },
      {
            id: "8424",
            name: "惠普",
            symbol: "8424",
            price: 74.7,
            change: -0.91,
            changePercent: 2.28
      },
      {
            id: "8426",
            name: "紅木-KY",
            symbol: "8426",
            price: 24.85,
            change: -1.68,
            changePercent: 1.86
      },
      {
            id: "8431",
            name: "匯鑽科",
            symbol: "8431",
            price: 66.2,
            change: 0.63,
            changePercent: -1.5
      },
      {
            id: "8432",
            name: "東生華",
            symbol: "8432",
            price: 50.8,
            change: 2.42,
            changePercent: 0.44
      },
      {
            id: "8433",
            name: "弘帆",
            symbol: "8433",
            price: 58.3,
            change: 1.71,
            changePercent: -0.57
      },
      {
            id: "8435",
            name: "鉅邁",
            symbol: "8435",
            price: 57.9,
            change: -2.12,
            changePercent: -0.55
      },
      {
            id: "8436",
            name: "大江",
            symbol: "8436",
            price: 125,
            change: 0.78,
            changePercent: 2.44
      },
      {
            id: "8437",
            name: "大地-KY",
            symbol: "8437",
            price: 12.5,
            change: -1.41,
            changePercent: 0.55
      },
      {
            id: "8440",
            name: "綠電",
            symbol: "8440",
            price: 22.65,
            change: -1.55,
            changePercent: -0.14
      },
      {
            id: "8444",
            name: "綠河-KY",
            symbol: "8444",
            price: 5.16,
            change: 0.28,
            changePercent: 1.44
      },
      {
            id: "8446",
            name: "華研",
            symbol: "8446",
            price: 90.5,
            change: -0.73,
            changePercent: -2.34
      },
      {
            id: "8450",
            name: "霹靂",
            symbol: "8450",
            price: 17.45,
            change: -1.45,
            changePercent: 1.28
      },
      {
            id: "8455",
            name: "大拓-KY",
            symbol: "8455",
            price: 20.7,
            change: 0.2,
            changePercent: -1.32
      },
      {
            id: "8472",
            name: "夠麻吉",
            symbol: "8472",
            price: 74.3,
            change: -0.04,
            changePercent: -2.08
      },
      {
            id: "8477",
            name: "創業家",
            symbol: "8477",
            price: 13.25,
            change: 0.93,
            changePercent: 0.44
      },
      {
            id: "8489",
            name: "三貝德",
            symbol: "8489",
            price: 26.8,
            change: -0.83,
            changePercent: 0.36
      },
      {
            id: "8905",
            name: "裕國",
            symbol: "8905",
            price: 40.55,
            change: -0.69,
            changePercent: 1.66
      },
      {
            id: "8906",
            name: "花王",
            symbol: "8906",
            price: 28.55,
            change: 0.83,
            changePercent: -0.7
      },
      {
            id: "8908",
            name: "欣雄",
            symbol: "8908",
            price: 41.75,
            change: -1.75,
            changePercent: 1.87
      },
      {
            id: "8916",
            name: "光隆",
            symbol: "8916",
            price: 47.55,
            change: 0.1,
            changePercent: -0.88
      },
      {
            id: "8917",
            name: "欣泰",
            symbol: "8917",
            price: 52.8,
            change: 0.34,
            changePercent: -0.7
      },
      {
            id: "8921",
            name: "沈氏",
            symbol: "8921",
            price: 17,
            change: -0.92,
            changePercent: 2.35
      },
      {
            id: "8923",
            name: "時報",
            symbol: "8923",
            price: 19.85,
            change: -0.74,
            changePercent: -2.25
      },
      {
            id: "8924",
            name: "大田",
            symbol: "8924",
            price: 68.4,
            change: 1.66,
            changePercent: 0.28
      },
      {
            id: "8927",
            name: "北基",
            symbol: "8927",
            price: 23.15,
            change: -2.09,
            changePercent: 0.73
      },
      {
            id: "8928",
            name: "鉅明",
            symbol: "8928",
            price: 23,
            change: 0.54,
            changePercent: 1.71
      },
      {
            id: "8929",
            name: "富堡",
            symbol: "8929",
            price: 15.55,
            change: 1.04,
            changePercent: -2.27
      },
      {
            id: "8930",
            name: "青鋼",
            symbol: "8930",
            price: 30.25,
            change: -2.49,
            changePercent: 0.26
      },
      {
            id: "8931",
            name: "大汽電",
            symbol: "8931",
            price: 42.4,
            change: -2.06,
            changePercent: -0.17
      },
      {
            id: "8932",
            name: "智通*",
            symbol: "8932",
            price: 89.9,
            change: 0.24,
            changePercent: -1.11
      },
      {
            id: "8933",
            name: "愛地雅",
            symbol: "8933",
            price: 6.55,
            change: 2.47,
            changePercent: -0.88
      },
      {
            id: "8935",
            name: "邦泰",
            symbol: "8935",
            price: 18.9,
            change: -1.39,
            changePercent: 0.97
      },
      {
            id: "8936",
            name: "國統",
            symbol: "8936",
            price: 50.1,
            change: -1.31,
            changePercent: 0.84
      },
      {
            id: "8937",
            name: "合騏*",
            symbol: "8937",
            price: 30.85,
            change: 0.9,
            changePercent: 0.06
      },
      {
            id: "8938",
            name: "明安",
            symbol: "8938",
            price: 63,
            change: -0.62,
            changePercent: 1.06
      },
      {
            id: "8941",
            name: "關中",
            symbol: "8941",
            price: 45.05,
            change: -1.45,
            changePercent: -1.41
      },
      {
            id: "8942",
            name: "森鉅",
            symbol: "8942",
            price: 44.85,
            change: 1.52,
            changePercent: 2.43
      },
      {
            id: "9949",
            name: "琉園",
            symbol: "9949",
            price: 35.5,
            change: 0.51,
            changePercent: 1.73
      },
      {
            id: "9950",
            name: "萬國通",
            symbol: "9950",
            price: 12.1,
            change: 1.99,
            changePercent: 1.97
      },
      {
            id: "9951",
            name: "皇田",
            symbol: "9951",
            price: 55.6,
            change: 0.04,
            changePercent: 1.97
      },
      {
            id: "9960",
            name: "邁達康",
            symbol: "9960",
            price: 27.5,
            change: 2.35,
            changePercent: -2.3
      },
      {
            id: "9962",
            name: "有益",
            symbol: "9962",
            price: 10.05,
            change: 0.66,
            changePercent: 0.97
      }
]
  },
  {
    id: "oes-market",
    name: "台灣興櫃企業 (OES)",
    macroCategory: '服務與生活',
    description: "興櫃市場企業，總計約 349 檔。為上市櫃前的育成搖籃，充滿未來爆發力的隱形冠軍。",
    icon: "Target",
    topStocks: [
      {
            id: "1260",
            name: "富味鄉",
            symbol: "1260",
            price: 25.59,
            change: -0.26,
            changePercent: -2.44
      },
      {
            id: "1269",
            name: "乾杯",
            symbol: "1269",
            price: 78.89,
            change: -0.09,
            changePercent: 0.59
      },
      {
            id: "1271",
            name: "晨暉生技",
            symbol: "1271",
            price: 59.89,
            change: -0.43,
            changePercent: -1.74
      },
      {
            id: "1293",
            name: "利統",
            symbol: "1293",
            price: 27.6,
            change: 2.13,
            changePercent: 1.92
      },
      {
            id: "1343",
            name: "旭東環保",
            symbol: "1343",
            price: 21.37,
            change: 1.59,
            changePercent: 1.63
      },
      {
            id: "1480",
            name: "東盟開發",
            symbol: "1480",
            price: 9.62,
            change: 1.43,
            changePercent: -2.43
      },
      {
            id: "1594",
            name: "日高",
            symbol: "1594",
            price: 9.57,
            change: 0.47,
            changePercent: -2.07
      },
      {
            id: "1780",
            name: "立弘",
            symbol: "1780",
            price: 28.23,
            change: 2.06,
            changePercent: -0.18
      },
      {
            id: "2071",
            name: "震南鐵",
            symbol: "2071",
            price: 23.02,
            change: 0.12,
            changePercent: -1.11
      },
      {
            id: "2237",
            name: "華德動能",
            symbol: "2237",
            price: 30.79,
            change: -2.23,
            changePercent: -0.22
      },
      {
            id: "2245",
            name: "詠勝昌*",
            symbol: "2245",
            price: 28.53,
            change: -0.71,
            changePercent: 0.71
      },
      {
            id: "2249",
            name: "湧盛",
            symbol: "2249",
            price: 114.84,
            change: 0.35,
            changePercent: -1.68
      },
      {
            id: "2252",
            name: "為昇科",
            symbol: "2252",
            price: 20.1,
            change: -0.39,
            changePercent: -0.25
      },
      {
            id: "2255",
            name: "凱銳光電",
            symbol: "2255",
            price: 22.52,
            change: 1.36,
            changePercent: 1.39
      },
      {
            id: "2256",
            name: "歐特明",
            symbol: "2256",
            price: 68.4,
            change: 1.92,
            changePercent: -1.45
      },
      {
            id: "2644",
            name: "中信造船",
            symbol: "2644",
            price: 84.45,
            change: 1.4,
            changePercent: -0.96
      },
      {
            id: "2733",
            name: "維格餅家",
            symbol: "2733",
            price: 12.1,
            change: 2.35,
            changePercent: -1.87
      },
      {
            id: "2741",
            name: "老四川",
            symbol: "2741",
            price: 25.59,
            change: 0.85,
            changePercent: 1.21
      },
      {
            id: "2758",
            name: "路易莎咖啡",
            symbol: "2758",
            price: 85.68,
            change: -0.15,
            changePercent: -0.55
      },
      {
            id: "2760",
            name: "巨宇翔",
            symbol: "2760",
            price: 21.92,
            change: 2.43,
            changePercent: -0.5
      },
      {
            id: "2761",
            name: "橘焱胡同",
            symbol: "2761",
            price: 15.65,
            change: -0.83,
            changePercent: -1.11
      },
      {
            id: "2938",
            name: "床的世界",
            symbol: "2938",
            price: 22.91,
            change: -1.61,
            changePercent: 2.42
      },
      {
            id: "2940",
            name: "歐都納",
            symbol: "2940",
            price: 23.46,
            change: -0.83,
            changePercent: -2.32
      },
      {
            id: "2942",
            name: "京站",
            symbol: "2942",
            price: 38.6,
            change: 2.3,
            changePercent: 1.38
      },
      {
            id: "3097",
            name: "拍檔",
            symbol: "3097",
            price: 26.16,
            change: 0.2,
            changePercent: 1.33
      },
      {
            id: "3117",
            name: "年程",
            symbol: "3117",
            price: 21.36,
            change: 2.34,
            changePercent: -0.48
      },
      {
            id: "3184",
            name: "微邦",
            symbol: "3184",
            price: 19.74,
            change: 0.59,
            changePercent: 1.76
      },
      {
            id: "3473",
            name: "智通聯網",
            symbol: "3473",
            price: 93.09,
            change: -1.03,
            changePercent: 2
      },
      {
            id: "3485",
            name: "敘豐",
            symbol: "3485",
            price: 287.78,
            change: 0,
            changePercent: 0.64
      },
      {
            id: "3585",
            name: "聯致",
            symbol: "3585",
            price: 68.68,
            change: -1.31,
            changePercent: 1.69
      },
      {
            id: "3595",
            name: "山太士",
            symbol: "3595",
            price: 2140.19,
            change: 1.74,
            changePercent: -1.09
      },
      {
            id: "3603",
            name: "建祥國際",
            symbol: "3603",
            price: 10.02,
            change: 1.03,
            changePercent: -0.89
      },
      {
            id: "3633",
            name: "云光",
            symbol: "3633",
            price: 113.93,
            change: 0.31,
            changePercent: 0.41
      },
      {
            id: "3659",
            name: "百辰",
            symbol: "3659",
            price: 27.65,
            change: 2.19,
            changePercent: 2.27
      },
      {
            id: "3678",
            name: "聯享",
            symbol: "3678",
            price: 72.28,
            change: 0.41,
            changePercent: 2.42
      },
      {
            id: "4115",
            name: "善德生技",
            symbol: "4115",
            price: 10.71,
            change: 1.31,
            changePercent: -0.57
      },
      {
            id: "4150",
            name: "優你康",
            symbol: "4150",
            price: 6.96,
            change: 1.48,
            changePercent: -1.03
      },
      {
            id: "4170",
            name: "鑫品生醫",
            symbol: "4170",
            price: 14.63,
            change: 0.63,
            changePercent: 1.86
      },
      {
            id: "4172",
            name: "因華",
            symbol: "4172",
            price: 14.91,
            change: 0.77,
            changePercent: 1.62
      },
      {
            id: "4178",
            name: "永笙-KY",
            symbol: "4178",
            price: 25.92,
            change: 1.43,
            changePercent: -1.87
      },
      {
            id: "4186",
            name: "尖端醫",
            symbol: "4186",
            price: 11.48,
            change: -0.98,
            changePercent: -2.41
      },
      {
            id: "4194",
            name: "禾生技",
            symbol: "4194",
            price: 8.35,
            change: 0.67,
            changePercent: 0.58
      },
      {
            id: "4195",
            name: "基米",
            symbol: "4195",
            price: 35.27,
            change: -1.28,
            changePercent: -0.8
      },
      {
            id: "4197",
            name: "暐世",
            symbol: "4197",
            price: 12.91,
            change: 0.88,
            changePercent: 0.3
      },
      {
            id: "4431",
            name: "敏成健康",
            symbol: "4431",
            price: 17.24,
            change: -0.38,
            changePercent: -1.16
      },
      {
            id: "4537",
            name: "旭東",
            symbol: "4537",
            price: 161.92,
            change: 1.68,
            changePercent: 0.94
      },
      {
            id: "4544",
            name: "春日",
            symbol: "4544",
            price: 17.06,
            change: -2.04,
            changePercent: 0.37
      },
      {
            id: "4546",
            name: "長亨",
            symbol: "4546",
            price: 139.68,
            change: 1.79,
            changePercent: 1.82
      },
      {
            id: "4553",
            name: "盛復",
            symbol: "4553",
            price: 27.24,
            change: 1.72,
            changePercent: 2.22
      },
      {
            id: "4559",
            name: "久裕興",
            symbol: "4559",
            price: 8.44,
            change: 0.87,
            changePercent: -0.15
      },
      {
            id: "4565",
            name: "宏偉",
            symbol: "4565",
            price: 103.57,
            change: -0.74,
            changePercent: -1.28
      },
      {
            id: "4570",
            name: "傑生",
            symbol: "4570",
            price: 66.5,
            change: -0.05,
            changePercent: 1.62
      },
      {
            id: "4573",
            name: "高明鐵",
            symbol: "4573",
            price: 492.33,
            change: -1.35,
            changePercent: -1.89
      },
      {
            id: "4575",
            name: "銓寶",
            symbol: "4575",
            price: 24.14,
            change: 1.06,
            changePercent: 0.12
      },
      {
            id: "4582",
            name: "聚恆",
            symbol: "4582",
            price: 29.85,
            change: -1.2,
            changePercent: 0.71
      },
      {
            id: "4587",
            name: "寶元數控",
            symbol: "4587",
            price: 50.31,
            change: -0.86,
            changePercent: -0.71
      },
      {
            id: "4589",
            name: "碩陽電機",
            symbol: "4589",
            price: 36.28,
            change: 2.13,
            changePercent: -0.46
      },
      {
            id: "4724",
            name: "宣捷幹細胞",
            symbol: "4724",
            price: 12.6,
            change: -0.64,
            changePercent: -2.43
      },
      {
            id: "4732",
            name: "彥臣",
            symbol: "4732",
            price: 19.12,
            change: -2.13,
            changePercent: 0.19
      },
      {
            id: "4738",
            name: "大同精化",
            symbol: "4738",
            price: 7.3,
            change: -0.61,
            changePercent: -1.36
      },
      {
            id: "4765",
            name: "磐采",
            symbol: "4765",
            price: 25.11,
            change: -2.35,
            changePercent: -0.9
      },
      {
            id: "4925",
            name: "智微",
            symbol: "4925",
            price: 101.2,
            change: -2.35,
            changePercent: -1.31
      },
      {
            id: "4980",
            name: "佐臻",
            symbol: "4980",
            price: 31.23,
            change: 0.8,
            changePercent: -0.31
      },
      {
            id: "5240",
            name: "建騰",
            symbol: "5240",
            price: 29.5,
            change: 0.88,
            changePercent: 1.78
      },
      {
            id: "5246",
            name: "勵威",
            symbol: "5246",
            price: 310.03,
            change: -0.37,
            changePercent: 1.05
      },
      {
            id: "5248",
            name: "景傳",
            symbol: "5248",
            price: 39.64,
            change: 0.3,
            changePercent: -2.16
      },
      {
            id: "5254",
            name: "欣訊科技",
            symbol: "5254",
            price: 33.79,
            change: 0.64,
            changePercent: 0.66
      },
      {
            id: "5262",
            name: "立達",
            symbol: "5262",
            price: 52.26,
            change: -1.25,
            changePercent: -1.66
      },
      {
            id: "5267",
            name: "龍翩",
            symbol: "5267",
            price: 44.59,
            change: 0.77,
            changePercent: 1.69
      },
      {
            id: "5271",
            name: "紘通",
            symbol: "5271",
            price: 27.18,
            change: -0.49,
            changePercent: 2.2
      },
      {
            id: "5297",
            name: "廣化",
            symbol: "5297",
            price: 139.91,
            change: 0,
            changePercent: -0.02
      },
      {
            id: "5859",
            name: "遠壽",
            symbol: "5859",
            price: 15.74,
            change: -1,
            changePercent: -2.29
      },
      {
            id: "5863",
            name: "瑞興銀",
            symbol: "5863",
            price: 10.92,
            change: 1.5,
            changePercent: 1.2
      },
      {
            id: "6027",
            name: "德信",
            symbol: "6027",
            price: 11.36,
            change: -0.65,
            changePercent: 1.16
      },
      {
            id: "6035",
            name: "悠遊卡",
            symbol: "6035",
            price: 51.9,
            change: -2.16,
            changePercent: -1.81
      },
      {
            id: "6407",
            name: "相互",
            symbol: "6407",
            price: 40.83,
            change: 0.92,
            changePercent: -0.89
      },
      {
            id: "6428",
            name: "淘米",
            symbol: "6428",
            price: 13.23,
            change: 1.03,
            changePercent: -1.73
      },
      {
            id: "6434",
            name: "達輝光電",
            symbol: "6434",
            price: 16.27,
            change: 2.37,
            changePercent: -1.65
      },
      {
            id: "6467",
            name: "泰合",
            symbol: "6467",
            price: 118.1,
            change: -0.24,
            changePercent: -1.3
      },
      {
            id: "6473",
            name: "美賣*",
            symbol: "6473",
            price: 8.89,
            change: 1.82,
            changePercent: 2.44
      },
      {
            id: "6483",
            name: "原創生醫",
            symbol: "6483",
            price: 16.04,
            change: 2.4,
            changePercent: -1.46
      },
      {
            id: "6493",
            name: "雷虎生",
            symbol: "6493",
            price: 24.13,
            change: 0.65,
            changePercent: 1.91
      },
      {
            id: "6518",
            name: "康科特",
            symbol: "6518",
            price: 34.26,
            change: -1.27,
            changePercent: -2.39
      },
      {
            id: "6536",
            name: "碩豐",
            symbol: "6536",
            price: 31.64,
            change: -0.56,
            changePercent: 2.34
      },
      {
            id: "6539",
            name: "麗彤",
            symbol: "6539",
            price: 50.69,
            change: 1.96,
            changePercent: 1.97
      },
      {
            id: "6543",
            name: "普惠醫工",
            symbol: "6543",
            price: 22.95,
            change: 1.09,
            changePercent: 0.75
      },
      {
            id: "6549",
            name: "景凱",
            symbol: "6549",
            price: 8.65,
            change: -2.49,
            changePercent: 2.48
      },
      {
            id: "6555",
            name: "榮炭",
            symbol: "6555",
            price: 26.7,
            change: -2.25,
            changePercent: -1.01
      },
      {
            id: "6559",
            name: "研晶",
            symbol: "6559",
            price: 36.05,
            change: -1.11,
            changePercent: 1.22
      },
      {
            id: "6563",
            name: "映智",
            symbol: "6563",
            price: 29.6,
            change: -2.36,
            changePercent: -1.12
      },
      {
            id: "6564",
            name: "安特羅",
            symbol: "6564",
            price: 18.61,
            change: 0.13,
            changePercent: -0.47
      },
      {
            id: "6565",
            name: "物聯",
            symbol: "6565",
            price: 21.97,
            change: 0.9,
            changePercent: -1.47
      },
      {
            id: "6572",
            name: "博錸",
            symbol: "6572",
            price: 12.66,
            change: -1.08,
            changePercent: 2.01
      },
      {
            id: "6580",
            name: "台睿",
            symbol: "6580",
            price: 15.82,
            change: 1.58,
            changePercent: -2.24
      },
      {
            id: "6583",
            name: "友松",
            symbol: "6583",
            price: 13.96,
            change: -0.15,
            changePercent: -1.95
      },
      {
            id: "6586",
            name: "醣基",
            symbol: "6586",
            price: 55,
            change: 1.78,
            changePercent: 1.6
      },
      {
            id: "6595",
            name: "光禹國際",
            symbol: "6595",
            price: 31.12,
            change: -0.47,
            changePercent: 1.86
      },
      {
            id: "6599",
            name: "普達系統",
            symbol: "6599",
            price: 56.5,
            change: 0.93,
            changePercent: 1.4
      },
      {
            id: "6604",
            name: "儒億",
            symbol: "6604",
            price: 27.03,
            change: -0.61,
            changePercent: 1.79
      },
      {
            id: "6610",
            name: "安成生技",
            symbol: "6610",
            price: 24.85,
            change: 1.79,
            changePercent: 0.04
      },
      {
            id: "6618",
            name: "永虹先進",
            symbol: "6618",
            price: 18.9,
            change: -1.96,
            changePercent: -2.1
      },
      {
            id: "6621",
            name: "華宇藥",
            symbol: "6621",
            price: 12.77,
            change: -1.81,
            changePercent: -2.35
      },
      {
            id: "6622",
            name: "百聿數碼",
            symbol: "6622",
            price: 9.25,
            change: -0.4,
            changePercent: -1.18
      },
      {
            id: "6634",
            name: "欣耀",
            symbol: "6634",
            price: 36.2,
            change: -0.99,
            changePercent: 0.34
      },
      {
            id: "6638",
            name: "沅聖",
            symbol: "6638",
            price: 40.61,
            change: -0.01,
            changePercent: -0.29
      },
      {
            id: "6639",
            name: "源大環能",
            symbol: "6639",
            price: 7.84,
            change: 0.36,
            changePercent: -1.89
      },
      {
            id: "6648",
            name: "斯其大",
            symbol: "6648",
            price: 18.66,
            change: 1.71,
            changePercent: -2.46
      },
      {
            id: "6650",
            name: "帝圖",
            symbol: "6650",
            price: 29.54,
            change: 0.58,
            changePercent: -0.2
      },
      {
            id: "6659",
            name: "天明製藥",
            symbol: "6659",
            price: 23.45,
            change: -0.65,
            changePercent: 1.77
      },
      {
            id: "6665",
            name: "康聯生醫",
            symbol: "6665",
            price: 23.27,
            change: 0.36,
            changePercent: 0.2
      },
      {
            id: "6673",
            name: "和詮",
            symbol: "6673",
            price: 26.41,
            change: 0.37,
            changePercent: -0.63
      },
      {
            id: "6676",
            name: "祥翊",
            symbol: "6676",
            price: 14,
            change: 1.45,
            changePercent: -1.98
      },
      {
            id: "6677",
            name: "瑩碩生技",
            symbol: "6677",
            price: 21.39,
            change: -0.89,
            changePercent: 1.86
      },
      {
            id: "6682",
            name: "華旭先進",
            symbol: "6682",
            price: 40.73,
            change: 0.99,
            changePercent: 1.12
      },
      {
            id: "6696",
            name: "仁新",
            symbol: "6696",
            price: 415.72,
            change: 1.75,
            changePercent: -0.23
      },
      {
            id: "6704",
            name: "國璽幹細胞",
            symbol: "6704",
            price: 21.76,
            change: -1.62,
            changePercent: -2.21
      },
      {
            id: "6705",
            name: "振躍精密",
            symbol: "6705",
            price: 72.88,
            change: -0.56,
            changePercent: 1.81
      },
      {
            id: "6707",
            name: "富基電通",
            symbol: "6707",
            price: 26.99,
            change: 1.5,
            changePercent: -0.86
      },
      {
            id: "6709",
            name: "昱厚生技",
            symbol: "6709",
            price: 25.89,
            change: 0.01,
            changePercent: 0.31
      },
      {
            id: "6723",
            name: "傑智環境",
            symbol: "6723",
            price: 34.93,
            change: 0.35,
            changePercent: 2.13
      },
      {
            id: "6729",
            name: "機光科技",
            symbol: "6729",
            price: 57.23,
            change: -0.61,
            changePercent: -2.33
      },
      {
            id: "6734",
            name: "安盛生",
            symbol: "6734",
            price: 7.36,
            change: 1.86,
            changePercent: 0.89
      },
      {
            id: "6737",
            name: "秀育",
            symbol: "6737",
            price: 33.78,
            change: -1.2,
            changePercent: 0.98
      },
      {
            id: "6738",
            name: "鼎恒",
            symbol: "6738",
            price: 72.29,
            change: 1.57,
            changePercent: 0.44
      },
      {
            id: "6744",
            name: "豐技生技",
            symbol: "6744",
            price: 15.68,
            change: 1.34,
            changePercent: 0.42
      },
      {
            id: "6748",
            name: "亞果生醫",
            symbol: "6748",
            price: 66.42,
            change: 0.09,
            changePercent: 0.94
      },
      {
            id: "6750",
            name: "泰創工程",
            symbol: "6750",
            price: 62.13,
            change: -1.88,
            changePercent: -1.72
      },
      {
            id: "6755",
            name: "連鋐科技",
            symbol: "6755",
            price: 21.47,
            change: 0.86,
            changePercent: 1.66
      },
      {
            id: "6758",
            name: "冠亞",
            symbol: "6758",
            price: 38.5,
            change: 0.88,
            changePercent: 0.11
      },
      {
            id: "6775",
            name: "穎台科技",
            symbol: "6775",
            price: 29.79,
            change: 0.37,
            changePercent: -1.91
      },
      {
            id: "6780",
            name: "學習王",
            symbol: "6780",
            price: 28.91,
            change: 1.11,
            changePercent: 1.27
      },
      {
            id: "6784",
            name: "天凱科技",
            symbol: "6784",
            price: 31.2,
            change: 1.05,
            changePercent: 2.01
      },
      {
            id: "6786",
            name: "芯測",
            symbol: "6786",
            price: 95.62,
            change: 2.05,
            changePercent: 2.22
      },
      {
            id: "6787",
            name: "晶瑞光",
            symbol: "6787",
            price: 34.36,
            change: 1.63,
            changePercent: -0.54
      },
      {
            id: "6793",
            name: "天力離岸",
            symbol: "6793",
            price: 5.93,
            change: 0.2,
            changePercent: 1.89
      },
      {
            id: "6797",
            name: "圓點奈米",
            symbol: "6797",
            price: 15.42,
            change: 1.46,
            changePercent: 1.05
      },
      {
            id: "6798",
            name: "展逸",
            symbol: "6798",
            price: 49.69,
            change: 0.43,
            changePercent: -1.72
      },
      {
            id: "6808",
            name: "三鼎生技",
            symbol: "6808",
            price: 31.84,
            change: -2.29,
            changePercent: -1.75
      },
      {
            id: "6810",
            name: "新穎生醫",
            symbol: "6810",
            price: 17.33,
            change: 1.83,
            changePercent: 0.67
      },
      {
            id: "6812",
            name: "梭特",
            symbol: "6812",
            price: 76.31,
            change: 1.15,
            changePercent: -1.03
      },
      {
            id: "6814",
            name: "路迦生醫",
            symbol: "6814",
            price: 23.54,
            change: 2.46,
            changePercent: -1.16
      },
      {
            id: "6815",
            name: "晶鑽生醫",
            symbol: "6815",
            price: 37.93,
            change: -1.99,
            changePercent: 0.02
      },
      {
            id: "6816",
            name: "捷智商訊",
            symbol: "6816",
            price: 36.1,
            change: -2.44,
            changePercent: -0.13
      },
      {
            id: "6817",
            name: "溫士頓",
            symbol: "6817",
            price: 67.95,
            change: 2.46,
            changePercent: 0.95
      },
      {
            id: "6818",
            name: "連騰",
            symbol: "6818",
            price: 87.85,
            change: 1.79,
            changePercent: -0.17
      },
      {
            id: "6819",
            name: "眾智",
            symbol: "6819",
            price: 27.1,
            change: 0.89,
            changePercent: -2.02
      },
      {
            id: "6820",
            name: "連訊",
            symbol: "6820",
            price: 337.68,
            change: 1.21,
            changePercent: 1.89
      },
      {
            id: "6825",
            name: "和暢科技",
            symbol: "6825",
            price: 41.08,
            change: -0.63,
            changePercent: 0.86
      },
      {
            id: "6826",
            name: "和淞",
            symbol: "6826",
            price: 554.29,
            change: 0.19,
            changePercent: -0.49
      },
      {
            id: "6827",
            name: "巨生醫",
            symbol: "6827",
            price: 12.18,
            change: 2.23,
            changePercent: 1.34
      },
      {
            id: "6832",
            name: "金鼎科",
            symbol: "6832",
            price: 64.13,
            change: 1.9,
            changePercent: 0.16
      },
      {
            id: "6833",
            name: "太康精密",
            symbol: "6833",
            price: 27.63,
            change: 0.04,
            changePercent: 2.24
      },
      {
            id: "6839",
            name: "開陽能源",
            symbol: "6839",
            price: 13.64,
            change: 0.89,
            changePercent: 1.13
      },
      {
            id: "6842",
            name: "瑞宇",
            symbol: "6842",
            price: 104.29,
            change: -0.09,
            changePercent: -0.14
      },
      {
            id: "6847",
            name: "普瑞博",
            symbol: "6847",
            price: 48.36,
            change: -1.32,
            changePercent: 0.72
      },
      {
            id: "6848",
            name: "拉法醫",
            symbol: "6848",
            price: 18.98,
            change: -1.8,
            changePercent: -2.02
      },
      {
            id: "6849",
            name: "奇鼎科技",
            symbol: "6849",
            price: 152.51,
            change: -1.55,
            changePercent: 1.16
      },
      {
            id: "6850",
            name: "光鼎生技",
            symbol: "6850",
            price: 37.42,
            change: 1.67,
            changePercent: 1.76
      },
      {
            id: "6857",
            name: "宏碁智醫",
            symbol: "6857",
            price: 97.15,
            change: 0.23,
            changePercent: 1.52
      },
      {
            id: "6858",
            name: "愛比科技",
            symbol: "6858",
            price: 26.73,
            change: 0.11,
            changePercent: -1.19
      },
      {
            id: "6864",
            name: "元樟生技",
            symbol: "6864",
            price: 55.62,
            change: 0.84,
            changePercent: -0.12
      },
      {
            id: "6867",
            name: "坦德科技",
            symbol: "6867",
            price: 24.49,
            change: -2.13,
            changePercent: -0.42
      },
      {
            id: "6868",
            name: "采威國際",
            symbol: "6868",
            price: 39.44,
            change: 0.25,
            changePercent: -1.52
      },
      {
            id: "6876",
            name: "朗齊生醫*",
            symbol: "6876",
            price: 21.34,
            change: -1.3,
            changePercent: 1.59
      },
      {
            id: "6878",
            name: "歐付寶",
            symbol: "6878",
            price: 11.85,
            change: 1.74,
            changePercent: -0.81
      },
      {
            id: "6879",
            name: "大江基因",
            symbol: "6879",
            price: 36.32,
            change: -0.23,
            changePercent: 0.74
      },
      {
            id: "6882",
            name: "甲尚",
            symbol: "6882",
            price: 20.48,
            change: -0.08,
            changePercent: -0.82
      },
      {
            id: "6883",
            name: "微電能源",
            symbol: "6883",
            price: 17.11,
            change: 2.05,
            changePercent: -0.32
      },
      {
            id: "6886",
            name: "遠東生技",
            symbol: "6886",
            price: 47.73,
            change: 1.41,
            changePercent: -1.51
      },
      {
            id: "6891",
            name: "樂迦再生",
            symbol: "6891",
            price: 50.45,
            change: 1.92,
            changePercent: 1.75
      },
      {
            id: "6892",
            name: "台寶生醫",
            symbol: "6892",
            price: 26.29,
            change: -0.67,
            changePercent: 0.6
      },
      {
            id: "6898",
            name: "程曦資訊",
            symbol: "6898",
            price: 116.5,
            change: -1.82,
            changePercent: 0.83
      },
      {
            id: "6911",
            name: "群運",
            symbol: "6911",
            price: 32.18,
            change: -0.86,
            changePercent: 0.36
      },
      {
            id: "6912",
            name: "益鈞環科*",
            symbol: "6912",
            price: 18.48,
            change: -2.43,
            changePercent: 2.27
      },
      {
            id: "6915",
            name: "美強光",
            symbol: "6915",
            price: 42.74,
            change: 1.79,
            changePercent: 0.97
      },
      {
            id: "6917",
            name: "竟天",
            symbol: "6917",
            price: 33.58,
            change: -0.4,
            changePercent: -0.86
      },
      {
            id: "6920",
            name: "恆勁科技",
            symbol: "6920",
            price: 78.94,
            change: 1.38,
            changePercent: 0.9
      },
      {
            id: "6926",
            name: "聖安生醫",
            symbol: "6926",
            price: 66.02,
            change: 0.29,
            changePercent: 1.41
      },
      {
            id: "6927",
            name: "聯合聚晶",
            symbol: "6927",
            price: 50.34,
            change: -1.33,
            changePercent: 1.48
      },
      {
            id: "6932",
            name: "水星生醫*",
            symbol: "6932",
            price: 8.08,
            change: 2,
            changePercent: 0
      },
      {
            id: "6935",
            name: "王子製藥",
            symbol: "6935",
            price: 30.47,
            change: -1.73,
            changePercent: 1.5
      },
      {
            id: "6938",
            name: "藍新資訊",
            symbol: "6938",
            price: 82.24,
            change: 0.21,
            changePercent: 1.71
      },
      {
            id: "6939",
            name: "啟弘生技",
            symbol: "6939",
            price: 20.1,
            change: -0.3,
            changePercent: -1.41
      },
      {
            id: "6940",
            name: "格斯科技*",
            symbol: "6940",
            price: 21.75,
            change: -2.44,
            changePercent: 2.15
      },
      {
            id: "6945",
            name: "圓祥生技",
            symbol: "6945",
            price: 193.64,
            change: 1.55,
            changePercent: -0.59
      },
      {
            id: "6946",
            name: "三地能源",
            symbol: "6946",
            price: 13.27,
            change: 1.74,
            changePercent: -2.3
      },
      {
            id: "6947",
            name: "台鎔科技",
            symbol: "6947",
            price: 80.65,
            change: 0.63,
            changePercent: -2
      },
      {
            id: "6959",
            name: "兆捷科技",
            symbol: "6959",
            price: 146.48,
            change: 0.61,
            changePercent: 0.47
      },
      {
            id: "6963",
            name: "品元",
            symbol: "6963",
            price: 26.58,
            change: 1.57,
            changePercent: 1.27
      },
      {
            id: "6972",
            name: "博瑞達應材",
            symbol: "6972",
            price: 25.06,
            change: 1.71,
            changePercent: -1.13
      },
      {
            id: "6973",
            name: "永立榮",
            symbol: "6973",
            price: 38.15,
            change: 1.59,
            changePercent: -1.45
      },
      {
            id: "6976",
            name: "育世博-KY",
            symbol: "6976",
            price: 12.26,
            change: 1.17,
            changePercent: 2.17
      },
      {
            id: "6977",
            name: "聯純",
            symbol: "6977",
            price: 308.1,
            change: 1.04,
            changePercent: -1.34
      },
      {
            id: "6979",
            name: "勝釩",
            symbol: "6979",
            price: 207.46,
            change: 2.26,
            changePercent: 1.48
      },
      {
            id: "6980",
            name: "鐳洋科技",
            symbol: "6980",
            price: 188.16,
            change: 1.8,
            changePercent: 1.94
      },
      {
            id: "6983",
            name: "華洋精機",
            symbol: "6983",
            price: 432.45,
            change: -0.27,
            changePercent: 1.61
      },
      {
            id: "6984",
            name: "ACpay",
            symbol: "6984",
            price: 23.9,
            change: 2.5,
            changePercent: 0.72
      },
      {
            id: "6986",
            name: "和迅",
            symbol: "6986",
            price: 60.41,
            change: 1.62,
            changePercent: -1.5
      },
      {
            id: "6987",
            name: "寶晶能源*",
            symbol: "6987",
            price: 19.63,
            change: 0.94,
            changePercent: -0.73
      },
      {
            id: "6990",
            name: "華鉬",
            symbol: "6990",
            price: 109.42,
            change: 0.48,
            changePercent: 2.01
      },
      {
            id: "6995",
            name: "野獸國",
            symbol: "6995",
            price: 52.67,
            change: 1.4,
            changePercent: 1.47
      },
      {
            id: "6999",
            name: "瀚醫生技",
            symbol: "6999",
            price: 30.18,
            change: 1.06,
            changePercent: 2.21
      },
      {
            id: "7419",
            name: "達勝",
            symbol: "7419",
            price: 207.56,
            change: 0.94,
            changePercent: -2.13
      },
      {
            id: "7427",
            name: "華上生醫",
            symbol: "7427",
            price: 30.7,
            change: 0.2,
            changePercent: 1.73
      },
      {
            id: "7443",
            name: "凡事康",
            symbol: "7443",
            price: 10.09,
            change: 1.12,
            changePercent: 0.4
      },
      {
            id: "7455",
            name: "樺緯物聯",
            symbol: "7455",
            price: 61.76,
            change: 1.31,
            changePercent: 0.98
      },
      {
            id: "7507",
            name: "環拓科技",
            symbol: "7507",
            price: 26.07,
            change: 2.32,
            changePercent: 1.25
      },
      {
            id: "7516",
            name: "清淨海",
            symbol: "7516",
            price: 9.4,
            change: -0.15,
            changePercent: -0.08
      },
      {
            id: "7530",
            name: "鋒魁科技",
            symbol: "7530",
            price: 38.6,
            change: -1.44,
            changePercent: 0.02
      },
      {
            id: "7551",
            name: "知識科技",
            symbol: "7551",
            price: 13.18,
            change: -1.77,
            changePercent: 1.36
      },
      {
            id: "7558",
            name: "群利科技",
            symbol: "7558",
            price: 23.06,
            change: -1.05,
            changePercent: -1.3
      },
      {
            id: "7561",
            name: "光晟生技",
            symbol: "7561",
            price: 21.96,
            change: 0.55,
            changePercent: -1.4
      },
      {
            id: "7562",
            name: "博來科技",
            symbol: "7562",
            price: 49,
            change: 1.17,
            changePercent: 1.98
      },
      {
            id: "7566",
            name: "亞果遊艇",
            symbol: "7566",
            price: 13.8,
            change: -1.73,
            changePercent: 2.13
      },
      {
            id: "7575",
            name: "安美得",
            symbol: "7575",
            price: 21,
            change: -0.99,
            changePercent: -1
      },
      {
            id: "7578",
            name: "利百景",
            symbol: "7578",
            price: 32.63,
            change: -0.74,
            changePercent: 0.7
      },
      {
            id: "7583",
            name: "國際海洋",
            symbol: "7583",
            price: 68.73,
            change: 2.39,
            changePercent: 0.09
      },
      {
            id: "7590",
            name: "怡和國際",
            symbol: "7590",
            price: 23.67,
            change: -0.28,
            changePercent: -1.35
      },
      {
            id: "7595",
            name: "世基生醫",
            symbol: "7595",
            price: 10.11,
            change: 1.12,
            changePercent: -0.97
      },
      {
            id: "7607",
            name: "通用幹細胞*",
            symbol: "7607",
            price: 15.35,
            change: -0.07,
            changePercent: -1
      },
      {
            id: "7669",
            name: "碩正科技",
            symbol: "7669",
            price: 876.25,
            change: 1.19,
            changePercent: 1.55
      },
      {
            id: "7689",
            name: "大鵬科CLMX",
            symbol: "7689",
            price: 235.2,
            change: 1.4,
            changePercent: -2.33
      },
      {
            id: "7702",
            name: "前端風電",
            symbol: "7702",
            price: 20.7,
            change: 0.72,
            changePercent: -2.31
      },
      {
            id: "7706",
            name: "宏碁創達",
            symbol: "7706",
            price: 41.4,
            change: -1.95,
            changePercent: -0.42
      },
      {
            id: "7707",
            name: "益芯科",
            symbol: "7707",
            price: 134.53,
            change: 0.92,
            changePercent: 1.74
      },
      {
            id: "7710",
            name: "東擎科技",
            symbol: "7710",
            price: 249.32,
            change: -0.44,
            changePercent: -1.69
      },
      {
            id: "7719",
            name: "碳基",
            symbol: "7719",
            price: 39.49,
            change: -0.23,
            changePercent: 1.5
      },
      {
            id: "7724",
            name: "諾亞克",
            symbol: "7724",
            price: 23.6,
            change: 2.2,
            changePercent: -1.83
      },
      {
            id: "7725",
            name: "列特博",
            symbol: "7725",
            price: 23.49,
            change: -1.08,
            changePercent: 2.04
      },
      {
            id: "7726",
            name: "暄達",
            symbol: "7726",
            price: 34.02,
            change: 0.19,
            changePercent: -0.77
      },
      {
            id: "7729",
            name: "仲恩生醫",
            symbol: "7729",
            price: 83.81,
            change: -2.15,
            changePercent: -0.33
      },
      {
            id: "7731",
            name: "火星生技*",
            symbol: "7731",
            price: 6,
            change: 1.52,
            changePercent: -0.93
      },
      {
            id: "7737",
            name: "凱鈿",
            symbol: "7737",
            price: 43,
            change: -1.32,
            changePercent: -1.58
      },
      {
            id: "7742",
            name: "天弘化",
            symbol: "7742",
            price: 238.69,
            change: 1.07,
            changePercent: 1.29
      },
      {
            id: "7745",
            name: "紅陽",
            symbol: "7745",
            price: 20.78,
            change: 1.81,
            changePercent: 1.63
      },
      {
            id: "7748",
            name: "鑫囍創業",
            symbol: "7748",
            price: 26.95,
            change: -0.68,
            changePercent: 0.01
      },
      {
            id: "7752",
            name: "世紀樺欣",
            symbol: "7752",
            price: 45.51,
            change: 0.77,
            changePercent: -0.47
      },
      {
            id: "7754",
            name: "安基生技",
            symbol: "7754",
            price: 60.55,
            change: 1.63,
            changePercent: -0.81
      },
      {
            id: "7756",
            name: "多那之",
            symbol: "7756",
            price: 42.88,
            change: 0.7,
            changePercent: 1.39
      },
      {
            id: "7758",
            name: "睿騰能源",
            symbol: "7758",
            price: 47.16,
            change: -0.09,
            changePercent: 1.2
      },
      {
            id: "7759",
            name: "視航生醫",
            symbol: "7759",
            price: 36.99,
            change: -1.37,
            changePercent: 1.94
      },
      {
            id: "7760",
            name: "享溫馨",
            symbol: "7760",
            price: 36.02,
            change: -2.08,
            changePercent: 1.58
      },
      {
            id: "7761",
            name: "三大未來",
            symbol: "7761",
            price: 38.06,
            change: 0.3,
            changePercent: -0.07
      },
      {
            id: "7762",
            name: "吉晟生",
            symbol: "7762",
            price: 48.84,
            change: -1.22,
            changePercent: -1.34
      },
      {
            id: "7763",
            name: "崇舜",
            symbol: "7763",
            price: 236.02,
            change: -1.47,
            changePercent: -1.7
      },
      {
            id: "7764",
            name: "聖州",
            symbol: "7764",
            price: 14.96,
            change: -2.06,
            changePercent: -1.87
      },
      {
            id: "7768",
            name: "頌勝科技",
            symbol: "7768",
            price: 444.52,
            change: -2.24,
            changePercent: -2.32
      },
      {
            id: "7771",
            name: "綠基",
            symbol: "7771",
            price: 62.94,
            change: 2.11,
            changePercent: 0.87
      },
      {
            id: "7772",
            name: "耀穎",
            symbol: "7772",
            price: 154.25,
            change: 1.88,
            changePercent: -0.3
      },
      {
            id: "7773",
            name: "富禾生醫",
            symbol: "7773",
            price: 23.11,
            change: 2.33,
            changePercent: 1.15
      },
      {
            id: "7776",
            name: "奧孟亞",
            symbol: "7776",
            price: 27.08,
            change: 0.1,
            changePercent: 1.12
      },
      {
            id: "7779",
            name: "鍇睿國際",
            symbol: "7779",
            price: 15.6,
            change: -1.35,
            changePercent: -0.03
      },
      {
            id: "7781",
            name: "昕力資*",
            symbol: "7781",
            price: 30.56,
            change: 0.23,
            changePercent: -1.43
      },
      {
            id: "7783",
            name: "佳運",
            symbol: "7783",
            price: 111.91,
            change: -2.28,
            changePercent: 1.74
      },
      {
            id: "7785",
            name: "北祥科服",
            symbol: "7785",
            price: 39.71,
            change: -0.21,
            changePercent: -1.92
      },
      {
            id: "7789",
            name: "開展",
            symbol: "7789",
            price: 33.04,
            change: 1.09,
            changePercent: 2.08
      },
      {
            id: "7790",
            name: "思必瑞特",
            symbol: "7790",
            price: 52.81,
            change: 0.98,
            changePercent: 1.22
      },
      {
            id: "7796",
            name: "擷發科",
            symbol: "7796",
            price: 106.31,
            change: 0.98,
            changePercent: 0.82
      },
      {
            id: "7797",
            name: "Q Burger",
            symbol: "7797",
            price: 56.08,
            change: -2.08,
            changePercent: 1.94
      },
      {
            id: "7798",
            name: "將捷",
            symbol: "7798",
            price: 15.49,
            change: 2.32,
            changePercent: 0.78
      },
      {
            id: "7801",
            name: "華芸科技",
            symbol: "7801",
            price: 123.38,
            change: -0.6,
            changePercent: -0.24
      },
      {
            id: "7803",
            name: "雲象科技",
            symbol: "7803",
            price: 30.03,
            change: -2.1,
            changePercent: 2.01
      },
      {
            id: "7806",
            name: "精華生醫",
            symbol: "7806",
            price: 75.54,
            change: 0.87,
            changePercent: 0.31
      },
      {
            id: "7808",
            name: "訊聯智藥",
            symbol: "7808",
            price: 46.35,
            change: 2.39,
            changePercent: 1.37
      },
      {
            id: "7812",
            name: "稜研科技*",
            symbol: "7812",
            price: 82.93,
            change: -0.99,
            changePercent: -1.7
      },
      {
            id: "7813",
            name: "宇辰系統",
            symbol: "7813",
            price: 154.88,
            change: 1.19,
            changePercent: 2.25
      },
      {
            id: "7814",
            name: "海昌生技",
            symbol: "7814",
            price: 40.28,
            change: -2,
            changePercent: 1.25
      },
      {
            id: "7815",
            name: "新特",
            symbol: "7815",
            price: 518.46,
            change: 1.57,
            changePercent: 1.68
      },
      {
            id: "7816",
            name: "來穎",
            symbol: "7816",
            price: 75.02,
            change: -1.5,
            changePercent: -0.25
      },
      {
            id: "7818",
            name: "溢泰實業",
            symbol: "7818",
            price: 121.34,
            change: 0.36,
            changePercent: 1.93
      },
      {
            id: "7819",
            name: "精誠金融",
            symbol: "7819",
            price: 68.89,
            change: -2.3,
            changePercent: -1.13
      },
      {
            id: "7820",
            name: "立盈",
            symbol: "7820",
            price: 181.88,
            change: -0.9,
            changePercent: -1.14
      },
      {
            id: "7824",
            name: "智寶",
            symbol: "7824",
            price: 44.67,
            change: 2,
            changePercent: 1.31
      },
      {
            id: "7825",
            name: "和亞智慧",
            symbol: "7825",
            price: 170.55,
            change: 0.41,
            changePercent: 1.15
      },
      {
            id: "7826",
            name: "極風雲創",
            symbol: "7826",
            price: 39.22,
            change: 1.55,
            changePercent: -1.01
      },
      {
            id: "7827",
            name: "漢康-KY",
            symbol: "7827",
            price: 141.51,
            change: 2.02,
            changePercent: 1.06
      },
      {
            id: "7828",
            name: "創新服務",
            symbol: "7828",
            price: 1406.61,
            change: 1.15,
            changePercent: 1.96
      },
      {
            id: "7829",
            name: "思捷優達-KY",
            symbol: "7829",
            price: 45.49,
            change: 1.47,
            changePercent: 0.98
      },
      {
            id: "7831",
            name: "捷博",
            symbol: "7831",
            price: 37.1,
            change: 1.44,
            changePercent: -1.63
      },
      {
            id: "7832",
            name: "智新生技*",
            symbol: "7832",
            price: 13.28,
            change: -2.47,
            changePercent: 0.21
      },
      {
            id: "7833",
            name: "綠岩能源",
            symbol: "7833",
            price: 29.14,
            change: 1.4,
            changePercent: 0.6
      },
      {
            id: "7834",
            name: "來毅數位",
            symbol: "7834",
            price: 22.2,
            change: -0.31,
            changePercent: -2.09
      },
      {
            id: "7836",
            name: "智生活",
            symbol: "7836",
            price: 59.56,
            change: 1.6,
            changePercent: 1.53
      },
      {
            id: "7837",
            name: "啟新生",
            symbol: "7837",
            price: 106.5,
            change: -1.88,
            changePercent: 1.67
      },
      {
            id: "7839",
            name: "達人網",
            symbol: "7839",
            price: 62,
            change: 2.4,
            changePercent: 2.1
      },
      {
            id: "7840",
            name: "祥圃",
            symbol: "7840",
            price: 36.5,
            change: 1.1,
            changePercent: -2.45
      },
      {
            id: "7841",
            name: "經貿聯網",
            symbol: "7841",
            price: 32.34,
            change: -0.21,
            changePercent: 0.48
      },
      {
            id: "7842",
            name: "天能綠電",
            symbol: "7842",
            price: 152.72,
            change: -1.65,
            changePercent: -0.66
      },
      {
            id: "7843",
            name: "英柏得",
            symbol: "7843",
            price: 107.8,
            change: 0.7,
            changePercent: -2.48
      },
      {
            id: "7846",
            name: "德揚",
            symbol: "7846",
            price: 89.47,
            change: 0.94,
            changePercent: -2.49
      },
      {
            id: "7847",
            name: "豊漁",
            symbol: "7847",
            price: 24.52,
            change: -2.41,
            changePercent: 2.3
      },
      {
            id: "7848",
            name: "騏億鑫",
            symbol: "7848",
            price: 444.24,
            change: 2.39,
            changePercent: -0.61
      },
      {
            id: "7849",
            name: "旭誼",
            symbol: "7849",
            price: 144.21,
            change: -2.44,
            changePercent: 1.6
      },
      {
            id: "7850",
            name: "寶泰生醫",
            symbol: "7850",
            price: 24.4,
            change: -1.02,
            changePercent: -0.76
      },
      {
            id: "7851",
            name: "慧康生技*-KY",
            symbol: "7851",
            price: 36.6,
            change: -0.63,
            changePercent: 2.26
      },
      {
            id: "7853",
            name: "政美應用",
            symbol: "7853",
            price: 429.07,
            change: 0.06,
            changePercent: -1.61
      },
      {
            id: "7854",
            name: "佐茂",
            symbol: "7854",
            price: 69.02,
            change: -1.53,
            changePercent: 1.16
      },
      {
            id: "7855",
            name: "和運租車",
            symbol: "7855",
            price: 106.53,
            change: -0.46,
            changePercent: 1.26
      },
      {
            id: "7856",
            name: "漢測",
            symbol: "7856",
            price: 3312.16,
            change: 2.48,
            changePercent: 1.45
      },
      {
            id: "7857",
            name: "合水先進",
            symbol: "7857",
            price: 48.19,
            change: -1.9,
            changePercent: 0.96
      },
      {
            id: "7858",
            name: "芝普",
            symbol: "7858",
            price: 309.51,
            change: -0.38,
            changePercent: -0.66
      },
      {
            id: "7860",
            name: "得生製藥",
            symbol: "7860",
            price: 64.9,
            change: 1.82,
            changePercent: 2.17
      },
      {
            id: "7861",
            name: "貝爾威勒",
            symbol: "7861",
            price: 893.77,
            change: -0.32,
            changePercent: 2.04
      },
      {
            id: "7862",
            name: "聚泰",
            symbol: "7862",
            price: 42.15,
            change: -1.99,
            changePercent: -1.23
      },
      {
            id: "7863",
            name: "中科物流",
            symbol: "7863",
            price: 47.6,
            change: -0.74,
            changePercent: -1.07
      },
      {
            id: "7865",
            name: "金聯成",
            symbol: "7865",
            price: 48.33,
            change: -1.41,
            changePercent: -1.72
      },
      {
            id: "7866",
            name: "丹立",
            symbol: "7866",
            price: 189.51,
            change: 1.27,
            changePercent: 0.43
      },
      {
            id: "7867",
            name: "特力屋",
            symbol: "7867",
            price: 52.2,
            change: 2.15,
            changePercent: 1.75
      },
      {
            id: "7868",
            name: "聖育",
            symbol: "7868",
            price: 96.65,
            change: -2.33,
            changePercent: 0.41
      },
      {
            id: "7869",
            name: "宏于電機",
            symbol: "7869",
            price: 436.28,
            change: 1.68,
            changePercent: -0.63
      },
      {
            id: "7870",
            name: "聯剛科技",
            symbol: "7870",
            price: 182.39,
            change: -1.18,
            changePercent: -1.5
      },
      {
            id: "7871",
            name: "安立璽榮-KY",
            symbol: "7871",
            price: 71.07,
            change: -1.35,
            changePercent: -0.24
      },
      {
            id: "7872",
            name: "登豐",
            symbol: "7872",
            price: 83.5,
            change: -1.8,
            changePercent: -0.03
      },
      {
            id: "7875",
            name: "安圖斯",
            symbol: "7875",
            price: 150,
            change: -2.33,
            changePercent: -0.72
      },
      {
            id: "7876",
            name: "鼎晉生技",
            symbol: "7876",
            price: 38,
            change: -2,
            changePercent: 1.19
      },
      {
            id: "7877",
            name: "海利普",
            symbol: "7877",
            price: 41.79,
            change: 0.65,
            changePercent: 0.84
      },
      {
            id: "7878",
            name: "藥祇",
            symbol: "7878",
            price: 298.61,
            change: -2.36,
            changePercent: -1.38
      },
      {
            id: "7879",
            name: "益材科技",
            symbol: "7879",
            price: 112.87,
            change: -2.17,
            changePercent: 1.02
      },
      {
            id: "7880",
            name: "聖凰",
            symbol: "7880",
            price: 207.33,
            change: -0.32,
            changePercent: 1.67
      },
      {
            id: "7881",
            name: "科明",
            symbol: "7881",
            price: 98.67,
            change: -0.06,
            changePercent: 1.79
      },
      {
            id: "7882",
            name: "倍利創投",
            symbol: "7882",
            price: 22.48,
            change: 1.75,
            changePercent: -1.49
      },
      {
            id: "7883",
            name: "饗賓",
            symbol: "7883",
            price: 264.4,
            change: -0.3,
            changePercent: -0.34
      },
      {
            id: "7885",
            name: "宏羚",
            symbol: "7885",
            price: 23.98,
            change: 2.2,
            changePercent: -0.15
      },
      {
            id: "7886",
            name: "科建",
            symbol: "7886",
            price: 232,
            change: 2.2,
            changePercent: 1.03
      },
      {
            id: "7887",
            name: "宇川精材",
            symbol: "7887",
            price: 284.18,
            change: 1.82,
            changePercent: -0.5
      },
      {
            id: "7888",
            name: "麗寶新藥",
            symbol: "7888",
            price: 43,
            change: 1.14,
            changePercent: -2.33
      },
      {
            id: "7889",
            name: "騰勢",
            symbol: "7889",
            price: 95.72,
            change: 0.05,
            changePercent: 0.99
      },
      {
            id: "7890",
            name: "明曜科技",
            symbol: "7890",
            price: 121.49,
            change: -1.25,
            changePercent: -0.98
      },
      {
            id: "7891",
            name: "博研醫藥",
            symbol: "7891",
            price: 27.59,
            change: 0.25,
            changePercent: 2.21
      },
      {
            id: "7892",
            name: "元鈦科",
            symbol: "7892",
            price: 1184.45,
            change: -0.5,
            changePercent: -1.22
      },
      {
            id: "7893",
            name: "睿信",
            symbol: "7893",
            price: 223.87,
            change: 1.02,
            changePercent: 2.47
      },
      {
            id: "7895",
            name: "元進莊",
            symbol: "7895",
            price: 70.98,
            change: -0.35,
            changePercent: 1.89
      },
      {
            id: "7896",
            name: "喬越",
            symbol: "7896",
            price: 361.53,
            change: -0.04,
            changePercent: -0.08
      },
      {
            id: "7897",
            name: "禾迅綠電",
            symbol: "7897",
            price: 42.48,
            change: -0.8,
            changePercent: -1.86
      },
      {
            id: "7899",
            name: "景美",
            symbol: "7899",
            price: 617.66,
            change: -2,
            changePercent: 1.15
      },
      {
            id: "7901",
            name: "大大寬頻",
            symbol: "7901",
            price: 78.3,
            change: -1.63,
            changePercent: -2.25
      },
      {
            id: "7902",
            name: "宇越生醫*",
            symbol: "7902",
            price: 45.42,
            change: -1.64,
            changePercent: -1.85
      },
      {
            id: "7904",
            name: "任開數位",
            symbol: "7904",
            price: 25.85,
            change: -1.5,
            changePercent: -1.62
      },
      {
            id: "7909",
            name: "鈺祥",
            symbol: "7909",
            price: 928.7,
            change: -0.44,
            changePercent: -1.29
      },
      {
            id: "8058",
            name: "耐特",
            symbol: "8058",
            price: 140.11,
            change: 0.77,
            changePercent: -2.5
      },
      {
            id: "8098",
            name: "慶康科技",
            symbol: "8098",
            price: 435.87,
            change: 2.01,
            changePercent: -1.09
      },
      {
            id: "8119",
            name: "公信",
            symbol: "8119",
            price: 12.6,
            change: -1.09,
            changePercent: -0.79
      },
      {
            id: "8298",
            name: "威睿",
            symbol: "8298",
            price: 58.99,
            change: -2.39,
            changePercent: -0.56
      },
      {
            id: "8329",
            name: "台視",
            symbol: "8329",
            price: 10.45,
            change: 0.29,
            changePercent: -2.39
      },
      {
            id: "8345",
            name: "超秦",
            symbol: "8345",
            price: 56.3,
            change: -0.56,
            changePercent: 0.18
      },
      {
            id: "8359",
            name: "錢櫃",
            symbol: "8359",
            price: 69.52,
            change: -1.52,
            changePercent: -0.84
      },
      {
            id: "8458",
            name: "影一",
            symbol: "8458",
            price: 14.59,
            change: -1.8,
            changePercent: -1.44
      },
      {
            id: "8999",
            name: "台灣積層",
            symbol: "8999",
            price: 38.41,
            change: 0,
            changePercent: -0.24
      },
      {
            id: "9957",
            name: "燁聯",
            symbol: "9957",
            price: 6,
            change: 0.72,
            changePercent: 1.86
      }
]
  }
];

export const macroCategories = ['電子產業', '傳統產業', '金融保險', '生技醫療', '服務與生活', '新創與環境'];
