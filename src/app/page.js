import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/LOGO.jpg" alt="Lembar Edukasi Anak Indonesia" width={200} height={80} className="rounded-full" />
          </div>
          <div className="flex items-center space-x-2 text-green-600 font-semibold">
            <span>📞 0877 1278 0990</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 to-purple-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <span className="inline-block bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              E-BOOK EDUKASI TERBARU
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
            Koleksi E-Book Edukasi Terbaru Anak<br />
            <span className="text-pink-500">Lucu dan Mendidik</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Seri Pengetahuan Anak yang dapat digunakan di gadget dan dicetak mandiri secara tidak terbatas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/6287712780990" 
               className="bg-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-600 transition-colors">
              Beli Sekarang
            </a>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="mt-12 flex justify-center">
          <div className="relative">
            <Image src="/Aset Grafis/hand-drawn-funny-cartoon-children-vector.png" 
                   alt="Happy Children" width={400} height={300} />
          </div>
        </div>
      </section>
      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              PRODUK KAMI
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Berapa Harga E-Book Edukasi
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dapatkan e-book berkualitas dengan harga terjangkau untuk pendidikan anak yang lebih baik
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Product 1 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-gray-100 hover:border-pink-300 transition-colors">
              <div className="w-20 h-20 bg-pink-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">E-Book Edukasi Anak Indonesia</h3>
              <div className="text-4xl font-bold text-pink-500 mb-6">Rp 35.000</div>
              <a href="https://wa.me/6287712780990" className="block bg-pink-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-pink-600 transition-colors">
                Beli Sekarang
              </a>
            </div>
            
            {/* Product 2 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-gray-100 hover:border-green-300 transition-colors">
              <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Image src="/Aset Grafis/kaaba-emoji-2001x2048-mkviuhst.png" alt="Islamic" width={40} height={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">E-Book Edukasi Anak Muslim</h3>
              <div className="text-4xl font-bold text-green-500 mb-6">Rp 35.000</div>
              <a href="https://wa.me/6287712780990" className="block bg-green-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-green-600 transition-colors">
                Beli Sekarang
              </a>
            </div>
            
            {/* Product 3 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-gray-100 hover:border-blue-300 transition-colors">
              <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Lembar Digital Mewarnai</h3>
              <div className="text-4xl font-bold text-blue-500 mb-6">Rp 50.000</div>
              <a href="https://wa.me/6287712780990" className="block bg-blue-500 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-600 transition-colors">
                Beli Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Example Pages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              CONTOH HALAMAN
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Lihat Contoh Halaman E-Book
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Preview halaman-halaman menarik dari setiap e-book yang akan Anda dapatkan
            </p>
          </div>
          
          {/* E-Book Edukasi Examples */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">E-Book Edukasi Anak Indonesia</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
                <Image src="/Contoh Halaman E-Book Edukasi/0006.jpg" alt="Halaman Edukasi 1" width={200} height={280} className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
                <Image src="/Contoh Halaman E-Book Edukasi/0008.jpg" alt="Halaman Edukasi 2" width={200} height={280} className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
                <Image src="/Contoh Halaman E-Book Edukasi/Seri Alfabet-images-87.jpg" alt="Halaman Alfabet" width={200} height={280} className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
                <Image src="/Contoh Halaman E-Book Edukasi/Seri Buah-buahan-images-29.jpg" alt="Halaman Buah" width={200} height={280} className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
                <Image src="/Contoh Halaman E-Book Edukasi/Seri Berhitung-images-110.jpg" alt="Halaman Berhitung" width={200} height={280} className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
                <Image src="/Contoh Halaman E-Book Edukasi/Seri Dinosaurus_page-0086.jpg" alt="Halaman Dinosaurus" width={200} height={280} className="w-full h-auto" />
              </div>
            </div>
          </div>
          
          {/* E-Book Anak Muslim Examples */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">E-Book Edukasi Anak Muslim</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
                <Image src="/Contoh Halaman E-Book Anak Muslim/1.png" alt="Halaman Muslim 1" width={200} height={280} className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
                <Image src="/Contoh Halaman E-Book Anak Muslim/2.png" alt="Halaman Muslim 2" width={200} height={280} className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
                <Image src="/Contoh Halaman E-Book Anak Muslim/3.png" alt="Halaman Muslim 3" width={200} height={280} className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
                <Image src="/Contoh Halaman E-Book Anak Muslim/4.png" alt="Halaman Muslim 4" width={200} height={280} className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
                <Image src="/Contoh Halaman E-Book Anak Muslim/5.png" alt="Halaman Muslim 5" width={200} height={280} className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
                <Image src="/Contoh Halaman E-Book Anak Muslim/6.png" alt="Halaman Muslim 6" width={200} height={280} className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
                <Image src="/Contoh Halaman E-Book Anak Muslim/7.png" alt="Halaman Muslim 7" width={200} height={280} className="w-full h-auto" />
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
                <Image src="/Contoh Halaman E-Book Anak Muslim/8.png" alt="Halaman Muslim 8" width={200} height={280} className="w-full h-auto" />
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a href="https://wa.me/6287712780990" 
               className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105">
              Lihat Semua Koleksi - Pesan Sekarang!
            </a>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              PERMASALAHAN
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Apakah Bunda Sedang Mengalami Hal Ini
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Masalah umum yang dihadapi orang tua dalam mendidik anak di era digital
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">😰</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Anak Kecanduan Gadget</h3>
              <p className="text-gray-600">Sulit mengalihkan perhatian anak dari gadget ke aktivitas edukatif</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Bahan Edukasi Mahal</h3>
              <p className="text-gray-600">Buku-buku edukasi dan alat belajar yang harganya semakin mahal</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Waktu Terbatas</h3>
              <p className="text-gray-600">Kesibukan orang tua membuat waktu untuk mendidik anak terbatas</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Konten Tidak Sesuai</h3>
              <p className="text-gray-600">Sulit menemukan konten edukatif yang sesuai dengan nilai keluarga</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Perkembangan Terhambat</h3>
              <p className="text-gray-600">Kreativitas dan motorik halus anak kurang berkembang optimal</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Boros Kertas</h3>
              <p className="text-gray-600">Terus membeli buku mewarnai dan aktivitas yang cepat habis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
                PERKENALKAN
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Lembar Edukasi Anak Indonesia Yang Edukatif Dan Menyenangkan
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Solusi modern untuk pendidikan anak yang menggabungkan teknologi dengan nilai-nilai edukatif tradisional
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Dapat digunakan di gadget dan dicetak tanpa batas</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Konten edukatif sesuai dengan nilai keluarga Indonesia</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Hemat, ramah lingkungan, dan praktis</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image src="/Aset Grafis/children-group-drawing-creative-learning-260nw-2465141201.png" 
                     alt="Children Learning" 
                     width={500} 
                     height={400}
                     className="rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Digital Coloring Book Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              MENGAPA
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Kenapa Buku Digital Mewarnai Ini Wajib Dimiliki?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Manfaat luar biasa yang akan didapat anak dari buku digital mewarnai kami
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Desain gambar tokoh favorit anak yang mudah diwarnai</h3>
              <p className="text-gray-600 text-center">Karakter-karakter menarik yang disukai anak-anak dengan desain yang mudah untuk diwarnai</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Meningkatkan kreativitas, fokus, dan motorik halus anak</h3>
              <p className="text-gray-600 text-center">Aktivitas yang membantu mengembangkan kemampuan motorik dan kreativitas anak</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">♻️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Bisa dicetak berkali-kali tanpa batas, jadi hemat dan ramah lingkungan</h3>
              <p className="text-gray-600 text-center">Sekali beli, bisa digunakan selamanya tanpa perlu membeli lagi</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🎉</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Aktivitas seru yang bisa dilakukan dimana saja, kapan saja!</h3>
              <p className="text-gray-600 text-center">Fleksibilitas untuk bermain dan belajar di mana pun dan kapan pun</p>
            </div>
          </div>
        </div>
      </section>

      {/* E-Book Advantages Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              KEUNGGULAN
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Keunggulan E-Book Lembar Edukasi Anak Indonesia
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Manfaat dan kemudahan yang akan didapat dari e-book edukasi kami
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Dapat digunakan langsung di gadget kamu (HP / Tablet / Laptop)</h3>
              <p className="text-gray-600 text-center">Akses mudah di semua perangkat digital yang dimiliki keluarga</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🖨️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Dapat juga di-print mandiri tidak terbatas</h3>
              <p className="text-gray-600 text-center">Cetak kapan saja sesuai kebutuhan tanpa batasan</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🎉</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Belajar menjadi lebih menyenangkan dimana saja</h3>
              <p className="text-gray-600 text-center">Pendidikan yang fleksibel dan menyenangkan untuk anak</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">💾</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Berupa file softcopy yang dapat diisi di gadget kalian langsung bebas tanpa kuota</h3>
              <p className="text-gray-600 text-center">Hemat kuota internet karena bisa digunakan offline</p>
            </div>
          </div>
        </div>
      </section>

      {/* Child Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              MANFAAT
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Manfaat E-Book Ini Menjadikan Anak
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Perkembangan karakter dan kepribadian positif yang akan terbentuk pada anak
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl">
              <div className="w-20 h-20 bg-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl">😊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Berkarakter Baik</h3>
              <p className="text-gray-600">Membangun fondasi karakter positif sejak dini</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
              <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">IQ dan Kecerdasan Meningkat</h3>
              <p className="text-gray-600">Stimulasi kognitif untuk perkembangan intelektual optimal</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl">
              <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl">🤲</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Taat Beribadah</h3>
              <p className="text-gray-600">Membangun kebiasaan spiritual yang baik</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="w-20 h-20 bg-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Berakhlak Mulia</h3>
              <p className="text-gray-600">Menanamkan nilai-nilai moral yang luhur</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl">
              <div className="w-20 h-20 bg-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Berbakti kepada Orang Tua</h3>
              <p className="text-gray-600">Menumbuhkan rasa hormat dan kasih sayang</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl">
              <div className="w-20 h-20 bg-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Menjauhi Perbuatan Buruk</h3>
              <p className="text-gray-600">Membangun kesadaran untuk menghindari hal negatif</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl lg:col-start-2">
              <div className="w-20 h-20 bg-yellow-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Melakukan Perbuatan Terpuji</h3>
              <p className="text-gray-600">Mendorong tindakan positif dan bermanfaat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Charity Participation Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              BERBAGI KEBAIKAN
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
              🤝 Ayo Berpartisipasi
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-2xl text-gray-700 leading-relaxed">
                &ldquo;Dengan membeli produk dari <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-bold text-3xl">Lembar Edukasi Anak Indonesia</span> ini, Kakak telah berpartisipasi dalam kegiatan Amal Zakat untuk anak-anak Yatim Piatu dan Panti Asuhan&rdquo;
              </p>
              <div className="mt-6 flex justify-center">
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">🤲</span>
                  <span className="text-4xl">❤️</span>
                  <span className="text-4xl">🏠</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              PEMESANAN
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              📞 Cara Pemesanan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Mudah dan cepat! Ikuti langkah-langkah sederhana berikut untuk mendapatkan e-book edukasi
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Hubungi Nomor WA di bawah</h3>
              <p className="text-gray-600">Klik tombol WhatsApp untuk memulai percakapan</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Beritahu kami E-Book mana yang ingin dipesan</h3>
              <p className="text-gray-600">Pilih produk yang diinginkan dari 3 pilihan yang tersedia</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Untuk pertanyaan lainnya dapat menghubungi nomor WA dibawah</h3>
              <p className="text-gray-600">Tim kami siap membantu menjawab semua pertanyaan Anda</p>
            </div>
          </div>
          
          <div className="text-center">
            <a href="https://wa.me/6287712780990" target="_blank" rel="noopener noreferrer" 
               className="inline-flex items-center space-x-4 bg-green-500 text-white px-12 py-6 rounded-full text-2xl font-bold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-xl">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108"/>
              </svg>
              <span>0877 1278 0990</span>
            </a>
            
            <div className="mt-8 text-gray-600 space-y-2">
              <p className="flex items-center justify-center space-x-2">
                <span>📧</span>
                <span>paragonkreatif@gmail.com</span>
              </p>
              <p className="flex items-center justify-center space-x-2">
                <span>📍</span>
                <span>Jalan Sholeh Iskandar - Kota Bogor</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
