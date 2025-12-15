// ========= // ==================== DATA 170 TITIK WISATA LOMBOK DENGAN FOTO ASLI ====================
let lombokDestinations = [
    // Lombok Tengah (1-51) 
    { id: 1, name: "Pantai Kuta Mandalika", lat: -8.893797615746463, lng: 116.28338487671442, category: "beach", region: "lombok-tengah", price: "Rp10.000", hours: "06.00 – 18.00 WITA", image: "https://i.ibb.co.com/hFWzWx4W/pantaikutalombok.png" },
    { id: 2, name: "Pantai Tanjung Aan", lat: -8.908469108927415, lng: 116.32892113068577, category: "beach", region: "lombok-tengah", price: "Rp10.000", hours: "06.00 – 18.00 WITA", image: "https://i.ibb.co.com/210fh0C2/tanjungaanlombok.png" },
    { id: 3, name: "Bukit Merese", lat: -8.913606622568365, lng: 116.31898484232856, category: "mountain", region: "lombok-tengah", price: "Rp5.000 – Rp10.000", hours: "06.00 – 18.00 WITA", image: "https://i.ibb.co.com/DPT3Ws3c/bukitmerese.png" },
    { id: 4, name: "Pantai Selong Belanak", lat: -8.871911301721342, lng: 116.16243839999998, category: "beach", region: "lombok-tengah", price: "Rp10.000", hours: "06.00 – 18.30 WITA", image: "https://i.ibb.co.com/tpJqsGH0/pantaiselongbelanak.png" },
    { id: 5, name: "Pantai Mawi", lat: -8.882123531859891, lng: 116.1599634, category: "beach", region: "lombok-tengah", price: "Rp10.000", hours: "06.00 – 18.00 WITA", image: "https://i.ibb.co.com/W416r46c/pantaimawi.png" },
    { id: 6, name: "Air Terjun Benang Stokel and Benang Kelambu", lat: -8.5327378329568, lng: 116.3413934288357, category: "waterfall", region: "lombok-tengah", price: "Rp10.000 – Rp20.000", hours: "08.00 – 17.00 WITA", image: "https://i.ibb.co.com/qLKd3cRm/Air-Terjun-Benang-Stokel-and-Benang-Kelambu-Waterfall.png" },
    { id: 7, name: "Pantai Mawun", lat: -8.897234769866934, lng: 116.22922670318695, category: "beach", region: "lombok-tengah", price: "Rp5.000", hours: "06.00 – 18.00 WITA", image: "https://i.ibb.co.com/Z5C4D3g/Pantai-Mawun.png" },
    { id: 8, name: "Bukit Seger", lat: -8.907677609904608, lng: 116.29955127116426, category: "mountain", region: "lombok-tengah", price: "Rp10.000", hours: "06.00 – 18.00 WITA", image: "https://i.ibb.co.com/DgYQ5QHH/Bukit-Seger.png" },
    { id: 9, name: "Pantai Bloam Gerupuk", lat: -8.926668721791604, lng: 116.34951638650718, category: "beach", region: "lombok-tengah", price: "Rp10.000", hours: "06.00 – 18.00 WITA", image: "https://i.ibb.co.com/xSWFNhks/Pantai-Bloam-Gerupuk.png" },
    { id: 10, name: "Air Terjun Babak Pelangi", lat: -8.545673720205889, lng: 116.33188047116427, category: "waterfall", region: "lombok-tengah", price: "Rp10.000", hours: "08.00 – 17.00 WITA", image: "https://i.ibb.co.com/Lz5c8hSc/Air-Terjun-Babak-Pelangi.png" },
    { id: 11, name: "Air Terjun Tenjong", lat: -8.687557653706621, lng: 116.31123861534289, category: "waterfall", region: "lombok-tengah", price: "Rp10.000", hours: "08.00 – 17.00 WITA", image: "https://i.ibb.co.com/rG8FWt4D/Pariwisata-Air-Terjun-Tenjong.png" },
    { id: 12, name: "Air Terjun Benang Stokel and Benang Kelambu Waterfall", lat: -8.532759053118225, lng: 116.3413827, category: "waterfall", region: "lombok-tengah", price: "Rp10.000 – Rp20.000", hours: "08.00 – 17.00 WITA", image: "https://i.ibb.co.com/q3zDmFdL/Air-Terjun-Benang-Stokel-and-Benang-Kelambu-Waterfall.png" },
    { id: 13, name: "Taman Hutan Raya Nuraksa", lat: -8.493952019691854, lng: 116.31208625223509, category: "nature", region: "lombok-tengah", price: "Rp5.000", hours: "08.00 – 17.00 WITA", image: "https://i.ibb.co.com/G4986K1r/Taman-Hutan-Raya-Nuraksa.png" },
    { id: 14, name: "Lembah Gaharu", lat: -8.554500413761435, lng: 116.30338172087573, category: "nature", region: "lombok-tengah", price: "Rp10.000", hours: "07.00 – 17.00 WITA", image: "https://i.ibb.co.com/bRmvnQpX/Lembah-gaharu.png" },
    { id: 15, name: "Danau Biru", lat: -8.528709380920608, lng: 116.3113554153429, category: "nature", region: "lombok-tengah", price: "Rp5.000", hours: "07.00 – 17.30 WITA", image: "https://i.ibb.co.com/PJDDqBQ/Danau-Biru.png" },
    { id: 16, name: "Air Terjun Elong Tune", lat: -8.551292042891138, lng: 116.32772116718188, category: "waterfall", region: "lombok-tengah", price: "Rp10.000", hours: "08.00 – 17.00 WITA", image: "https://i.ibb.co.com/G4NVMJrX/Air-Terjun-Elong-Tune.png" },
    { id: 17, name: "Air Terjun Babak Pelangi", lat: -8.545763894311984, lng: 116.33184827882455, category: "waterfall", region: "lombok-tengah", price: "Rp10.000", hours: "08.00 – 17.00 WITA", image: "https://i.ibb.co.com/LdNBV8q0/Air-Terjun-Babak-Pelangi.png" },
    { id: 18, name: "Bukit Tunak", lat: -8.911205325040449, lng: 116.38090322255856, category: "mountain", region: "lombok-tengah", price: "Rp10.000", hours: "06.00 – 18.00 WITA", image: "https://i.ibb.co.com/xtFbrGDs/Bukit-Tunak.png" },
    { id: 19, name: "Taman Wisata Alam Gunung Tunak", lat: -8.910991176420412, lng: 116.38097379720877, category: "nature", region: "lombok-tengah", price: "Rp10.000", hours: "07.00 – 17.00 WITA", image: "https://i.ibb.co.com/99GxyCKh/Taman-Wisata-Alam-Gunung-Tunak.png" },
    { id: 20, name: "Desa Wisata Hijau Bilebante", lat: -8.619563632566972, lng: 116.18647984224447, category: "culture", region: "lombok-tengah", price: "Rp5.000 – Rp15.000", hours: "07.00 – 18.00 WITA", image: "https://i.ibb.co.com/Q3BvHdgc/Desa-Wisata-Hijau-Bilebante.png" },
    { id: 21, name: "Industri Tenun Patuh", lat: -8.693190467630352, lng: 116.22530317611749, category: "culture", region: "lombok-tengah", price: "Gratis", hours: "08.00 – 17.00 WITA", image: "https://i.ibb.co.com/TxcxdDVj/Industri-Tenun-Patuh.png" },
    { id: 22, name: "Desa Wisata Karang Sidemen", lat: -8.562957401410037, lng: 116.30961544232856, category: "culture", region: "lombok-tengah", price: "Rp10.000", hours: "07.00 – 18.00 WITA", image: "https://i.ibb.co.com/m5HHFhhS/Desa-Wisata-Karang-Sidemen.png" },
    { id: 23, name: "Traditional Kampung Ende", lat: -8.82113756813316, lng: 116.29381161534288, category: "culture", region: "lombok-tengah", price: "Rp10.000", hours: "07.00 – 18.00 WITA", image: "https://i.ibb.co.com/4xcpXTq/Traditional-Kampung-Ende.png" },
    { id: 24, name: "Pasar Bambu Bonjeruk", lat: -8.648123440678297, lng: 116.21230039786955, category: "culinary", region: "lombok-tengah", price: "Rp10.000 – Rp30.000", hours: "06.00 – 17.00 WITA", image: "https://i.ibb.co.com/3yRY896d/PASAR-BAMBU-Bonjeruk.png" },
    { id: 25, name: "Lesehan Taliwang Cakra", lat: -8.702490991042371, lng: 116.26661021164281, category: "culinary", region: "lombok-tengah", price: "Rp25.000 – Rp60.000", hours: "10.00 – 22.00 WITA", image: "https://i.ibb.co.com/0jgWXhXb/Lesehan-Taliwang-Cakra.png" },
    { id: 26, name: "Nasi Balap Puyung Inaq Esun", lat: -8.684634515591002, lng: 116.24284567301433, category: "culinary", region: "lombok-tengah", price: "Rp20.000 – Rp40.000", hours: "07.00 – 21.00 WITA", image: "https://i.ibb.co.com/prBDd9Rt/Nasi-Balap-Puyung-Inaq-Esun.png" },
    { id: 27, name: "Pawon Sasak Tastura", lat: -8.704105576183055, lng: 116.27301040000002, category: "culinary", region: "lombok-tengah", price: "Rp25.000 – Rp55.000", hours: "10.00 – 22.00 WITA", image: "https://i.ibb.co.com/S4SQvPMM/Pawon-Sasak-Tastura.png" },
    { id: 28, name: "Rumah Makan Keker Sukarara", lat: -8.70407447616235, lng: 116.20726299999995, category: "culinary", region: "lombok-tengah", price: "Rp20.000 – Rp45.000", hours: "09.00 – 21.00 WITA", image: "https://i.ibb.co.com/93ZT1yZQ/Rumah-Makan-Keker-Sukarara.png" },
    { id: 29, name: "Ayam Merangkat Bonjeruk", lat: -8.648349580218078, lng: 116.2120143441786, category: "culinary", region: "lombok-tengah", price: "Rp20.000 – Rp40.000", hours: "09.00 – 21.00 WITA", image: "https://i.ibb.co.com/0VXT3Wts/Ayam-Merangkat-Bonjeruk.png" },
    { id: 30, name: "Lesehan Dusun Semilir", lat: -8.64528609559051, lng: 116.2297135558214, category: "culinary", region: "lombok-tengah", price: "Rp20.000 – Rp50.000", hours: "10.00 – 22.00 WITA", image: "https://i.ibb.co.com/SwQ0q9jM/Lesehan-Dusun-Semilir.png" },
    { id: 31, name: "Lesehan Asri", lat: -8.707179441990714, lng: 116.28063647116429, category: "culinary", region: "lombok-tengah", price: "Rp25.000 – Rp50.000", hours: "09.00 – 22.00 WITA", image: "https://i.ibb.co.com/0ywQpVws/Lesehan-Asri.png" },
    { id: 32, name: "Pawon 21 Bonjeruk", lat: -8.642559770361158, lng: 116.22520725582137, category: "culinary", region: "lombok-tengah", price: "Rp20.000 – Rp45.000", hours: "09.00 – 21.00 WITA", image: "https://i.ibb.co.com/gb82hrTb/Pawon-21-Bonjeruk.png" },
    { id: 33, name: "Dapur Sasak Restaurant", lat: -8.793196252185357, lng: 116.28650495952147, category: "culinary", region: "lombok-tengah", price: "Rp25.000 – Rp60.000", hours: "10.00 – 22.00 WITA", image: "https://i.ibb.co.com/DHYS5sNn/Dapur-Sasak-Restaurant.png" },
    { id: 34, name: "Nasi Balap Puyung RM Cahaya", lat: -8.75685022271295, lng: 116.25463534417862, category: "culinary", region: "lombok-tengah", price: "Rp20.000 – Rp35.000", hours: "07.00 – 21.00 WITA", image: "https://i.ibb.co.com/vCf88h0G/Nasi-Balap-Puyung-RM-Cahaya.png" },
    { id: 35, name: "Gulas Garden", lat: -8.889391501125413, lng: 116.28192375767145, category: "culinary", region: "lombok-tengah", price: "Rp40.000 – Rp100.000", hours: "10.00 – 22.00 WITA", image: "https://i.ibb.co.com/hJ5QXK6N/Gulas-Garden.png" },
    { id: 36, name: "El Bazar Cafe & Restaurant", lat: -8.89038140211371, lng: 116.27689611534288, category: "culinary", region: "lombok-tengah", price: "Rp45.000 – Rp120.000", hours: "10.00 – 22.00 WITA", image: "https://i.ibb.co.com/vy6YDZ8/El-Bazar-Cafe-Restaurant.png" },
    { id: 37, name: "Kenza Cafe & Restaurant Kuta Lombok", lat: -8.89093020209263, lng: 116.27702508650712, category: "culinary", region: "lombok-tengah", price: "Rp40.000 – Rp100.000", hours: "08.00 – 22.00 WITA", image: "https://i.ibb.co.com/35CS9ggV/Kenza-Cafe-Restaurant-Kuta-Lombok.png" },
    { id: 38, name: "Ashtari Lombok", lat: -8.882465997129817, lng: 116.2646255, category: "culinary", region: "lombok-tengah", price: "Rp50.000 – Rp150.000", hours: "08.00 – 22.00 WITA", image: "https://i.ibb.co.com/Z1xzLVsQ/Ashtari-Lombok.png" },
    { id: 39, name: "Keker Taliwang & Grilled Seafood", lat: -8.871751688422663, lng: 116.27974058835721, category: "culinary", region: "lombok-tengah", price: "Rp30.000 – Rp80.000", hours: "10.00 – 22.00 WITA", image: "https://i.ibb.co.com/1Y3KFVdj/Keker-Taliwang-Grilled-Seafood.png" },
    { id: 40, name: "TANAH Restaurant", lat: -8.88793579990908, lng: 116.2726746153429, category: "culinary", region: "lombok-tengah", price: "Rp60.000 – Rp150.000", hours: "10.00 – 22.00 WITA", image: "https://i.ibb.co.com/wZh1j3xR/TANAH-Restaurant.png" },
    { id: 41, name: "L'Olivier Restaurant", lat: -8.886813999259852, lng: 116.27584768650716, category: "culinary", region: "lombok-tengah", price: "Rp50.000 – Rp130.000", hours: "10.00 – 22.00 WITA", image: "https://i.ibb.co.com/LdcmLqRp/L-Olivier-Restaurant.pngg" },
    { id: 42, name: "Waroeng Sulawesi", lat: -8.875847491671921, lng: 116.2765393441786, category: "culinary", region: "lombok-tengah", price: "Rp25.000 – Rp50.000", hours: "09.00 – 21.00 WITA", image: "https://i.ibb.co.com/YTWjqgsm/Waroeng-Sulawesi.png" },
    { id: 43, name: "Mie Rampok Lombok Praya", lat: -8.702907717788763, lng: 116.2645414, category: "culinary", region: "lombok-tengah", price: "Rp25.000 – Rp45.000", hours: "10.00 – 21.00 WITA", image: "https://i.ibb.co.com/chfYZZVM/Mie-Rampok-Lombok-Praya.png" },         
    { id: 44, name: "Puri Boga", lat: -8.696188159934454, lng: 116.27051888835719, category: "culinary", region: "lombok-tengah", price: "Rp30.000 – Rp60.000", hours: "10.00 – 21.00 WITA", image: "https://i.ibb.co.com/4gnhj2TP/Puri-Boga.png" },
    { id: 45, name: "Nurina bebek", lat: -8.698662872559677, lng: 116.26393028465712, category: "culinary", region: "lombok-tengah", price: "Rp25.000 – Rp55.000", hours: "09.00 – 21.00 WITA", image: "https://i.ibb.co.com/0Vjm9ZhT/Nurina-bebek.png" },
    { id: 46, name: "Bale Beleq Pejanggik", lat: -8.748497625916904, lng: 116.32823816595042, category: "culture", region: "lombok-tengah", price: "Rp5.000", hours: "07.00 – 17.00 WITA", image: "https://i.ibb.co.com/x4Cgcn1/Bale-Beleq-Pejanggik.png" },
    { id: 47, name: "Sade Village", lat: -8.839133276668301, lng: 116.29199782883573, category: "culture", region: "lombok-tengah", price: "Rp10.000", hours: "07.00 – 18.00 WITA", image: "https://i.ibb.co.com/wrS9WZwd/Sade-Village.png" },
    { id: 48, name: "Masjid Kuno Rembitan", lat: -8.829264256739693, lng: 116.29443494417862, category: "culture", region: "lombok-tengah", price: "Gratis", hours: "06.00 – 18.00 WITA", image: "https://i.ibb.co.com/hJt7B4n9/Masjid-Kuno-Rembitan.png" },
    { id: 49, name: "Makam Wali Nyato", lat: -8.835734473545813, lng: 116.31102033068576, category: "culture", region: "lombok-tengah", price: "Gratis", hours: "06.00 – 18.00 WITA", image: "https://i.ibb.co.com/R8GxLcN/Makam-Wali-Nyato.png" },
    { id: 50, name: "Masjid Kuno Gunung Pujut", lat: -8.809664164958686, lng: 116.29935508465712, category: "culture", region: "lombok-tengah", price: "Gratis", hours: "06.00 – 18.00 WITA", image: "https://i.ibb.co.com/B26dxbB4/Masjid-Kuno-Gunung-Pujut.png" },
    { id: 51, name: "Makam Datoq Lopan", lat: -8.664349911437693, lng: 116.3236703153429, category: "culture", region: "lombok-tengah", price: "Gratis", hours: "06.00 – 18.00 WITA", image: "https://i.ibb.co.com/MmDSfyN/Makam-Datoq-Lopan.png" },

    // Lombok Barat (52-90)
    {id: 52, name: "Wisata Kuliner Kebon Ayu", lat: -8.692697146239661, lng: 116.1046887153429, category: "culinary", region: "lombok-barat", price: "Rp5.000 – Rp15.000", hours: "07.00 – 18.00 WITA", image: "https://i.ibb.co.com/b5gkSXrS/Screenshot-2025-11-30-222951.png" },
    { id: 53, name: "Warung Makan Aduh Enak'e", lat: -8.70706809888388, lng: 116.08208532698565, category: "culinary", region: "lombok-barat", price: "Rp10.000 – Rp25.000", hours: "24 jam WITA", image: "https://i.ibb.co.com/wh1tT5r8/Warung-Makan-Aduh-Enak-e.png" }, 
    { id: 54, name: "Dapur Ina Senggigi", lat: -8.49450214940243, lng: 116.05189515767144, category: "culinary", region: "lombok-barat", price: "Rp15.000 – Rp40.000", hours: "10.00 – 22.00 WITA", image: "https://i.ibb.co.com/k2F846rV/Dapur-Ina-Senggigi.png" },
    { id: 55, name: "Lesehan Ayang Asri & Coffee Shop", lat: -8.567352967604123, lng: 116.16036865767144, category: "culinary", region: "lombok-barat", price: "Rp10.000 – Rp35.000", hours: "09.00 – 23.00 WITA", image: "https://i.ibb.co.com/hRbT00jG/Lesehan-Ayang-Asri-Coffee-Shop.png" },            
    { id: 56, name: "Lesehan Taufik 2", lat: -8.555862021717363, lng: 116.23038107116427, category: "culinary", region: "lombok-barat", price: "Rp10.000 – Rp30.000", hours: "09.00 – 22.00 WITA", image: "https://i.ibb.co.com/xqV7D9ss/Lesehan-Taufik-2.png" },
    { id: 57, name: "Sate Bulayak Suranadi", lat: -8.569993614667101, lng: 116.2318851, category: "culinary", region: "lombok-barat", price: "Rp10.000 – Rp20.000", hours: "08.00 – 18.00 WITA", image: "https://i.ibb.co.com/MySBg5j6/Sate-Bulayak-Suranadi.png" },
    { id: 58, name: "Sukma Rasa Outlet 3 Bebek Merseng", lat: -8.625573654045244, lng: 116.1261464153429, category: "culinary", region: "lombok-barat", price: "Rp12.000 – Rp35.000", hours: "09.00 – 21.00 WITA", image: "https://i.ibb.co.com/HLBQWYH4/Sukma-Rasa-Outlet-3-Bebek-Merseng.png" },
    { id: 59, name: "Taman Langit Lombok", lat: -8.514831640927566, lng: 116.09171074232856, category: "nature", region: "lombok-barat", price: "Rp10.000 – Rp20.000", hours: "07.00 – 18.00 WITA", image: "https://i.ibb.co.com/xSV0Ktvg/Taman-Langit-Lombok.png" },
    { id: 60, name: "Taman Hutan Raya Nuraksa", lat: -8.520112234091549, lng: 116.28307948465711, category: "nature", region: "lombok-barat", price: "Rp5.000 – Rp10.000", hours: "08.00 – 17.00 WITA", image: "https://i.ibb.co.com/FqK1cPGz/Taman-Hutan-Raya-Nuraksa.png" },
    { id: 61, name: "Wisata gunung Aur", lat: -8.573589007787138, lng: 116.26399878650716, category: "mountain", region: "lombok-barat", price: "Rp5.000 – Rp10.000", hours: "24 Jam", image: "https://i.ibb.co.com/BK3BZDFc/AF1-Qip-NCf9-P32-Y6hv-DHCuezei-Si-ROi-Grd2ja6q-M3ui-EQ-s900-k.jpg" },
    { id: 62, name: "Wisata Alam Desa Sesaot", lat: -8.53974832824239, lng: 116.24414784232854, category: "nature", region: "lombok-barat", price: "Rp5.000 – Rp15.000", hours: "08.00 – 17.00 WITA", image: "https://i.ibb.co.com/1YDNtTcs/AF1-Qip-OU-e4-DX9-Jlf-Wl5-PT1ldobv-Flp-Xp-CH9p-N9-Da-Vx-s900-k.jpg" },
    { id: 63, name: "Air Terjun Timponan", lat: -8.503642155093837, lng: 116.21263724232853, category: "waterfall", region: "lombok-barat", price: "Rp5.000 – Rp10.000", hours: "08.00 – 17.00 WITA", image: "https://i.ibb.co.com/ch1dykzL/AMBA38sv2-Giqahy1hqg-Mb-IK9cn-T-Tr1-CZ9-Tl-We-RW7-OB-n5-Kxp-LLo-L6-R-n-EFj1c-Xgny-GJhobh-Th-QFuq-Rzy.jpg" },
    { id: 64, name: "Wisata Berugak Elen Sesaot", lat: -8.542289149800954, lng: 116.24296084232854, category: "nature", region: "lombok-barat", price: "Rp5.000 – Rp10.000", hours: "08.00 – 17.00 WITA", image: "https://i.ibb.co.com/fdFKT5GS/AF1-Qip-NBTHW7sly2-Dvd-Gvs-MD6-FJ2b-Dll-IJr-rpru-O3-O6-s900-k.jpg" },
    { id: 65, name: "Bunut Ngengkang Attraction", lat: -8.53328349312879, lng: 116.24499095767142, category: "nature", region: "lombok-barat", price: "Rp5.000 – Rp10.000", hours: "08.00 – 17.00 WITA", image: "https://i.ibb.co.com/n802r8w7/AMBA38u-Yrp-JNPe-LWl-Pjqv-YZb-L5-ROIGdx3w-HMYG-ql-Ai-Uicpk-M9-Vg-CMCKFd-Sm-Eun1y-Ni-QNJq87g2-M3o661g.jpg" },
    { id: 66, name: "Tibu Atas Waterfall", lat: -8.540201958186888, lng: 116.2296197, category: "waterfall", region: "lombok-barat", price: "Rp5.000 – Rp10.000", hours: "08.00 – 17.00 WITA", image: "https://i.ibb.co.com/x83gnNvx/AG0il-Sye-KK9-Tnb-mrb-a-T2se7g920-PE753t2-A8-Wq3-Ibd-GBUXGt-Ty-Vqz-Yawh-PVy-Z1-Mnbq-ZABAXy-E1-ZF3d3.jpg" },
    { id: 67, name: "Pantai Goa Landak", lat: -8.71965422997723, lng: 116.03427927116427, category: "beach", region: "lombok-barat", price: "Rp5.000 – Rp10.000", hours: "24 Jam", image: "https://i.ibb.co.com/J93xBkq/AG0il-Sy-Jc-Pj-Ri-GRlpfx-RS3uxma-YWb-G-i-Vfm-YIDBWUI63u0twu3-Xr-Fb87-Bjxk-Grzj-Lshf6s-Fbnx5v5-QOk-RU.jpg" },
    { id: 68, name: "Bangko Bangko", lat: -8.726097990846995, lng: 115.85769381534288, category: "beach", region: "lombok-barat", price: "Rp10.000 – Rp20.000", hours: "24 Jam", image: "https://i.ibb.co.com/fG1Vb4RW/AMBA38s-IZp-D2jng5-HN9mvnaz5-JPel-ROd684s-AQF96-Mrem1-JEf-E-B110-Kx8d-PAm-BYKSYy-XVf-KSAt-C0f6-Gk-IERV-r-F.jpg" },
    { id: 69, name: "Bukit Tembere", lat: -8.523102439632634, lng: 116.10784231349281, category: "mountain", region: "lombok-barat", price: "Rp5.000 – Rp10.000", hours: "24 Jam", image: "https://i.ibb.co.com/hRDVSFnX/AG0il-Sy-NUSi-Ww0-EVNYFbk-Mi29-Dmx3od-OWKge-S9x-Kc-Yw0l-Hsg-QJK7hpla514e-Xi-WQ96-RB25p7-ZQAngg-X6ffh58-K.jpg"},
    { id: 70, name: "Nambung Beach", lat: -8.86888698474294, lng: 116.10388144417863, category: "beach", region: "lombok-barat", price: "Rp5.000 – Rp15.000", hours: "24 Jam", image: "https://i.ibb.co.com/cm3887t/AMBA38u-Fpu-Fd-Xzcc-GJMl2k-Fc-X-9-Gw-Ou7-Us-Jj-Od-So-Si9m-NLCXC8fg7-GVD3-Rl-D5tj5ao-D7-Z5igz-Sk-q-U4-KZJn0.jpg" },
    { id: 71, name: "Buwun Mas Hills", lat: -8.842429362455448, lng: 116.0366394730143, category: "mountain", region: "lombok-barat", price: "Rp10.000 – Rp20.000", hours: "07.00 – 18.00 WITA", image: "https://i.ibb.co.com/Z6Mr788T/AG0il-Sy-II2-Eley-WLw-ZETNnf-Y2rk-VMhr28-Zh-GJfm-NGO9-K06a-Ew-A8-VEVTVKIPW4-Ro3ca-UZOI-FZy-Vo-YW9epgwsuz.jpg" },
    { id: 72, name: "Pantai Elak Elak", lat: -8.730293425310316, lng: 115.96626768650717, category: "beach", region: "lombok-barat", price: "Rp5.000 – Rp10.000", hours: "24 Jam", iamge: "https://i.ibb.co.com/NnZ0SXpV/AMBA38vs-Z7nzv-Y2-Yzn-Fbhp-2h37k-Fd-EJ868px-OWahb13-F-KO2-Ze-TEnl-Yhcbk9-QIEsr1-GRa-Yf-Vvh68-XAS3-w-ivm3j.jpg" },
    { id: 73, name: "Suranadi Nature Recreation Park", lat: -8.569315332782406, lng: 116.2323478, category: "nature", region: "lombok-barat", price: "Rp10.000 – Rp20.000", hours: "08.00 – 18.00 WITA", image: "https://i.ibb.co.com/Wv9KQJQg/AMBA38u0-Ctrm-H09xthw-FVv4-N1g-Nmj-Huu9run1gzx-JQvl-h-Dc-Rh-HIBk-GZ63-AVNr-L-kx-ZSJg-Fr-KO4-Tc-jw3kej8h3.jpg" },
    { id: 74, name: "Wisata Alam Goa Lawah Lebah Sempage", lat: -8.53954340716502, lng: 116.2767691883572, category: "nature", region: "lombok-barat", price: "Rp5.000 – Rp10.000", hours: "08.00 – 17.00 WITA", image: "https://i.ibb.co.com/NdxLKYq4/AG0il-Sz1-Lu-S1h60t2-Ko-QX6jvnz-ELQx0rq-CPLmx-Ilg-K-8-Ur-Q0u-B-mh-OGHh-Kh9op-BLDaerndg-MJEbuxb-B9b0hu-J.jpg" },
    { id: 75, name: "Bukit Korea Dopang", lat: -8.523063898238123, lng: 116.12813931349281, category: "mountain", region: "lombok-barat", price: "Rp5.000 – Rp10.000", hours: "24 Jam", image: "https://i.ibb.co.com/dsJHwD6M/AG0il-Syz-Fn-JRTO0cfe-Aea-Aq-Cc-Egzobn3-KMGD4-Oz-KQCTe-Shl-fe-VA-nevxk-Lw-Bv-BCy8o50a5tq-Fz-OPBMUSh7e6.jpg" },
    { id: 76, name: "Pantai Cemare Lembar", lat: -8.720535106333775, lng: 116.0582094, category: "beach", region: "lombok-barat", price: "Rp5.000 – Rp10.000", hours: "24 Jam", image: "https://i.ibb.co.com/5W16B6R8/AMBA38t9f5-Fuln-NGPDS5-PTa-OEi-BSje5f-Ww-cg-Nhv927i-ICa-Snr-RMcr-Ixw-Li7zr-Mkbzx90-RHEdir-Gi-KQo0-QQf0-PM.jpg" },
    { id: 77, name: "Pantai Kuranji", lat: -8.633561929394292, lng: 116.07231882698565, category: "beach", region: "lombok-barat", price: "Rp5.000 – Rp10.000", hours: "24 Jam", image: "https://i.ibb.co.com/dwchS2GX/AG0il-Sz-Nx-CT-Rvl-OMFJ9-Kb-BFs-Bt-V667c-P0stq7w4s-N2-WM7-iert-B4vz-Yse-Ohhp2w-m-V4iaqdr-LQ6-MQAh-Os6-Vn.jpg" },
    { id: 78, name: "Air Terjun Segenter Pengkoaq", lat: -8.499392463446032, lng: 116.29326047116427, category: "waterfall", region: "lombok-barat", price: "Rp5.000 – Rp10.000", hours: "08.00 – 17.00 WITA", image: "https://i.ibb.co.com/5WvMcM9K/AG0il-Sy-Jv-Le3-JJQA0y-Dp-Gl-XLkjr-Ob-CTD0-LTP-RAOU-0dy-ZWw2-X5-QQq-SW0-J2-IS5s-KUm9-Wk-D8m-SFe-Xm-Nt-Lt2-L0.jpgg" },
    { id: 79, name: "Gili Nanggu", lat: -8.716695950204683, lng: 116.00820455397135, category: "beach", region: "lombok-barat", price: "Rp30.000 – Rp50.000", hours: "06.00 – 18.00 WITA", image: "https://i.ibb.co.com/7dTc6RM7/AG0il-Sxvxr-PAr-Onsnj-MTymbd-NPl55-H9-YB3c-NN34-Fm2-ELknntw-P1-a-M2-Mu-IFy-ILg-QWF2-UP-c-DORcm8-Jg-Ml2-XMM2-M.jpg" },
    { id: 80, name: "Gili Bedis", lat: -8.730133201433022, lng: 116.02559851534289, category: "beach", region: "lombok-barat", price: "Rp10.000 – Rp20.000", hours: "06.00 – 18.00 WITA", image: "https://i.ibb.co.com/ZzjJtyHd/AG0il-Syv-Yns9n-ZH-x-Zn-I5y4-R5-Dp9ui-t-Ro-Ls-Fbu3-6-XIqu-Qku-A1e5qmk-TRo-Htsk-PLd16qu-j-Sawhm-Vz-A-P2-T.jpg" },
    { id: 81, name: "Desert Point", lat: -8.727193233081797, lng: 115.84025317116428, category: "beach", region: "lombok-barat", price: "Rp5.000 – Rp10.000", hours: "24 Jam", image: "https://i.ibb.co.com/Xkk5R8zm/AMBA38us-Rdy-Ma-Sa-BW2q-ZUS0a-Wgm-M-n79uklemc-Oq-Fs-Ua-8-V21w-Ca-RZx-Jnmxq-Hfk6-OPt-Om-Uah-RHr1-AW1-Qy1-A.jpg" },
    { id: 82, name: "Senggigi Beach", lat: -8.497833233191564, lng: 116.04538583068577, category: "beach", region: "lombok-barat", price: "Rp10.000 – Rp20.000", hours: "24 Jam", image: "https://i.ibb.co.com/csZ34xc/AMBA38u-XHu-Oc-Ja-Msn-Kn-X6-M7z-Brv-Fu-Zl-Yyl-So-En-BJO9-Rgx-PRfc-Y49-Jf-Sg-Nf-HWQRUhxk-Xfr-Hh-Ujnax-O.jpg" },
    { id: 83, name: "Pantai Karang Bangket", lat: -8.64893919658469, lng: 116.0697436, category: "beach", region: "lombok-barat", price: "Rp5.000 – Rp10.000", hours: "24 Jam", image: "https://i.ibb.co.com/BKY6H7Qg/AMBA38v-Bb-XDIjyp-Wqegc-B3-Gs-K2h-FQKCmlxug7-G35b-Sft-CLo-YFH9v6n4-P24qyb-Z-AQs-GUgyn-7-JGAxiaq-ODDWGZt9.jpg" },
    { id: 84, name: "Pantai Loang Baloq", lat: -8.602575101208586, lng: 116.07367736931423, category: "beach", region: "lombok-barat", price: "Rp5.000 – Rp10.000", hours: "24 Jam", image: "https://i.ibb.co.com/4RkPhfSd/AG0il-Sz-Ardxk36xvs-BPOq-YEVA1zt-F1e6-FM8-Cz-ZXlp-We-Qsu-ILEYE-r7-Fj2-GOkfjo8x5f-C7-Rrt-LZ6l-LB3o-I1w-FRW.jpg" },
    { id: 85, name: "Taman Narmada", lat: -8.595953737851895, lng: 116.20420524232856, category: "culture", region: "lombok-barat", price: "Rp10.000 – Rp20.000", hours: "08.00 – 17.00 WITA", image: "https://i.ibb.co.com/1J81py8k/AG0il-Sz-L1-Fq8-No-BIAFei3mim-Oz4-Xz-IKu-NV7ew3985-Xw3-ISt-Sxe743-QA7-Qy-N5-KVBL4l8-TO-kj2-GRTy-Sea6-Dy-FIeo-Ay.jpg" },
    { id: 86, name: "Pura Batu Bolong", lat: -8.509036469187816, lng: 116.05702620000001, category: "culture", region: "lombok-barat", price: "Rp10.000 – Rp20.000", hours: "07.00 – 19.00 WITA", image: "https://i.ibb.co.com/zhKZjnH3/AMBA38s-me-b-o-Veq-E0x-B9wkm-Mp-Y-ydao-VEI54-LTv21-Pw-NY4zrs4sz-F4-w9-KFr7-V-5-FCo9a-Y77m-Zggkbr-Aw-Uqrad.jpg" },
    { id: 87, name: "Makam Batu Layar", lat: -8.511455564341714, lng: 116.06004601360661, category: "culture", region: "lombok-barat", price: "Gratis – Rp5.000", hours: "07.00 – 19.00 WITA", image: "https://i.ibb.co.com/v46rgyZ5/AMBA38s-N-9-Wade-CAn-S0ekz0-Ptn-CJDjg-GBsgm6-QLSYTKQH-s-Qj-Csf0o-QSFFKB0h-C-mqv-l-LBv8u-Ylvdeg9x-Vt-Dh.jpg"},
    { id: 88, name: "Pura Lingsar", lat: -8.575917936730923, lng: 116.18104004238744, category: "culture", region: "lombok-barat", price: "Rp10.000 – Rp20.000", hours: "08.00 – 18.00 WITAa", image: "https://i.ibb.co.com/jkz4V6jb/AG0il-Sz-Tvwj-F6-ZKsgi-Ps-CKCXO87q6ks-P-RKoj-Yg-Yxo-Of-W0-DJ9-Bda-F-7n-3-P2j4nb-MVm-ODy9c-Lvg-WXFp-Bt-h.jpg" },
    { id: 89, name: "Desa Wisata Sesaot", lat: -8.540061311246552, lng: 116.2441692941674, category: "culture", region: "lombok-barat", price: "Rp5.000 – Rp15.000", hours: "08.00 – 17.00 WITA", image: "https://i.ibb.co.com/rGSy3KVX/AG0il-Sy-Q8fo-A3s3-R3xb-Htsx2a-Rt-O8fe0c1p8-ZWzf2da4u-TF08k-OZrc-SOSa-B8v-C-b-Wv-Yp1wy-XJ4c4f-COw-Mu-V.jpg" },
    { id: 90, name: "Rumah Adat Karang Bayan", lat: -8.55751289147416, lng: 116.18797775183907, category: "culture", region: "lombok-barat", price: "Rp5.000 – Rp15.000", hours: "08.00 – 17.00 WITA", image: "https://i.ibb.co.com/LDxMtSBK/AG0il-Sz-Po-Nh-D-nk-Vpf-IA5-C9s-KO-Mn-FAlu8qz-NGu-DJw-ROTb6m-Sitknnlkj4tl-A1-Qc-GGAY8k712-Ro-Y7y-IRlz-V.jpg" },

    // Lombok Timur (91-116)
    { id: 91, name: "Gunung Rinjani", lat: -8.411316276862003, lng: 116.45726296931424, category: "mountain", region: "lombok-timur", price: "Rp150.000 – Rp200.000", hours: "24 Jam", image: "https://i.ibb.co.com/67QN18NH/AMBA38sg-Ye4l4-Jx-AIGEqfg-G9zi-Fkt9qx-Dxn-Grr4qet-Fzarm-TRw-F-1a-Lh-Pc-GJdx5-MGr-WZSo-Fd-Gjr483-DZPD4lx.jpg" },
    { id: 92, name: "Pantai Pink (Pantai Tangsi)", lat: -8.859647802064964, lng: 116.5803302, category: "beach", region: "lombok-timur", price: "Rp50.000", hours: "24 Jam", image:"https://i.ibb.co.com/B5JGSvd2/AMBA38ui-Gq-Jq5-Ns-Ys7-HMIf-Vyr-Rn-VCay-Wn4o-EBz-HNw4-CLXC98v-Zf7dved39-DRntq-XWSW5nm12-HT3vz-LOfwh4-U8hb.jpg" },
    { id: 93, name: "Bukit Selong", lat: -8.36527950734418, lng: 116.54003440000001, category: "mountain", region: "lombok-timur", price: "Rp10.000 – Rp20.000", hours: "05.00 – 18.00 WITA", image: "https://i.ibb.co.com/PZVGhbFw/APRy3c8s-DRg-GSUQPJm-UBc-KXIqb1sqk-HRmn-VVLGGh6-ZNYx-Vfnrxbh-KHNW7-JKiyh-EQERDu7731-O1-Ju67m2f-6-Qe-Q8j-N.jpg" },
    { id: 94, name: "Air Terjun Jeruk Manis", lat: -8.515431670392651, lng: 116.42403412300251, category: "waterfall", region: "lombok-timur", price: "Rp10.000 – Rp15.000", hours: "08:00 – 17:00 WITA", image: "https://i.ibb.co.com/Z67cgDXM/AMBA38urt4-AXP3-Wzaf-Lg-Or-Rq-Kinpwe-CG7-ya-KUUgq-SLUKp6v-U0-Q-L7-VXWo-LFx-Bo-Hwe3-I3ths-Ezn-F7-HZ4p-Yr2yy.jpg" },
    { id: 95, name: "Pantai Ekas", lat: -8.873660286739067, lng: 116.45507533404901, category: "beach", region: "lombok-timur", price: "-", hours: "24 Jam", image: "https://i.ibb.co.com/GQ9Ls6g4/AG0il-Sw5lie-N0-HS3-Dh-E3-Lb-U50-HGavi-SSwk-ZOJlf-Faa-B0-Bt-Etc-EIje-C4m-USXql2-Xbrt-Rrj-X1193t-Ja-Lrcit2u.jpg" },
    { id: 96, name: "Gili Sunut", lat: -8.853141499493454, lng: 116.55001219999998, category: "beach", region: "lombok-timur", price: "Rp300.000 – Rp500.000", hours: "24 Jam", image: "https://i.ibb.co.com/mC1b2Xnf/AMBA38s9-g-m1-SUveb-0-DU8-Gl-YMj-R839-Qhwda37-Yxgfe-Tco-Sjg9-Hux3a3-Gl5-EL9-Zve-S1-Fg-QC3z-Bn-Kjz-Xk-HJH290-I.jpg" },
    { id: 97, name: "Gili Kondo", lat: -8.440457641729422, lng: 116.73815139348638, category: "beach", region: "lombok-timur", price: "-", hours: "24 Jam", image: "https://i.ibb.co.com/84dvFg9q/AG0il-Syz8-Va-ZT-p0hh6-g-XWIvi-BP2sv-Xd-GUMOl3-S9foi-C-g-DHDiri-R7-PK1-QQl-C9jfvqpaid1vi-ZRs-Vy9-SVYRi-W4.jpg" },
    { id: 98, name: "Gili Kapal", lat: -8.444109312117726, lng: 116.74862207149708, category: "beach", region: "lombok-timur", price: "Gratis", hours: "24 Jam", image: "https://i.ibb.co.com/4yqnQWV/AMBA38u-ZE6-Kugf-K-Idq8-LFl4-E-C4-OW1a-Lw-Uv-CTYOa-XVIFa-IWm-O44i-UZo-Pg-NIJ5-H7-Epww-C6uw3h0-Qm-Xt-LKPMGUR.jpg" },
    { id: 99, name: "Gili Petagan", lat: -8.424296989782993, lng: 116.74743410800791, category: "beach", region: "lombok-timur", price: "Gratis", hours: "24 Jam", image: "https://i.ibb.co.com/chf7mkbt/AG0il-Sxw-Eii-Farfb-IYi-Fg6-J0-JSEjg-a-NMfj-Mq-G4j-RAq-Z8-FJs-CJui-H9-Wdmw-C0-Ta4-ZUWpzg-DQxn1-Vu-BO0-h-OSJ.jpg" },
    { id: 100, name: "Pantai Tanjung Bloam", lat: -8.87923629961025, lng: 116.57020292883571, category: "beach", region: "lombok-timur", price: "Rp10.000", hours: "24 Jam", image:"https://i.ibb.co.com/xKqdqLgG/APRy3c9u-Yj-IRAb-V1-a-PTDVld-KOTJe5q-LXw-R4s-HWp-Blep-SMi8-Mr-TKzb-OYc4-Zxhe85-PJtlcb-A-Hp-R-FDq-Syna29.jpg" },
    { id: 101, name: "Bukit Anak Dara", lat: -8.364030199605475, lng: 116.56060281988832, category: "mountain", region: "lombok-timur", price: "Rp10.000 – Rp15.000", hours: "07.00 – 17.00 WITA", image:"https://i.ibb.co.com/h1fp09V0/AF1-Qip-Ohk-Mi-Pa3-BZR8-ZJk5a-TKTp-Ud1mr-Jnwlt-NXw9-Bf-B-s900-k.jpg" },
    { id: 102, name: "Bukit Pergasingan", lat: -8.345318062928726, lng: 116.53304919971514, category: "mountain", region: "lombok-timur", price: "Rp15.000", hours: "24 Jam", image: "https://i.ibb.co.com/N22qS898/AMBA38u-Wt-K8-Cxdkeovbmy-BIPLTv-Jwf5dfuas0-Hlk-NDImv-TXn-P4-HQta-QWQ1kr-Zj-Pze-Fga-E2-Qtiz-2-Ye8-ZH8-BO8e.jpg" },
    { id: 103, name: "Air Terjun Mayung Polak", lat: -8.508344812910652, lng: 116.44201879886063, category: "waterfall", region: "lombok-timur", price: "Rp10.000", hours: "08.00 – 17.00 WITA", image: "https://i.ibb.co.com/5gH2FSDp/AG0il-Szm-CFYna-EXg2-Ux-KH54-D2xf-DNXJ0hqp-Cho-Rs51-KZA7-BRu8ibu-F-n-GUw-PMELj-Xz-ZCBnq-EY9-TL84j-Nt-ONyd.jpg" },
    { id: 104, name: "Air Terjun Mangku Sakti", lat: -8.314453082623029, lng: 116.46970232518238, category: "waterfall", region: "lombok-timur", price: "Rp5.000 – Rp10.000", hours: "07.00 – 17.00 WITA", image: "https://i.ibb.co.com/21kBGzMz/AG0il-Sxb-R9g-AGOcp-Ua-Q51t39qt1m-F8p-BTi-Wonerzfj-QIt4-Knv-GPsajf-Fy4-UPl9-Gv-Mhsl5s-JFE47t-Wf-UPf8tkg.jpg" },
    { id: 105, name: "Telaga Biru", lat: -8.54148517540629, lng: 116.39053557116428, category: "nature", region: "lombok-timur", price: "Gratis", hours: "07.00 – 17.00 WITA", image: "https://i.ibb.co.com/VYk2GCXg/ACke6-Ths-H37na1-Dmh9-SKi99-Vjs-Yug-LH1-Ad8t0gkg-BUCFgn-X6-Mid-Ds-Ckn-WJn84dq-XGR1-Ej-i3-Ye-Rk0-Glb2s-Tn-MVDM.jpg" },
    { id: 106, name: "Air Terjun Pengkelep", lat: -8.544710695125977, lng: 116.3857575, category: "waterfall", region: "lombok-timur", price: "Rp20.000", hours: "24 Jam", image:"https://i.ibb.co.com/gL625xZt/AF1-Qip-Oi-Fljxen-ITLzz-Gi2-Xmk-Dvy-YCDZPSEhyd8u-N9oe-s900-k.jpg" },
    { id: 107, name: "Tereng Wilis Waterfall", lat: -8.54309900489652, lng: 116.38470265767144, category: "waterfall", region: "lombok-timur", price: "Rp5.000 – Rp15.000", hours: "07.00 – 17.00 WITA", image: "https://i.ibb.co.com/BHqtPTjL/AF1-Qip-Oqr6c-B9z2n-SUo-HAn-BL-ZFQw-T6-WTv-R-X9-WPBM-s900-k.jpg" },
    { id: 108, name: "Air Terjun Aik Ngemplok", lat: -8.525892005135598, lng: 116.38714952883574, category: "waterfall", region: "lombok-timur", price: "Rp5.000 – Rp15.000", hours: "07.00 – 17.00 WITA", image: "https://i.ibb.co.com/r2LR3w06/AG0il-Sxa-Iym-SJOy-Wr2-Cq-G3-B2l-YJRIkikn8-Jze-YN1x-Nl-UAqer2wmjx-DQJIHb5a-D2-Rvkcb-hd-gm-2-QQLTA5-EQT2-YX.jpg" },
    { id: 109, name: "Tetebatu Waterfall", lat: -8.539920475297503, lng: 116.42151399999999, category: "waterfall", region: "lombok-timur", price: "Rp10.000 – Rp15.000", hours: "07.00 – 17.00 WITA", image: "https://i.ibb.co.com/C3TMpN9B/AG0il-Syd-MSs-Ui-Xu-Jm-ZQQCRsi-Dz-Np7-ZFww-ix3-MNUn-Tix-Knl-E5-J9-Qzyq-WIqie-Ugz-VN3x-RAPh8-Iule09t-Ef7-En.jpg" },
    { id: 110, name: "Tereng Wilis Camping Ground", lat: -8.538510295039742, lng: 116.38447235767143, category: "nature", region: "lombok-timur", price: "-", hours: "07.00 – 17.00 WITA", image: "https://i.ibb.co.com/HLjmW4M9/AMBA38uu-V6pqwf-Ysem-Ln-Je-T7fv-Z0-Ri9-Cvnq-C77n-TRh-Hqk-Wa1-H6-HVCWTT7-SW0r-FK3-Bk-Cwh02b-Eoy9g-Wty2-ZUXQe.jpg" },
    { id: 111, name: "Rumah Adat Desa Bleq Sembalun Lawang", lat: -8.364137677921235, lng: 116.53943550000001, category: "culture", region: "lombok-timur", price: "Rp5.000 – Rp20.000", hours: "24 Jam", image: "https://i.ibb.co.com/zW7G08fm/AG0il-Sw-Zmp14hz7j9-Swg-Ia83t-AFzxuc-Ap-RTpeusf1-PW7wfu-CJSHy-Kmzym4-v-WG3-DK-8lt3-Yh09znst-Oq-B9z4-Fw5-On.jpg"},
    { id: 112, name: "Goa Raksasa Tanjung Ringgit", lat: -8.860181950637527, lng: 116.5931953199914, category: "nature", region: "lombok-timur", price: "Rp5.000", hours: "06.00 – 17.00 WITA", image: "https://i.ibb.co.com/Ps369cG1/AMBA38t-Cx3-G2-Kj-N4-Fe1-DUCWYUV0-U8z5c-Lx6-XJNAW9-Xb-W9-K3o-D7f-Tj-IEOVU8pltg-M-w-Lyev-Xzww-Gr-EPbh-Pl6-BJIV.jpg"},
    { id: 113, name: "Pusat Kuliner Ikan Segar", lat: -8.700152359175457, lng: 116.57103065243587, category: "culinary", region: "lombok-timur", price: "Rp50.000 – Rp75.000", hours: "07.00 – 21.00 WITA", image: "https://i.ibb.co.com/pvbxny41/AMBA38t38f-Sn-Rjf4b-Y-ne-BMlosy-AEbxf0y-LQz-Bf-AC07qe-Od-2-JYn4r-LVxe-GIV9-NWQ-Wgo63c-Gynz37-Qn5wl-2-x.jpg"},
    { id: 114, name: "Lesehan Purnama", lat: -8.610815125135478, lng: 116.48004041092116, category: "culinary", region: "lombok-timur", price: "Rp20.000 – Rp70.000", hours: "13.00 – 21.00 WITA", image: "https://i.ibb.co.com/1fSRmpPN/AMBA38u-H-DFnh-E5r-Wl7qtb4-Iu-DEJt-SJkh-Sz-C-E6kb-YRp-q-Whz-Pu3b-CAFCLJpko-RR1030-OGK-8t-Eb-Gq-E9-y-Te.jpg" },
    { id: 115, name: "Lesehan Mae Cenggo", lat: -8.615442316408275, lng: 116.49104823123876, category: "culinary", region: "lombok-timur", price: "-", hours: "13.00 – 21.00 WITA", image: "https://i.ibb.co.com/5XzHDRSL/AMBA38t-AI99ri6-Vjp-Xo5-UOu1-Y8x-J2-DMYI4-Yy0s-Fg5-BWkzdb-Cn-Vf7j-FEl-I6yt-Io-FHkq3-Hg-E70ng-Az-Cw-IP89-T8h7.jpg" },
    { id: 116, name: "Makam Raja Selaparang", lat: -8.546794891484526, lng: 116.60019033649598, category: "culture", region: "lombok-timur", price: "Gratis", hours: "13.00 – 17.00 WITA", image: "https://i.ibb.co.com/21DYywFw/AMBA38u-l78zw4f2x-Zr5b-MS-Fm4swu-Dl-Hb1p-C3tf-R9-UDIXn8k-Ptr-EWzwr-JB-q-Em-UXm-Ag-U1h-W4klvj-Sl-Hq-Jy.jpg" },
    
    // Lombok Utara (117-147)
    { id: 117, name: "Pura Medana", lat: -8.35906886487244, lng: 116.1229244634781, category: "culture", region: "lombok-utara", price: "Donasi/Rp5.000", hours: "24 jam", image: "https://i.ibb.co.com/8L1BW8cb/AG0il-Sy-Ki-Dsa-OBC0-P4-XPk-W-w1-Oqn-Vn-x-W6g-Rsqek3-ONSy-Jg-Opld-ap-Pcc-Ny-EHkyi-Ozt-OXg-Sy-BOlmy-Hxe-L.jpg" },
    { id: 118, name: "Masjid Kuno Desa Sesait", lat: -8.296404197621191, lng: 116.27242310164911, category: "culture", region: "lombok-utara", price: "Rp5.000", hours: "08.00 – 17.00 WITA", image: "https://i.ibb.co.com/8gH4MQg5/AG0il-Sx-LUj-Ow5je0ix-KSFbp-Qas23-MDWg-M5u-E7-Yh-Xi-VJut-Nt037-H8-Psl-UCQy1p-SCYFZujev-Tga-M8-Va-XOWQ8-Uuc.jpg" },
    { id: 119, name: "Masjid Kuno Bayan Beleq", lat: -8.266589635517171, lng: 116.42707919231214, category: "culture", region: "lombok-utara", price: "Donasi", hours: "04.00 – 21.00 WITA", image: "https://i.ibb.co.com/G4zmdx6S/AMBA38snj-SIy-Gxu6-Zpqyp0-E-4r-VMr-G-ML8o-T2-HIhk52-SB3j-M-AByv-Zsp-JHn4-Nj-Y1bc-GKBj-YT7-X64-Dtsn2x-TAY-Gx.jpg" },
    { id: 120, name: "Kubur Beleq", lat: -8.293552192320321, lng: 116.27078449999999, category: "culture", region: "lombok-utara", price: "Donasi ±Rp5.000", hours: "08.00 – 17.00 WITA", image: "https://i.ibb.co.com/r2nNmjfv/AMBA38vh-IOqpn-V0kbdsq-Wbm-KA89w-Olbl-Yddt-O8j-Cq-Bp3-Dn-Fy-R3-Ddyg-IIG677i03-M4nh-FHWzx-Oti0-F9-Bf-ACv8e.jpg" },
    { id: 121, name: "Air Terjun Sendang Gile", lat: -8.306161577809489, lng: 116.40829868465711, category: "waterfall", region: "lombok-utara", price: "Rp10.000", hours: "08.00 – 17.00 WITA", image: "https://i.ibb.co.com/wrMkkLqf/ACke6-Tjq-Py1828-Rh116m-J4-Kc8-TOWsjul-TSQf-F29-PN37-Z5d-T6i-AYf-IJhe-Pwl-OWdl-Ss-ODRAGKI9b-Ocfl-Ya-UPXnh.jpg" },
    { id: 122, name: "Gili Air", lat: -8.358851802356646, lng: 116.08136100358664, category: "beach", region: "lombok-utara", price: "Rp20.000 – 200rb", hours: "24 jam", image: "https://i.ibb.co.com/FL5QcBJD/AMBA38t-EGr-Qjwv87-Fte2-QJo-PJ1-YDSHUTWZOm-Ri-OP7-Jnoel-J4t-94cn-C-7t2j-Klx-Ct-TLe-P7-YJ5-Tp-Ycwe-AWiej-Uo.jpg" },
    { id: 123, name: "Gili Trawangan", lat: -8.348218868186132, lng: 116.0373270744556, category: "beach", region: "lombok-utara", price: "Rp20.000 - 200rb", hours: "24 jam", image: "https://i.ibb.co.com/ZRpZPYcK/AG0il-Swa7k71k7-bl-WHrhi-XJjo9l-E-UNs-Oibn-1fae-BNC1h-Kr-Fqd-Ry-HUw-JGs7y-Hrez-LTRSi-XBLVm-Hg-IG0v6-B.jpg" },
    { id: 124, name: "Gili Meno", lat: -8.34652438698581, lng: 116.05598851140081, category: "beach", region: "lombok-utara", price: "Rp20.000 - 200rb", hours: "24 jam", image: "https://i.ibb.co.com/x8KHqqrx/AG0il-Sx1ue-Obe-L2v-Aqk4ttt-Nfa5j4-Ke-G7-E7o-M1-Z8do-TVa-TJx-T1sq3-SSLEV1-KHETd-AMy0-Ffir1-s6ak-Sj-RQ7c-L3.jpg" },
    { id: 125, name: "Pantai Sire", lat: -8.366108662011014, lng: 116.11255, category: "beach", region: "lombok-utara", price: "Rp5.000", hours: "24jam", image: "https://i.ibb.co.com/cc3jXt5b/AG0il-Sx-Fwpfa-T409u-r-Xm-GWYj1v-QY7ka-Zk-O67-Rh-V8-ZZPDj-KZb1-YTlq1f-Dd-gu-F0df9-Ln7x-Upiaf-U4-A0-We-Io-F.jpg" },
    { id: 126, name: "Air terjun Kerta Gangga", lat: -8.35089534722242, lng: 116.22648755767143, category: "waterfall", region: "lombok-utara", price: "10.000 - 15.000", hours: "08.00 – 17.00 WITA", image: "https://i.ibb.co.com/qLtJqRZC/AG0il-Sw7kv-OLBwih-HV4-Rhhg-c-Yb4-L4-Hqeh76-Hn-Wn3s-Hgg57d-xh4mm-Kzpt-Ln-Os9-LA-7-NWe-Pnyzo-TLQhx-Lus4e-W8.jpg" },
    { id: 127, name: "Bukit Malimbu", lat: -8.441577107736848, lng: 116.0662837851991, category: "mountain", region: "lombok-utara", price: "gratis", hours: "24 jam", image: "https://i.ibb.co.com/PzjSDC9b/AMBA38u-k1-F-13c6n-Bm-Tq-VVETxz-G3-BM-JXLIa-FDPn-Pc-Ns-p-RIVMBT-Mj65aq-UZqw-Y7e-XKv-N4-ZOB-FY5px-D36-Khm.jpg" },
    { id: 128, name: "Klui Beach", lat: -8.465531174997066, lng: 116.03689083412524, category: "beach", region: "lombok-utara", price: "gratis", hours: "24 jam", image: "https://i.ibb.co.com/27fPSxBS/AG0il-Swfzmp205r-Ge-L0he-W8a-WEbx-UQA7cudv-WZRN0-Bfv5-UGPbib-Qcd-Ql08-VWBVe-HGacl-L-F8-ZCby7q7sp-PZGx2-Sk.jpg" },
    { id: 129, name: "Tiu Pupus", lat: -8.33970294615779, lng: 116.21872517116428, category: "waterfall", region: "lombok-utara", price: "Rp5.000 - 10.000", hours: "07.00 – 17.00 WITA", image: "https://i.ibb.co.com/PZJv3PRv/AG0il-Swr-PDZU0qg5-DKHHSIjw-Mf0-t4qheue-NTCZyl-LJt-R5-Px-N6-Lj-Mb-VIv8w-B-A7-Kh6-JXe-GK71rm-Kq8-Z0sw2uh8u.jpg" },
    { id: 130, name: "Air Terjun Tiu Pituq", lat: -8.340138176659204, lng: 116.22075292111545, category: "waterfall", region: "lombok-utara", price: "Rp5.000 - 10.000", hours: "07.00 – 17.00 WITA", image: "https://i.ibb.co.com/pvtf03B4/AMBA38tj-Sw-FMb-Zzk-MW8-PVB7-Cd-Pcs-Fez-Y20c-F0mg39e-Vq683-I-yr-XBI0-HDcv-LXAwr-Q99-YChk-Yg-K0-ATKp-NL9k-Y.jpg" },
    { id: 131, name: "Tiu Kelep Waterfall", lat: -8.312684111362854, lng: 116.40411089999998, category: "waterfall", region: "lombok-utara", price: "Rp 10.000 – Rp 20.000", hours: "07.00 – 17.00 WITA", image: "https://i.ibb.co.com/Nn3wS0j2/AMBA38v-W-w65-VI8-Ox-c-Gm2lk-IVK-REv-LGr8-Xijo2-KUo-Tf0g-Hs-FQop-Q9ro5fv-V2y-DWB-2-VMif-Ghj-Xfusk-Cl-OIvj.jpg" },
    { id: 132, name: "Pandanan Beach", lat: -8.419543159554685, lng: 116.05017079999999, category: "beach", region: "lombok-utara", price: "Gratis", hours: "24 jam", image: "https://i.ibb.co.com/ksdfKW5x/AMBA38st-To-W04-GT-KCUAh-Ij5y1-T4aa-KUQJj-C1c-N3v-WYxg653-Vjqa-MDje-DNRmf-UGS3-F0j-UOYo-YWr-Uzb-Tgwwlzb7.jpg" },
    { id: 133, name: "Bukit Malaka Pandanan", lat: -8.422514845635053, lng: 116.04467763591038, category: "mountain", region: "lombok-utara", price: "Gratis", hours: "24 jam", image: "https://i.ibb.co.com/qYn7Z2ph/AMBA38tvl-M16-Bn-Kzt-MWoh4-Ib-HZn-Tl-S3rb-V1y-LTFj-CT72ml-BFdhbtc-ATACFFb92q-w-IVYZn-Oevd5poykadg-XQYR.jpg" },
    { id: 134, name: "Pantai Vulkanik Nipah, Malaka", lat: -8.42578367394725, lng: 116.04708089511173, category: "beach", region: "lombok-utara", price: "Gratis", hours: "24 jam", image: "https://i.ibb.co.com/Kj1v27dP/AMBA38u-URd-Cj-Vlq-OUExw-I1p-Xo-P4t2-MIQfflrk-Yv-T1f-A7w-Bd-M53-9vhstw-J1-LKQEGnf7cj-CQYi-Gm0y-RCt02-Xe.jpg" },
    { id: 135, name: "Nipah Beach", lat: -8.433147716895293, lng: 116.04579363398187, category: "beach", region: "lombok-utara", price: "Gratis", hours: "24 jam", image: "https://i.ibb.co.com/JjTBKy3X/AG0il-Sxln-Xn-WY1bn-Wg8f4-H6qy-PDI-1j-SGGR6-Yjq-UVYr-I4j-Bfs-G2-Sqn-y-Ejme5wu-Gkj-CW9mpyv-IFHm4y9-KJs-AU.jpg" },
    { id: 136, name: "Batu Bolong", lat: -8.435781143794092, lng: 116.03588999145522, category: "beach", region: "lombok-utara", price: "Gratis", hours: "24 jam", image: "https://i.ibb.co.com/ns6sPP5W/AMBA38su-Nr-Llzl5-Zj-PHB-ORUU6o1f-Xi4e11zawq-AXQb-Cy-P-dhs-F12y6v1-Vm-QOR1-Clruj-Ku-Juy-T-lhk-p0n4ar-G.jpg"},
    { id: 137, name: "Air Terjun Mangku Kodeq", lat: -8.287936019730012, lng: 116.47062774163027, category: "waterfall", region: "lombok-utara", price: "Rp 5.000 – Rp 10.000", hours: "07.00 – 17.00 WITA", image: "https://i.ibb.co.com/mrVR0hc3/AG0il-Syj8-D3sfttlz-OZKe-Ygu-WEg8-T8-Hpu-X9h-Os-DZqtv-NYHVqz1-JNCDGtvn-MGvq8n-Bj-SGMbppgh-SB-ok43-ZH6-ZOog.jpg" },
    { id: 138, name: "Air Terjun Kalianjah Sambik Elen", lat: -8.2946028150166, lng: 116.46951414533923, category: "waterfall", region: "lombok-utara", price: "Rp 5.000 – Rp 10.000", hours: "07.00 – 17.00 WITA", image: "https://i.ibb.co.com/GvWKZRbd/AMBA38vroy-AL7k82-FSWj-Mv8bbtgv-Xhw-T0-ZMFc-H4-D4pli-WY02c6loybuq-MVMBm-m5d-QDELGVrw-Cnntl5-PCget-SLUL0-G.jpg" },
    { id: 139, name: "Pantai Impos", lat: -8.360196807413386, lng: 116.13607362883573, category: "beach", region: "lombok-utara", price: "gratis", hours: "24 jam", image: "https://i.ibb.co.com/bjPv1YYc/AG0il-Sy-VU14g-Mpab-YEXE2-As2-Jo-OCAqc-INbjg-I-Kw-Vo-Emm-Do0-EL-Glbn-IVHu-Wshdc-A5gf-Hu-G1-R8-Zulnf6-FDq1.jpg" },
    { id: 140, name: "Masjid Kuno Bayan Beleq", lat: -8.266589635517171, lng: 116.42707919231214, category: "culture", region: "lombok-utara", price: "Donasi", hours: "04.00 – 21.00 WITA", image: "https://i.ibb.co.com/G4zmdx6S/AMBA38snj-SIy-Gxu6-Zpqyp0-E-4r-VMr-G-ML8o-T2-HIhk52-SB3j-M-AByv-Zsp-JHn4-Nj-Y1bc-GKBj-YT7-X64-Dtsn2x-TAY-Gx.jpg" },
    { id: 141, name: "Desa Adat Senaru", lat: -8.302492911506782, lng: 116.40100614232854, category: "culture", region: "lombok-utara", price: "Rp10.000", hours: "07.00 – 17.00 WITA", image: "https://i.ibb.co.com/SDJ5PK4p/AMBA38t3-H4j-TSGW49-MN7wl-Dwkl-Mdz-IELEAMDGBRHl-LYL7-Tkg5-YW0-I-DHtp72-Aly80-O4uc-Dxit-XFHlk-LPDk3-HXHwo7pv.jpg" },
    { id: 142, name: "Angkringan Balap Tanjung", lat: -8.365507205177387, lng: 116.13239074881179, category: "culinary", region: "lombok-utara", price: "Rp 5.000 – Rp 15.000", hours: "10.00 – 22.00 WITA", image: "https://i.ibb.co.com/wZPYbwHt/AG0il-Sx-Ymw-Tm-HKo-F10a-BXh-C46nzpr4-O9st-KDe-Kb0n8mbvl-G-X5-Le4w-N6203n-Wyd0-JA53y-MSk5r-Uiidl2-Z37a-O.jpg" },
    { id: 143, name: "Sate Ikan SARI RASA Khas Tanjung", lat: -8.362641799625923, lng: 116.14032851058681, category: "culinary", region: "lombok-utara", price: "Rp13.000", hours: "10.00 – 22.00 WITA", image: "https://i.ibb.co.com/whbTmqzx/AG0il-Syn-WCXV0-Dd2w-DDZWc-LEja0-Tn-L9ac-Fsb5-Pz-Yy-VJUIXTk-9-Zvb-x-Xb-ZUg-SMMh-Adro-MBQqgf-HZw-Ib-Wyf-I.jpg" },
    { id: 144, name: "Lesehan SASAK NARMADA", lat: -8.361474405912187, lng: 116.17218682573127, category: "culinary", region: "lombok-utara", price: "-", hours: "10.00 – 22.00 WITA", image: "https://i.ibb.co.com/93ZmQ2Zc/AG0il-Sz-Z6-PSZfqo5tmhy-Qa7-FAus-WSa-WWk0-MBl-Dl-5-YAYv2n-HX4z1-LTSu-NHr-Xn3-Eke-Iz-Fs-F0u-Hy-CMm-Hr-Ow-B6.jpg" },
    { id: 145, name: "Bely Garden", lat: -8.360593481013215, lng: 116.1740996735024, category: "culinary", region: "lombok-utara", price: "-", hours: "10.00 – 22.00 WITA", image: "https://i.ibb.co.com/DPJ8vY7g/AMBA38uxmp-Ltntu21-EQIA6eb5yi6b-QFESu9-Lphkq31d-OKl-BL8joulj-Qqr-huqd-CESZl8-RLy-G4-7-Hgpknm-CSMswluye-U.jpg" },
    { id: 146, name: "Ya Ya Warung", lat: -8.348778072939272, lng: 116.061250007674, category: "culinary", region: "lombok-utara", price: "-", hours: "10.00 – 22.00 WITA", image: "https://i.ibb.co.com/YT0VkXnS/AMBA38u-Ddny-ZZAhlslu-Aa-Znu5z-KJx-gz-Cy-Z8-A4-LYmvj1-Cs-TTg-Yg7-NJ5-M-P0-F7z-XE0fla1eo-De-c7-GSh310s1l-RY7.jpg" },
    { id: 147, name: "Aloha Warung", lat: -8.346448933032702, lng: 116.06093978002858, category: "culinary", region: "lombok-utara", price: "-", hours: "10.00 – 22.00 WITA ", image: "https://i.ibb.co.com/zWf9KM21/AMBA38sd1drgv1e-CDE0-Fi7-Mz8gl2r19o-ZReh5sanefu-FHRb1-Te1-Eua-EFQQ0k5-Ig2-FAc-Hnfz8-Iqw2-TCDYh0a-Fybc-X8-FK0e.jpg" },

    // Kota Mataram (148-170)
    { id: 148, name: "Pantai Gading Mapak", lat: -8.61859395390315, lng: 116.07514090000001, category: "beach", region: "kota-mataram", price: "Gratis", hours: "07.00 - 18.00 WITA", image: "https://i.ibb.co.com/bMYDv396/Screenshot-2025-12-14-084215.png" },
    { id: 149, name: "Pantai Batas Senja Dua", lat: -8.622517388639968, lng: 116.07478, category: "beach", region: "kota-mataram", price: "Rp2.000", hours: "08:00 – 24:00 WITA", image: "https://i.ibb.co.com/zWZnXcWZ/AMBA38s-P3j4aq-CC-o7-BO1-Ih88s-C6jep5xq-SRZHrnl8-DFu-O8c882-Y61l5-IQ9-RBATtzu9i-TUt8-Bm-XCidd-WQ-cpz-Pq-E9-C.jpg" },
    { id: 150, name: "Pantai Ampenan", lat: -8.569375768122388, lng: 116.07197031534291, category: "beach", region: "kota-mataram", price: "Rp2.000 – Rp5.000", hours: "06:00 – 22:00 WITA", image: "https://i.ibb.co.com/spcXjFjt/AG0il-Syl41-YZv6-Vog-Gq-Cu8y-Mn9-U8-WEW1-ozt-DX9-Qw-P8-VQa53-Y8tq-G-4-GWv-TBBYPp-Voz-Iua8-Zlvt-Au0-Unfsyzapjqd.jpg" },
    { id: 151, name: "Museum Negeri Nusa Tenggara Barat", lat: -8.585052369820982, lng: 116.08588132883571, category: "culture", region: "kota-mataram", price: "Rp 2.000 – Rp 10.000", hours: "08.00 – 17.00 WITA", image: "https://i.ibb.co.com/ds7KRWrT/AMBA38t2-DQNGPulmg-BWKVU7-HU-0c3-Ck-Tg-Ro-Hhuog-Kugfn-Es0f-F8q-Teasp-LNQMcy-Y2a-N5-Z-2-Yo-LX04sob-Oc-Qg0.jpg" },
    { id: 152, name: "Taman Mayura", lat: -8.586810187139392, lng: 116.1330549, category: "culture", region: "kota-mataram", price: "Rp5.000 - 10.000", hours: "08.00 - 21.00 WITA", image: "https://i.ibb.co.com/fVTzdhNH/AMBA38v-Xmx-92-PH0-W7-MNnx-V9-PDW68-Xf-HLzj-q-VSWq-KFPc8f-F9y-W9n-Wg-Qc-Oz-W-Ux-Lw-DHPe-Nv5o-YVI7dbfgr-KG.jpg" },
    { id: 153, name: "Taman Budaya Provinsi NTB", lat: -8.593825832516712, lng: 116.09966786930146, category: "culture", region: "kota-mataram", price: "Gratis", hours: "06:00 – 22:00 WITA", image: "https://i.ibb.co.com/MyYXr0hj/AG0il-Sx-Lur-Vn-Fu-J9i-Uvn-DYrdy-2-An-TOYUGOHb2-Bfw-Sg-Tzb783-QKv-Jh8x-Xwzg-TUym-TUWKRJ-pz-FFLQVz-Bdx-Y.jpg" },
    { id: 154, name: "Kota Tua Ampenan", lat: -8.570716561594645, lng: 116.07624545277966, category: "culture", region: "kota-mataram", price: "Gratis", hours: "24 jam", image: "https://i.ibb.co.com/4ZVR9N2F/AG0il-Sw-4-AE29-Xci32-Eu4a7-Ncve-Agf-CQ2-Rqq-JUexnw-YC3a-qdlz-BLi-J8-QXTt-Hcj-JG-oe1-XUTQSk-QTHIcs637-U1-YLL2.jpg" },
    { id: 155, name: "Masjid Raya Hubbul Wathan - Islamic Center NTB", lat: -8.579961720568198, lng: 116.10061073874492, category: "culture", region: "kota-mataram", price: "Gratis", hours: "24 jam", image: "https://i.ibb.co.com/QFm0SLFX/AG0il-Szin-Qo8-Bd5-MSbp2-O-Nigbila6-Wsk-Ib4j-Deg75-Hnqy94xc-Obnb03-Ilv-ML29y-OSb-NNct-Hl-TGhgi-Nm-Cy-FHTJ7.jpg" },
    { id: 156, name: "Pura Meru Cakranegara", lat: -8.58761538289387, lng: 116.13138626533252, category: "culture", region: "kota-mataram", price: "Gratis", hours: "24 jam", image: "https://i.ibb.co.com/zHF6MM80/AG0il-Syf6-WEv-FNYz-VEa-Eo-Nj-UWe9-Dq6i-VSOSj-IXr-P8o2ct-N6-Nzug-Ofyo6-Iu1-E8n-Zdq-HFx-BALKP6tar-PT03-Ky-M.jpg" },
    { id: 157, name: "Rumah Makan Khas Lombok Tanjung Karang", lat: -8.596699712446284, lng: 116.0759605, category: "culinary", region: "kota-mataram", price: "Rp10.000 – Rp50.000", hours: "10:00 – 22:00 WITA", image: "https://i.ibb.co.com/0yfz2H61/AF1-Qip-N2hdxp3-GFc-Yc3-GGtzk2-Qlawa-YTw-KNhn-PXb-OAkc-s900-k.jpg"  },
    { id: 158, name: "Taliwang Khas Pak Udin", lat: -8.586781687138199, lng: 116.1282777, category: "culinary", region: "kota-mataram", price: "Rp 35.000", hours: "16.30 - 23.00 WITA", image: "https://i.ibb.co.com/gbGdcvzv/AMBA38u6-W3-YLP1-BCw-WXf-K2as-XYz-Vh-SAShsc-Li-EU83mmt-RDJJ-6-JG2-Sib-Ngc-ZD6-Tpg2g-PVFdp852-Me-Myk-Kryx1-Gs.jpg" },
    { id: 159, name: "Sate Rembiga Ibu Sinnaseh", lat: -8.561454991470393, lng: 116.10942126533209, category: "culinary", region: "kota-mataram", price: "Rp20.000 – Rp60.000", hours: "07:00 – 22:30 WITA", image: "https://i.ibb.co.com/pjBLdgnw/AF1-Qip-Omfq-A76-Qhj-S22-HATA1dnradqp-Qp-Kp-ZDW0-GFC-s900-k.png" },
    { id: 160, name: "Roemah Langko", lat: -8.576986791455388, lng: 116.08379899416799, category: "culinary", region: "kota-mataram", price: "Rp22.000 – Rp80.000", hours: "10:00 – 22:00 WITA", image: "https://i.ibb.co.com/gMDXYkxD/AF1-Qip-P2i-Fw-L7hu-LOJVnlb-Pj11k-RF4z-YE6-N11-Hweo-If-s900-k.jpg" },
    { id: 161, name: "Taliwang Irama 3", lat: -8.577931095588989, lng: 116.12554899999999, category: "culinary", region: "kota-mataram", price: "Rp50.000 – Rp55.000", hours: "08:00 – 21:00 WITA", image: "https://i.ibb.co.com/9m6xvrnB/AMBA38ts5xxe-Kd-Pis-BXFLKJp-KFhhb4s7-GVd-ZPt5-T90-NQVh-DHKOx-XEGqmm-o-XTc5-upa-HCIn-Idg-PImbke-Nr-GGj-W.jpg" },
    { id: 162, name: "Lesehan Green Asri", lat: -8.570320586448515, lng: 116.1425504, category: "culinary", region: "kota-mataram", price: "Rp20.000", hours: "08:00 – 21:00 WITA", image: "https://i.ibb.co.com/Qvz5HPBv/AG0il-Sy-NXTksr-Ew-Gol-U0-UF9-GEAJAQI2td-Kigce-G-a-Ta-I-USwq-PZrk-Kvc5-RTy-Auuo-Z5-Xd-Al-Ntnf-TVnf-Iz-Ig.jpg" },
    { id: 163, name: "Bebek Pondok Galih", lat: -8.560650895347925, lng: 116.10756409999998, category: "culinary", region: "kota-mataram", price: "Rp11.500 - Rp44.500", hours: "10:00 - 22:00 WITA", image: "https://i.ibb.co.com/R4sjvfGK/AF1-Qip-Nr-RVzvf-JFAq-EIRr-Ao-RW99kn3-Fnq-U1-Jem-MBi62-s900-k.jpg" },
    { id: 164, name: "Lesehan Taliwang Nada", lat: -8.568148113643057, lng: 116.1390723, category: "culinary", region: "kota-mataram", price: "Rp65.000 - Rp75.000", hours: "08:00 - 22:00 WITA", image: "https://i.ibb.co.com/358Hnv40/AG0il-Swg-QBtr-MZc-NS8e-Kl-J2-Zaces-C6i-Ug-ZTgg-Kov5m0-Yzoh-UHNSLs-JP4-Maq-GWOUv-KA-p5-J8-Y2dok-Br-Kn-Onk.jpg" },
    { id: 165, name: "Lesehan Dapur Selaparang Lombok", lat: -8.560861004649217, lng: 116.10680807116427, category: "culinary", region: "kota-mataram", price: "Rp15.000 – Rp60.000", hours: "10:00 - 22:00 WITA", image: "https://i.ibb.co.com/23PfWTjN/AF1-Qip-Opg-I2o-E5z-T69-OEGVG1pxd9nj-SZ7-VLyks-IAH-T-s900-k.jpg" },
    { id: 166, name: "Seafood Ikan Bakar 99", lat: -8.590421795763545, lng: 116.12489394232855, category: "culinary", region: "kota-mataram", price: "Rp44.000", hours: "10:00 - 22:00 WITA", image: "https://i.ibb.co.com/d4gR1Hg7/AMBA38tpbfw-Nq-C32kv-U0hcp6-FMaf-Oq-Yv-Ih-Ujv-VPi3y-L6-Wwe3fff-Ip-Y7t-A-xs6n-Tmk7um-R0-Ex-CNq-x-Htuz-HN.jpg" },
    { id: 167, name: "Rumah Makan Taliwang Kania", lat: -8.589294587243591, lng: 116.12506789999999, category: "culinary", region: "kota-mataram", price: "Rp40.000", hours: "08:30 - 21:00 WITA", image: "https://i.ibb.co.com/qG7K0SF/AG0il-Sye-DGdvv5nq5d1d8i-M5d06b9-JUr-YZvpg6-A3-X6-Aw-ZDqd-Uh-G1f3zr0u-RStl8-Zk9-RBFJr-ESs-S27-Id-CZVjhznvzn.jpg" },
    { id: 168, name: "Dapoer Sasak Restaurant", lat: -8.570642422564813, lng: 116.10234410000001, category: "culinary", region: "kota-mataram", price: "Rp22.000 - Rp75.000", hours: "10:00 - 22:00 WITA", image: "https://i.ibb.co.com/pjkvNj4h/AF1-Qip-Po-Tk-I0-Rpfq-JQ7-HUHouca-VD-Ec-XQH8-M-SZRr-IW8-s900-k.jpg"},
    { id: 169, name: "Taliwang Alam Nyaman Kebon Roek", lat: -8.565834504579877, lng: 116.0813197, category: "culinary", region: "kota-mataram", price: "Rp50.000", hours: "09:00 - 22:00 WITA", image: "https://i.ibb.co.com/x8qYmWd2/AMBA38ty-Fy3-VDTOVhn0-y-Lfj-YRc-Z808-G4-Wqsxg-OMf-RUXp0-GKXz-V9fk-Q-Xy94-APr-ECr-OHLw-Dh-B9qyvp-Ukp-S-u-A.jpg" },
    { id: 170, name: "Padi Food Center", lat: -8.59255277896755, lng: 116.0959602, category: "culinary", region: "kota-mataram", price: "Rp6.000 - Rp300.000", hours: "10:00 - 22:00 WITA", image: "https://i.ibb.co.com/WWppt23T/AG0il-Sxq3-Milr-H-d-Uw-BKo-Uu-SFN5-W911f-Ze-KKfl1yjh-Yt-SE7-JTftd2-Xb0-AMGZxtc-PAr7-WMWUsx1-WPb-Vj3n-Z26e-X.jpg" }
];

