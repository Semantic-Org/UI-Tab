
Package.describe({
  name    : 'semantic:ui-tab',
  summary : 'Semantic UI - Tab: Single component release',
  version : '1.11.5',
  git     : 'git://github.com/Semantic-Org/UI-Tab.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'tab.css',
    'tab.js'
  ], 'client');
});
