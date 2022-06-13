import React from 'react'
import { NavigationDots, SocialMedia} from '../components';

const AppWrap = (Compnent, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
            <Compnent />

            <div className="copyright">
                <p className="p-text">@2022 Tony</p>
                <p className="p-text">All right reserved</p>
            </div>
        </div>
        <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap