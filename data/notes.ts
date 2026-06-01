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

export type Note = {
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  clinicalSummary: string;
  blocks: NoteBlock[];
};

export const notes: Note[] = [
  {
    slug: "chronic-otitis-media",
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
            value:
              "Otoskopi veya mikroskopi ile membran ve orta kulak değerlendirilir.",
          },
          {
            label: "İşitme",
            value:
              "Saf ses odyometri ile iletim veya mikst kayıp araştırılır.",
          },
          {
            label: "Görüntüleme",
            value:
              "Seçilmiş hastalarda temporal kemik incelemesi planlanır.",
          },
          {
            label: "Cerrahi amaç",
            value:
              "Güvenli ve kuru kulak, uygun hastada işitme restorasyonu.",
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
  },
  {
    slug: "cholesteatoma",
    category: "Otoloji",
    title: "Kolesteatom",
    subtitle: "Klinik bulgular, görüntüleme ve cerrahi yaklaşım",

    clinicalSummary:
      "Kolesteatom, keratinize skuamöz epitelin orta kulak ve/veya mastoid bölgede birikerek lokal destrüksiyon oluşturabildiği kronik kulak hastalığıdır. Kemik erozyonu ve komplikasyon riski nedeniyle cerrahi değerlendirme önem taşır.",

    blocks: [
      {
        type: "paragraph",
        title: "Tanım",
        content:
          "Kolesteatom, orta kulak veya mastoid içinde keratin debris birikimiyle seyreden ve çevre yapılarda erozyona yol açabilen patolojik bir süreçtir. Edinilmiş tipte retraksiyon cebi ve kronik östaki disfonksiyonu önemli mekanizmalar arasındadır.",
      },
      {
        type: "bulletList",
        title: "Klinik Şüphe Uyandıran Bulgular",
        items: [
          "Kötü kokulu veya tekrarlayan kulak akıntısı",
          "Retraksiyon cebi içerisinde keratin debris görülmesi",
          "İletim tipi veya mikst işitme kaybı",
          "Granülasyon dokusu ya da polipoid görünüm",
          "Vertigo, fasiyal paralizi veya intrakraniyal komplikasyon bulguları",
        ],
      },
      {
        type: "important",
        title: "Önemli Klinik Nokta",
        content:
          "Kolesteatom şüphesinde normal görünen sınırlı bir otoskopik alan hastalığı dışlamaz. Attik bölge, posterior superior kadran ve mastoid yayılım olasılığı dikkatle değerlendirilmelidir.",
      },
      {
        type: "table",
        title: "Değerlendirme Özeti",
        rows: [
          {
            label: "Otoskopi",
            value:
              "Retraksiyon cebi, keratin birikimi, granülasyon ve akıntı değerlendirilir.",
          },
          {
            label: "Odyometri",
            value:
              "Hastalığa eşlik eden işitme kaybının tipi ve derecesi belirlenir.",
          },
          {
            label: "BT",
            value:
              "Kemik erozyonu ve anatomik yayılımın değerlendirilmesinde yararlıdır.",
          },
          {
            label: "Difüzyon MRG",
            value:
              "Seçilmiş olgularda rezidüel veya rekürren hastalık değerlendirmesinde kullanılabilir.",
          },
        ],
      },
      {
        type: "paragraph",
        title: "Tedavi Yaklaşımı",
        content:
          "Kolesteatom tedavisinin temel amacı hastalığın temizlenmesi, komplikasyon riskinin azaltılması ve mümkün olduğunda işitmenin korunması veya iyileştirilmesidir. Cerrahi yaklaşım hastalığın yaygınlığına, anatomiye ve hastanın izlem koşullarına göre planlanır.",
      },
      {
        type: "examTip",
        title: "Sınav Notu",
        content:
          "Kolesteatom, kemik erozyonu ve ciddi komplikasyon riski taşıması nedeniyle kronik kulak hastalıkları içinde cerrahi yaklaşım gerektiren temel patolojilerden biridir.",
      },
    ],
  },
  {
    slug: "sudden-hearing-loss",
    category: "Otoloji",
    title: "Ani İşitme Kaybı",
    subtitle: "Acil değerlendirme, tanısal yaklaşım ve tedavi seçenekleri",

    clinicalSummary:
      "Ani sensörinöral işitme kaybı, hızlı değerlendirme gerektiren otolojik bir klinik tablodur. İlk yaklaşımda iletim tipi kayıp dışlanmalı, işitme kaybı odyometri ile doğrulanmalı ve uygun hastada erken tedavi seçenekleri değerlendirilmelidir.",

    blocks: [
      {
        type: "paragraph",
        title: "Klinik Yaklaşım",
        content:
          "Ani işitme kaybı ile başvuran hastada ilk amaç, iletim tipi işitme kaybı ile sensörinöral işitme kaybını ayırt etmektir. Öykü ve fizik muayenede bilateral kayıp, rekürren ataklar ve fokal nörolojik bulgular özellikle sorgulanmalıdır.",
      },
      {
        type: "bulletList",
        title: "İlk Değerlendirmede Temel Noktalar",
        items: [
          "Otoskopik muayene ile dış ve orta kulak patolojisinin değerlendirilmesi",
          "Sensörinöral kaybı doğrulamak için mümkün olan en kısa sürede odyometri planlanması",
          "Bilateral kayıp, tekrarlayan atak veya fokal nörolojik bulguların sorgulanması",
          "Retrokochlear patoloji açısından MRG veya uygun hastada ABR değerlendirmesi",
          "Tedavi zamanlamasının semptom başlangıcına göre planlanması",
        ],
      },
      {
        type: "important",
        title: "Zaman Kritik",
        content:
          "Ani sensörinöral işitme kaybında odyometrik doğrulama geciktirilmemelidir. Başlangıç tedavisi için kortikosteroid seçeneği ilk 2 hafta içinde değerlendirilebilir; yetersiz iyileşmede intratimpanik steroid salvage tedavisi başlangıçtan sonraki 2–6 hafta içinde gündeme gelir.",
      },
      {
        type: "table",
        title: "Kılavuz Temelli Kısa Özet",
        rows: [
          {
            label: "Odyometri",
            value:
              "Tanısal doğrulama için mümkün olan en kısa sürede, semptom başlangıcından itibaren 14 gün içinde planlanır.",
          },
          {
            label: "MRG / ABR",
            value:
              "Retrokochlear patolojinin değerlendirilmesi amacıyla kullanılır.",
          },
          {
            label: "Başlangıç steroid",
            value:
              "Uygun hastada semptom başlangıcından itibaren ilk 2 hafta içinde seçenek olarak değerlendirilebilir.",
          },
          {
            label: "Salvage IT steroid",
            value:
              "Eksik iyileşme bulunan hastada başlangıçtan sonraki 2–6 hafta içinde önerilir.",
          },
          {
            label: "Takip",
            value:
              "Tedavi sonunda ve tedavinin tamamlanmasından sonraki 6 ay içinde odyometrik değerlendirme yapılır.",
          },
        ],
      },
      {
        type: "examTip",
        title: "Sınav Notu",
        content:
          "Ani sensörinöral işitme kaybında rutin kafa BT incelemesi ve rutin laboratuvar testleri önerilmez. Antiviral, trombolitik, vazodilatör veya vazoaktif ilaçlar da rutin olarak başlanmamalıdır.",
      },
    ],
  },
];

export function getNoteBySlug(slug: string): Note | undefined {
  return notes.find((note) => note.slug === slug);
}