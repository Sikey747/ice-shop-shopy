//////////////////////////////////////////////
// <!-- spollers -->
// <div data-spollers class="spollers">
//   <details class="spollers__item">
//     <summary class="spollers__title">Заголовок спойлера</summary>
//     <div class="spollers__body">Контент спойлера</div>
//   </details>
// </div>

// <!-- acordion -->
// <div data-spollers data-one-spoller class="spollers">
//   <details class="spollers__item">
//     <summary class="spollers__title">Заголовок спойлера1</summary>
//     <div class="spollers__body">Контент спойлера1</div>
//   </details>
//   <details class="spollers__item">
//     <summary class="spollers__title">Заголовок спойлера2</summary>
//     <div class="spollers__body">Контент спойлера2</div>
//   </details>
// </div>

// <!-- speed control -->
// <div data-spollers data-spollers-speed="1000" class="spollers">
// </div>

// <!-- close behind spoiler -->
// <!-- If you need to close the spoiler (s) when clicking outside the block ("from scratch"), then the desired header should be added data-spoller-close -->
// <div data-spollers class="spollers">
//   <div class="spollers__item">
//     <button type="button" data-spoller data-spoller-close class="spollers__title">Заголовок спойлера</button>
//     <div class="spollers__body">Контент спойлера</div>
//   </div>
// </div>
/////////////////////

spollers();

function spollers() {
  const spollersArray = document.querySelectorAll("[data-spollers]");
  if (spollersArray.length > 0) {
    document.addEventListener("click", setSpollerAction);

    const spollersRegular = Array.from(spollersArray).filter(
      function (item, index, self) {
        return !item.dataset.spollers.split(",")[0];
      },
    );
    if (spollersRegular.length) {
      initSpollers(spollersRegular);
    }
    let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
    if (mdQueriesArray && mdQueriesArray.length) {
      mdQueriesArray.forEach((mdQueriesItem) => {
        mdQueriesItem.matchMedia.addEventListener("change", function () {
          initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
        });
        initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
      });
    }
    //Мой фикс что бы выше или ниж указаного значения спойлер был постоянно открытым если не нежно закоментируй
    spollersArray.forEach((item) => {
      if (item.dataset.spollers !== "") {
        const mqArr = item.dataset.spollers.split(",");
        if (matchMedia(`(${mqArr[1]}: ${mqArr[0]}px)`)) {
          const details = item.querySelector("details");
          const summary = item.querySelector("summary");
          if (!details.hasAttributes("open")) {
            details.setAttribute("open");
          }
          document.addEventListener("click", function (e) {
            if (e.target.contains(summary)) {
              e.preventDefault();
            }
          });
        }
      }
    });
    ////

    function initSpollers(spollersArray, matchMedia = false) {
      spollersArray.forEach((spollersBlock) => {
        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
        if (matchMedia.matches || !matchMedia) {
          spollersBlock.classList.add("_spoller-init");
          initSpollerBody(spollersBlock);
        } else {
          spollersBlock.classList.remove("_spoller-init");
          initSpollerBody(spollersBlock, false);
        }
      });
    }

    // Робота з контентом
    function initSpollerBody(spollersBlock, hideSpollerBody = true) {
      let spollerItems = spollersBlock.querySelectorAll("details");
      if (spollerItems.length) {
        spollerItems = Array.from(spollerItems).filter(
          (item) => item.closest("[data-spollers]") === spollersBlock,
        );
        spollerItems.forEach((spollerItem) => {
          let spollerTitle = spollerItem.querySelector("summary");
          if (hideSpollerBody) {
            spollerTitle.removeAttribute("tabindex");
            if (!spollerItem.hasAttribute("data-open")) {
              spollerItem.open = false;
              spollerTitle.nextElementSibling.hidden = true;
            } else {
              spollerTitle.classList.add("_spoller-active");
              spollerItem.open = true;
            }
          } else {
            spollerTitle.setAttribute("tabindex", "-1");
            spollerTitle.classList.remove("_spoller-active");
            spollerItem.open = true;
            spollerTitle.nextElementSibling.hidden = false;
          }
        });
      }
    }
    function setSpollerAction(e) {
      const el = e.target;
      if (
        el.closest("summary") &&
        el.closest("[data-spollers]").classList.contains("_spoller-init")
      ) {
        const spollerTitle = el.closest("summary");
        const spollerBlock = spollerTitle.closest("details");
        const spollersBlock = spollerTitle.closest("[data-spollers]");
        const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
        const scrollSpoller = spollerBlock.hasAttribute("data-spoller-scroll");
        const spollerSpeed = spollersBlock.dataset.spollersSpeed
          ? parseInt(spollersBlock.dataset.spollersSpeed)
          : 500;

        if (!spollersBlock.querySelectorAll("._slide").length) {
          if (oneSpoller && !spollerBlock.open) {
            hideSpollersBody(spollersBlock);
          }

          !spollerBlock.open
            ? (spollerBlock.open = true)
            : setTimeout(() => {
                spollerBlock.open = false;
              }, spollerSpeed);

          spollerTitle.classList.toggle("_spoller-active");
          _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);

          if (
            scrollSpoller &&
            spollerTitle.classList.contains("_spoller-active")
          ) {
            const scrollSpollerValue = spollerBlock.dataset.spollerScroll;
            const scrollSpollerOffset = +scrollSpollerValue
              ? +scrollSpollerValue
              : 0;
            const scrollSpollerNoHeader = spollerBlock.hasAttribute(
              "data-spoller-scroll-noheader",
            )
              ? document.querySelector(".header").offsetHeight
              : 0;

            //setTimeout(() => {
            window.scrollTo({
              top:
                spollerBlock.offsetTop -
                (scrollSpollerOffset + scrollSpollerNoHeader),
              behavior: "smooth",
            });
            //}, spollerSpeed);
          }
        }
        e.preventDefault();
      }
      // Закриття при кліку поза спойлером
      if (!el.closest("[data-spollers]")) {
        const spollersClose = document.querySelectorAll("[data-spoller-close]");
        if (spollersClose.length) {
          spollersClose.forEach((spollerClose) => {
            const spollersBlock = spollerClose.closest("[data-spollers]");
            const spollerCloseBlock = spollerClose.parentNode;
            if (spollersBlock.classList.contains("_spoller-init")) {
              const spollerSpeed = spollersBlock.dataset.spollersSpeed
                ? parseInt(spollersBlock.dataset.spollersSpeed)
                : 500;
              spollerClose.classList.remove("_spoller-active");
              _slideUp(spollerClose.nextElementSibling, spollerSpeed);
              setTimeout(() => {
                spollerCloseBlock.open = false;
              }, spollerSpeed);
            }
          });
        }
      }
    }
    function hideSpollersBody(spollersBlock) {
      const spollerActiveBlock = spollersBlock.querySelector("details[open]");
      const tt = spollersBlock.querySelector("._spoller-active");
      console.log(tt);
      if (
        spollerActiveBlock &&
        !spollersBlock.querySelectorAll("._slide").length
      ) {
        const spollerActiveTitle = spollerActiveBlock.querySelector("summary");
        const spollerSpeed = spollersBlock.dataset.spollersSpeed
          ? parseInt(spollersBlock.dataset.spollersSpeed)
          : 500;
        spollerActiveTitle.classList.remove("_spoller-active");
        _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
        setTimeout(() => {
          spollerActiveBlock.open = false;
        }, spollerSpeed);
      }
    }
  }
}

