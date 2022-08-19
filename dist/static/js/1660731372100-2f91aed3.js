import { o as e, b as r, e as t, f as o, g as n, j as s } from "./1660731372100-0b9ec5f3.js";
import { c as i, a as c } from "./1660731372100-505e23ee.js";
!(function () {
    const e = document.createElement("link").relList;

    if (!(e && e.supports && e.supports("modulepreload"))) {
        for (const e of document.querySelectorAll('link[rel="modulepreload"]')) {
            r(e);
        }
        new MutationObserver((e) => {
            for (const t of e) {
                if (t.type === "childList") {
                    for (const e of t.addedNodes) {
                        e.tagName === "LINK" && e.rel === "modulepreload" && r(e);
                    }
                }
            }
        }).observe(document, { childList: !0, subtree: !0 });
    }
    function r(e) {
        if (e.ep) {
            return;
        }
        e.ep = !0;
        const r = (function (e) {
            const r = {};

            return (
                e.integrity && (r.integrity = e.integrity),
                e.referrerpolicy && (r.referrerPolicy = e.referrerpolicy),
                e.crossorigin === "use-credentials"
                    ? (r.credentials = "include")
                    : e.crossorigin === "anonymous"
                    ? (r.credentials = "omit")
                    : (r.credentials = "same-origin"),
                r
            );
        })(e);

        fetch(e.href, r);
    }
})();
const a = (e, r) => {
        const t = e.__vccOpts || e;

        for (const [o, n] of r) {
            t[o] = n;
        }
        return t;
    },
    l = { class: "main" },
    d = o(" 2 "),
    u = a(
        {
            __name: "App",
            setup: (o) => (
                console.log({
                    BASE_URL: "./",
                    MODE: "production",
                    DEV: !1,
                    PROD: !0
                }),
                (o, s) => {
                    const i = n("router-view");

                    return e(), r("div", l, [d, t(i)]);
                }
            )
        },
        [["__scopeId", "data-v-8bb5d447"]]
    ),
    p = {},
    f = function (e, r, t) {
        return r && r.length !== 0
            ? Promise.all(
                  r.map((e) => {
                      if (
                          ((e = (function (e, r) {
                              return new URL(e, r).href;
                          })(e, t)),
                          e in p)
                      ) {
                          return;
                      }
                      p[e] = !0;
                      const r = e.endsWith(".css"),
                          o = r ? '[rel="stylesheet"]' : "";

                      if (document.querySelector(`link[href="${e}"]${o}`)) {
                          return;
                      }
                      const n = document.createElement("link");

                      return (
                          (n.rel = r ? "stylesheet" : "modulepreload"),
                          r || ((n.as = "script"), (n.crossOrigin = "")),
                          (n.href = e),
                          document.head.appendChild(n),
                          r
                              ? new Promise((r, t) => {
                                    n.addEventListener("load", r),
                                        n.addEventListener("error", () =>
                                            t(new Error(`Unable to preload CSS for ${e}`))
                                        );
                                })
                              : void 0
                      );
                  })
              ).then(() => e())
            : e();
    },
    m = i({
        history: c(),
        routes: [
            { path: "/", redirect: "/index" },
            {
                path: "/index",
                name: "index",
                component: () =>
                    f(
                        () => import("./1660731372100-453c7a49.js"),
                        [
                            "1660731372100-453c7a49.js",
                            "../css/1660731372100-62b488d4.css",
                            "1660731372100-0b9ec5f3.js"
                        ],
                        import.meta.url
                    )
            }
        ]
    });

s(u).use(m).mount("#app");
