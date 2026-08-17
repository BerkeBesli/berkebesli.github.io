# Berke Beşli — Kişisel Portfolyo

Bu depo, kişisel portfolyo web sitemin kaynak kodlarını içermektedir. Yazılım geliştirme, veri bilimi ve yapay zeka alanlarına odaklanan bir Mekatronik Mühendisi olarak; bu siteyi hem dijital bir özgeçmiş hem de geliştirdiğim veri odaklı projeleri sergilediğim profesyonel bir vitrin olması amacıyla tasarladım.

Site, herhangi bir framework veya harici bağımlılık kullanılmadan tamamen saf (vanilla) web teknolojileriyle geliştirilmiş olup, doğrudan GitHub Pages üzerinden yayınlanacak şekilde kurgulanmıştır.

## 📌 Sitenin İçeriği ve Yapısı

*   **Ana Sayfa (`index.html`):** Profesyonel kimliğimi, temel odak alanlarımı ve teknoloji yığınımı özetleyen giriş bölümü.
*   **Özgeçmiş (`resume.html`):** Akademik geçmişim (Mekatronik Mühendisliği lisansı ve 6 aylık Veri Bilimi & Yapay Zeka Bootcamp'i), iş tecrübelerim ve sahip olduğum profesyonel sertifikaların modern bir yapıda sunulan kronolojik özeti.
*   **Projeler (`projects.html`):** Veri bilimi, makine öğrenmesi ve optimizasyon algoritmaları kullanarak geliştirdiğim uçtan uca çalışmaların (örneğin; SmartRoute AI, FLO Müşteri Segmentasyonu) detayları ve GitHub depo bağlantıları.

## 🛠️ Geliştirme Altyapısı (Tech Stack)

*   **HTML5:** Semantik yapı ve erişilebilirlik (A11y) standartları.
*   **CSS3:** Flexbox, CSS Grid ve özel CSS değişkenleri kullanılarak oluşturulan duyarlı (responsive), modern UI tasarımı.
*   **Vanilla JavaScript:** Bağımlılık (dependency) içermeyen, mobil navigasyon yönetimi.
*   **Hosting & CI/CD:** GitHub Pages

## Proje Mimarisi

```
├── index.html          Ana Sayfa (home)
├── projects.html        Projeler (projects)
├── resume.html          Özgeçmiş (resume)
├── css/
│   └── style.css        All styles for all three pages
└── js/
    └── main.js           Mobile nav toggle (open/close/outside-click/Escape)
```