// ==================== MULTI-LANGUAGE SUPPORT ====================
const translations = {
    id: {
        // Navigation
        nav_home: "Beranda",
        nav_features: "Fitur",
        nav_destinations: "Destinasi",
        nav_stats: "Statistik",
        nav_map: "Peta Live",
        nav_reviews: "Ulasan",
        nav_contact: "Kontak",
        
        // Hero Section
        hero_title: "Dashboard Live Lombok",
        hero_subtitle: "Statistik pariwisata real-time dengan pelacakan kerumunan langsung. Rencanakan dengan lebih cerdas menggunakan heatmap interaktif kami! 🌴📊",
        hero_explore: "Jelajahi Destinasi",
        
        // Features Section
        features_title: "Fitur Real-Time",
        features_subtitle: "Sistem monitoring pariwisata cerdas untuk perencanaan perjalanan yang lebih baik",
        
        // Destinations Section
        destinations_title: "Destinasi Unggulan",
        destinations_subtitle: "Jelajahi tempat-tempat paling menakjubkan yang ditawarkan Lombok",
        destinations_loading: "Memuat destinasi menakjubkan...",
        search_placeholder: "🔍 Cari destinasi...",
        category_all: "Semua Destinasi",
        category_lombok_tengah: "Lombok Tengah",
        category_lombok_barat: "Lombok Barat",
        category_lombok_timur: "Lombok Timur",
        category_lombok_utara: "Lombok Utara",
        category_kota_mataram: "Kota Mataram",
        
        // Destination Categories
        category_beach: "Pantai",
        category_mountain: "Gunung/Bukit",
        category_waterfall: "Air Terjun",
        category_nature: "Alam",
        category_culture: "Budaya",
        category_culinary: "Kuliner",
        
        // Statistics Section
        statistics_title: "Statistik Real-Time",
        statistics_subtitle: "Pantau tingkat kerumunan dan pola pengunjung di destinasi populer Lombok",
        stat_total_visitors: "Total Pengunjung",
        stat_avg_traffic: "Rata-rata Traffic",
        stat_most_crowded: "Paling Ramai",
        stat_least_crowded: "Paling Sepi",
        current_visitors: "Pengunjung Saat Ini",
        capacity: "Kapasitas",
        last_updated: "Terakhir Diperbarui",
        
        // Map Section
        map_title: "Live Traffic Heatmap",
        map_subtitle: "Visualisasi kerumunan real-time dengan level traffic berwarna",
        legend_title: "Legenda Traffic (Live Map)",
        legend_low: "Sepi (0-20)",
        legend_medium: "Sedang (20-50)",
        legend_high: "Ramai (50-100)",
        legend_very_high: "Sangat Ramai (100+)",
        
        // Route Planning
        map_route_title: "Rencanakan Rute Anda",
        map_start_location: "Lokasi Awal",
        map_destination: "Destinasi",
        map_choose_destination: "Pilih destinasi...",
        map_traffic_info: "Info Traffic Live",
        map_low_traffic: "Traffic Rendah",
        map_high_traffic: "Traffic Tinggi",
        
        // Reviews Section
        reviews_title: "Pengalaman Traveler",
        reviews_subtitle: "Lihat apa yang dikatakan petualang tentang perjalanan mereka di Lombok",
        reviews_share: "Bagikan Cerita Anda",
        reviews_name: "Nama Anda",
        reviews_destination: "Destinasi",
        reviews_choose: "Pilih destinasi...",
        reviews_rating: "Rating Anda",
        reviews_experience: "Pengalaman Anda",
        reviews_submit: "Bagikan Pengalaman Anda",
        helpful: "Membantu",
        share: "Bagikan",
        
        // Footer
        footer_title: "Visit Lombok",
        footer_desc: "Panduan utama Anda untuk menjelajahi keajaiban alam dan harta budaya Pulau Lombok. Mulai petualangan Anda hari ini!",
        footer_links: "Tautan Cepat",
        footer_contact: "Info Kontak",
        footer_support: "Dukungan Pelanggan 24/7",
        footer_crafted: "Dibuat dengan ❤️ untuk para petualang.",
        footer_rights: "Semua hak dilindungi.",
        
        // Buttons
        btn_refresh: "Perbarui Data",
        btn_get_directions: "Dapatkan Rute",
        btn_clear: "Hapus",
        btn_detect_location: "Deteksi Lokasi",
        btn_view_map: "Lihat di Peta",
        btn_check_in: "Check-in",
        
        // Region Filters
        region_all: "Semua Wilayah",
        region_central: "Lombok Tengah",
        region_west: "Lombok Barat",
        region_east: "Lombok Timur",
        region_north: "Lombok Utara",
        region_mataram: "Kota Mataram",
        
        // Traffic Filters
        traffic_all: "Semua Level",
        traffic_low: "Rendah",
        traffic_medium: "Sedang",
        traffic_high: "Tinggi",
        traffic_very_high: "Sangat Tinggi",
        
        // Price & Hours
        price_free: "Gratis",
        price_donation: "Donasi",
        price_variable: "Bervariasi",
        hours_24: "24 jam",
        hours_24_wita: "24 jam WITA",
        
        // Labels
        location: "Lokasi",
        rating_text: "Rating",
        price_label: "Harga",
        hours_label: "Jam Operasional",
        region_label: "Wilayah",
        category_label: "Kategori",
        
        // No Results
        no_results: "Tidak ada destinasi ditemukan",
        try_again: "Coba kata kunci atau kategori yang berbeda"
    },
    en: {
        // Navigation
        nav_home: "Home",
        nav_features: "Features",
        nav_destinations: "Destinations",
        nav_stats: "Statistics",
        nav_map: "Live Map",
        nav_reviews: "Reviews",
        nav_contact: "Contact",
        
        // Hero Section
        hero_title: "Lombok Live Dashboard",
        hero_subtitle: "Real-time tourism statistics with live crowd tracking. Plan smarter with our interactive heatmap! 🌴📊",
        hero_explore: "Explore Destinations",
        
        // Features Section
        features_title: "Real-Time Features",
        features_subtitle: "Smart tourism monitoring system for better travel planning",
        
        // Destinations Section
        destinations_title: "Featured Destinations",
        destinations_subtitle: "Explore the most breathtaking spots that Lombok has to offer",
        destinations_loading: "Loading amazing destinations...",
        search_placeholder: "🔍 Search destinations...",
        category_all: "All Destinations",
        category_lombok_tengah: "Central Lombok",
        category_lombok_barat: "West Lombok",
        category_lombok_timur: "East Lombok",
        category_lombok_utara: "North Lombok",
        category_kota_mataram: "Mataram City",
        
        // Destination Categories
        category_beach: "Beach",
        category_mountain: "Mountain/Hill",
        category_waterfall: "Waterfall",
        category_nature: "Nature",
        category_culture: "Culture",
        category_culinary: "Culinary",
        
        // Statistics Section
        statistics_title: "Real-time Statistics",
        statistics_subtitle: "Monitor crowd levels and visitor patterns across Lombok's top destinations",
        stat_total_visitors: "Total Visitors",
        stat_avg_traffic: "Average Traffic",
        stat_most_crowded: "Most Crowded",
        stat_least_crowded: "Least Crowded",
        current_visitors: "Current Visitors",
        capacity: "Capacity",
        last_updated: "Last Updated",
        
        // Map Section
        map_title: "Live Traffic Heatmap",
        map_subtitle: "Real-time crowd visualization with color-coded traffic levels",
        legend_title: "Traffic Legend (Live Map)",
        legend_low: "Low (0-20)",
        legend_medium: "Medium (20-50)",
        legend_high: "High (50-100)",
        legend_very_high: "Very High (100+)",
        
        // Route Planning
        map_route_title: "Plan Your Route",
        map_start_location: "Start Location",
        map_destination: "Destination",
        map_choose_destination: "Choose destination...",
        map_traffic_info: "Live Traffic Info",
        map_low_traffic: "Low Traffic",
        map_high_traffic: "High Traffic",
        
        // Reviews Section
        reviews_title: "Traveler Experiences",
        reviews_subtitle: "See what adventurers are saying about their Lombok journey",
        reviews_share: "Share Your Story",
        reviews_name: "Your Name",
        reviews_destination: "Destination",
        reviews_choose: "Choose destination...",
        reviews_rating: "Your Rating",
        reviews_experience: "Your Experience",
        reviews_submit: "Share Your Experience",
        helpful: "Helpful",
        share: "Share",
        
        // Footer
        footer_title: "Visit Lombok",
        footer_desc: "Your ultimate guide to exploring the natural wonders and cultural treasures of Lombok Island. Start your adventure today!",
        footer_links: "Quick Links",
        footer_contact: "Contact Info",
        footer_support: "24/7 Customer Support",
        footer_crafted: "Crafted with ❤️ for adventure seekers.",
        footer_rights: "All rights reserved.",
        
        // Buttons
        btn_refresh: "Refresh Data",
        btn_get_directions: "Get Directions",
        btn_clear: "Clear",
        btn_detect_location: "Detect My Location",
        btn_view_map: "View on Map",
        btn_check_in: "Check-in",
        
        // Region Filters
        region_all: "All Regions",
        region_central: "Central Lombok",
        region_west: "West Lombok",
        region_east: "East Lombok",
        region_north: "North Lombok",
        region_mataram: "Mataram City",
        
        // Traffic Filters
        traffic_all: "All Levels",
        traffic_low: "Low",
        traffic_medium: "Medium",
        traffic_high: "High",
        traffic_very_high: "Very High",
        
        // Price & Hours
        price_free: "Free",
        price_donation: "Donation",
        price_variable: "Variable",
        hours_24: "24 hours",
        hours_24_wita: "24 hours",
        
        // Labels
        location: "Location",
        rating_text: "Rating",
        price_label: "Price",
        hours_label: "Opening Hours",
        region_label: "Region",
        category_label: "Category",
        
        // No Results
        no_results: "No destinations found",
        try_again: "Try different keywords or categories"
    },
    fr: {
        // Navigation
        nav_home: "Accueil",
        nav_features: "Fonctionnalités",
        nav_destinations: "Destinations",
        nav_stats: "Statistiques",
        nav_map: "Carte Live",
        nav_reviews: "Avis",
        nav_contact: "Contact",
        
        // Hero Section
        hero_title: "Tableau de Bord Live Lombok",
        hero_subtitle: "Statistiques touristiques en temps réel avec suivi des foules. Planifiez plus intelligemment avec notre heatmap interactif ! 🌴📊",
        hero_explore: "Explorer les Destinations",
        
        // Features Section
        features_title: "Fonctionnalités Temps Réel",
        features_subtitle: "Système de surveillance touristique intelligent pour une meilleure planification",
        
        // Destinations Section
        destinations_title: "Destinations Phares",
        destinations_subtitle: "Explorez les endroits les plus époustouflants que Lombok a à offrir",
        destinations_loading: "Chargement des destinations...",
        search_placeholder: "🔍 Rechercher destinations...",
        category_all: "Toutes les destinations",
        category_lombok_tengah: "Lombok central",
        category_lombok_barat: "Lombok occidental",
        category_lombok_timur: "Lombok oriental",
        category_lombok_utara: "Lombok septentrional",
        category_kota_mataram: "Ville de Mataram",
        
        // Destination Categories
        category_beach: "Plage",
        category_mountain: "Montagne/Colline",
        category_waterfall: "Cascade",
        category_nature: "Nature",
        category_culture: "Culture",
        category_culinary: "Culinaire",
        
        // Statistics Section
        statistics_title: "Statistiques en temps réel",
        statistics_subtitle: "Surveillez les niveaux de foule et les modèles de visiteurs dans les meilleures destinations de Lombok",
        stat_total_visitors: "Total Visiteurs",
        stat_avg_traffic: "Trafic Moyen",
        stat_most_crowded: "Plus Bondé",
        stat_least_crowded: "Moins Bondé",
        current_visitors: "Visiteurs Actuels",
        capacity: "Capacité",
        last_updated: "Dernière mise à jour",
        
        // Map Section
        map_title: "Carte de Trafic en Direct",
        map_subtitle: "Visualisation des foules en temps réel avec niveaux de trafic colorés",
        legend_title: "Légende du trafic (Carte Live)",
        legend_low: "Faible (0-20)",
        legend_medium: "Moyen (20-50)",
        legend_high: "Élevé (50-100)",
        legend_very_high: "Très élevé (100+)",
        
        // Route Planning
        map_route_title: "Planifier votre itinéraire",
        map_start_location: "Lieu de départ",
        map_destination: "Destination",
        map_choose_destination: "Choisir destination...",
        map_traffic_info: "Info Trafic en Direct",
        map_low_traffic: "Trafic Faible",
        map_high_traffic: "Trafic Élevé",
        
        // Reviews Section
        reviews_title: "Expériences de Voyageurs",
        reviews_subtitle: "Découvrez ce que disent les aventuriers de leur voyage à Lombok",
        reviews_share: "Partager votre Histoire",
        reviews_name: "Votre Nom",
        reviews_destination: "Destination",
        reviews_choose: "Choisir destination...",
        reviews_rating: "Votre Note",
        reviews_experience: "Votre Expérience",
        reviews_submit: "Partager votre Expérience",
        helpful: "Utile",
        share: "Partager",
        
        // Footer
        footer_title: "Visitez Lombok",
        footer_desc: "Votre guide ultime pour explorer les merveilles naturelles et les trésors culturels de l'île de Lombok. Commencez votre aventure aujourd'hui !",
        footer_links: "Liens Rapides",
        footer_contact: "Informations Contact",
        footer_support: "Support 24/7",
        footer_crafted: "Créé avec ❤️ pour les aventuriers.",
        footer_rights: "Tous droits réservés.",
        
        // Buttons
        btn_refresh: "Actualiser",
        btn_get_directions: "Obtenir l'itinéraire",
        btn_clear: "Effacer",
        btn_detect_location: "Détecter ma position",
        btn_view_map: "Voir sur la carte",
        btn_check_in: "Enregistrement",
        
        // Region Filters
        region_all: "Toutes les régions",
        region_central: "Lombok central",
        region_west: "Lombok occidental",
        region_east: "Lombok oriental",
        region_north: "Lombok septentrional",
        region_mataram: "Ville de Mataram",
        
        // Traffic Filters
        traffic_all: "Tous les niveaux",
        traffic_low: "Faible",
        traffic_medium: "Moyen",
        traffic_high: "Élevé",
        traffic_very_high: "Très élevé",
        
        // Price & Hours
        price_free: "Gratuit",
        price_donation: "Donation",
        price_variable: "Variable",
        hours_24: "24 heures",
        hours_24_wita: "24 heures",
        
        // Labels
        location: "Emplacement",
        rating_text: "Évaluation",
        price_label: "Prix",
        hours_label: "Horaires d'ouverture",
        region_label: "Région",
        category_label: "Catégorie",
        
        // No Results
        no_results: "Aucune destination trouvée",
        try_again: "Essayez des mots-clés ou catégories différents"
    },
    de: {
        // Navigation
        nav_home: "Startseite",
        nav_features: "Funktionen",
        nav_destinations: "Ziele",
        nav_stats: "Statistiken",
        nav_map: "Live-Karte",
        nav_reviews: "Bewertungen",
        nav_contact: "Kontakt",
        
        // Hero Section
        hero_title: "Lombok Live-Dashboard",
        hero_subtitle: "Echtzeit-Tourismusstatistiken mit Live-Besucherverfolgung. Planen Sie intelligenter mit unserer interaktiven Heatmap! 🌴📊",
        hero_explore: "Ziele erkunden",
        
        // Features Section
        features_title: "Echtzeit-Funktionen",
        features_subtitle: "Intelligentes Tourismus-Monitoring-System für bessere Reiseplanung",
        
        // Destinations Section
        destinations_title: "Empfohlene Ziele",
        destinations_subtitle: "Entdecken Sie die atemberaubendsten Orte, die Lombok zu bieten hat",
        destinations_loading: "Lade erstaunliche Ziele...",
        search_placeholder: "🔍 Ziele suchen...",
        category_all: "Alle Ziele",
        category_lombok_tengah: "Zentral-Lombok",
        category_lombok_barat: "West-Lombok",
        category_lombok_timur: "Ost-Lombok",
        category_lombok_utara: "Nord-Lombok",
        category_kota_mataram: "Mataram Stadt",
        
        // Destination Categories
        category_beach: "Strand",
        category_mountain: "Berg/Hügel",
        category_waterfall: "Wasserfall",
        category_nature: "Natur",
        category_culture: "Kultur",
        category_culinary: "Kulinarik",
        
        // Statistics Section
        statistics_title: "Echtzeit-Statistiken",
        statistics_subtitle: "Überwachen Sie Besuchermengen und Besuchermuster in Lomboks Top-Zielen",
        stat_total_visitors: "Gesamtbesucher",
        stat_avg_traffic: "Durchschnittlicher Verkehr",
        stat_most_crowded: "Am stärksten besucht",
        stat_least_crowded: "Am wenigsten besucht",
        current_visitors: "Aktuelle Besucher",
        capacity: "Kapazität",
        last_updated: "Zuletzt aktualisiert",
        
        // Map Section
        map_title: "Live-Verkehrs-Heatmap",
        map_subtitle: "Echtzeit-Besuchervisualisierung mit farbcodierten Verkehrsstufen",
        legend_title: "Verkehrslegende (Live-Karte)",
        legend_low: "Niedrig (0-20)",
        legend_medium: "Mittel (20-50)",
        legend_high: "Hoch (50-100)",
        legend_very_high: "Sehr hoch (100+)",
        
        // Route Planning
        map_route_title: "Planen Sie Ihre Route",
        map_start_location: "Startort",
        map_destination: "Ziel",
        map_choose_destination: "Ziel wählen...",
        map_traffic_info: "Live-Verkehrsinfo",
        map_low_traffic: "Wenig Verkehr",
        map_high_traffic: "Starker Verkehr",
        
        // Reviews Section
        reviews_title: "Reisenderlebnisse",
        reviews_subtitle: "Sehen Sie, was Abenteurer über ihre Lombok-Reise sagen",
        reviews_share: "Teilen Sie Ihre Geschichte",
        reviews_name: "Ihr Name",
        reviews_destination: "Ziel",
        reviews_choose: "Ziel wählen...",
        reviews_rating: "Ihre Bewertung",
        reviews_experience: "Ihre Erfahrung",
        reviews_submit: "Erfahrung teilen",
        helpful: "Hilfreich",
        share: "Teilen",
        
        // Footer
        footer_title: "Besuchen Sie Lombok",
        footer_desc: "Ihr ultimativer Leitfaden zur Erkundung der Naturwunder und Kulturschätze der Insel Lombok. Beginnen Sie noch heute Ihr Abenteuer!",
        footer_links: "Schnelllinks",
        footer_contact: "Kontaktinformationen",
        footer_support: "24/7 Kundensupport",
        footer_crafted: "Mit ❤️ für Abenteuersuchende erstellt.",
        footer_rights: "Alle Rechte vorbehalten.",
        
        // Buttons
        btn_refresh: "Aktualisieren",
        btn_get_directions: "Route berechnen",
        btn_clear: "Löschen",
        btn_detect_location: "Standort ermitteln",
        btn_view_map: "Auf Karte anzeigen",
        btn_check_in: "Einchecken",
        
        // Region Filters
        region_all: "Alle Regionen",
        region_central: "Zentral-Lombok",
        region_west: "West-Lombok",
        region_east: "Ost-Lombok",
        region_north: "Nord-Lombok",
        region_mataram: "Mataram Stadt",
        
        // Traffic Filters
        traffic_all: "Alle Stufen",
        traffic_low: "Niedrig",
        traffic_medium: "Mittel",
        traffic_high: "Hoch",
        traffic_very_high: "Sehr hoch",
        
        // Price & Hours
        price_free: "Kostenlos",
        price_donation: "Spende",
        price_variable: "Variabel",
        hours_24: "24 Stunden",
        hours_24_wita: "24 Stunden",
        
        // Labels
        location: "Standort",
        rating_text: "Bewertung",
        price_label: "Preis",
        hours_label: "Öffnungszeiten",
        region_label: "Region",
        category_label: "Kategorie",
        
        // No Results
        no_results: "Keine Ziele gefunden",
        try_again: "Versuchen Sie andere Schlüsselwörter oder Kategorien"
    },
    ja: {
        // Navigation
        nav_home: "ホーム",
        nav_features: "機能",
        nav_destinations: "目的地",
        nav_stats: "統計",
        nav_map: "ライブマップ",
        nav_reviews: "レビュー",
        nav_contact: "お問い合わせ",
        
        // Hero Section
        hero_title: "ロンボクライブダッシュボード",
        hero_subtitle: "ライブ混雑追跡機能付きリアルタイム観光統計。インタラクティブヒートマップでスマートに計画しよう！🌴📊",
        hero_explore: "目的地を探索",
        
        // Features Section
        features_title: "リアルタイム機能",
        features_subtitle: "より良い旅行計画のためのスマート観光モニタリングシステム",
        
        // Destinations Section
        destinations_title: "おすすめ目的地",
        destinations_subtitle: "ロンボクが提供する最も息を呑むようなスポットを探索",
        destinations_loading: "素晴らしい目的地を読み込み中...",
        search_placeholder: "🔍 目的地を検索...",
        category_all: "すべての目的地",
        category_lombok_tengah: "中央ロンボク",
        category_lombok_barat: "西ロンボク",
        category_lombok_timur: "東ロンボク",
        category_lombok_utara: "北ロンボク",
        category_kota_mataram: "マタラム市",
        
        // Destination Categories
        category_beach: "ビーチ",
        category_mountain: "山/丘",
        category_waterfall: "滝",
        category_nature: "自然",
        category_culture: "文化",
        category_culinary: "グルメ",
        
        // Statistics Section
        statistics_title: "リアルタイム統計",
        statistics_subtitle: "ロンボクの人気目的地での混雑状況と訪問者パターンを監視",
        stat_total_visitors: "総訪問者数",
        stat_avg_traffic: "平均交通量",
        stat_most_crowded: "最も混雑",
        stat_least_crowded: "最も混雑していない",
        current_visitors: "現在の訪問者",
        capacity: "収容人数",
        last_updated: "最終更新",
        
        // Map Section
        map_title: "ライブ交通ヒートマップ",
        map_subtitle: "色分けされた交通レベルのリアルタイム混雑可視化",
        legend_title: "交通凡例（ライブマップ）",
        legend_low: "低（0-20）",
        legend_medium: "中（20-50）",
        legend_high: "高（50-100）",
        legend_very_high: "非常に高い（100+）",
        
        // Route Planning
        map_route_title: "ルートを計画する",
        map_start_location: "出発地",
        map_destination: "目的地",
        map_choose_destination: "目的地を選択...",
        map_traffic_info: "ライブ交通情報",
        map_low_traffic: "低交通量",
        map_high_traffic: "高交通量",
        
        // Reviews Section
        reviews_title: "旅行者体験",
        reviews_subtitle: "冒険家たちのロンボク旅行談を見る",
        reviews_share: "あなたの話を共有",
        reviews_name: "お名前",
        reviews_destination: "目的地",
        reviews_choose: "目的地を選択...",
        reviews_rating: "評価",
        reviews_experience: "体験",
        reviews_submit: "体験を共有",
        helpful: "役立つ",
        share: "共有",
        
        // Footer
        footer_title: "ロンボクを訪れる",
        footer_desc: "ロンボク島の自然の驚異と文化的宝物を探索する究極のガイド。今日から冒険を始めよう！",
        footer_links: "クイックリンク",
        footer_contact: "連絡先情報",
        footer_support: "24/7 カスタマーサポート",
        footer_crafted: "冒険を求める人々のために ❤️ で作成されました。",
        footer_rights: "全著作権所有。",
        
        // Buttons
        btn_refresh: "更新",
        btn_get_directions: "ルートを取得",
        btn_clear: "クリア",
        btn_detect_location: "位置を検出",
        btn_view_map: "地図で見る",
        btn_check_in: "チェックイン",
        
        // Region Filters
        region_all: "すべての地域",
        region_central: "中央ロンボク",
        region_west: "西ロンボク",
        region_east: "東ロンボク",
        region_north: "北ロンボク",
        region_mataram: "マタラム市",
        
        // Traffic Filters
        traffic_all: "すべてのレベル",
        traffic_low: "低",
        traffic_medium: "中",
        traffic_high: "高",
        traffic_very_high: "非常に高い",
        
        // Price & Hours
        price_free: "無料",
        price_donation: "寄付",
        price_variable: "変動",
        hours_24: "24時間",
        hours_24_wita: "24時間",
        
        // Labels
        location: "場所",
        rating_text: "評価",
        price_label: "価格",
        hours_label: "営業時間",
        region_label: "地域",
        category_label: "カテゴリー",
        
        // No Results
        no_results: "目的地が見つかりません",
        try_again: "別のキーワードやカテゴリをお試しください"
    },
    ko: {
        // Navigation
        nav_home: "홈",
        nav_features: "기능",
        nav_destinations: "목적지",
        nav_stats: "통계",
        nav_map: "실시간 지도",
        nav_reviews: "리뷰",
        nav_contact: "연락처",
        
        // Hero Section
        hero_title: "롬복 실시간 대시보드",
        hero_subtitle: "실시간 관광 통계 및 군중 추적 기능. 인터랙티브 히트맵으로 더 똑똑하게 계획하세요! 🌴📊",
        hero_explore: "목적지 탐색",
        
        // Features Section
        features_title: "실시간 기능",
        features_subtitle: "더 나은 여행 계획을 위한 스마트 관광 모니터링 시스템",
        
        // Destinations Section
        destinations_title: "추천 목적지",
        destinations_subtitle: "롬복에서 제공하는 가장 숨막히는 장소를 탐험하세요",
        destinations_loading: "멋진 목적지 로드 중...",
        search_placeholder: "🔍 목적지 검색...",
        category_all: "모든 목적지",
        category_lombok_tengah: "중앙 롬복",
        category_lombok_barat: "서부 롬복",
        category_lombok_timur: "동부 롬복",
        category_lombok_utara: "북부 롬복",
        category_kota_mataram: "마타람 시",
        
        // Destination Categories
        category_beach: "해변",
        category_mountain: "산/언덕",
        category_waterfall: "폭포",
        category_nature: "자연",
        category_culture: "문화",
        category_culinary: "음식",
        
        // Statistics Section
        statistics_title: "실시간 통계",
        statistics_subtitle: "롬복의 인기 목적지에서 군중 수준과 방문자 패턴 모니터링",
        stat_total_visitors: "총 방문자",
        stat_avg_traffic: "평균 교통량",
        stat_most_crowded: "가장 붐빔",
        stat_least_crowded: "가장 한적함",
        current_visitors: "현재 방문자",
        capacity: "수용량",
        last_updated: "최근 업데이트",
        
        // Map Section
        map_title: "실시간 교통 히트맵",
        map_subtitle: "색상으로 구분된 교통 수준의 실시간 군중 시각화",
        legend_title: "교통 범례 (실시간 지도)",
        legend_low: "낮음 (0-20)",
        legend_medium: "중간 (20-50)",
        legend_high: "높음 (50-100)",
        legend_very_high: "매우 높음 (100+)",
        
        // Route Planning
        map_route_title: "루트 계획하기",
        map_start_location: "출발지",
        map_destination: "목적지",
        map_choose_destination: "목적지 선택...",
        map_traffic_info: "실시간 교통 정보",
        map_low_traffic: "적은 교통량",
        map_high_traffic: "많은 교통량",
        
        // Reviews Section
        reviews_title: "여행자 경험",
        reviews_subtitle: "모험가들이 롬복 여행에 대해 말하는 내용을 확인하세요",
        reviews_share: "이야기 공유",
        reviews_name: "이름",
        reviews_destination: "목적지",
        reviews_choose: "목적지 선택...",
        reviews_rating: "평점",
        reviews_experience: "경험",
        reviews_submit: "경험 공유",
        helpful: "도움이 됨",
        share: "공유",
        
        // Footer
        footer_title: "롬복 방문",
        footer_desc: "롬복 섬의 자연 경관과 문화적 보물을 탐험하는 최고의 가이드. 오늘 바로 모험을 시작하세요!",
        footer_links: "빠른 링크",
        footer_contact: "연락처 정보",
        footer_support: "24/7 고객 지원",
        footer_crafted: "모험을 찾는 이들을 위해 ❤️으로 제작되었습니다.",
        footer_rights: "모든 권리 보유.",
        
        // Buttons
        btn_refresh: "새로고침",
        btn_get_directions: "길찾기",
        btn_clear: "지우기",
        btn_detect_location: "위치 감지",
        btn_view_map: "지도에서 보기",
        btn_check_in: "체크인",
        
        // Region Filters
        region_all: "모든 지역",
        region_central: "중앙 롬복",
        region_west: "서부 롬복",
        region_east: "동부 롬복",
        region_north: "북부 롬복",
        region_mataram: "마타람 시",
        
        // Traffic Filters
        traffic_all: "모든 수준",
        traffic_low: "낮음",
        traffic_medium: "중간",
        traffic_high: "높음",
        traffic_very_high: "매우 높음",
        
        // Price & Hours
        price_free: "무료",
        price_donation: "기부",
        price_variable: "가변",
        hours_24: "24시간",
        hours_24_wita: "24시간",
        
        // Labels
        location: "위치",
        rating_text: "평점",
        price_label: "가격",
        hours_label: "영업 시간",
        region_label: "지역",
        category_label: "카테고리",
        
        // No Results
        no_results: "목적지를 찾을 수 없습니다",
        try_again: "다른 키워드나 카테고리를 시도해 보세요"
    },
    ru: {
        // Navigation
        nav_home: "Главная",
        nav_features: "Функции",
        nav_destinations: "Направления",
        nav_stats: "Статистика",
        nav_map: "Живая Карта",
        nav_reviews: "Отзывы",
        nav_contact: "Контакты",
        
        // Hero Section
        hero_title: "Живая Панель Ломбока",
        hero_subtitle: "Статистика туризма в реальном времени с отслеживанием скопления людей. Планируйте умнее с нашей интерактивной тепловой картой! 🌴📊",
        hero_explore: "Исследовать Направления",
        
        // Features Section
        features_title: "Функции Реального Времени",
        features_subtitle: "Умная система мониторинга туризма для лучшего планирования путешествий",
        
        // Destinations Section
        destinations_title: "Рекомендуемые Направления",
        destinations_subtitle: "Исследуйте самые захватывающие места, которые предлагает Ломбок",
        destinations_loading: "Загрузка удивительных направлений...",
        search_placeholder: "🔍 Поиск направлений...",
        category_all: "Все направления",
        category_lombok_tengah: "Центральный Ломбок",
        category_lombok_barat: "Западный Ломбок",
        category_lombok_timur: "Восточный Ломбок",
        category_lombok_utara: "Северный Ломбок",
        category_kota_mataram: "Город Матарам",
        
        // Destination Categories
        category_beach: "Пляж",
        category_mountain: "Гора/Холм",
        category_waterfall: "Водопад",
        category_nature: "Природа",
        category_culture: "Культура",
        category_culinary: "Кулинария",
        
        // Statistics Section
        statistics_title: "Статистика в реальном времени",
        statistics_subtitle: "Мониторинг уровня скопления людей и моделей посетителей на популярных направлениях Ломбока",
        stat_total_visitors: "Всего посетителей",
        stat_avg_traffic: "Средний трафик",
        stat_most_crowded: "Самый переполненный",
        stat_least_crowded: "Наименее переполненный",
        current_visitors: "Текущие посетители",
        capacity: "Вместимость",
        last_updated: "Последнее обновление",
        
        // Map Section
        map_title: "Живая Тепловая Карта",
        map_subtitle: "Визуализация скопления людей в реальном времени с цветовой кодировкой уровней трафика",
        legend_title: "Легенда трафика (живая карта)",
        legend_low: "Низкий (0-20)",
        legend_medium: "Средний (20-50)",
        legend_high: "Высокий (50-100)",
        legend_very_high: "Очень высокий (100+)",
        
        // Route Planning
        map_route_title: "Планируйте свой маршрут",
        map_start_location: "Место отправления",
        map_destination: "Направление",
        map_choose_destination: "Выбрать направление...",
        map_traffic_info: "Информация о трафике в реальном времени",
        map_low_traffic: "Низкий трафик",
        map_high_traffic: "Высокий трафик",
        
        // Reviews Section
        reviews_title: "Опыт Путешественников",
        reviews_subtitle: "Посмотрите, что говорят искатели приключений о своем путешествии по Ломбоку",
        reviews_share: "Поделиться Историей",
        reviews_name: "Ваше Имя",
        reviews_destination: "Направление",
        reviews_choose: "Выбрать направление...",
        reviews_rating: "Ваша Оценка",
        reviews_experience: "Ваш Опыт",
        reviews_submit: "Поделиться Опытом",
        helpful: "Полезно",
        share: "Поделиться",
        
        // Footer
        footer_title: "Посетите Ломбок",
        footer_desc: "Ваш главный гид по исследованию природных чудес и культурных сокровищ острова Ломбок. Начните свое приключение сегодня!",
        footer_links: "Быстрые Ссылки",
        footer_contact: "Контактная Информация",
        footer_support: "Круглосуточная Поддержка",
        footer_crafted: "Создано с ❤️ для искателей приключений.",
        footer_rights: "Все права защищены.",
        
        // Buttons
        btn_refresh: "Обновить",
        btn_get_directions: "Получить маршрут",
        btn_clear: "Очистить",
        btn_detect_location: "Определить местоположение",
        btn_view_map: "Посмотреть на карте",
        btn_check_in: "Регистрация",
        
        // Region Filters
        region_all: "Все регионы",
        region_central: "Центральный Ломбок",
        region_west: "Западный Ломбок",
        region_east: "Восточный Ломбок",
        region_north: "Северный Ломбок",
        region_mataram: "Город Матарам",
        
        // Traffic Filters
        traffic_all: "Все уровни",
        traffic_low: "Низкий",
        traffic_medium: "Средний",
        traffic_high: "Высокий",
        traffic_very_high: "Очень высокий",
        
        // Price & Hours
        price_free: "Бесплатно",
        price_donation: "Пожертвование",
        price_variable: "Переменная",
        hours_24: "24 часа",
        hours_24_wita: "24 часа",
        
        // Labels
        location: "Местоположение",
        rating_text: "Рейтинг",
        price_label: "Цена",
        hours_label: "Часы работы",
        region_label: "Регион",
        category_label: "Категория",
        
        // No Results
        no_results: "Направления не найдены",
        try_again: "Попробуйте другие ключевые слова или категории"
    }
};

