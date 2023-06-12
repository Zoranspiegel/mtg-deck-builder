const { Router } = require('express');
const fs = require('fs/promises');

const router = Router();

fs.readdir(__dirname).then(data => {
  data.forEach((file) => {
    if (file !== 'index.js') {
      const routeName = file.split('.')[0];
      router.use(`/${routeName}`, require(`./${file}`));
    }
  });
});

module.exports = router;
