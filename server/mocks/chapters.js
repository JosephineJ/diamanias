/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  let chaptersRouter = express.Router();

  chaptersRouter.get('/', function(req, res) {
    res.send({
      "data": [
        { "id": 1, "name": "Chapter One" }, { "id": 2, "name": "Chapter Two" }
      ],
    });
  });

  chaptersRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  chaptersRouter.get('/:id', function(req, res) {
    res.send({
      'chapters': {
        id: req.params.id
      }
    });
  });

  chaptersRouter.put('/:id', function(req, res) {
    res.send({
      'chapters': {
        id: req.params.id
      }
    });
  });

  chaptersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/chapters', require('body-parser').json());
  app.use('/api/chapters', chaptersRouter);
};
