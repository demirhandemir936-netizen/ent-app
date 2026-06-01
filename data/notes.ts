export type NoteBlock =
  | {
      type: "paragraph";
      title: string;
      content: string;
    }
  | {
      type: "bulletList";
      title: string;
      items: string[];
    }
  | {
      type: "important";
      title: string;
      content: string;
    }
  | {
      type: "examTip";
      title: string;
      content: string;
    }
  | {
      type: "table";
      title: string;
      rows: {
        label: string;
        value: string;
      }[];
    };

type Note = {
  category: string;
  title: string;
  subtitle: string;
  clinicalSummary: string;
  blocks: NoteBlock[];
};

export const chronicOtitisMediaNote: Note = {
  category: "Otoloji",
  title: "Kronik Otitis Media",
  subtitle: "Tanı, sınıflama ve temel cerrahi yaklaşım",

  clinicalSummary:
    "Kronik otitis media, orta kulak ve mastoid havalı hücre sisteminde süregelen inflamatuvar hastalık tablosudur. Tedavi yaklaşımı hastalık tipi, işitme durumu ve komplikasyon riskine göre planlanır.",

  blocks: [
    {
      type: "paragraph",
      title: "Tanım",
      content:
        "Kronik otitis media; timpanik membran, orta kulak mukozası ve gerektiğinde mastoid sistemin etkilendiği kronik inflamatuvar bir süreçtir. Klinik yaklaşımda perforasyon, akıntı, kolesteatom varlığı ve işitme kaybı özellikle değerlendirilir.",
    },
    {
      type: "bulletList",
      title: "Değerlendirmede Temel Noktalar",
      items: [
        "Otoskopik veya mikroskopik kulak muayenesi",
        "Perforasyonun yeri ve karakterinin değerlendirilmesi",
        "Aktif akıntı ve kolesteatom şüphesinin araştırılması",
        "Saf ses odyometri ile işitme durumunun belirlenmesi",
        "Gerekli hastada temporal kemik görüntüleme planlanması",
      ],
    },
    {
      type: "important",
      title: "Önemli Klinik Nokta",
      content:
        "Kolesteatom şüphesi bulunan bir kronik otitis media olgusunda hastalık yalnızca perforasyon ve akıntı üzerinden değerlendirilmemeli; kemik erozyonu ve komplikasyon riski dikkate alınmalıdır.",
    },
    {
      type: "paragraph",
      title: "Cerrahi Yaklaşım",
      content:
        "Cerrahinin temel amaçları hastalığın eradikasyonu, güvenli ve kuru bir kulak elde edilmesi ve uygun hastada işitmenin rekonstrüksiyonudur. Uygulanacak teknik hastalığın yaygınlığına göre belirlenir.",
    },
    {
      type: "table",
      title: "Kısa Değerlendirme Tablosu",
      rows: [
        {
          label: "Muayene",
          value: "Otoskopi veya mikroskopi ile membran ve orta kulak değerlendirilir.",
        },
        {
          label: "İşitme",
          value: "Saf ses odyometri ile iletim veya mikst kayıp araştırılır.",
        },
        {
          label: "Görüntüleme",
          value: "Seçilmiş hastalarda temporal kemik incelemesi planlanır.",
        },
        {
          label: "Cerrahi amaç",
          value: "Güvenli ve kuru kulak, uygun hastada işitme restorasyonu.",
        },
      ],
    },
    {
      type: "examTip",
      title: "Sınav Notu",
      content:
        "Kronik kulak hastalığında kolesteatom varlığı, cerrahi planı ve komplikasyon riskini belirgin biçimde etkileyen temel bulgulardan biridir.",
    },
  ],
};