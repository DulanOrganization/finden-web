'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "fe9387fce73259c3725fd9523e89baaf",
"auth-handler.html": "712837fb5272e5897cf439b5a1e1c0f1",
"version.json": "95978c59e0a0a023ee7adace0fa94e33",
"index.html": "8f88df16c0c3b920c167dfeb71b0b26c",
"/": "8f88df16c0c3b920c167dfeb71b0b26c",
"main.dart.js": "929f87a4886598e344d353a2b0a8024e",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ad51c77cb7154d2dd2b813f9827a395e",
"assets/AssetManifest.json": "7176da22d920b91d44933e522add13ff",
"assets/NOTICES": "b4d4ebd454abde0e3d79562e6855c008",
"assets/FontManifest.json": "7920de41c58b42dbd3b2fdc96094529a",
"assets/AssetManifest.bin.json": "b08731acedf1df5e74019dafcec9e2f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3c3f6a6fb0f12dcb81aff41a6b2f0055",
"assets/fonts/MaterialIcons-Regular.otf": "cba2ebe72b5e6b4340550de630810baf",
"assets/assets/icloud_icon.png": "21e51df514a61f4211a38f8ec347d3d3",
"assets/assets/caret-down.svg": "f8e41d9a8d1b9ac0bad129d906809190",
"assets/assets/security_image.png": "956c892d5b5f13eb955fc7d52d3d29e3",
"assets/assets/train_ai_icon.png": "e2a38a5c7e40e21b8da4763a7561fe2f",
"assets/assets/DuplicateBox.png": "ea405a32e935480a5640512c0df8a42f",
"assets/assets/onedrive_icon.png": "5ea7b124e100b32fa4848296385dca74",
"assets/assets/CaretUp.svg": "d10e6b92cd633a398667577ea2f54fe2",
"assets/assets/download_icon.png": "1c16eca4cd93ddbe20769612f722ea26",
"assets/assets/person_image.png": "6e045893441a0ffddbfd8631e6c55093",
"assets/assets/folder_icon.svg": "d01b48e6802ddfc610dc85428d085d62",
"assets/assets/windows_os_icon.svg": "3c2879cf558b7c1b78c25653bbfd9309",
"assets/assets/private_gpt.svg": "b9c316764d633cb37b9cbbac2b1067cd",
"assets/assets/file_detail_similar_icon.svg": "8a2bb545030539a6b53b0d0dba147823",
"assets/assets/save_unfilled_icon.svg": "1652e78a64ba1cd386c13963a7683c9f",
"assets/assets/solar_cloud_linear.png": "38c5924165a6ab44b25414060046d0c4",
"assets/assets/telegram.png": "3625d8d587adb475035a7f8eaf8976b4",
"assets/assets/tick.png": "3345750098116ec0a7cc7f8bbdf0772a",
"assets/assets/mobile_access_data_image.png": "6857c1139dc2a52adc5a4e1335e44754",
"assets/assets/eye_on.png": "db64aac6b522d14ae44e6584bdd67997",
"assets/assets/dashboard.png": "4077802da2962f03d5df18bb6afe45f1",
"assets/assets/content_type_menu_icon.png": "286ad7bf69f7d9677605f26a5849a04c",
"assets/assets/log_out_icon.svg": "22481461c07feb906017d32b0658609e",
"assets/assets/message_send_icon.svg": "26017e2364b9ede5b1e3a70eaa327537",
"assets/assets/search_icon.svg": "acb86e8d4ae382aef4511bfa1f857ed5",
"assets/assets/teenyicons_computer.png": "805de8d9fa7c091ca802805faf43df6c",
"assets/assets/mobile_footer_bg.png": "6656d3c33d04daa28b85b9e6da85e0e6",
"assets/assets/google_icon.png": "a53a7caf0cfd1df9cef4421aab1812fc",
"assets/assets/profile_icon.png": "3d8f6d9235f100d2627129697ce011bb",
"assets/assets/home_bg_2.png": "8ec56729dbd901b996541ca580b274a2",
"assets/assets/train_ai_menu_icon.svg": "e945bcacc2b8075bff5c14a242f91bd8",
"assets/assets/master_folder_icon.svg": "28fd118e6774967a7260879b6b6c3607",
"assets/assets/good_to_know_button.png": "a9287a88eceb8e1f52b70a4cb40cdf23",
"assets/assets/tick_download.png": "1789c841275d0c5728f12a68508aed43",
"assets/assets/macos_icon.svg": "c40a0f837c4bbfb01cfa092b9d795d14",
"assets/assets/android_icon.svg": "10eba96cbcd8a7f892a546a92ad1700a",
"assets/assets/chat_icon.svg": "beb994b684ce81d10be67650c7cd2aac",
"assets/assets/home_icon.svg": "1528bcc356a1376d661bef750b614a01",
"assets/assets/saved_icon.svg": "a85938c2ad59cc2f4494fc5b008589b1",
"assets/assets/support_icon.svg": "be9b9eb3665687a0fd72ce84c09bb3a2",
"assets/assets/duplicate_icon.png": "585d0dbe69e584e87c20c1acccc87840",
"assets/assets/file.svg": "d6768a25205dd76a7cb7d65d6be75572",
"assets/assets/home_bg_1.png": "eb5adce92c55e37969f004b0184602e7",
"assets/assets/hint_message_icon.svg": "7f3dfce806c98f49db7275b5f6d0f146",
"assets/assets/toggle_icon.svg": "0dd9bb46672c6716745d77855796cef6",
"assets/assets/grid_view_icon.svg": "3b84fda9206db482178e060bb1c0047f",
"assets/assets/x.png": "1c507ba0011218adf05bb3e6074631c8",
"assets/assets/edit_icon.png": "5746112bdcbbcc817636f93e34a6c380",
"assets/assets/macos_icon_old.svg": "c0b509c375ff6bb30323022ba004894b",
"assets/assets/dropbox_icon.png": "0d423c3a9179d5ef98e438251e61568a",
"assets/assets/toggle_icon.png": "188fda8673e887c8aa052984a20bb135",
"assets/assets/doc_icon.svg": "1acedc7ffc8291a4374d8c48f8caf119",
"assets/assets/delete_icon.png": "1735133c0b8db093b1de2c92010754e7",
"assets/assets/google_drive_icon.png": "aea7931923c46529c70e24188246ef2c",
"assets/assets/support_icon.png": "76c8c77baeab4758aa97d94487bbe699",
"assets/assets/harddrive_icon.png": "cc26903fd23ece4425198f9686b0a821",
"assets/assets/home_icon.png": "a4cf95bf3121000854266726ccd833a0",
"assets/assets/file_detail_ask_icon.svg": "1b1dc633e99af8f6abc9afcac3a4e0c5",
"assets/assets/email_tick_icon.png": "445f395f9c1ccda00306442b18b8c85f",
"assets/assets/fifthPercentage.png": "d233a33ec6aa5cbe4bfe52ed10a3cd8f",
"assets/assets/share_icon.png": "6c1d2c9871a08b360472b7711d920872",
"assets/assets/cloud_download.png": "1c440cda237e8e8486bb09d6410a5f4b",
"assets/assets/fb.png": "ed2015fd9708d627e25fa31149df26df",
"assets/assets/android_icon.png": "65ff1a83cc09c68ac12810f9abf5d31d",
"assets/assets/content_type_icon.svg": "a103e0e3a4d7098cd4a4181eca0cddf4",
"assets/assets/outlines_duplicates_image.png": "449143a693bdb5341bbdcd0ddb5b024a",
"assets/assets/manage_data_image.png": "be582ed9191b07559821396f12c354dd",
"assets/assets/macos_icon.png": "65ff1a83cc09c68ac12810f9abf5d31d",
"assets/assets/alert_triangle.png": "40f00f2434b386af718004c0faeb78cc",
"assets/assets/menu_icon.svg": "5b29cd5045cc27edf7b1093256b0fa13",
"assets/assets/file_detail_save_icon.svg": "95f2fb8b918b07756101148498b4458f",
"assets/assets/android.png": "09033ca801c30f67e683413a190e1c4e",
"assets/assets/search_icon.png": "67f2ebaa97536dc5d47710d87d24bfa8",
"assets/assets/connections_to_finden.png": "df412ff1f4b6dcdab4c57503029d2826",
"assets/assets/content_type_menu_icon.svg": "bf62963d8c2f22335c162e52b1ff559e",
"assets/assets/twitter_logo.png": "9e039d0352aded86d37a5cbdde8ae71c",
"assets/assets/thirdPercentage.png": "407aea21800ccc3212ce8e37591a5551",
"assets/assets/file_detail_copy_icon.svg": "c587ca12912f0e7ad2afbfd69508bd21",
"assets/assets/folder_structure_icon.svg": "2b0413907ee5759bd20c28f7c72ea7bd",
"assets/assets/mobile_security_image.png": "65d7f4090df74f8f05b3abd395edff51",
"assets/assets/file_detail_share_icon.svg": "8dd567d12c5b15393bfe022c94ca758f",
"assets/assets/search_icon_v1.svg": "02facb19f9f797da3a559b851e41874a",
"assets/assets/sixthPercentage.png": "6fd24334b9185b6862b31eaa644f48c8",
"assets/assets/file_detail_delete_icon.svg": "5e49eb08da5d5e5572b268b5f629eaf9",
"assets/assets/send_tick.png": "6617a553c11ce3f0b85f64bc8789d8b2",
"assets/assets/dropbox.png": "c694bed9d42d4e502f222d308d468ed1",
"assets/assets/purpule_eclipse.png": "e68f275d0ed9d982879bb2f3428c7a0e",
"assets/assets/mac_os_icon.svg": "12ba771346da1fb3dee2a2ef801b948a",
"assets/assets/os_apple_icon.png": "007b18461c8c1f94a6a77cc89dddc19f",
"assets/assets/eye_off.png": "77673eb609876dd0bee529f834e7bd75",
"assets/assets/mac.png": "dff6414a2d118ae7d07a72eb36df0483",
"assets/assets/category_icon.svg": "3adccc37f6aabdf57610f42cf3aa52c3",
"assets/assets/secondPercentage.png": "f44144d91e585a893166fec3cbe1b3c5",
"assets/assets/google_drive.png": "4a285cad1a281b5d6f8dfda61250cb17",
"assets/assets/list_view_icon.svg": "91356fcbfb67a80cc87f72f34d7d86da",
"assets/assets/train_ai_icon.svg": "a4c21a7f4707ae6d5476a9069d244b23",
"assets/assets/one_drive.png": "182cd8215ff6dab9d74b67589ee06927",
"assets/assets/os_macos_icon.png": "9c1eaeb473a61416d9b1f24422cbb63f",
"assets/assets/copy.svg": "47b99d4d23fc5432e9d67ce9257a390b",
"assets/assets/microsoft_icon.png": "a2b5a50a4a30af83c4813b790284c321",
"assets/assets/browse_ai_structure_menu_icon.png": "7dca79a5c74de0249a6295c2cc6c43a3",
"assets/assets/blue_download_icon.svg": "dac18d56afd5e959f6dc20a8568bf176",
"assets/assets/apple.png": "084bbc5d4ea5037e263302adde843441",
"assets/assets/mobile_outlines_files_details.png": "2c4d0730c794324b71b2761abca1f2e4",
"assets/assets/history_icon_v1.svg": "46fc2da2acac8801ce23aefbf1de0743",
"assets/assets/icloud.png": "fdaa332fc5865ab8d3160098cac9839f",
"assets/assets/grid_v1.svg": "dada9056b8062e3cfb0bd345568dcb56",
"assets/assets/send_email_success_icon.png": "0ccc28d03c470f48449d05ba13c6ed7e",
"assets/assets/find_important_files_image.png": "bff55ef57d688c65d2f7600ea258fca3",
"assets/assets/message.svg": "29678fc6062842b17b00f90b03eb83ad",
"assets/assets/sort_by_icon.png": "411f18512fec41f97143399f6a19482d",
"assets/assets/local_storage.png": "d2b5a499b87dd97f29cf0669bc181f96",
"assets/assets/CaretDown.svg": "f8e41d9a8d1b9ac0bad129d906809190",
"assets/assets/cancel_icon.png": "2b3896a75fd91578475cedf0c1e631a4",
"assets/assets/list_file_icon.png": "62d9fffa37c307361ad32a57c413d0fc",
"assets/assets/setting_icon.svg": "a70f0af3f93ab60ffc7eebf48e223419",
"assets/assets/time_and_resources.png": "b87c1586b708cc93aba7616c18f2a761",
"assets/assets/app_logo_text.png": "881809c21cfb3ee5558563b5c76f94c6",
"assets/assets/mobile_important_data_image.png": "f04274f9aa992e2f2ae0826b33f42a7b",
"assets/assets/mobile_home_bg_1.png": "c58577920e8aa2425bc0500aec83d9a4",
"assets/assets/google-new.svg": "83f9a4b531ac4705261f0a886e74493b",
"assets/assets/blue_copy_icon.svg": "8ab54d3c4c72691bead95de109979377",
"assets/assets/mobile_navigation_image.png": "84eadb43826d19a87fce1f2342bff1f2",
"assets/assets/star.svg": "e4fb4fdd92f6f5c234e39da31543cb3a",
"assets/assets/os_windows_icon.png": "f8b5738d4dc1be4a6693b8dd263fe995",
"assets/assets/ios_icon.svg": "aeb0b5f7e5773a7dccbd64c51d84ab90",
"assets/assets/icon_home.png": "ebe89a39bf4632bc6b5ed55afd60880a",
"assets/assets/filter_icon.png": "2b2cead0f8211173da2b798c5156a3fa",
"assets/assets/RelatedBox.png": "639b20ec61c311491a6248da071f9f3a",
"assets/assets/browse_icon.png": "8b548bbd9c400f44677e7e7e4978f572",
"assets/assets/evernote.png": "60f9b02dd1bac0a34e8f25add9211169",
"assets/assets/list_view_v1.svg": "6f5cbfe65fc49546393105594c9687dd",
"assets/assets/folder_structure_menu_icon.svg": "12930be14801d6c005d27448fea2b7b3",
"assets/assets/blue_delete_icon.png": "9ca67707f40097170049b5a29535ec36",
"assets/assets/mobile_home_bg_2.png": "efabb47d070ce477920b3192ab9980e7",
"assets/assets/footer_bg.png": "676db97e5d9a154da40837c7aff3049d",
"assets/assets/app_logo.png": "20516547a5298ee90f0b5e253fc72a66",
"assets/assets/SpaceBox.png": "daa0a681614132eef14bcd96f0d2657b",
"assets/assets/history_icon.png": "63b859170a2913cc1d645d3d9c9d80ef",
"assets/assets/evernote_icon.png": "5a2ef463fa5102f4da15934b682625c5",
"assets/assets/pdf.png": "526cdfadc8e9c5f48fc54917ac26871f",
"assets/assets/folder_structure_menu_icon.png": "254b29280cfe1b9d5f19d3b97074eb85",
"assets/assets/red_delete_icon.svg": "9bddaafdd3c063809a7dcba9f02b940d",
"assets/assets/file_detail_edit_icon.svg": "c17ec718eac921baf8e99a62aa41e483",
"assets/assets/browse_icon.svg": "2fe40e675823e9c95a1f871a6fcb10c9",
"assets/assets/windows.png": "e724defc80a699eb6ce75c86a68197d1",
"assets/assets/FileBox.png": "97a087f7dc8d2ea806d69b6fedafca37",
"assets/assets/mobile_central_data.png": "38b15498e3a5a1e65461765991f42fac",
"assets/assets/instagram_logo.png": "afef5f193382342caf834f455d19b237",
"assets/assets/wa.png": "b6cd05701f9dc0f213f9ee76eb8b7f81",
"assets/assets/filter_icon.svg": "7e5c278039b06709ff21a0b08bb8e6ca",
"assets/assets/ios_icon.png": "bf2656bf6c174edd3c54a49dfde6c433",
"assets/assets/file_detail_download_icon.svg": "b90e47fe35f3ad7722fc8df711c43432",
"assets/assets/my_local_device_icon.png": "00051a398bcd37ac9a43197642ef7808",
"assets/assets/whatsapp.png": "daedd61270fd9f720f871abe89a4463a",
"assets/assets/os_android_icon.png": "3803637db44fce348fe35987bf8dc776",
"assets/assets/linkedin_logo.png": "ca32ff9bbbe6a399f0dde7f73ffc9823",
"assets/assets/whatsapp_icon.png": "3ddb364b1a497bb73fbefb3b6b1c19bf",
"assets/assets/access_data_image.png": "8e021437d7abe8db08319f12239396d5",
"assets/assets/filter_v1.svg": "caefce2de1c784ca70d6a9ebd647135e",
"assets/assets/save_icon.png": "8882d3e32324c0c38fe310c27da3d63e",
"assets/assets/mobile_outline_details_2.png": "a80283a81576adac57a1f1bdfc34c50b",
"assets/assets/dublicate_icon.png": "585d0dbe69e584e87c20c1acccc87840",
"assets/assets/file_detail_summary_icon.svg": "d047b42219f9be4bc611318ff04c61e5",
"assets/assets/blue_saved_icon.svg": "a28fa3e468be176d4b19f86ae811f2ea",
"assets/assets/blue_folder_icon.svg": "c478f20cf0991ea19343e5b515e52915",
"assets/assets/my_connections_icon.svg": "692be57cb170ca76ad55e3621531c296",
"assets/assets/blue_share_icon.svg": "12e0d0dcd00ecb6495f9ef87c6b91c71",
"assets/assets/reconnect_icon.png": "ebf5bca58d7694ebe8e719282c5ceb68",
"assets/assets/tile_option_button.svg": "ee8c90cb4bc343d45a188d47181f99e6",
"assets/assets/blue_download_icon.png": "ebccca5c5a76e1ff7c772f7d3101ba61",
"assets/assets/browse_menu_icon.svg": "06779a796f778b707988ab205d3c71cc",
"assets/assets/browse_ai_structure_menu_icon.svg": "6e4d0fd693fdd4d4a7935d37654d55b9",
"assets/assets/fourthPercentage.png": "b8d8aaff164d8d5e90d78efd8bd708d2",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
