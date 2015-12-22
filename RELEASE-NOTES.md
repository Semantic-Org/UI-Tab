### Version 2.1.7 - Dec 19, 2015

- **Menu** - Fixed `1px` offset when `attached segment` follows `tabular menu` (max of 2 consecutive segments) [#3479](https://github.com/Semantic-Org/Semantic-UI/issues/3479)

### Version 2.1.5 - Nov 1, 2015

- **Table** - Added `selectable` on table cell, allowing for full table-cell links
- **Dropdown** - Fixed issue where tabindex was being removed incorrectly with `selection dropdown` in some cases. [#3002](https://github.com/Semantic-Org/Semantic-UI/issues/3002)

### Version 2.1.4 - Sep 13, 2015

- **Table** - Fixed issue where `(x) column segment table` was inheriting accidentally inheriting some grid styles

#### Features

- **Menu** - Added new `tabular` menu types, `right tabular`, `bottom tabular`, added many new `tabular` menu variables for customizing
- **Table** - New `fixed` table variation added for use with `table-layout: fixed;`. This also supports "..." ellipsis when used with `single line` content

#### Bugs

- **Build Tools** - Fixes issue where component glob `{tab, table}` caused table to be included twice in concatenated source **
- **Table/Label** - `ribbon labels` will now automatically position themselves when used inside a table [#1930](https://github.com/Semantic-Org/Semantic-UI/issues/1930)
- **Menu** - Fixes tabular menu missing variable for background. **Thanks @frontdevde**
- **Tab** - Fixed issue where simple path would be tested before full path, i.e. `first/` vs `/second/first/` causing tab to not open in some cases **Thanks @habibutsu** [#2843](https://github.com/Semantic-Org/Semantic-UI/issues/2843)
- **Dropdown** - Fixed issue where `forceSelection` would not occur when `pageLostFocus` (clicked into another tab and back)
- **Dropdown/Tab** - Fixed an instance where `metadata` was not referencing settings metadata value

### Version 2.0.7 - July 23, 2015

- **Popup** - Fixed issue where popup would not open on tablets with both touchscreen and mouse on mouseenter. [#2715](https://github.com/Semantic-Org/Semantic-UI/issues/2715)

### Version 2.0.4 - July 17, 2015

- **Checkbox** - Checkbox now focuses after click, allowing for tab navigation from current position [#2610](https://github.com/Semantic-Org/Semantic-UI/issues/2610)
- **Menu/Segment/Table** - Consolidated `attached` logic for all components using attached. [#2599](https://github.com/Semantic-Org/Semantic-UI/issues/2599)

### Version 2.0.1 - July 6, 2015

- **Tab** - Tab now correctly obeys `cache` setting. Removed use of API's local caching by default. [#2493](https://github.com/Semantic-Org/Semantic-UI/issues/2493)
- **Tab** - Fixed bug where remote loaded tab content would not show `loading tab` on first load.
- **Tab** - Added new examples for `evaluateScripts` and HTML5 state tabs

### Version 2.0.0 - June 30, 2015

- **Modal** - If you are using a modal with image content, you will need to use `image content` on the parent element. This is because `flex` rules require parent styling that the previous `table-row` rules did not.
- **Tab** - `onTabInit` and `onTabLoad` have been renamed to `onFirstLoad` and `onLoad` respectively. This is to conform to the naming conventions of other modules (no self reference). Previous callbacks will continue to work but will produce deprecation notices in console. Two new callbacks `onVisible` and `onRequest` have been added as well.
- **Menu** - `vertical tabular menu`, a vertical tab menu, has been added
- **Button** - Added `:focus` styles for all button types, all button examples in docs now are keyboard focusable using either `<button>` or `tabindex` where appropriate.
- **Grid** - `celled grid` now removes internal cells on mobile and tablet when used with `doubling` grid responsive variation.
- **Grid** - `celled` and `internally celled` grid now use flexbox instead of `display: table;`
- **Tabs** - Tab will now manually correct page scroll position when linking to an in-page anchor in a hidden tab
- **Tabs** - Added new callbacks `onTabVisible` and `onRequest`
- **Tabs** - Added `parseScripts` option, defaults to `once` parsing inline scripts only first load
- **Table** - Adds `selectable table` variation, which shows hover effect on row when hovering
- **Table** - Added `vertical alignment` variations to `ui table`
- **Table** - Added `single line` table variation which prevents text from wrapping
- **Dropdown** - `focus` after changing tabs will no longer cause menu to re-open **Thanks @trevorharwell**
- **Dropdown** - Fix issue with search dropdown refocusing on self the first time after "tabbing" away in Chrome
- **List** - Bullets and numbers are no longer selectable in `bulleted list` and `ordered list`
- **Menu** - `dropdown menu` in a `secondary pointing menu` or `tabular menu` now receive distinct active styling from other `active item`
- **Tab** - multiple tab groups initialized together with `context: 'parent'` will now each use their own parent
- **Tab** - Tabs now use the standard component design pattern internally
- **Table** - Fixes `sorted` column are not correctly centered with `center aligned` due to margin on sort icon
- **Table** - Fixes `ascending` and `descending` icons were reversed in table
- **Table** - `very basic table` now works together with `padded table`
- **Table** - Fix inheritance of text alignment and vertical alignment
- **Header/Table/Divider** - These components now pull border color defaults from `site.variables` instead of using their own values
- **Table** - Table header colors and padding defaults have been slightly adjusted
- **Table** - Horizontal cell padding has been slightly reduced, and cell borders are slightly lighter.

### Version 1.11.5 - March 23, 2015

- **Dropdown** - Fix bug where element will not blur on tab key when search selection and no selection made

### Version 1.11.0 - March 3, 2015

- **Icon** - added `@src` variable to make it adjustable with themes that dont support all types like `woff2`
- **Table** - Fixes table on `mobile` sizes can surpass parent container width

### Version 1.9.3 - February 20, 2015

- **Tab** - Fixed bug when loading `remote` content with `tab` where current tab would not hide while another tab is loading
- **Tab** - Tab with remote content and `auto: true` now removes duplicate slashes from url path
- **Tab** - Added new tab remote content example with stubbed AJAX using SinonJS

### UI Changes

- **Input** - Input with dropdowns is now much easier, see docs. `action input` and `labeled input` now use `display: flex`. `ui action input` now supports `<button>` tag usage (!) which support `flex` but not `table-cell`

### Version 1.8.0 - January 23, 2015

- **Dropdown** - Keyboard navigation will now allow opening of sub menus with right/left arrow. Enter will open sub-menus on an unselectable category (`allowCategorySelection: false`) as well.
- **Search** - Search results no longer hide/show when user changes tab or page loses focus

### Version 1.7.0 - January 14, 2015

- **Segment** - ``ui tabular menu`` now correctly aligns with attached segment when using fluid variation *Thanks @MohammadYounes*
- **Steps** - Steps now use ``table-cell`` to allow steps to be equal height by default, even with different content height.

### Version 1.6.0 - January 05, 2015

- **Tab/Segment** - Fixes first tab being 1pixel taller than all other tabs

### Version 1.5.0 - December 30, 2014

- **Table** - Table now has coupling with image to make sure size is preserved correctly with table sizing when used inside a table cell.
- **Form** - Fixed (x) wide field not having correct bottom field margin when in ``fields`` group on tablet or mobile
- **Tab** - Calls to global ``$.tab()`` would not pass arguments correctly

### Version 1.4.0 - December 22, 2014

- Improved documentation for API and Tab to be slightly more comprehensive

### Version 1.3.0 - December 17, 2014

- **Steps** - Steps are now responsive for mobile by default, and have optional responsive styles for tablet
- **Table** - Table has now variations to remove responsive stylings, specify responsiveness for tablet
- **Table** - Table now has a ``structured table`` type, which removes some formatting considerations to support complex table layouts with ``colspan`` and ``rowspan``
- **Table** - Fix responsive styles when applied to ``definition table``.
- **Button** - Add tabindex /keyboard nav documentation

### Version 1.2.0 - December 08, 2014

- **Dropdown** - Fixes bug with dropdown converted from ``select`` that use ``<option`` values with capital letters not being selectable

### Version 1.0.1 - November 28, 2014

- **Table** - Fixes table cell transition animating all properties

### Version 1.0.0 - November 24, 2014

- **Table** - Tables are no longer striped by default, instead you must specify the 'striped' variation
- **Table** - Tables now have 'basic' and 'very' basic variations

### Version 0.19.2 - Sep 11, 2014

- **Grid** - (Backport from 1.0 branch) Fixes issue where some combinations of (tablet/mobile/computer) only does not function correctly

### Version 0.16.0 - April 22, 2014

- **Reveal** - Fixes reveal being broken in Chrome in ``0.15.5`` due to poor fix for reveal selectability

### Version 0.15.0 - Mar 14, 2014

- **Table** - Fixes rounding on tables with multiple tfoot elements **Thanks webdesserts**

### Version 0.12.2 - Jan 21, 2014

- **Grid** - Fixes grid ``only tablet/mobile/computer`` showing both devices on exact pixel of breakpoint, i.e. 768px

### Version 0.9.0 - Nov 5, 2013

- **Grid** - Fixes comp/tablet/mobile only columns not working if not inside a row

### Version 0.7.0 - Oct 22, 2013

- **Table** - Added awesome new responsive style to ui tables
- **List** - Adds onTabInit for local tabs on first load
- Adds sortable tables to docs
- New tabbed doc style for modules
- **List** - Celled tables now have celled table headers
- **Menu** - Fixes border radius on tabular menu, fixes one pixel jump on active state
- **Table** - Table headers are now darker to increase contrast with rainbow striped rows

### Version 0.1.0 - Sep 25, 2013

- Added fixes to tabular menu especially with attached content