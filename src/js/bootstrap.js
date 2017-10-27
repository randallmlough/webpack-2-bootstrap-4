// Tether (required for Bootstrap 4.x) - Needs to be before any bootstrap js file
import 'tether';

// ADD popper.js - disable if you don't have any popovers or manually serve over a CDN
import 'popper.js'

// Include all of bootstrap's components
// import 'bootstrap';

// Import each bootstrap component individually
import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/button';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/popover'; // if enabled - tooltip and util are also required
import 'bootstrap/js/dist/scrollspy';
import 'bootstrap/js/dist/tab';

// note - Tooltip and Util are required if popover is enabled
import 'bootstrap/js/dist/tooltip';
import 'bootstrap/js/dist/util';

// popover global functionality script
$(function () {
  $('[data-toggle="popover"]').popover()
})
