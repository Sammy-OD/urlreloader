import express from "express";
import url from 'url';

const router = express.Router();

router.get('/', (req, res) => {
  res.render("index")
});

router.post('/', (req, res) => {
  if (!(isValidURL(req.body.url)) && !(isValidRate(req.body.rate))) {
    res.render("index", {
      urlError: "please enter a valid URL",
      rateError: "please enter a valid refresh rate in seconds",
      reqUrl: req.body.url,
      reqRate: req.body.rate
    });
  } else if (!(isValidURL(req.body.url))) {
    res.render("index", {
      urlError: "please enter a valid URL",
      reqUrl: req.body.url,
      reqRate: req.body.rate
    });
  } else if (!(isValidRate(req.body.rate))) {
    res.render("index", {
      rateError: "please enter a valid refresh rate in seconds",
      reqUrl: req.body.url,
      reqRate: req.body.rate
    });
  } else {
    res.redirect(url.format({pathname: "/site", query: {"url": req.body.url, "rate": req.body.rate}}));
  }
});

router.get('/site', (req, res) => {
  const { url, rate } = req.query;
  res.render("site", { url, rate });
});

const isValidURL = (string) => {
  let res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return (res !== null)
};

const isValidRate = (num) => {
  let res = num.match(/^\d+$/);
  return (res !== null)
};


export default router;