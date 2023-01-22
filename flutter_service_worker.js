'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "cd5a3f030159898623352bf78b928378",
"index.html": "97bae15067fafa4fbaf9f6252ea4309c",
"/": "97bae15067fafa4fbaf9f6252ea4309c",
"main.dart.js": "b0581c437815323349bd28b75527b31e",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5d074ce006b95c41d1dcc2856a261765",
"assets/res/Music/main_music_0.mp3": "b517cb1a86d667f056dbdfe11a6d223c",
"assets/res/Music/game_music_1.mp3": "cb0504006feac0ca56dadf98ac2f162e",
"assets/res/Music/game_music_0.mp3": "4cb7f4c77dff614158049286bc5a72c1",
"assets/res/Animation/angry_bird_3.riv": "a8762fa510fa7a0bf17acd21e8c4972b",
"assets/res/Animation/angry_bird_2.riv": "dbe8888e54c8a57cadfdd9d5e56b4fe0",
"assets/res/Animation/angry_bird_1.riv": "f406a04b22ccf335819cc01e5ed64c4e",
"assets/res/Animation/angry_bird_5.riv": "70494367230735cc941ed9a9ad6e9c2a",
"assets/res/Animation/angry_bird_4.riv": "ced4ea2d11e2a7083e82c70526342c07",
"assets/res/Animation/bigbeneng.riv": "034e68847f5dee14918cbb2c3e8bf4b5",
"assets/res/System/house.fill.png": "b4ccf71dfba3cd605cfee760414055f6",
"assets/res/System/speaker_on.png": "6afbd5770ebc5a9b0a1b3fc16ca9ca73",
"assets/res/System/heart.png": "e92b6abd2d7b661a99c8d299146e3998",
"assets/res/System/arrow.forward.png": "903a9112d621d026c81973bfcf557bb4",
"assets/res/System/heart.fill.png": "c6975c94173e38c99fbbbfa91deb3d87",
"assets/res/System/arrow.clockwise.png": "7150b04625fdb90fe1b035b9324730a0",
"assets/res/System/speaker_off.png": "fcd0df186707f9559ac35a148e542414",
"assets/res/Lesson/Room/Image/lamp_1.webp": "9f3dcd48b7ab5b04e91f51f06720922a",
"assets/res/Lesson/Room/Image/scissors_0.webp": "35adf632a8df5262d209b41a5e3dd82e",
"assets/res/Lesson/Room/Image/magazines_0.webp": "e0cedc95f6e92c50e4ac7dbedd9b891b",
"assets/res/Lesson/Room/Image/sofa_0.webp": "ee7613c66ed93819d18aa022794dcb23",
"assets/res/Lesson/Room/Image/glue_1.webp": "fcff0b885ef58414ad3732b4856a7e54",
"assets/res/Lesson/Room/Image/pillow_0.webp": "071da2876c63c481d356602fbb57680b",
"assets/res/Lesson/Room/Image/tv-set_0.webp": "beaa5c970463bad542e34f0b093d8545",
"assets/res/Lesson/Room/Image/statue_1.webp": "543c188b9887fc2e30829d67fb51d5aa",
"assets/res/Lesson/Room/Image/remote_control_1.webp": "3a88dec9fe240a28f7dbaa5fb6110b5b",
"assets/res/Lesson/Room/Image/candle_1.webp": "072f26eb9bfd79d8370156f003cdc0ba",
"assets/res/Lesson/Room/Image/painting_1.webp": "e9b003eba8e464a10ad62d8c547cb83a",
"assets/res/Lesson/Room/Image/painting_0.webp": "614d059dd208f0494352b47535eccd81",
"assets/res/Lesson/Room/Image/candle_0.webp": "0e786ae504b1283ff534a3d7ee483c9e",
"assets/res/Lesson/Room/Image/remote_control_0.webp": "821f3b1ac41f852396e23a8e0609756f",
"assets/res/Lesson/Room/Image/statue_0.webp": "022e88df547ce5af9b23e445df43baf6",
"assets/res/Lesson/Room/Image/pencil_2.webp": "1091339914bf461f6f79338b80718bac",
"assets/res/Lesson/Room/Image/glue_0.webp": "301830328e748e1b8b6a4c62536f8ef1",
"assets/res/Lesson/Room/Image/sofa_1.webp": "6ebba4fd29b38d8dd49cccc7cf2d639c",
"assets/res/Lesson/Room/Image/magazines_1.webp": "e52d13811e8be9623a00c0688e9af55e",
"assets/res/Lesson/Room/Image/lamp_0.webp": "8078eb82daae497dfa04a8882484d9aa",
"assets/res/Lesson/Room/Image/chair_0.webp": "760dc11077533afad9403130694ba8d1",
"assets/res/Lesson/Room/Image/bed_0.webp": "74342735dbfd804e152d8ccf2b258d47",
"assets/res/Lesson/Room/Image/vase_0.webp": "b9868a94d5af6b519bce50a927a22d0b",
"assets/res/Lesson/Room/Image/cot_1.webp": "5c9cf12049cb807a3f08ca69db6e2f26",
"assets/res/Lesson/Room/Image/carpet_0.webp": "7290fe91aa0959dafe13f4f2e92f4cd1",
"assets/res/Lesson/Room/Image/blanket_1.webp": "04d56a6df113c3df3df733435d10ddbb",
"assets/res/Lesson/Room/Image/newspaper_1.webp": "812603b9581eba195e70e69281b80dc6",
"assets/res/Lesson/Room/Image/pen_0.webp": "cc706fd3b59ee7f3ff44b845a2b6f901",
"assets/res/Lesson/Room/Image/cushion_0.webp": "27304a52ecac9685fd89072c8aedc611",
"assets/res/Lesson/Room/Image/pen_1.webp": "a5cd6e9e328fd8cbf954ba79d40ceac2",
"assets/res/Lesson/Room/Image/newspaper_0.webp": "3c7b336bc363f9d4b1882b09015614bd",
"assets/res/Lesson/Room/Image/blanket_0.webp": "fd424919049930f8aae01db5b71e2fbe",
"assets/res/Lesson/Room/Image/carpet_1.webp": "c7479efc9ca1e82cdb43b8f5d5e50719",
"assets/res/Lesson/Room/Image/cot_0.webp": "b3448e0e8b26d17632cd807cc57955c7",
"assets/res/Lesson/Room/Image/vase_1.webp": "c2a782233b25d8a3ad0c3d44e34b7e13",
"assets/res/Lesson/Room/Image/chair_1.webp": "01fa08653374db147652d99d0e8a3f5a",
"assets/res/Lesson/Room/Image/curtains_2.webp": "b4b4509d95aebd56e10e71b4848be79a",
"assets/res/Lesson/Room/Image/cap_0.webp": "65f5af8bd72e8aba4741c38871925f37",
"assets/res/Lesson/Room/Image/curtains_1.webp": "0fdac49c8e680bef05638263ee05cda2",
"assets/res/Lesson/Room/Image/shelf_0.webp": "3001f99639a276011d5ada89c40935ed",
"assets/res/Lesson/Room/Image/carpet_2.webp": "9da9237bced1c3a782a9c90e8aa4d441",
"assets/res/Lesson/Room/Image/blanket_2.webp": "5ecb14f40d0ebee97d5eb7d73ce40b37",
"assets/res/Lesson/Room/Image/shelf_1.webp": "8973d419b752665208b5ba6e1885ecaa",
"assets/res/Lesson/Room/Image/curtains_0.webp": "046e983e96ffd8fbcf213a6711d7f4e0",
"assets/res/Lesson/Room/Image/books_0.webp": "02e8a7cd56faaaff06532d30ee45d486",
"assets/res/Lesson/Room/Image/cap_1.webp": "17f35ab7706bc919269d1cdbd229bedd",
"assets/res/Lesson/Room/Image/socket_0.webp": "660a6eef6bfda69427a94833afb8916a",
"assets/res/Lesson/Room/Image/paper_1.webp": "1c2fbd81c224737c590cb338048d0cc9",
"assets/res/Lesson/Room/Image/armchair_1.webp": "c4e25b1bb1a761ea4d671322ef1ab0be",
"assets/res/Lesson/Room/Image/pencil_1.webp": "c23675fc322738a5b1e5eb0526110aa8",
"assets/res/Lesson/Room/Image/hanger_1.webp": "f4cc2f44ce4738e5302bc6ed65b2c014",
"assets/res/Lesson/Room/Image/clock_1.webp": "970ebce400387c82ae05455c435dd3e8",
"assets/res/Lesson/Room/Image/eraser_0.webp": "197a5a0fa1afd5a23824f89ddd852660",
"assets/res/Lesson/Room/Image/sofa_2.webp": "b5c8be35daf7cea98e98c8455270a75d",
"assets/res/Lesson/Room/Image/candle_2.webp": "d17eb2ec857fd59d46e9d48dc496e17d",
"assets/res/Lesson/Room/Image/lamp_2.webp": "4e29e06f86ef3af18c92302658fbef73",
"assets/res/Lesson/Room/Image/glue_2.webp": "d36935088c0e9822450041b7fe188e1a",
"assets/res/Lesson/Room/Image/clock_0.webp": "f80cba2a8e574010805f8e05ac88132e",
"assets/res/Lesson/Room/Image/bookcase_0.webp": "7a73d2c5ecf94658330b8fd514975e6e",
"assets/res/Lesson/Room/Image/hanger_0.webp": "0d510a964918c71d04f1d843bd8caaed",
"assets/res/Lesson/Room/Image/pencil_0.webp": "b8bda1bdbaf9c51d612af8d70db5b2d6",
"assets/res/Lesson/Room/Image/armchair_0.webp": "a4f0567a0a05c14b3d76aa8b3144ab86",
"assets/res/Lesson/Room/Image/paper_0.webp": "785efe33a9207f91a464051edba9a3dc",
"assets/res/Lesson/Room/Sound/armchair.mp3": "3882d9ed196a6ee7a6750179239231d4",
"assets/res/Lesson/Room/Sound/remote_control.mp3": "472f7f86979a502ee20155d3b4dd6898",
"assets/res/Lesson/Room/Sound/pencil.mp3": "0ffaad4fef9b2eac73186a804482231d",
"assets/res/Lesson/Room/Sound/lamp.mp3": "01eb738adf79abd0af8d7f0d020c57a0",
"assets/res/Lesson/Room/Sound/curtains.mp3": "673f5ca61073e3e9271d736b30b0661b",
"assets/res/Lesson/Room/Sound/cushion.mp3": "1b5bc5d66badc0e7261f0fa6080ecaac",
"assets/res/Lesson/Room/Sound/shelf.mp3": "409b29a8e0e131626ebb39be8f4fd759",
"assets/res/Lesson/Room/Sound/statue.mp3": "423bb4df2ea5cbb25308a10239ff3492",
"assets/res/Lesson/Room/Sound/chair.mp3": "16553b19fc5e31f426294ad476f252fe",
"assets/res/Lesson/Room/Sound/socket.mp3": "8041e9aa004f42948ad3138e568854b1",
"assets/res/Lesson/Room/Sound/blanket.mp3": "93afebf9d54812d97ad5dd36eb9f59bc",
"assets/res/Lesson/Room/Sound/sofa.mp3": "a3cc98a3776afbd685a7ead487faac91",
"assets/res/Lesson/Room/Sound/clock.mp3": "e1fbe1c5aab34dcce50e768ecb173e72",
"assets/res/Lesson/Room/Sound/hanger.mp3": "ffba06d067984a889c8966efd49875a7",
"assets/res/Lesson/Room/Sound/vase.mp3": "d3d6b7b357598f369dc2e0b38497c82d",
"assets/res/Lesson/Room/Sound/glue.mp3": "e7d2b1aede96a90c50598282c1728951",
"assets/res/Lesson/Room/Sound/cap.mp3": "775f5b28000dc4612dda114e4fb5dacc",
"assets/res/Lesson/Room/Sound/candle.mp3": "c04bb3b8be833aa843a05bd612f6821e",
"assets/res/Lesson/Room/Sound/books.mp3": "f5093cb0869b002c2527cf3933aa9538",
"assets/res/Lesson/Room/Sound/cot.mp3": "b8ffddfbeff0068fedf0881eb961344c",
"assets/res/Lesson/Room/Sound/bed.mp3": "ba74e6466fba5c827e00d93459c2c162",
"assets/res/Lesson/Room/Sound/scissors.mp3": "91f6b24ec3c33a94c29df88a21ba9a9d",
"assets/res/Lesson/Room/Sound/painting.mp3": "aad884b633c08c093f074df4f17dd1b5",
"assets/res/Lesson/Room/Sound/bookcase.mp3": "a831b695641de6fca32b5f4b7322fc32",
"assets/res/Lesson/Room/Sound/eraser.mp3": "3c35db469cd7e5496149f9e8894197ec",
"assets/res/Lesson/Room/Sound/magazines.mp3": "30d23aed46051501f80b1f067d8da5cf",
"assets/res/Lesson/Room/Sound/carpet.mp3": "3a76c2534641b9f51d97ec542f3a0751",
"assets/res/Lesson/Room/Sound/newspaper.mp3": "c30ff968a081e04078a7c8047f2d761c",
"assets/res/Lesson/Room/Sound/pillow.mp3": "b88cf1f0b2b8048a9e3e35599d02ec46",
"assets/res/Lesson/Room/Sound/paper.mp3": "77a713f646af76c25c19b9924e368de6",
"assets/res/Lesson/Room/Sound/pen.mp3": "1b0e3233cc0769765c71117d7a1b9837",
"assets/res/Lesson/Room/Sound/tv-set.mp3": "32d718183b9dd3341641c9b36f4586a8",
"assets/res/Lesson/Nature.json": "332d017470fbc4f563cbd859f785a6f9",
"assets/res/Lesson/Prof_1.json": "32120b6e69d24b3a42a599f0c27b2757",
"assets/res/Lesson/Nature/Image/lake_0.webp": "47b17cb1da360b42c592af38682d12f6",
"assets/res/Lesson/Nature/Image/lightning_0.webp": "d79104ca13178d41d6ba0a00b4ee5616",
"assets/res/Lesson/Nature/Image/wave_3.webp": "43a75bda374b87a870e1e4a5afd37c20",
"assets/res/Lesson/Nature/Image/desert_1.webp": "432b212b221110c48e8e118b3a591e61",
"assets/res/Lesson/Nature/Image/cloud_0.webp": "247892b5fd56797cb87ff7b532d18f7c",
"assets/res/Lesson/Nature/Image/fire_1.webp": "3245d67f6e7c028486a327c059c7c4cb",
"assets/res/Lesson/Nature/Image/tree_2.webp": "c0cfa1b793d5ee3e9e112fe180b038a9",
"assets/res/Lesson/Nature/Image/wind_0.webp": "8357cfbd081d94d29bd02b500a65b57f",
"assets/res/Lesson/Nature/Image/rainbow_0.webp": "2c4e7e7eb9944b07b3acc1974de798eb",
"assets/res/Lesson/Nature/Image/sun_0.webp": "ec898fcb9e9fc0e4b86b0ab7ace303f0",
"assets/res/Lesson/Nature/Image/snow_1.webp": "a5defe5c88648e09a0e2dcfa9f7f4605",
"assets/res/Lesson/Nature/Image/sand_0.webp": "f4e4be3ed079979b95bf42bed9bd79e2",
"assets/res/Lesson/Nature/Image/field_1.webp": "5e2d767921bd44e5571a684011662ce4",
"assets/res/Lesson/Nature/Image/river_1.webp": "8d25c464a2515ba9e339b83672c63d80",
"assets/res/Lesson/Nature/Image/river_0.webp": "6e14143a84b98f3cfeba1c9a43500e84",
"assets/res/Lesson/Nature/Image/field_0.webp": "f2e88f337e48ed6cecd50e64ee500ae9",
"assets/res/Lesson/Nature/Image/jungle_2.webp": "181539844685870f3afdc2da1d6f7045",
"assets/res/Lesson/Nature/Image/rainbow_1.webp": "3a65fa8b6e0cdaf06087190f7a04b22e",
"assets/res/Lesson/Nature/Image/sun_1.webp": "4a586e87329302137ae705ed5168fd22",
"assets/res/Lesson/Nature/Image/snow_0.webp": "6f95f2746f3fcce60d7385b05671d26f",
"assets/res/Lesson/Nature/Image/wind_1.webp": "7be4f6707c429553ba93fc24572554a5",
"assets/res/Lesson/Nature/Image/fire_0.webp": "cdd01cea3fead996e7a50c1a6927a2e3",
"assets/res/Lesson/Nature/Image/cloud_1.webp": "a99954e70a60e264a69a81a85a467127",
"assets/res/Lesson/Nature/Image/desert_0.webp": "54e27181f3ce1cde8d0a02a1b637e913",
"assets/res/Lesson/Nature/Image/stone_2.webp": "e7c5120ea1c6c8470d8a395a9f7bbff7",
"assets/res/Lesson/Nature/Image/wave_2.webp": "fd1af0010daacc0b4a73f508584b63d6",
"assets/res/Lesson/Nature/Image/lightning_1.webp": "52b20b4aea90743f3ec6d266832257c7",
"assets/res/Lesson/Nature/Image/lake_1.webp": "9877297aee29022925d3a14d6d3d3d9f",
"assets/res/Lesson/Nature/Image/tree_4.webp": "682cfaa84ade341194adaec17aadbaed",
"assets/res/Lesson/Nature/Image/sea_0.webp": "57e8404bc544e6abf7edc7d2519ceb5c",
"assets/res/Lesson/Nature/Image/waterfall_3.webp": "d69dc0d9c2ba82c9c46ab931ce15ac5f",
"assets/res/Lesson/Nature/Image/fog_1.webp": "cf729c46fedf4230caaa374deffd901e",
"assets/res/Lesson/Nature/Image/sunset_1.webp": "f7d6dab74f7d1c72e28a140bb2ffc8b4",
"assets/res/Lesson/Nature/Image/ice_1.webp": "90b4dde2cecaa5ed476e2646f548bdc9",
"assets/res/Lesson/Nature/Image/hill_1.webp": "93d18e61cdc01b70087ea615846633d9",
"assets/res/Lesson/Nature/Image/island_0.webp": "9cee6b5d31b441944d79fbabbb479ebd",
"assets/res/Lesson/Nature/Image/rain_2.webp": "017516e08decc5939deb365e8f5923e5",
"assets/res/Lesson/Nature/Image/grass_1.webp": "1fc010e1d9882f1611187f7ee493a51e",
"assets/res/Lesson/Nature/Image/grass_0.webp": "f54899c3189e07f98c6364f310a3a7f7",
"assets/res/Lesson/Nature/Image/island_1.webp": "16a1fb466e638fdb055f35e1cf0c4560",
"assets/res/Lesson/Nature/Image/hill_0.webp": "236ea22223f90199020e0e414f62c8ef",
"assets/res/Lesson/Nature/Image/ice_0.webp": "0071be59835e2adc403e478010cb6862",
"assets/res/Lesson/Nature/Image/sunset_0.webp": "8bd1d100d8af3d6b358070da4ed04f62",
"assets/res/Lesson/Nature/Image/fog_0.webp": "6da40b7b1bfc1ef539cdfced0cec3a0a",
"assets/res/Lesson/Nature/Image/waterfall_2.webp": "b6c43e3a20873b78e382982ce660fe3c",
"assets/res/Lesson/Nature/Image/flower_2.webp": "c9d4235bab08d19165c9775b0a86e598",
"assets/res/Lesson/Nature/Image/sea_1.webp": "858353e300ddb16410095279a4b1fa4f",
"assets/res/Lesson/Nature/Image/star_1.webp": "b4e98a9ecf07d02517b5c182dc84ab37",
"assets/res/Lesson/Nature/Image/waterfall_1.webp": "ed4242118e500d6164d9bc17b121b805",
"assets/res/Lesson/Nature/Image/flower_1.webp": "bcdf64342406ebe45914976cb1d724b5",
"assets/res/Lesson/Nature/Image/moon_0.webp": "1102c8693b851d836b8063bd16d0505a",
"assets/res/Lesson/Nature/Image/volcano_0.webp": "e583732d92f6e8a0e6aecf5f35eb7b61",
"assets/res/Lesson/Nature/Image/rain_0.webp": "520bb8aa11d2f514a182d5c2e0456d0b",
"assets/res/Lesson/Nature/Image/mountain_0.webp": "f3c38d7d5fe4f58adebc52e4f8b8cbcc",
"assets/res/Lesson/Nature/Image/sunset_2.webp": "b5c79fc672a95c9179dbb563aa46f999",
"assets/res/Lesson/Nature/Image/ice_2.webp": "fa961bca286a6a1ce2c725f7a32fa13c",
"assets/res/Lesson/Nature/Image/mountain_1.webp": "4b86b87e7a0494c93e907986dda4b112",
"assets/res/Lesson/Nature/Image/rain_1.webp": "5342cf5737095d2260c628c4c3044d90",
"assets/res/Lesson/Nature/Image/fire_4.webp": "6e5ad8d85f8e437b84fac05a8a78eaa5",
"assets/res/Lesson/Nature/Image/moon_1.webp": "3f4a26eb71e7deb51fa3279595cca35d",
"assets/res/Lesson/Nature/Image/flower_0.webp": "f42cf4befa5ede51442098d32ea6e6e7",
"assets/res/Lesson/Nature/Image/waterfall_0.webp": "219db769e259ddbb44aa5d0fe6bfa133",
"assets/res/Lesson/Nature/Image/star_0.webp": "ee74a795cda7ee9712fc4e825e63a3ca",
"assets/res/Lesson/Nature/Image/sky_0.webp": "59abcd0ad097d9f67f5b4e276e7e5e4f",
"assets/res/Lesson/Nature/Image/stone_1.webp": "c4642949128eb4d6a655471cfd854708",
"assets/res/Lesson/Nature/Image/wave_1.webp": "345bbefc66dc7ebd2c52ba9c7a90bf98",
"assets/res/Lesson/Nature/Image/lake_2.webp": "6a316e2f5daf7a4f9b0636071836f862",
"assets/res/Lesson/Nature/Image/jungle_1.webp": "90da26e1f0c2ee7f6d5b536d6f3c099d",
"assets/res/Lesson/Nature/Image/forest_1.webp": "d0c378eefc066b8ae08e8184f452a7ac",
"assets/res/Lesson/Nature/Image/tree_0.webp": "5202efeaa2c1c560d83502b177abcd01",
"assets/res/Lesson/Nature/Image/tree_1.webp": "a69194fcd97108d1bfd2217b512458cf",
"assets/res/Lesson/Nature/Image/forest_0.webp": "942ad2c1bddae4a38ace256132182baa",
"assets/res/Lesson/Nature/Image/jungle_0.webp": "8767437b855e224acbea4586930b9ae5",
"assets/res/Lesson/Nature/Image/field_2.webp": "83437517c749ee417c0ce55915422eef",
"assets/res/Lesson/Nature/Image/wave_0.webp": "eedb093d6064de638c3b13cdeeafad89",
"assets/res/Lesson/Nature/Image/stone_0.webp": "df27e45d7dc3dfc410a3d95364079edc",
"assets/res/Lesson/Nature/Image/sky_1.webp": "3c9b7205863b2d7da0b4aa3a7484c249",
"assets/res/Lesson/Nature/Image/fire_2.webp": "7e2750c3a15edc5dce99ce564e634146",
"assets/res/Lesson/Nature/Sound/star.mp3": "5efcc2689708adda5a9f71cf7e8beeb3",
"assets/res/Lesson/Nature/Sound/sun.mp3": "67b44f3377171628644af02ea3605b24",
"assets/res/Lesson/Nature/Sound/sand.mp3": "22eb811963b8304e56436fca491b9448",
"assets/res/Lesson/Nature/Sound/sunset.mp3": "49c24c429f991d02927571c26373408c",
"assets/res/Lesson/Nature/Sound/rainbow.mp3": "af827bbede229c12a24df1146cc6ce03",
"assets/res/Lesson/Nature/Sound/rain.mp3": "7d8c4585bb2360abbf388a3ba6b76f27",
"assets/res/Lesson/Nature/Sound/wave.mp3": "61bfd15133b89dc5acb28a3ac37afdbb",
"assets/res/Lesson/Nature/Sound/waterfall.mp3": "4e8bf6cd81dbdec57f6f57d03f8ac3cf",
"assets/res/Lesson/Nature/Sound/sea.mp3": "30a3b45c8f33892df9ad64f8808103d9",
"assets/res/Lesson/Nature/Sound/moon.mp3": "b568249e0b7df6ff5e7041ac08db10cc",
"assets/res/Lesson/Nature/Sound/stone.mp3": "dd7f8188f1a01d7e3f545b8d3622ad9e",
"assets/res/Lesson/Nature/Sound/grass.mp3": "976177881fa49fb01c3d7a875c552a0e",
"assets/res/Lesson/Nature/Sound/jungle.mp3": "f096f0c5fb22e13fdc59ac05ec92b325",
"assets/res/Lesson/Nature/Sound/flower.mp3": "a878a3210155f6d0f2b57ee21fd9021b",
"assets/res/Lesson/Nature/Sound/lake.mp3": "305d4ee179764a5d7c73886e2970f58e",
"assets/res/Lesson/Nature/Sound/hill.mp3": "2128855bce8635a96e254e03854980ef",
"assets/res/Lesson/Nature/Sound/ice.mp3": "3a095d41e11ef3fde58cdab3dcfd06fa",
"assets/res/Lesson/Nature/Sound/sky.mp3": "2f846ea2d70d94caf5c332f5cd091c9d",
"assets/res/Lesson/Nature/Sound/mountain.mp3": "7c140875748af88ee187153aa4485bea",
"assets/res/Lesson/Nature/Sound/cloud.mp3": "2dcddff3d7c50cf3abdb697be332c9a3",
"assets/res/Lesson/Nature/Sound/tree.mp3": "16b36e310fc69cbd48aee5e3db7a1710",
"assets/res/Lesson/Nature/Sound/forest.mp3": "18f0be6503a591354cb563221de2c3d4",
"assets/res/Lesson/Nature/Sound/island.mp3": "ce13d6937130d5873745afce7e811e8c",
"assets/res/Lesson/Nature/Sound/wind.mp3": "7d17b98d89172c98790f7ecfb960c1e7",
"assets/res/Lesson/Nature/Sound/lightning.mp3": "0a09371369968f08c7e284b9ebed37c2",
"assets/res/Lesson/Nature/Sound/volcano.mp3": "2455e3af8f72fb1017ea32c92538941f",
"assets/res/Lesson/Nature/Sound/field.mp3": "052ea7351d64e8c13f6e8701ed8b4e5d",
"assets/res/Lesson/Nature/Sound/snow.mp3": "c7cfb841f0d6a54c58bb50aa7ed9c290",
"assets/res/Lesson/Nature/Sound/fog.mp3": "6276848fa8ddc236094d3eceae57a3b4",
"assets/res/Lesson/Nature/Sound/desert.mp3": "fde6922562189c6c2826b3a89da55d6b",
"assets/res/Lesson/Nature/Sound/fire.mp3": "112f7260d5a3510e460d5f7b1da8f250",
"assets/res/Lesson/Nature/Sound/river.mp3": "c0333b339cab56583763b7f88782bab2",
"assets/res/Lesson/Colors/Image/golden_0.webp": "e7c57f238a165bd51608439306fc662a",
"assets/res/Lesson/Colors/Image/white_0.webp": "c985b9324b441976912141981f03d383",
"assets/res/Lesson/Colors/Image/silver_1.webp": "810294887f80962f9f41a201f33b3600",
"assets/res/Lesson/Colors/Image/green_0.webp": "f2cb998dbc51497cd8933ece76f63301",
"assets/res/Lesson/Colors/Image/orange_3.webp": "ffe59f0107b30047cc97319a1e2c22ed",
"assets/res/Lesson/Colors/Image/orange_2.webp": "2a58af37a58d7831914cba507774df4f",
"assets/res/Lesson/Colors/Image/green_1.webp": "efeaf5a0aec3564d8b251e26d9a4ec73",
"assets/res/Lesson/Colors/Image/silver_0.webp": "c5f36623bbce22c1da5f9060864291b4",
"assets/res/Lesson/Colors/Image/golden_1.webp": "fb4cd3bd24b685d8dc8b973d9132e1e0",
"assets/res/Lesson/Colors/Image/white_1.webp": "6ec80e24e08f5a07b7903281fa5cddf1",
"assets/res/Lesson/Colors/Image/purple_2.webp": "77c0a3f212c3bb74ec45a3a78168676a",
"assets/res/Lesson/Colors/Image/orange_5.webp": "e090fcc2928ce98b5ed499a142164be5",
"assets/res/Lesson/Colors/Image/gray_0.webp": "6a9649468b7b8d2da0713bb5cfbebb19",
"assets/res/Lesson/Colors/Image/yellow_2.webp": "5c5f46df10b04dd057c94461530d80e5",
"assets/res/Lesson/Colors/Image/gray_1.webp": "2a9380d7d312892849e57930a5f95744",
"assets/res/Lesson/Colors/Image/orange_4.webp": "5eba7925f0ee19e0a4a5e3cdd91958f0",
"assets/res/Lesson/Colors/Image/red_1.webp": "cfb5c8f38d9952343d587792d2468ab7",
"assets/res/Lesson/Colors/Image/yellow_1.webp": "ab91d5e361cb463d44dff412c962a363",
"assets/res/Lesson/Colors/Image/black_0.webp": "ce289b479d4c7f2c3ab8044a82d93549",
"assets/res/Lesson/Colors/Image/brown_1.webp": "4a22fa04700d590a992c3813c2f5ea6f",
"assets/res/Lesson/Colors/Image/fuchsia_1.webp": "d086f56b99e1b5a744e795d2f6de653c",
"assets/res/Lesson/Colors/Image/brown_0.webp": "01989e861f8efb6adbb3f5631e171a4b",
"assets/res/Lesson/Colors/Image/black_1.webp": "82e1b0008faa2221924160a61e87defb",
"assets/res/Lesson/Colors/Image/yellow_0.webp": "77118921e558d8ca336ad76cf0caed4c",
"assets/res/Lesson/Colors/Image/red_0.webp": "414b0b1e911aa205abb619be5f5dd756",
"assets/res/Lesson/Colors/Image/white_2.webp": "0cc2ba3f8dc9cedfcf1a7e61a2851131",
"assets/res/Lesson/Colors/Image/purple_1.webp": "8a74e0f6f0bcba58e35c6e237d007db5",
"assets/res/Lesson/Colors/Image/orange_1.webp": "30435b61cecb7510e92d828abe61243c",
"assets/res/Lesson/Colors/Image/pink_0.webp": "df6e5dfc655925f5ce1f0632c59cd55f",
"assets/res/Lesson/Colors/Image/green_2.webp": "76bd7f582d302aa81fc2b6303f6687e8",
"assets/res/Lesson/Colors/Image/blue_0.webp": "92b50770f83b13caf208cf4e36ef790f",
"assets/res/Lesson/Colors/Image/blue_1.webp": "36d708a6d71cdca67b0037b561838b94",
"assets/res/Lesson/Colors/Image/pink_1.webp": "412c09c13045482d3d3f73539218f41d",
"assets/res/Lesson/Colors/Image/orange_0.webp": "1af8f46f6ac8a8a90b7626c2f454c944",
"assets/res/Lesson/Colors/Image/purple_0.webp": "9a020a3a06b9e4d17a2af560ff0620ec",
"assets/res/Lesson/Colors/Sound/brown.mp3": "1bb299e1c66ae4b2d3b5219643352d88",
"assets/res/Lesson/Colors/Sound/red.mp3": "306162bc600144ade89293d11c19067b",
"assets/res/Lesson/Colors/Sound/purple.mp3": "c7dc394ec4a884e3eb622885658eecad",
"assets/res/Lesson/Colors/Sound/white.mp3": "4d92b0454cd2b84c31c2c33840ee8722",
"assets/res/Lesson/Colors/Sound/green.mp3": "84fc4688aaf1668807ca2a7632dc006e",
"assets/res/Lesson/Colors/Sound/silver.mp3": "343e601f3e1211eb2840cd5ab420c3c1",
"assets/res/Lesson/Colors/Sound/orange.mp3": "e3ac1f9214791f42c81784b396cf0884",
"assets/res/Lesson/Colors/Sound/golden.mp3": "f4a6dbbe4f0965cbbb2e9eed367c3525",
"assets/res/Lesson/Colors/Sound/pink.mp3": "aafd38bb9055893c310d124a61cd38f6",
"assets/res/Lesson/Colors/Sound/blue.mp3": "c924204e098d96c395b0ab6522a7a64c",
"assets/res/Lesson/Colors/Sound/yellow.mp3": "da1ba74e908b471fdd58f5f3d6d7cfd9",
"assets/res/Lesson/Colors/Sound/black.mp3": "25c637eb30dc9b6f76690c14da005743",
"assets/res/Lesson/Colors/Sound/fuchsia.mp3": "32b44f39dc0754b282a72061a4abc6e6",
"assets/res/Lesson/Colors/Sound/gray.mp3": "d03a8d041c2d0a9b469218546a683fcf",
"assets/res/Lesson/Profession/Image/engineer_1.webp": "f374c7ca3413fbc20d650c06494bdd27",
"assets/res/Lesson/Profession/Image/housekeeper_0.webp": "00c8f0d4bcbc6186574ffb8e3e0130fa",
"assets/res/Lesson/Profession/Image/doctor_1.webp": "f6cd91c1348c42c44b0926f27259b575",
"assets/res/Lesson/Profession/Image/scientist_0.webp": "caea8cefc6bc93a4e84eb050c66d444b",
"assets/res/Lesson/Profession/Image/florist_0.webp": "7ffe2fa066e5010acc31922df808fd90",
"assets/res/Lesson/Profession/Image/computer_programmer_0.webp": "dd62657c1e5376dc8981869e66519ee0",
"assets/res/Lesson/Profession/Image/clown_1.webp": "ddb422be0f51722c52d85c62c586e7c8",
"assets/res/Lesson/Profession/Image/witch_1.webp": "fc0bebfbef6ebd5a9c2c6fc4fc1f9012",
"assets/res/Lesson/Profession/Image/waiter_2.webp": "c67de6a7f0b530314598c8c4b6062daa",
"assets/res/Lesson/Profession/Image/builder_0.webp": "aff2ae51c1efbbf69082cbe8d1a70086",
"assets/res/Lesson/Profession/Image/teacher_1.webp": "a30503064ec4a48acac22769512154ae",
"assets/res/Lesson/Profession/Image/builder_1.webp": "44fbba8e3fb807dbf0ec2124e3091656",
"assets/res/Lesson/Profession/Image/teacher_0.webp": "2a6801ace7542d53d8a166b7fc3ae1a7",
"assets/res/Lesson/Profession/Image/doorman_2.webp": "cdc79f6f6ca293bdeeb698efb334d533",
"assets/res/Lesson/Profession/Image/witch_0.webp": "4ff051ca80bb0106a1bebcd87a1c4e4a",
"assets/res/Lesson/Profession/Image/nurse_2.webp": "ba2a217544e0fec498e36b2d3d978cfe",
"assets/res/Lesson/Profession/Image/clown_0.webp": "3b0ee4dd35ac6a645a8997d5edf298df",
"assets/res/Lesson/Profession/Image/computer_programmer_1.webp": "7202614ecc27a11b86e44de79b6251b9",
"assets/res/Lesson/Profession/Image/florist_1.webp": "3336061f6e238933794aa3766179cd9a",
"assets/res/Lesson/Profession/Image/scientist_1.webp": "e9ec47b24a5831a443c7e748cf2c188c",
"assets/res/Lesson/Profession/Image/doctor_0.webp": "484ada5e66844df0dc32b67fe834a391",
"assets/res/Lesson/Profession/Image/housekeeper_1.webp": "20fc6f02513821383daf856a4e411223",
"assets/res/Lesson/Profession/Image/engineer_0.webp": "048cc1d88ceb98f9c045910c1aa97381",
"assets/res/Lesson/Profession/Image/mechanic_1.webp": "520c0f62d6e9c53d3423861565ac4cd5",
"assets/res/Lesson/Profession/Image/firefighter_2.webp": "ecfb7f56cbd81978df458e7dfce29745",
"assets/res/Lesson/Profession/Image/astronaut_0.webp": "71f8ba6a79bd2dbc1853024f7c777de5",
"assets/res/Lesson/Profession/Image/pilot_2.webp": "9aa65a18f8a2476df831ee37a8818eef",
"assets/res/Lesson/Profession/Image/lifeguard_1.webp": "7d1c5825d58c2c501aeedcfa64cf1a74",
"assets/res/Lesson/Profession/Image/lifeguard_0.webp": "14d22a8d130212386cd78ea173821343",
"assets/res/Lesson/Profession/Image/artist_2.webp": "bf301a44c1969f8e0aa642780fd63732",
"assets/res/Lesson/Profession/Image/astronaut_1.webp": "ff4ae89e9e078e6301d38a6601240c57",
"assets/res/Lesson/Profession/Image/firefighter_3.webp": "830c4358764369b07e9dec2b67235bd4",
"assets/res/Lesson/Profession/Image/mechanic_0.webp": "25ab712a5b61ebc218090af62c25aee3",
"assets/res/Lesson/Profession/Image/astronaut_2.webp": "62fed7935518f25d2f72e5cc1ee17421",
"assets/res/Lesson/Profession/Image/firefighter_0.webp": "f5aa51e0f8588b7cd3a4ac6459247def",
"assets/res/Lesson/Profession/Image/actor_1.webp": "553f9ccbad09fc25251a39428e82e525",
"assets/res/Lesson/Profession/Image/artist_1.webp": "128612fa02acc969276fd3ef4fac6b8f",
"assets/res/Lesson/Profession/Image/reporter_0.webp": "458dd6ecfa6c96f7f1256f292bf9126c",
"assets/res/Lesson/Profession/Image/pilot_0.webp": "1bad69a56ad6c4e3cacaed1a9af52802",
"assets/res/Lesson/Profession/Image/student_0.webp": "2caee50e47695dd38737fa75a07a20c5",
"assets/res/Lesson/Profession/Image/student_1.webp": "9677d948ef7c7752541465f5c1bf02b1",
"assets/res/Lesson/Profession/Image/flight_attendant_0.webp": "3728e76d2784637a18b28365cf6abb2c",
"assets/res/Lesson/Profession/Image/pilot_1.webp": "4863d44de24877a57e9ca212d6826453",
"assets/res/Lesson/Profession/Image/reporter_1.webp": "b3ff448efeaa774f1f671f81a5b5c57a",
"assets/res/Lesson/Profession/Image/artist_0.webp": "e7a1154f3163781ab8484a8c4d58be0f",
"assets/res/Lesson/Profession/Image/lifeguard_2.webp": "3852cd08d8d5a6ad8b238039a32cb9ed",
"assets/res/Lesson/Profession/Image/actor_0.webp": "20245a5437fb3dabb3cb5b63a7140f5f",
"assets/res/Lesson/Profession/Image/firefighter_1.webp": "4878afac746bdaf69b417a166c73c0af",
"assets/res/Lesson/Profession/Image/nurse_1.webp": "cbacf66028048856fb5758eb46ce7e89",
"assets/res/Lesson/Profession/Image/waiter_0.webp": "bd9c68a8a7569fa2f4400622a4ec24cc",
"assets/res/Lesson/Profession/Image/doorman_1.webp": "b8e9dfd975bf98e18876fc5722657b64",
"assets/res/Lesson/Profession/Image/policeman_1.webp": "231ee42d088dc243a70e6aa1d28ee4c2",
"assets/res/Lesson/Profession/Image/policeman_0.webp": "504d4e319dc772b230391622d17b9f94",
"assets/res/Lesson/Profession/Image/doorman_0.webp": "d84f525ce05d3c40d7662974db5a3974",
"assets/res/Lesson/Profession/Image/waiter_1.webp": "f54e3200948db511ea38ec6bd8f0036e",
"assets/res/Lesson/Profession/Image/engineer_2.webp": "74b8ca9555adb4ecc66b76bb1156ac93",
"assets/res/Lesson/Profession/Image/footballer_0.webp": "7c0b5f8ecbb13ba19afc9041572b66c2",
"assets/res/Lesson/Profession/Image/clown_2.webp": "617dd0008b5d8c27f27cd14ff98c8816",
"assets/res/Lesson/Profession/Image/nurse_0.webp": "b45c45d91008d6ab41b8113d4478adce",
"assets/res/Lesson/Profession/Image/witch_2.webp": "30ebc3aa0a6a30f4590bb037fdcfd631",
"assets/res/Lesson/Profession/Sound/engineer.mp3": "dc9101cd5b41c0b45a7c61f0fb1484fb",
"assets/res/Lesson/Profession/Sound/computer_programmer.mp3": "4867ffb562c538aa5e30845568274e45",
"assets/res/Lesson/Profession/Sound/reporter.mp3": "f1f155a584adb36e27f99c5be700ee56",
"assets/res/Lesson/Profession/Sound/flight_attendant.mp3": "4ffeb17b5d814ea0ef8746b3373b5bd4",
"assets/res/Lesson/Profession/Sound/nurse.mp3": "b47fd32191e27581ab2cb12adf8c3321",
"assets/res/Lesson/Profession/Sound/waiter.mp3": "2a34f0158f301f15f59be2d1f1a3ee63",
"assets/res/Lesson/Profession/Sound/student.mp3": "bc440a1ec4d27f97cbd3dc88285bc30c",
"assets/res/Lesson/Profession/Sound/actor.mp3": "3ab6aaca42ef6b99b4f321d3bb8028ae",
"assets/res/Lesson/Profession/Sound/scientist.mp3": "aad10ddd645285574e34ab8220f92540",
"assets/res/Lesson/Profession/Sound/housekeeper.mp3": "7266bbb77130c385fbe1e26cbc13c20f",
"assets/res/Lesson/Profession/Sound/doorman.mp3": "2c267061a1e2f8eeffda7306c980cfe6",
"assets/res/Lesson/Profession/Sound/firefighter.mp3": "f8ce71306e77128d59c0f49d409008f2",
"assets/res/Lesson/Profession/Sound/artist.mp3": "cd7e59e0edf9f2a251c236b6746c4ea1",
"assets/res/Lesson/Profession/Sound/clown.mp3": "1fee3e913a0599042471b54c1f77cc74",
"assets/res/Lesson/Profession/Sound/policeman.mp3": "758cb8c78d63bf4a760bff3e66da2a56",
"assets/res/Lesson/Profession/Sound/builder.mp3": "33d6ee1693e11fdde64cdac3ccc04bb1",
"assets/res/Lesson/Profession/Sound/doctor.mp3": "658906b01d1eb95005b44de3b133f131",
"assets/res/Lesson/Profession/Sound/pilot.mp3": "9a2cb875df7f1e572a18c53af0954030",
"assets/res/Lesson/Profession/Sound/witch.mp3": "6cb86baa5d86854b0630954bf0ef03fd",
"assets/res/Lesson/Profession/Sound/teacher.mp3": "6321109540af1f9aee50006399209e7d",
"assets/res/Lesson/Profession/Sound/astronaut.mp3": "aff9ea10d1a67bc1a6a13aa4d422fdda",
"assets/res/Lesson/Profession/Sound/mechanic.mp3": "765f8e13fde8bd949aa1549c8b20abb9",
"assets/res/Lesson/Profession/Sound/lifeguard.mp3": "22c9c94846589ee6abec9ee8f22c8d91",
"assets/res/Lesson/Profession/Sound/footballer.mp3": "c86a4e4926eda46d1a8046234dd2f61b",
"assets/res/Lesson/Profession/Sound/florist.mp3": "e3c338c47993f9a217cbfb3b72b3b06a",
"assets/res/Lesson/Colors.json": "b20e76e0a995e98034b3c62e3169d5ee",
"assets/res/Lesson/Room.json": "a8ecf00ac05f98a3acf548b6534a94b1",
"assets/res/Icon/lesson_4.png": "4fbe1e53e496ce461712656b26953e5e",
"assets/res/Icon/lesson_3.png": "7f0af0fb0f96512afd0ab8ca46ab16df",
"assets/res/Icon/lesson_2.png": "77d2770f750ae0572fd9591fe208ac57",
"assets/res/Icon/lesson_1.png": "0e1eda43ca27895365d082c1098e7e7b",
"assets/res/replicas.json": "31f1c61b4cf8e9a50af8b4bf13761100",
"assets/res/Sound/incorrect.mp3": "ff56e412e4159dfa5e7395644e771612",
"assets/res/Sound/time_is_running.mp3": "3cde2d95d334f10511e275cb814b1b3b",
"assets/res/Sound/start.mp3": "35ae463d12b336762d6866ba5701a42a",
"assets/res/Sound/click.mp3": "67ef3aa186c64a4db5e155a3c1018702",
"assets/res/Sound/success.mp3": "ddef280537f729d0be9dc74d636b553e",
"assets/res/Sound/blust.mp3": "c4491dade78caa4b7f96a95a2feaaaab",
"assets/res/Sound/fail_end.mp3": "bcd76758a7080940e23978b454ff66e6",
"assets/res/Sound/success_end.mp3": "80f159377f0d4f32c779d5b6e74af9aa",
"assets/res/Store/GooglePlay.png": "399b0cbf52a5a6c2b1b747f1d43c18b4",
"assets/res/Store/qrcode.png": "0dd69b0dcf50407597b49718e979f8bf",
"assets/res/Store/BigBenWeb.png": "14a144cf5a7f0ebdcf4ccbb592903394",
"assets/res/Store/AppStore.png": "1074c2bf0ae58f205e50fcfd16014759",
"assets/AssetManifest.json": "58f927f58f2afd0961c6776a35a3261f",
"assets/NOTICES": "e21fe74e49a28b18c3fd48a23d6d2834",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/shaders/ink_sparkle.frag": "389711a9cf6c47e0680c4bd8cdfc729a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
