/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/videoPlayer.js":
/*!**************************************!*\
  !*** ./src/client/js/videoPlayer.js ***!
  \**************************************/
/***/ (() => {

eval("const video = document.querySelector(\"video\");\nconst playBtn = document.getElementById(\"play\");\nconst playBtnIcon = playBtn.querySelector(\"i\");\nconst muteBtn = document.getElementById(\"mute\");\nconst muteBtnIcon = muteBtn.querySelector(\"i\");\nconst volumeRange = document.getElementById(\"volume\");\nconst currenTime = document.getElementById(\"currenTime\");\nconst totalTime = document.getElementById(\"totalTime\");\nconst timeline = document.getElementById(\"timeline\");\nconst fullScreenBtn = document.getElementById(\"fullScreen\");\nconst fullScreenIcon = fullScreenBtn.querySelector(\"i\");\nconst videoContainer = document.getElementById(\"videoContainer\");\nconst videoControls = document.getElementById(\"videoControls\");\nlet controlsTimeout = null;\nlet volumeValue = 0.5;\nlet controlsMovementTimeout = null;\nvideo.volume = volumeValue;\nconst handlePlayClick = event => {\n  if (video.paused) {\n    video.play();\n  } else {\n    video.pause();\n  }\n  // playBtn.innerText = video.paused ? \"Play\" : \"Pause\";\n  playBtnIcon.classList = video.paused ? \"fas fa-play\" : \"fas fa-pause\";\n};\nconst handleMuteClick = event => {\n  if (video.muted) {\n    video.muted = false;\n  } else {\n    video.muted = true;\n  }\n  // muteBtn.innerText = video.muted ? \"Unmute\" : \"Mute\";\n  muteBtnIcon.classList = video.muted ? \"fas fa-volume-mute\" : \"fas fa-volume-up\";\n  volumeRange.value = video.muted ? 0 : volumeValue;\n};\nconst handleVolumeChange = event => {\n  const {\n    target: {\n      value\n    }\n  } = event;\n  if (video.muted) {\n    video.muted = false;\n    muteBtnIcon.classList = \"fas fa-volume-up\";\n    // muteBtn.innerText = \"Mute\";\n  }\n\n  volumeValue = value;\n  video.volume = value;\n  if (Number(value) === 0) {\n    // muteBtn.innerText = \"Unmute\";\n    muteBtnIcon.classList = \"fas fa-volume-mute\";\n    video.muted = true;\n  } else {\n    video.muted = false;\n    muteBtnIcon.classList = \"fas fa-volume-up\";\n    // muteBtn.innerText = \"Mute\";\n  }\n};\n\nconst formatTime = seconds => new Date(seconds * 1000).toISOString().substring(14, 19);\n// new Date(seconds * 1000).toISOString().substring(11, 19);\n\nconst handleLoadedMetadata = () => {\n  totalTime.innerText = formatTime(Math.floor(video.duration));\n  timeline.max = Math.floor(video.duration);\n};\nconst handleTimeUpdate = () => {\n  currenTime.innerText = formatTime(Math.floor(video.currentTime));\n  timeline.value = Math.floor(video.currentTime);\n};\nconst handleTimelineChange = event => {\n  const {\n    target: {\n      value\n    }\n  } = event;\n  video.currentTime = value;\n};\nconst handleFullScreen = () => {\n  const fullscreen = document.fullscreenElement;\n  if (fullscreen) {\n    document.exitFullscreen();\n    // fullScreenBtn.innerText = \"Enter Full\";\n    fullScreenIcon.classList = \"fas fa-expand\";\n  } else {\n    videoContainer.requestFullscreen();\n    // fullScreenBtn.innerText = \"Exit Full\";\n    fullScreenIcon.classList = \"fas fa-compress\";\n  }\n};\nconst hideControls = () => videoControls.classList.remove(\"showing\");\nconst handleMouseMove = () => {\n  if (controlsTimeout) {\n    clearTimeout(controlsTimeout);\n    controlsTimeout = null;\n  }\n  if (controlsMovementTimeout) {\n    clearTimeout(controlsMovementTimeout);\n    controlsMovementTimeout = null;\n  }\n  videoControls.classList.add(\"showing\");\n  controlsMovementTimeout = setTimeout(hideControls, 3000);\n};\nconst handleMouseLeave = () => {\n  controlsTimeout = setTimeout(hideControls, 3000);\n};\nconst handleEnded = () => {\n  const {\n    id\n  } = videoContainer.dataset;\n  fetch(`/api/videos/${id}/view`, {\n    method: \"POST\"\n  });\n};\nconst handleKeydown = event => {\n  if (event.key === \" \") {\n    handlePlayClick();\n  }\n  if (event.key === \"f\") {\n    videoContainer.requestFullscreen();\n    fullScreenIcon.classList = \"fas fa-compress\";\n  } else if (event.key === \"Escape\") {\n    document.exitFullscreen();\n    fullScreenIcon.classList = \"fas fa-expand\";\n  }\n};\nplayBtn.addEventListener(\"click\", handlePlayClick);\nmuteBtn.addEventListener(\"click\", handleMuteClick);\nvolumeRange.addEventListener(\"input\", handleVolumeChange);\nvideo.readyState ? handleLoadedMetadata() : video.addEventListener(\"loadedmetadata\", handleLoadedMetadata);\n// video.addEventListener(\"loadedmetadata\", handleLoadedMetadata);\nvideo.addEventListener(\"timeupdate\", handleTimeUpdate);\nvideo.addEventListener(\"ended\", handleEnded);\nwindow.addEventListener(\"keyup\", handleKeydown);\nvideoContainer.addEventListener(\"mousemove\", handleMouseMove);\nvideoContainer.addEventListener(\"mouseleave\", handleMouseLeave);\ntimeline.addEventListener(\"input\", handleTimelineChange);\nfullScreenBtn.addEventListener(\"click\", handleFullScreen);\n\n//# sourceURL=webpack://wetube/./src/client/js/videoPlayer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/videoPlayer.js"]();
/******/ 	
/******/ })()
;