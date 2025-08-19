import Cont_Provider from './compo-0818/Cont_Provider'
import Context01 from './compo-0818/Context01'
import Ex_js from './compo-0818/Ex_js'
import ReduxTool from './compo-0818/ReduxTool'
import Zustand01 from './compo-0818/Zustand01'
import { Provider } from 'react-redux'
import { store_redux } from './js/store_redux'

export default function Work0818() {

    return (
        <>
            <Cont_Provider>
                <Context01 />
            </Cont_Provider>

            <Ex_js />
            <Zustand01 />
            <Provider store={store_redux}>
                <ReduxTool />
            </Provider>
        </>
    )
}