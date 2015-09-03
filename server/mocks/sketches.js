module.exports = function(app) {
  var express = require('express');
  var sketchesRouter = express.Router();

  sketchesRouter.get('/', function(req, res) {
    res.send({
      'comicpages': [
      {
	   id: 1,
	   name: 'First Page',
	   pageLayout: 'plain'
	   }
	   ]
    });
  });

  sketchesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  sketchesRouter.get('/:id', function(req, res) {
    res.send({
      'comicpages': {
        id: req.params.id
      }
    });
  });

  sketchesRouter.put('/:id', function(req, res) {
    res.send({
      'comicpages': {
        id: req.params.id
      }
    });
  });

  sketchesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/sketches', sketchesRouter);
};
