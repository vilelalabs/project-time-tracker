import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { PRIVACY_POLICY_VERSION, privacyRecord } from "@/lib/privacy";

// GET: has the signed-in user accepted the current privacy policy?
// POST: records the acceptance given in the update dialog (PrivacyGate).
export const dynamic = "force-dynamic";

async function currentUser() {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    return email ? prisma.user.findUnique({ where: { email } }) : null;
}

export async function GET() {
    const user = await currentUser();
    if (!user) return NextResponse.json({ message: "Sign in first." }, { status: 401 });
    return NextResponse.json({
        version: PRIVACY_POLICY_VERSION,
        accepted: user.privacyPolicyVersion === PRIVACY_POLICY_VERSION,
    });
}

export async function POST() {
    const user = await currentUser();
    if (!user) return NextResponse.json({ message: "Sign in first." }, { status: 401 });
    await prisma.user.update({ where: { id: user.id }, data: privacyRecord("reaccept") });
    return NextResponse.json({ version: PRIVACY_POLICY_VERSION, accepted: true });
}
