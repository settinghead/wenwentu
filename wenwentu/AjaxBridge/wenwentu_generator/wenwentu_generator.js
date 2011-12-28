/**
 * WARNING! THIS IS A GENERATED FILE, AND WILL BE RE-GENERATED EACH TIME THE
 * AJAXBRIDGE IS RUN.
 *
 * You should keep your javascript code inside this file as light as possible, 
 * and rather keep the body of your Ajax application in separate *.js files. 
 *
 * Do make a backup of your changes, before re-generating this file (AjaxBridge 
 * will display a warning message to you).
 *
 * Please refer to the built-in documentation inside the AjaxBridge application 
 * for help on using this file.
 */
 
 
/**
 * Application "wenwentu_generator.mxml"
 */

/**
 * The "wenwentu_generator" javascript namespace. All the functions/variables you
 * have selected under the "wenwentu_generator.mxml" in the tree will be
 * available as static members of this namespace object.
 */
wenwentu_generator = {};


/**
 * Listen for the instantiation of the Flex application over the bridge
 */
FABridge.addInitializationCallback("b_wenwentu_generator", wenwentu_generatorReady);


/**
 * Hook here all the code that must run as soon as the "wenwentu_generator" class
 * finishes its instantiation over the bridge.
 *
 * For basic tasks, such as running a Flex method on the click of a javascript
 * button, chances are that both Ajax and Flex may well have loaded before the 
 * user actually clicks the button.
 *
 * However, using the "wenwentu_generatorReady()" is the safest way, as it will 
 * let Ajax know that involved Flex classes are available for use.
 */
