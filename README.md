# Habit Tracker – React + TypeScript + Vite

Bu proje, görevlerini takip etmek, alışkanlıklarını yönetmek ve ilerlemeni düzenli olarak gözlemlemek amacıyla geliştirilmiş bir web uygulamasıdır.  
Modern frontend teknolojileri kullanılarak inşa edilmiştir.

## Kullanılan Teknolojiler

- React – Bileşen tabanlı kullanıcı arayüzü
- TypeScript – Tip güvenliği
- Vite – Hızlı geliştirme ve derleme ortamı
- Zustand – Global state yönetimi
- Formik – Form kontrolü ve validasyon
- React Router – Sayfa yönlendirme
- CSS – Özelleştirilmiş responsive stiller

## Proje Yapısı

```
src/
├── components/           # Sayfa bileşenleri (Home, Tasks, AddTask, Progress, Settings)
├── css/                  # Sayfalara özel stiller
├── store/                # Zustand store
├── utils/                # Yardımcı dosyalar
├── App.tsx               # Tüm sayfaları ve bileşenleri birleştiren ana uygulama bileşeni
├── index.css             # Ana uygulama bileşeni
├── main.tsx              # Uygulama giriş noktası
```

## Kurulum

```bash
# Projeyi klonlayın
git clone https://github.com/ahsenece99/HabitTracker.git
cd HabitTracker

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcıdan `http://localhost:5173` adresine giderek uygulamayı görüntüleyebilirsiniz.

## Uygulama Özellikleri

- Görev ekleme, tamamlama ve silme
- Görevleri tarihe göre listeleme
- İlerleme sayfası
- Responsive tasarım
- Global state yönetimi (Zustand ile)
- Form yönetimi (Formik ile)

## ESLint Ayarları (isteğe bağlı)

Eğer projede tip farkındalığına sahip lint kuralları tanımlamak isterseniz, `eslint.config.js` dosyasını aşağıdaki şekilde güncelleyebilirsiniz:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

Ayrıca `eslint-plugin-react-x` ve `eslint-plugin-react-dom` gibi eklentileri de kullanabilirsiniz.

## Lisans

Bu proje MIT lisansı ile yayınlanmıştır.

Katkı sağlamak isteyenler pull request gönderebilir.

