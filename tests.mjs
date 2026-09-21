import assert from 'node:assert/strict'; import fs from 'node:fs';
const s=JSON.parse(fs.readFileSync('public/submission.json','utf8'));
assert.equal(s.decisions.length,100); assert.equal(new Set(s.decisions.map(d=>d.id)).size,100); assert.ok(s.decisions.every(d=>d.answer&&d.evidence.length&&d.confidence));
const x=s.statements; assert.equal(x.balanceSheet.totalAssets,x.balanceSheet.totalLiabilitiesAndEquity); assert.equal(x.cashFlow.closingCash,x.balanceSheet.cash); assert.equal(x.profitAndLoss.profit,s.schedules.equity.profit); assert.ok(s.reconciliations.every(r=>r.difference===0));
console.log('Validated 100 decisions and all financial statement reconciliations.');

