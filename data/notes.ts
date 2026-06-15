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
  {
    slug: "acute-rhinosinusitis",
    category: "Rinoloji",
    title: "Akut Rinosinüzit",
    subtitle: "Viral, post-viral ve bakteriyel ayrımıyla poliklinik yaklaşımı",

    clinicalSummary:
      "Akut rinosinüzit; 12 haftadan kısa süren, burun ve paranazal sinüs mukozasının inflamatuvar tablosudur. Poliklinikte asıl amaç viral/post-viral süreci akut bakteriyel rinosinüzitten ayırmak, komplikasyon alarm bulgularını dışlamak ve gereksiz antibiyotik-görüntüleme kullanımından kaçınmaktır.",

    blocks: [
      {
        type: "paragraph",
        title: "Poliklinik Yaklaşımı",
        content:
          "Akut rinosinüzit çoğu hastada üst solunum yolu enfeksiyonu sonrası gelişir ve viral ya da post-viral karakterdedir. Pürülan veya koyu renkli akıntı tek başına bakteriyel enfeksiyon anlamına gelmez. Klinik karar; semptom süresi, seyri, şiddeti, komorbidite ve komplikasyon bulgularına göre verilmelidir.",
      },
      {
        type: "bulletList",
        title: "Poliklinikte İlk 60 Saniye",
        items: [
          "Semptom kaç gündür var?",
          "İlk günlere göre düzeliyor mu, aynı mı, kötüleşiyor mu?",
          "Nazal tıkanıklık ve akıntı ana yakınma mı?",
          "Fasiyal ağrı-basınç tek taraflı mı, şiddetli mi?",
          "Ateş, toksik görünüm veya sistemik hastalık var mı?",
          "Göz çevresi şişlik, görme bozukluğu, çift görme veya nörolojik bulgu var mı?",
          "İmmünsüpresyon, diyabet, kemoterapi, transplantasyon veya invaziv fungal enfeksiyon riski var mı?",
        ],
      },
      {
        type: "bulletList",
        title: "Mutlaka Sorulacak Sorular",
        items: [
          "Burun akıntısı anterior mu, postnazal mı?",
          "Koku azalması var mı?",
          "Öksürük gece artıyor mu?",
          "Daha önce benzer ataklar oldu mu?",
          "Alerjik rinit öyküsü var mı?",
          "Diş ağrısı, dental girişim veya tek taraflı kötü kokulu akıntı var mı?",
          "Daha önce antibiyotik kullandı mı, yanıt aldı mı?",
        ],
      },
      {
        type: "table",
        title: "Poliklinikte Klinik Ayrım",
        rows: [
          {
            label: "İlk 10 gün içinde giderek düzelen nezle benzeri tablo",
            value: "Viral akut rinosinüzit daha olasıdır",
          },
          {
            label: "5. günden sonra kötüleşme veya 10 günden uzun sürme",
            value: "Post-viral süreç düşünülür",
          },
          {
            label: "10 günden uzun düzelmeyen belirgin semptomlar",
            value: "Akut bakteriyel rinosinüzit olasılığı artar",
          },
          {
            label: "İlk düzelme sonrası yeniden kötüleşme",
            value: "Double-worsening paterni; bakteriyel olasılığı artırır",
          },
          {
            label: "Orbital veya nörolojik bulgu",
            value: "Komplikasyon açısından acil değerlendirme gerekir",
          },
        ],
      },
      {
        type: "bulletList",
        title: "Muayenede Bakılacaklar",
        items: [
          "Nazal mukoza ödemi ve hiperemi",
          "Orta meatusta pürülan sekresyon varlığı",
          "Septum deviasyonu veya belirgin anatomik obstrüksiyon",
          "Polip veya kitle görünümü",
          "Periorbital ödem, eritem, proptozis",
          "Göz hareketlerinde ağrı veya kısıtlılık",
          "Dental kaynak düşündüren tek taraflı kötü koku veya maksiller hassasiyet",
        ],
      },
      {
        type: "important",
        title: "Görüntüleme Kararı",
        content:
          "Uncomplicated akut rinosinüzitte rutin BT veya direkt grafi gerekli değildir. Orbital/intrakraniyal komplikasyon şüphesi, ağır atipik seyir, immünsüpresyon, invaziv fungal enfeksiyon şüphesi veya tedaviye beklenmeyen yanıtsızlık varsa görüntüleme düşünülmelidir.",
      },
      {
        type: "bulletList",
        title: "Tedavi Prensipleri",
        items: [
          "Semptomatik tedavi çoğu viral/post-viral olguda yeterlidir",
          "Analjezik ve antipiretiklerle ağrı/ateş kontrolü sağlanır",
          "Nazal salin irrigasyon semptom yükünü azaltmaya yardımcı olabilir",
          "İntranazal kortikosteroid özellikle alerjik rinit eşlik ediyorsa veya belirgin inflamasyon varsa düşünülebilir",
          "Antibiyotik kararı sadece akıntı rengine göre verilmemelidir",
          "Komplikasyon alarm bulgusu varsa standart poliklinik tedavisiyle izlemek uygun değildir",
        ],
      },
      {
        type: "important",
        title: "Acil Alarm Bulguları",
        content:
          "Periorbital ödem/eritem, proptozis, diplopi, görme azalması, şiddetli frontal baş ağrısı, ense sertliği, bilinç değişikliği, fokal nörolojik bulgu, toksik görünüm veya immünsüprese hastada siyah nekrotik krut invaziv ya da komplike hastalık açısından acil değerlendirilmelidir.",
      },
      {
        type: "bulletList",
        title: "Hasta Bilgilendirme",
        items: [
          "Akut rinosinüzit çoğu zaman viral veya post-viral seyreder",
          "Renkli burun akıntısı tek başına antibiyotik gerektirmez",
          "Şikayetler kötüleşirse veya göz/nörolojik bulgu gelişirse beklemeden başvurmalıdır",
          "Burun yıkama ve düzenli semptom kontrolü tedavi uyumunu artırabilir",
        ],
      },
      {
        type: "examTip",
        title: "Sınav ve Poliklinik İpucu",
        content:
          "Akut rinosinüzitte poliklinikte en kritik ayrım bakteriyel enfeksiyon değil, önce komplikasyon var mı sorusudur. Komplikasyon yoksa ikinci soru viral/post-viral mi, ABRS paterni var mı olmalıdır.",
      },
      {
        type: "paragraph",
        title: "Kaynak Dayanağı",
        content:
          "Kaynak dayanağı: EPOS 2020, ICAR-RS-2021 ve erişkin sinüzit klinik kılavuzları temel alınarak hazırlanmıştır. Bu not eğitim amaçlıdır; hasta özelinde karar klinik değerlendirme ve yerel rehberlere göre verilmelidir.",
      },
    ],
  },
  {
    slug: "acute-bacterial-rhinosinusitis",
    category: "Rinoloji",
    title: "Akut Bakteriyel Rinosinüzit",
    subtitle: "Antibiyotik kararını yönlendiren poliklinik paternleri",

    clinicalSummary:
      "Akut bakteriyel rinosinüzit, akut rinosinüzit spektrumunda bakteriyel enfeksiyon olasılığının arttığı klinik paternlerle tanınır. Poliklinikte tanı çoğu zaman kliniktir; en önemli paternler 10 günden uzun düzelmeyen semptom, başlangıçtan itibaren ağır seyir ve double-worsening tablosudur.",

    blocks: [
      {
        type: "paragraph",
        title: "Poliklinik Yaklaşımı",
        content:
          "ABRS tanısında amaç her akut rinosinüzit hastasına antibiyotik vermek değil, bakteriyel olasılığın arttığı hastayı seçmektir. Viral rinosinüzit çok daha sık olduğu için gereksiz antibiyotik kullanımı direnç, yan etki ve maliyet açısından sakıncalıdır. Güvenli takip edilebilen uncomplicated hastalarda yakın izlem yaklaşımı değerlendirilebilir.",
      },
      {
        type: "bulletList",
        title: "ABRS İçin Üç Ana Klinik Patern",
        items: [
          "10 gün veya daha uzun süren ve düzelme göstermeyen nazal semptomlar",
          "Başlangıçtan itibaren yüksek ateş, belirgin pürülan nazal akıntı ve fasiyal ağrı ile ağır tablo",
          "İlk viral enfeksiyon bulguları düzelirken yeniden kötüleşme; double-worsening veya double-sickening paterni",
        ],
      },
      {
        type: "table",
        title: "Antibiyotik Kararını Etkileyen Faktörler",
        rows: [
          {
            label: "Uncomplicated ve güvenli takip edilebilir hasta",
            value: "Yakın izlem/watchful waiting düşünülebilir",
          },
          {
            label: "Ağır sistemik tablo veya belirgin kötüleşme",
            value: "Antibiyotik tedavisi daha güçlü düşünülür",
          },
          {
            label: "İmmünsüpresyon veya ciddi komorbidite",
            value: "Eşik daha düşük tutulur, komplikasyon dikkatle dışlanır",
          },
          {
            label: "Son antibiyotik kullanımı",
            value: "Direnç ve tedavi başarısızlığı açısından sorgulanır",
          },
          {
            label: "Dental kaynak şüphesi",
            value: "Odontojenik sinüzit ve anaerobik flora akılda tutulur",
          },
          {
            label: "Tedaviye 3-5 günde yanıtsızlık",
            value: "Tanı, komplikasyon ve antibiyotik seçimi yeniden değerlendirilir",
          },
        ],
      },
      {
        type: "bulletList",
        title: "Poliklinikte Mutlaka Değerlendir",
        items: [
          "Maksiller diş ağrısı veya dental işlem öyküsü",
          "Tek taraflı kötü kokulu akıntı",
          "Daha önce antibiyotik kullanımı ve süresi",
          "Penisilin alerjisi veya ilaç yan etkisi öyküsü",
          "Gebelik, böbrek/karaciğer hastalığı, immünsüpresyon gibi tedavi seçimini etkileyen durumlar",
          "Orbital veya intrakraniyal komplikasyon bulguları",
        ],
      },
      {
        type: "important",
        title: "Watchful Waiting Notu",
        content:
          "Komplikasyonsuz ve güvenli takip edilebilen ABRS hastasında antibiyotik başlanmadan yakın izlem seçeneği değerlendirilebilir. Bu yaklaşım için hastaya alarm bulguları, kötüleşme durumunda başvuru ve kontrol planı açık anlatılmalıdır.",
      },
      {
        type: "bulletList",
        title: "Tedavi Planı Mantığı",
        items: [
          "Ağrı ve ateş kontrolü sağlanır",
          "Salin irrigasyon destek tedavi olarak kullanılabilir",
          "İntranazal kortikosteroid eşlik eden inflamatuvar veya alerjik komponentte yardımcı olabilir",
          "Antibiyotik seçimi yerel direnç, alerji, komorbidite ve rehberlere göre yapılır",
          "Tedaviye yanıtsız hastada tanı tekrar sorgulanır",
          "Tekrarlayan ataklarda anatomik, alerjik, odontojenik veya immünolojik nedenler araştırılır",
        ],
      },
      {
        type: "table",
        title: "Tedaviye Yanıtsızlıkta Düşün",
        rows: [
          {
            label: "Semptomlar 3-5 gün içinde kötüleşiyor",
            value: "Yanlış tanı, dirençli etken veya komplikasyon",
          },
          {
            label: "Tek taraflı kötü kokulu akıntı sürüyor",
            value: "Odontojenik kaynak",
          },
          {
            label: "Şiddetli baş ağrısı veya orbital bulgu gelişiyor",
            value: "Komplike rinosinüzit",
          },
          {
            label: "Sık tekrarlayan atak",
            value: "Alerji, anatomik obstrüksiyon, immün yetmezlik, siliyer disfonksiyon",
          },
          {
            label: "Koku kaybı ve polip bulgusu",
            value: "CRS veya nazal polipli hastalık",
          },
        ],
      },
      {
        type: "important",
        title: "Görüntüleme ve Sevk",
        content:
          "Uncomplicated ABRS’de rutin görüntüleme önerilmez. Orbital bulgu, nörolojik bulgu, ağır atipik seyir, immünsüpresyon, invaziv fungal enfeksiyon şüphesi veya tedaviye beklenmeyen yanıtsızlık varsa BT ve/veya ileri değerlendirme gerekir.",
      },
      {
        type: "examTip",
        title: "Sınav ve Poliklinik İpucu",
        content:
          "ABRS’de antibiyotik kararı “akıntı sarı-yeşil” olduğu için değil; 10 gün düzelmeyen tablo, ağır başlangıç veya double-worsening paterni olduğu için düşünülür. Güvenli takip edilemeyen hastada watchful waiting uygun değildir.",
      },
      {
        type: "paragraph",
        title: "Kaynak Dayanağı",
        content:
          "Kaynak dayanağı: EPOS 2020, ICAR-RS-2021, IDSA ABRS kriterleri ve AAO-HNSF erişkin sinüzit kılavuzu temel alınarak hazırlanmıştır. Bu not eğitim amaçlıdır; hasta özelinde tedavi kararı klinik değerlendirme ve yerel antibiyotik rehberleriyle verilmelidir.",
      },
    ],
  },
  {
    slug: "chronic-rhinosinusitis",
    category: "Rinoloji",
    title: "Kronik Rinosinüzit",
    subtitle: "12 haftadan uzun semptom, objektif inflamasyon ve poliklinik değerlendirme",

    clinicalSummary:
      "Kronik rinosinüzit; en az 12 hafta süren sinonazal semptomlara endoskopi veya BT ile gösterilen objektif inflamasyon bulgularının eşlik ettiği kronik inflamatuvar hastalıktır. Poliklinikte amaç CRS tanısını doğrulamak, fenotipi belirlemek, komorbiditeleri sorgulamak ve medikal/cerrahi tedavi planını yapılandırmaktır.",

    blocks: [
      {
        type: "paragraph",
        title: "Poliklinik Yaklaşımı",
        content:
          "CRS tanısında sadece semptom süresi yeterli değildir. Nazal obstrüksiyon, akıntı/postnazal akıntı, fasiyal basınç-ağrı ve koku bozukluğu sorgulanmalı; ardından endoskopi veya BT ile objektif inflamasyon kanıtı aranmalıdır. Migren, dental patoloji, alerjik rinit ve nonalerjik rinit gibi ayırıcı tanılar poliklinikte sık karışır.",
      },
      {
        type: "bulletList",
        title: "Poliklinikte İlk 60 Saniye",
        items: [
          "Şikayetler 12 haftadan uzun mu?",
          "Ana yakınma burun tıkanıklığı mı, akıntı mı, koku kaybı mı?",
          "Fasiyal ağrı gerçek sinüs basıncı gibi mi, yoksa migren/dental ağrı gibi mi?",
          "Daha önce nazal steroid, salin irrigasyon veya antibiyotik kullanmış mı?",
          "Astım, aspirin/NSAİİ duyarlılığı veya nazal polip öyküsü var mı?",
          "Daha önce sinüs cerrahisi geçirmiş mi?",
          "Tek taraflı semptom, kanama, kabuklanma veya kitle şüphesi var mı?",
        ],
      },
      {
        type: "bulletList",
        title: "Tanı İçin Aranacaklar",
        items: [
          "12 haftadan uzun süren sinonazal semptomlar",
          "Nazal obstrüksiyon veya konjesyon",
          "Anterior rinore veya postnazal akıntı",
          "Hiposmi veya anosmi",
          "Fasiyal basınç veya ağrı",
          "Endoskopide ödem, mukopürülan akıntı veya polip",
          "BT’de sinonazal mukozal inflamasyon",
        ],
      },
      {
        type: "table",
        title: "CRS Poliklinik Değerlendirme",
        rows: [
          {
            label: "Nazal endoskopi",
            value: "Polip, ödem, pürülan akıntı, kabuklanma ve kitleyi gösterir",
          },
          {
            label: "BT paranazal sinüs",
            value: "Objektif inflamasyon, anatomi ve cerrahi planlama için önemlidir",
          },
          {
            label: "Koku değerlendirmesi",
            value: "Nazal polipli CRS ve inflamatuvar yük hakkında bilgi verir",
          },
          {
            label: "Astım/AERD sorgusu",
            value: "Hastalık şiddeti, nüks ve tedavi seçimini etkiler",
          },
          {
            label: "Alerji değerlendirmesi",
            value: "Eşlik eden rinit semptomlarını ve tetikleyicileri ayırmaya yardım eder",
          },
          {
            label: "Dental değerlendirme",
            value: "Tek taraflı maksiller hastalıkta odontojenik kaynak akılda tutulmalıdır",
          },
        ],
      },
      {
        type: "important",
        title: "CRS Tanısında Altın Mantık",
        content:
          "CRS tanısı için 12 haftadan uzun semptomlara objektif inflamasyon kanıtı eşlik etmelidir. Endoskopi veya BT bulgusu olmadan sadece “yüz ağrısı” ile CRS tanısı koymak hatalı olabilir.",
      },
      {
        type: "bulletList",
        title: "İlk Basamak Tedavi Yaklaşımı",
        items: [
          "Düzenli nazal salin irrigasyon önerilir",
          "İntranazal kortikosteroid tedavi inflamasyonu azaltmada temel yaklaşımdır",
          "Uyum ve doğru sprey tekniği özellikle sorgulanmalıdır",
          "Akut alevlenme veya pürülan sekresyonda ek tedavi klinik duruma göre değerlendirilir",
          "Medikal tedaviye rağmen kontrolsüz hastalıkta BT ve cerrahi değerlendirme planlanabilir",
          "Cerrahi sonrası da topikal tedavi ve takip gerekir",
        ],
      },
      {
        type: "table",
        title: "Ayırıcı Tanı",
        rows: [
          {
            label: "Alerjik rinit",
            value: "Kaşıntı, hapşırık, sulu akıntı ve tetikleyici maruziyet ön plandadır",
          },
          {
            label: "Migren",
            value: "Fotofobi, bulantı, zonklayıcı ağrı ve atak paterni olabilir",
          },
          {
            label: "Dental patoloji",
            value: "Tek taraflı maksiller ağrı, dental işlem veya kötü kokulu akıntı olabilir",
          },
          {
            label: "Nonalerjik rinit",
            value: "Tetikleyici irritanlar, sıcaklık değişimi veya koku ile semptom artabilir",
          },
          {
            label: "Neoplazi",
            value: "Tek taraflı tıkanıklık, kanama, kitle, kraniyal nöropati alarm bulgusudur",
          },
        ],
      },
      {
        type: "important",
        title: "Ne Zaman BT?",
        content:
          "CRS’de BT; tanının objektifleştirilmesi, medikal tedaviye yanıtsızlık, cerrahi planlama, tek taraflı/atipik hastalık veya komplikasyon şüphesinde değerlidir. Basit akut viral rinosinüzit gibi her burun tıkanıklığı olgusunda BT istenmemelidir.",
      },
      {
        type: "bulletList",
        title: "Sevk ve Alarm Bulguları",
        items: [
          "Tek taraflı ilerleyici burun tıkanıklığı",
          "Tek taraflı kanlı akıntı veya tekrarlayan epistaksis",
          "Orbital bulgu veya görme değişikliği",
          "Şiddetli baş ağrısı veya nörolojik bulgu",
          "İmmünsüpresyon ve nekrotik kabuklanma",
          "Tedaviye rağmen belirgin kötüleşme",
          "Kitle şüphesi",
        ],
      },
      {
        type: "examTip",
        title: "Sınav ve Poliklinik İpucu",
        content:
          "CRS’de en sık yapılan hata, yüz ağrısı olan her hastayı sinüzit kabul etmektir. Objektif endoskopi/BT bulgusu yoksa migren, dental patoloji ve rinitler mutlaka düşünülmelidir.",
      },
      {
        type: "paragraph",
        title: "Kaynak Dayanağı",
        content:
          "Kaynak dayanağı: EPOS 2020 ve ICAR-RS-2021 temel alınarak hazırlanmıştır. Bu not eğitim amaçlıdır; hasta özelinde karar klinik muayene, endoskopi, görüntüleme ve komorbidite değerlendirmesiyle verilmelidir.",
      },
    ],
  },
  {
    slug: "allergic-rhinitis",
    category: "Rinoloji",
    title: "Alerjik Rinit",
    subtitle: "Poliklinikte fenotip, tetikleyici ve basamaklı tedavi yaklaşımı",

    clinicalSummary:
      "Alerjik rinit; alerjen maruziyeti sonrası gelişen IgE aracılı nazal inflamasyondur. Poliklinikte hapşırık, burun kaşıntısı, sulu rinore ve nazal konjesyon paterni tanıyı destekler. Tedavi; semptom baskınlığına, yaşam kalitesi etkisine, komorbid astım/konjonktivite ve hasta uyumuna göre planlanır.",

    blocks: [
      {
        type: "paragraph",
        title: "Poliklinik Yaklaşımı",
        content:
          "Alerjik rinit mevsimsel, perennial veya epizodik olabilir. Tanı çoğu hastada klinik öykü ve muayeneyle konur. Alerji testi; tanı belirsizse, tedaviye yanıt yetersizse, immünoterapi düşünülüyorsa veya spesifik alerjen kontrolü planlanacaksa daha anlamlıdır.",
      },
      {
        type: "bulletList",
        title: "Poliklinikte İlk 60 Saniye",
        items: [
          "Hapşırık, kaşıntı, sulu akıntı ve tıkanıklık var mı?",
          "Semptomlar mevsimsel mi, yıl boyu mu, belirli ortamda mı artıyor?",
          "Göz kaşıntısı, sulanma veya kızarıklık eşlik ediyor mu?",
          "Astım, hışıltı, öksürük veya egzersizle nefes darlığı var mı?",
          "Ev tozu, polen, küf, hayvan teması veya mesleki maruziyet var mı?",
          "Daha önce antihistaminik veya nazal steroid kullanmış mı, doğru kullanmış mı?",
          "Tek taraflı tıkanıklık, kanama, kötü koku veya kitle şüphesi var mı?",
        ],
      },
      {
        type: "bulletList",
        title: "Muayenede Bakılacaklar",
        items: [
          "Soluk, ödemli veya mavimsi nazal mukoza",
          "Sulu sekresyon",
          "Alt konka hipertrofisi",
          "Alerjik selam çizgisi veya burun kaşıma davranışı",
          "Gözde konjonktival hiperemi veya sulanma",
          "Nazal polip, septum deviasyonu veya kitle ayırıcı tanısı",
          "Otitis media veya östaki disfonksiyonu bulguları",
        ],
      },
      {
        type: "table",
        title: "Semptoma Göre Tedavi Seçimi",
        rows: [
          {
            label: "Burun tıkanıklığı baskın",
            value: "İntranazal kortikosteroid daha etkili temel seçenektir",
          },
          {
            label: "Hapşırık ve kaşıntı baskın",
            value: "İkinci kuşak oral antihistaminik faydalıdır",
          },
          {
            label: "Hızlı rahatlama ihtiyacı",
            value: "İntranazal antihistaminik düşünülebilir",
          },
          {
            label: "Göz semptomları belirgin",
            value: "Alerjik konjonktivit tedavisi ve alerjen kontrolü eklenebilir",
          },
          {
            label: "İlaçlara rağmen kontrolsüz hastalık",
            value: "Alerji testi ve immünoterapi değerlendirilir",
          },
        ],
      },
      {
        type: "important",
        title: "Nazal Steroid Kullanım Tekniği",
        content:
          "İntranazal steroid başarısızlığının sık nedenlerinden biri yanlış tekniktir. Sprey septuma değil lateral nazal duvara doğru uygulanmalı, düzenli kullanım gerektiği anlatılmalı ve etki için birkaç gün ile haftalar arasında süre gerekebileceği söylenmelidir.",
      },
      {
        type: "bulletList",
        title: "Hasta Eğitiminde Söylenecekler",
        items: [
          "Tedavi düzenli kullanılmazsa nazal steroid etkisi yetersiz kalabilir",
          "Sprey kullanırken baş hafif öne eğilebilir ve uç dış yana yönlendirilebilir",
          "Sedatif antihistaminiklerden kaçınmak günlük performans açısından önemlidir",
          "Tetikleyici biliniyorsa çevresel kontrol tedaviye katkı sağlar",
          "Dekonjestan spreylerin uzun süreli kullanımı rinitis medikamentozaya yol açabilir",
          "Astım belirtileri varsa ayrıca değerlendirilmelidir",
        ],
      },
      {
        type: "table",
        title: "Ayırıcı Tanı",
        rows: [
          {
            label: "Nonalerjik rinit",
            value: "Koku, duman, sıcaklık değişimi veya irritanlarla tetiklenir; kaşıntı daha azdır",
          },
          {
            label: "Viral rinit",
            value: "Akut başlangıç, boğaz ağrısı, halsizlik ve kısa süreli seyir olabilir",
          },
          {
            label: "CRS",
            value: "12 haftadan uzun semptom ve objektif endoskopi/BT bulgusu gerekir",
          },
          {
            label: "Nazal polip",
            value: "Koku kaybı ve bilateral tıkanıklık daha belirgin olabilir",
          },
          {
            label: "Neoplazi",
            value: "Tek taraflı tıkanıklık, kanama veya kitle alarm bulgusudur",
          },
        ],
      },
      {
        type: "important",
        title: "Görüntüleme Notu",
        content:
          "Tipik alerjik rinit kliniğinde rutin sinonazal görüntüleme önerilmez. Tek taraflı semptom, kanama, kitle şüphesi, atipik ağrı, komplikasyon bulgusu veya CRS şüphesi varsa görüntüleme/endoskopi değerlendirmesi yapılabilir.",
      },
      {
        type: "bulletList",
        title: "İmmünoterapi Ne Zaman Düşünülür?",
        items: [
          "Klinik olarak anlamlı alerjen duyarlılığı gösterilmişse",
          "Semptomlar farmakoterapi ve çevresel kontrole rağmen sürüyorsa",
          "Hasta uzun dönem hastalık kontrolü istiyorsa",
          "İlaç yan etkisi veya ilaç kullanmak istememe durumu varsa",
          "Astım birlikteliğinde uygun hasta seçimi dikkatle yapılmalıdır",
        ],
      },
      {
        type: "examTip",
        title: "Sınav ve Poliklinik İpucu",
        content:
          "Alerjik rinitte “kaşıntı + hapşırık + sulu rinore” antihistaminik yanıtını düşündürür; “tıkanıklık + yaşam kalitesi etkilenmesi” intranazal steroidin temel tedavi olarak öne çıktığı durumdur. Rutin sinüs BT tipik alerjik rinit için gerekli değildir.",
      },
      {
        type: "paragraph",
        title: "Kaynak Dayanağı",
        content:
          "Kaynak dayanağı: AAO-HNSF Alerjik Rinit Klinik Uygulama Kılavuzu ve kanıta dayalı alerjik rinit tedavi prensipleri temel alınarak hazırlanmıştır. Bu not eğitim amaçlıdır; hasta özelinde tedavi alerjen duyarlılığı, semptom şiddeti, komorbidite ve ilaç güvenliğiyle değerlendirilmelidir.",
      },
    ],
  },
  {
    slug: "chronic-rhinosinusitis-with-nasal-polyps",
    category: "Rinoloji",
    title: "Nazal Polipli Kronik Rinosinüzit",
    subtitle: "Koku kaybı, polip yükü ve tip 2 inflamasyon odaklı poliklinik yaklaşımı",

    clinicalSummary:
      "Nazal polipli kronik rinosinüzit; 12 haftadan uzun süren sinonazal semptomlara bilateral nazal polip ve objektif inflamasyon bulgularının eşlik ettiği kronik inflamatuvar hastalıktır. Poliklinikte amaç polip yükünü görmek, koku kaybı ve astım/AERD birlikteliğini sorgulamak, topikal tedavi uyumunu değerlendirmek ve cerrahi veya ileri tedavi gereksinimini belirlemektir.",

    blocks: [
      {
        type: "paragraph",
        title: "Poliklinik Yaklaşımı",
        content:
          "Nazal polipli kronik rinosinüzit, klasik enfeksiyon hastalığından çok kronik inflamatuvar bir mukozal hastalık olarak düşünülmelidir. Hastalarda burun tıkanıklığı ve koku kaybı genellikle ön plandadır. Eşlik eden astım, aspirin/NSAİİ duyarlılığı, alerji ve önceki cerrahi öyküsü hastalık şiddeti ve nüks riski açısından önemlidir.",
      },
      {
        type: "bulletList",
        title: "Poliklinikte İlk 60 Saniye",
        items: [
          "Şikayetler 12 haftadan uzun mu?",
          "Burun tıkanıklığı bilateral mi?",
          "Koku azalması veya tam koku kaybı var mı?",
          "Astım, hışıltı, kronik öksürük veya nefes darlığı var mı?",
          "Aspirin veya NSAİİ sonrası burun/akciğer semptomu oluyor mu?",
          "Daha önce sinüs cerrahisi veya polipektomi geçirmiş mi?",
          "Nazal steroid ve salin irrigasyonu düzenli ve doğru kullanmış mı?",
          "Tek taraflı kanama, ağrı veya kitle şüphesi var mı?",
        ],
      },
      {
        type: "bulletList",
        title: "Muayene ve Endoskopide Bakılacaklar",
        items: [
          "Polip bilateral mi, tek taraflı mı?",
          "Orta meatusta polip, ödem veya mukopürülan akıntı var mı?",
          "Polip nazal pasajı ne kadar tıkıyor?",
          "Sekresyon var mı, varsa pürülan mı?",
          "Septum deviasyonu veya konka hipertrofisi eşlik ediyor mu?",
          "Kabuklanma, nekroz veya kitle görünümü var mı?",
          "Daha önce cerrahi olduysa açıklıklar ve skar dokusu değerlendirilebilir",
        ],
      },
      {
        type: "table",
        title: "Klinik Değerlendirme Başlıkları",
        rows: [
          {
            label: "Koku kaybı",
            value: "CRSwNP’de sık ve hastalık yükünü gösteren önemli semptomdur",
          },
          {
            label: "Astım",
            value: "Hastalık şiddeti, nüks ve tedavi seçimini etkileyebilir",
          },
          {
            label: "AERD / NSAİİ duyarlılığı",
            value: "Polip nüksü ve dirençli hastalık açısından önemlidir",
          },
          {
            label: "Önceki cerrahi",
            value: "Nüks paterni ve tedavi planını etkiler",
          },
          {
            label: "Topikal tedavi uyumu",
            value: "Tedavi başarısızlığı gibi görünen birçok durumda teknik/uyum sorunu vardır",
          },
          {
            label: "Tek taraflı polip",
            value: "Neoplazi veya farklı patoloji açısından dikkatli değerlendirilmelidir",
          },
        ],
      },
      {
        type: "important",
        title: "Tek Taraflı Polip Uyarısı",
        content:
          "Nazal polipli kronik rinosinüzit genellikle bilateral inflamatuvar bir hastalık olarak beklenir. Tek taraflı polip/kitle, kanama, kabuklanma, hızlı büyüme veya atipik ağrı varsa benign/malign sinonazal tümörler ve diğer patolojiler dışlanmalıdır.",
      },
      {
        type: "bulletList",
        title: "İlk Basamak Tedavi Mantığı",
        items: [
          "Düzenli nazal salin irrigasyon önerilir",
          "İntranazal kortikosteroid tedavi temel yaklaşımdır",
          "Sprey tekniği, düzenli kullanım ve tedavi uyumu mutlaka kontrol edilir",
          "Kısa süreli sistemik kortikosteroid seçilmiş hastalarda semptom/polip yükünü azaltmak için düşünülebilir",
          "Akut enfeksiyon bulgusu yoksa antibiyotik rutin temel tedavi değildir",
          "Medikal tedaviye rağmen kontrolsüz hastalıkta BT ve endoskopik sinüs cerrahisi değerlendirilir",
          "Cerrahi sonrası da topikal tedavi ve düzenli takip gerekir",
        ],
      },
      {
        type: "table",
        title: "Ne Zaman BT?",
        rows: [
          {
            label: "Medikal tedaviye rağmen kontrolsüz semptom",
            value: "Objektif hastalık yükü ve cerrahi planlama için BT değerlidir",
          },
          {
            label: "Cerrahi planlama",
            value: "Sinüs anatomisi, varyasyonlar ve hastalık yaygınlığı değerlendirilir",
          },
          {
            label: "Tek taraflı/atipik bulgu",
            value: "Kitle, odontojenik kaynak veya farklı patoloji dışlanmalıdır",
          },
          {
            label: "Komplikasyon şüphesi",
            value: "Orbital veya intrakraniyal yayılım açısından acil değerlendirme gerekir",
          },
          {
            label: "Rutin hafif rinit bulguları",
            value: "Tipik hafif rinit için BT gerekli değildir",
          },
        ],
      },
      {
        type: "important",
        title: "Cerrahinin Yeri",
        content:
          "Endoskopik sinüs cerrahisi, kronik inflamasyonu tek başına tamamen ortadan kaldıran bir işlem olarak görülmemelidir. Cerrahi; sinüs ventilasyonunu, drenajı ve topikal tedavilerin sinüs mukozasına ulaşmasını artıran bir tedavi basamağıdır.",
      },
      {
        type: "bulletList",
        title: "Poliklinikte Kontrol ve Takip",
        items: [
          "Semptom yükü, koku durumu ve burun tıkanıklığı takip edilir",
          "Endoskopide polip yükü ve sekresyon değerlendirilir",
          "Nazal steroid ve irrigasyon uyumu sorgulanır",
          "Astım kontrolü ve göğüs hastalıkları/alerji iş birliği gerekebilir",
          "Cerrahi sonrası nüks açısından düzenli takip önemlidir",
          "Sık sistemik steroid ihtiyacı veya tekrarlayan cerrahi gereksinimi varsa ileri tedavi seçenekleri değerlendirilir",
        ],
      },
      {
        type: "examTip",
        title: "Sınav ve Poliklinik İpucu",
        content:
          "CRSwNP’de burun tıkanıklığı + belirgin koku kaybı + bilateral polip + astım/AERD öyküsü klasik bir paterndir. Tek taraflı polip ise “sadece polip” kabul edilmemeli, kitle ayırıcı tanısı yapılmalıdır.",
      },
      {
        type: "paragraph",
        title: "Kaynak Dayanağı",
        content:
          "Kaynak dayanağı: EPOS 2020 ve ICAR-RS-2021 temel alınarak hazırlanmıştır. Bu not eğitim amaçlıdır; hasta özelinde karar endoskopi, görüntüleme, komorbidite ve güncel yerel rehberlerle birlikte verilmelidir.",
      },
    ],
  },
  {
    slug: "nonallergic-rhinitis",
    category: "Rinoloji",
    title: "Nonalerjik Rinit",
    subtitle: "Alerji dışı tetikleyiciler, fenotip ayrımı ve semptoma göre tedavi",

    clinicalSummary:
      "Nonalerjik rinit; alerjik sensitizasyonla açıklanamayan, enfeksiyon dışı kronik veya tekrarlayıcı rinit semptomlarını kapsayan heterojen bir gruptur. Poliklinikte alerjik rinit, kronik rinosinüzit, medikamentoz rinit, hormonal rinit, mesleki/irritan rinit ve yapısal nazal obstrüksiyon ayırıcı tanısı dikkatle yapılmalıdır.",

    blocks: [
      {
        type: "paragraph",
        title: "Poliklinik Yaklaşımı",
        content:
          "Nonalerjik rinit tek bir hastalık değildir; irritanlar, koku, duman, hava değişimi, soğuk hava, baharatlı yiyecek, hormonal durumlar veya ilaçlar gibi farklı tetikleyicilerle ortaya çıkabilir. Kaşıntı, hapşırık ve sulu rinore alerjik rinitte daha belirgin olabilir; nonalerjik rinitte ise tıkanıklık, akıntı veya tetikleyiciye bağlı ani semptomlar ön planda olabilir.",
      },
      {
        type: "bulletList",
        title: "Poliklinikte İlk 60 Saniye",
        items: [
          "Semptomlar mevsimsel mi, yıl boyu mu?",
          "Koku, duman, parfüm, soğuk hava veya sıcaklık değişimi ile tetikleniyor mu?",
          "Burun kaşıntısı ve hapşırık baskın mı?",
          "Sulu rinore mi, tıkanıklık mı, postnazal akıntı mı ön planda?",
          "Dekonjestan burun spreyi kullanıyor mu, kaç gündür kullanıyor?",
          "Yeni ilaç, gebelik, hormonal durum veya mesleki maruziyet var mı?",
          "Tek taraflı tıkanıklık, kanama, kabuklanma veya kitle şüphesi var mı?",
        ],
      },
      {
        type: "bulletList",
        title: "Sık Tetikleyiciler",
        items: [
          "Sigara dumanı ve hava kirliliği",
          "Parfüm, kimyasal koku ve temizlik ürünleri",
          "Soğuk hava veya ani sıcaklık değişimi",
          "Baharatlı yiyecekler",
          "Alkol",
          "Mesleki irritanlar",
          "Topikal nazal dekonjestanların uzun süreli kullanımı",
          "Bazı sistemik ilaçlar",
        ],
      },
      {
        type: "table",
        title: "Alerjik ve Nonalerjik Rinit Ayrımı",
        rows: [
          {
            label: "Kaşıntı ve hapşırık belirgin",
            value: "Alerjik rinit daha olasıdır",
          },
          {
            label: "Koku/duman/ısı değişimi ile tetiklenme",
            value: "Nonalerjik rinit lehine olabilir",
          },
          {
            label: "Göz kaşıntısı ve sulanma",
            value: "Alerjik eşlik daha olasıdır",
          },
          {
            label: "Alerji testi negatif ama semptom devam ediyor",
            value: "Nonalerjik rinit veya mikst rinit düşünülür",
          },
          {
            label: "Dekonjestan sprey öyküsü",
            value: "Rinitis medikamentoza mutlaka sorgulanmalıdır",
          },
          {
            label: "Tek taraflı kanama/kitle bulgusu",
            value: "Rinit dışında patoloji dışlanmalıdır",
          },
        ],
      },
      {
        type: "important",
        title: "Dekonjestan Sprey Uyarısı",
        content:
          "Oksimetazolin veya ksilometazolin gibi topikal nazal dekonjestanların uzun süreli kullanımı rebound nazal konjesyon ve rinitis medikamentozaya yol açabilir. Bu nedenle poliklinikte her kronik burun tıkanıklığı hastasına burun spreyi türü ve kullanım süresi sorulmalıdır.",
      },
      {
        type: "bulletList",
        title: "Muayenede Bakılacaklar",
        items: [
          "Mukoza ödemi ve sekresyon tipi",
          "Alt konka hipertrofisi",
          "Septum deviasyonu veya nazal valv problemi",
          "Polip, kitle veya tek taraflı patoloji",
          "Kabuklanma ve mukozal kuruluk",
          "Postnazal akıntı bulguları",
          "İrritan maruziyetle ilişkili mukozal hassasiyet",
        ],
      },
      {
        type: "table",
        title: "Semptoma Göre Tedavi Mantığı",
        rows: [
          {
            label: "Tıkanıklık baskın",
            value: "İntranazal kortikosteroid veya intranazal antihistaminik düşünülebilir",
          },
          {
            label: "Sulu rinore baskın",
            value: "İntranazal ipratropium seçilmiş hastalarda faydalı olabilir",
          },
          {
            label: "İrritan/koku tetikleyicisi baskın",
            value: "Tetikleyici azaltma ve intranazal antihistaminik düşünülebilir",
          },
          {
            label: "Dekonjestan bağımlılığı",
            value: "Dekonjestan kesilmesi ve rebound yönetimi gerekir",
          },
          {
            label: "Mukozal kuruluk/kabuklanma",
            value: "İrritanlardan kaçınma, nemlendirme ve salin destek önemlidir",
          },
        ],
      },
      {
        type: "bulletList",
        title: "Hasta Eğitiminde Söylenecekler",
        items: [
          "Nonalerjik rinitte tetikleyiciyi tanımak tedavinin önemli parçasıdır",
          "Alerji testi negatif olması hastanın şikayetinin gerçek olmadığı anlamına gelmez",
          "Dekonjestan spreyler uzun süreli kullanılmamalıdır",
          "Nazal spreylerde doğru teknik ve düzenli kullanım tedavi başarısını etkiler",
          "Tek taraflı kanama, kitle hissi veya ilerleyici tıkanıklık olursa tekrar değerlendirme gerekir",
        ],
      },
      {
        type: "important",
        title: "Görüntüleme Notu",
        content:
          "Tipik nonalerjik rinitte rutin BT gerekli değildir. Tek taraflı semptom, kanama, kitle şüphesi, polip, CRS bulguları, tedaviye beklenmeyen yanıtsızlık veya cerrahi planlama ihtiyacı varsa endoskopi ve/veya görüntüleme değerlendirilir.",
      },
      {
        type: "examTip",
        title: "Sınav ve Poliklinik İpucu",
        content:
          "Nonalerjik rinitte “alerji testi negatif” tek başına yeterli açıklama değildir. Tetikleyici paterni, ilaç/dekonjestan öyküsü, mesleki maruziyet ve yapısal nazal obstrüksiyon mutlaka sorgulanmalıdır.",
      },
      {
        type: "paragraph",
        title: "Kaynak Dayanağı",
        content:
          "Kaynak dayanağı: Rhinitis 2020 practice parameter, ICAR-Allergic Rhinitis 2023 ve kanıta dayalı rinit tedavi prensipleri temel alınarak hazırlanmıştır. Bu not eğitim amaçlıdır; hasta özelinde karar klinik değerlendirme, tetikleyici analizi ve komorbiditelerle birlikte verilmelidir.",
      },
    ],
  },
  {
    slug: "fungal-rhinosinusitis",
    category: "Rinoloji",
    title: "Fungal Rinosinüzit",
    subtitle: "Fungal ball, alerjik fungal rinosinüzit ve invaziv formlara poliklinik yaklaşımı",

    clinicalSummary:
      "Fungal rinosinüzit; noninvaziv ve invaziv formları olan heterojen bir hastalık grubudur. Poliklinikte en önemli ayrım fungal ball veya alerjik fungal rinosinüzit gibi daha kronik/noninvaziv tablolar ile immünsüprese hastada görülebilen invaziv fungal rinosinüzit arasında yapılmalıdır. İnvaziv form şüphesi acil değerlendirme gerektirir.",

    blocks: [
      {
        type: "paragraph",
        title: "Poliklinik Yaklaşımı",
        content:
          "Fungal rinosinüzit tek bir hastalık değildir. Fungal ball genellikle tek sinüste lokalize fungal materyal ile seyrederken, alerjik fungal rinosinüzit tip 2 inflamasyon, nazal polip ve alerjik müsin ile ilişkili kronik bir tablodur. Akut invaziv fungal rinosinüzit ise özellikle immünsüpresyon, kontrolsüz diyabet, hematolojik malignite, transplantasyon veya yoğun kortikosteroid kullanımı gibi risklerde hızla ilerleyebilen acil bir tablodur.",
      },
      {
        type: "bulletList",
        title: "Poliklinikte İlk 60 Saniye",
        items: [
          "Hasta immünsüprese mi?",
          "Kontrolsüz diyabet veya ketoasidoz öyküsü var mı?",
          "Hematolojik malignite, transplantasyon, kemoterapi veya uzun süreli steroid kullanımı var mı?",
          "Semptomlar kronik mi, yoksa hızlı kötüleşen akut tablo mu?",
          "Tek taraflı kötü kokulu akıntı, yüz ağrısı veya dental kaynak şüphesi var mı?",
          "Göz çevresinde şişlik, proptozis, diplopi veya görme azalması var mı?",
          "Burun içinde siyah nekrotik krut, kabuklanma veya hipoestezi var mı?",
          "Daha önce polip, CRS veya sinüs cerrahisi öyküsü var mı?",
        ],
      },
      {
        type: "table",
        title: "Fungal Rinosinüzit Klinik Formları",
        rows: [
          {
            label: "Fungal ball",
            value: "Genellikle noninvazivdir; çoğunlukla tek sinüste fungal materyal birikimi şeklindedir",
          },
          {
            label: "Alerjik fungal rinosinüzit",
            value: "Nazal polip, alerjik müsin, genç/atopik hasta ve geniş sinüs opasiteleriyle ilişkilidir",
          },
          {
            label: "Kronik invaziv fungal rinosinüzit",
            value: "Daha yavaş seyirli invazyon olabilir; doku invazyonu tanı için kritiktir",
          },
          {
            label: "Akut invaziv fungal rinosinüzit",
            value: "İmmünsüprese veya kontrolsüz diyabetik hastada acil ve hayatı tehdit eden tablodur",
          },
        ],
      },
      {
        type: "bulletList",
        title: "Fungal Ball İçin İpuçları",
        items: [
          "Sıklıkla tek taraflı maksiller sinüs tutulumu görülebilir",
          "Kronik tek taraflı basınç, dolgunluk veya kötü kokulu akıntı olabilir",
          "BT’de hiperdens odaklar veya kalsifikasyon benzeri görünüm olabilir",
          "Doku invazyonu beklenmez",
          "Tedavide temel yaklaşım endoskopik cerrahi ile fungal materyalin temizlenmesidir",
          "Sistemik antifungal çoğu izole fungal ball olgusunda rutin değildir",
        ],
      },
      {
        type: "bulletList",
        title: "Alerjik Fungal Rinosinüzit İçin İpuçları",
        items: [
          "Genç veya atopik hastada görülebilir",
          "Nazal polip ve kronik rinosinüzit bulguları eşlik edebilir",
          "Koyu, yoğun, yapışkan alerjik müsin görülebilir",
          "Koku kaybı ve nazal obstrüksiyon belirgin olabilir",
          "BT’de heterojen opasiteler ve sinüs ekspansiyonu görülebilir",
          "Cerrahi temizlik sonrası topikal antiinflamatuvar tedavi ve yakın takip önemlidir",
          "Nüks eğilimi nedeniyle uzun dönem takip gerekir",
        ],
      },
      {
        type: "important",
        title: "İnvaziv Fungal Rinosinüzit Alarmı",
        content:
          "İmmünsüprese veya kontrolsüz diyabetik hastada hızlı ilerleyen nazal/fasiyal ağrı, ateş, siyah nekrotik krut, damak lezyonu, yüz uyuşması, orbital bulgu, görme kaybı veya nörolojik bulgu varsa akut invaziv fungal rinosinüzit düşünülmelidir. Bu durum rutin poliklinik izlemiyle yönetilmez; acil endoskopi, görüntüleme, biyopsi/debridman ve multidisipliner tedavi gerekir.",
      },
      {
        type: "table",
        title: "İnvaziv Hastalık Şüphesinde Kırmızı Bayraklar",
        rows: [
          {
            label: "Siyah nekrotik krut",
            value: "Mukozal invazyon ve nekroz açısından uyarıcıdır",
          },
          {
            label: "Yüzde uyuşma veya hipoestezi",
            value: "Perinöral veya doku invazyonu şüphesi doğurur",
          },
          {
            label: "Orbital ağrı, proptozis veya diplopi",
            value: "Orbital yayılım açısından acildir",
          },
          {
            label: "Görme azalması",
            value: "Orbital apex veya optik sinir tutulumu açısından acildir",
          },
          {
            label: "Damakta nekroz veya ülser",
            value: "Yaygın invazyon bulgusu olabilir",
          },
          {
            label: "Bilinç değişikliği veya fokal nörolojik bulgu",
            value: "İntrakraniyal yayılım açısından acildir",
          },
        ],
      },
      {
        type: "bulletList",
        title: "Muayene ve Endoskopide Bakılacaklar",
        items: [
          "Orta meatus, septum, alt konka ve nazal tabanda nekrotik alan var mı?",
          "Siyah kabuklanma veya soluk-iskemik mukoza var mı?",
          "Pürülan sekresyon veya yoğun koyu müsin var mı?",
          "Polip ve yaygın ödem var mı?",
          "Tek taraflı kitle veya kanama var mı?",
          "Damak, diş eti ve oral kavite nekroz açısından değerlendirilmeli",
          "Orbital muayene ve kraniyal sinir bulguları sorgulanmalı",
        ],
      },
      {
        type: "important",
        title: "Görüntüleme Kararı",
        content:
          "Fungal ball veya AFRS şüphesinde BT hastalık yaygınlığı ve cerrahi planlama için değerlidir. İnvaziv fungal rinosinüzit şüphesinde ise BT ve/veya MRG acil değerlendirme parçasıdır; ancak görüntüleme normal veya sınırlı görünse bile güçlü klinik şüphede endoskopik biyopsi/debridman geciktirilmemelidir.",
      },
      {
        type: "table",
        title: "Görüntüleme ve Tanı Mantığı",
        rows: [
          {
            label: "Fungal ball şüphesi",
            value: "BT ile lokalizasyon ve cerrahi planlama yapılır",
          },
          {
            label: "AFRS şüphesi",
            value: "BT’de yaygın opasite, heterojen içerik ve ekspansiyon değerlendirilebilir",
          },
          {
            label: "Orbital/intrakraniyal şüphe",
            value: "BT ve MRG birlikte değerlendirilebilir",
          },
          {
            label: "İnvaziv hastalık şüphesi",
            value: "Endoskopi, biyopsi ve histopatolojik doku invazyonu kritik önemdedir",
          },
          {
            label: "Tek taraflı kitle",
            value: "Neoplazi ve odontojenik hastalık ayırıcı tanısı yapılmalıdır",
          },
        ],
      },
      {
        type: "bulletList",
        title: "Tedavi Prensipleri",
        items: [
          "Fungal ball’da temel yaklaşım endoskopik cerrahi temizleme ve drenajdır",
          "AFRS’de cerrahi temizlik, polip/müsin kontrolü ve postoperatif antiinflamatuvar takip önemlidir",
          "İnvaziv fungal rinosinüzitte acil cerrahi debridman gerekir",
          "İnvaziv Aspergillus sinüzitinde sistemik antifungal tedavi cerrahiyle birlikte değerlendirilir",
          "Mukormikoz şüphesinde erken tanı, acil cerrahi ve sistemik antifungal tedavi hayati önemdedir",
          "Altta yatan immünsüpresyon, nötropeni veya hiperglisemi mümkünse düzeltilmelidir",
          "Enfeksiyon hastalıkları, göz hastalıkları, nöroşirürji ve yoğun bakım iş birliği gerekebilir",
        ],
      },
      {
        type: "table",
        title: "Poliklinik Karar Özeti",
        rows: [
          {
            label: "Tek taraflı kronik maksiller sinüs opasitesi ve fungal ball şüphesi",
            value: "Cerrahi değerlendirme ve BT ile planlama",
          },
          {
            label: "Polipli, atopik, koyu müsinli kronik tablo",
            value: "AFRS düşün; endoskopi, BT ve cerrahi/medikal planlama",
          },
          {
            label: "İmmünsüprese hastada nekrotik krut",
            value: "Akut invaziv fungal rinosinüzit dışlanana kadar acil kabul et",
          },
          {
            label: "Orbital veya nörolojik bulgu",
            value: "Acil görüntüleme ve multidisipliner değerlendirme",
          },
          {
            label: "Tek taraflı kanama/kitle",
            value: "Neoplazi ayırıcı tanısını dışla",
          },
        ],
      },
      {
        type: "important",
        title: "Poliklinik Güvenlik Notu",
        content:
          "Fungal rinosinüzitte en tehlikeli hata, invaziv formu kronik sinüzit veya basit kabuklanma gibi değerlendirmektir. Riskli hastada nekrotik krut veya orbital/nörolojik bulgu varsa aynı gün ileri değerlendirme gerekir.",
      },
      {
        type: "bulletList",
        title: "Hasta Bilgilendirme",
        items: [
          "Fungal ball genellikle cerrahi temizlikle yönetilen lokal bir durumdur",
          "AFRS nüks edebilen kronik inflamatuvar bir hastalık olabilir",
          "Cerrahi sonrası takip ve nazal tedavi uyumu nüksü azaltmada önemlidir",
          "Diyabet veya bağışıklık baskılanması varsa burun içinde siyah kabuklanma, göz bulgusu veya şiddetli yüz ağrısı acil başvuru nedenidir",
          "Tek taraflı kanama veya ilerleyici tıkanıklık ihmal edilmemelidir",
        ],
      },
      {
        type: "examTip",
        title: "Sınav ve Poliklinik İpucu",
        content:
          "Fungal rinosinüzitte sınavın ve polikliniğin ana ayrımı invaziv ve noninvaziv hastalıktır. Fungal ball’da çoğu zaman cerrahi temizlik yeterliyken, invaziv fungal rinosinüzit acil cerrahi debridman ve sistemik antifungal tedavi gerektiren hayatı tehdit eden tablodur.",
      },
      {
        type: "paragraph",
        title: "Kaynak Dayanağı",
        content:
          "Kaynak dayanağı: EPOS 2020, ICAR-RS-2021, IDSA Aspergillus kılavuzu ve mukormikoz global guideline önerileri temel alınarak hazırlanmıştır. Bu not eğitim amaçlıdır; hasta özelinde karar endoskopi, görüntüleme, histopatoloji, kültür ve multidisipliner değerlendirmeyle verilmelidir.",
      },
    ],
  },
  {
    slug: "epistaxis",
    category: "Rinoloji",
    title: "Epistaksis",
    subtitle: "Epistaksis için placeholder içerik",

    clinicalSummary:
      "Bu konu için kanıta dayalı ayrıntılı içerik sonraki fazda ilgili guideline, consensus ve textbook kaynakları temel alınarak doldurulacaktır.",

    blocks: [
      {
        type: "paragraph",
        title: "İçerik Hazırlanıyor",
        content:
          "Bu konu için kanıta dayalı ayrıntılı içerik sonraki fazda ilgili guideline, consensus ve textbook kaynakları temel alınarak doldurulacaktır.",
      },
      {
        type: "important",
        title: "Placeholder Not",
        content:
          "Bu not şu anda yalnızca konu altyapısını tamamlamak için eklenmiştir; ayrıntılı klinik içerik sonraki fazda kaynak kontrolüyle hazırlanacaktır.",
      },
    ],
  },
  {
    slug: "septal-deviation",
    category: "Rinoloji",
    title: "Septum Deviasyonu",
    subtitle: "Septum deviasyonu için placeholder içerik",

    clinicalSummary:
      "Bu konu için kanıta dayalı ayrıntılı içerik sonraki fazda ilgili guideline, consensus ve textbook kaynakları temel alınarak doldurulacaktır.",

    blocks: [
      {
        type: "paragraph",
        title: "İçerik Hazırlanıyor",
        content:
          "Bu konu için kanıta dayalı ayrıntılı içerik sonraki fazda ilgili guideline, consensus ve textbook kaynakları temel alınarak doldurulacaktır.",
      },
      {
        type: "important",
        title: "Placeholder Not",
        content:
          "Bu not şu anda yalnızca konu altyapısını tamamlamak için eklenmiştir; ayrıntılı klinik içerik sonraki fazda kaynak kontrolüyle hazırlanacaktır.",
      },
    ],
  },
  {
    slug: "fess-indications-complications",
    category: "Rinoloji",
    title: "FESS Endikasyonları ve Komplikasyonları",
    subtitle: "FESS endikasyonları ve komplikasyonları için placeholder içerik",

    clinicalSummary:
      "Bu konu için kanıta dayalı ayrıntılı içerik sonraki fazda ilgili guideline, consensus ve textbook kaynakları temel alınarak doldurulacaktır.",

    blocks: [
      {
        type: "paragraph",
        title: "İçerik Hazırlanıyor",
        content:
          "Bu konu için kanıta dayalı ayrıntılı içerik sonraki fazda ilgili guideline, consensus ve textbook kaynakları temel alınarak doldurulacaktır.",
      },
      {
        type: "important",
        title: "Placeholder Not",
        content:
          "Bu not şu anda yalnızca konu altyapısını tamamlamak için eklenmiştir; ayrıntılı klinik içerik sonraki fazda kaynak kontrolüyle hazırlanacaktır.",
      },
    ],
  },
];

export function getNoteBySlug(slug: string): Note | undefined {
  return notes.find((note) => note.slug === slug);
}
