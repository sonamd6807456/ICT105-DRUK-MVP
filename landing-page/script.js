/* ==========================================
   SMART CAMPUS EVENT HUB
   SCRIPT.JS
========================================== */

(function () {

    "use strict";

    /* ==========================================
       LOCAL STORAGE KEYS
    ========================================== */

    const metrics = {

        homepageViews: "scehHomepageViews",

        primaryCtaClicks: "scehPrimaryCtaClicks",

        secondaryCtaClicks: "scehSecondaryCtaClicks"

    };


    /* ==========================================
       UPDATE METRIC
    ========================================== */

    function updateMetric(key) {

        const currentValue =
            parseInt(localStorage.getItem(key) || "0", 10);

        localStorage.setItem(
            key,
            currentValue + 1
        );

    }


    /* ==========================================
       COUNT PAGE VIEW
    ========================================== */

    updateMetric(metrics.homepageViews);


    /* ==========================================
       PRIMARY CTA BUTTONS
    ========================================== */

    document.querySelectorAll(".js-cta").forEach((button) => {

        button.addEventListener("click", () => {

            updateMetric(metrics.primaryCtaClicks);

        });

    });


    /* ==========================================
       SECONDARY CTA BUTTONS
    ========================================== */

    document.querySelectorAll(".js-secondary-cta").forEach((button) => {

        button.addEventListener("click", () => {

            updateMetric(metrics.secondaryCtaClicks);

        });

    });

})();
