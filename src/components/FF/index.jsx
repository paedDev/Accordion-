import React, { useContext } from 'react'
import Light2DarkMode from '../Light-dark-mode/Light2DarkMode'
import { FeatureFlagsContext } from './context'
import AccordianP2 from '../Accordian/AccordianP2'
import TabsTest2 from '../TabsComponent/Tabs-test'
import GithubProfileFinder from '../Github Finder/GithubProfileFinder'
import TTT from '../Tic-tact-toe/TTT'
import ColorPicker from '../ColorPicker/ColorPicker'

const FeatureFlags = () => {
    const { isLoading, enabledFlags } = useContext(FeatureFlagsContext)

    const componentsToRender = [
        {
            key: "showLightAndDarkMode",
            component: <Light2DarkMode />
        },
        {
            key: "showTicTacToe",
            component: <TTT />
        },
        {
            key: "showColorPicker",
            component: <ColorPicker />
        },
        {
            key: "showAccordian",
            component: <AccordianP2 />
        },
        {
            key: "showGithubProfileFinder",
            component: <GithubProfileFinder />
        },

        {
            key: "showCustomTabs",
            component: <TabsTest2 />
        },



    ]
    if (isLoading) return <h1>Loading data! Please wait</h1>

    const checkEnabledFlags = (getCurrentKey) => {
        return enabledFlags[getCurrentKey]
    }
    return (
        <div>
            <h1 className='text-center text-4xl py-10'>Feature Flags</h1>
            {
                componentsToRender.map((componentItem) => (
                    checkEnabledFlags(componentItem.key) ? componentItem.component : null
                ))
            }
        </div>
    )
}

export default FeatureFlags