# Aerodrome legal and policy review pack

Prepared October 15, 2026 for MIN-2441. These are first drafts for operator and qualified legal review, not an assertion of legal compliance or effective public terms. No jurisdiction or legal entity has been assumed. All drafts are excluded from the site's build and have `published: false`.

## Intended public references

| Draft | Intended URL after approval |
| --- | --- |
| [Participation terms](participation-terms.md) | /aerodrome/terms/ |
| [Privacy notice](privacy-notice.md) | /aerodrome/privacy/ |
| [Community rules](community-rules.md) | /aerodrome/community/ |
| [Credits policy](community-credits.md) | /aerodrome/credits-policy/ |

These URLs are reserved proposals, not working policy links. After review, move approved documents into a normal Jekyll page directory, remove draft markers, set fixed effective dates and publish them in a separate release. Then link the footer, Aerodrome sign-in/posting and upload flows and Google OAuth configuration to those actual public pages. Do not point OAuth at an unpublished draft.

## Existing-policy reconciliation

Existing `privacy/index.html` and `terms/index.html` remain untouched. They contain generic statements that must be fact-checked and reconciled before these supplements become effective: an all-media perpetual user-content licence, broad automation prohibitions, unconfirmed advertising/payment/data practices, blanket age assertions, unknown governing jurisdiction/arbitration, conflicting immediate-vs-30-day changes language, and dates generated on every build. Do not layer narrower contribution terms on top and leave users guessing which licence applies. Recommend explicit Aerodrome scope/precedence in both places and fixed dates when the final text is ready. Existing mailboxes (`privacy@`, `legal@`, `contact@airshipgames.com`) are not evidence that those inboxes work; owner must verify.

## Observed implementation versus future promises

Inspected Aerodrome main at 491839aabf403d60915c4d538cab35c534e8ba9c: Cloudflare Worker/D1, Google sign-in (`openid email profile`), 30-day session lifetime, discussions, proposals, voting, reports and analytics. `docs/analytics.md` describes random per-tab IDs and hostnames, not a guarantee that all event data is anonymous. No screenshot-upload schema, credits UI, MCP service, AI provider, automated retention purge or account-deletion route was identified in the inspected tree. D15 explicitly defers AI. This is source review, not a production traffic or vendor configuration audit.

The new product direction is community-led and reaction-first. Planned screenshot/AI/MCP/credits paragraphs are visibly conditional; remove or finalize them against the release actually being launched. An operator should not publish a notice promising an absent deletion control, retention purge or provider training restriction.

## Operator and counsel decisions before effectiveness

- Legal operator name, address, country/state, verified public contact and intended launch markets.
- Age policy for community participation and each game's audience, including whether children are likely to participate; minors' contract/licence issues and parental processes. A 13+ label alone is insufficient.
- Provider inventory, hosting/AI locations, log/export retention, AI training/retention settings and contracts; applicable regional legal bases, rights and transfer requirements.
- Adoption and implementation of retention periods, deletion/anonymization semantics, backup and derived-content removal, AI/MCP export lifecycle and any exceptions.
- Scope and duration of contribution licence, existing implementations after removal, third-party material and separate code/art contribution process. Credits are recognition; commercial participation requires a separate agreement.
- Moderator, realistic report turnaround, appeals route and delegated AI powers. Criticism is not abuse.
- Vote-led prioritization and operator exception process; no promise to ship a feature merely because it ranks first.
- Confirm any analytics opt-out/consent and sale/sharing disclosures actually required and applicable; avoid broad unsupported claims.
- Site-wide legal provisions, especially existing arbitration/liability language, reviewed rather than copied into a new agreement.

## Implementation references (proposed, not deployed)

Before first contribution, show links to Terms, Rules and Privacy with a separate affirmative terms agreement. Store policy version, acceptance time and player identifier; do not collect extra personal data merely to log acceptance. Privacy notice acknowledgement is not consent to every future use. Obtain separate choices where necessary for optional captures or recognition. Keep historical policy versions and require renewed agreement where applicable.

Capture preview: “This image and comment will be public in [game]. Check for private information before posting.” Show the exact final image and submission audience. AI-processing disclosure should name the enabled purpose/providers, not silently hide image analysis in a generic licence. Provide a report route for accidental exposure. Credits use a separate opt-in display-name choice. Future capture and MCP requirements are documented in the Aerodrome product follow-up.

## Sources consulted, October 15, 2026

- US Copyright Office, [What is Copyright?](https://www.copyright.gov/what-is-copyright/) and [permission guidance](https://www.copyright.gov/circs/m10.pdf): original expressive assets need a rights basis. An idea is distinct from the text/art used to express it; no guarantee is made that a feedback licence resolves all claims.
- FTC, [COPPA FAQs](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions) and [current rule materials](https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa): child-directed services and actual knowledge require specific review. The FAQ flags amendments dated April 22, 2025; check the revised rule for operative requirements instead of relying only on historical FAQ wording.
- California AG, [privacy guidance](https://oag.ca.gov/sites/all/files/agweb/pdfs/cybersecurity/making_your_privacy_practices_public.pdf) and [CCPA overview](https://oag.ca.gov/privacy/ccpa): check applicability and truthful practice-specific disclosures. No assumption is made that CCPA applies to this operator.
- Reddit [Rules](https://redditinc.com/policies/reddit-rules) and [Moderator Code of Conduct](https://redditinc.com/policies/moderator-code-of-conduct) informed structure only; these drafts use original wording and are not Reddit policies or an affiliation with Reddit.
