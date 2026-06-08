import { Service } from "@/features/subscriptions/types/service";

export const services: Service[] = [
  {
    id: 1,
    name: "Netflix",
    category: "video",
    url: "https://www.netflix.com/jp/",
    plans: [
      {
        id: "with-ads",
        name: "広告つきスタンダード",
        price: 790,
      },
      {
        id: "standard",
        name: "スタンダード",
        price: 1490,
      },
      {
        id: "premium",
        name: "プレミアム",
        price: 1980,
      },
    ],
  },

  {
    id: 2,
    name: "Disney+",
    category: "video",
    url: "https://www.disneyplus.com/ja-jp",
    plans: [
      {
        id: "standard",
        name: "スタンダード",
        price: 1140,
      },
      {
        id: "premium",
        name: "プレミアム",
        price: 1520,
      },
    ],
  },

  {
    id: 3,
    name: "U-NEXT",
    category: "video",
    url: "https://video.unext.jp/",
    plans: [
      {
        id: "standard",
        name: "月額プラン",
        price: 2189,
      },
    ],
  },

  {
    id: 4,
    name: "Prime Video",
    category: "video",
    url: "https://www.amazon.co.jp/primevideo",
    plans: [
      {
        id: "prime",
        name: "Prime会員",
        price: 600,
      },
    ],
  },

  {
    id: 5,
    name: "Hulu",
    category: "video",
    url: "https://www.hulu.jp/",
    plans: [
      {
        id: "standard",
        name: "通常プラン",
        price: 1026,
      },
    ],
  },

  {
    id: 6,
    name: "ABEMA",
    category: "video",
    url: "https://abema.tv/",
    plans: [
      {
        id: "premium",
        name: "プレミアム",
        price: 1080,
      },
    ],
  },

  {
    id: 7,
    name: "DMM TV",
    category: "video",
    url: "https://premium.dmm.com/welcome/",
    plans: [
      {
        id: "standard",
        name: "スタンダード",
        price: 550,
      },
    ],
  },

  {
    id: 8,
    name: "Apple TV+",
    category: "video",
    url: "https://tv.apple.com/jp",
    plans: [
      {
        id: "standard",
        name: "通常プラン",
        price: 900,
      },
    ],
  },

  {
    id: 9,
    name: "YouTube Premium",
    category: "video",
    url: "https://www.youtube.com/premium",
    plans: [
      {
        id: "individual",
        name: "個人",
        price: 1280,
      },
      {
        id: "family",
        name: "ファミリー",
        price: 2280,
      },
      {
        id: "student",
        name: "学生",
        price: 780,
      },
    ],
  },
];
