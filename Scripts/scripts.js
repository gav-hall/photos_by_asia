
/* Hide and unhide the navigation bar when scrolling. */
if (window.screen.availWidth < 600) {
    let prevScrollpos = window.scrollY;
        window.onscroll = () => {
            let currentScrollPos = window.scrollY;
                if (prevScrollpos > currentScrollPos) {
                    document.getElementById("mobile_nav").style.top = "0";
                } else if (currentScrollPos <= 0) {
                    document.getElementById("mobile_nav").style.top = "0px";
                } else {
                    document.getElementById("mobile_nav").style.top = "-80px";
                }
            prevScrollpos = currentScrollPos
        }
}

/* Display the dropdown menu when clicking on the burger button */   
    
function revealNav() {
    let x = document.getElementById("links");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
}

/* Collaspe the menu when clicking on the contact link */

function hideNav() {
    document.getElementById("links").style.display = "none";
}

/* For the homepage, change the colour of the navigation bar when the user passes 200*/
if (window.screen.width > 600) {
    window.onscroll = () => {
        let navBar = document.getElementById("nav_bar");
        let navLinks = document.getElementsByClassName("web_links");
        let logo = document.getElementById("logo");
        if (window.scrollY >= 200) {
            navBar.style.backgroundColor = "#FFF5E6";
                for (let i = 0; i < navLinks.length; i++) {
                    navLinks[i].style.color = "#414141";
                }
            logo.style.display = "none";
        } else if (window.scrollY < 100) {
            document.getElementById("nav_bar").style.background = "transparent";
                for (let i = 0; i < navLinks.length; i++) {
                    navLinks[i].style.color = "#FFF5E6";
                }
            logo.style.display = "block";
        }
    }
}

/* Determine OS to open the correct Facebook app if installed. 
    Work in progress */

function getOS() {
    let userAgent = navigator.userAgent;
    console.log(userAgent)
        if (userAgent.includes('iPhone'|'iPad')) {
            return "iOS";
        } else if(userAgent.includes('Android')) {
            return "Android";
        } else {
            return 'web';
        }

}