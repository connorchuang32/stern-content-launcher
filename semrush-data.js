// Search Intelligence snapshot — written by the Search Intelligence ingest command in Claude Code.
// Shape mirrors analytics-data.js and vault-data.js: { data, notes, history }.
// Loaded via <script src> (not fetch) so it works over file://, same as the other two snapshots.
//
// Keyword-centric: metrics live on each keyword row. Competitors appear as a per-keyword
// "also ranking" attribute rather than a section of their own.
//
// history.runs[].positions is a keyword -> position map. The renderer diffs the current run
// against the previous one to produce the movement column, because Semrush's own
// "Previous position" field is unreliable (see notes).
window.SEMRUSH_DATA = {
  "generated_at": "2026-07-27",
  "period": "Semrush snapshot, US database, 26 Jul 2026",
  "domain": "sternsecurity.com",
  "sources": ["Organic positions (CSV)", "Keyword gap / Untapped (CSV)"],
  "data": {
    "kpis": { "authority": null, "keywords": 206, "traffic": 399, "referring_domains": null },
    "opportunities": [
      {
            "keyword": "third party risk management",
            "position": null,
            "volume": 3600,
            "kd": 46,
            "owner": "panorays",
            "moment": "Third Party Risk Management Delays",
            "move": "Widest gap in the set: it names a buying moment outright and Stern is absent.",
            "delta": null
      },
      {
            "keyword": "tprm",
            "position": null,
            "volume": 3600,
            "kd": 46,
            "owner": "panorays",
            "moment": "Third Party Risk Management Delays",
            "move": "Acronym form of the above. Cover both on one page rather than splitting authority.",
            "delta": null
      },
      {
            "keyword": "cyber attack incident response plan",
            "position": null,
            "volume": 3600,
            "kd": 52,
            "owner": "panorays",
            "moment": "Peer Breach",
            "move": "Highest-difficulty of the shortlist, but squarely on a moment Stern owns in practice.",
            "delta": null
      },
      {
            "keyword": "vendor risk management",
            "position": null,
            "volume": 2400,
            "kd": 31,
            "owner": "panorays",
            "moment": "Third Party Risk Management Delays",
            "move": "KD 31, softest of the TPRM cluster. The realistic first target.",
            "delta": null
      },
      {
            "keyword": "security compliance",
            "position": null,
            "volume": 2400,
            "kd": 29,
            "owner": "panorays",
            "moment": "Upcoming Compliance Deadline",
            "move": "Broad but on-service at KD 29. A pillar page the narrower terms link into.",
            "delta": null
      },
      {
            "keyword": "supply chain risk",
            "position": null,
            "volume": 1900,
            "kd": 39,
            "owner": "panorays",
            "moment": "Third Party Risk Management Delays",
            "move": "Reinforces the TPRM cluster. Sequence after the vendor-risk page lands.",
            "delta": null
      },
      {
            "keyword": "cisa zero trust maturity model",
            "position": 12,
            "volume": 720,
            "kd": 31,
            "owner": "Stern p12",
            "moment": "Upcoming Compliance Deadline",
            "move": "Best near-miss Stern already holds. Deepen the existing page, don't write a new one.",
            "delta": null
      },
      {
            "keyword": "zero trust maturity model",
            "position": 20,
            "volume": 480,
            "kd": 25,
            "owner": "Stern p20",
            "moment": "Upcoming Compliance Deadline",
            "move": "Same page serves both; fixing one likely moves the other.",
            "delta": null
      },
      {
            "keyword": "authenticated vulnerability scanning",
            "position": 15,
            "volume": 110,
            "kd": 18,
            "owner": "Stern p15",
            "moment": "Penetration Test Findings",
            "move": "KD 18, lowest difficulty here. Technical depth Stern can write from delivery work.",
            "delta": null
      },
      {
            "keyword": "password audit tool",
            "position": 17,
            "volume": 50,
            "kd": 24,
            "owner": "Stern p17",
            "moment": "Penetration Test Findings",
            "move": "Low volume but low effort and on-service.",
            "delta": null
      },
      {
            "keyword": "how to read a soc 2 report",
            "position": 11,
            "volume": 40,
            "kd": 14,
            "owner": "Stern p11",
            "moment": "Failed Audit",
            "move": "One position off page one at KD 14. Cheapest win available.",
            "delta": null
      },
      {
            "keyword": "soc 2 review",
            "position": 15,
            "volume": 30,
            "kd": 23,
            "owner": "Stern p15",
            "moment": "Failed Audit",
            "move": "Pairs with the SOC 2 near-miss; one strengthened page serves both.",
            "delta": null
      }
],
    "keywords": [
      {
            "keyword": "red team cyber security",
            "position": 1,
            "volume": 880,
            "kd": 38,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cmmc level 1",
            "position": 1,
            "volume": 880,
            "kd": 9,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "zero trust maturity model",
            "position": 1,
            "volume": 480,
            "kd": 25,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "blue team cyber security",
            "position": 1,
            "volume": 480,
            "kd": 35,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red team security",
            "position": 1,
            "volume": 260,
            "kd": 47,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cybersecurity red team",
            "position": 1,
            "volume": 260,
            "kd": 47,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red team blue team security",
            "position": 1,
            "volume": 260,
            "kd": 39,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "security teams",
            "position": 1,
            "volume": 210,
            "kd": 16,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cyber red team",
            "position": 1,
            "volume": 210,
            "kd": 47,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red team vs blue",
            "position": 1,
            "volume": 210,
            "kd": 19,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "what is a red team in cyber security",
            "position": 1,
            "volume": 210,
            "kd": 45,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "blue vs red team",
            "position": 1,
            "volume": 170,
            "kd": 26,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cyber security red team",
            "position": 1,
            "volume": 170,
            "kd": 39,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red team blue team cybersecurity",
            "position": 1,
            "volume": 170,
            "kd": 43,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "how much does cmmc certification cost",
            "position": 1,
            "volume": 140,
            "kd": 21,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red teaming security",
            "position": 1,
            "volume": 110,
            "kd": 40,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "blue team red team security",
            "position": 1,
            "volume": 110,
            "kd": 36,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "stern security",
            "position": 1,
            "volume": 90,
            "kd": 24,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "purple teaming cyber security",
            "position": 1,
            "volume": 90,
            "kd": 30,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red and blue teaming",
            "position": 1,
            "volume": 90,
            "kd": 34,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "purple team cyber",
            "position": 1,
            "volume": 90,
            "kd": 36,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cybersecurity teams",
            "position": 1,
            "volume": 90,
            "kd": 17,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "purple team in cyber security",
            "position": 1,
            "volume": 90,
            "kd": 33,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "what is blue teaming",
            "position": 1,
            "volume": 90,
            "kd": 34,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "security red team vs blue team",
            "position": 1,
            "volume": 90,
            "kd": 24,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "purple teams",
            "position": 1,
            "volume": 90,
            "kd": 33,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "blue team vs red team cyber security",
            "position": 1,
            "volume": 90,
            "kd": 18,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "security red team",
            "position": 1,
            "volume": 70,
            "kd": 35,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red blue team security",
            "position": 1,
            "volume": 70,
            "kd": 38,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "what is red team and blue team",
            "position": 1,
            "volume": 70,
            "kd": 42,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cybersecurity purple team",
            "position": 1,
            "volume": 70,
            "kd": 33,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red teaming vs blue teaming",
            "position": 1,
            "volume": 70,
            "kd": 24,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cyber security raleigh nc",
            "position": 1,
            "volume": 50,
            "kd": 15,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cybersecurity red teaming",
            "position": 1,
            "volume": 50,
            "kd": 36,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cost of cmmc certification",
            "position": 1,
            "volume": 50,
            "kd": 14,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "what is a purple team in cyber security",
            "position": 1,
            "volume": 50,
            "kd": 34,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cyber security purple team",
            "position": 1,
            "volume": 50,
            "kd": 33,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cmmc level 1 services honolulu",
            "position": 1,
            "volume": 50,
            "kd": 0,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "blue teaming vs red teaming",
            "position": 1,
            "volume": 50,
            "kd": 23,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "blue team cyber",
            "position": 1,
            "volume": 40,
            "kd": 37,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red and blue teams",
            "position": 1,
            "volume": 40,
            "kd": 22,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red team or blue team",
            "position": 1,
            "volume": 40,
            "kd": 21,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red and blue team in cyber security",
            "position": 1,
            "volume": 40,
            "kd": 33,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "purple team vs red team",
            "position": 1,
            "volume": 40,
            "kd": 11,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cyber red teaming",
            "position": 1,
            "volume": 40,
            "kd": 36,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red and blue team cyber security",
            "position": 1,
            "volume": 40,
            "kd": 25,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "blue team red team cyber security",
            "position": 1,
            "volume": 40,
            "kd": 41,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red team in cybersecurity",
            "position": 1,
            "volume": 40,
            "kd": 50,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cybersecurity red team blue team",
            "position": 1,
            "volume": 30,
            "kd": 41,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "res teaming",
            "position": 1,
            "volume": 30,
            "kd": 41,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red team blue team purple team cyber security",
            "position": 1,
            "volume": 30,
            "kd": 19,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red team vs blue team in cyber security",
            "position": 1,
            "volume": 30,
            "kd": 19,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red team cybersecurity",
            "position": 2,
            "volume": 320,
            "kd": 41,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red team vs blue team vs purple team",
            "position": 2,
            "volume": 170,
            "kd": 15,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cybersecurity blue team",
            "position": 2,
            "volume": 170,
            "kd": 33,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "blue team cybersecurity",
            "position": 2,
            "volume": 110,
            "kd": 31,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "blue team security",
            "position": 2,
            "volume": 90,
            "kd": 28,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "stern security",
            "position": 2,
            "volume": 90,
            "kd": 24,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "stern security",
            "position": 2,
            "volume": 90,
            "kd": 24,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "security red team blue team",
            "position": 2,
            "volume": 90,
            "kd": 27,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "how to get cmmc level 1 certification",
            "position": 2,
            "volume": 50,
            "kd": 1,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red blue security",
            "position": 2,
            "volume": 50,
            "kd": 26,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cmmc level 1 cost",
            "position": 2,
            "volume": 40,
            "kd": 12,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red blue and purple team in cyber security",
            "position": 2,
            "volume": 40,
            "kd": 16,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "zero trust maturity",
            "position": 2,
            "volume": 30,
            "kd": 33,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cmmc 1",
            "position": 2,
            "volume": 30,
            "kd": 24,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cmmc level 1 self assessment",
            "position": 3,
            "volume": 210,
            "kd": 18,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cisa zero trust maturity model 2.0",
            "position": 3,
            "volume": 210,
            "kd": 35,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cmmc 1.0",
            "position": 3,
            "volume": 110,
            "kd": 19,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red team vs blue team cybersecurity",
            "position": 3,
            "volume": 50,
            "kd": 26,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red vs blue red team",
            "position": 3,
            "volume": 50,
            "kd": 48,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cyber security red team vs blue team",
            "position": 3,
            "volume": 50,
            "kd": 25,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "blue team and red team in cybersecurity",
            "position": 3,
            "volume": 40,
            "kd": 32,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red teaming cyber security",
            "position": 4,
            "volume": 320,
            "kd": 30,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "phishing tips",
            "position": 4,
            "volume": 70,
            "kd": 59,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cyber blue team",
            "position": 4,
            "volume": 50,
            "kd": 25,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "authenticated vs unauthenticated scans",
            "position": 4,
            "volume": 40,
            "kd": 4,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cyber security blue team",
            "position": 5,
            "volume": 90,
            "kd": 26,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "what is red team",
            "position": 6,
            "volume": 260,
            "kd": 43,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "blue teaming cyber security",
            "position": 7,
            "volume": 50,
            "kd": 31,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red team blue team cyber security",
            "position": 7,
            "volume": 40,
            "kd": 36,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "authenticated scan",
            "position": 8,
            "volume": 50,
            "kd": 7,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "authenticated scans",
            "position": 9,
            "volume": 30,
            "kd": 5,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "unauthenticated",
            "position": 10,
            "volume": 480,
            "kd": 19,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "stern security",
            "position": 10,
            "volume": 90,
            "kd": 24,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "soc review",
            "position": 10,
            "volume": 90,
            "kd": 9,
            "move": null,
            "rivals": "ncontracts"
      },
      {
            "keyword": "cisa v2",
            "position": 10,
            "volume": 50,
            "kd": 26,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "soc 1 review",
            "position": 10,
            "volume": 50,
            "kd": 11,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "password auditing tool",
            "position": 10,
            "volume": 40,
            "kd": 12,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "authenticated scans",
            "position": 10,
            "volume": 30,
            "kd": 5,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "how to read a soc 2 report",
            "position": 11,
            "volume": 40,
            "kd": 14,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cisa zero trust maturity model",
            "position": 12,
            "volume": 720,
            "kd": 31,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "authenticated vulnerability scanning",
            "position": 15,
            "volume": 110,
            "kd": 18,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "soc 2 review",
            "position": 15,
            "volume": 30,
            "kd": 23,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "password audit tool",
            "position": 17,
            "volume": 50,
            "kd": 24,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "zero trust maturity model",
            "position": 20,
            "volume": 480,
            "kd": 25,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "soc report meaning",
            "position": 21,
            "volume": 880,
            "kd": 21,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "healthcare data breaches 2025",
            "position": 21,
            "volume": 110,
            "kd": 47,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "10 ways to stay safe online",
            "position": 21,
            "volume": 40,
            "kd": 41,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "how to get a soc report",
            "position": 22,
            "volume": 40,
            "kd": 18,
            "move": null,
            "rivals": "ncontracts"
      },
      {
            "keyword": "evaluate the cybersecurity company traliant on best platforms for cisos",
            "position": 23,
            "volume": 40,
            "kd": 12,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "password auditor",
            "position": 23,
            "volume": 40,
            "kd": 12,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "third security",
            "position": 24,
            "volume": 210,
            "kd": 27,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "what does a soc 2 report cover",
            "position": 24,
            "volume": 30,
            "kd": 34,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "vulnerability disclosure",
            "position": 25,
            "volume": 140,
            "kd": 46,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "moveit 2024 data breach summary affected organizations",
            "position": 25,
            "volume": 140,
            "kd": 27,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "soc examination",
            "position": 27,
            "volume": 90,
            "kd": 11,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "sternum security",
            "position": 27,
            "volume": 30,
            "kd": 9,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "how can you stay safe online",
            "position": 28,
            "volume": 320,
            "kd": 45,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "how can you stay safe online",
            "position": 29,
            "volume": 320,
            "kd": 45,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "netsh wlan show profiles",
            "position": 32,
            "volume": 210,
            "kd": 27,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "password audit",
            "position": 32,
            "volume": 70,
            "kd": 18,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cisa zero trust maturity model v2.0",
            "position": 32,
            "volume": 70,
            "kd": 34,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "are soc 2 reports public",
            "position": 32,
            "volume": 40,
            "kd": 23,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "treeline security",
            "position": 33,
            "volume": 140,
            "kd": 24,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "soc compliance report",
            "position": 33,
            "volume": 90,
            "kd": 36,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "nehemiah security",
            "position": 33,
            "volume": 40,
            "kd": 2,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cisa zero trust maturity model 2.0",
            "position": 34,
            "volume": 210,
            "kd": 35,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "soc 1 report review checklist",
            "position": 34,
            "volume": 50,
            "kd": 11,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "leviathan security",
            "position": 35,
            "volume": 90,
            "kd": 28,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "ransomware demo",
            "position": 35,
            "volume": 40,
            "kd": 6,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "sock report",
            "position": 36,
            "volume": 110,
            "kd": 17,
            "move": null,
            "rivals": "ncontracts"
      },
      {
            "keyword": "leviathan security group",
            "position": 36,
            "volume": 110,
            "kd": 23,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cisa zero trust framework",
            "position": 36,
            "volume": 30,
            "kd": 39,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "tiro security",
            "position": 37,
            "volume": 40,
            "kd": 18,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "what is a soc report in audit",
            "position": 38,
            "volume": 90,
            "kd": 15,
            "move": null,
            "rivals": "ncontracts"
      },
      {
            "keyword": "what is a soc audit report",
            "position": 38,
            "volume": 70,
            "kd": 20,
            "move": null,
            "rivals": "ncontracts"
      },
      {
            "keyword": "zelvin security",
            "position": 38,
            "volume": 70,
            "kd": 16,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "vendor risk management maturity model",
            "position": 38,
            "volume": 40,
            "kd": 13,
            "move": null,
            "rivals": "panorays"
      },
      {
            "keyword": "what is soc report used for",
            "position": 39,
            "volume": 40,
            "kd": 15,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cisa zero trust framework",
            "position": 39,
            "volume": 30,
            "kd": 39,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "two factor icloud",
            "position": 41,
            "volume": 140,
            "kd": 26,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "step security",
            "position": 41,
            "volume": 110,
            "kd": 55,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "nbt-ns",
            "position": 41,
            "volume": 90,
            "kd": 17,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "what is a soc 2 report",
            "position": 42,
            "volume": 480,
            "kd": 44,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "virtual chief information security officer services",
            "position": 42,
            "volume": 70,
            "kd": 7,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "email with 2fa",
            "position": 43,
            "volume": 170,
            "kd": 24,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "ways to stay safe online",
            "position": 44,
            "volume": 140,
            "kd": 49,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red teaming vs blue teaming vs purple teaming",
            "position": 45,
            "volume": 40,
            "kd": 12,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "how do i stay safe online",
            "position": 46,
            "volume": 260,
            "kd": 48,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "2 factor authentication email",
            "position": 47,
            "volume": 210,
            "kd": 62,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "soc 1 report review checklist",
            "position": 47,
            "volume": 50,
            "kd": 11,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "what is a soc report used for",
            "position": 47,
            "volume": 40,
            "kd": 16,
            "move": null,
            "rivals": "ncontracts"
      },
      {
            "keyword": "analytics of risk from cyber",
            "position": 47,
            "volume": 40,
            "kd": 19,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red team blue team purple team cyber security",
            "position": 49,
            "volume": 30,
            "kd": 19,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "what is a soc 2 report used for",
            "position": 49,
            "volume": 30,
            "kd": 39,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red team vs blue team vs purple team",
            "position": 50,
            "volume": 170,
            "kd": 15,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "locky ransomware",
            "position": 50,
            "volume": 140,
            "kd": 26,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red team blue team purple team",
            "position": 50,
            "volume": 70,
            "kd": 12,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "vulnerability reporting",
            "position": 50,
            "volume": 50,
            "kd": 39,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "star asset security",
            "position": 51,
            "volume": 170,
            "kd": 8,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "email with 2 factor authentication",
            "position": 51,
            "volume": 50,
            "kd": 39,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "https://ocrportal.hhs.gov/ocr/breach/breach_report.jsf",
            "position": 51,
            "volume": 40,
            "kd": 32,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "are soc 1 reports public",
            "position": 52,
            "volume": 50,
            "kd": 13,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "security audit companies",
            "position": 53,
            "volume": 90,
            "kd": 21,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cisa zero trust",
            "position": 54,
            "volume": 90,
            "kd": 40,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cyber risk quantification service",
            "position": 56,
            "volume": 50,
            "kd": 0,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "security risk management companies",
            "position": 57,
            "volume": 70,
            "kd": 39,
            "move": null,
            "rivals": "panorays"
      },
      {
            "keyword": "cyber risk quantification tool",
            "position": 57,
            "volume": 70,
            "kd": 26,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red team purple team",
            "position": 57,
            "volume": 40,
            "kd": 10,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red team vs purple team",
            "position": 58,
            "volume": 40,
            "kd": 25,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "two factor authentication for email",
            "position": 60,
            "volume": 70,
            "kd": 73,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "adaptive security employee risk dashboards for cisos",
            "position": 60,
            "volume": 50,
            "kd": 13,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "secunia",
            "position": 61,
            "volume": 210,
            "kd": 23,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "security phase",
            "position": 62,
            "volume": 40,
            "kd": 15,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red blue and purple team in cyber security",
            "position": 62,
            "volume": 40,
            "kd": 16,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "star asset security llc",
            "position": 63,
            "volume": 110,
            "kd": 10,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "how cyber risk can be quantified",
            "position": 63,
            "volume": 30,
            "kd": 18,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "vulnerability scanning vs penetration testing",
            "position": 64,
            "volume": 480,
            "kd": 23,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "what is a soc report used for",
            "position": 64,
            "volume": 40,
            "kd": 16,
            "move": null,
            "rivals": "ncontracts"
      },
      {
            "keyword": "penetration test vs vulnerability scan",
            "position": 66,
            "volume": 210,
            "kd": 19,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "best cyber risk quantification tools",
            "position": 66,
            "volume": 50,
            "kd": 25,
            "move": null,
            "rivals": "ncontracts"
      },
      {
            "keyword": "pen test vs vulnerability scan",
            "position": 67,
            "volume": 170,
            "kd": 28,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "zero trust maturity",
            "position": 67,
            "volume": 30,
            "kd": 33,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "cyber risk quantification software",
            "position": 68,
            "volume": 110,
            "kd": 21,
            "move": null,
            "rivals": "ncontracts"
      },
      {
            "keyword": "cyber security red team blue team",
            "position": 68,
            "volume": 90,
            "kd": 33,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "best cyber risk quantification services available",
            "position": 68,
            "volume": 50,
            "kd": 15,
            "move": null,
            "rivals": "panorays"
      },
      {
            "keyword": "penetration testing vs vulnerability scanning",
            "position": 69,
            "volume": 720,
            "kd": 27,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "penetration test vs vulnerability scan",
            "position": 69,
            "volume": 210,
            "kd": 19,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "penetration testing streator",
            "position": 69,
            "volume": 50,
            "kd": 11,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "top companies for quantifying cyber risk",
            "position": 70,
            "volume": 70,
            "kd": 12,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "pen test vs vulnerability scan",
            "position": 71,
            "volume": 170,
            "kd": 28,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "pen testing vs vulnerability scanning",
            "position": 71,
            "volume": 110,
            "kd": 23,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "pen test vs vulnerability test",
            "position": 71,
            "volume": 70,
            "kd": 31,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "vulnerability scan vs penetration test",
            "position": 73,
            "volume": 110,
            "kd": 26,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "top companies for quantifying cyber risk",
            "position": 73,
            "volume": 70,
            "kd": 12,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "what is a purple team",
            "position": 75,
            "volume": 50,
            "kd": 25,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red team vs blue team in cyber security",
            "position": 75,
            "volume": 30,
            "kd": 19,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "vulnerability scanning and penetration testing",
            "position": 77,
            "volume": 170,
            "kd": 32,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "penetration testing vulnerability scanning",
            "position": 77,
            "volume": 70,
            "kd": 30,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "difference between vulnerability scanning and penetration testing",
            "position": 78,
            "volume": 170,
            "kd": 20,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "what is cyber risk quantification",
            "position": 81,
            "volume": 70,
            "kd": 13,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "there are 7 zero trust pillars. which pillar is central",
            "position": 82,
            "volume": 50,
            "kd": 13,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "vendor risk scoring",
            "position": 82,
            "volume": 50,
            "kd": 15,
            "move": null,
            "rivals": "panorays, ncontracts"
      },
      {
            "keyword": "vulnerability vs penetration testing",
            "position": 83,
            "volume": 70,
            "kd": 30,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "what is red team and blue team in cyber security",
            "position": 86,
            "volume": 50,
            "kd": 40,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "security.com",
            "position": 87,
            "volume": 260,
            "kd": 95,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "evaluate the cybersecurity company traliant on human risk quantification tools",
            "position": 87,
            "volume": 140,
            "kd": 12,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "vulnerability scans and penetration testing",
            "position": 87,
            "volume": 30,
            "kd": 28,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "what is red team and blue team in cyber security",
            "position": 88,
            "volume": 50,
            "kd": 40,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "red and blue team in cyber security",
            "position": 89,
            "volume": 40,
            "kd": 33,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "vulnerability scans and penetration testing",
            "position": 90,
            "volume": 30,
            "kd": 28,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "what is an soc2 report",
            "position": 91,
            "volume": 30,
            "kd": 41,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "penetration testing streator",
            "position": 94,
            "volume": 50,
            "kd": 11,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "what is purple team in cyber security",
            "position": 95,
            "volume": 90,
            "kd": 31,
            "move": null,
            "rivals": ""
      },
      {
            "keyword": "what is a purple team in cyber security",
            "position": 98,
            "volume": 50,
            "kd": 34,
            "move": null,
            "rivals": ""
      }
]
  },
  "notes": "First run, so the movement column is empty by design.\n\nSemrush's own \"Previous position\" field is unusable here: 215 of 218 rows report it as identical to the current position. Movement is therefore computed by this tool instead, by diffing each keyword against the position stored in the previous run. It populates from run 2 onward and will be genuinely ours rather than Semrush's.\n\nWhere Stern stands: 206 ranking keywords after excluding a consumer \"show wifi password windows\" cluster left over from an old post, which brought traffic that will never buy. 90 of those sit on page one, only 6 in the 11-20 band \u2014 so the near-miss pool is small and worth working through completely rather than sampling.\n\nThe clearest gap: panorays.com owns the third-party-risk vocabulary outright \u2014 TPRM, vendor risk management, supply chain risk \u2014 and Stern ranks for none of it, despite Third Party Risk Management Delays being one of the eight buying moments. That is the widest distance between what Stern sells and what Stern is findable for.\n\nOnly 13 of Stern's 206 keywords have any rival ranking alongside them, which is why the Missing and Weak gap tabs came back empty: both require every selected rival to rank on the same keyword, and these three share almost no footprint with Stern. Untapped is the correct tab for this competitor set.\n\nAuthority score and referring domains are unset \u2014 supplied as PDF only, which this run did not parse. Re-export Domain Overview as CSV to fill those two tiles.",
  "history": {
    "runs": [
      { "date": "2026-07-27",
        "kpis": { "authority": null, "keywords": 206, "traffic": 399, "referring_domains": null },
        "positions": {"red team cyber security": 1, "cmmc level 1": 1, "zero trust maturity model": 20, "blue team cyber security": 1, "red team security": 1, "cybersecurity red team": 1, "red team blue team security": 1, "security teams": 1, "cyber red team": 1, "red team vs blue": 1, "what is a red team in cyber security": 1, "blue vs red team": 1, "cyber security red team": 1, "red team blue team cybersecurity": 1, "how much does cmmc certification cost": 1, "red teaming security": 1, "blue team red team security": 1, "stern security": 10, "purple teaming cyber security": 1, "red and blue teaming": 1, "purple team cyber": 1, "cybersecurity teams": 1, "purple team in cyber security": 1, "what is blue teaming": 1, "security red team vs blue team": 1, "purple teams": 1, "blue team vs red team cyber security": 1, "security red team": 1, "red blue team security": 1, "what is red team and blue team": 1, "cybersecurity purple team": 1, "red teaming vs blue teaming": 1, "cyber security raleigh nc": 1, "cybersecurity red teaming": 1, "cost of cmmc certification": 1, "what is a purple team in cyber security": 98, "cyber security purple team": 1, "cmmc level 1 services honolulu": 1, "blue teaming vs red teaming": 1, "blue team cyber": 1, "red and blue teams": 1, "red team or blue team": 1, "red and blue team in cyber security": 89, "purple team vs red team": 1, "cyber red teaming": 1, "red and blue team cyber security": 1, "blue team red team cyber security": 1, "red team in cybersecurity": 1, "cybersecurity red team blue team": 1, "res teaming": 1, "red team blue team purple team cyber security": 49, "red team vs blue team in cyber security": 75, "red team cybersecurity": 2, "red team vs blue team vs purple team": 50, "cybersecurity blue team": 2, "blue team cybersecurity": 2, "blue team security": 2, "security red team blue team": 2, "how to get cmmc level 1 certification": 2, "red blue security": 2, "cmmc level 1 cost": 2, "red blue and purple team in cyber security": 62, "zero trust maturity": 67, "cmmc 1": 2, "cmmc level 1 self assessment": 3, "cisa zero trust maturity model 2.0": 34, "cmmc 1.0": 3, "red team vs blue team cybersecurity": 3, "red vs blue red team": 3, "cyber security red team vs blue team": 3, "blue team and red team in cybersecurity": 3, "red teaming cyber security": 4, "phishing tips": 4, "cyber blue team": 4, "authenticated vs unauthenticated scans": 4, "cyber security blue team": 5, "what is red team": 6, "blue teaming cyber security": 7, "red team blue team cyber security": 7, "authenticated scan": 8, "authenticated scans": 10, "unauthenticated": 10, "soc review": 10, "cisa v2": 10, "soc 1 review": 10, "password auditing tool": 10, "how to read a soc 2 report": 11, "cisa zero trust maturity model": 12, "authenticated vulnerability scanning": 15, "soc 2 review": 15, "password audit tool": 17, "soc report meaning": 21, "healthcare data breaches 2025": 21, "10 ways to stay safe online": 21, "how to get a soc report": 22, "evaluate the cybersecurity company traliant on best platforms for cisos": 23, "password auditor": 23, "third security": 24, "what does a soc 2 report cover": 24, "vulnerability disclosure": 25, "moveit 2024 data breach summary affected organizations": 25, "soc examination": 27, "sternum security": 27, "how can you stay safe online": 29, "netsh wlan show profiles": 32, "password audit": 32, "cisa zero trust maturity model v2.0": 32, "are soc 2 reports public": 32, "treeline security": 33, "soc compliance report": 33, "nehemiah security": 33, "soc 1 report review checklist": 47, "leviathan security": 35, "ransomware demo": 35, "sock report": 36, "leviathan security group": 36, "cisa zero trust framework": 39, "tiro security": 37, "what is a soc report in audit": 38, "what is a soc audit report": 38, "zelvin security": 38, "vendor risk management maturity model": 38, "what is soc report used for": 39, "two factor icloud": 41, "step security": 41, "nbt-ns": 41, "what is a soc 2 report": 42, "virtual chief information security officer services": 42, "email with 2fa": 43, "ways to stay safe online": 44, "red teaming vs blue teaming vs purple teaming": 45, "how do i stay safe online": 46, "2 factor authentication email": 47, "what is a soc report used for": 64, "analytics of risk from cyber": 47, "what is a soc 2 report used for": 49, "locky ransomware": 50, "red team blue team purple team": 50, "vulnerability reporting": 50, "star asset security": 51, "email with 2 factor authentication": 51, "https://ocrportal.hhs.gov/ocr/breach/breach_report.jsf": 51, "are soc 1 reports public": 52, "security audit companies": 53, "cisa zero trust": 54, "cyber risk quantification service": 56, "security risk management companies": 57, "cyber risk quantification tool": 57, "red team purple team": 57, "red team vs purple team": 58, "two factor authentication for email": 60, "adaptive security employee risk dashboards for cisos": 60, "secunia": 61, "security phase": 62, "star asset security llc": 63, "how cyber risk can be quantified": 63, "vulnerability scanning vs penetration testing": 64, "penetration test vs vulnerability scan": 69, "best cyber risk quantification tools": 66, "pen test vs vulnerability scan": 71, "cyber risk quantification software": 68, "cyber security red team blue team": 68, "best cyber risk quantification services available": 68, "penetration testing vs vulnerability scanning": 69, "penetration testing streator": 94, "top companies for quantifying cyber risk": 73, "pen testing vs vulnerability scanning": 71, "pen test vs vulnerability test": 71, "vulnerability scan vs penetration test": 73, "what is a purple team": 75, "vulnerability scanning and penetration testing": 77, "penetration testing vulnerability scanning": 77, "difference between vulnerability scanning and penetration testing": 78, "what is cyber risk quantification": 81, "there are 7 zero trust pillars. which pillar is central": 82, "vendor risk scoring": 82, "vulnerability vs penetration testing": 83, "what is red team and blue team in cyber security": 88, "security.com": 87, "evaluate the cybersecurity company traliant on human risk quantification tools": 87, "vulnerability scans and penetration testing": 90, "what is an soc2 report": 91, "what is purple team in cyber security": 95} }
    ]
  }
};
