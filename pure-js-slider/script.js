(function () {
    var width = window.innerWidth;

    const imageCount = 5;
    let currentIndex = 0;

    const slider = document.querySelector('.slider');
    let slideContainer;

    var images = [];
    generateImageUrls = () => {
        for (let i = 0; i < 5; i++) {
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            images.push(`https://via.placeholder.com/${width}x400/${randomColor}/808080?text=${i + 1}`);
        }
    }

    generateSlides = () => {
        let ele;
        images.forEach((url) => {
            ele = document.createElement('img');
            ele.classList.add('slide')
            ele.setAttribute('src', url);
            slideContainer.appendChild(ele);
        });
    }

    generateArrows = () => {
        let arrowLeft = document.createElement('div');
        arrowLeft.classList.add('arrow-left-white');
        arrowLeft.classList.add('arrows');
        arrowLeft.addEventListener('click', () => arrowClicked(-1));
        slider.appendChild(arrowLeft);

        let arrowRight = document.createElement('div');
        arrowRight.classList.add('arrow-right-white');
        arrowRight.classList.add('arrows');
        arrowRight.addEventListener('click', () => arrowClicked(1));
        slider.appendChild(arrowRight);
    }

    arrowClicked = (dir) => {
        currentIndex += dir;
        if (currentIndex < 0) {
            currentIndex = imageCount - 1;
            slideContainer.style.left = -(width * currentIndex) + 'px';
        }
        else if (currentIndex == imageCount) {
            slideContainer.style.left = 0;
            currentIndex = 0;
        }
        else
            slideContainer.style.left = -(width * currentIndex) + 'px';
    }

    // leftArrowClicked = () => {
    //     currentIndex--;
    //     if (currentIndex < 0) {
    //         currentIndex = imageCount - 1;
    //         slideContainer.style.left = -(width * currentIndex) + 'px';
    //     }
    //     else
    //         slideContainer.style.left = -(width * currentIndex) + 'px';
    // }
    // rightArrowClicked = () => {
    //     currentIndex++;

    //     if (currentIndex == imageCount) {
    //         slideContainer.style.left = 0;
    //         currentIndex = 0;
    //     }
    //     else
    //         slideContainer.style.left = -(width * currentIndex) + 'px';
    // }

    init = () => {
        if (!slider) {
            alert('Slider container missing');
            return;
        }

        slideContainer = document.createElement('div');
        slideContainer.classList.add('slide-container');
        slider.appendChild(slideContainer);

        generateImageUrls();
        generateSlides();
        generateArrows();
    }

    init();
})();