// ==================== API MOCK SYSTEM ====================
// Statistics storage
let destinationStatistics = JSON.parse(localStorage.getItem('lombok-destination-stats')) || {};

// Initialize statistics for all destinations
function initializeDestinationStats() {
    lombokDestinations.forEach(dest => {
        if (!destinationStatistics[dest.id]) {
            const baseTraffic = Math.floor(Math.random() * 100) + 20;
            const currentHour = new Date().getHours();
            const isPeakHour = (currentHour >= 9 && currentHour <= 18);
            
            destinationStatistics[dest.id] = {
                id: dest.id,
                name: dest.name,
                totalVisits: baseTraffic + (isPeakHour ? 50 : 0),
                todayVisits: Math.floor(Math.random() * 30) + 5,
                currentVisitors: Math.floor(Math.random() * 50) + 1,
                peakHourVisitors: isPeakHour ? Math.floor(Math.random() * 100) + 30 : Math.floor(Math.random() * 30) + 5,
                lastUpdated: new Date().toISOString(),
                popularityScore: calculatePopularityScore(dest)
            };
        }
    });
    saveStatsToLocalStorage();
}

function calculatePopularityScore(destination) {
    let score = 50;
    const categoryBonus = {
        'beach': 30, 'mountain': 25, 'waterfall': 20, 
        'culture': 15, 'culinary': 25, 'nature': 20
    };
    
    score += categoryBonus[destination.category] || 0;
    
    if (destination.region.includes('lombok-tengah') || destination.region.includes('lombok-utara')) {
        score += 20;
    }
    
    if (!destination.price || destination.price.includes('Free') || destination.price.includes('Gratis')) {
        score += 15;
    }
    
    return Math.min(score, 100);
}

