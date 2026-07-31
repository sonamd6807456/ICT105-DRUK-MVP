# Smart Campus Event Hub Risk Register

## Rating Rule

- **Severity:** High = significant privacy, security, or system failure; Medium = moderate impact on usability or trust; Low = minor inconvenience with limited impact.
- **Likelihood:** High = likely without controls; Medium = reasonably possible; Low = unlikely during classroom prototype testing.

| Risk ID | Category | Risk Description | Affected Feature / Requirement | Severity | Likelihood | Mitigation Action | Owner | GitHub Evidence | Status |
|---|---|---|---|---|---|---|---|---|---|
| R-01 | Privacy | Users may submit personal information such as student ID, phone number, or email address when registering for events or providing feedback. | Event Registration, User Feedback | High | Medium | Display a privacy notice, collect only necessary information, validate user input, and avoid displaying personal information publicly. | Project Lead | `prototype/register.html`; `docs/legal-ethical-checklist.md`; `data/` | In Progress |
| R-02 | Security | Unauthorized users may gain administrator access and create, edit, or delete campus events because the prototype uses demo authentication only. | Admin Dashboard, Event Management | High | High | Implement role-based access control, secure authentication, input validation, and proper session management before production deployment. | Development Lead | `prototype/admin.html`; `prototype/js/auth.js` | Open |
| R-03 | Data Quality | Event information may become outdated, duplicated, or contain incorrect dates, times, or locations, causing confusion among students. | Event Listings, Search Events | Medium | High | Allow administrators to regularly update events, validate required fields, remove expired events, and prevent duplicate records. | Data Manager | `prototype/events.html`; `prototype/js/events.js` | In Progress |
| R-04 | System Reliability | Broken links, missing pages, or navigation errors may prevent users from viewing or registering for events. | Navigation, Landing Page, Prototype | Medium | Medium | Test all navigation links, verify GitHub Pages deployment, and perform regular usability testing before submission. | Development Lead | `landing-page/`; `prototype/` | In Progress |
| R-05 | Legal & Ethical | Event organizers may publish inaccurate, misleading, or inappropriate event information that could confuse users or violate university policies. | Event Creation | High | Medium | Allow only authorized administrators to publish events, review event information before publishing, and provide clear reporting procedures. | Project Manager | `docs/legal-ethical-checklist.md`; `prototype/admin.html` | Open |
| R-06 | User Experience | Students may find it difficult to search, filter, or register for events because of unclear interface design. | Search Events, Event Registration | Medium | Medium | Improve interface design, simplify navigation, gather user feedback, and conduct usability testing with students. | UI/UX Designer | `prototype/index.html`; `docs/user-testing-results.md` | In Progress |

## Overall Risk Decision

**Continue with mitigation for classroom prototyping; production deployment is not approved.** Smart Campus Event Hub can proceed for classroom demonstration because it uses prototype data and does not connect to a live production database. Before any real deployment, the team should implement secure administrator authentication, role-based access control, data validation, privacy protection, regular event moderation, and comprehensive user testing to reduce identified risks.
