module.exports = function(page, platform) {

  switch (platform) {

    case 'desktop':
      page.viewportSize = {
        width: 1280,
        height: 720
      };
      break;

    case 'tablet':
      page.viewportSize = {
        width: 1280,
        height: 720
      };
      break;

    default:
      page.viewportSize = {
        width: 1280,
        height: 720
      };
  }
};
