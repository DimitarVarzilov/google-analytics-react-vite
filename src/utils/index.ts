import GA4 from "react-ga4";
import { GA4_TRACKING_ID } from "../constants";
const activateGA4 = () => {
    GA4.initialize(GA4_TRACKING_ID);
}
const deactivateGA4 = () => {
    GA4.reset();
}
const pageView = (path: string) => {
    GA4._gaCommandSendPageviewParameters(path);
}
export { activateGA4, deactivateGA4, pageView };