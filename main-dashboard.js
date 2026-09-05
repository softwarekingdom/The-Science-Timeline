/* =====================================================
   SCIENCE TIMELINE — MAIN DASHBOARD
   JavaScript PART 1
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ================================================
       MOBILE MENU
    ================================================ */

    const menuToggle =
        document.getElementById("menuToggle");

    const dashboardNav =
        document.getElementById("dashboardNav");


    if (menuToggle && dashboardNav) {

        menuToggle.addEventListener("click", () => {

            dashboardNav.classList.toggle("active");

            const isOpen =
                dashboardNav.classList.contains("active");

            menuToggle.textContent =
                isOpen ? "✕" : "☰";

        });


        /* மெனுவில் link அழுத்தினால் menu close */

        dashboardNav
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    dashboardNav.classList.remove("active");

                    menuToggle.textContent = "☰";

                });

            });

    }


    /* ================================================
       SMOOTH SCROLL
    ================================================ */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener("click", event => {

                const targetId =
                    link.getAttribute("href");

                if (!targetId || targetId === "#") {
                    return;
                }

                const target =
                    document.querySelector(targetId);

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });

        });


    /* ================================================
       STAT CARD INTERACTION
    ================================================ */

    const statCards =
        document.querySelectorAll(".stat-card");

    statCards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.classList.add("stat-active");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("stat-active");
        });

    });


    /* ================================================
       PERSON CARD
    ================================================ */

    const personCards =
        document.querySelectorAll(".person-card");

    personCards.forEach(card => {

        card.addEventListener("click", event => {

            /*
             Quick Action link-ஐ click செய்தால்
             card click தனியாக செயல்பட வேண்டாம்.
            */

            if (
                event.target.closest(".quick-action")
            ) {
                return;
            }

            personCards.forEach(item => {
                item.classList.remove("selected");
            });

            card.classList.add("selected");

        });

    });


    /* ================================================
       CURRENT YEAR
       Part 3-ல் #currentYear சேர்க்கப்படும்.
    ================================================ */

    const currentYear =
        document.getElementById("currentYear");

    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* ================================================
       DASHBOARD TEST
    ================================================ */

    console.log(
        "🔬 அறிவியல் காலவரிசை — Main Dashboard JavaScript Part 1 இயங்குகிறது!"
    );

});
/* =====================================================
   INVENTIONS + CREATOR
   JavaScript PART 2
   ===================================================== */


/* ================================================
   INVENTION CARD INTERACTION
================================================ */

const inventionCards =
    document.querySelectorAll(".invention-card");

inventionCards.forEach(card => {

    card.addEventListener("click", event => {

        /*
         Quick Action link அழுத்தும்போது
         card selection மட்டும் செயல்படாது.
        */

        if (
            event.target.closest(".quick-action")
        ) {
            return;
        }

        inventionCards.forEach(item => {
            item.classList.remove("selected");
        });

        card.classList.add("selected");

    });

});


/* ================================================
   CREATOR BUTTON
================================================ */

const creatorButton =
    document.querySelector(".creator-button");

if (creatorButton) {

    creatorButton.addEventListener("click", () => {

        console.log(
            "👨‍💻 Creator Page திறக்கப்படுகிறது..."
        );

    });

}


/* ================================================
   BACK HOME BUTTON
================================================ */

const backHomeButton =
    document.querySelector(".back-home-button");

if (backHomeButton) {

    backHomeButton.addEventListener("click", () => {

        console.log(
            "🏠 Science Timeline முகப்புக்குச் செல்கிறது..."
        );

    });

}


/* ================================================
   DASHBOARD PART 2 TEST
================================================ */

console.log(
    "💡 Main Dashboard — Inventions & Creator JavaScript Part 2 இயங்குகிறது!"
);
/* =====================================================
   FOOTER
===================================================== */


/* ================================================
   CURRENT YEAR
================================================ */

const currentYear =
    document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* ================================================
   FOOTER LINK FEEDBACK
================================================ */

const footerLinks =
    document.querySelectorAll(".footer-links a");

footerLinks.forEach(link => {

    link.addEventListener("click", () => {

        console.log(
            "🔗 Footer link:",
            link.textContent.trim()
        );

    });

});


/* ================================================
   FOOTER TEST
================================================ */

console.log(
    "🔬 Science Timeline — Footer JavaScript இயங்குகிறது!"
);