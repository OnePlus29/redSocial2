let getButtonLike = document.querySelectorAll('.likes');
let getContainerReaction = document.querySelectorAll('.reactions');

if (getContainerReaction) {
    for (let i = 0; i < getContainerReaction.length; i++) {
        getContainerReaction[i].style.display = "none";

        for (let b = 0; b < getButtonLike.length; b++) {
            console.log()
            getButtonLike[b].addEventListener('mouseover', function () {
                getButtonLike[b].children[1].style.display = "flex";
            });

            getButtonLike[b].addEventListener('mouseout', function () {
                getButtonLike[b].children[1].style.display = "none";
            });
        }

    }


}
