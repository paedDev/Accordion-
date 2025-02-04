import React, { useContext } from 'react'
import Light2DarkMode from '../Light-dark-mode/Light2DarkMode'
import TTT from '../Tic-tact-toe/TTT'
import ColorPicker from '../ColorPicker/ColorPicker'
import AccordianP2 from '../Accordian/AccordianP2'
import GithubProfileFinder from '../Github Finder/GithubProfileFinder'
import { FeatureFlagsContext } from './context'
import ModalTest from '../PopUp/ModalTest'
import TabsTest2 from '../TabsComponent/Tabs-test'

export default function FeatureFlags() {
    const { loading, enabledFlags } = useContext(FeatureFlagsContext)

    const componentsToRender = [
        {
            key: "showLightAndDarkMode",
            component: <Light2DarkMode />
        },
        {
            key: "showTicTacToeBoard",
            component: <TTT />
        },
        {
            key: "showRandomColorGenerator",
            component: <ColorPicker />
        },
        {
            key: "showAccordion",
            component: <AccordianP2 />
        },
        {
            key: "showGithubProfileFinder",
            component: <GithubProfileFinder />
        },
        {
            key: "showCustomModalPopUp",
            component: <ModalTest />
        },
        {
            key: "showCustomTabs",
            component: < TabsTest2 />
        },
    ]
    if (loading) return <h1>Loading data! Please wait</h1>

    const checkEnabledFlags = (getCurrentKey) => {
        return enabledFlags[getCurrentKey]
    }
    return (
        <div>
            <h1 className='text-center text-4xl py-10'>Feature Flags</h1>
            {
                componentsToRender.map((componentItem) =>
                    checkEnabledFlags(componentItem.key) ? componentItem.component : null
                )
            }
        </div>
    )
}