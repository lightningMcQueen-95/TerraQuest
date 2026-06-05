/**
 * TerraQuest Core Interface Controller
 * Automated Layout Visualizations, Component Bindings, and Navigation Matrix
 */

(function () {
  "use strict";

  // --- Core Document Elements Selector Node Setup ---
  const appSideMenu = document.getElementById("nav-menu");
  const appMenuOpenBtn = document.getElementById("nav-toggle");
  const appMenuCloseBtn = document.getElementById("nav-close");

  // --- Dynamic Sidebar Toggle Logic ---
  if (appMenuOpenBtn && appSideMenu) {
    appMenuOpenBtn.addEventListener("click", () => {
      appSideMenu.classList.add("show-menu");
    });
  }

  if (appMenuCloseBtn && appSideMenu) {
    appMenuCloseBtn.addEventListener("click", () => {
      appSideMenu.classList.remove("show-menu");
    });
  }

  // --- Automated Menu Link Resolution Mechanics ---
  const activeNavigationLinks = document.querySelectorAll(".nav__link");

  const executeMenuRetractionOnSelection = () => {
    const contextualMenuNode = document.getElementById("nav-menu");
    if (contextualMenuNode) {
      contextualMenuNode.classList.remove("show-menu");
    }
  };

  activeNavigationLinks.forEach((linkNode) => {
    linkNode.addEventListener("click", executeMenuRetractionOnSelection);
  });

  // --- Window Vertical Scroll Transformation Bindings ---
  const evaluateHeaderDisplayState = () => {
    const globalHeaderWrapper = document.getElementById("header");
    if (globalHeaderWrapper) {
      if (window.scrollY >= 100) {
        globalHeaderWrapper.classList.add("scroll-header");
      } else {
        globalHeaderWrapper.classList.remove("scroll-header");
      }
    }
  };

  window.addEventListener("scroll", evaluateHeaderDisplayState);

  // --- Swiper Discovery Integration Layout Configuration ---
  new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
      rotate: 0,
    },
  });

  // --- Native Stream Video Playback Subsystem Engines ---
  const assetVideoSource = document.getElementById("video-file");
  const actionVideoTrigger = document.getElementById("video-button");
  const stateVideoIcon = document.getElementById("video-icon");

  const synchronizeVideoPlaybackMechanics = () => {
    if (!assetVideoSource || !stateVideoIcon) return;

    if (assetVideoSource.paused) {
      assetVideoSource.play();
      stateVideoIcon.classList.add("ri-pause-line");
      stateVideoIcon.classList.remove("ri-play-line");
    } else {
      assetVideoSource.pause();
      stateVideoIcon.classList.remove("ri-pause-line");
      stateVideoIcon.classList.add("ri-play-line");
    }
  };

  if (actionVideoTrigger) {
    actionVideoTrigger.addEventListener(
      "click",
      synchronizeVideoPlaybackMechanics
    );
  }

  const cycleIconStateOnCompletion = () => {
    if (stateVideoIcon) {
      stateVideoIcon.classList.remove("ri-pause-line");
      stateVideoIcon.classList.add("ri-play-line");
    }
  };

  if (assetVideoSource) {
    assetVideoSource.addEventListener("ended", cycleIconStateOnCompletion);
  }

  // --- Elevation Up-Scroll Button Element Rendering ---
  const parseAscentWidgetBehavior = () => {
    const primaryElevationWidget = document.getElementById("scroll-up");
    if (primaryElevationWidget) {
      if (window.scrollY >= 200) {
        primaryElevationWidget.classList.add("show-scroll");
      } else {
        primaryElevationWidget.classList.remove("show-scroll");
      }
    }
  };

  window.addEventListener("scroll", parseAscentWidgetBehavior);

  // --- Viewport Node Observer & Section Highlight Synchronizer ---
  const operationalDocumentSections = document.querySelectorAll("section[id]");

  const monitorActiveViewportCoordinates = () => {
    const windowVerticalOffset = window.pageYOffset;

    operationalDocumentSections.forEach((sectionNode) => {
      const targetBlockHeight = sectionNode.offsetHeight;
      const targetBlockTopBoundary = sectionNode.offsetTop - 50;
      const targetBlockStringKey = sectionNode.getAttribute("id");
      const interactiveTargetLink = document.querySelector(
        `.nav__menu a[href*="${targetBlockStringKey}"]`
      );

      if (!interactiveTargetLink) return;

      if (
        windowVerticalOffset > targetBlockTopBoundary &&
        windowVerticalOffset <= targetBlockTopBoundary + targetBlockHeight
      ) {
        interactiveTargetLink.classList.add("active-link");
      } else {
        interactiveTargetLink.classList.remove("active-link");
      }
    });
  };

  window.addEventListener("scroll", monitorActiveViewportCoordinates);

  // --- ScrollReveal Dynamic Visualization Presets Engine ---
  const engineRevealInitialization = ScrollReveal({
    distance: "60px",
    duration: 2800,
  });

  engineRevealInitialization.reveal(
    `.home__data, .home__social-link, .home__info,
     .discover__container,
     .experience__data, .experience__overlay,
     .place__card,
     .sponsor__content,
     .footer__data, .footer__rights`,
    {
      origin: "top",
      interval: 100,
    }
  );

  engineRevealInitialization.reveal(
    `.about__data, 
     .video__description,
     .subscribe__description`,
    {
      origin: "left",
    }
  );

  engineRevealInitialization.reveal(
    `.about__img-overlay, 
     .video__content,
     .subscribe__form`,
    {
      origin: "right",
      interval: 100,
    }
  );

  // --- Interface Theme Registry Infrastructure ---
  const themeControlSwitch = document.getElementById("theme-button");
  const darkThemeClassName = "dark-theme";
  const iconSunModeClassName = "ri-sun-line";

  const archivedThemeKeySelection = localStorage.getItem("selected-theme");
  const archivedIconKeySelection = localStorage.getItem("selected-icon");

  const retrieveTargetInterfaceTheme = () =>
    document.body.classList.contains(darkThemeClassName) ? "dark" : "light";
  const retrieveTargetInterfaceIcon = () =>
    themeControlSwitch.classList.contains(iconSunModeClassName)
      ? "ri-moon-line"
      : "ri-sun-line";

  if (archivedThemeKeySelection && themeControlSwitch) {
    document.body.classList[
      archivedThemeKeySelection === "dark" ? "add" : "remove"
    ](darkThemeClassName);
    themeControlSwitch.classList[
      archivedIconKeySelection === "ri-moon-line" ? "add" : "remove"
    ](iconSunModeClassName);
  }

  if (themeControlSwitch) {
    themeControlSwitch.addEventListener("click", () => {
      document.body.classList.toggle(darkThemeClassName);
      themeControlSwitch.classList.toggle(iconSunModeClassName);
      localStorage.setItem("selected-theme", retrieveTargetInterfaceTheme());
      localStorage.setItem("selected-icon", retrieveTargetInterfaceIcon());
    });
  }
})();
