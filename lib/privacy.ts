// Version of the privacy policy (= its "last updated" date in app/privacy/page.tsx).
// Users whose recorded version differs are asked to accept it again (PrivacyGate).
// Change it only when the policy changes in a way users must re-read.
export const PRIVACY_POLICY_VERSION = "2026-11-08";

// How the acceptance was given (User.privacyPolicySource): "signin-notice" (first Google
// sign-in, under the notice of the login page) or "reaccept" (the update dialog).
export type PrivacySource = "signin-notice" | "reaccept";

export function privacyRecord(source: PrivacySource) {
    return {
        privacyPolicyVersion: PRIVACY_POLICY_VERSION,
        privacyPolicyAt: new Date(),
        privacyPolicySource: source,
    };
}