function saveStatsToLocalStorage() {
    localStorage.setItem('lombok-destination-stats', JSON.stringify(destinationStatistics));
}

// Traffic level calculation
function calculateTrafficLevel(visitorCount) {
    if (visitorCount < 20) return { level: 'low', color: 'var(--traffic-low)', label: 'Sepi', icon: '🟢' };
    if (visitorCount < 50) return { level: 'medium', color: 'var(--traffic-medium)', label: 'Sedang', icon: '🟡' };
    if (visitorCount < 100) return { level: 'high', color: 'var(--traffic-high)', label: 'Ramai', icon: '🔴' };
    return { level: 'very-high', color: 'var(--traffic-very-high)', label: 'Sangat Ramai', icon: '🔥' };
}

// Mock API Object
const mockAPI = {
    // Get real-time statistics for a destination
    getDestinationStats: function(destinationId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const stats = destinationStatistics[destinationId];
                if (!stats) return resolve(null);
                
                const currentHour = new Date().getHours();
                const isPeakHour = (currentHour >= 9 && currentHour <= 18);
                const fluctuation = Math.floor(Math.random() * 20) - 10;
                
                stats.currentVisitors = Math.max(1, 
                    Math.floor(stats.peakHourVisitors * (isPeakHour ? 0.8 : 0.3)) + fluctuation
                );
                
                stats.todayVisits += Math.floor(Math.random() * 5);
                stats.totalVisits += Math.floor(Math.random() * 3);
                stats.lastUpdated = new Date().toISOString();
                
                resolve(stats);
            }, 300);
        });
    },
    
    // Get all destinations with current traffic
    getAllDestinationsTraffic: function() {
        return new Promise((resolve) => {
            setTimeout(() => {
                const trafficData = lombokDestinations.map(dest => {
                    const stats = destinationStatistics[dest.id] || {};
                    return {
                        id: dest.id,
                        name: dest.name,
                        lat: dest.lat,
                        lng: dest.lng,
                        currentVisitors: stats.currentVisitors || 10,
                        trafficLevel: calculateTrafficLevel(stats.currentVisitors || 10),
                        lastUpdated: stats.lastUpdated || new Date().toISOString()
                    };
                });
                resolve(trafficData);
            }, 500);
        });
    },
    
    // Record a new visit (simulate user checking in)
    recordVisit: function(destinationId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (!destinationStatistics[destinationId]) {
                    initializeDestinationStats();
                }
                
                destinationStatistics[destinationId].todayVisits++;
                destinationStatistics[destinationId].totalVisits++;
                destinationStatistics[destinationId].currentVisitors++;
                
                saveStatsToLocalStorage();
                resolve({ success: true, message: 'Visit recorded!' });
            }, 200);
        });
    }
};

// Export variables and functions for use in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        lombokDestinations,
        translations,
        destinationStatistics,
        initializeDestinationStats,
        calculateTrafficLevel,
        mockAPI
    };
 }
