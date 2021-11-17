var about = document.getElementById("about");
var skills = document.getElementById("skills");
var education = document.getElementById("education");
var jobs = document.getElementById("jobs");
var projects = document.getElementById("projects");
var contact = document.getElementById("contact");
var movetop = document.getElementById("move-top");
var lang1 = document.getElementById("lang1");
var lang2 = document.getElementById("lang2");
var lang3 = document.getElementById("lang3");
var lang4 = document.getElementById("lang4");
var html5 = document.getElementById("html5");
var ihtml5 = 1;
var icss3 = 1;
var ijs = 1;
var isass = 1;
var iphp = 1;
var isql = 1;
var ipython = 1;
var css3 = document.getElementById("css3");
var sass = document.getElementById("sass");
var php = document.getElementById("php");
var sql = document.getElementById("sql");
var python = document.getElementById("python");
var js = document.getElementById("js");
var aboutLink = document.getElementById("AboutLink");
var educationLink = document.getElementById("EducationLink");
var skillsLink = document.getElementById("SkillsLink");
var jobsLink = document.getElementById("JobsLink");
var projectsLink = document.getElementById("ProjectsLink");
var contactLink = document.getElementById("ContactLink");




function ScrollFnts() {
    var scrollTop = document.documentElement.scrollTop;
    var aboutTop = about.offsetTop;
    var aboutFinal = aboutTop - 60;
    var MoveTopFN = aboutTop - 200;
    var educationTop = education.offsetTop;
    var educationFinal = educationTop - 60;
    var skillsTop = skills.offsetTop;
    var skillsFinal = skillsTop - 60;
    var jobsTop = jobs.offsetTop;
    var jobsFinal = jobsTop - 60;
    var projectsTop = projects.offsetTop;
    var projectsFinal = projectsTop - 60;
    var contactTop = contact.offsetTop;
    var contactFinal = contactTop - 60;
    
    if (MoveTopFN < scrollTop) {
        movetop.classList.remove("move-top-none");
        movetop.classList.add("move-top");
    } 
    
    if (aboutFinal < scrollTop) {
        setTimeout(function () {
            aboutLink.classList.add("link-active");
        }, 200);

    } else {
        setTimeout(function () {
            aboutLink.classList.remove("link-active");
        }, 200);
    }
    
    if (educationFinal < scrollTop) {
        setTimeout(function () {
            aboutLink.classList.remove("link-active");
            educationLink.classList.add("link-active");
        }, 200);

    } else {
        setTimeout(function () {
            educationLink.classList.remove("link-active");
        }, 200);
    }
    
    if (skillsFinal < scrollTop) {
        setTimeout(function () {
            lang1.classList.remove("w1p");
            lang1.classList.add("w100p");
            lang2.classList.remove("w1p");
            lang2.classList.add("w90p");
            lang3.classList.remove("w1p");
            lang3.classList.add("w25p");
            lang4.classList.remove("w1p");
            lang4.classList.add("w15p");
            aboutLink.classList.remove("link-active");
            educationLink.classList.remove("link-active");
            skillsLink.classList.add("link-active");

        }, 200);

        function countHTMl5() {
            html5.innerHTML = ihtml5;
            if (ihtml5 <= 99) {
                ihtml5++;
                setTimeout(countHTMl5, 30);
            }
        }

        countHTMl5();

        function countCSS3() {
            css3.innerHTML = icss3;
            if (icss3 <= 99) {
                icss3++;
                setTimeout(countCSS3, 30);
            }
        }

        countCSS3();

        function countSASS() {
            sass.innerHTML = isass;
            if (isass <= 99) {
                isass++;
                setTimeout(countSASS, 30);
            }
        }

        countSASS();

        function countPHP() {
            php.innerHTML = iphp;
            if (iphp <= 49) {
                iphp++;
                setTimeout(countPHP, 30);
            }
        }

        countPHP();

        function countJS() {
            js.innerHTML = ijs;
            if (ijs <= 39) {
                ijs++;
                setTimeout(countJS, 30);
            }
        }

        countJS();

        function countSQL() {
            sql.innerHTML = isql;
            if (isql <= 34) {
                isql++;
                setTimeout(countSQL, 30);
            }
        }

        countSQL();

        function countPYTHON() {
            python.innerHTML = ipython;
            if (ipython <= 9) {
                ipython++;
                setTimeout(countPYTHON, 100);
            }
        }

        countPYTHON();

    } else {
        setTimeout(function () {
            lang1.classList.remove("w100p");
            lang1.classList.add("w1p");
            lang2.classList.remove("w90p");
            lang2.classList.add("w1p");
            lang3.classList.remove("w25p");
            lang3.classList.add("w1p");
            lang4.classList.remove("w15p");
            lang4.classList.add("w1p");
            skillsLink.classList.remove("link-active");
        }, 200);
    }
    
    if (jobsFinal < scrollTop) {
        setTimeout(function () {
            aboutLink.classList.remove("link-active");
            educationLink.classList.remove("link-active");
            skillsLink.classList.remove("link-active");
            jobsLink.classList.add("link-active");
        }, 200);

    } else {
        setTimeout(function () {
            jobsLink.classList.remove("link-active");
        }, 200);
    }
    
    if (projectsFinal < scrollTop) {
        setTimeout(function () {
            aboutLink.classList.remove("link-active");
            educationLink.classList.remove("link-active");
            skillsLink.classList.remove("link-active");
            jobsLink.classList.remove("link-active");
            projectsLink.classList.add("link-active");
        }, 200);

    } else {
        setTimeout(function () {
            projectsLink.classList.remove("link-active");
        }, 200);
    }
    
    if (contactFinal < scrollTop) {
        setTimeout(function () {
            aboutLink.classList.remove("link-active");
            educationLink.classList.remove("link-active");
            skillsLink.classList.remove("link-active");
            jobsLink.classList.remove("link-active");
            projectsLink.classList.remove("link-active");
            contactLink.classList.add("link-active");
        }, 200);

    } else {
        setTimeout(function () {
            contactLink.classList.remove("link-active");
        }, 200);
    }
    
}

window.addEventListener('scroll', ScrollFnts);
