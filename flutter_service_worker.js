'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5de86800109f71ee0a514ceb74844e24",
"assets/AssetManifest.bin.json": "565607b80cd574c664612d666f4ce847",
"assets/AssetManifest.json": "c162913ee95166c07594fddb1693c1fe",
"assets/assets/access_data_image.png": "8e021437d7abe8db08319f12239396d5",
"assets/assets/alert_triangle.png": "40f00f2434b386af718004c0faeb78cc",
"assets/assets/android.png": "09033ca801c30f67e683413a190e1c4e",
"assets/assets/android_icon.png": "65ff1a83cc09c68ac12810f9abf5d31d",
"assets/assets/android_icon.svg": "bce7b9e0fd53435613652c6f3c23b8c1",
"assets/assets/animations/loading_animation.json": "4759e7a6516f7065f48431f72713851c",
"assets/assets/apple.png": "084bbc5d4ea5037e263302adde843441",
"assets/assets/app_logo.png": "5c44420586951b3a8d0d484155e235b7",
"assets/assets/app_logo_text.png": "881809c21cfb3ee5558563b5c76f94c6",
"assets/assets/blue_copy_icon.svg": "3ca8078ea695674ad5ade4b80e3f7f2c",
"assets/assets/blue_delete_icon.png": "9ca67707f40097170049b5a29535ec36",
"assets/assets/blue_download_icon.png": "ebccca5c5a76e1ff7c772f7d3101ba61",
"assets/assets/blue_download_icon.svg": "6d8a7827aef9dd22fe0b47e18d2cbd25",
"assets/assets/blue_folder_icon.svg": "4f262035ff0730c22e2f885eecf8fa89",
"assets/assets/blue_saved_icon.svg": "cc42fd18e8ce8ebf2dfd5584b51813a6",
"assets/assets/blue_share_icon.svg": "4bab976f08274cbb4d7c2bf04b901d7c",
"assets/assets/browse_ai_structure_menu_icon.png": "7dca79a5c74de0249a6295c2cc6c43a3",
"assets/assets/browse_ai_structure_menu_icon.svg": "fec0495d515e8b1a05413775e0bdcbb5",
"assets/assets/browse_icon.png": "8b548bbd9c400f44677e7e7e4978f572",
"assets/assets/browse_icon.svg": "7aaf3cbbdc0643531e26c2801bcdb6f6",
"assets/assets/browse_menu_icon.svg": "814419f841ea42bca4869612fea1b1f1",
"assets/assets/cancel_icon.png": "2b3896a75fd91578475cedf0c1e631a4",
"assets/assets/caret-down.svg": "5299651f3dcea7f1994a38323acad204",
"assets/assets/CaretDown.svg": "5299651f3dcea7f1994a38323acad204",
"assets/assets/CaretUp.svg": "eaa002c819cfc39c4fd45b6802b3ab71",
"assets/assets/category_icon.svg": "23a2783d8ab150b489ae2dde5bba9391",
"assets/assets/chat_icon.svg": "22a0dcd902469d8f9e2353e8984647be",
"assets/assets/cloud_download.png": "1c440cda237e8e8486bb09d6410a5f4b",
"assets/assets/connections_to_finden.png": "df412ff1f4b6dcdab4c57503029d2826",
"assets/assets/content_type_icon.svg": "f1f1e0e89509127820e4e09bbec5087a",
"assets/assets/content_type_menu_icon.png": "286ad7bf69f7d9677605f26a5849a04c",
"assets/assets/content_type_menu_icon.svg": "581bd187d6553633a5bab96ef156edcb",
"assets/assets/copy.svg": "b331d8a492506e486aa8c5b8a6f221ab",
"assets/assets/dashboard.png": "4077802da2962f03d5df18bb6afe45f1",
"assets/assets/delete_icon.png": "1735133c0b8db093b1de2c92010754e7",
"assets/assets/document.jpg": "e803e8e193a68caaf35b913c1c590e10",
"assets/assets/doc_icon.svg": "b356baf879cb7c490e57118aafc4baee",
"assets/assets/download_icon.png": "1c16eca4cd93ddbe20769612f722ea26",
"assets/assets/dropbox.png": "c694bed9d42d4e502f222d308d468ed1",
"assets/assets/dropbox_icon.png": "0d423c3a9179d5ef98e438251e61568a",
"assets/assets/dublicate_icon.png": "585d0dbe69e584e87c20c1acccc87840",
"assets/assets/DuplicateBox.png": "ea405a32e935480a5640512c0df8a42f",
"assets/assets/duplicate_icon.png": "585d0dbe69e584e87c20c1acccc87840",
"assets/assets/edit_icon.png": "5746112bdcbbcc817636f93e34a6c380",
"assets/assets/email_tick_icon.png": "445f395f9c1ccda00306442b18b8c85f",
"assets/assets/evernote.png": "60f9b02dd1bac0a34e8f25add9211169",
"assets/assets/evernote_icon.png": "5a2ef463fa5102f4da15934b682625c5",
"assets/assets/eye_off.png": "77673eb609876dd0bee529f834e7bd75",
"assets/assets/eye_on.png": "db64aac6b522d14ae44e6584bdd67997",
"assets/assets/fb.png": "ed2015fd9708d627e25fa31149df26df",
"assets/assets/fifthPercentage.png": "d233a33ec6aa5cbe4bfe52ed10a3cd8f",
"assets/assets/file.svg": "ecbefa87ffbf41de0f7841a47eaf43e6",
"assets/assets/FileBox.png": "97a087f7dc8d2ea806d69b6fedafca37",
"assets/assets/file_detail_ask_icon.svg": "7f704b53581d0f278874c553934a9596",
"assets/assets/file_detail_copy_icon.svg": "19482d04111e5a978078225752c10d9f",
"assets/assets/file_detail_delete_icon.svg": "13a8b16fc3fa12956b31683699581c32",
"assets/assets/file_detail_download_icon.svg": "0b450062700e113112d47cecb4ff0b2c",
"assets/assets/file_detail_edit_icon.svg": "f3f9182157eafbff5d802789ad762a83",
"assets/assets/file_detail_save_icon.svg": "9132517f17e324f4ff6e2cfbe13d5448",
"assets/assets/file_detail_share_icon.svg": "b30b8a692bb7e1db1bc7289fd8ba0b54",
"assets/assets/file_detail_similar_icon.svg": "8e329cbb152fb842f76db98a289f1d9c",
"assets/assets/file_detail_summary_icon.svg": "ff07de9ea0ebc0888d36b0be685657a3",
"assets/assets/filter_icon.png": "2b2cead0f8211173da2b798c5156a3fa",
"assets/assets/filter_icon.svg": "267cb2fe3b4b5c6f0ce746c96274149c",
"assets/assets/filter_v1.svg": "8429a456b3351ffd50afa93f0226f1bc",
"assets/assets/find_important_files_image.png": "bff55ef57d688c65d2f7600ea258fca3",
"assets/assets/folder_icon.svg": "c45f72dca0eff40b246b4431010efad2",
"assets/assets/folder_structure_icon.svg": "43dceed917fa73a9f03490859e0f60da",
"assets/assets/folder_structure_menu_icon.png": "254b29280cfe1b9d5f19d3b97074eb85",
"assets/assets/folder_structure_menu_icon.svg": "656ed27f6603f7952614aa70fff4f47a",
"assets/assets/footer_bg.png": "676db97e5d9a154da40837c7aff3049d",
"assets/assets/fourthPercentage.png": "b8d8aaff164d8d5e90d78efd8bd708d2",
"assets/assets/good_to_know_button.png": "a9287a88eceb8e1f52b70a4cb40cdf23",
"assets/assets/google-new.svg": "bdb48dc40c39efcdc1b14872f5a8411a",
"assets/assets/google_drive.png": "4a285cad1a281b5d6f8dfda61250cb17",
"assets/assets/google_drive_icon.png": "aea7931923c46529c70e24188246ef2c",
"assets/assets/google_icon.png": "a53a7caf0cfd1df9cef4421aab1812fc",
"assets/assets/grid_v1.svg": "4e456a04cbb2dce638d2d07a21767bea",
"assets/assets/grid_view_icon.svg": "62d27cb8ecbdefbf4be11b18b6beb75a",
"assets/assets/harddrive_icon.png": "cc26903fd23ece4425198f9686b0a821",
"assets/assets/hint_message_icon.svg": "dfb8da204bfbad8c7b0073c5a84b4778",
"assets/assets/history_icon.png": "63b859170a2913cc1d645d3d9c9d80ef",
"assets/assets/history_icon_v1.svg": "cf624efa7e257d7c1dc0670bb986fe9a",
"assets/assets/home_bg_1.png": "eb5adce92c55e37969f004b0184602e7",
"assets/assets/home_bg_2.png": "8ec56729dbd901b996541ca580b274a2",
"assets/assets/home_icon.png": "a4cf95bf3121000854266726ccd833a0",
"assets/assets/home_icon.svg": "31631f23110192b7347132e02b2b6d03",
"assets/assets/icloud.png": "fdaa332fc5865ab8d3160098cac9839f",
"assets/assets/icloud_icon.png": "21e51df514a61f4211a38f8ec347d3d3",
"assets/assets/icon_home.png": "ebe89a39bf4632bc6b5ed55afd60880a",
"assets/assets/instagram_logo.png": "afef5f193382342caf834f455d19b237",
"assets/assets/ios_icon.png": "bf2656bf6c174edd3c54a49dfde6c433",
"assets/assets/ios_icon.svg": "c86dbcfaf7f799ce3af7c889caa1b9b5",
"assets/assets/linkedin_logo.png": "ca32ff9bbbe6a399f0dde7f73ffc9823",
"assets/assets/list_file_icon.png": "62d9fffa37c307361ad32a57c413d0fc",
"assets/assets/list_view_icon.svg": "f6e323dc5b1584f69ba1873bfe827f50",
"assets/assets/list_view_v1.svg": "5abb4ffc5e746902a8aab8b1749cdd9f",
"assets/assets/local_storage.png": "d2b5a499b87dd97f29cf0669bc181f96",
"assets/assets/log_out_icon.svg": "a0df488323c63578f10af3208d71c26e",
"assets/assets/mac.png": "dff6414a2d118ae7d07a72eb36df0483",
"assets/assets/macos_icon.png": "65ff1a83cc09c68ac12810f9abf5d31d",
"assets/assets/macos_icon.svg": "a29ca25a64e61a806aa71612dda951af",
"assets/assets/macos_icon_old.svg": "c0b509c375ff6bb30323022ba004894b",
"assets/assets/mac_os_icon.svg": "65da5ae179682fb8b1fb0c88501af3f9",
"assets/assets/manage_data_image.png": "be582ed9191b07559821396f12c354dd",
"assets/assets/master_folder_icon.svg": "6d289097c3ad3e5c35d3c15247442179",
"assets/assets/menu_icon.svg": "03220d15789ad2bb8b2ab471df23d5fb",
"assets/assets/message.svg": "2b7e90fefd3d136087eae615a22c0f78",
"assets/assets/message_send_icon.svg": "51aa25f3806a369dfbcfc09d9839790c",
"assets/assets/microsoft_icon.png": "a2b5a50a4a30af83c4813b790284c321",
"assets/assets/mobile_access_data_image.png": "6857c1139dc2a52adc5a4e1335e44754",
"assets/assets/mobile_central_data.png": "38b15498e3a5a1e65461765991f42fac",
"assets/assets/mobile_footer_bg.png": "6656d3c33d04daa28b85b9e6da85e0e6",
"assets/assets/mobile_home_bg_1.png": "c58577920e8aa2425bc0500aec83d9a4",
"assets/assets/mobile_home_bg_2.png": "efabb47d070ce477920b3192ab9980e7",
"assets/assets/mobile_important_data_image.png": "f04274f9aa992e2f2ae0826b33f42a7b",
"assets/assets/mobile_navigation_image.png": "84eadb43826d19a87fce1f2342bff1f2",
"assets/assets/mobile_outlines_files_details.png": "2c4d0730c794324b71b2761abca1f2e4",
"assets/assets/mobile_outline_details_2.png": "a80283a81576adac57a1f1bdfc34c50b",
"assets/assets/mobile_security_image.png": "65d7f4090df74f8f05b3abd395edff51",
"assets/assets/music.jpg": "707acb0e8904152d7d585cfa8e14cc5e",
"assets/assets/my_connections_icon.svg": "1b7ea87d904ec76e624bd24f3a2b86f5",
"assets/assets/my_local_device_icon.png": "00051a398bcd37ac9a43197642ef7808",
"assets/assets/onedrive_icon.png": "5ea7b124e100b32fa4848296385dca74",
"assets/assets/one_drive.png": "182cd8215ff6dab9d74b67589ee06927",
"assets/assets/os_android_icon.png": "3803637db44fce348fe35987bf8dc776",
"assets/assets/os_apple_icon.png": "007b18461c8c1f94a6a77cc89dddc19f",
"assets/assets/os_macos_icon.png": "9c1eaeb473a61416d9b1f24422cbb63f",
"assets/assets/os_windows_icon.png": "f8b5738d4dc1be4a6693b8dd263fe995",
"assets/assets/outlines_duplicates_image.png": "449143a693bdb5341bbdcd0ddb5b024a",
"assets/assets/pdf.jpg": "c92727073a293eafe2d6b855e986ede3",
"assets/assets/pdf.png": "526cdfadc8e9c5f48fc54917ac26871f",
"assets/assets/person_image.png": "6e045893441a0ffddbfd8631e6c55093",
"assets/assets/private_gpt.svg": "a4e7c6187179fbcc160e816ede3a48e1",
"assets/assets/profile_icon.png": "3d8f6d9235f100d2627129697ce011bb",
"assets/assets/purpule_eclipse.png": "e68f275d0ed9d982879bb2f3428c7a0e",
"assets/assets/reconnect_icon.png": "ebf5bca58d7694ebe8e719282c5ceb68",
"assets/assets/red_delete_icon.svg": "f27d2d404ad74a98845cdb2bf6478de7",
"assets/assets/RelatedBox.png": "639b20ec61c311491a6248da071f9f3a",
"assets/assets/saved_icon.svg": "8857892da92f9c56689dd7a0f7842ba3",
"assets/assets/save_icon.png": "8882d3e32324c0c38fe310c27da3d63e",
"assets/assets/save_unfilled_icon.svg": "31e1b7fc1f3fa533dcbe798c988f1cc5",
"assets/assets/search_icon.png": "67f2ebaa97536dc5d47710d87d24bfa8",
"assets/assets/search_icon.svg": "7986df50c49d6088524973543166e587",
"assets/assets/search_icon_v1.svg": "ed72aae1e75eb149acb541d86d1a6b8a",
"assets/assets/secondPercentage.png": "f44144d91e585a893166fec3cbe1b3c5",
"assets/assets/security_image.png": "956c892d5b5f13eb955fc7d52d3d29e3",
"assets/assets/send_email_success_icon.png": "0ccc28d03c470f48449d05ba13c6ed7e",
"assets/assets/send_tick.png": "6617a553c11ce3f0b85f64bc8789d8b2",
"assets/assets/setting_icon.svg": "316cd7d88e5f2ade2c103aa557d66d60",
"assets/assets/share_icon.png": "6c1d2c9871a08b360472b7711d920872",
"assets/assets/sixthPercentage.png": "6fd24334b9185b6862b31eaa644f48c8",
"assets/assets/solar_cloud_linear.png": "38c5924165a6ab44b25414060046d0c4",
"assets/assets/sort_by_icon.png": "411f18512fec41f97143399f6a19482d",
"assets/assets/SpaceBox.png": "daa0a681614132eef14bcd96f0d2657b",
"assets/assets/star.svg": "84d6728de12caa9cb0804476a6eea558",
"assets/assets/support_icon.png": "76c8c77baeab4758aa97d94487bbe699",
"assets/assets/support_icon.svg": "7517d4adc6e0b00c0df64a9955765613",
"assets/assets/teenyicons_computer.png": "805de8d9fa7c091ca802805faf43df6c",
"assets/assets/telegram.png": "3625d8d587adb475035a7f8eaf8976b4",
"assets/assets/thirdPercentage.png": "407aea21800ccc3212ce8e37591a5551",
"assets/assets/tick.png": "3345750098116ec0a7cc7f8bbdf0772a",
"assets/assets/tick_download.png": "1789c841275d0c5728f12a68508aed43",
"assets/assets/tile_option_button.svg": "7f95d4080ac17a19542d2d8f2e7cd23b",
"assets/assets/time_and_resources.png": "b87c1586b708cc93aba7616c18f2a761",
"assets/assets/toggle_icon.png": "188fda8673e887c8aa052984a20bb135",
"assets/assets/toggle_icon.svg": "24cd4b67652c4899c40b7577f3d6e042",
"assets/assets/toggle_icon_off.png": "ef85a825e86b5c9541b2974c9d553020",
"assets/assets/train_ai_icon.png": "e2a38a5c7e40e21b8da4763a7561fe2f",
"assets/assets/train_ai_icon.svg": "dcc84dfc38f7182439edd108ab07e0ef",
"assets/assets/train_ai_menu_icon.svg": "fc4393daac2a5195d0ec3ac8396c6750",
"assets/assets/twitter_logo.png": "9e039d0352aded86d37a5cbdde8ae71c",
"assets/assets/video.jpg": "152030234a264227332231728122004d",
"assets/assets/wa.png": "b6cd05701f9dc0f213f9ee76eb8b7f81",
"assets/assets/whatsapp.png": "daedd61270fd9f720f871abe89a4463a",
"assets/assets/whatsapp_icon.png": "3ddb364b1a497bb73fbefb3b6b1c19bf",
"assets/assets/windows.png": "e724defc80a699eb6ce75c86a68197d1",
"assets/assets/windows_os_icon.svg": "cf346fa191dfcbb27d3d592c7a41312f",
"assets/assets/x.png": "1c507ba0011218adf05bb3e6074631c8",
"assets/FontManifest.json": "7920de41c58b42dbd3b2fdc96094529a",
"assets/fonts/MaterialIcons-Regular.otf": "29a42402546c976382d357507d36418c",
"assets/NOTICES": "563c7fffefc66acb2ac7788239e2620a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-arrow.png": "8efbd753127a917b4dc02bf856d32a47",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-arrow.png": "3ea423a6ae14f8f6cf1e4c39618d3e4b",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/icon-arrow.png": "678ebcc99d8f105210139b30755944d6",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "b797febcf78b50622db7ed7b416b8759",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/google_sign_in_all_platforms_desktop/assets/post_auth_page.html": "f0e5147ec4e93bf8d6f4f82eb8d1c00e",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"auth-handler.html": "f7f28f11715cfb670940976506a14326",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "b6f2732b4864e062c62db2f7a15c0792",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "3e1e6a0070407c6e6627c9d1f4ad32bd",
"icons/android-icon-144x144.png": "ca8bd697d7bd32608fcc7856bc21791b",
"icons/android-icon-192x192.png": "5aecb9de683ff3ac513cec3c7d29b255",
"icons/android-icon-36x36.png": "344d43a9c7932680ad0647feeafb7bfc",
"icons/android-icon-48x48.png": "a0651e69bc8e1165f5135439634008fc",
"icons/android-icon-72x72.png": "565b60823fb5d211510b6bdff48370bf",
"icons/android-icon-96x96.png": "491d5d510522214fe89f16c022f11306",
"icons/apple-icon-114x114.png": "57111b9bdff5059b5ee3b712d1723dfe",
"icons/apple-icon-120x120.png": "01de60205dc086df571939964d9c39ec",
"icons/apple-icon-144x144.png": "ca8bd697d7bd32608fcc7856bc21791b",
"icons/apple-icon-152x152.png": "d9cf6384de9c6dc64e5f61437462bf14",
"icons/apple-icon-180x180.png": "b648b902a58b5ad69fb34b87f6ef70fb",
"icons/apple-icon-57x57.png": "f750cd9d9416a611b771dde8d5d84491",
"icons/apple-icon-60x60.png": "cee610451e69c4b475da585fd231371c",
"icons/apple-icon-72x72.png": "565b60823fb5d211510b6bdff48370bf",
"icons/apple-icon-76x76.png": "2365c87fa41cf3c2e537922afa96f2fc",
"icons/apple-icon-precomposed.png": "3e4bbc0f97f12a2933ac8ebfd2719fcf",
"icons/apple-icon.png": "3e4bbc0f97f12a2933ac8ebfd2719fcf",
"icons/favicon-16x16.png": "6c897bd99dedcc7353c75ed0f338387a",
"icons/favicon-32x32.png": "ddd2a0bdf5111f420ef746f1b59c1f5d",
"icons/favicon-96x96.png": "491d5d510522214fe89f16c022f11306",
"icons/ms-icon-144x144.png": "ca8bd697d7bd32608fcc7856bc21791b",
"icons/ms-icon-150x150.png": "eacb8f47ea31e18fe038445970c624b5",
"icons/ms-icon-310x310.png": "a06c7901121eaa89d515582d1fea1873",
"icons/ms-icon-70x70.png": "8ddfde2676d3f2e6f291f5c35321b66b",
"index.html": "06797c4bd266a8f44a9fa854a8dcee18",
"/": "06797c4bd266a8f44a9fa854a8dcee18",
"main.dart.js": "58e6df28a9707194955bb73504041ba8",
"manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"splash/img/dark-1x.png": "87c291b27a83e73f1699e3208e4c4722",
"splash/img/dark-2x.png": "730777a3d49229ba7f3ee64a9f77393e",
"splash/img/dark-3x.png": "94f5ca01b9aec84d4c8ffd45d8a13342",
"splash/img/dark-4x.png": "2eb0fa01d5a0bdf1c62ce86d937dc443",
"splash/img/light-1x.png": "87c291b27a83e73f1699e3208e4c4722",
"splash/img/light-2x.png": "730777a3d49229ba7f3ee64a9f77393e",
"splash/img/light-3x.png": "94f5ca01b9aec84d4c8ffd45d8a13342",
"splash/img/light-4x.png": "2eb0fa01d5a0bdf1c62ce86d937dc443",
"version.json": "479c1d2b5f9e38c619250aef6eb4a7b6"};
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
