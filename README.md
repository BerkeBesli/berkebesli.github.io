# Berke Beşli — Kişisel Portfolyo

🌐 **Canlı Site:** [berkebesli.github.io](https://berkebesli.github.io/)

Bu depo, kişisel portfolyo web sitemin kaynak kodlarını içermektedir. Siteyi hem dijital bir özgeçmiş hem de veri bilimi, yapay zeka ve yazılım geliştirme alanlarında ürettiğim projeleri sergilediğim sade ve işlevsel bir vitrin olarak tasarladım.

## 📌 Sitenin İçeriği ve Yapısı

* **Ana Sayfa (`index.html`):** Profesyonel profilimi, temel odak alanlarımı, kullandığım teknolojileri ve iletişim kanallarını özetleyen giriş sayfası.
* **Özgeçmiş (`resume.html`):** İş deneyimlerim, akademik geçmişim, teknik yetkinliklerim, sertifikalarım ve yabancı dil seviyelerimin yer aldığı kronolojik sayfa.
* **Projeler (`projects.html`):** Veri bilimi, optimizasyon algoritmaları ve yapay zeka destekli yazılım çözümleri üzerine geliştirdiğim projelerin açıklamaları, görselleri ve GitHub depo bağlantıları.

## 🛠️ Geliştirme Altyapısı ve Özellikler

* **HTML5:** Semantik sayfa yapısı, Open Graph meta etiketleri ve klavye/ekran okuyucu erişilebilirlik standartları (`skip-link`, `aria-label`).
* **CSS3:** Özel CSS değişkenleri, CSS Grid ve Flexbox kullanılarak oluşturulan kutusuz (open-layout) editoryal arayüz, hareketli SVG dalga arka planı ve mobil ekranlara özel bölüm sıralaması.
* **Vanilla JavaScript:** Harici kütüphane bağımlılığı olmadan çalışan mobil navigasyon menüsü ve `IntersectionObserver` tabanlı yumuşak kaydırma (scroll-reveal) animasyonları.
* **Barındırma:** GitHub Pages üzerinden statik yayınlama.

## 📂 Proje Mimarisi

```text
├── index.html          # Ana sayfa (Karşılama alanı, teknoloji kapsülleri, hakkımda ve iletişim)
├── resume.html         # Özgeçmiş (Deneyim, eğitim, yetkinlikler, sertifikalar ve diller)
├── projects.html       # Projeler (Proje kartları, görseller ve GitHub bağlantıları)
├── css/
│   └── style.css       # Tüm sayfaların stilleri, dalga animasyonu ve mobil düzen kuralları
├── js/
│   └── main.js         # Mobil menü kontrolü ve güvenli scroll-reveal animasyonları
└── images/             # Profil fotoğrafı ve proje görselleri
