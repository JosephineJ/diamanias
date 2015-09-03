module.exports = function(app) {
  var express = require('express');
  var imagelocsRouter = express.Router();
  var sentData = [
      {
	   id: 1,
	   imageUrl: 'http://emberjs.com/images/tomsters/seattle.png',
	   comicpage: 1
	   },
      {
	   id: 2,
	   imageUrl: 'http://emberjs.com/images/tomsters/louisville.png',
	   comicpage: 1
	   },
	   {
	   id: 3,
	   imageUrl: 'http://emberjs.com/images/tomsters/builtwith.png',
	   comicpage: 1
	   },
	   {
	   id: 4,
	   imageUrl: 'http://emberjs.com/images/tomsters/sherpa.png',
	   comicpage: 2
	   },
	   {
	   id: 5,
	   imageUrl: 'http://emberjs.com/images/tomsters/louisville.png',
	   comicpage: 2
	   },
	   {
	   id: 6,
	   imageUrl: 'http://emberjs.com/images/tomsters/builtwith.png',
	   comicpage: 3
	   },
	   {
	   id: 7,
	   imageUrl: 'http://emberjs.com/images/tomsters/sherpa.png',
	   comicpage: 2
	   }
	   
	   
	   ];

  imagelocsRouter.get('/', function(req, res) {
    res.send({
      'imagelocs': sentData
    });
  });

  imagelocsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  imagelocsRouter.get('/:id', function(req, res) {
	 var id = req.params.id -1;
    res.send({	  
      'imagelocs': sentData[id]
    });
  });

  imagelocsRouter.put('/:id', function(req, res) {
	var id = req.params.id -1;
    res.send({	  
      'imagelocs': sentData[id]
    });
  });

  imagelocsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/imagelocs', imagelocsRouter);
};
