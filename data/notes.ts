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
    subtitle: "Anterior-posterior kanama ayrımı, ilk müdahale ve poliklinik yönetimi",

    clinicalSummary:
      "Epistaksis; nazal kavite veya nazofarenksten kaynaklanan burun kanamasıdır. Poliklinikte ilk amaç hastanın hemodinamik durumunu değerlendirmek, aktif kanamayı kontrol etmek, anterior-posterior kaynak ayrımı yapmak, antikoagülan/antiagregan kullanımı ve sistemik riskleri sorgulamak, tekrarlayan veya unilateral kanamalarda altta yatan patolojiyi dışlamaktır.",

    blocks: [
      {
        type: "paragraph",
        title: "Poliklinik Yaklaşımı",
        content:
          "Epistaksis çoğu zaman anterior septum kaynaklıdır ve basit kompresyon, lokal vazokonstriktör, kimyasal koter veya anterior tamponla kontrol edilebilir. Ancak posterior kanama, hemodinamik instabilite, antikoagülan kullanımı, koagülopati, travma, tümör şüphesi veya herediter hemorajik telenjiektazi gibi durumlar daha dikkatli yaklaşım gerektirir.",
      },
      {
        type: "bulletList",
        title: "Poliklinikte İlk 60 Saniye",
        items: [
          "Kanama şu anda aktif mi?",
          "Hasta soluk, terli, hipotansif veya taşikardik mi?",
          "Kanama tek taraflı mı, iki taraflı mı?",
          "Kan boğaza akıyor mu, hasta kan yutuyor mu?",
          "İlk kanama mı, tekrarlayan kanama mı?",
          "Antikoagülan, antiagregan, NSAİİ veya bitkisel kanama artırıcı ürün kullanıyor mu?",
          "Hipertansiyon, karaciğer hastalığı, böbrek yetmezliği veya kanama diyatezi var mı?",
          "Travma, burun karıştırma, kuruluk, septal perforasyon veya intranazal ilaç kullanımı var mı?",
          "Tek taraflı tıkanıklık, kötü kokulu akıntı, kitle hissi veya kilo kaybı var mı?",
        ],
      },
      {
        type: "important",
        title: "İlk Müdahale",
        content:
          "Aktif epistaksiste ilk basamak; hastayı öne eğmek, kanı yutmamasını sağlamak ve burun alt 1/3 yumuşak kısmına sürekli ve yeterli süre kompresyon uygulamaktır. Baş geriye atılmamalıdır; kanın yutulması bulantı, kusma ve aspirasyon riskini artırabilir.",
      },
      {
        type: "bulletList",
        title: "İlk Basamak Müdahale Sırası",
        items: [
          "Hastayı oturt ve öne eğ",
          "Pıhtı varsa nazal pasajı nazikçe temizle",
          "Alt 1/3 yumuşak burun kısmına sürekli bası uygulat",
          "Uygunsa topikal vazokonstriktör veya lokal anestezik-vazokonstriktör uygulanabilir",
          "Kanama odağı görünüyorsa hedefe yönelik koter düşün",
          "Yaygın mukozal kanama veya odak görülemiyorsa anterior tampon değerlendir",
          "Kanama posterior kaynaklı görünüyorsa veya kontrol edilemiyorsa ileri değerlendirme gerekir",
        ],
      },
      {
        type: "table",
        title: "Anterior ve Posterior Epistaksis Ayrımı",
        rows: [
          {
            label: "Anterior epistaksis",
            value: "Genellikle tek taraflı, septum anteriorundan kaynaklı ve daha kolay kontrol edilebilir",
          },
          {
            label: "Posterior epistaksis",
            value: "Daha yaşlı hastada, yoğun kanama, boğaza akış ve bilateral görünüm olabilir",
          },
          {
            label: "Kompresyona yanıt",
            value: "Anterior kanamada daha iyi yanıt beklenir",
          },
          {
            label: "Kanama odağının görülmesi",
            value: "Anterior kaynakta daha sık mümkündür",
          },
          {
            label: "Hemodinamik etkilenme",
            value: "Posterior veya yoğun kanamada daha olasıdır",
          },
          {
            label: "Yatış/ileri girişim gereksinimi",
            value: "Posterior kanamada daha sık gerekebilir",
          },
        ],
      },
      {
        type: "bulletList",
        title: "Muayenede Bakılacaklar",
        items: [
          "Anterior septumda belirgin kanama odağı",
          "Septal kuruluk, kabuklanma veya fissür",
          "Septal perforasyon",
          "Travma bulgusu veya hematom",
          "Telanjiektazi odakları",
          "Tek taraflı kitle, polip veya ülserasyon",
          "Pürülan akıntı veya yabancı cisim şüphesi",
          "Posterior farenkste aktif kan akışı",
        ],
      },
      {
        type: "important",
        title: "Koter Güvenlik Notu",
        content:
          "Kimyasal koter, kanama odağı net görülüyorsa hedefe yönelik uygulanmalıdır. Karşılıklı bilateral septal koterden kaçınılmalıdır; septal perforasyon riskini artırabilir. Yaygın, aktif ve kontrolsüz kanamada koter yerine önce kanamayı görmeyi sağlayacak basamaklar uygulanmalıdır.",
      },
      {
        type: "table",
        title: "Poliklinik Tedavi Seçenekleri",
        rows: [
          {
            label: "Kompresyon",
            value: "İlk basamak müdahaledir",
          },
          {
            label: "Topikal vazokonstriktör",
            value: "Uygun hastada kanamayı azaltmak ve görüş sağlamak için kullanılabilir",
          },
          {
            label: "Kimyasal koter",
            value: "Net görülen anterior kanama odağında düşünülür",
          },
          {
            label: "Anterior tampon",
            value: "Koter yapılamayan veya odak görülmeyen anterior kanamalarda düşünülür",
          },
          {
            label: "Posterior tampon / ileri müdahale",
            value: "Posterior kaynak, yoğun kanama veya anterior yöntemlerle kontrolsüz kanamada gerekir",
          },
          {
            label: "Endoskopik arter ligasyonu / embolizasyon",
            value: "Persistan, posterior veya tekrarlayan ciddi kanamalarda ileri merkez yaklaşımıdır",
          },
        ],
      },
      {
        type: "bulletList",
        title: "Antikoagülan ve Antiagregan Kullanımı",
        items: [
          "İlacın adı, dozu ve son alınma zamanı sorgulanmalıdır",
          "Antikoagülan/antiagregan kullanımı kanamanın şiddetini ve kontrolünü etkileyebilir",
          "İlaç kesme veya geri çevirme kararı hastanın tromboembolik riskiyle birlikte değerlendirilmelidir",
          "Gerekirse ilgili branşlarla iletişim kurulmalıdır",
          "Sadece hafif epistaksis nedeniyle kritik kardiyovasküler ilaçlar kontrolsüz şekilde kesilmemelidir",
        ],
      },
      {
        type: "important",
        title: "Laboratuvar Ne Zaman?",
        content:
          "Her basit anterior epistaksiste rutin laboratuvar gerekmez. Yoğun veya tekrarlayan kanama, antikoagülan kullanımı, bilinen koagülopati, karaciğer hastalığı, hematolojik hastalık, hemodinamik etkilenme veya cerrahi/girişim ihtimali varsa hemogram ve koagülasyon değerlendirmesi düşünülür.",
      },
      {
        type: "bulletList",
        title: "HHT ve Sistemik Nedenleri Sorgula",
        items: [
          "Tekrarlayan spontan epistaksis var mı?",
          "Ailede tekrarlayan burun kanaması öyküsü var mı?",
          "Dudak, oral kavite, dil, burun mukozası veya parmaklarda telanjiektazi var mı?",
          "Demir eksikliği anemisi veya açıklanamayan halsizlik var mı?",
          "Gastrointestinal kanama veya pulmoner/serebral AVM öyküsü var mı?",
          "Çocuk veya genç hastada tekrarlayan ciddi kanama varsa sistemik nedenler düşünülmelidir",
        ],
      },
      {
        type: "table",
        title: "Alarm Bulguları",
        rows: [
          {
            label: "Hemodinamik instabilite",
            value: "Acil müdahale ve resüsitasyon gerektirir",
          },
          {
            label: "Posterior farenkse yoğun kan akışı",
            value: "Posterior epistaksis düşündürür",
          },
          {
            label: "Tek taraflı tekrarlayan kanama",
            value: "Kitle, yabancı cisim veya lokal patoloji dışlanmalıdır",
          },
          {
            label: "Kanama + tek taraflı tıkanıklık",
            value: "Sinonazal tümör ayırıcı tanısı gerekir",
          },
          {
            label: "Travma sonrası septal şişlik",
            value: "Septal hematom dışlanmalıdır",
          },
          {
            label: "Antikoagülan kullanımı ve durmayan kanama",
            value: "Sistemik risk ve ilaç yönetimi değerlendirilmelidir",
          },
        ],
      },
      {
        type: "bulletList",
        title: "Tampon Sonrası Hasta Eğitimi",
        items: [
          "Tamponun ne zaman ve nerede çıkarılacağı net söylenmelidir",
          "Ateş, kötü koku, artan ağrı veya tekrar kanama olursa başvurmalıdır",
          "Burun karıştırma, sert sümkürme ve ağır efordan kaçınmalıdır",
          "Nazal kuruluk için uygun nemlendirme ve salin destek önerilebilir",
          "Hipertansiyon kontrolü ve ilaç uyumu sorgulanmalıdır",
          "Antikoagülan/antiagregan ilaçlar hekim önerisi olmadan kesilmemelidir",
        ],
      },
      {
        type: "important",
        title: "Sevk ve Acil Değerlendirme",
        content:
          "Kontrol edilemeyen aktif kanama, posterior epistaksis şüphesi, hemodinamik etkilenme, ciddi anemi, orbital/nörolojik travma bulgusu, septal hematom, koagülopati veya tümör şüphesi varsa hasta ileri değerlendirme için yönlendirilmelidir.",
      },
      {
        type: "table",
        title: "Sık Nedenler",
        rows: [
          {
            label: "Nazal kuruluk ve kabuklanma",
            value: "Özellikle kış aylarında ve kuru ortamda artar",
          },
          {
            label: "Dijital travma",
            value: "Anterior septal kanama için sık nedendir",
          },
          {
            label: "Hipertansiyon",
            value: "Kanamayı başlatmaktan çok kontrolü zorlaştırabilir",
          },
          {
            label: "Antikoagülan/antiagregan kullanımı",
            value: "Kanama süresi ve şiddetini artırabilir",
          },
          {
            label: "Septal deviasyon/perforasyon",
            value: "Lokal kuruluk ve türbülansla kanama eğilimi yapabilir",
          },
          {
            label: "Tümör",
            value: "Tek taraflı tekrarlayan kanama ve obstrüksiyonla akla gelmelidir",
          },
          {
            label: "HHT",
            value: "Tekrarlayan spontan kanama ve telanjiektazilerle düşünülür",
          },
        ],
      },
      {
        type: "examTip",
        title: "Sınav ve Poliklinik İpucu",
        content:
          "Epistaksiste ilk soru “nereden kanıyor?” değil, “hasta acil müdahale gerektiriyor mu?” olmalıdır. Stabil hastada ilk basamak doğru kompresyondur; tekrarlayan unilateral kanamada ise lokal kitle ve sistemik nedenler unutulmamalıdır.",
      },
      {
        type: "paragraph",
        title: "Kaynak Dayanağı",
        content:
          "Kaynak dayanağı: AAO-HNSF 2020 Epistaksis Klinik Uygulama Kılavuzu ve kanıta dayalı KBB acil/poliklinik yönetim prensipleri temel alınarak hazırlanmıştır. Bu not eğitim amaçlıdır; hasta özelinde karar kanama şiddeti, komorbidite, ilaç kullanımı, muayene bulgusu ve yerel klinik imkanlarla birlikte verilmelidir.",
      },
    ],
  },
  {
    slug: "septal-deviation",
    category: "Rinoloji",
    title: "Septum Deviasyonu",
    subtitle:
      "Nazal obstrüksiyon değerlendirmesi, eşlik eden patolojiler ve septoplasti kararı",

    clinicalSummary:
      "Septum deviasyonu; nazal septumun orta hattan sapması sonucu nazal hava akımında mekanik daralma, nazal obstrüksiyon, kuruluk, kabuklanma, epistaksis eğilimi, horlama veya eşlik eden rinosinüzit yakınmalarına katkı sağlayabilen sık bir anatomik durumdur. Poliklinikte amaç deviasyonun semptomla ilişkisini göstermek, alerjik/nonalerjik rinit, konka hipertrofisi, nazal valv yetmezliği ve nazal polip gibi eşlik eden nedenleri ayırmak ve cerrahi gereksinimi doğru belirlemektir.",

    blocks: [
      {
        type: "paragraph",
        title: "Poliklinik Yaklaşımı",
        content:
          "Septum deviasyonu tek başına radyolojik veya endoskopik bir bulgu değildir; klinik anlamı hastanın semptomlarıyla ilişkilendirildiğinde ortaya çıkar. Her deviasyon cerrahi gerektirmez. Septoplasti kararı; nazal obstrüksiyonun derecesi, medikal tedaviye yanıt, eşlik eden rinit veya konka hipertrofisi, nazal valv problemi, önceki travma/cerrahi öyküsü ve hastanın beklentileri birlikte değerlendirilerek verilmelidir.",
      },
      {
        type: "bulletList",
        title: "Poliklinikte İlk 60 Saniye",
        items: [
          "Burun tıkanıklığı tek taraflı mı, iki taraflı mı?",
          "Tıkanıklık sürekli mi, pozisyona veya nazal siklusa göre değişiyor mu?",
          "Gece artıyor mu, horlama veya ağız açık uyuma var mı?",
          "Alerjik rinit semptomları eşlik ediyor mu?",
          "Dekonjestan sprey kullanımı var mı, kaç gündür kullanıyor?",
          "Travma veya burun cerrahisi öyküsü var mı?",
          "Tek taraflı kanama, kabuklanma, kötü koku veya kitle hissi var mı?",
          "Koku kaybı, fasiyal basınç veya kronik sinüzit semptomları var mı?",
          "Hasta estetik beklenti mi, fonksiyonel nefes alma beklentisi mi ifade ediyor?",
        ],
      },
      {
        type: "bulletList",
        title: "Muayenede Bakılacaklar",
        items: [
          "Deviasyon anterior, posterior, kaudal veya yüksek septal bölgede mi?",
          "Nazal valv bölgesinde daralma var mı?",
          "Alt konka hipertrofisi eşlik ediyor mu?",
          "Mukoza ödemli, soluk, hiperemik veya kuru mu?",
          "Septal spur karşı mukozaya temas ediyor mu?",
          "Kabuklanma, fissür veya anterior septal kanama odağı var mı?",
          "Polip, kitle veya tek taraflı patoloji var mı?",
          "Endoskopide orta meatus ve nazofarenks değerlendirilebiliyor mu?",
        ],
      },
      {
        type: "table",
        title: "Septum Deviasyonunda Ayırıcı Tanı",
        rows: [
          {
            label: "Alerjik rinit",
            value:
              "Kaşıntı, hapşırık, sulu rinore, mevsimsellik veya alerjen ilişkisi ön plandadır",
          },
          {
            label: "Nonalerjik rinit",
            value:
              "Koku, duman, ısı değişimi veya irritanlarla tetiklenebilir",
          },
          {
            label: "Konka hipertrofisi",
            value: "Dekonjesyon sonrası belirgin küçülme görülebilir",
          },
          {
            label: "Nazal valv yetmezliği",
            value:
              "İnspirasyonda lateral duvar kollapsı ve valv manevralarıyla rahatlama olabilir",
          },
          {
            label: "Nazal polip",
            value:
              "Koku kaybı, bilateral tıkanıklık ve endoskopik polip bulgusu olabilir",
          },
          {
            label: "Tümör / unilateral kitle",
            value:
              "Tek taraflı ilerleyici tıkanıklık ve kanama varsa dışlanmalıdır",
          },
          {
            label: "Rinitis medikamentoza",
            value: "Uzun süreli topikal dekonjestan kullanımı vardır",
          },
        ],
      },
      {
        type: "important",
        title: "Cerrahi Kararda Temel İlke",
        content:
          "Septoplasti kararı sadece “septum eğri” diye verilmemelidir. Semptomatik nazal obstrüksiyon, muayene ile gösterilen septal deviasyon ve eşlik eden tedavi edilebilir mukozal nedenlerin değerlendirilmesi birlikte düşünülmelidir.",
      },
      {
        type: "table",
        title: "Septoplasti İçin Klinik Gerekçeler",
        rows: [
          {
            label: "Semptomatik nazal obstrüksiyon",
            value: "Septoplasti için en temel fonksiyonel gerekçedir",
          },
          {
            label: "Medikal tedaviye rağmen devam eden tıkanıklık",
            value:
              "Rinit/ödem bileşeni tedavi edildikten sonra değerlendirilmelidir",
          },
          {
            label: "Endoskopik sinüs cerrahisine erişim gereksinimi",
            value:
              "Septal deviasyon cerrahi erişimi engelliyorsa düzeltme gerekebilir",
          },
          {
            label: "Septal spur ile temas ilişkili ağrı",
            value: "Dikkatli klinik korelasyon gerekir",
          },
          {
            label: "Tekrarlayan anterior epistaksis",
            value: "Kuruluk, spur veya kabuklanma ile ilişkili olabilir",
          },
          {
            label: "Travma sonrası deformite",
            value: "Fonksiyonel ve bazen estetik değerlendirme birlikte gerekir",
          },
        ],
      },
      {
        type: "bulletList",
        title: "BT Ne Zaman Gerekir?",
        items: [
          "Sadece basit septum deviasyonu için rutin BT gerekli değildir",
          "Kronik rinosinüzit semptomları varsa sinüs BT değerlendirilebilir",
          "Cerrahi planlama ve eşlik eden sinüs hastalığı şüphesinde BT faydalı olabilir",
          "Tek taraflı kitle, polip, kanama veya atipik bulgu varsa görüntüleme düşünülür",
          "Revizyon cerrahi veya kompleks deformite varsa anatomik planlama gerekebilir",
        ],
      },
      {
        type: "important",
        title: "Tek Taraflı Semptom Uyarısı",
        content:
          "Tek taraflı ilerleyici tıkanıklık, tekrarlayan tek taraflı kanama, kötü kokulu akıntı, yüz ağrısı, kitle görünümü veya krutlanma varsa semptomlar sadece septum deviasyonuna bağlanmamalıdır. Neoplazi, yabancı cisim, odontojenik patoloji ve kronik enfeksiyon gibi nedenler dışlanmalıdır.",
      },
      {
        type: "bulletList",
        title: "Cerrahi Öncesi Hastaya Anlatılacaklar",
        items: [
          "Amaç burun içi hava pasajını iyileştirmektir",
          "Alerji, rinit veya konka hipertrofisi varsa ameliyat sonrası da tedavi gerekebilir",
          "Septoplasti koku kaybı, baş ağrısı veya horlamayı her hastada tamamen düzeltmeyebilir",
          "Nazal valv problemi varsa sadece septoplasti yeterli olmayabilir",
          "Cerrahi sonrası kabuklanma, tıkanıklık ve bakım ihtiyacı geçici olarak olabilir",
          "Beklenti fonksiyonel ve gerçekçi şekilde konuşulmalıdır",
        ],
      },
      {
        type: "table",
        title: "Komplikasyon ve Riskler",
        rows: [
          {
            label: "Kanama",
            value: "Erken postoperatif dönemde görülebilir",
          },
          {
            label: "Septal hematom",
            value: "Acil değerlendirme gerektirir",
          },
          {
            label: "Septal perforasyon",
            value: "Bilateral mukozal hasar risk faktörüdür",
          },
          {
            label: "Enfeksiyon",
            value: "Nadir olmakla birlikte takip gerekir",
          },
          {
            label: "Deviasyonun devamı veya nüks",
            value: "Özellikle kaudal/kompleks deformitelerde olabilir",
          },
          {
            label: "Koku değişikliği",
            value: "Nadir ve genellikle multifaktöriyel değerlendirilir",
          },
          {
            label: "Nazal obstrüksiyonun devamı",
            value:
              "Valv, konka veya rinit bileşeni varsa görülebilir",
          },
        ],
      },
      {
        type: "bulletList",
        title: "Poliklinik Yönetim Planı",
        items: [
          "Semptom ve muayene uyumu değerlendirilir",
          "Rinit bulgusu varsa uygun medikal tedavi denenir",
          "Dekonjestan bağımlılığı varsa kesilme planı yapılır",
          "Konka hipertrofisi ve valv problemi ayrıca değerlendirilir",
          "Cerrahi düşünülüyorsa hasta beklentisi netleştirilir",
          "Endoskopi ile eşlik eden polip, kitle veya orta meatus patolojisi dışlanır",
          "Gerekirse sinüs BT veya ek değerlendirme planlanır",
        ],
      },
      {
        type: "examTip",
        title: "Sınav ve Poliklinik İpucu",
        content:
          "Septum deviasyonunda en önemli nokta “anatomik eğrilik” ile “semptomatik obstrüksiyon” arasındaki ilişkiyi kurmaktır. Alerjik rinit, konka hipertrofisi ve nazal valv yetmezliği değerlendirilmeden septoplasti kararı eksik kalabilir.",
      },
      {
        type: "paragraph",
        title: "Kaynak Dayanağı",
        content:
          "Kaynak dayanağı: AAO-HNS septoplasti klinik indikatörleri, nazal septoplasti klinik konsensus metinleri ve kanıta dayalı rinoloji cerrahi değerlendirme prensipleri temel alınarak hazırlanmıştır. Bu not eğitim amaçlıdır; hasta özelinde karar fizik muayene, endoskopi, komorbiditeler, hasta beklentisi ve yerel klinik uygulamalarla birlikte verilmelidir.",
      },
    ],
  },
  {
    slug: "fess-indications-complications",
    category: "Rinoloji",
    title: "FESS Endikasyonları ve Komplikasyonları",
    subtitle:
      "Endoskopik sinüs cerrahisi kararı, cerrahi planlama ve majör riskler",

    clinicalSummary:
      "Fonksiyonel endoskopik sinüs cerrahisi, kronik rinosinüzit ve seçilmiş sinonazal hastalıklarda medikal tedaviye rağmen kontrolsüz semptom, objektif inflamasyon bulgusu ve cerrahiden beklenen fayda mevcut olduğunda düşünülen bir tedavi basamağıdır. Cerrahinin amacı sadece dokuyu çıkarmak değil; sinüs drenajını, ventilasyonu ve topikal tedavilerin mukozaya ulaşmasını iyileştirmektir.",

    blocks: [
      {
        type: "paragraph",
        title: "Cerrahiye Genel Yaklaşım",
        content:
          "FESS, kronik rinosinüzit yönetiminde medikal tedavinin yerine geçen basit bir işlem olarak görülmemelidir. Doğru hasta seçimi, objektif endoskopik veya radyolojik bulgu, uygun medikal tedavinin değerlendirilmesi, anatomik varyasyonların bilinmesi ve komplikasyon risklerinin hastaya anlatılması gerekir. Cerrahi sonrası takip ve topikal tedavi devamı, özellikle nazal polipli hastalıkta uzun dönem kontrol açısından önemlidir.",
      },
      {
        type: "bulletList",
        title: "Poliklinikte İlk 60 Saniye",
        items: [
          "Semptomlar 12 haftadan uzun mu?",
          "Burun tıkanıklığı, rinore/postnazal akıntı, fasiyal basınç veya koku kaybı var mı?",
          "Endoskopide polip, ödem veya mukopürülan akıntı görüldü mü?",
          "Sinüs BT’de objektif hastalık bulgusu var mı?",
          "Uygun medikal tedavi yeterli süre ve doğru teknikle kullanıldı mı?",
          "Astım, AERD, alerji veya immünsüpresyon var mı?",
          "Daha önce sinüs cerrahisi geçirmiş mi?",
          "Orbital veya intrakraniyal komplikasyon bulgusu var mı?",
          "Hastanın cerrahiden beklentisi ve uzun dönem tedaviye uyumu gerçekçi mi?",
        ],
      },
      {
        type: "table",
        title: "FESS İçin Sık Endikasyonlar",
        rows: [
          {
            label: "Medikal tedaviye dirençli kronik rinosinüzit",
            value:
              "Semptom + objektif endoskopik/BT inflamasyon bulgusu gerekir",
          },
          {
            label: "Nazal polipli kronik rinosinüzit",
            value:
              "Obstrüksiyon, koku kaybı ve polip yükü cerrahi kararı etkiler",
          },
          {
            label: "Rekürren akut rinosinüzit",
            value:
              "Ataklar arası objektif değerlendirme ve uygun seçilmiş hasta önemlidir",
          },
          {
            label: "Fungal ball",
            value: "Endoskopik cerrahi temizleme temel yaklaşımdır",
          },
          {
            label: "Alerjik fungal rinosinüzit",
            value: "Cerrahi temizlik ve postoperatif antiinflamatuvar takip gerekir",
          },
          {
            label: "Mukosel",
            value:
              "Ekspansiyon, komşu yapı basısı veya enfeksiyon riski varsa cerrahi düşünülür",
          },
          {
            label: "Komplikasyonlu sinüzit",
            value:
              "Orbital/intrakraniyal komplikasyonda acil cerrahi gerekebilir",
          },
          {
            label: "Biyopsi gerektiren sinonazal lezyon",
            value:
              "Doku tanısı ve tedavi planı için endoskopik yaklaşım gerekebilir",
          },
        ],
      },
      {
        type: "important",
        title: "Cerrahi Karar İçin Temel İlke",
        content:
          "FESS kararı yalnızca “BT’de sinüzit var” diye verilmemelidir. Semptomlar, objektif endoskopi/BT bulguları, medikal tedaviye yanıt, hastalık fenotipi, komorbiditeler ve hastanın uzun dönem tedavi beklentisi birlikte değerlendirilmelidir.",
      },
      {
        type: "bulletList",
        title: "Cerrahi Öncesi Değerlendirme",
        items: [
          "Nazal endoskopi bulguları kaydedilir",
          "Sinüs BT anatomik varyasyonlar ve hastalık yaygınlığı açısından incelenir",
          "Lamina papyracea, skull base, frontal recess, Onodi hücresi ve karotis/optik kanal ilişkileri değerlendirilir",
          "Antikoagülan/antiagregan kullanımı sorgulanır",
          "Astım ve alerji kontrolü gözden geçirilir",
          "Önceki cerrahi varsa revizyon anatomisi dikkatle değerlendirilir",
          "Hastaya cerrahinin semptom kontrolüne yardımcı olduğu, kronik inflamasyonu tamamen yok etmeyebileceği anlatılır",
        ],
      },
      {
        type: "table",
        title: "BT’de Cerrahi Planlama İçin Kritik Noktalar",
        rows: [
          {
            label: "Lamina papyracea",
            value: "Orbital komplikasyon riskini belirlemede önemlidir",
          },
          {
            label: "Skull base yüksekliği ve asimetri",
            value:
              "BOS kaçağı riskini azaltmak için değerlendirilir",
          },
          {
            label: "Onodi hücresi",
            value:
              "Optik sinir ilişkisi nedeniyle kritik anatomik varyasyondur",
          },
          {
            label: "Frontal recess anatomisi",
            value: "Frontal sinüs cerrahisi planını etkiler",
          },
          {
            label: "Unsinat proses varyasyonları",
            value: "Maksiller sinüs girişini etkileyebilir",
          },
          {
            label: "Kistik/mukosel görünümü",
            value:
              "Ekspansiyon ve komşu yapı etkisi açısından önemlidir",
          },
          {
            label: "Revizyon cerrahi bulguları",
            value: "Landmark kaybı ve skar nedeniyle risk artabilir",
          },
        ],
      },
      {
        type: "bulletList",
        title: "Cerrahinin Hastaya Anlatılması",
        items: [
          "Ameliyat burun içinden endoskopik olarak yapılır",
          "Amaç sinüs drenajını ve topikal tedavi etkinliğini artırmaktır",
          "Cerrahi sonrası irrigasyon, nazal steroid ve kontroller gerekebilir",
          "Polipli hastalıkta nüks riski vardır",
          "Astım/AERD eşlik ediyorsa multidisipliner takip gerekebilir",
          "Revizyon cerrahilerde anatomik zorluk ve risk artabilir",
          "Kanama, enfeksiyon, orbital komplikasyon ve BOS kaçağı gibi riskler anlatılmalıdır",
        ],
      },
      {
        type: "important",
        title: "FESS Kronik Hastalık Yönetiminin Bir Parçasıdır",
        content:
          "Özellikle kronik rinosinüzitte cerrahi tek başına “kesin tedavi” olarak anlatılmamalıdır. Cerrahi, uygun hastada semptom kontrolünü artıran ve medikal/topikal tedavinin etkinliğini destekleyen bir basamaktır. Postoperatif takip tedavinin önemli parçasıdır.",
      },
      {
        type: "table",
        title: "Komplikasyonlar",
        rows: [
          {
            label: "Kanama",
            value:
              "Erken veya geç dönemde görülebilir, bazen tampon veya müdahale gerektirir",
          },
          {
            label: "Orbital yağ ekspozisyonu",
            value: "Lamina papyracea hasarını düşündürür",
          },
          {
            label: "Orbital hematom",
            value:
              "Görme kaybı riski nedeniyle acil değerlendirme gerektirir",
          },
          {
            label: "Ekstraoküler kas hasarı",
            value:
              "Diplopi ve oküler hareket kısıtlılığına yol açabilir",
          },
          {
            label: "Optik sinir hasarı",
            value: "Nadir fakat ciddi görme kaybı nedenidir",
          },
          {
            label: "BOS kaçağı",
            value:
              "Skull base hasarı sonucu gelişebilir, meningit riski taşır",
          },
          {
            label: "İntrakraniyal komplikasyon",
            value: "Nadir fakat ciddi ve acil yönetim gerektirir",
          },
          {
            label: "Sineşi / skar",
            value:
              "Postoperatif obstrüksiyon ve semptom devamına katkı sağlayabilir",
          },
          {
            label: "Hastalık nüksü",
            value:
              "Özellikle polipli ve tip 2 inflamasyonlu hastalıkta görülebilir",
          },
        ],
      },
      {
        type: "bulletList",
        title: "Postoperatif Takipte Bakılacaklar",
        items: [
          "Kanama ve enfeksiyon bulguları",
          "Kabuklanma ve sekresyon miktarı",
          "Orta meatus açıklığı",
          "Sineşi veya skar gelişimi",
          "Polip nüksü",
          "Koku ve obstrüksiyon semptomları",
          "Salin irrigasyon ve nazal steroid uyumu",
          "Astım veya alerjik hastalık kontrolü",
        ],
      },
      {
        type: "important",
        title: "Acil Uyarı Bulguları",
        content:
          "FESS sonrası görme azalması, şiddetli orbital ağrı, proptozis, diplopi, hızla artan göz çevresi şişlik, berrak rinore, ense sertliği, bilinç değişikliği veya kontrol edilemeyen kanama acil değerlendirme gerektirir.",
      },
      {
        type: "table",
        title: "Poliklinik Karar Özeti",
        rows: [
          {
            label: "CRS semptomu var ama objektif bulgu yok",
            value:
              "Alternatif tanılar ve rinit/nörolojik ağrı nedenleri düşünülür",
          },
          {
            label: "CRS + objektif bulgu + medikal tedaviye direnç",
            value: "FESS değerlendirmesi yapılabilir",
          },
          {
            label: "CRSwNP + ağır obstrüksiyon/koku kaybı",
            value:
              "Cerrahi ve uzun dönem antiinflamatuvar takip planlanabilir",
          },
          {
            label: "Fungal ball",
            value: "Endoskopik cerrahi temizleme düşünülür",
          },
          {
            label: "Orbital komplikasyon",
            value:
              "Acil görüntüleme ve cerrahi/medikal multidisipliner yaklaşım gerekir",
          },
          {
            label: "Revizyon cerrahi",
            value:
              "Anatomik riskler ve beklenti daha ayrıntılı konuşulmalıdır",
          },
        ],
      },
      {
        type: "bulletList",
        title: "Hasta Eğitiminde Söylenecekler",
        items: [
          "Ameliyat sonrası kontroller tedavinin parçasıdır",
          "Salin irrigasyon düzenli yapılmalıdır",
          "Nazal steroid veya verilen topikal tedaviler önerildiği şekilde kullanılmalıdır",
          "İlk dönemde kabuklanma ve tıkanıklık olabilir",
          "Şiddetli kanama, görme bulgusu veya berrak su gibi akıntı olursa acil başvuru gerekir",
          "Polipli hastalıkta nüks olabileceği ve uzun dönem takip gerektiği anlatılmalıdır",
        ],
      },
      {
        type: "examTip",
        title: "Sınav ve Poliklinik İpucu",
        content:
          "FESS endikasyonu için üçlü düşün: uygun semptom, objektif hastalık bulgusu ve yeterli medikal tedaviye rağmen kontrolsüz hastalık. Komplikasyonlarda en kritik başlıklar orbital hematom/görme kaybı ve BOS kaçağıdır.",
      },
      {
        type: "paragraph",
        title: "Kaynak Dayanağı",
        content:
          "Kaynak dayanağı: EPOS 2020, ICAR-RS-2021, AAO-HNS endoskopik sinüs cerrahisi klinik indikatörleri ve erişkin sinüs cerrahisi klinik uygulama önerileri temel alınarak hazırlanmıştır. Bu not eğitim amaçlıdır; hasta özelinde karar endoskopi, BT anatomisi, komorbiditeler, cerrahi deneyim, hasta beklentisi ve yerel klinik imkanlarla birlikte verilmelidir.",
      },
    ],
  },
];

export function getNoteBySlug(slug: string): Note | undefined {
  return notes.find((note) => note.slug === slug);
}
