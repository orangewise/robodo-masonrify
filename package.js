Package.describe({
  name: 'robodo:masonrify',
  summary: 'Easy Masonry Style Layouts in Meteor',
  version: '0.0.1',
  git: 'https://github.com/orangewise/robodo-masonrify'
});


Package.on_use(function (api) {
  api.versionsFrom('1.0');
  api.use(['deps','templating','underscore'], 'client');
  api.use(['robodo:meteor-debug@0.0.5']);
  api.add_files(['masonry/masonry.pkgd.js', 'imagesloaded/imagesloaded.pkgd.js'], 'client');
  api.add_files(['template.html'], 'client');
  api.add_files(['masonry-style.css'], 'client');
  api.add_files(['masonrify.js'], 'client');
  api.export('Masonrify', 'client');
});
