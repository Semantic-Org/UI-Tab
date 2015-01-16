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

- **Table** - Added aweosome new responsive style to ui tables
- **List** - Adds onTabInit for local tabs on first load
- Adds sortable tables to docs
- New tabbed doc style for modules
- **List** - Celled tables now have celled table headers
- **Menu** - Fixes border radius on tabular menu, fixes one pixel jump on active state
- **Table** - Table headers are now darker to increase contrast with rainbow striped rows

### Version 0.1.0 - Sep 25, 2013

- Added fixes to tabular menu especially with attached content