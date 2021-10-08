~/third-workspace/TestPackage/android$ ./gradlew assembleGvrRelease
Incremental java compilation is an incubating feature.
:app:preBuild UP-TO-DATE
:app:preGvrReleaseBuild UP-TO-DATE
:app:checkGvrReleaseManifest
:app:preGvrDebugBuild UP-TO-DATE
:app:preOvrDebugBuild UP-TO-DATE
:app:preOvrReleaseBuild UP-TO-DATE
:app:prepareComAndroidSupportAnimatedVectorDrawable2500Library UP-TO-DATE
:app:prepareComAndroidSupportAppcompatV72500Library UP-TO-DATE
:app:prepareComAndroidSupportSupportCompat2500Library UP-TO-DATE
:app:prepareComAndroidSupportSupportCoreUi2500Library UP-TO-DATE
:app:prepareComAndroidSupportSupportCoreUtils2500Library UP-TO-DATE
:app:prepareComAndroidSupportSupportFragment2500Library UP-TO-DATE
:app:prepareComAndroidSupportSupportMediaCompat2500Library UP-TO-DATE
:app:prepareComAndroidSupportSupportV42500Library UP-TO-DATE
:app:prepareComAndroidSupportSupportVectorDrawable2500Library UP-TO-DATE
:app:prepareComFacebookFbuiTextlayoutbuilderTextlayoutbuilder100Library UP-TO-DATE
:app:prepareComFacebookFrescoDrawee130Library UP-TO-DATE
:app:prepareComFacebookFrescoFbcore130Library UP-TO-DATE
:app:prepareComFacebookFrescoFresco130Library UP-TO-DATE
:app:prepareComFacebookFrescoImagepipeline130Library UP-TO-DATE
:app:prepareComFacebookFrescoImagepipelineBase130Library UP-TO-DATE
:app:prepareComFacebookFrescoImagepipelineOkhttp3130Library UP-TO-DATE
:app:prepareComFacebookReactReactNative0493Library UP-TO-DATE
:app:prepareComFacebookSoloaderSoloader010Library UP-TO-DATE
:app:prepareComGoogleAndroidExoplayerExoplayerR220Library UP-TO-DATE
:app:prepareOrgWebkitAndroidJscR174650Library UP-TO-DATE
:app:prepareTestPackageArcore_clientUnspecifiedLibrary UP-TO-DATE
:app:prepareTestPackageGvr_commonUnspecifiedLibrary UP-TO-DATE
:app:prepareTestPackageReact_viroUnspecifiedLibrary UP-TO-DATE
:app:prepareTestPackageViro_rendererUnspecifiedLibrary UP-TO-DATE
:app:prepareGvrReleaseDependencies
:app:compileGvrReleaseAidl
:app:compileGvrReleaseRenderscript UP-TO-DATE
:app:generateGvrReleaseBuildConfig
:app:mergeGvrReleaseShaders UP-TO-DATE
:app:compileGvrReleaseShaders UP-TO-DATE
:app:generateGvrReleaseAssets UP-TO-DATE
:app:mergeGvrReleaseAssets UP-TO-DATE
:app:generateGvrReleaseResValues UP-TO-DATE
:app:generateGvrReleaseResources UP-TO-DATE
:app:mergeGvrReleaseResources UP-TO-DATE
:app:bundleGvrReleaseJsAndAssets
Loading dependency graph, done.
warning: the transform cache was reset.
bundle: start
bundle: finish
bundle: Writing bundle output to: /Users/andychu/third-workspace/TestPackage/android/app/build/intermediates/assets/gvr/release/index.android.bundle
bundle: Done writing bundle output
bundle: Copying 8 asset files
bundle: Done copying assets
:app:processGvrReleaseManifest
:app:processGvrReleaseResources
res/drawable-mdpi-v4/js_res_male02.obj:0: error: Resource entry js_res_male02 is already defined.
res/drawable-mdpi-v4/js_res_male02.mtl:0: Originally defined here.


:app:processGvrReleaseResources FAILED

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':app:processGvrReleaseResources'.
> com.android.ide.common.process.ProcessException: Failed to execute aapt

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output.

BUILD FAILED

Total time: 27.808 secs
