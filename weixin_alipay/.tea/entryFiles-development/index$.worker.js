if(!self.__appxInited) {
self.__appxInited = 1;
require('@alipay/appx-compiler/lib/sjsEnvInit');

require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}

if(AFAppX.compilerConfig){ AFAppX.compilerConfig.component2 = true; }

function success() {
require('../../client/app');
require('../../client/onekit/ui/ad/ad?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/button/button?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/checkbox/checkbox?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/editor/editor?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/icon/icon?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/map/map?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/modal/modal?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/open-data/open-data?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/rich-text/rich-text?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/video/video?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/canvas/canvas?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/audio/audio?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/camera/camera?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/checkbox-group/checkbox-group?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/cover-image/cover-image?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/cover-view/cover-view?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/form/form?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/functional-page-navigator/functional-page-navigator?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/image/image?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/input/input?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/label/label?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/live-player/live-player?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/live-pusher/live-pusher?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/movable-area/movable-area?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/movable-view/movable-view?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/navigation-bar/navigation-bar?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/navigator/navigator?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/official-account/official-account?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/page-meta/page-meta?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/picker/picker?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/picker-view/picker-view?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/picker-view-column/picker-view-column?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/progress/progress?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/radio/radio?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/radio-group/radio-group?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/scroll-view/scroll-view?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/slider/slider?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/swiper/swiper?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/swiper-item/swiper-item?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/switch/switch?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/text/text?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/textarea/textarea?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/view/view?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/voip-room/voip-room?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/onekit/ui/web-view/web-view?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../client/page/component/index?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/canvas/canvas?hash=f93f0d943630cb8dc8e0e00384ef2d125bca6984');
require('../../client/page/component/pages/video/video?hash=96d3d26be3e57bf240ef82d8fa156b65c4bd0bc6');
require('../../client/page/component/pages/editor/editor?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/view/view?hash=96d3d26be3e57bf240ef82d8fa156b65c4bd0bc6');
require('../../client/page/component/pages/scroll-view/scroll-view?hash=96d3d26be3e57bf240ef82d8fa156b65c4bd0bc6');
require('../../client/page/component/pages/swiper/swiper?hash=96d3d26be3e57bf240ef82d8fa156b65c4bd0bc6');
require('../../client/page/component/pages/text/text?hash=4fc3c21e530bda37463edb94eaed7745de2d678d');
require('../../client/page/component/pages/icon/icon?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/progress/progress?hash=fac37decbf60fe78859c6b93a844cadd8c67a94e');
require('../../client/page/component/pages/button/button?hash=21f17a5cf9a2c58eac2ea6532369ac47acb5324e');
require('../../client/page/component/pages/checkbox/checkbox?hash=96d3d26be3e57bf240ef82d8fa156b65c4bd0bc6');
require('../../client/page/component/pages/form/form?hash=96d3d26be3e57bf240ef82d8fa156b65c4bd0bc6');
require('../../client/page/component/pages/input/input?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/label/label?hash=96d3d26be3e57bf240ef82d8fa156b65c4bd0bc6');
require('../../client/page/component/pages/picker/picker?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/radio/radio?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/slider/slider?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/switch/switch?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/textarea/textarea?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/navigator/navigator?hash=c9d88627a35021ea7993232a1adb73d99e3a098e');
require('../../client/page/component/pages/navigator/navigate?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/navigator/redirect?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/image/image?hash=e2a537845ca4fcd8a75ec93a822ae244ab8eee3f');
require('../../client/page/component/pages/audio/audio?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/map/map?hash=96d3d26be3e57bf240ef82d8fa156b65c4bd0bc6');
require('../../client/page/component/pages/ad/ad?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/movable-view/movable-view?hash=96d3d26be3e57bf240ef82d8fa156b65c4bd0bc6');
require('../../client/page/component/pages/cover-view/cover-view?hash=96d3d26be3e57bf240ef82d8fa156b65c4bd0bc6');
require('../../client/page/component/pages/rich-text/rich-text?hash=5c2f1f48d8076201818617e49de5d7e176c27e58');
require('../../client/page/API/index?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/login/login?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/get-user-info/get-user-info?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/request-payment/request-payment?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/share/share?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/share-button/share-button?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/custom-message/custom-message?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/template-message/template-message?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/set-navigation-bar-title/set-navigation-bar-title?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/navigation-bar-loading/navigation-bar-loading?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/navigator/navigator?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/pull-down-refresh/pull-down-refresh?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/animation/animation?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/action-sheet/action-sheet?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/modal/modal?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/toast/toast?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/get-network-type/get-network-type?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/on-network-status-change/on-network-status-change?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/get-system-info/get-system-info?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/on-compass-change/on-compass-change?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/make-phone-call/make-phone-call?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/scan-code/scan-code?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/request/request?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/web-socket/web-socket?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/upload-file/upload-file?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/download-file/download-file?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/image/image?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/voice/voice?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/file/file?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/on-accelerometer-change/on-accelerometer-change?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/canvas/canvas?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/background-audio/background-audio?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/video/video?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/get-location/get-location?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/open-location/open-location?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/choose-location/choose-location?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/storage/storage?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/picker-view/picker-view?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/camera/camera?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/camera-scan-code/camera-scan-code?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/get-wxml-node-info/get-wxml-node-info?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/open-data/open-data?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/web-view/web-view?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/load-font-face/load-font-face?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/clipboard-data/clipboard-data?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/bluetooth/bluetooth?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/screen-brightness/screen-brightness?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/vibrate/vibrate?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/add-contact/add-contact?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/wifi/wifi?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/page-scroll/page-scroll?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/intersection-observer/intersection-observer?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/capture-screen/capture-screen?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/worker/worker?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/ibeacon/ibeacon?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/choose-address/choose-address?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/setting/setting?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/choose-invoice-title/choose-invoice-title?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/soter-authentication/soter-authentication?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/map-styles/map-styles?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/index?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/user-authentication/user-authentication?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/get-wx-context/get-wx-context?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/upload-file/upload-file?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/download-file/download-file?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/get-temp-file-url/get-temp-file-url?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/delete-file/delete-file?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/cloud-file-component/cloud-file-component?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/crud/crud?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/crud-detail/crud-detail?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/db-permission/db-permission?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/server-date/server-date?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/scf-database/scf-database?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/scf-storage/scf-storage?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/scf-openapi/scf-openapi?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/component/pages/doc-web-view/doc-web-view?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/API/pages/doc-web-view/doc-web-view?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
require('../../client/page/cloud/pages/doc-web-view/doc-web-view?hash=ae77da12474846fbf0eabb2ca353444bdd6f1174');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}