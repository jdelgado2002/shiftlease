import { test } from "node:test"
import assert from "node:assert/strict"
import { isProductionHost, ctaPlacement, pageDepthPct } from "./analytics.ts"

test("isProductionHost accepts the live marketing domains", () => {
  assert.equal(isProductionHost("easyshifthq.com"), true)
  assert.equal(isProductionHost("www.easyshifthq.com"), true)
  assert.equal(isProductionHost("EasyShiftHQ.com"), true)
})

test("isProductionHost rejects previews, localhost, mirrors and the app", () => {
  for (const host of [
    "localhost",
    "localhost:3000",
    "127.0.0.1",
    "easyshifthq.netlify.app",
    "easyshifthq-git-foo-jdelgado2002s-projects.vercel.app",
    "app.easyshifthq.com",
    "easyshifthq.com.evil.test",
  ]) {
    assert.equal(isProductionHost(host), false, host)
  }
})

const fakeEl = (ancestors) => ({ closest: (sel) => (ancestors.includes(sel) ? {} : null) })

test("ctaPlacement reports the nearest landmark", () => {
  assert.equal(ctaPlacement(fakeEl(["header"])), "header")
  assert.equal(ctaPlacement(fakeEl(["footer"])), "footer")
  assert.equal(ctaPlacement(fakeEl([])), "body")
})

test("pageDepthPct is a clamped percentage of page height", () => {
  assert.equal(pageDepthPct(0, 0, 4000), 0)
  assert.equal(pageDepthPct(1000, 1000, 4000), 50)
  assert.equal(pageDepthPct(5000, 0, 4000), 100)
  assert.equal(pageDepthPct(-50, 0, 4000), 0)
  assert.equal(pageDepthPct(100, 0, 0), 0)
})
