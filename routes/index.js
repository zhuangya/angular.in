"use strict";

exports.index = function(req, res) {

  res.render('index', {
    title: 'Express'
  });

};

exports.api = function(req, res) {

};
