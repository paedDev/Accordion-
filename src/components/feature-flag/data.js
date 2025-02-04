

const dummyApiResponse = {
    showLightAndDarkMode: true,
    showTicTacToeBoard: true,
    showRandomColorGenerator: true,
    showAccordion: true,
    showCustomModalPopUp: false,
    showCustomTabs: true,
    showGithubProfileFinder: true,

}

function featureFlagsDataServiceCall() {
    return new Promise((resolve, reject) => {
        if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
        else reject(`Some error occured! Please try again`)
    })
}

export default featureFlagsDataServiceCall