function wenwentu_generatorReady() {

	// Initialize the "root" object. This represents the actual 
	// "wenwentu_generator.mxml" flex application.
	b_wenwentu_generator_root = FABridge["b_wenwentu_generator"].root();
	

	// Global variables in the "wenwentu_generator.mxml" application (converted 
	// to getters and setters)

	wenwentu_generator.getLblUpperText = function () {
		return b_wenwentu_generator_root.getLblUpperText();
	};


	wenwentu_generator.getLblLowerText = function () {
		return b_wenwentu_generator_root.getLblLowerText();
	};


	wenwentu_generator.getTxtUpperText = function () {
		return b_wenwentu_generator_root.getTxtUpperText();
	};


	wenwentu_generator.getTxtLowerText = function () {
		return b_wenwentu_generator_root.getTxtLowerText();
	};


	wenwentu_generator.getBtnDownloadImage = function () {
		return b_wenwentu_generator_root.getBtnDownloadImage();
	};


	wenwentu_generator.getImgCanvas = function () {
		return b_wenwentu_generator_root.getImgCanvas();
	};


	wenwentu_generator.getPreloader = function () {
		return b_wenwentu_generator_root.getPreloader();
	};


	wenwentu_generator.getScriptTimeLimit = function () {
		return b_wenwentu_generator_root.getScriptTimeLimit();
	};


	wenwentu_generator.getControlBarGroup = function () {
		return b_wenwentu_generator_root.getControlBarGroup();
	};


	wenwentu_generator.getSplashScreenScaleMode = function () {
		return b_wenwentu_generator_root.getSplashScreenScaleMode();
	};


	wenwentu_generator.getPageTitle = function () {
		return b_wenwentu_generator_root.getPageTitle();
	};


	wenwentu_generator.getFrameRate = function () {
		return b_wenwentu_generator_root.getFrameRate();
	};


	wenwentu_generator.getSplashScreenMinimumDisplayTime = function () {
		return b_wenwentu_generator_root.getSplashScreenMinimumDisplayTime();
	};


	wenwentu_generator.getPreloaderChromeColor = function () {
		return b_wenwentu_generator_root.getPreloaderChromeColor();
	};


	wenwentu_generator.getUsePreloader = function () {
		return b_wenwentu_generator_root.getUsePreloader();
	};


	wenwentu_generator.getScriptRecursionLimit = function () {
		return b_wenwentu_generator_root.getScriptRecursionLimit();
	};


	wenwentu_generator.getThis = function () {
		return b_wenwentu_generator_root.getThis();
	};


	wenwentu_generator.getSuper = function () {
		return b_wenwentu_generator_root.getSuper();
	};


	// Global functions in the "wenwentu_generator.mxml" application

	wenwentu_generator.getSoftKeyboardInputAreaOfInterest = function() {
		return b_wenwentu_generator_root.getSoftKeyboardInputAreaOfInterest();
	};

	wenwentu_generator.setSoftKeyboardInputAreaOfInterest = function(argRectangle) {
		b_wenwentu_generator_root.setSoftKeyboardInputAreaOfInterest(argRectangle);
	};

	wenwentu_generator.requestSoftKeyboard = function() {
		return b_wenwentu_generator_root.requestSoftKeyboard();
	};

	wenwentu_generator.getTabEnabled = function() {
		return b_wenwentu_generator_root.getTabEnabled();
	};

	wenwentu_generator.setTabEnabled = function(argBoolean) {
		b_wenwentu_generator_root.setTabEnabled(argBoolean);
	};

	wenwentu_generator.getTabIndex = function() {
		return b_wenwentu_generator_root.getTabIndex();
	};

	wenwentu_generator.setTabIndex = function(argInt) {
		b_wenwentu_generator_root.setTabIndex(argInt);
	};

	wenwentu_generator.getContextMenu = function() {
		return b_wenwentu_generator_root.getContextMenu();
	};

	wenwentu_generator.setContextMenu = function(argContextMenu) {
		b_wenwentu_generator_root.setContextMenu(argContextMenu);
	};

	wenwentu_generator.getMouseEnabled = function() {
		return b_wenwentu_generator_root.getMouseEnabled();
	};

	wenwentu_generator.setMouseEnabled = function(argBoolean) {
		b_wenwentu_generator_root.setMouseEnabled(argBoolean);
	};

	wenwentu_generator.getAccessibilityImplementation = function() {
		return b_wenwentu_generator_root.getAccessibilityImplementation();
	};

	wenwentu_generator.setAccessibilityImplementation = function(argAccessibilityImplementation) {
		b_wenwentu_generator_root.setAccessibilityImplementation(argAccessibilityImplementation);
	};

	wenwentu_generator.getNeedsSoftKeyboard = function() {
		return b_wenwentu_generator_root.getNeedsSoftKeyboard();
	};

	wenwentu_generator.setNeedsSoftKeyboard = function(argBoolean) {
		b_wenwentu_generator_root.setNeedsSoftKeyboard(argBoolean);
	};

	wenwentu_generator.getFocusRect = function() {
		return b_wenwentu_generator_root.getFocusRect();
	};

	wenwentu_generator.setFocusRect = function(argObject) {
		b_wenwentu_generator_root.setFocusRect(argObject);
	};

	wenwentu_generator.InteractiveObject = function() {
		return b_wenwentu_generator_root.InteractiveObject();
	};

	wenwentu_generator.getDoubleClickEnabled = function() {
		return b_wenwentu_generator_root.getDoubleClickEnabled();
	};

	wenwentu_generator.setDoubleClickEnabled = function(argBoolean) {
		b_wenwentu_generator_root.setDoubleClickEnabled(argBoolean);
	};

	wenwentu_generator.setPercentHeight = function(argNumber) {
		b_wenwentu_generator_root.setPercentHeight(argNumber);
	};

	wenwentu_generator.removeEventListener = function(argString, argFunction, argBoolean) {
		b_wenwentu_generator_root.removeEventListener(argString, argFunction, argBoolean);
	};

	wenwentu_generator.setTabIndex = function(argInt) {
		b_wenwentu_generator_root.setTabIndex(argInt);
	};

	wenwentu_generator.setToolTip = function(argString) {
		b_wenwentu_generator_root.setToolTip(argString);
	};

	wenwentu_generator.getUrl = function() {
		return b_wenwentu_generator_root.getUrl();
	};

	wenwentu_generator.getParameters = function() {
		return b_wenwentu_generator_root.getParameters();
	};

	wenwentu_generator.Application = function() {
		return b_wenwentu_generator_root.Application();
	};

	wenwentu_generator.getSplashScreenImage = function() {
		return b_wenwentu_generator_root.getSplashScreenImage();
	};

	wenwentu_generator.setSplashScreenImage = function(argClass) {
		b_wenwentu_generator_root.setSplashScreenImage(argClass);
	};

	wenwentu_generator.getControlBarLayout = function() {
		return b_wenwentu_generator_root.getControlBarLayout();
	};

	wenwentu_generator.setControlBarLayout = function(argLayoutBase) {
		b_wenwentu_generator_root.setControlBarLayout(argLayoutBase);
	};

	wenwentu_generator.getId = function() {
		return b_wenwentu_generator_root.getId();
	};

	wenwentu_generator.addEventListener = function(argString, argFunction, argBoolean1, argInt, argBoolean2) {
		b_wenwentu_generator_root.addEventListener(argString, argFunction, argBoolean1, argInt, argBoolean2);
	};

	wenwentu_generator.getResizeForSoftKeyboard = function() {
		return b_wenwentu_generator_root.getResizeForSoftKeyboard();
	};

	wenwentu_generator.setResizeForSoftKeyboard = function(argBoolean) {
		b_wenwentu_generator_root.setResizeForSoftKeyboard(argBoolean);
	};

	wenwentu_generator.getControlBarVisible = function() {
		return b_wenwentu_generator_root.getControlBarVisible();
	};

	wenwentu_generator.setControlBarVisible = function(argBoolean) {
		b_wenwentu_generator_root.setControlBarVisible(argBoolean);
	};

	wenwentu_generator.getControlBarContent = function() {
		return b_wenwentu_generator_root.getControlBarContent();
	};

	wenwentu_generator.setControlBarContent = function(argArray) {
		b_wenwentu_generator_root.setControlBarContent(argArray);
	};

	wenwentu_generator.initialize = function() {
		b_wenwentu_generator_root.initialize();
	};

	wenwentu_generator.getColorCorrection = function() {
		return b_wenwentu_generator_root.getColorCorrection();
	};

	wenwentu_generator.setColorCorrection = function(argString) {
		b_wenwentu_generator_root.setColorCorrection(argString);
	};

	wenwentu_generator.getRuntimeDPI = function() {
		return b_wenwentu_generator_root.getRuntimeDPI();
	};

	wenwentu_generator.setPercentWidth = function(argNumber) {
		b_wenwentu_generator_root.setPercentWidth(argNumber);
	};

	wenwentu_generator.getRuntimeDPIProvider = function() {
		return b_wenwentu_generator_root.getRuntimeDPIProvider();
	};

	wenwentu_generator.setRuntimeDPIProvider = function(argClass) {
		b_wenwentu_generator_root.setRuntimeDPIProvider(argClass);
	};

	wenwentu_generator.styleChanged = function(argString) {
		b_wenwentu_generator_root.styleChanged(argString);
	};

	wenwentu_generator.getApplicationDPI = function() {
		return b_wenwentu_generator_root.getApplicationDPI();
	};

	wenwentu_generator.setApplicationDPI = function(argNumber) {
		b_wenwentu_generator_root.setApplicationDPI(argNumber);
	};

	wenwentu_generator.getAspectRatio = function() {
		return b_wenwentu_generator_root.getAspectRatio();
	};

	wenwentu_generator.getViewSourceURL = function() {
		return b_wenwentu_generator_root.getViewSourceURL();
	};

	wenwentu_generator.setViewSourceURL = function(argString) {
		b_wenwentu_generator_root.setViewSourceURL(argString);
	};

	wenwentu_generator.getDefaultButton = function() {
		return b_wenwentu_generator_root.getDefaultButton();
	};

	wenwentu_generator.setDefaultButton = function(argIFlexDisplayObject) {
		b_wenwentu_generator_root.setDefaultButton(argIFlexDisplayObject);
	};

	wenwentu_generator.SkinnableContainerBase = function() {
		return b_wenwentu_generator_root.SkinnableContainerBase();
	};

	wenwentu_generator.setMxmlContent = function(argArray) {
		b_wenwentu_generator_root.setMxmlContent(argArray);
	};

	wenwentu_generator.createDeferredContent = function() {
		b_wenwentu_generator_root.createDeferredContent();
	};

	wenwentu_generator.setElementIndex = function(argIVisualElement, argInt) {
		b_wenwentu_generator_root.setElementIndex(argIVisualElement, argInt);
	};

	wenwentu_generator.swapElements = function(argIVisualElement1, argIVisualElement2) {
		b_wenwentu_generator_root.swapElements(argIVisualElement1, argIVisualElement2);
	};

	wenwentu_generator.getAutoLayout = function() {
		return b_wenwentu_generator_root.getAutoLayout();
	};

	wenwentu_generator.setAutoLayout = function(argBoolean) {
		b_wenwentu_generator_root.setAutoLayout(argBoolean);
	};

	wenwentu_generator.getContentGroup = function() {
		return b_wenwentu_generator_root.getContentGroup();
	};

	wenwentu_generator.setContentGroup = function(argGroup) {
		b_wenwentu_generator_root.setContentGroup(argGroup);
	};

	wenwentu_generator.setModuleFactory = function(argIFlexModuleFactory) {
		b_wenwentu_generator_root.setModuleFactory(argIFlexModuleFactory);
	};

	wenwentu_generator.getCreationPolicy = function() {
		return b_wenwentu_generator_root.getCreationPolicy();
	};

	wenwentu_generator.setCreationPolicy = function(argString) {
		b_wenwentu_generator_root.setCreationPolicy(argString);
	};

	wenwentu_generator.removeElement = function(argIVisualElement) {
		return b_wenwentu_generator_root.removeElement(argIVisualElement);
	};

	wenwentu_generator.getNumElements = function() {
		return b_wenwentu_generator_root.getNumElements();
	};

	wenwentu_generator.addElementAt = function(argIVisualElement, argInt) {
		return b_wenwentu_generator_root.addElementAt(argIVisualElement, argInt);
	};

	wenwentu_generator.swapElementsAt = function(argInt1, argInt2) {
		b_wenwentu_generator_root.swapElementsAt(argInt1, argInt2);
	};

	wenwentu_generator.SkinnableContainer = function() {
		return b_wenwentu_generator_root.SkinnableContainer();
	};

	wenwentu_generator.addElement = function(argIVisualElement) {
		return b_wenwentu_generator_root.addElement(argIVisualElement);
	};

	wenwentu_generator.getDeferredContentCreated = function() {
		return b_wenwentu_generator_root.getDeferredContentCreated();
	};

	wenwentu_generator.setMxmlContentFactory = function(argIDeferredInstance) {
		b_wenwentu_generator_root.setMxmlContentFactory(argIDeferredInstance);
	};

	wenwentu_generator.removeAllElements = function() {
		b_wenwentu_generator_root.removeAllElements();
	};

	wenwentu_generator.getLayout = function() {
		return b_wenwentu_generator_root.getLayout();
	};

	wenwentu_generator.setLayout = function(argLayoutBase) {
		b_wenwentu_generator_root.setLayout(argLayoutBase);
	};

	wenwentu_generator.getElementAt = function(argInt) {
		return b_wenwentu_generator_root.getElementAt(argInt);
	};

	wenwentu_generator.removeElementAt = function(argInt) {
		return b_wenwentu_generator_root.removeElementAt(argInt);
	};

	wenwentu_generator.getElementIndex = function(argIVisualElement) {
		return b_wenwentu_generator_root.getElementIndex(argIVisualElement);
	};

	wenwentu_generator.getChildIndex = function(argDisplayObject) {
		return b_wenwentu_generator_root.getChildIndex(argDisplayObject);
	};

	wenwentu_generator.getChildByName = function(argString) {
		return b_wenwentu_generator_root.getChildByName(argString);
	};

	wenwentu_generator.getNumChildren = function() {
		return b_wenwentu_generator_root.getNumChildren();
	};

	wenwentu_generator.setChildIndex = function(argDisplayObject, argInt) {
		b_wenwentu_generator_root.setChildIndex(argDisplayObject, argInt);
	};

	wenwentu_generator.getTabChildren = function() {
		return b_wenwentu_generator_root.getTabChildren();
	};

	wenwentu_generator.setTabChildren = function(argBoolean) {
		b_wenwentu_generator_root.setTabChildren(argBoolean);
	};

	wenwentu_generator.addChild = function(argDisplayObject) {
		return b_wenwentu_generator_root.addChild(argDisplayObject);
	};

	wenwentu_generator.swapChildren = function(argDisplayObject1, argDisplayObject2) {
		b_wenwentu_generator_root.swapChildren(argDisplayObject1, argDisplayObject2);
	};

	wenwentu_generator.removeChild = function(argDisplayObject) {
		return b_wenwentu_generator_root.removeChild(argDisplayObject);
	};

	wenwentu_generator.contains = function(argDisplayObject) {
		return b_wenwentu_generator_root.contains(argDisplayObject);
	};

	wenwentu_generator.removeChildAt = function(argInt) {
		return b_wenwentu_generator_root.removeChildAt(argInt);
	};

	wenwentu_generator.getTextSnapshot = function() {
		return b_wenwentu_generator_root.getTextSnapshot();
	};

	wenwentu_generator.swapChildrenAt = function(argInt1, argInt2) {
		b_wenwentu_generator_root.swapChildrenAt(argInt1, argInt2);
	};

	wenwentu_generator.getMouseChildren = function() {
		return b_wenwentu_generator_root.getMouseChildren();
	};

	wenwentu_generator.setMouseChildren = function(argBoolean) {
		b_wenwentu_generator_root.setMouseChildren(argBoolean);
	};

	wenwentu_generator.areInaccessibleObjectsUnderPoint = function(argPoint) {
		return b_wenwentu_generator_root.areInaccessibleObjectsUnderPoint(argPoint);
	};

	wenwentu_generator.DisplayObjectContainer = function() {
		return b_wenwentu_generator_root.DisplayObjectContainer();
	};

	wenwentu_generator.getChildAt = function(argInt) {
		return b_wenwentu_generator_root.getChildAt(argInt);
	};

	wenwentu_generator.getObjectsUnderPoint = function(argPoint) {
		return b_wenwentu_generator_root.getObjectsUnderPoint(argPoint);
	};

	wenwentu_generator.addChildAt = function(argDisplayObject, argInt) {
		return b_wenwentu_generator_root.addChildAt(argDisplayObject, argInt);
	};

	wenwentu_generator.valueOf = function() {
		return b_wenwentu_generator_root.valueOf();
	};

	wenwentu_generator.propertyIsEnumerable = function(arg) {
		return b_wenwentu_generator_root.propertyIsEnumerable(arg);
	};

	wenwentu_generator.hasOwnProperty = function(arg) {
		return b_wenwentu_generator_root.hasOwnProperty(arg);
	};

	wenwentu_generator.toString = function() {
		return b_wenwentu_generator_root.toString();
	};

	wenwentu_generator.Object = function() {
		return b_wenwentu_generator_root.Object();
	};

	wenwentu_generator.setPropertyIsEnumerable = function(argString, argBoolean) {
		b_wenwentu_generator_root.setPropertyIsEnumerable(argString, argBoolean);
	};

	wenwentu_generator.isPrototypeOf = function(arg) {
		return b_wenwentu_generator_root.isPrototypeOf(arg);
	};

	wenwentu_generator.getDepth = function() {
		return b_wenwentu_generator_root.getDepth();
	};

	wenwentu_generator.setDepth = function(argNumber) {
		b_wenwentu_generator_root.setDepth(argNumber);
	};

	wenwentu_generator.getLayoutMatrix = function() {
		return b_wenwentu_generator_root.getLayoutMatrix();
	};

	wenwentu_generator.regenerateStyleCache = function(argBoolean) {
		b_wenwentu_generator_root.regenerateStyleCache(argBoolean);
	};

	wenwentu_generator.setLayoutMatrix3D = function(argMatrix3D, argBoolean) {
		b_wenwentu_generator_root.setLayoutMatrix3D(argMatrix3D, argBoolean);
	};

	wenwentu_generator.transformPointToParent = function(argVector3D1, argVector3D2, argVector3D3) {
		b_wenwentu_generator_root.transformPointToParent(argVector3D1, argVector3D2, argVector3D3);
	};

	wenwentu_generator.initialize = function() {
		b_wenwentu_generator_root.initialize();
	};

	wenwentu_generator.getMinBoundsHeight = function(argBoolean) {
		return b_wenwentu_generator_root.getMinBoundsHeight(argBoolean);
	};

	wenwentu_generator.getTop = function() {
		return b_wenwentu_generator_root.getTop();
	};

	wenwentu_generator.setTop = function(argObject) {
		b_wenwentu_generator_root.setTop(argObject);
	};

	wenwentu_generator.getAutomationTabularData = function() {
		return b_wenwentu_generator_root.getAutomationTabularData();
	};

	wenwentu_generator.getScaleZ = function() {
		return b_wenwentu_generator_root.getScaleZ();
	};

	wenwentu_generator.setScaleZ = function(argNumber) {
		b_wenwentu_generator_root.setScaleZ(argNumber);
	};

	wenwentu_generator.getUid = function() {
		return b_wenwentu_generator_root.getUid();
	};

	wenwentu_generator.setUid = function(argString) {
		b_wenwentu_generator_root.setUid(argString);
	};

	wenwentu_generator.getScaleY = function() {
		return b_wenwentu_generator_root.getScaleY();
	};

	wenwentu_generator.setScaleY = function(argNumber) {
		b_wenwentu_generator_root.setScaleY(argNumber);
	};

	wenwentu_generator.getScaleX = function() {
		return b_wenwentu_generator_root.getScaleX();
	};

	wenwentu_generator.setScaleX = function(argNumber) {
		b_wenwentu_generator_root.setScaleX(argNumber);
	};

	wenwentu_generator.hasState = function(argString) {
		return b_wenwentu_generator_root.hasState(argString);
	};

	wenwentu_generator.getRepeaterItem = function(argInt) {
		return b_wenwentu_generator_root.getRepeaterItem(argInt);
	};

	wenwentu_generator.getStyleDeclaration = function() {
		return b_wenwentu_generator_root.getStyleDeclaration();
	};

	wenwentu_generator.setStyleDeclaration = function(argCSSStyleDeclaration) {
		b_wenwentu_generator_root.setStyleDeclaration(argCSSStyleDeclaration);
	};

	wenwentu_generator.getMaxWidth = function() {
		return b_wenwentu_generator_root.getMaxWidth();
	};

	wenwentu_generator.setMaxWidth = function(argNumber) {
		b_wenwentu_generator_root.setMaxWidth(argNumber);
	};

	wenwentu_generator.invalidateLayering = function() {
		b_wenwentu_generator_root.invalidateLayering();
	};

	wenwentu_generator.measureHTMLText = function(argString) {
		return b_wenwentu_generator_root.measureHTMLText(argString);
	};

	wenwentu_generator.getPreferredBoundsHeight = function(argBoolean) {
		return b_wenwentu_generator_root.getPreferredBoundsHeight(argBoolean);
	};

	wenwentu_generator.getSystemManager = function() {
		return b_wenwentu_generator_root.getSystemManager();
	};

	wenwentu_generator.setSystemManager = function(argISystemManager) {
		b_wenwentu_generator_root.setSystemManager(argISystemManager);
	};

	wenwentu_generator.getBoundsYAtSize = function(argNumber1, argNumber2, argBoolean) {
		return b_wenwentu_generator_root.getBoundsYAtSize(argNumber1, argNumber2, argBoolean);
	};

	wenwentu_generator.validateDisplayList = function() {
		b_wenwentu_generator_root.validateDisplayList();
	};

	wenwentu_generator.getMinWidth = function() {
		return b_wenwentu_generator_root.getMinWidth();
	};

	wenwentu_generator.setMinWidth = function(argNumber) {
		b_wenwentu_generator_root.setMinWidth(argNumber);
	};

	wenwentu_generator.matchesCSSType = function(argString) {
		return b_wenwentu_generator_root.matchesCSSType(argString);
	};

	wenwentu_generator.getExplicitOrMeasuredWidth = function() {
		return b_wenwentu_generator_root.getExplicitOrMeasuredWidth();
	};

	wenwentu_generator.getInitialized = function() {
		return b_wenwentu_generator_root.getInitialized();
	};

	wenwentu_generator.setInitialized = function(argBoolean) {
		b_wenwentu_generator_root.setInitialized(argBoolean);
	};

	wenwentu_generator.contentToGlobal = function(argPoint) {
		return b_wenwentu_generator_root.contentToGlobal(argPoint);
	};

	wenwentu_generator.getTransformZ = function() {
		return b_wenwentu_generator_root.getTransformZ();
	};

	wenwentu_generator.setTransformZ = function(argNumber) {
		b_wenwentu_generator_root.setTransformZ(argNumber);
	};

	wenwentu_generator.getTransformY = function() {
		return b_wenwentu_generator_root.getTransformY();
	};

	wenwentu_generator.setTransformY = function(argNumber) {
		b_wenwentu_generator_root.setTransformY(argNumber);
	};

	wenwentu_generator.getTransformX = function() {
		return b_wenwentu_generator_root.getTransformX();
	};

	wenwentu_generator.setTransformX = function(argNumber) {
		b_wenwentu_generator_root.setTransformX(argNumber);
	};

	wenwentu_generator.getTransform = function() {
		return b_wenwentu_generator_root.getTransform();
	};

	wenwentu_generator.setTransform = function(argTransform) {
		b_wenwentu_generator_root.setTransform(argTransform);
	};

	wenwentu_generator.getAutomationValue = function() {
		return b_wenwentu_generator_root.getAutomationValue();
	};

	wenwentu_generator.getExplicitHeight = function() {
		return b_wenwentu_generator_root.getExplicitHeight();
	};

	wenwentu_generator.setExplicitHeight = function(argNumber) {
		b_wenwentu_generator_root.setExplicitHeight(argNumber);
	};

	wenwentu_generator.executeBindings = function(argBoolean) {
		b_wenwentu_generator_root.executeBindings(argBoolean);
	};

	wenwentu_generator.getPercentWidth = function() {
		return b_wenwentu_generator_root.getPercentWidth();
	};

	wenwentu_generator.setPercentWidth = function(argNumber) {
		b_wenwentu_generator_root.setPercentWidth(argNumber);
	};

	wenwentu_generator.getModuleFactory = function() {
		return b_wenwentu_generator_root.getModuleFactory();
	};

	wenwentu_generator.setModuleFactory = function(argIFlexModuleFactory) {
		b_wenwentu_generator_root.setModuleFactory(argIFlexModuleFactory);
	};

	wenwentu_generator.getParentApplication = function() {
		return b_wenwentu_generator_root.getParentApplication();
	};

	wenwentu_generator.createAutomationIDPartWithRequiredProperties = function(argIAutomationObject, argArray) {
		return b_wenwentu_generator_root.createAutomationIDPartWithRequiredProperties(argIAutomationObject, argArray);
	};

	wenwentu_generator.removeStyleClient = function(argIAdvancedStyleClient) {
		b_wenwentu_generator_root.removeStyleClient(argIAdvancedStyleClient);
	};

	wenwentu_generator.drawRoundRect = function(argNumber1, argNumber2, argNumber3, argNumber4, argObject5, argObject6, argObject7, argObject8, argString, argArray, argObject9) {
		b_wenwentu_generator_root.drawRoundRect(argNumber1, argNumber2, argNumber3, argNumber4, argObject5, argObject6, argObject7, argObject8, argString, argArray, argObject9);
	};

	wenwentu_generator.resolveAutomationIDPart = function(argObject) {
		return b_wenwentu_generator_root.resolveAutomationIDPart(argObject);
	};

	wenwentu_generator.getHasFocusableChildren = function() {
		return b_wenwentu_generator_root.getHasFocusableChildren();
	};

	wenwentu_generator.setHasFocusableChildren = function(argBoolean) {
		b_wenwentu_generator_root.setHasFocusableChildren(argBoolean);
	};

	wenwentu_generator.setChildIndex = function(argDisplayObject, argInt) {
		b_wenwentu_generator_root.setChildIndex(argDisplayObject, argInt);
	};

	wenwentu_generator.getUpdateCompletePendingFlag = function() {
		return b_wenwentu_generator_root.getUpdateCompletePendingFlag();
	};

	wenwentu_generator.setUpdateCompletePendingFlag = function(argBoolean) {
		b_wenwentu_generator_root.setUpdateCompletePendingFlag(argBoolean);
	};

	wenwentu_generator.getProcessedDescriptors = function() {
		return b_wenwentu_generator_root.getProcessedDescriptors();
	};

	wenwentu_generator.setProcessedDescriptors = function(argBoolean) {
		b_wenwentu_generator_root.setProcessedDescriptors(argBoolean);
	};

	wenwentu_generator.getBottom = function() {
		return b_wenwentu_generator_root.getBottom();
	};

	wenwentu_generator.setBottom = function(argObject) {
		b_wenwentu_generator_root.setBottom(argObject);
	};

	wenwentu_generator.getStyleParent = function() {
		return b_wenwentu_generator_root.getStyleParent();
	};

	wenwentu_generator.setStyleParent = function(argIAdvancedStyleClient) {
		b_wenwentu_generator_root.setStyleParent(argIAdvancedStyleClient);
	};

	wenwentu_generator.getDoubleClickEnabled = function() {
		return b_wenwentu_generator_root.getDoubleClickEnabled();
	};

	wenwentu_generator.setDoubleClickEnabled = function(argBoolean) {
		b_wenwentu_generator_root.setDoubleClickEnabled(argBoolean);
	};

	wenwentu_generator.setActualSize = function(argNumber1, argNumber2) {
		b_wenwentu_generator_root.setActualSize(argNumber1, argNumber2);
	};

	wenwentu_generator.setLayoutMatrix = function(argMatrix, argBoolean) {
		b_wenwentu_generator_root.setLayoutMatrix(argMatrix, argBoolean);
	};

	wenwentu_generator.getTabFocusEnabled = function() {
		return b_wenwentu_generator_root.getTabFocusEnabled();
	};

	wenwentu_generator.setTabFocusEnabled = function(argBoolean) {
		b_wenwentu_generator_root.setTabFocusEnabled(argBoolean);
	};

	wenwentu_generator.getOwner = function() {
		return b_wenwentu_generator_root.getOwner();
	};

	wenwentu_generator.setOwner = function(argDisplayObjectContainer) {
		b_wenwentu_generator_root.setOwner(argDisplayObjectContainer);
	};

	wenwentu_generator.measureText = function(argString) {
		return b_wenwentu_generator_root.measureText(argString);
	};

	wenwentu_generator.getRepeaters = function() {
		return b_wenwentu_generator_root.getRepeaters();
	};

	wenwentu_generator.setRepeaters = function(argArray) {
		b_wenwentu_generator_root.setRepeaters(argArray);
	};

	wenwentu_generator.notifyStyleChangeInChildren = function(argString, argBoolean) {
		b_wenwentu_generator_root.notifyStyleChangeInChildren(argString, argBoolean);
	};

	wenwentu_generator.setStyle = function(argString, arg) {
		b_wenwentu_generator_root.setStyle(argString, arg);
	};

	wenwentu_generator.getFlexContextMenu = function() {
		return b_wenwentu_generator_root.getFlexContextMenu();
	};

	wenwentu_generator.setFlexContextMenu = function(argIFlexContextMenu) {
		b_wenwentu_generator_root.setFlexContextMenu(argIFlexContextMenu);
	};

	wenwentu_generator.createReferenceOnParentDocument = function(argIFlexDisplayObject) {
		b_wenwentu_generator_root.createReferenceOnParentDocument(argIFlexDisplayObject);
	};

	wenwentu_generator.getMouseFocusEnabled = function() {
		return b_wenwentu_generator_root.getMouseFocusEnabled();
	};

	wenwentu_generator.setMouseFocusEnabled = function(argBoolean) {
		b_wenwentu_generator_root.setMouseFocusEnabled(argBoolean);
	};

	wenwentu_generator.stopDrag = function() {
		b_wenwentu_generator_root.stopDrag();
	};

	wenwentu_generator.getHasLayoutMatrix3D = function() {
		return b_wenwentu_generator_root.getHasLayoutMatrix3D();
	};

	wenwentu_generator.localToContent = function(argPoint) {
		return b_wenwentu_generator_root.localToContent(argPoint);
	};

	wenwentu_generator.prepareToPrint = function(argIFlexDisplayObject) {
		return b_wenwentu_generator_root.prepareToPrint(argIFlexDisplayObject);
	};

	wenwentu_generator.endEffectsStarted = function() {
		b_wenwentu_generator_root.endEffectsStarted();
	};

	wenwentu_generator.getAccessibilityShortcut = function() {
		return b_wenwentu_generator_root.getAccessibilityShortcut();
	};

	wenwentu_generator.setAccessibilityShortcut = function(argString) {
		b_wenwentu_generator_root.setAccessibilityShortcut(argString);
	};

	wenwentu_generator.registerEffects = function(argArray) {
		b_wenwentu_generator_root.registerEffects(argArray);
	};

	wenwentu_generator.getAutomationOwner = function() {
		return b_wenwentu_generator_root.getAutomationOwner();
	};

	wenwentu_generator.getActiveEffects = function() {
		return b_wenwentu_generator_root.getActiveEffects();
	};

	wenwentu_generator.getFocusPane = function() {
		return b_wenwentu_generator_root.getFocusPane();
	};

	wenwentu_generator.setFocusPane = function(argSprite) {
		b_wenwentu_generator_root.setFocusPane(argSprite);
	};

	wenwentu_generator.getInheritingStyles = function() {
		return b_wenwentu_generator_root.getInheritingStyles();
	};

	wenwentu_generator.setInheritingStyles = function(argObject) {
		b_wenwentu_generator_root.setInheritingStyles(argObject);
	};

	wenwentu_generator.verticalGradientMatrix = function(argNumber1, argNumber2, argNumber3, argNumber4) {
		return b_wenwentu_generator_root.verticalGradientMatrix(argNumber1, argNumber2, argNumber3, argNumber4);
	};

	wenwentu_generator.getStyleManager = function() {
		return b_wenwentu_generator_root.getStyleManager();
	};

	wenwentu_generator.determineTextFormatFromStyles = function() {
		return b_wenwentu_generator_root.determineTextFormatFromStyles();
	};

	wenwentu_generator.getAutomationParent = function() {
		return b_wenwentu_generator_root.getAutomationParent();
	};

	wenwentu_generator.getMaxHeight = function() {
		return b_wenwentu_generator_root.getMaxHeight();
	};

	wenwentu_generator.setMaxHeight = function(argNumber) {
		b_wenwentu_generator_root.setMaxHeight(argNumber);
	};

	wenwentu_generator.getBaselinePosition = function() {
		return b_wenwentu_generator_root.getBaselinePosition();
	};

	wenwentu_generator.callLater = function(argFunction, argArray) {
		b_wenwentu_generator_root.callLater(argFunction, argArray);
	};

	wenwentu_generator.getAutomationEnabled = function() {
		return b_wenwentu_generator_root.getAutomationEnabled();
	};

	wenwentu_generator.hasFontContextChanged = function() {
		return b_wenwentu_generator_root.hasFontContextChanged();
	};

	wenwentu_generator.getPostLayoutTransformOffsets = function() {
		return b_wenwentu_generator_root.getPostLayoutTransformOffsets();
	};

	wenwentu_generator.setPostLayoutTransformOffsets = function(argTransformOffsets) {
		b_wenwentu_generator_root.setPostLayoutTransformOffsets(argTransformOffsets);
	};

	wenwentu_generator.getDescriptor = function() {
		return b_wenwentu_generator_root.getDescriptor();
	};

	wenwentu_generator.setDescriptor = function(argUIComponentDescriptor) {
		b_wenwentu_generator_root.setDescriptor(argUIComponentDescriptor);
	};

	wenwentu_generator.deleteReferenceOnParentDocument = function(argIFlexDisplayObject) {
		b_wenwentu_generator_root.deleteReferenceOnParentDocument(argIFlexDisplayObject);
	};

	wenwentu_generator.getLeft = function() {
		return b_wenwentu_generator_root.getLeft();
	};

	wenwentu_generator.setLeft = function(argObject) {
		b_wenwentu_generator_root.setLeft(argObject);
	};

	wenwentu_generator.getErrorString = function() {
		return b_wenwentu_generator_root.getErrorString();
	};

	wenwentu_generator.setErrorString = function(argString) {
		b_wenwentu_generator_root.setErrorString(argString);
	};

	wenwentu_generator.getWidth = function() {
		return b_wenwentu_generator_root.getWidth();
	};

	wenwentu_generator.setWidth = function(argNumber) {
		b_wenwentu_generator_root.setWidth(argNumber);
	};

	wenwentu_generator.getInstanceIndex = function() {
		return b_wenwentu_generator_root.getInstanceIndex();
	};

	wenwentu_generator.move = function(argNumber1, argNumber2) {
		b_wenwentu_generator_root.move(argNumber1, argNumber2);
	};

	wenwentu_generator.getClassStyleDeclarations = function() {
		return b_wenwentu_generator_root.getClassStyleDeclarations();
	};

	wenwentu_generator.initializeRepeaterArrays = function(argIRepeaterClient) {
		b_wenwentu_generator_root.initializeRepeaterArrays(argIRepeaterClient);
	};

	wenwentu_generator.getAutomationVisible = function() {
		return b_wenwentu_generator_root.getAutomationVisible();
	};

	wenwentu_generator.getExplicitMaxWidth = function() {
		return b_wenwentu_generator_root.getExplicitMaxWidth();
	};

	wenwentu_generator.setExplicitMaxWidth = function(argNumber) {
		b_wenwentu_generator_root.setExplicitMaxWidth(argNumber);
	};

	wenwentu_generator.getRotationZ = function() {
		return b_wenwentu_generator_root.getRotationZ();
	};

	wenwentu_generator.setRotationZ = function(argNumber) {
		b_wenwentu_generator_root.setRotationZ(argNumber);
	};

	wenwentu_generator.getRotationY = function() {
		return b_wenwentu_generator_root.getRotationY();
	};

	wenwentu_generator.setRotationY = function(argNumber) {
		b_wenwentu_generator_root.setRotationY(argNumber);
	};

	wenwentu_generator.getExplicitMinHeight = function() {
		return b_wenwentu_generator_root.getExplicitMinHeight();
	};

	wenwentu_generator.setExplicitMinHeight = function(argNumber) {
		b_wenwentu_generator_root.setExplicitMinHeight(argNumber);
	};

	wenwentu_generator.getRotationX = function() {
		return b_wenwentu_generator_root.getRotationX();
	};

	wenwentu_generator.setRotationX = function(argNumber) {
		b_wenwentu_generator_root.setRotationX(argNumber);
	};

	wenwentu_generator.clearStyle = function(argString) {
		b_wenwentu_generator_root.clearStyle(argString);
	};

	wenwentu_generator.invalidateProperties = function() {
		b_wenwentu_generator_root.invalidateProperties();
	};

	wenwentu_generator.setCacheHeuristic = function(argBoolean) {
		b_wenwentu_generator_root.setCacheHeuristic(argBoolean);
	};

	wenwentu_generator.getFilters = function() {
		return b_wenwentu_generator_root.getFilters();
	};

	wenwentu_generator.setFilters = function(argArray) {
		b_wenwentu_generator_root.setFilters(argArray);
	};

	wenwentu_generator.validateProperties = function() {
		b_wenwentu_generator_root.validateProperties();
	};

	wenwentu_generator.getBlendMode = function() {
		return b_wenwentu_generator_root.getBlendMode();
	};

	wenwentu_generator.setBlendMode = function(argString) {
		b_wenwentu_generator_root.setBlendMode(argString);
	};

	wenwentu_generator.getIncludeInLayout = function() {
		return b_wenwentu_generator_root.getIncludeInLayout();
	};

	wenwentu_generator.setIncludeInLayout = function(argBoolean) {
		b_wenwentu_generator_root.setIncludeInLayout(argBoolean);
	};

	wenwentu_generator.getRight = function() {
		return b_wenwentu_generator_root.getRight();
	};

	wenwentu_generator.setRight = function(argObject) {
		b_wenwentu_generator_root.setRight(argObject);
	};

	wenwentu_generator.addChildAt = function(argDisplayObject, argInt) {
		return b_wenwentu_generator_root.addChildAt(argDisplayObject, argInt);
	};

	wenwentu_generator.getAutomationName = function() {
		return b_wenwentu_generator_root.getAutomationName();
	};

	wenwentu_generator.setAutomationName = function(argString) {
		b_wenwentu_generator_root.setAutomationName(argString);
	};

	wenwentu_generator.getClassName = function() {
		return b_wenwentu_generator_root.getClassName();
	};

	wenwentu_generator.getNonInheritingStyles = function() {
		return b_wenwentu_generator_root.getNonInheritingStyles();
	};

	wenwentu_generator.setNonInheritingStyles = function(argObject) {
		b_wenwentu_generator_root.setNonInheritingStyles(argObject);
	};

	wenwentu_generator.getExplicitWidth = function() {
		return b_wenwentu_generator_root.getExplicitWidth();
	};

	wenwentu_generator.setExplicitWidth = function(argNumber) {
		b_wenwentu_generator_root.setExplicitWidth(argNumber);
	};

	wenwentu_generator.getMinHeight = function() {
		return b_wenwentu_generator_root.getMinHeight();
	};

	wenwentu_generator.setMinHeight = function(argNumber) {
		b_wenwentu_generator_root.setMinHeight(argNumber);
	};

	wenwentu_generator.getLayoutBoundsHeight = function(argBoolean) {
		return b_wenwentu_generator_root.getLayoutBoundsHeight(argBoolean);
	};

	wenwentu_generator.dispatchEvent = function(argEvent) {
		return b_wenwentu_generator_root.dispatchEvent(argEvent);
	};

	wenwentu_generator.getMaxBoundsWidth = function(argBoolean) {
		return b_wenwentu_generator_root.getMaxBoundsWidth(argBoolean);
	};

	wenwentu_generator.getIs3D = function() {
		return b_wenwentu_generator_root.getIs3D();
	};

	wenwentu_generator.getExplicitMinWidth = function() {
		return b_wenwentu_generator_root.getExplicitMinWidth();
	};

	wenwentu_generator.setExplicitMinWidth = function(argNumber) {
		b_wenwentu_generator_root.setExplicitMinWidth(argNumber);
	};

	wenwentu_generator.getStyle = function(argString) {
		return b_wenwentu_generator_root.getStyle(argString);
	};

	wenwentu_generator.getMouseY = function() {
		return b_wenwentu_generator_root.getMouseY();
	};

	wenwentu_generator.getMouseX = function() {
		return b_wenwentu_generator_root.getMouseX();
	};

	wenwentu_generator.getScreen = function() {
		return b_wenwentu_generator_root.getScreen();
	};

	wenwentu_generator.getExplicitOrMeasuredHeight = function() {
		return b_wenwentu_generator_root.getExplicitOrMeasuredHeight();
	};

	wenwentu_generator.getLayoutBoundsWidth = function(argBoolean) {
		return b_wenwentu_generator_root.getLayoutBoundsWidth(argBoolean);
	};

	wenwentu_generator.setFocus = function() {
		b_wenwentu_generator_root.setFocus();
	};

	wenwentu_generator.horizontalGradientMatrix = function(argNumber1, argNumber2, argNumber3, argNumber4) {
		return b_wenwentu_generator_root.horizontalGradientMatrix(argNumber1, argNumber2, argNumber3, argNumber4);
	};

	wenwentu_generator.setConstraintValue = function(argString, arg) {
		b_wenwentu_generator_root.setConstraintValue(argString, arg);
	};

	wenwentu_generator.getInstanceIndices = function() {
		return b_wenwentu_generator_root.getInstanceIndices();
	};

	wenwentu_generator.setInstanceIndices = function(argArray) {
		b_wenwentu_generator_root.setInstanceIndices(argArray);
	};

	wenwentu_generator.getRepeaterIndices = function() {
		return b_wenwentu_generator_root.getRepeaterIndices();
	};

	wenwentu_generator.setRepeaterIndices = function(argArray) {
		b_wenwentu_generator_root.setRepeaterIndices(argArray);
	};

	wenwentu_generator.getTweeningProperties = function() {
		return b_wenwentu_generator_root.getTweeningProperties();
	};

	wenwentu_generator.setTweeningProperties = function(argArray) {
		b_wenwentu_generator_root.setTweeningProperties(argArray);
	};

	wenwentu_generator.getCachePolicy = function() {
		return b_wenwentu_generator_root.getCachePolicy();
	};

	wenwentu_generator.setCachePolicy = function(argString) {
		b_wenwentu_generator_root.setCachePolicy(argString);
	};

	wenwentu_generator.addChild = function(argDisplayObject) {
		return b_wenwentu_generator_root.addChild(argDisplayObject);
	};

	wenwentu_generator.invalidateSize = function() {
		b_wenwentu_generator_root.invalidateSize();
	};

	wenwentu_generator.setVisible = function(argBoolean1, argBoolean2) {
		b_wenwentu_generator_root.setVisible(argBoolean1, argBoolean2);
	};

	wenwentu_generator.getBoundsXAtSize = function(argNumber1, argNumber2, argBoolean) {
		return b_wenwentu_generator_root.getBoundsXAtSize(argNumber1, argNumber2, argBoolean);
	};

	wenwentu_generator.parentChanged = function(argDisplayObjectContainer) {
		b_wenwentu_generator_root.parentChanged(argDisplayObjectContainer);
	};

	wenwentu_generator.transformAround = function(argVector3D1, argVector3D2, argVector3D3, argVector3D4, argVector3D5, argVector3D6, argVector3D7, argBoolean) {
		b_wenwentu_generator_root.transformAround(argVector3D1, argVector3D2, argVector3D3, argVector3D4, argVector3D5, argVector3D6, argVector3D7, argBoolean);
	};

	wenwentu_generator.getMeasuredHeight = function() {
		return b_wenwentu_generator_root.getMeasuredHeight();
	};

	wenwentu_generator.setMeasuredHeight = function(argNumber) {
		b_wenwentu_generator_root.setMeasuredHeight(argNumber);
	};

	wenwentu_generator.getMaintainProjectionCenter = function() {
		return b_wenwentu_generator_root.getMaintainProjectionCenter();
	};

	wenwentu_generator.setMaintainProjectionCenter = function(argBoolean) {
		b_wenwentu_generator_root.setMaintainProjectionCenter(argBoolean);
	};

	wenwentu_generator.getAutomationChildren = function() {
		return b_wenwentu_generator_root.getAutomationChildren();
	};

	wenwentu_generator.removeChild = function(argDisplayObject) {
		return b_wenwentu_generator_root.removeChild(argDisplayObject);
	};

	wenwentu_generator.matchesCSSState = function(argString) {
		return b_wenwentu_generator_root.matchesCSSState(argString);
	};

	wenwentu_generator.validateNow = function() {
		b_wenwentu_generator_root.validateNow();
	};

	wenwentu_generator.invalidateDisplayList = function() {
		b_wenwentu_generator_root.invalidateDisplayList();
	};

	wenwentu_generator.getMeasuredWidth = function() {
		return b_wenwentu_generator_root.getMeasuredWidth();
	};

	wenwentu_generator.setMeasuredWidth = function(argNumber) {
		b_wenwentu_generator_root.setMeasuredWidth(argNumber);
	};

	wenwentu_generator.setLayoutBoundsPosition = function(argNumber1, argNumber2, argBoolean) {
		b_wenwentu_generator_root.setLayoutBoundsPosition(argNumber1, argNumber2, argBoolean);
	};

	wenwentu_generator.getAutomationChildAt = function(argInt) {
		return b_wenwentu_generator_root.getAutomationChildAt(argInt);
	};

	wenwentu_generator.getPercentHeight = function() {
		return b_wenwentu_generator_root.getPercentHeight();
	};

	wenwentu_generator.setPercentHeight = function(argNumber) {
		b_wenwentu_generator_root.setPercentHeight(argNumber);
	};

	wenwentu_generator.getIsPopUp = function() {
		return b_wenwentu_generator_root.getIsPopUp();
	};

	wenwentu_generator.setIsPopUp = function(argBoolean) {
		b_wenwentu_generator_root.setIsPopUp(argBoolean);
	};

	wenwentu_generator.setLayoutBoundsSize = function(argNumber1, argNumber2, argBoolean) {
		b_wenwentu_generator_root.setLayoutBoundsSize(argNumber1, argNumber2, argBoolean);
	};

	wenwentu_generator.getId = function() {
		return b_wenwentu_generator_root.getId();
	};

	wenwentu_generator.setId = function(argString) {
		b_wenwentu_generator_root.setId(argString);
	};

	wenwentu_generator.getStyleName = function() {
		return b_wenwentu_generator_root.getStyleName();
	};

	wenwentu_generator.setStyleName = function(argObject) {
		b_wenwentu_generator_root.setStyleName(argObject);
	};

	wenwentu_generator.globalToContent = function(argPoint) {
		return b_wenwentu_generator_root.globalToContent(argPoint);
	};

	wenwentu_generator.getIsDocument = function() {
		return b_wenwentu_generator_root.getIsDocument();
	};

	wenwentu_generator.setCacheAsBitmap = function(argBoolean) {
		b_wenwentu_generator_root.setCacheAsBitmap(argBoolean);
	};

	wenwentu_generator.getAccessibilityName = function() {
		return b_wenwentu_generator_root.getAccessibilityName();
	};

	wenwentu_generator.setAccessibilityName = function(argString) {
		b_wenwentu_generator_root.setAccessibilityName(argString);
	};

	wenwentu_generator.getRepeaterIndex = function() {
		return b_wenwentu_generator_root.getRepeaterIndex();
	};

	wenwentu_generator.getParent = function() {
		return b_wenwentu_generator_root.getParent();
	};

	wenwentu_generator.getRepeater = function() {
		return b_wenwentu_generator_root.getRepeater();
	};

	wenwentu_generator.getMeasuredMinHeight = function() {
		return b_wenwentu_generator_root.getMeasuredMinHeight();
	};

	wenwentu_generator.setMeasuredMinHeight = function(argNumber) {
		b_wenwentu_generator_root.setMeasuredMinHeight(argNumber);
	};

	wenwentu_generator.getVisibleRect = function(argDisplayObject) {
		return b_wenwentu_generator_root.getVisibleRect(argDisplayObject);
	};

	wenwentu_generator.getPreferredBoundsWidth = function(argBoolean) {
		return b_wenwentu_generator_root.getPreferredBoundsWidth(argBoolean);
	};

	wenwentu_generator.getFocusManager = function() {
		return b_wenwentu_generator_root.getFocusManager();
	};

	wenwentu_generator.setFocusManager = function(argIFocusManager) {
		b_wenwentu_generator_root.setFocusManager(argIFocusManager);
	};

	wenwentu_generator.getVerticalCenter = function() {
		return b_wenwentu_generator_root.getVerticalCenter();
	};

	wenwentu_generator.setVerticalCenter = function(argObject) {
		b_wenwentu_generator_root.setVerticalCenter(argObject);
	};

	wenwentu_generator.effectStarted = function(argIEffectInstance) {
		b_wenwentu_generator_root.effectStarted(argIEffectInstance);
	};

	wenwentu_generator.UIComponent = function() {
		return b_wenwentu_generator_root.UIComponent();
	};

	wenwentu_generator.getDocument = function() {
		return b_wenwentu_generator_root.getDocument();
	};

	wenwentu_generator.setDocument = function(argObject) {
		b_wenwentu_generator_root.setDocument(argObject);
	};

	wenwentu_generator.getFocus = function() {
		return b_wenwentu_generator_root.getFocus();
	};

	wenwentu_generator.validationResultHandler = function(argValidationResultEvent) {
		b_wenwentu_generator_root.validationResultHandler(argValidationResultEvent);
	};

	wenwentu_generator.setCurrentState = function(argString, argBoolean) {
		b_wenwentu_generator_root.setCurrentState(argString, argBoolean);
	};

	wenwentu_generator.getTransitions = function() {
		return b_wenwentu_generator_root.getTransitions();
	};

	wenwentu_generator.setTransitions = function(argArray) {
		b_wenwentu_generator_root.setTransitions(argArray);
	};

	wenwentu_generator.finishPrint = function(argObject, argIFlexDisplayObject) {
		b_wenwentu_generator_root.finishPrint(argObject, argIFlexDisplayObject);
	};

	wenwentu_generator.contentToLocal = function(argPoint) {
		return b_wenwentu_generator_root.contentToLocal(argPoint);
	};

	wenwentu_generator.validateSize = function(argBoolean) {
		b_wenwentu_generator_root.validateSize(argBoolean);
	};

	wenwentu_generator.getHorizontalCenter = function() {
		return b_wenwentu_generator_root.getHorizontalCenter();
	};

	wenwentu_generator.setHorizontalCenter = function(argObject) {
		b_wenwentu_generator_root.setHorizontalCenter(argObject);
	};

	wenwentu_generator.getEnabled = function() {
		return b_wenwentu_generator_root.getEnabled();
	};

	wenwentu_generator.setEnabled = function(argBoolean) {
		b_wenwentu_generator_root.setEnabled(argBoolean);
	};

	wenwentu_generator.getNestLevel = function() {
		return b_wenwentu_generator_root.getNestLevel();
	};

	wenwentu_generator.setNestLevel = function(argInt) {
		b_wenwentu_generator_root.setNestLevel(argInt);
	};

	wenwentu_generator.getCursorManager = function() {
		return b_wenwentu_generator_root.getCursorManager();
	};

	wenwentu_generator.getStates = function() {
		return b_wenwentu_generator_root.getStates();
	};

	wenwentu_generator.setStates = function(argArray) {
		b_wenwentu_generator_root.setStates(argArray);
	};

	wenwentu_generator.addStyleClient = function(argIAdvancedStyleClient) {
		b_wenwentu_generator_root.addStyleClient(argIAdvancedStyleClient);
	};

	wenwentu_generator.getValidationSubField = function() {
		return b_wenwentu_generator_root.getValidationSubField();
	};

	wenwentu_generator.setValidationSubField = function(argString) {
		b_wenwentu_generator_root.setValidationSubField(argString);
	};

	wenwentu_generator.getAlpha = function() {
		return b_wenwentu_generator_root.getAlpha();
	};

	wenwentu_generator.setAlpha = function(argNumber) {
		b_wenwentu_generator_root.setAlpha(argNumber);
	};

	wenwentu_generator.styleChanged = function(argString) {
		b_wenwentu_generator_root.styleChanged(argString);
	};

	wenwentu_generator.getMinBoundsWidth = function(argBoolean) {
		return b_wenwentu_generator_root.getMinBoundsWidth(argBoolean);
	};

	wenwentu_generator.getVisible = function() {
		return b_wenwentu_generator_root.getVisible();
	};

	wenwentu_generator.setVisible = function(argBoolean) {
		b_wenwentu_generator_root.setVisible(argBoolean);
	};

	wenwentu_generator.getHeight = function() {
		return b_wenwentu_generator_root.getHeight();
	};

	wenwentu_generator.setHeight = function(argNumber) {
		b_wenwentu_generator_root.setHeight(argNumber);
	};

	wenwentu_generator.setLayoutMatrix3D = function(argMatrix3D) {
		b_wenwentu_generator_root.setLayoutMatrix3D(argMatrix3D);
	};

	wenwentu_generator.getZ = function() {
		return b_wenwentu_generator_root.getZ();
	};

	wenwentu_generator.setZ = function(argNumber) {
		b_wenwentu_generator_root.setZ(argNumber);
	};

	wenwentu_generator.removeChildAt = function(argInt) {
		return b_wenwentu_generator_root.removeChildAt(argInt);
	};

	wenwentu_generator.getY = function() {
		return b_wenwentu_generator_root.getY();
	};

	wenwentu_generator.setY = function(argNumber) {
		b_wenwentu_generator_root.setY(argNumber);
	};

	wenwentu_generator.getX = function() {
		return b_wenwentu_generator_root.getX();
	};

	wenwentu_generator.setX = function(argNumber) {
		b_wenwentu_generator_root.setX(argNumber);
	};

	wenwentu_generator.getAutomationDelegate = function() {
		return b_wenwentu_generator_root.getAutomationDelegate();
	};

	wenwentu_generator.setAutomationDelegate = function(argObject) {
		b_wenwentu_generator_root.setAutomationDelegate(argObject);
	};

	wenwentu_generator.invalidateLayoutDirection = function() {
		b_wenwentu_generator_root.invalidateLayoutDirection();
	};

	wenwentu_generator.replayAutomatableEvent = function(argEvent) {
		return b_wenwentu_generator_root.replayAutomatableEvent(argEvent);
	};

	wenwentu_generator.getConstraintValue = function(argString) {
		return b_wenwentu_generator_root.getConstraintValue(argString);
	};

	wenwentu_generator.getBaseline = function() {
		return b_wenwentu_generator_root.getBaseline();
	};

	wenwentu_generator.setBaseline = function(argObject) {
		b_wenwentu_generator_root.setBaseline(argObject);
	};

	wenwentu_generator.getAccessibilityEnabled = function() {
		return b_wenwentu_generator_root.getAccessibilityEnabled();
	};

	wenwentu_generator.setAccessibilityEnabled = function(argBoolean) {
		b_wenwentu_generator_root.setAccessibilityEnabled(argBoolean);
	};

	wenwentu_generator.getMeasuredMinWidth = function() {
		return b_wenwentu_generator_root.getMeasuredMinWidth();
	};

	wenwentu_generator.setMeasuredMinWidth = function(argNumber) {
		b_wenwentu_generator_root.setMeasuredMinWidth(argNumber);
	};

	wenwentu_generator.getMaxBoundsHeight = function(argBoolean) {
		return b_wenwentu_generator_root.getMaxBoundsHeight(argBoolean);
	};

	wenwentu_generator.getToolTip = function() {
		return b_wenwentu_generator_root.getToolTip();
	};

	wenwentu_generator.setToolTip = function(argString) {
		b_wenwentu_generator_root.setToolTip(argString);
	};

	wenwentu_generator.getNumAutomationChildren = function() {
		return b_wenwentu_generator_root.getNumAutomationChildren();
	};

	wenwentu_generator.getParentDocument = function() {
		return b_wenwentu_generator_root.getParentDocument();
	};

	wenwentu_generator.stylesInitialized = function() {
		b_wenwentu_generator_root.stylesInitialized();
	};

	wenwentu_generator.getLayoutBoundsY = function(argBoolean) {
		return b_wenwentu_generator_root.getLayoutBoundsY(argBoolean);
	};

	wenwentu_generator.getLayoutBoundsX = function(argBoolean) {
		return b_wenwentu_generator_root.getLayoutBoundsX(argBoolean);
	};

	wenwentu_generator.effectFinished = function(argIEffectInstance) {
		b_wenwentu_generator_root.effectFinished(argIEffectInstance);
	};

	wenwentu_generator.getContentMouseY = function() {
		return b_wenwentu_generator_root.getContentMouseY();
	};

	wenwentu_generator.getContentMouseX = function() {
		return b_wenwentu_generator_root.getContentMouseX();
	};

	wenwentu_generator.getDesignLayer = function() {
		return b_wenwentu_generator_root.getDesignLayer();
	};

	wenwentu_generator.setDesignLayer = function(argDesignLayer) {
		b_wenwentu_generator_root.setDesignLayer(argDesignLayer);
	};

	wenwentu_generator.getExplicitMaxHeight = function() {
		return b_wenwentu_generator_root.getExplicitMaxHeight();
	};

	wenwentu_generator.setExplicitMaxHeight = function(argNumber) {
		b_wenwentu_generator_root.setExplicitMaxHeight(argNumber);
	};

	wenwentu_generator.getRotation = function() {
		return b_wenwentu_generator_root.getRotation();
	};

	wenwentu_generator.setRotation = function(argNumber) {
		b_wenwentu_generator_root.setRotation(argNumber);
	};

	wenwentu_generator.createAutomationIDPart = function(argIAutomationObject) {
		return b_wenwentu_generator_root.createAutomationIDPart(argIAutomationObject);
	};

	wenwentu_generator.getCurrentState = function() {
		return b_wenwentu_generator_root.getCurrentState();
	};

	wenwentu_generator.setCurrentState = function(argString) {
		b_wenwentu_generator_root.setCurrentState(argString);
	};

	wenwentu_generator.getAccessibilityDescription = function() {
		return b_wenwentu_generator_root.getAccessibilityDescription();
	};

	wenwentu_generator.setAccessibilityDescription = function(argString) {
		b_wenwentu_generator_root.setAccessibilityDescription(argString);
	};

	wenwentu_generator.owns = function(argDisplayObject) {
		return b_wenwentu_generator_root.owns(argDisplayObject);
	};

	wenwentu_generator.getShowInAutomationHierarchy = function() {
		return b_wenwentu_generator_root.getShowInAutomationHierarchy();
	};

	wenwentu_generator.setShowInAutomationHierarchy = function(argBoolean) {
		b_wenwentu_generator_root.setShowInAutomationHierarchy(argBoolean);
	};

	wenwentu_generator.getLayoutMatrix3D = function() {
		return b_wenwentu_generator_root.getLayoutMatrix3D();
	};

	wenwentu_generator.getLayoutDirection = function() {
		return b_wenwentu_generator_root.getLayoutDirection();
	};

	wenwentu_generator.setLayoutDirection = function(argString) {
		b_wenwentu_generator_root.setLayoutDirection(argString);
	};

	wenwentu_generator.drawFocus = function(argBoolean) {
		b_wenwentu_generator_root.drawFocus(argBoolean);
	};

	wenwentu_generator.getFocusEnabled = function() {
		return b_wenwentu_generator_root.getFocusEnabled();
	};

	wenwentu_generator.setFocusEnabled = function(argBoolean) {
		b_wenwentu_generator_root.setFocusEnabled(argBoolean);
	};

	wenwentu_generator.getWidth = function() {
		return b_wenwentu_generator_root.getWidth();
	};

	wenwentu_generator.setWidth = function(argNumber) {
		b_wenwentu_generator_root.setWidth(argNumber);
	};

	wenwentu_generator.getHeight = function() {
		return b_wenwentu_generator_root.getHeight();
	};

	wenwentu_generator.setHeight = function(argNumber) {
		b_wenwentu_generator_root.setHeight(argNumber);
	};

	wenwentu_generator.getScale9Grid = function() {
		return b_wenwentu_generator_root.getScale9Grid();
	};

	wenwentu_generator.setScale9Grid = function(argRectangle) {
		b_wenwentu_generator_root.setScale9Grid(argRectangle);
	};

	wenwentu_generator.getRect = function(argDisplayObject) {
		return b_wenwentu_generator_root.getRect(argDisplayObject);
	};

	wenwentu_generator.hitTestObject = function(argDisplayObject) {
		return b_wenwentu_generator_root.hitTestObject(argDisplayObject);
	};

	wenwentu_generator.getBounds = function(argDisplayObject) {
		return b_wenwentu_generator_root.getBounds(argDisplayObject);
	};

	wenwentu_generator.hitTestPoint = function(argNumber1, argNumber2, argBoolean) {
		return b_wenwentu_generator_root.hitTestPoint(argNumber1, argNumber2, argBoolean);
	};

	wenwentu_generator.getStage = function() {
		return b_wenwentu_generator_root.getStage();
	};

	wenwentu_generator.getParent = function() {
		return b_wenwentu_generator_root.getParent();
	};

	wenwentu_generator.localToGlobal = function(argPoint) {
		return b_wenwentu_generator_root.localToGlobal(argPoint);
	};

	wenwentu_generator.getLoaderInfo = function() {
		return b_wenwentu_generator_root.getLoaderInfo();
	};

	wenwentu_generator.getRotationZ = function() {
		return b_wenwentu_generator_root.getRotationZ();
	};

	wenwentu_generator.setRotationZ = function(argNumber) {
		b_wenwentu_generator_root.setRotationZ(argNumber);
	};

	wenwentu_generator.getRotationY = function() {
		return b_wenwentu_generator_root.getRotationY();
	};

	wenwentu_generator.setRotationY = function(argNumber) {
		b_wenwentu_generator_root.setRotationY(argNumber);
	};

	wenwentu_generator.getName = function() {
		return b_wenwentu_generator_root.getName();
	};

	wenwentu_generator.setName = function(argString) {
		b_wenwentu_generator_root.setName(argString);
	};

	wenwentu_generator.getRotationX = function() {
		return b_wenwentu_generator_root.getRotationX();
	};

	wenwentu_generator.setRotationX = function(argNumber) {
		b_wenwentu_generator_root.setRotationX(argNumber);
	};

	wenwentu_generator.getOpaqueBackground = function() {
		return b_wenwentu_generator_root.getOpaqueBackground();
	};

	wenwentu_generator.setOpaqueBackground = function(argObject) {
		b_wenwentu_generator_root.setOpaqueBackground(argObject);
	};

	wenwentu_generator.getCacheAsBitmap = function() {
		return b_wenwentu_generator_root.getCacheAsBitmap();
	};

	wenwentu_generator.setCacheAsBitmap = function(argBoolean) {
		b_wenwentu_generator_root.setCacheAsBitmap(argBoolean);
	};

	wenwentu_generator.getFilters = function() {
		return b_wenwentu_generator_root.getFilters();
	};

	wenwentu_generator.setFilters = function(argArray) {
		b_wenwentu_generator_root.setFilters(argArray);
	};

	wenwentu_generator.getAccessibilityProperties = function() {
		return b_wenwentu_generator_root.getAccessibilityProperties();
	};

	wenwentu_generator.setAccessibilityProperties = function(argAccessibilityProperties) {
		b_wenwentu_generator_root.setAccessibilityProperties(argAccessibilityProperties);
	};

	wenwentu_generator.getVisible = function() {
		return b_wenwentu_generator_root.getVisible();
	};

	wenwentu_generator.setVisible = function(argBoolean) {
		b_wenwentu_generator_root.setVisible(argBoolean);
	};

	wenwentu_generator.getRoot = function() {
		return b_wenwentu_generator_root.getRoot();
	};

	wenwentu_generator.setBlendShader = function(argShader) {
		b_wenwentu_generator_root.setBlendShader(argShader);
	};

	wenwentu_generator.getTransform = function() {
		return b_wenwentu_generator_root.getTransform();
	};

	wenwentu_generator.setTransform = function(argTransform) {
		b_wenwentu_generator_root.setTransform(argTransform);
	};

	wenwentu_generator.getRotation = function() {
		return b_wenwentu_generator_root.getRotation();
	};

	wenwentu_generator.setRotation = function(argNumber) {
		b_wenwentu_generator_root.setRotation(argNumber);
	};

	wenwentu_generator.getScaleZ = function() {
		return b_wenwentu_generator_root.getScaleZ();
	};

	wenwentu_generator.setScaleZ = function(argNumber) {
		b_wenwentu_generator_root.setScaleZ(argNumber);
	};

	wenwentu_generator.getScaleY = function() {
		return b_wenwentu_generator_root.getScaleY();
	};

	wenwentu_generator.setScaleY = function(argNumber) {
		b_wenwentu_generator_root.setScaleY(argNumber);
	};

	wenwentu_generator.getScaleX = function() {
		return b_wenwentu_generator_root.getScaleX();
	};

	wenwentu_generator.setScaleX = function(argNumber) {
		b_wenwentu_generator_root.setScaleX(argNumber);
	};

	wenwentu_generator.getMouseY = function() {
		return b_wenwentu_generator_root.getMouseY();
	};

	wenwentu_generator.getMouseX = function() {
		return b_wenwentu_generator_root.getMouseX();
	};

	wenwentu_generator.getZ = function() {
		return b_wenwentu_generator_root.getZ();
	};

	wenwentu_generator.setZ = function(argNumber) {
		b_wenwentu_generator_root.setZ(argNumber);
	};

	wenwentu_generator.getY = function() {
		return b_wenwentu_generator_root.getY();
	};

	wenwentu_generator.setY = function(argNumber) {
		b_wenwentu_generator_root.setY(argNumber);
	};

	wenwentu_generator.getX = function() {
		return b_wenwentu_generator_root.getX();
	};

	wenwentu_generator.setX = function(argNumber) {
		b_wenwentu_generator_root.setX(argNumber);
	};

	wenwentu_generator.local3DToGlobal = function(argVector3D) {
		return b_wenwentu_generator_root.local3DToGlobal(argVector3D);
	};

	wenwentu_generator.DisplayObject = function() {
		return b_wenwentu_generator_root.DisplayObject();
	};

	wenwentu_generator.getMask = function() {
		return b_wenwentu_generator_root.getMask();
	};

	wenwentu_generator.setMask = function(argDisplayObject) {
		b_wenwentu_generator_root.setMask(argDisplayObject);
	};

	wenwentu_generator.getAlpha = function() {
		return b_wenwentu_generator_root.getAlpha();
	};

	wenwentu_generator.setAlpha = function(argNumber) {
		b_wenwentu_generator_root.setAlpha(argNumber);
	};

	wenwentu_generator.getScrollRect = function() {
		return b_wenwentu_generator_root.getScrollRect();
	};

	wenwentu_generator.setScrollRect = function(argRectangle) {
		b_wenwentu_generator_root.setScrollRect(argRectangle);
	};

	wenwentu_generator.getBlendMode = function() {
		return b_wenwentu_generator_root.getBlendMode();
	};

	wenwentu_generator.setBlendMode = function(argString) {
		b_wenwentu_generator_root.setBlendMode(argString);
	};

	wenwentu_generator.globalToLocal3D = function(argPoint) {
		return b_wenwentu_generator_root.globalToLocal3D(argPoint);
	};

	wenwentu_generator.globalToLocal = function(argPoint) {
		return b_wenwentu_generator_root.globalToLocal(argPoint);
	};

	wenwentu_generator.getHitArea = function() {
		return b_wenwentu_generator_root.getHitArea();
	};

	wenwentu_generator.setHitArea = function(argSprite) {
		b_wenwentu_generator_root.setHitArea(argSprite);
	};

	wenwentu_generator.getDropTarget = function() {
		return b_wenwentu_generator_root.getDropTarget();
	};

	wenwentu_generator.startTouchDrag = function(argInt, argBoolean, argRectangle) {
		b_wenwentu_generator_root.startTouchDrag(argInt, argBoolean, argRectangle);
	};

	wenwentu_generator.Sprite = function() {
		return b_wenwentu_generator_root.Sprite();
	};

	wenwentu_generator.getUseHandCursor = function() {
		return b_wenwentu_generator_root.getUseHandCursor();
	};

	wenwentu_generator.setUseHandCursor = function(argBoolean) {
		b_wenwentu_generator_root.setUseHandCursor(argBoolean);
	};

	wenwentu_generator.stopDrag = function() {
		b_wenwentu_generator_root.stopDrag();
	};

	wenwentu_generator.startDrag = function(argBoolean, argRectangle) {
		b_wenwentu_generator_root.startDrag(argBoolean, argRectangle);
	};

	wenwentu_generator.getSoundTransform = function() {
		return b_wenwentu_generator_root.getSoundTransform();
	};

	wenwentu_generator.setSoundTransform = function(argSoundTransform) {
		b_wenwentu_generator_root.setSoundTransform(argSoundTransform);
	};

	wenwentu_generator.getButtonMode = function() {
		return b_wenwentu_generator_root.getButtonMode();
	};

	wenwentu_generator.setButtonMode = function(argBoolean) {
		b_wenwentu_generator_root.setButtonMode(argBoolean);
	};

	wenwentu_generator.stopTouchDrag = function(argInt) {
		b_wenwentu_generator_root.stopTouchDrag(argInt);
	};

	wenwentu_generator.getGraphics = function() {
		return b_wenwentu_generator_root.getGraphics();
	};

	wenwentu_generator.addChildAt = function(argDisplayObject, argInt) {
		return b_wenwentu_generator_root.addChildAt(argDisplayObject, argInt);
	};

	wenwentu_generator.setErrorString = function(argString) {
		b_wenwentu_generator_root.setErrorString(argString);
	};

	wenwentu_generator.setMouseChildren = function(argBoolean) {
		b_wenwentu_generator_root.setMouseChildren(argBoolean);
	};

	wenwentu_generator.getSuggestedFocusSkinExclusions = function() {
		return b_wenwentu_generator_root.getSuggestedFocusSkinExclusions();
	};

	wenwentu_generator.invalidateSkinState = function() {
		b_wenwentu_generator_root.invalidateSkinState();
	};

	wenwentu_generator.styleChanged = function(argString) {
		b_wenwentu_generator_root.styleChanged(argString);
	};

	wenwentu_generator.setEnabled = function(argBoolean) {
		b_wenwentu_generator_root.setEnabled(argBoolean);
	};

	wenwentu_generator.removeChild = function(argDisplayObject) {
		return b_wenwentu_generator_root.removeChild(argDisplayObject);
	};

	wenwentu_generator.getBaselinePosition = function() {
		return b_wenwentu_generator_root.getBaselinePosition();
	};

	wenwentu_generator.SkinnableComponent = function() {
		return b_wenwentu_generator_root.SkinnableComponent();
	};

	wenwentu_generator.addChild = function(argDisplayObject) {
		return b_wenwentu_generator_root.addChild(argDisplayObject);
	};

	wenwentu_generator.setChildIndex = function(argDisplayObject, argInt) {
		b_wenwentu_generator_root.setChildIndex(argDisplayObject, argInt);
	};

	wenwentu_generator.getSkin = function() {
		return b_wenwentu_generator_root.getSkin();
	};

	wenwentu_generator.matchesCSSState = function(argString) {
		return b_wenwentu_generator_root.matchesCSSState(argString);
	};

	wenwentu_generator.setMouseEnabled = function(argBoolean) {
		b_wenwentu_generator_root.setMouseEnabled(argBoolean);
	};

	wenwentu_generator.removeChildAt = function(argInt) {
		return b_wenwentu_generator_root.removeChildAt(argInt);
	};

	wenwentu_generator.swapChildren = function(argDisplayObject1, argDisplayObject2) {
		b_wenwentu_generator_root.swapChildren(argDisplayObject1, argDisplayObject2);
	};

	wenwentu_generator.drawFocus = function(argBoolean) {
		b_wenwentu_generator_root.drawFocus(argBoolean);
	};

	wenwentu_generator.swapChildrenAt = function(argInt1, argInt2) {
		b_wenwentu_generator_root.swapChildrenAt(argInt1, argInt2);
	};

	wenwentu_generator.willTrigger = function(argString) {
		return b_wenwentu_generator_root.willTrigger(argString);
	};

	wenwentu_generator.toString = function() {
		return b_wenwentu_generator_root.toString();
	};

	wenwentu_generator.removeEventListener = function(argString, argFunction, argBoolean) {
		b_wenwentu_generator_root.removeEventListener(argString, argFunction, argBoolean);
	};

	wenwentu_generator.EventDispatcher = function(argIEventDispatcher) {
		return b_wenwentu_generator_root.EventDispatcher(argIEventDispatcher);
	};

	wenwentu_generator.addEventListener = function(argString, argFunction, argBoolean1, argInt, argBoolean2) {
		b_wenwentu_generator_root.addEventListener(argString, argFunction, argBoolean1, argInt, argBoolean2);
	};

	wenwentu_generator.hasEventListener = function(argString) {
		return b_wenwentu_generator_root.hasEventListener(argString);
	};

	wenwentu_generator.dispatchEvent = function(argEvent) {
		return b_wenwentu_generator_root.dispatchEvent(argEvent);
	};

	wenwentu_generator.FlexSprite = function() {
		return b_wenwentu_generator_root.FlexSprite();
	};

	wenwentu_generator.toString = function() {
		return b_wenwentu_generator_root.toString();
	};

}
