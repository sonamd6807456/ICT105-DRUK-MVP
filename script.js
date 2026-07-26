/* ==========================================
   SMART CAMPUS EVENT HUB
   SCRIPT.JS
========================================== */

(function () {

    "use strict";

    /* ==========================================
       LOCAL STORAGE METRICS
    ========================================== */

    const METRICS = {

        homepageViews: "sceh_homepage_views",
        exploreClicks: "sceh_explore_events_clicks",
        signupClicks: "sceh_signup_clicks",
        viewAllClicks: "sceh_viewall_clicks"

    };


    /* ==========================================
       INCREASE METRIC
    ========================================== */

    function increaseMetric(key) {

        const current =
            parseInt(localStorage.getItem(key) || "0", 10);

        localStorage.setItem(key, current + 1);

    }


    /* ==========================================
       PAGE VIEW
    ========================================== */

    increaseMetric(METRICS.homepageViews);


    /* ==========================================
       WAIT FOR PAGE
    ========================================== */

    document.addEventListener("DOMContentLoaded", () => {

        /* ------------------------------
           Explore Events Button
        ------------------------------ */

        const exploreBtn =
            document.querySelector('a[href="events.html"].btn-primary');

        if (exploreBtn) {

            exploreBtn.addEventListener("click", () => {

                increaseMetric(METRICS.exploreClicks);

            });

        }


        /* ------------------------------
           Create Student Account
        ------------------------------ */

        const signupBtn =
            document.querySelector('a[href="signup.html"]');

        if (signupBtn) {

            signupBtn.addEventListener("click", () => {

                increaseMetric(METRICS.signupClicks);

            });

        }


        /* ------------------------------
           View All Events
        ------------------------------ */

        const buttons =
            document.querySelectorAll('a[href="events.html"].btn-secondary');

        buttons.forEach(button => {

            button.addEventListener("click", () => {

                increaseMetric(METRICS.viewAllClicks);

            });

        });


        /* ------------------------------
           Homepage Statistics
        ------------------------------ */

        if (typeof getData === "function") {

            const events = getData("sceh_events");
            const registrations = getData("sceh_registrations");
            const users = getData("sceh_users");

            const eventCount =
                document.getElementById("eventCount");

            const registrationCount =
                document.getElementById("registrationCount");

            const studentCount =
                document.getElementById("studentCount");

            if (eventCount)
                eventCount.textContent = events.length;

            if (registrationCount)
                registrationCount.textContent =
                    registrations.length;

            if (studentCount)
                studentCount.textContent =
                    users.filter(user => user.role === "student").length;

        }

    });

})();
