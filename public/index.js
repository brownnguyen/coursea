window.onscroll = function () { scrollFunction() };

            function scrollFunction() {
                if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                    document.querySelector(".header").classList.add("sticky");
                    document.querySelector(".navbar-brand").style.fontSize = "26px";
                    document.querySelector(".navbar-brand").style.transition = "all .2s";
                    document.querySelector(".navbar-brand").style.color = "#ef2368";

                } else {
                    document.querySelector(".header").classList.remove("sticky");
                    document.querySelector(".navbar-brand").style.fontSize = "29px";
                    document.querySelector(".navbar-brand").style.color = "white";
                }
            }