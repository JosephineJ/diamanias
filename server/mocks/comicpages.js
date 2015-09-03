module.exports = function(app) {
  var express = require('express');
  var comicpagesRouter = express.Router();
  var sentData = [
      {
	   id: 1,
	   name: 'First Page',
	   pageLayout: 'plain',
	   imagelocs: [1,2,3]
	   },
      {
	   id: 2,
	   name: '2nd Page',
	   pageLayout: 'dynamik',
	   imagelocs: [4,5,7]
	   },
	   {
	   id: 3,
	   name: '3rd Page',
	   pageLayout: 'full',
	   imagelocs: [6]
	   }
	   ];

  comicpagesRouter.get('/', function(req, res) {
    res.send({
       'comicpages': sentData
    });
  });

  comicpagesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  comicpagesRouter.get('/:id', function(req, res) {
	var id = req.params.id -1;
    res.send({'comicpages': sentData[id]});
  });

  comicpagesRouter.put('/:id', function(req, res) {
	var id = req.params.id -1;
	res.send({'comicpages': sentData[id]});
  });

  comicpagesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/comicpages', comicpagesRouter);
};
