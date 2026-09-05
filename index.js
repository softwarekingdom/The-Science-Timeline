/* =========================================
   அறிவியல் காலவரிசை
   JavaScript — PART A
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       மொபைல் மெனு
    ===================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const navLinks =
        document.getElementById("navLinks");


    if (menuToggle && navLinks) {

        menuToggle.addEventListener(
            "click",
            () => {

                navLinks.classList.toggle("active");

                const isOpen =
                    navLinks.classList.contains("active");

                menuToggle.textContent =
                    isOpen ? "✕" : "☰";

            }
        );

    }


    /* =====================================
       மெனு link அழுத்தும்போது
       மெனுவை மூடுதல்
    ===================================== */

    const navigationItems =
        document.querySelectorAll(
            ".nav-links a"
        );


    navigationItems.forEach((item) => {

        item.addEventListener(
            "click",
            () => {

                if (navLinks) {

                    navLinks.classList.remove(
                        "active"
                    );

                }

                if (menuToggle) {

                    menuToggle.textContent =
                        "☰";

                }

            }
        );

    });


    /* =====================================
       விஞ்ஞானிகள் பகுதி
    ===================================== */

    const scientistExploreButton =
        document.getElementById(
            "scientistExploreButton"
        );


    if (scientistExploreButton) {

        scientistExploreButton.addEventListener(
            "click",
            () => {

                const scientistsSection =
                    document.getElementById(
                        "scientists"
                    );


                if (scientistsSection) {

                    scientistsSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    }


    /* =====================================
       காலவரிசை button
       Part C-ல் Timeline section வரும்.
    ===================================== */

    const timelineButton =
        document.getElementById(
            "timelineButton"
        );


    if (timelineButton) {

        timelineButton.addEventListener(
            "click",
            () => {

                const timelineSection =
                    document.getElementById(
                        "timeline"
                    );


                if (timelineSection) {

                    timelineSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    }


    /* =====================================
       Anchor links-க்கு smooth scrolling
    ===================================== */

    const anchorLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    anchorLinks.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    });


    /* =====================================
       Console சோதனை
    ===================================== */

    console.log(
        "🔬 அறிவியல் காலவரிசை — JavaScript Part A இயங்குகிறது!"
    );

});
/* =========================================
   அறிவியல் காலவரிசை
   JavaScript — PART B
========================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================
       பிரதான டாஷ்போர்டு
    ===================================== */

    const mainDashboardButton =
        document.getElementById(
            "mainDashboardButton"
        );


    if (mainDashboardButton) {

        mainDashboardButton.addEventListener(
            "click",
            () => {

                window.location.href =
                    "main-dashboard.html";

            }
        );

    }


    /* =====================================
       மொபைல் டாஷ்போர்டு
    ===================================== */

    const mobileDashboardButton =
        document.getElementById(
            "mobileDashboardButton"
        );


    if (mobileDashboardButton) {

        mobileDashboardButton.addEventListener(
            "click",
            () => {

                window.location.href =
                    "main-dashboard.html";

            }
        );

    }


    /* =====================================
       கண்டுபிடிப்பு காலவரிசை Button
    ===================================== */

    const inventionTimelineButton =
        document.getElementById(
            "inventionTimelineButton"
        );


    if (inventionTimelineButton) {

        inventionTimelineButton.addEventListener(
            "click",
            () => {

                const inventionSection =
                    document.getElementById(
                        "inventions"
                    );


                if (inventionSection) {

                    inventionSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    }


    /* =====================================
       கண்டுபிடிப்பு அட்டைகள்
    ===================================== */

    const inventionCards =
        document.querySelectorAll(
            ".invention-card"
        );


    inventionCards.forEach((card) => {

        card.addEventListener(
            "click",
            () => {

                inventionCards.forEach(
                    (item) => {

                        item.classList.remove(
                            "selected"
                        );

                    }
                );


                card.classList.add(
                    "selected"
                );

            }
        );

    });


    /* =====================================
       JavaScript சோதனை
    ===================================== */

    console.log(
        "💡 அறிவியல் காலவரிசை — JavaScript Part B இயங்குகிறது!"
    );

});
/* =========================================
   அறிவியல் காலவரிசை
   JavaScript — PART C
========================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================
       அறிவியல் கண்டுபிடிப்புகள் Button
    ===================================== */

    const discoveriesButton =
        document.getElementById(
            "discoveriesButton"
        );


    if (discoveriesButton) {

        discoveriesButton.addEventListener(
            "click",
            () => {

                const discoveryGrid =
                    document.querySelector(
                        ".discovery-grid"
                    );


                if (discoveryGrid) {

                    discoveryGrid.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }

            }
        );

    }


    /* =====================================
       அறிவியல் கண்டுபிடிப்பு Cards
    ===================================== */

    const discoveryCards =
        document.querySelectorAll(
            ".discovery-card"
        );


    discoveryCards.forEach((card) => {

        card.addEventListener(
            "click",
            () => {

                discoveryCards.forEach(
                    (item) => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                card.classList.add(
                    "active"
                );

            }
        );

    });


    /* =====================================
       AI Explore Button
    ===================================== */

    const aiExploreButton =
        document.getElementById(
            "aiExploreButton"
        );


    if (aiExploreButton) {

        aiExploreButton.addEventListener(
            "click",
            () => {

                const finalSection =
                    document.querySelector(
                        ".final-cta"
                    );


                if (finalSection) {

                    finalSection.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }

            }
        );

    }


    /* =====================================
       Final Dashboard Button
    ===================================== */

    const finalDashboardButton =
        document.getElementById(
            "finalDashboardButton"
        );


    if (finalDashboardButton) {

        finalDashboardButton.addEventListener(
            "click",
            () => {

                window.location.href =
                    "main-dashboard.html";

            }
        );

    }


    /* =====================================
       Footer ஆண்டு
    ===================================== */

    const currentYear =
        document.getElementById(
            "currentYear"
        );


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================
       JavaScript சோதனை
    ===================================== */

    console.log(
        "🔬 அறிவியல் காலவரிசை — JavaScript Part C இயங்குகிறது!"
    );

});