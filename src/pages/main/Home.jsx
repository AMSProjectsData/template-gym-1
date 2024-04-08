import { Bugdet } from "./bugdet/Bugdet";
import { FAQ } from "./FAQ/FAQ";
import { Localization, Map } from "./localization/Localization";
import { Actions } from "./motivation/Actions";
import { Motivation } from "./motivation/Motivation";
import { Presentation } from "./presentation/Presentation";


export function Home() {
  return (
    <div style={{width: '100%', height:'100%'}}>
        <Presentation/>
        <Motivation/>
        <Actions/>
        <Bugdet/>
        <Localization/>
        <FAQ/>
    </div>
  )
}
