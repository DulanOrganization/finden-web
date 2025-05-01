'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "54b091ba7db8694db968cb5359194ff3",
"auth-handler.html": "97b3db0108e90b42c69f2645fc8d1cad",
"version.json": "ebc237d4d4309a88f1ad3d5c422c3ea8",
"splash/img/light-2x.png": "730777a3d49229ba7f3ee64a9f77393e",
"splash/img/dark-4x.png": "2eb0fa01d5a0bdf1c62ce86d937dc443",
"splash/img/light-3x.png": "94f5ca01b9aec84d4c8ffd45d8a13342",
"splash/img/dark-3x.png": "94f5ca01b9aec84d4c8ffd45d8a13342",
"splash/img/light-4x.png": "2eb0fa01d5a0bdf1c62ce86d937dc443",
"splash/img/dark-2x.png": "730777a3d49229ba7f3ee64a9f77393e",
"splash/img/dark-1x.png": "87c291b27a83e73f1699e3208e4c4722",
"splash/img/light-1x.png": "87c291b27a83e73f1699e3208e4c4722",
"favicon.ico": "b6f2732b4864e062c62db2f7a15c0792",
"index.html": "ce5011d638b0280895f7fcf76fe3e8ab",
"/": "ce5011d638b0280895f7fcf76fe3e8ab",
"main.dart.js": "11cda82860402b2934cfba4c7d44053e",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"icons/favicon-16x16.png": "6c897bd99dedcc7353c75ed0f338387a",
"icons/apple-icon.png": "3e4bbc0f97f12a2933ac8ebfd2719fcf",
"icons/apple-icon-144x144.png": "ca8bd697d7bd32608fcc7856bc21791b",
"icons/android-icon-192x192.png": "5aecb9de683ff3ac513cec3c7d29b255",
"icons/apple-icon-precomposed.png": "3e4bbc0f97f12a2933ac8ebfd2719fcf",
"icons/apple-icon-114x114.png": "57111b9bdff5059b5ee3b712d1723dfe",
"icons/ms-icon-310x310.png": "a06c7901121eaa89d515582d1fea1873",
"icons/ms-icon-144x144.png": "ca8bd697d7bd32608fcc7856bc21791b",
"icons/apple-icon-57x57.png": "f750cd9d9416a611b771dde8d5d84491",
"icons/apple-icon-152x152.png": "d9cf6384de9c6dc64e5f61437462bf14",
"icons/ms-icon-150x150.png": "eacb8f47ea31e18fe038445970c624b5",
"icons/android-icon-72x72.png": "565b60823fb5d211510b6bdff48370bf",
"icons/android-icon-96x96.png": "491d5d510522214fe89f16c022f11306",
"icons/android-icon-36x36.png": "344d43a9c7932680ad0647feeafb7bfc",
"icons/apple-icon-180x180.png": "b648b902a58b5ad69fb34b87f6ef70fb",
"icons/favicon-96x96.png": "491d5d510522214fe89f16c022f11306",
"icons/android-icon-48x48.png": "a0651e69bc8e1165f5135439634008fc",
"icons/apple-icon-76x76.png": "2365c87fa41cf3c2e537922afa96f2fc",
"icons/apple-icon-60x60.png": "cee610451e69c4b475da585fd231371c",
"icons/android-icon-144x144.png": "ca8bd697d7bd32608fcc7856bc21791b",
"icons/apple-icon-72x72.png": "565b60823fb5d211510b6bdff48370bf",
"icons/apple-icon-120x120.png": "01de60205dc086df571939964d9c39ec",
"icons/favicon-32x32.png": "ddd2a0bdf5111f420ef746f1b59c1f5d",
"icons/ms-icon-70x70.png": "8ddfde2676d3f2e6f291f5c35321b66b",
"manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"assets/AssetManifest.json": "418377dd95c4ac2db9e64ab4b5873438",
"assets/NOTICES": "733cef3587dfad8d7da9a7e3689e36f1",
"assets/FontManifest.json": "3563521961fb24a7b0e6042f37969826",
"assets/AssetManifest.bin.json": "3e6cb17f57e6a24838f9ead4dbb16510",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "b797febcf78b50622db7ed7b416b8759",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "76bd55cc08e511bb603cc53003b81051",
"assets/packages/google_sign_in_all_platforms_desktop/assets/post_auth_page.html": "f0e5147ec4e93bf8d6f4f82eb8d1c00e",
"assets/packages/gpt_markdown/lib/fonts/JetBrainsMono-Regular.ttf": "d09f65145228b709a10fa0a06d522d89",
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
"assets/AssetManifest.bin": "0ccd8a193d8f364d5c11d8f21e356fbc",
"assets/fonts/MaterialIcons-Regular.otf": "c8b3b7f7d63054b2ed7a25c5d86490ed",
"assets/assets/icloud_icon.png": "21e51df514a61f4211a38f8ec347d3d3",
"assets/assets/caret-down.svg": "f8e41d9a8d1b9ac0bad129d906809190",
"assets/assets/security_image.png": "956c892d5b5f13eb955fc7d52d3d29e3",
"assets/assets/Rectangle%25202626.png": "174d570188be466ae65fe8418cbc0f8e",
"assets/assets/audio_icon.png": "d6dc5b4927a7e0573833638d7f2755f3",
"assets/assets/train_ai_icon.png": "e2a38a5c7e40e21b8da4763a7561fe2f",
"assets/assets/DuplicateBox.png": "ea405a32e935480a5640512c0df8a42f",
"assets/assets/document.png": "c7414c24f8d9e4d1ffd8d60d235c6947",
"assets/assets/onedrive_icon.png": "5ea7b124e100b32fa4848296385dca74",
"assets/assets/memory_bank_icon.svg": "254f6adf51f3f44f1ac6d9e7031451ea",
"assets/assets/CaretUp.svg": "d10e6b92cd633a398667577ea2f54fe2",
"assets/assets/download_icon.png": "1c16eca4cd93ddbe20769612f722ea26",
"assets/assets/person_image.png": "6e045893441a0ffddbfd8631e6c55093",
"assets/assets/folder_icon.svg": "d01b48e6802ddfc610dc85428d085d62",
"assets/assets/windows_os_icon.svg": "3c2879cf558b7c1b78c25653bbfd9309",
"assets/assets/private_gpt.svg": "b9c316764d633cb37b9cbbac2b1067cd",
"assets/assets/success_icon.svg": "bbfcb8a8745f71131f145dbd34a75758",
"assets/assets/file_detail_similar_icon.svg": "8a2bb545030539a6b53b0d0dba147823",
"assets/assets/save_unfilled_icon.svg": "1652e78a64ba1cd386c13963a7683c9f",
"assets/assets/solar_cloud_linear.png": "38c5924165a6ab44b25414060046d0c4",
"assets/assets/telegram.png": "3625d8d587adb475035a7f8eaf8976b4",
"assets/assets/tick.png": "3345750098116ec0a7cc7f8bbdf0772a",
"assets/assets/mobile_access_data_image.png": "6857c1139dc2a52adc5a4e1335e44754",
"assets/assets/eye_on.png": "db64aac6b522d14ae44e6584bdd67997",
"assets/assets/dashboard.png": "bbfaa0252adf39e27f2229ace7e3f799",
"assets/assets/content_type_menu_icon.png": "286ad7bf69f7d9677605f26a5849a04c",
"assets/assets/log_out_icon.svg": "22481461c07feb906017d32b0658609e",
"assets/assets/message_send_icon.svg": "26017e2364b9ede5b1e3a70eaa327537",
"assets/assets/search_icon.svg": "acb86e8d4ae382aef4511bfa1f857ed5",
"assets/assets/teenyicons_computer.png": "805de8d9fa7c091ca802805faf43df6c",
"assets/assets/mobile_footer_bg.png": "6656d3c33d04daa28b85b9e6da85e0e6",
"assets/assets/doc_iconn.png": "38aca153e3db485abfbea19aec3df39e",
"assets/assets/google_icon.png": "a53a7caf0cfd1df9cef4421aab1812fc",
"assets/assets/profile_icon.png": "3d8f6d9235f100d2627129697ce011bb",
"assets/assets/home_bg_2.png": "8ec56729dbd901b996541ca580b274a2",
"assets/assets/memory_identity_icon.png": "63267220bcd95871e132d9f46d0f77b6",
"assets/assets/train_ai_menu_icon.svg": "e945bcacc2b8075bff5c14a242f91bd8",
"assets/assets/master_folder_icon.svg": "28fd118e6774967a7260879b6b6c3607",
"assets/assets/good_to_know_button.png": "a9287a88eceb8e1f52b70a4cb40cdf23",
"assets/assets/tick_download.png": "1789c841275d0c5728f12a68508aed43",
"assets/assets/memory_bank_wide_icon.png": "be09e842784aa0394850268aa834775d",
"assets/assets/macos_icon.svg": "c40a0f837c4bbfb01cfa092b9d795d14",
"assets/assets/android_icon.svg": "10eba96cbcd8a7f892a546a92ad1700a",
"assets/assets/confluence_icon.png": "0c1fa8607060fd93f81c6c7b20da7755",
"assets/assets/chat_icon.svg": "beb994b684ce81d10be67650c7cd2aac",
"assets/assets/home_icon.svg": "1528bcc356a1376d661bef750b614a01",
"assets/assets/saved_icon.svg": "a85938c2ad59cc2f4494fc5b008589b1",
"assets/assets/support_icon.svg": "be9b9eb3665687a0fd72ce84c09bb3a2",
"assets/assets/duplicate_icon.png": "585d0dbe69e584e87c20c1acccc87840",
"assets/assets/retry_btn.svg": "898c5f920c980ea364cca7dbcacfc34c",
"assets/assets/file.svg": "d6768a25205dd76a7cb7d65d6be75572",
"assets/assets/home_bg_1.png": "eb5adce92c55e37969f004b0184602e7",
"assets/assets/hint_message_icon.svg": "7f3dfce806c98f49db7275b5f6d0f146",
"assets/assets/toggle_icon.svg": "0dd9bb46672c6716745d77855796cef6",
"assets/assets/grid_view_icon.svg": "3b84fda9206db482178e060bb1c0047f",
"assets/assets/toggle_icon_off.png": "ef85a825e86b5c9541b2974c9d553020",
"assets/assets/x.png": "1c507ba0011218adf05bb3e6074631c8",
"assets/assets/edit_icon.png": "5746112bdcbbcc817636f93e34a6c380",
"assets/assets/macos_icon_old.svg": "c0b509c375ff6bb30323022ba004894b",
"assets/assets/dropbox_icon.png": "0d423c3a9179d5ef98e438251e61568a",
"assets/assets/toggle_icon.png": "188fda8673e887c8aa052984a20bb135",
"assets/assets/doc_icon.svg": "1acedc7ffc8291a4374d8c48f8caf119",
"assets/assets/memory_finicial_icon.png": "49ee2505dd1414142098518dd0e6af1f",
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
"assets/assets/memory_work_icon.png": "d9a39349b41c945e668b6e5adbc8d20e",
"assets/assets/fb.png": "ed2015fd9708d627e25fa31149df26df",
"assets/assets/android_icon.png": "65ff1a83cc09c68ac12810f9abf5d31d",
"assets/assets/content_type_icon.svg": "a103e0e3a4d7098cd4a4181eca0cddf4",
"assets/assets/outlines_duplicates_image.png": "449143a693bdb5341bbdcd0ddb5b024a",
"assets/assets/manage_data_image.png": "be582ed9191b07559821396f12c354dd",
"assets/assets/macos_icon.png": "65ff1a83cc09c68ac12810f9abf5d31d",
"assets/assets/music.png": "1290d25ef8be5097459cc8a352363671",
"assets/assets/alert_triangle.png": "40f00f2434b386af718004c0faeb78cc",
"assets/assets/menu_icon.svg": "5b29cd5045cc27edf7b1093256b0fa13",
"assets/assets/memory_reminder_icon.png": "4f644a0eabe4ed6bf19c62dcc3ed0e17",
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
"assets/assets/success_icon.png": "462fa60cc10cb2531c52e74c9eaeb82f",
"assets/assets/file_detail_delete_icon.svg": "5e49eb08da5d5e5572b268b5f629eaf9",
"assets/assets/send_tick.png": "6617a553c11ce3f0b85f64bc8789d8b2",
"assets/assets/whatsapp_iconn.png": "0eb86d177cd30891b63d5c86a7f8bfc5",
"assets/assets/dropbox.png": "c694bed9d42d4e502f222d308d468ed1",
"assets/assets/purpule_eclipse.png": "e68f275d0ed9d982879bb2f3428c7a0e",
"assets/assets/mac_os_icon.svg": "12ba771346da1fb3dee2a2ef801b948a",
"assets/assets/os_apple_icon.png": "007b18461c8c1f94a6a77cc89dddc19f",
"assets/assets/eye_off.png": "77673eb609876dd0bee529f834e7bd75",
"assets/assets/mac.png": "dff6414a2d118ae7d07a72eb36df0483",
"assets/assets/category_icon.svg": "3adccc37f6aabdf57610f42cf3aa52c3",
"assets/assets/memory_bank_small_icon.png": "18d25972c7fc8c69bcde690a75e44f75",
"assets/assets/secondPercentage.png": "f44144d91e585a893166fec3cbe1b3c5",
"assets/assets/google_drive.png": "4a285cad1a281b5d6f8dfda61250cb17",
"assets/assets/list_view_icon.svg": "91356fcbfb67a80cc87f72f34d7d86da",
"assets/assets/train_ai_icon.svg": "a4c21a7f4707ae6d5476a9069d244b23",
"assets/assets/one_drive.png": "182cd8215ff6dab9d74b67589ee06927",
"assets/assets/os_macos_icon.png": "9c1eaeb473a61416d9b1f24422cbb63f",
"assets/assets/copy.svg": "47b99d4d23fc5432e9d67ce9257a390b",
"assets/assets/microsoft_icon.png": "a2b5a50a4a30af83c4813b790284c321",
"assets/assets/memory_legal_icon.png": "173bb8d15738a32e8c1790197a29e4ab",
"assets/assets/browse_ai_structure_menu_icon.png": "7dca79a5c74de0249a6295c2cc6c43a3",
"assets/assets/blue_download_icon.svg": "dac18d56afd5e959f6dc20a8568bf176",
"assets/assets/apple.png": "084bbc5d4ea5037e263302adde843441",
"assets/assets/mobile_outlines_files_details.png": "2c4d0730c794324b71b2761abca1f2e4",
"assets/assets/history_icon_v1.svg": "46fc2da2acac8801ce23aefbf1de0743",
"assets/assets/icloud.png": "fdaa332fc5865ab8d3160098cac9839f",
"assets/assets/grid_v1.svg": "dada9056b8062e3cfb0bd345568dcb56",
"assets/assets/copy_icon.svg": "6ded563073fd99272f2a887445a38b5f",
"assets/assets/send_email_success_icon.png": "0ccc28d03c470f48449d05ba13c6ed7e",
"assets/assets/find_important_files_image.png": "bff55ef57d688c65d2f7600ea258fca3",
"assets/assets/xls.png": "f8d00623ed846730b02435e78a6a3480",
"assets/assets/message.svg": "29678fc6062842b17b00f90b03eb83ad",
"assets/assets/sort_by_icon.png": "411f18512fec41f97143399f6a19482d",
"assets/assets/whatsapp_qr.png": "80885fdbc2202947dee25d339575f1bc",
"assets/assets/image_icon.png": "4ac7818c3bb97740b8466914eb98fe35",
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
"assets/assets/video_icon.png": "b2ccc35c36d4095f3ea82aea64911cf2",
"assets/assets/os_windows_icon.png": "f8b5738d4dc1be4a6693b8dd263fe995",
"assets/assets/ios_icon.svg": "aeb0b5f7e5773a7dccbd64c51d84ab90",
"assets/assets/video.png": "993e7cb992c025de0bc81f5436398015",
"assets/assets/icon_home.png": "ebe89a39bf4632bc6b5ed55afd60880a",
"assets/assets/filter_icon.png": "2b2cead0f8211173da2b798c5156a3fa",
"assets/assets/RelatedBox.png": "639b20ec61c311491a6248da071f9f3a",
"assets/assets/error_icon.png": "b63a35b6274b77c374131a032fb86df9",
"assets/assets/browse_icon.png": "8b548bbd9c400f44677e7e7e4978f572",
"assets/assets/ppt_icon.png": "18d07fc8ba4339c1f071894342c2066c",
"assets/assets/evernote.png": "60f9b02dd1bac0a34e8f25add9211169",
"assets/assets/list_view_v1.svg": "6f5cbfe65fc49546393105594c9687dd",
"assets/assets/pdf_icon.png": "d1b712b72f93310109a8dbb128cfe028",
"assets/assets/folder_structure_menu_icon.svg": "12930be14801d6c005d27448fea2b7b3",
"assets/assets/blue_delete_icon.png": "9ca67707f40097170049b5a29535ec36",
"assets/assets/mobile_home_bg_2.png": "efabb47d070ce477920b3192ab9980e7",
"assets/assets/footer_bg.png": "676db97e5d9a154da40837c7aff3049d",
"assets/assets/app_logo.png": "5c44420586951b3a8d0d484155e235b7",
"assets/assets/SpaceBox.png": "daa0a681614132eef14bcd96f0d2657b",
"assets/assets/history_icon.png": "63b859170a2913cc1d645d3d9c9d80ef",
"assets/assets/evernote_icon.png": "5a2ef463fa5102f4da15934b682625c5",
"assets/assets/pdf.png": "a26530d6d6bf236755c1bca21ee9fbc1",
"assets/assets/folder_structure_menu_icon.png": "254b29280cfe1b9d5f19d3b97074eb85",
"assets/assets/red_delete_icon.svg": "9bddaafdd3c063809a7dcba9f02b940d",
"assets/assets/file_detail_edit_icon.svg": "c17ec718eac921baf8e99a62aa41e483",
"assets/assets/memory_bg.png": "b0f3a67212d77dbedd58c317105a9fb1",
"assets/assets/browse_icon.svg": "2fe40e675823e9c95a1f871a6fcb10c9",
"assets/assets/windows.png": "e724defc80a699eb6ce75c86a68197d1",
"assets/assets/FileBox.png": "97a087f7dc8d2ea806d69b6fedafca37",
"assets/assets/memory_utility_icon.png": "5467064cf2654fa2ea6bca6a115e7d80",
"assets/assets/mobile_central_data.png": "38b15498e3a5a1e65461765991f42fac",
"assets/assets/instagram_logo.png": "afef5f193382342caf834f455d19b237",
"assets/assets/notion_icon.png": "7c71d08772cfef1f2f63a73151ec72b6",
"assets/assets/wa.png": "b6cd05701f9dc0f213f9ee76eb8b7f81",
"assets/assets/txt_icon.png": "af4f699da8c0824acd3b49851bf3f84a",
"assets/assets/filter_icon.svg": "7e5c278039b06709ff21a0b08bb8e6ca",
"assets/assets/ios_icon.png": "bf2656bf6c174edd3c54a49dfde6c433",
"assets/assets/file_detail_download_icon.svg": "b90e47fe35f3ad7722fc8df711c43432",
"assets/assets/my_local_device_icon.png": "00051a398bcd37ac9a43197642ef7808",
"assets/assets/fonts/NotoColorEmoji.ttf": "4981d3d22bda9c3d0791c13cb612e95d",
"assets/assets/whatsapp.png": "daedd61270fd9f720f871abe89a4463a",
"assets/assets/os_android_icon.png": "3803637db44fce348fe35987bf8dc776",
"assets/assets/whatsapp_processing.svg": "20dc53f9cf665a7158542cbcc58bea3f",
"assets/assets/linkedin_logo.png": "ca32ff9bbbe6a399f0dde7f73ffc9823",
"assets/assets/whatsapp_icon.png": "3ddb364b1a497bb73fbefb3b6b1c19bf",
"assets/assets/access_data_image.png": "8e021437d7abe8db08319f12239396d5",
"assets/assets/memory_instuarance_icon.png": "adbe9fd5f0077be3a2bc1bc948755bfa",
"assets/assets/filter_v1.svg": "caefce2de1c784ca70d6a9ebd647135e",
"assets/assets/save_icon.png": "8882d3e32324c0c38fe310c27da3d63e",
"assets/assets/mobile_outline_details_2.png": "a80283a81576adac57a1f1bdfc34c50b",
"assets/assets/share_point_icon.png": "02595da6a0e468ba3f910d521476e17d",
"assets/assets/dublicate_icon.png": "585d0dbe69e584e87c20c1acccc87840",
"assets/assets/file_detail_summary_icon.svg": "d047b42219f9be4bc611318ff04c61e5",
"assets/assets/blue_saved_icon.svg": "a28fa3e468be176d4b19f86ae811f2ea",
"assets/assets/blue_folder_icon.svg": "c478f20cf0991ea19343e5b515e52915",
"assets/assets/animations/chat_loading.json": "3350021c73b7221b419d2cbc66438443",
"assets/assets/animations/whatsapp_loading.json": "7fc47f650e20a707774c959ebe47f2a8",
"assets/assets/animations/f_animation.json": "9fbfa08a07a3803a7154d3f08dbcc921",
"assets/assets/animations/loading_animation.json": "4759e7a6516f7065f48431f72713851c",
"assets/assets/my_connections_icon.svg": "692be57cb170ca76ad55e3621531c296",
"assets/assets/blue_share_icon.svg": "12e0d0dcd00ecb6495f9ef87c6b91c71",
"assets/assets/reconnect_icon.png": "ebf5bca58d7694ebe8e719282c5ceb68",
"assets/assets/image.png": "151f2359e5536ea68bc53a3f916cc31d",
"assets/assets/tile_option_button.svg": "ee8c90cb4bc343d45a188d47181f99e6",
"assets/assets/blue_download_icon.png": "ebccca5c5a76e1ff7c772f7d3101ba61",
"assets/assets/browse_menu_icon.svg": "06779a796f778b707988ab205d3c71cc",
"assets/assets/browse_ai_structure_menu_icon.svg": "6e4d0fd693fdd4d4a7935d37654d55b9",
"assets/assets/fourthPercentage.png": "b8d8aaff164d8d5e90d78efd8bd708d2",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