let _slideUp = (target, duration = 500, showmore = 0) => {
  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = `${target.offsetHeight}px`;
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = showmore ? `${showmore}px` : `0px`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.hidden = !showmore ? true : false;
      !showmore ? target.style.removeProperty("height") : null;
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      !showmore ? target.style.removeProperty("overflow") : null;
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
      // Створюємо подію
      document.dispatchEvent(
        new CustomEvent("slideUpDone", {
          detail: {
            target: target,
          },
        }),
      );
    }, duration);
  }
};
let _slideDown = (target, duration = 500, showmore = 0) => {
  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    target.hidden = target.hidden ? false : null;
    showmore ? target.style.removeProperty("height") : null;
    let height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = showmore ? `${showmore}px` : `0px`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(() => {
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
      // Створюємо подію
      document.dispatchEvent(
        new CustomEvent("slideDownDone", {
          detail: {
            target: target,
          },
        }),
      );
    }, duration);
  }
};
let _slideToggle = (target, duration = 500) => {
  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
};
function dataMediaQueries(array, dataSetValue) {
  // Отримання об'єктів з медіа-запитами
  const media = Array.from(array).filter(function (item, index, self) {
    if (item.dataset[dataSetValue]) {
      return item.dataset[dataSetValue].split(",")[0];
    }
  });
  // Ініціалізація об'єктів з медіа-запитами
  if (media.length) {
    const breakpointsArray = [];
    media.forEach((item) => {
      const params = item.dataset[dataSetValue];
      const breakpoint = {};
      const paramsArray = params.split(",");
      breakpoint.value = paramsArray[0];
      breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
      breakpoint.item = item;
      breakpointsArray.push(breakpoint);
    });
    // Отримуємо унікальні брейкпоінти
    let mdQueries = breakpointsArray.map(function (item) {
      return (
        "(" +
        item.type +
        "-width: " +
        item.value +
        "px)," +
        item.value +
        "," +
        item.type
      );
    });
    mdQueries = uniqArray(mdQueries);
    const mdQueriesArray = [];

    if (mdQueries.length) {
      // Працюємо з кожним брейкпоінтом
      mdQueries.forEach((breakpoint) => {
        const paramsArray = breakpoint.split(",");
        const mediaBreakpoint = paramsArray[1];
        const mediaType = paramsArray[2];
        const matchMedia = window.matchMedia(paramsArray[0]);
        // Об'єкти з потрібними умовами
        const itemsArray = breakpointsArray.filter(function (item) {
          if (item.value === mediaBreakpoint && item.type === mediaType) {
            return true;
          }
        });
        mdQueriesArray.push({
          itemsArray,
          matchMedia,
        });
      });
      return mdQueriesArray;
    }
  }
}
