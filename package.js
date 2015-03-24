Package.describe({
  name: 'robodo:masonrify',
  summary: 'Easy Masonry Style Layouts in Meteor',
  version: '0.0.1'
});


Package.on_use(function (api) {
  api.use(['deps','templating','underscore'], 'client');
  api.use(['robodo:meteor-debug']);
  api.add_files(['masonry/masonry.pkgd.js', 'imagesloaded/imagesloaded.pkgd.js'], 'client');
  api.add_files(['template.html'], 'client');
  api.add_files(['masonry-style.css'], 'client');
  api.add_files(['masonrify.js'], 'client');
  api.export('Masonrify', 'client');
});
