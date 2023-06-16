import { ReportCallback } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportCallback) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB, }) => {
      onCLS(onPerfEntry); //unexpected layout shift. A layout shift occurs any time a visible element changes its position from one rendered frame to the next. 
      onFID(onPerfEntry); //First Input Delay (FID) measures the time from when a user first interacts with a page (that is, when they click a link, tap on a button, or use a custom, JavaScript-powered control) to the time when the browser is actually able to begin processing
      onFCP(onPerfEntry); //First Contentful Paint (FCP) metric measures the time from when the page starts loading to when any part of the page's content is rendered on the screen
      onLCP(onPerfEntry); //Largest Contentful Paint (LCP) metric reports the render time of the largest image or text block visible within the viewport, relative to when the page first started loading.
      onTTFB(onPerfEntry); //TTFB is a metric that measures the time between the request for a resource and when the first byte of a response begins to arrive.
    });
  }
};

export default reportWebVitals;
