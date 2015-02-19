var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-tab',
  summary : 'Semantic UI - Tab (official): Single component release of tab',
  version : '1.9.2',
  git     : 'git://github.com/Semantic-Org/UI-Tab.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
