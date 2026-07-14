## Cypress UI Test Otomasyon Ödevi

## Projenin Amacı
Bu projenin amacı, SauceDemo uygulaması üzerinde Cypress kullanılarak UI test otomasyonu süreçlerinin deneyimlenmesidir. Page Object Model ve OOP yaklaşımları kullanılarak tekrar kullanılabilir, okunabilir ve yönetilebilir bir test mimarisi kurulmuştur.

## Kullanılan Teknolojiler
* Node.js
* Cypress
* TypeScript
* Git & GitHub
* Page Object Model
* Fixture
* Cypress Assertions

## Projenin Kurulumu
Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları sırasıyla terminalinize girmeniz gerekmektedir:
1. Depoyu klonlayın: `git clone [https://github.com/dilaraasert/cypress-intern-homework.git](https://github.com/dilaraasert/cypress-intern-homework.git)`
2. Proje klasörüne gidin: `cd cypress-intern-homework`
3. Gerekli paketleri kurun: `npm install`

## Testlerin Çalıştırılması
Testleri çalıştırmak için iki farklı yöntem kullanabilirsiniz:
* **Cypress Arayüzü ile (UI):** `npx cypress open`
* **Terminal üzerinden (Headless):** `npx cypress run`

## Hazırlanan Test Senaryoları
* Senaryo 1: Başarılı Giriş (Geçerli bilgilerle ürünler sayfasına yönlendirme)
* Senaryo 2: Hatalı Kullanıcıyla Giriş (Hata mesajı doğrulama)
* Senaryo 3: Sepete Ürün Ekleme (Ürün sayısını ve adını doğrulama)
* Senaryo 4: Satın Alma İşlemini Tamamlama (Checkout ve sipariş başarı mesajı doğrulama)
* Senaryo 5 (Bonus): Sepetten Ürün Kaldırma (Eklenen ürünün sepetten başarıyla silindiğini doğrulama)

## Bonus Görevler
* Ana görevlere ek olarak 'Sepetteki ürünü kaldırma testi' ve 'Login işlemini Cypress Custom Command haline getirme' işlemleri başarıyla senaryolara dahil edilmiştir.

## Proje Klasör Yapısı
* `cypress/e2e`: Test senaryolarının bulunduğu klasör.
* `cypress/fixtures`: Testlerde kullanılan verilerin bulunduğu klasör.
* `cypress/pages`: Page Object Model yapısına uygun sayfa sınıflarının bulunduğu klasör.
* `cypress/support`: Özel komutların ve genel ayarların bulunduğu klasör.


## Stajyer Mülakat Soruları ve Cevapları

* 1. Page Object Model neden kullanılır?
Test kodları ile sayfa elementlerini birbirinden ayırmak için kullanılır. Bu sayede arayüzde bir değişiklik olduğunda tüm testleri tek tek gezmek yerine sadece ilgili sayfa sınıfını (Page Object) güncelleyerek bakımı kolaylaştırırız. Kod tekrarını önler ve okunabilirliği artırır.


* 2. Fixture kullanmanın avantajı nedir?
Kullanıcı adları, şifreler veya ürün bilgileri gibi test verilerini doğrudan test kodunun içine yazmak yerine harici `.json` dosyalarında tutmamızı sağlar. Bu sayede veri yönetimi merkezileşir, testler daha temiz görünür ve verileri farklı testlerde tekrar tekrar kullanmak çok kolaylaşır.


* 3. Neden cy.wait(5000) kullanmamalıyız?
Sabit bekleme (hard wait) kullanmak test sürelerini gereksiz yere uzatır ve testleri kolay bozulabilir hale getirir. Öğe 1 saniyede yüklense bile test 5 saniye boşuna bekler. Bunun yerine Cypress'in akıllı bekleme özelliğine güvenmeli veya elementin görünür olmasını beklemeliyiz (assertion).


* 4. Testlerin birbirinden bağımsız olması neden önemlidir?
Testlerin çalışma sırası değiştiğinde veya tek başlarına koşturulduklarında hata vermemeleri gerekir. Birbirine bağımlı testler zincirleme reaksiyona yol açar; ilk test patlarsa sonrakiler de hatalı şekilde patlar. Bağımsız testler sayesinde paralel koşum yapılabilir ve hataların asıl kaynağı anında tespit edilebilir.


* 5. Bir selector seçerken nelere dikkat edilmelidir?
     Buton veya yazı kutusu gibi elementlerin rengi, tasarımı veya CSS sınıfları (class) ileride kolayca değişebilir. Eğer seçimi bunlara güvenerek yaparsak, ufak bir tasarım değişikliğinde testimiz hemen bozulur. Bu yüzden, tasarım değişikliklerinden etkilenmeyen, sadece test otomasyonu için özel olarak sayfaya eklenmiş olan `data-test` veya `data-cy` gibi benzersiz ve sabit etiketleri seçmeye dikkat edilmelidir.

     