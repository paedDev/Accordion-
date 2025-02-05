

const dummyAPIResponse = {
    showLightAndDarkMode: true,
    showAccordian: true,
    showCustomTabs: true,
    showGithubProfileFinder: true,
    showTicTacToe: true,
    showColorPicker: true,
}


const featureFlagsData = () => {
    return new Promise((resolve, reject) => {
        if (dummyAPIResponse) setTimeout(resolve(dummyAPIResponse), 500)
        else reject(`Some error occured! Please try again later`)
    })
}


export default featureFlagsData;