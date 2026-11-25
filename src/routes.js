"use strict";

const path = require("node:path");
const nunjucks = require("nunjucks");
const { listLerngruppen } = require("./lerngruppen");

nunjucks.configure(path.join(__dirname, "views"), { autoescape: true });

function buildRouter(portal) {
  const router = portal.router();

  router.get("/", portal.requires("student"), async (req, res) => {
    const body = nunjucks.render("page.njk", { lerngruppen: listLerngruppen() });
    res.type("html").send(
      await portal.layout({ title: "Lerngruppen", body, current: portal.url("/"), user: req.portal.user }),
    );
  });

  return router;
}

module.exports = { buildRouter };
