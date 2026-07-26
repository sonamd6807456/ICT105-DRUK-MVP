/* ==========================================
   SMART CAMPUS EVENT HUB
   LANDING PAGE ANALYTICS
   ICT105 LAB 12
========================================== */


(function(){

    "use strict";



    /*
        LocalStorage Keys

        These values can be used
        for acquisition metrics.
    */

    const metrics = {

        pageViews:
        "smartCampusEventHub_pageViews",


        demoClicks:
        "smartCampusEventHub_demoClicks",


        featureClicks:
        "smartCampusEventHub_featureClicks",


        prototypeViews:
        "smartCampusEventHub_prototypeViews"

    };





    /*
        Increase Counter Function
    */

    function increaseCounter(key){

        let current =
        Number.parseInt(
            localStorage.getItem(key) || "0",
            10
        );


        localStorage.setItem(
            key,
            String(current + 1)
        );

    }







    /*
        Track Landing Page Visit
    */

    increaseCounter(
        metrics.pageViews
    );








    /*
        Track CTA Buttons

        Buttons:
        - Try Demo
        - Launch Prototype
        - Open Smart Campus Event Hub
    */


    document
    .querySelectorAll(".js-cta")
    .forEach(function(button){


        button.addEventListener(
            "click",
            function(){


                increaseCounter(
                    metrics.demoClicks
                );


            }
        );


    });










    /*
        Track Feature Interest

        When users scroll
        and interact with features
    */


    document
    .querySelectorAll(".feature-card")
    .forEach(function(card){


        card.addEventListener(
            "click",
            function(){


                increaseCounter(
                    metrics.featureClicks
                );


            }
        );


    });











    /*
        Track Prototype Section View

        Detect when prototype
        screenshots appear
    */


    const prototypeSection =
    document.querySelector("#prototype");



    if(prototypeSection){


        const observer =
        new IntersectionObserver(
            function(entries){


                entries.forEach(
                    function(entry){


                        if(entry.isIntersecting){


                            increaseCounter(
                                metrics.prototypeViews
                            );


                            observer.disconnect();


                        }


                    }
                );


            },
            {
                threshold:0.5
            }
        );



        observer.observe(
            prototypeSection 
        );


    }








    /*
        Console Information
        For Testing
    */


    console.log(
        "Smart Campus Event Hub Landing Page Analytics Loaded"
    );



})();
